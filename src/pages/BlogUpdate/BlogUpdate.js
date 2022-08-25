import React from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../../Common/Header/Header'
import Footer from '../HomePage/Footer/Footer'
import "./BlogUpdate.scss";


const BlogUpdate = () => {
    const navigate= useNavigate();
    return (
        <div>
            <div className='BlogUpdate_container'>
                <Header />
                <div className='BlogUpdate_content'>
                    <h2> MY BLOG</h2>
                    <div className='BlogUpdate_data'>
                        <div className='BlogUpdate_data1' onClick={() => navigate("/blogquality-engineer")}>
                            <h4>23 May 2022</h4>
                            <h3>QUALLITY</h3>
                            <h3> ENGINEER - BE</h3>
                            <h3>THAT WITH</h3>
                            <p>Continue Reading</p>
                        </div>
                        <div className='BlogUpdate_data1'onClick={()=> navigate("/blog-fav-shop")}>
                            <h4>23 May 2022</h4>
                            <h3>SHOP LIKE YOUR </h3>
                            <h3>FAVOURITE</h3>
                            <h3>PRODUCT</h3>
                            <p>Continue Reading</p>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default BlogUpdate