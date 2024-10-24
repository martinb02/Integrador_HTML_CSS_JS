import { handleGetProductLocalStorage } from "../persistence/localstorage"
import { handleRenderList } from "../views/store"

export const handleSearchProducByName = () =>{
    const inputHeader=document.getElementById('input_header')
    const products = handleGetProductLocalStorage()

    const result = products.filter((el)=> 
        el.nombre.toLowerCase().includes(inputHeader.value)
    )
    handleRenderList(result)
}