
export const Template__User_Menu__HTLM = `<div class="item_info">
                <div class="item_infoImg">
                 
                    <image id="headIamgen_IMG2323" class="iconoUsuario" alt="imagen de usuario" loading="lazy" src="https://gdjnt238.americas.ad.flextronics.com/flexmdc/serv1/ccl_pagina_gaffette_getImg.ashx?e=1&id=1025007" class="avatar_Aviso"></image>
                   
                </div>
                <div class="item_infoText_primaria">
                    <div class="containder2">
                        <span id="HeadInf_Nombre" class="camposKey"> gdjenrio</span>
                        
                    </div>
                    <div class="containder2">
                        <span id="HeadInf_Puesto" class="camposValue">Technican</span>
                        
                    </div>
                </div>
            </div>
            <div class="item_infoText_secundaria">
                <div class="containder2">
                    <span class="camposKey">Department:</span>
                    <span id="HeadInf_Depto" class="camposValue">Maintenance Preventive</span>
                    
                </div>
                <div class="containder2">
                    <span class="camposKey">Building:</span>
                    <span id="HeadInf_Nave" class="camposValue">No read</span>
                    
                </div>
            </div>
            <section class="item_opc">
                <span class="navLinksItems_item_opc">
                    <span class="navLinksItems_A_icons_item_opc">
                        <i class="fa-solid fa-user"></i>
   
                    </span>
                    <a class="navLinksItems_A_Letter_item_opc" href="../Configuration/Administrator_User.aspx">User</a>
                    
               
                </span>
                <span class="navLinksItems_item_opc">
                    <span class="navLinksItems_A_icons_item_opc">
                        <i class="fa-solid fa-location-dot"></i>
   
                    </span>
                    <span class="navLinksItems_A_Letter_item_opc">Add Location</span>
                </span>
                <span class="navLinksItems_item_opc">
                    <span class="navLinksItems_A_icons_item_opc">
                        <i class="fa-solid fa-gear"></i>
   
                    </span>
   
                    <span class="navLinksItems_A_Letter_item_opc">Add Equipment</span>
                </span>
                <span class="navLinksItems_item_opc">
                    <span class="navLinksItems_A_icons_item_opc">
   
                        <i class="fa-solid fa-chart-simple"></i>
                    </span>
                    <span class="navLinksItems_A_Letter_item_opc">Skill Settings</span>
                </span>
            </section>
             <footer class="item_button">
                <a href="../../Login.aspx" class="item_button_button" style="display: flex;
    justify-content: center;
    align-items: end;"> <i class="fa-solid fa-right-from-bracket"></i>Logout</a>
              
            </footer>
            
            `
export async function Function_Create_UserMenu(template, element) {
    return new Promise((resolve, reject) => {
        if (template === 0) {
            reject(new Error("Templete empy"))
        }
        element.innerHTML = ""
        element.insertAdjacentHTML("afterbegin", template)
        resolve("Exito_UserMenu")
    })

}
