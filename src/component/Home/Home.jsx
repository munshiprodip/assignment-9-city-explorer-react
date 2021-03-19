import React, { useEffect, useState } from 'react';
import { FakeData } from '../../FakeData/FakeData';
import Category from '../Category/Category';

const Home = () => {
    const [ categories, setCategories ] = useState([])

    useEffect(()=>{
        const data = FakeData;
        setCategories(data.categories)
    },[])

    return (
        <div className="container" style={{height: '90vh'}}>
            <div className="row d-flex justify-content-center align-items-center h-100">

                {
                    categories.map((category, i) => <Category key={i} category={category}></Category>)
                }
                
            </div>
        </div>
    );
};

export default Home;