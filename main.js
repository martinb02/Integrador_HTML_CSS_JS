import { setInLocalStorage } from "./src/persistence/localstorage";
import { renderCategories } from "./src/services/categories";
import { handleSearchProducByName } from "./src/services/searchBar";
import { openModal } from "./src/views/modal";
import { handleGetProductsToStore } from "./src/views/store";
import './style.css'

// aplicacion

export let categoriaActiva = null

export const setCategoriaActiva = (categoriaIn) =>{
  categoriaActiva =categoriaIn
}

export let productoActivo = null

export const setProductoActivo = (productoIn) =>{
  productoActivo = productoIn
}

handleGetProductsToStore()
renderCategories()

// header
const buttonAdd= document.getElementById('button_add_element')
buttonAdd.addEventListener('click',()=>{
  openModal()
})

//button serch 

const buttonSearch= document.getElementById('button_search')
buttonSearch.addEventListener('click',()=>{
  handleSearchProducByName()
})