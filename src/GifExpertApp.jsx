import { useState } from "react"
import { AddCategory, GifGrid } from "./components"


export const GifExpertApp = () => {

const [categories, setCategories] = useState(['Jojos'])

const onAddCategory = (newCategory) => {

    if(categories.includes(newCategory)) return;
    //categories.push('Berserk')

    setCategories([newCategory, ...categories])
    //setCategories(cat => [...cat, 'Berserk']);
}

  return (
    <>
       
        <h1>Gif Expert App</h1>
     
        <AddCategory 
        //setCategories={setCategories}
        onNewCategory= {(value) => onAddCategory(value)}
        />
            {
            categories.map((category) =>
                (
                    <GifGrid key={category} category={category} />
                ))
            }
           

    </>
  )
}
