import React from 'react';

import Title from "../components/title";
import Content from "../components/content";
import What from "../components/What";
import Workshop from "../components/workshop";
import Sessions from "../components/sessions";
import Register from '../components/register';
import Materials from '../components/Materials';

const Home = () =>{
    return(
        <div className='container mx-auto px-5 xl:px-0'>
                <Title/>
                <Content/>
                <What/>
                <Workshop/>
                <Sessions/>
                <Materials/>
                <Register/>
        <div className='fixed bottom-0 right-0 mb-10 mr-10'>
          <a href="#" className='text-4xl text-opacity-60'>
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"></path></svg>
          </a>
        </div>
            <h5 className='text-right my-3'>
                @CodeOne Team 2022
            </h5>
        </div>
    )
}
export default Home