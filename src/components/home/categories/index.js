import React, {useEffect} from 'react';
import './style.scss';
import {useDispatch, useSelector} from "react-redux";
import {getCategories} from "../../../store/actions/categoriesAction";

const Categories = ({active, setActive}) => {
    const dispatch = useDispatch();
    const categoriesData = useSelector(state => state.categories);

    useEffect(() => {
        dispatch(getCategories());
    }, [])

    return (
        <div className='categories_block'>
            <h1>Categories</h1>
            <ul className='categories'>
                {categoriesData.categories?.map((category, idx) => (
                    <li key={category.id + idx}
                        className={category.id === active?.id ? 'active' : ''}
                        onClick={() => setActive(category)}
                    >
                        {category.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Categories;