import React from 'react'
import Header from '../../../Common/Header/Header'
import Footer from '../../HomePage/Footer/Footer';
import { LeftOutlined, TwitterCircleFilled, FacebookFilled } from '@ant-design/icons';
import "./BlogDetails.scss";
import { Divider } from 'antd';
import { useNavigate } from 'react-router-dom';


const BlogDetails = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className='BlogDetails_container'>
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
                <h2>Quality Engineer - Be that with iBuiltup</h2>
                <h5>23 May 2022</h5>
                <h4>We are committed to empower everyone of you out there with all
                  quality aspects as you must know. It is your product that stands
                  stall for ages notwithstanding heavy rains, hot sun no matter who
                  that super person going to be, you structure absorbs performs its
                  Engineering feat to shelter you, pamper you and make you feel like
                  it is the heaven on earth for you!
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
              <h4 onClick={() => navigate("/blog-fav-shop")}>Shop like your favourite product</h4>
              <h5>23 May 2022</h5>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default BlogDetails