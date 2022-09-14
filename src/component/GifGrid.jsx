import { useState } from "react";
import { useEffect } from "react";

//import { getGifs } from "../helpers/getGifs"
import { useFetchGif } from "../hooks/useFetchGif";
import GifItem from "./GifItem";

const GifGrid = ( { category} ) => {

  const {images, isLoading} = useFetchGif( category );

  console.log({ isLoading})


  
  return (
    <>
        <h3>{category}</h3>

        {
          isLoading && (<h2>cargando...</h2>)
        }

        <div className="card-grid">
          {
            images.map( (image) =>{
           return <GifItem key={image.id} 
                      {...image}
            />
            })
          }
          
        </div>
    </>
  )
};

export default GifGrid