
import React, { useState } from 'react'
import { AddCategory } from './AddCategory';
import { GitGrid } from './GitGrid';

export const GitExportApp = () => {

    // const categorias = ['One Punch', 'Samurai X', 'Dragon Ball'];

     const [categorias, setCategorias] = useState(['One Piece']);


    // const handleAdd = () => {
    //     // setCategorias( [...categorias, 'HunterXHunter'] );
    //     setCategorias( categorias => [...categorias, 'HunterXHunter','one piece'] );
    // }
    
  return (
    <>
        <h1>Git Export App</h1>
        <AddCategory setCategorias={ setCategorias }/>
        <hr />
        
        <ol>
            {
            categorias.map( categoria => (
                <GitGrid 
                  key={ categoria }
                  category={ categoria }
                />
              ))
            } 
        </ol>

    </>
  )
}

