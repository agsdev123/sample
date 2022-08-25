import React from 'react';
import './ServicesIntroPage.scss';


const ServicesIntroPage = () => {
    return (
        <div>
            <div className='ServicesIntroPage_container'>
                <h3>RESIZABLE DRAWING </h3>
                <h4>iBuiltup offers everyone the ability to design your dream home
                    with super simple features. This is a breakthrough in building
                    blueprints for municipal approvals + construction
                </h4>
                <div className='ServicesIntroPage_content'>
                    <div className='introContent1'>
                        <h3>COST & SCHEDULE</h3>
                        <h4>Build your project using iBuiltup super easy tool
                            and find out your project cost and timeline on iBuiltup dashboard
                        </h4>
                    </div>
                    <div className='introContent1'>
                        <h3>READY TO BLUEPRINT</h3>
                        <h4>iBuiltup allows you to digitally configure all architectural walls and choose
                            building materials that meets your budget
                        </h4>
                        <h4>A reference point for your house construction +</h4>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ServicesIntroPage