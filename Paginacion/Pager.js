export class Pager{
    data
    ElementsPerPage
    ActualPage
    Next
    Previus
    Pager_Numbers
    // TotalPages
    Total_Paginas

    constructor(ElementsPerPage, ActualPage, antes, despues,Pager_Numbers){
        this.ElementsPerPage = ElementsPerPage
        this.ActualPage = ActualPage      
        this.Next = despues
        this.Previus = antes
        this.Pager_Numbers = Pager_Numbers
    }
   async  Inicialiced(){
    console.log(this.ActualPage)
        this.ModifyPager()
        this.SliceData(this.ActualPage)
        console.log()
        console.log(this.Previus)
        this.Previus.setAttribute("disabled",true)
        return {"Actual":this.ActualPage, "data":await this.SliceData(this.ActualPage)} 
        // console.log(PagerTabla.TotalPages())
        // console.log(await PagerTabla.SliceData(1))
    }
    // cambiar los elementos por pagina 
    async SetElementoPerPage(value){
        // if (value < 0) value = 0;
        this.ElementsPerPage = value;
        this.ActualPage = 1

       
       console.log( await this.Inicialiced())

        // this.TotalPages = this.TotalPages()

    }
    // aqui podemos imprimir la informacion
    async printData(){
        console.log("eaea")
        console.log(this.data)
    }
    // aqui vamos a modificar la info
    async SetData(data){
        this.data = data
    }

    // generar el slice de la informacion
    async SliceData(page) {
    
        this.ActualPage = page
        
        const corteDeInicio = (this.ActualPage - 1) * this.ElementsPerPage;
        
        const corteDeFinal = corteDeInicio + Number(this.ElementsPerPage);
      
        // let slicedata = this.data.slice(corteDeInicio, corteDeFinal);
        let slicedata = this.data.slice(corteDeInicio, corteDeFinal);
        // // total_Elements += dd.length
        return slicedata
    }
    // obtener el total de paginas
    TotalPages() {
        return Math.ceil(this.data.length / this.ElementsPerPage);
    }

    async Control_Butons(element){
        let ea = true
        let target = element.target
        // let total_pages = this.TotalPages()
        let total_pages = this.TotalPages()
        
        if(target.id === "Next"){
            this.ActualPage +=1
            if(this.ActualPage === total_pages){
                this.Next.setAttribute("disabled",true)
            }else{  
                this.Next.removeAttribute("disabled")
                if(this.ActualPage>1){
                    this.Previus.removeAttribute("disabled");   
                }
            }        
        }
        else{ 
            this.ActualPage -=1
            ea = false
            if (this.ActualPage === 1) {
                this.Previus.setAttribute("disabled", true);
            } else {
                this.Previus.removeAttribute("disabled");
                if(this.ActualPage<total_pages){
                    this.Next.removeAttribute("disabled");    
                }
            }
        }
    
        let dataG = await this.SliceData(this.ActualPage)    
        this.ModifyPager()
        return {"Actual":this.ActualPage, "data":dataG} 
        
    }


    ModifyPager(){
        this.Pager_Numbers.textContent = `${this.ActualPage} of ${this.TotalPages()}`
            // element.textContent = `${actual} of ${total}`
    }

    


}