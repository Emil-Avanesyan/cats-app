import React from 'react';
import './style.scss';

const Cats = ({catsData, requestCatsData}) => {
    let page = 1;
    return (
        <>
            {catsData ?
                (<div className='cats_block'>
                        <div className='cats'>
                            {catsData.cats?.map((cat, idx) => (
                                <div key={cat.id + idx} className='cat_nth'>
                                    <img src={cat.url} alt='Cat'/>
                                </div>
                            ))}
                        </div>
                        <div className='btn'>
                            <button onClick={() => {
                                requestCatsData(++page)
                            }}>Load More
                            </button>
                        </div>
                    </div>
                ) : null}
        </>
    );
};

export default Cats;