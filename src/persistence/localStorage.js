// localstorage

// traer productos a localStorage
export const handleGetProductLocalStorage=()=>{
    const products= JSON.parse(localStorage.getItem('products'))
    if(products){
        return products
    }else{
        return[]
    }
}
// guardar localSotorage

export const setInLocalStorage = (productIn) => {
    
    let productInLocal= handleGetProductLocalStorage()
    const existingIndex= productInLocal.findIndex((productsLocal)=>{
        return productsLocal.id === productIn.id
    })

    if(existingIndex !== -1){
        productInLocal[existingIndex]=productIn
    }else{
        productInLocal.push(productIn)
    }

    localStorage.setItem('products',JSON.stringify(productInLocal))

}




