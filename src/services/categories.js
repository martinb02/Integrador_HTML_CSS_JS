// categoria

import { categoriaActiva } from "../../main";
import { handleGetProductLocalStorage } from "../persistence/localstorage"
import { handleRenderList } from "../views/store";

const handlerFilterProductByCategory =(categoryIn)=>{
    const products =handleGetProductLocalStorage()

    switch (categoryIn) {
        case categoriaActiva:
            handleRenderList(products)
            break;
        case 'Todo':
            handleRenderList(products)
            break;
        case 'Hamburguesas':
        case 'Papas':
        case 'Gaseosas':
            const result = products.filter((el)=>el.categories ===categoryIn)
            handleRenderList(result)
        default:
            break;
        case 'mayorPrecio':
            const resultPrecioMayor = products.sort((a,b)=> b.precio - a.precio)
            handleRenderList(resultPrecioMayor)
            break;
        case 'menorPrecio':
            const resultPrecioMenor = products.sort((a,b)=> a.precio - b.precio)
            handleRenderList(resultPrecioMenor)
            break;
    }
}


//render de la vista categoria

export const renderCategories=()=>{
 
    const ulList= document.getElementById('list_filter')
    ulList.innerHTML=`
    <li id='Todo'>Todos los productos</li>
    <li id='Hamburguesas'>Hamburguesas</li>
    <li id='Papas'>Papas</li>
    <li id='Gaseosas'>Gaseosas</li>
    <li id='mayorPrecio'>Mayor Precio</li>
    <li id='menorPrecio'>Menor Precio</li>`
    const liElements=ulList.querySelectorAll('li')
    liElements.forEach((liElement)=>{
        liElement.addEventListener('click',()=>{
            handleClick(liElement)
        })

    })

    const handleClick =(elemento)=>{
        handlerFilterProductByCategory(elemento.id)
        liElements.forEach((el)=>{
            if(el.classList.contains('li_active')){
                el.classList.remove('li_active')
            }else{
                if(elemento === el){
                    el.classList.add('li_active')
                }
            }

        })
    }
}

