import React from 'react';
import { useHistory } from 'react-router-dom';

const Category = (props) => {
    const {category} = props;
    const imgURL = `./images/${category}.png`
    const history = useHistory()
    const viewRoute = () => {
        const newPath = `/select-route/${category}`
        history.push(newPath)
    }
    return (
        <div onClick={viewRoute} className="col-md-3">
            <div className="card" style={{backgroundColor: 'rgb(11 7 7 / 80%)'}}>
                <img src={imgURL} className="card-img-top" alt="..."/>
                <div className="card-body text-center">
                    <h3 className="text-uppercase text-light">{category}</h3>
                </div>
            </div>
        </div>
    );
};

export default Category;