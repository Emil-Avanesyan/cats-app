import React, {useEffect, useState} from 'react';
import Categories from "../../components/home/categories";
import Cats from "../../components/home/cats";
import './style.scss';
import {useDispatch} from "react-redux";
import {getCats} from "../../store/actions/catsAction";
import Loader from "../../components/loader";

const Home = () => {
    const dispatch = useDispatch();
    const [active, setActive] = useState();
    const [catsData, setCatsData] = useState();
    const [loading, setLoading] = useState(false);

    const requestCatsData = (page) => {
        setLoading(true)
        const params = {page, id: active?.id}
        dispatch(getCats(params))
            .then(data => {
                setCatsData({cats: page !== 1 ? [...catsData.cats, ...data.payload] : data.payload})
                setLoading(false)
            })
    }

    useEffect(() => {
        active && requestCatsData(1)
    }, [active])

    return (
        <>
            {loading ? <Loader/> : (
                <div className='home_page padding_main'>
                    <Categories requestCatsData={requestCatsData} active={active} setActive={setActive}/>
                    {active ? (
                        <Cats requestCatsData={requestCatsData} active={active} catsData={catsData}/>
                    ) : (
                        <div className='inform_text'>
                            <h1>Select a Category, To see cats photos!</h1>
                        </div>
                        )}
                </div>
            )}
        </>
    );
};

export default Home;