
export const Template__User_Menu__HTLM = `
            <header class="item_info">
                <div>
                    <image id="headIamgen_IMG2323" class="iconoUsuario" alt="imagen de usuario" loading="lazy" src="https://gdjnt238.americas.ad.flextronics.com/flexmdc/serv1/ccl_pagina_gaffette_getImg.ashx?e=1&id=1025007" class="avatar_Aviso"></image>
                </div>
                <div>
                    <div>
                        <span id="HeadInf_Nombre" class="camposKey"> gdjenrio</span>    
                    </div>
                    <div>
                        <span id="HeadInf_Puesto" class="camposValue">Technican</span>    
                    </div>
                </div>
            </header>
            <div class="item_infoText_secundaria">
                <div>
                    <span class="camposKey">Department:</span>
                    <span id="HeadInf_Depto" class="camposValue">Maintenance Preventive</span>
                    
                </div>
                <div>
                    <span class="camposKey">Building:</span>
                    <span id="HeadInf_Nave" class="camposValue">No read</span>
                    
                </div>
            </div>
            <section class="item_opc">
                <span>
                    <a href="../Configuration/Administrator_User.aspx">
                        <i class="fa-solid fa-user"></i>User
                    </a>
                </span>
                <span>
                    <a href="../Configuration/Administrator_User.aspx">
                       <i class="fa-solid fa-location-dot"></i>Add Location
                    </a>
                </span>
                 <span>
                    <a href="../Configuration/Administrator_User.aspx">
                       <i class="fa-solid fa-gear"></i>Add Equipment
                    </a>
                </span>
                <span>
                    <a href="../Configuration/Administrator_User.aspx">
                       <i class="fa-solid fa-chart-simple"></i>Skill Settings
                    </a>
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
