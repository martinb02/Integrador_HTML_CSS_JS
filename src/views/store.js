// store

import { setProductoActivo } from "../../main"
import { handleGetProductLocalStorage } from "../persistence/localstorage"
import { openModal } from "./modal"



export const handleGetProductsToStore =()=>{
    
    const products = handleGetProductLocalStorage()
    handleRenderList(products)
}

export const handleRenderList =(productosIn)=>{

    const burgers = productosIn.filter((el)=> el.categories ==='Hamburguesas')
    const papas = productosIn.filter((el)=> el.categories ==='Papas')
    const gaseosas = productosIn.filter((el)=> el.categories ==='Gaseosas')
    
    const renderProductGroup =(productos, title)=>{
        console.log(productos)
        if (
            productos.length > 0
        ) {
            const productosHTLM = productos.map((producto, index)=>{
                console.log('Rendering product:', producto);
                return`<div class='container_target_item' id='product-${producto.categories}-${index}'>
                    <div>
                        <img src='${producto.imagen}'/>
                    </div>
                    <div>
                        <h2>${producto.nombre}</h2>
                    </div>
                    <div class='target_props'>
                        <p><b>Precio:</b> $ ${producto.precio}</p>
                    </div>
                </div>`
            })
            return `<section class='section_store'>
                <div class='container_title_section'>
                    <h3>${title}</h3>
                </div>
                
                <div class='container_product_store'>
                    ${productosHTLM.join('')}
                </div>

            </section>`
        }else{
            return ''
        }
    }

    const appContainer = document.getElementById('store_container')
    appContainer.innerHTML =`
    ${renderProductGroup(burgers,'Hamburguesas')}
    ${renderProductGroup(papas,'Papas')}
    ${renderProductGroup(gaseosas,'Gaseosas')}
    `
    const addEvents = (productsIn) =>{
        productsIn.forEach((element,index) => {
            const productContainer= document.getElementById(`product-${element.categories}-${index}`)
            productContainer.addEventListener('click',()=>{
                
                setProductoActivo(element)
                openModal()

            })
        });
    }
    addEvents(burgers)
    addEvents(papas)
    addEvents(gaseosas)

}


