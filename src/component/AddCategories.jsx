import { useState } from "react"


export const AddCategories = ({onNewCategory}) => {
  
   const [inputValue, setInputValue]= useState('')
  
   const onInputChange = ({target})=>{ // esta funncion la vamos a mandar al onChange cosa que necesitamos para cambiar el valor del value
    
    setInputValue( target.value )
    
    //setInputValue('hola mundo')
   }

   const onSubmit =(event)=>{
        event.preventDefault()
        if( inputValue.trim().length <= 1) return;

        //setCategories(categories =>[inputValue, ...categories]);

         onNewCategory( inputValue.trim());
        setInputValue('')
        
        
        console.log(inputValue)
    }

    return (
        <form onSubmit={(event)=>{
            onSubmit(event)
        }}>
            <input
                type={'text'}
                placeholder={'Buscar Gif'}
                value={inputValue}
                onChange={ onInputChange}
                />
        </form>
        )
}

export default AddCategories