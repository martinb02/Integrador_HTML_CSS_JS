// pop up

import { productoActivo, setProductoActivo } from "../../main"
import { handleDeleteProducts } from "../services/product"

const buttonCancel= document.getElementById('cancel_button')
buttonCancel.addEventListener('click',()=>{
  closeModal()
})

// funciones abrir y cerrar modal
export const openModal = () =>{
  const modal =document.getElementById('modal-pop-up')
  modal.style.display='flex'
  const buttonDelete = document.getElementById('delete_button')
  if(productoActivo){
    buttonDelete.style.display = 'block'
  }else{
    buttonDelete.style.display = 'none'
  }

  if(productoActivo){
    const nombre = document.getElementById('nombre')
    const imagen = document.getElementById('img')
    const precio = document.getElementById('precio')
    const categories = document.getElementById('categoria')
    
    imagen.value = productoActivo.imagen
    categories.value= productoActivo.categories
    precio.value = productoActivo.precio
    nombre.value = productoActivo.nombre
  }else{

  }
}

export const closeModal = () =>{
  const modal =document.getElementById('modal-pop-up')
  modal.style.display='none'
  setProductoActivo(null)
  resetModal()
}

const resetModal =()=>{
  const nombre = document.getElementById('nombre')
  const imagen = document.getElementById('img')
  const precio = document.getElementById('precio')
  const categories = document.getElementById('categoria')
  
  imagen.value = ''
  categories.value='Seleccione una categoria'
  precio.value = 0
  nombre.value = ''

}

const deleteButton = document.getElementById('delete_button')
deleteButton.addEventListener('click',()=>{
  handleButtonDelete()
})


const handleButtonDelete = () =>{
  handleDeleteProducts()
}