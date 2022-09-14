import React from 'react'
import { useState } from 'react'
import AddCategories from './component/AddCategories';
import GifGrid from './component/GifGrid';

export const GifExpertApp = () => {
  
  const [categories, setCategories] = useState(['one punch'])

  const onAddCategory =(newCategory)=>{
     
      if( categories.includes(newCategory) ) return;

      console.log(newCategory)
      //categories.push(newCategory)
      setCategories([ newCategory, ...categories ])
    
  };

  return (
    //estructuras
   
    <>

        <h1>GifExpertApp</h1>

        <AddCategories 
        onNewCategory={onAddCategory }
          />
        
     
          { categories.map( (category) =>( 
                <GifGrid 
                  key={category} 
                  category={category}
                  /> 
            ))
          }
        
    </>
  )
}
