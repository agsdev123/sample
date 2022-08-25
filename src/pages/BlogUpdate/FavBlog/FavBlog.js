import React from 'react';
import Header from '../../../Common/Header/Header'
import Footer from '../../HomePage/Footer/Footer';
import { LeftOutlined, TwitterCircleFilled, FacebookFilled } from '@ant-design/icons';
import "./FavBlog.scss";
import { Divider } from 'antd';
import { useNavigate } from 'react-router-dom';

const FavBlog = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className='FavBlog_container'>
                <Header />
                <div className='BlogDetails_content'>
                    <h1>My Blog</h1>
                    <div className='BlogDetails_content_data'>
                        <div className='BlogDetails_data1'>
                            <p onClick={() => navigate("/blog")}>
                                <LeftOutlined />
                                <span>All Posts</span>
                            </p>
                            <div className='post_blogs'>
                                <h2>Shop like your favorite product</h2>
                                <h5>23 May 2022</h5>
                                <h4>With iBuiltup you do not have to compromise on your building drawing,
                                    vaastu, building products that goes into the construction and lots more.
                                </h4>

                                <h4 className='h4_2'>
                                    iBuiltup is committed to empower you with engineer capabilities, with ease.
                                    That means anyone who is interested in art and architectures can build their
                                    dream paradise like a pro
                                </h4>

                                <div className='share_posts'>
                                    <h3>Share this post:</h3>
                                    <FacebookFilled />
                                    <TwitterCircleFilled />
                                </div>
                            </div>
                        </div>
                        <Divider type="vertical" />
                        <div className='recent_posts'>
                            <h3>RECENT POSTS</h3>
                            <h4 onClick={()=> navigate("/blogquality-engineer")}>Quality Engineer - Be that with iBuiltup</h4>
                            <h5>23 May 2022</h5>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default FavBlog