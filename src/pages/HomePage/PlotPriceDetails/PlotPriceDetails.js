// eslint-disabled import/no-named-as-default-member
import { Button, Col, Row } from 'antd';
import React, { useState } from "react";
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Header from '../../../Common/Header/Header';
import PlotGrid from '../PlotAreaSection/PlotGrid/PlotGrid';
import AllPropertys from './components/AllPropertys/AllPropertys';
import DyamicProperty from './components/DyamicProperty/DyamicProperty';


import "./PlotPriceDetails.scss";

const PlotPriceDetails = () => {
const {plotdetails} = useSelector((state) => state?.poltDetails);
  const { dynamic } = useLocation()?.state;
  console.log("plotdetails", plotdetails[0]);
  
    return (
      <div>
        <div className="price_deatils_container">
          <Header />
          <div
            className="PdfViewer_conatiner"
            style={{
              paddingTop: "2%",
            }}
          >
            <Row >
              <Col span={24} className="plan-diagaram">
                <PlotGrid
                  dynamiclayout={plotdetails[0]?.dynamiclayout ?? []}
                  setDynamiclayout={() => {}}
                  setIsdynamic={() => {}}
                />
              </Col>
              {/* <Col span={12} className="plan-diagram">
                <div className="plot_price_description">
                  <h2>
                    $ <span>44 312 013</span>{" "}
                  </h2>
                  <h5>
                    $<span>870 570</span>/m²
                  </h5>
                  <h6>Price and availability information updated on 07/02/2022</h6>
                  <h4>from 241 856 ₽/month in mortgage</h4>
                  <h4>
                    <span>l</span>Monitor price changes
                  </h4>
                  <h3>
                    Equity participation <span>(214-FZ)</span>
                  </h3>
                  <Button type="primary">Developer Conatact</Button>
                  <div className="price_btns">
                    <Button className="sign_btn">Sign up for view</Button>
                    <Button>Call me back</Button>
                  </div>
                  <h6 className="timing">The office is open from 09:00 to 21:00</h6>
                  <Button type="primary" className="write_btn">
                    Write
                  </Button> */}

                  {/* <div className="developer_details">
                    <h5>DEVELOPER</h5>
                    <h3>ANT Development</h3>
                    <div className="developer_details_data">
                      <div>
                        <h6>Year of foundation: 2009</h6>
                        <h6>No handed over residential complex</h6>
                      </div>
                      <img src={require("../../../Assets/homepageimg.png")} alt="" />
                    </div>
                    <p>9 houses under construction</p>
                    <p>More Info about the Developers</p>
                  </div> */}
                {/* </div>
              </Col> */}
            </Row>
            <Row className="Estimation-container">
              <h2>Estimation</h2>
              <Col span={24} className="Estimation-body">
                {!dynamic && <AllPropertys PropertyList={plotdetails[0]?.searchfilterData ?? []} />}
                {dynamic && <DyamicProperty activityinfo={plotdetails[0]?.dynamicdata} />}
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
}

export default PlotPriceDetails