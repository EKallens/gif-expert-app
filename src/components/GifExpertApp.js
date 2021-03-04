import React, { useState } from 'react';
import AddCategory from './AddCategory';
import GifGrid from './GifGrid';
import image from '../images/gif.png';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Warzone']);

    return (
        <>  
            <div className="header">
                <h2 className="main-title">GiftExpertApp</h2>
                <img src={image} className="image-title" alt=""/>
            </div>
            <AddCategory
                setCategories={setCategories}
            />
            <ol>
                <GifGrid
                    category={categories}
                />
            </ol>
        </>
    );
}

export default GifExpertApp;