        let difference = first.filter(x =>{
            !second.includes(x)
        } );
        arraySearchs.forEach(Search =>{
            let filter = dbPrincipal__Copia.filter(dato=>{
                let valores= Object.values(dato).toString()
                valores = valores.replace(/\s+/g, '')  
                valores = valores.toUpperCase()
                //console.log(valores)
                if (valores.indexOf(Search,0) > 0 ){
                    return true
                    // console.log(valores)
                }
            })


        })