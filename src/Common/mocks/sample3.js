/* eslint-disable prefer-object-spread */
import React, { useState } from "react";
import "./PdfViewer.scss";
import Demo from "./Grid/Demo";
import { Input, Select, message, Button, Drawer, Divider, Spin } from "antd";
import { SearchOutlined, ArrowRightOutlined, LoadingOutlined } from "@ant-design/icons";
import GoogleAutoComplete from "../../../Common/AutoComplete/GoggleAutoComplete";
import FilterDetails from "./FilterDetails/FilterDetails";
import { common } from "../../../services/Common";
import { useNavigate } from "react-router-dom";
import { addplotdetails } from "../../../store/poltDetails/poltDetailsSlice";
import { useDispatch } from "react-redux";

const { Option } = Select;

const PdfViewer = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [placement, setPlacement] = useState("top");
  const [planresinfo, setPlanresinfo] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [isdynamic, setIsdynamic] = useState(false);
  const [dynamiclayout, setDynamiclayout] = useState([
    {
      i: "BedRoom1",
      x: 1,
      y: 0,
      w: 12,
      h: 12,
      // maxW: 2,
    },
    { i: "Dinning", x: 14, y: 2, w: 12, h: 12 },
    { i: "Kitchen", x: 25, y: 0, w: 10, h: 12 },
    { i: "BedRoom2", x: 26, y: 2, w: 13, h: 12 },
    { i: "Carparking", x: 35, y: 0, w: 7, h: 12 },
    { i: "BedRoom3", x: 1, y: 2, w: 13, h: 12 },
    { i: "LivingRoom1", x: 14, y: 0, w: 10, h: 12 },
  ]);
  const [searchfilterData, setSearchfilterData] = useState([]);
  const [Searchfilter, setSearchfilter] = useState({
    lat: "",
    long: "",
    facing: undefined,
    length: "",
    breadth: "",
  });
  const { lat, length, breadth, facing } = Searchfilter;

  const dispatch = useDispatch();
  console.log("isdynamic", isdynamic);

  const onClose = () => {
    setVisible(false);
  };

  function selectProps(...props) {
    return function (obj) {
      const newObj = {};
      props.forEach((name) => {
        newObj[name] = obj[name];
      });

      return newObj;
    };
  }

  const handleXaxis = (i) => {
    if (i === 0 || i === 1) {
      return 1;
    } else if (i === 2 || i === 3) {
      return 3;
    } else if (i === 4) {
      return 6;
    } else {
      return 5;
    }
  };
  const handleYaxis = (i) => {
    if (i === 0 || i === 1) {
      return 1;
    } else if (i === 2 || i === 3) {
      return 3;
    } else if (i === 4) {
      return 6;
    } else if (i === 5) {
      return 0;
    }
  };
  const validateTheValue = (args) => {
    const keys = Object.keys(args);
    const values = Object.values(args);
    const Index = values.findIndex((val) => val === "" || val === undefined);
    if (Index === -1) return undefined;
    return keys[Index];
  };
  const handleSerarch = async () => {
    const res = validateTheValue({
      location: lat,
      facing,
      length,
      breadth,
    });
    let layout = [];
    if (!res) {
      setLoaded(true);
      const results = await common.propertyFilters(Searchfilter);

      if (results.status === 200) {
        setSearchfilterData(results.data.data);
        setLoaded(false);
        const newEpisodes = results.data.data.map(
          selectProps("bedrooms", "livingRoom", "carparking", "setback", "dinning", "kitchen"),
        );
        for (const iterator of newEpisodes) {
          const { bedrooms, kitchen, livingRoom, carparking, setback, dinning } = iterator;
          layout = [...kitchen, ...bedrooms, ...livingRoom, ...carparking, ...setback, ...dinning];
        }

        let dynamiclayout = layout.map((value, i) => ({
          i: value.title,
          w: Math.round(value.breadth / 8),
          h: Math.round(value.length / 7),
          x: handleXaxis(i),
          y: handleYaxis(i),
          isDraggable: undefined,
          isResizable: undefined,
          maxH: undefined,
          maxW: 2,
          minH: undefined,
          minW: undefined,
          moved: false,
          static: false,
        }));
        setDynamiclayout(dynamiclayout);
      } else {
        message.error("something went wrong please try again");
      }
    } else {
      message.error("please fill the " + res);
    }
  };
  const handleSelect = (e) => {
    setSearchfilter({
      ...Searchfilter,
      facing: e,
    });
  };
  const handleinputChange = (e) => {
    const { name, value } = e.target;
    setSearchfilter({
      ...Searchfilter,
      [name]: value,
    });
  };

  const hanldeobjectform = (planresinfo, val) => {
    for (const key in planresinfo) {
      if (key.substring(0, 3) === val.substring(0, 3)) {
        const element = planresinfo[key];
        return element;
      }
    }
  };
  const handlecost = (resource, measurements, { incomemeasurements }) => {
    console.log("resource", resource, measurements, incomemeasurements);
    const costdata = resource?.reduce(function (accumulator, item) {
      if (item.resourceType === "Work") {
        return (
          accumulator + item.measurementsunits * incomemeasurements * item.duration * 8 * item.cost
        );
      } else if (item.resourceType === "Material") {
        return accumulator + item.measurementsunits * incomemeasurements * 1 * item.cost;
      }
    }, 0);
    const totalcost =
      costdata ??
      [].reduce(function (accumulator, item) {
        return accumulator + item;
      }, 0);

    return totalcost;
  };

  const handleSelectdata = (data) => {
    setPlanresinfo(data);
  };

  const handleplanlockchange = async () => {
    const firstleveldata = [];
    if (isdynamic) {
      let roomsarray = [];
      for (const iterator of dynamiclayout ?? []) {
        roomsarray.push({
          room: iterator.i,
          minsq: iterator.w * iterator.h,
        });
      }

      const results = await common.EsatimationFilters(dynamiclayout);
      setLoaded(true);
      if (results.status === 200) {
        // handleSelectdata(results.data)

        for (const iterator of roomsarray) {
          firstleveldata.push({
            active: iterator.room,
            minsq: iterator.minsq,
            cost: handlecost(
              hanldeobjectform(results.data, iterator.room)?.resources ?? [],
              hanldeobjectform(results.data, iterator.room)?.measurements,
              {
                incomemeasurements:
                  iterator?.minsq / hanldeobjectform(results.data, iterator.room)?.minSqFeet,
              },
            ),
            duration: hanldeobjectform(results.data, iterator.room)?.estimationDays,
            subactivity: [
              {
                ...hanldeobjectform(results.data, iterator.room),
                incomemeasurements:
                  iterator?.minsq / hanldeobjectform(results.data, iterator.room)?.minSqFeet,
              },
            ],
          });
        }
        setLoaded(false);
        navigate("/price-details", { state: { dynamic: isdynamic } });
        const newdata = {
          dynamiclayout,
          searchfilterData: [],
          dynamicdata: firstleveldata,
        };
        dispatch(addplotdetails(newdata));
      }
    } else {
      navigate("/price-details", { state: { dynamic: isdynamic } });
      const data = {
        dynamiclayout,
        searchfilterData,
      };
      dispatch(addplotdetails(data));
    }
  };
  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 24,
      }}
      spin
    />
  );

  console.log("loaded", loaded);
  return (
    <div>
      <div className="PdfViewer_conatiner">
        <div className="searchbar_content">
          <div className="searchbar">
            <div className="aaa">
              <GoogleAutoComplete
                placeholder={"Enter Location"}
                location={"location"}
                address={"address"}
                setSearchfilter={setSearchfilter}
              />
              <Divider type="vertical" />
            </div>
            <div className="aaa">
              <Select
                defaultValue="Property Facing"
                value={facing}
                style={{ width: 120 }}
                onChange={handleSelect}
              >
                <Option value={"East"}>East</Option>
                <Option value={"West"}>West</Option>
                <Option value={"South"}>South</Option>
                <Option value={"North"}>North</Option>
              </Select>
              <Divider type="vertical" />
            </div>
            <div className="aaa">
              <Input
                placeholder="Enter Length"
                name="length"
                value={length}
                onChange={handleinputChange}
              />
              <Divider type="vertical" />
            </div>
            <div className="aaa">
              <Input
                placeholder="Enter Breadth"
                name="breadth"
                value={breadth}
                onChange={handleinputChange}
              />
            </div>

            {/* <div className="aaa"> */}
            {/* <div className="select_storys">
              <Select defaultValue="No Of Storeys" style={{ width: 120 }} >
                <Option value="1">1</Option>
                <Option value="2">2</Option>
                <Option value="3">3</Option>
                <Option value="4">4</Option>
                <Option value="5">5</Option>
                <Option value="6">6</Option>
              </Select> */}
            {/* <Divider type="vertical" /> */}
            {/* </div> */}
            {/* </div> */}
            <div className="searchIcon" onClick={handleSerarch}>
              {loaded ? <Spin indicator={antIcon} /> : <SearchOutlined />}
            </div>
          </div>

          {/* <div className="filter_btn">
            <Button onClick={showDrawer}>Filter</Button>
          </div> */}
          <div className="middle">
            <Button className="btn" onClick={handleplanlockchange} loading={loaded}>
              <span className="wave"></span>
              <span className="text">
                Plan Lock <ArrowRightOutlined />
              </span>
            </Button>
          </div>
        </div>

        <div
          style={{
            display: visible ? "block" : "none",
          }}
          className="site-drawer-render-in-current-wrapper"
        >
          <Drawer
            placement="top"
            closable={false}
            onClose={onClose}
            visible={visible}
            getContainer={false}
            style={{
              position: "absolute",
            }}
          >
            <FilterDetails onClose={onClose} />
          </Drawer>
        </div>
        <Demo
          dynamiclayout={dynamiclayout}
          setDynamiclayout={setDynamiclayout}
          setIsdynamic={setIsdynamic}
        />
      </div>
    </div>
  );
};

export default PdfViewer;




-----------


// react/jsx-boolean-value
import { Col, Row, Select,Button, } from "antd";
import { useReducer, useRef, useState, useEffect } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import { RollbackOutlined } from "@ant-design/icons";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import GridElement from "./GridElement";
import layoutReducer from "./layoutReducer";
import SearchResults from "./SearchResults";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const { Option } = Select;

const Grid = ({ dynamiclayout, setDynamiclayout, setIsdynamic }) => {
  const ref = useRef();
  const [layout, dispatch] = useReducer(layoutReducer, dynamiclayout);
  const [currentBreakPoints, setCurrentBreakPoints] = useState("");
  const [scale, setScale] = useState(0);
  const [canvasX, setCanvasX] = useState(0);
  const [canvasY, setCanvasY] = useState(0);
  const setPositionChange = (e) => {
    setCanvasX(e.positionX);
    setCanvasY(e.positionY);
  };

  const [currentPage, setCurrentPage] = useState("platinfo");
  console.log("dynamiclayout", dynamiclayout);

  const newLayout = {
    xxl: dynamiclayout,
    xl: dynamiclayout,
    lg: dynamiclayout,
    md: dynamiclayout,
    xs: dynamiclayout,
  };

  const defaultProps = {
    className: "dev-helper",
    isDraggable: true,
    isResizable: true,
    breakpoints: { xxl: 1200, xl: 1200, lg: 992, md: 768, sm: 576, xs: 480 },
    cols: { xxl: 65, xl: 65, lg: 65, md: 65, sm: 65, xs: 65 },
    rowHeight: 20, // 比较符合直觉
    width:25,
    margin: [0, 0],
    containerPadding: [25, 25],
    onBreakpointChange: setCurrentBreakPoints,
  };
  function isHTML(str) {
    var a = document.createElement("div");
    a.innerHTML = str;

    for (var c = a.childNodes, i = c.length; i--; ) {
      if (c[i].nodeType == 1) return true;
    }

    return false;
  }

  const calcGridColWidth = (positionParams) => {
    const { margin, containerPadding, containerWidth, cols } = positionParams;

    console.log("positionParams", positionParams);
    return (containerWidth - margin?.[0] * (cols - 1) - containerPadding?.[0] * 2) / cols;
  };
  function calculateWH(widthPx, heightPx, colWidth, rowHeight, margin) {
    let w = Math.ceil((widthPx - margin[0]) / (colWidth + margin[0]));
    let h = Math.ceil((heightPx - margin[1]) / (rowHeight + margin[1]));
    return [w, h];
  }
  return (
    <>
      {currentPage === "platinfo" && (
        <>
          <Row justify="center" style={{ marginTop: "40px" }}>
            <TransformWrapper
             minScale={0.5}
              maxscale={0.9}
              zoomIn={{ step: 5 }}
              zoomOut={{ step: 5 }}
              wheel={{ disabled: true }}
              doubleClick={{ disabled: true }}
              pan={{ disabled: true, paddingSize: 0 }}
              options={{
                limitToBounds: false,
              }}
            >
              {({ zoomIn, zoomOut, resetTransform, positionX, positionY }) => (
                <>
                  <div className="tools">
                    <Button type="button" onClick={() => zoomIn()}>
                      +
                    </Button>
                    <Button type="button" onClick={() => zoomOut()}>
                      -
                    </Button>
                    <Button type="button" onClick={() => resetTransform()}>
                      <RollbackOutlined />
                    </Button>
                    <Button type="button">D</Button>
                    <Button type="button">v</Button>
                    <Button type="button">W</Button>
                  </div>
                  <Col xs={18} style={{ border: "2px solid #000" }}>
                    <div
                      ref={ref}
                      className={positionX !== canvasX || positionY !== canvasY ? "locked" : ""}
                    >
                      <TransformComponent
                        contentStyle={{ width: "100%" }}
                        wrapperStyle={{
                          // maxWidth: "100%",
                          // // maxHeight: "calc(100vh - 50px)",
                           width: "100%",
                          // display: "unset",
                        }}
                      >
                        <ResponsiveReactGridLayout
                          className="layout"
                          layouts={newLayout}
                          compactType={"vertical"}
                          preventCollision={false}
                          onResizeStop={(oldItem, newItem) => setIsdynamic(true)}
                          onLayoutChange={(layout) => {
                            setDynamiclayout(layout);
                            dispatch({ type: "newLayout", layout });
                          }}
                          style={{ width: "100%" }}
                         
                          onWidthChange={(containerWidth) => {
                            calcGridColWidth(containerWidth);
                          }}
                          {...defaultProps}
                        >
                          {dynamiclayout?.map((item) => {
      
                            return (
                              <GridElement
                                key={"" + item.i}
                                css={{ border: "1px solid red" }}
                                {...item}
                              >
                                <div className="main-setup">
                                  <div className="content-setup">
                                    {item.i}
                                    <br />
                                    {item.w} * {item.h}
                                  </div>
                                </div>
                                {/* <div className="roomSetup">
                                  D
                                </div> */}
                              </GridElement>
                            );
                          })}
                        </ResponsiveReactGridLayout>
                      </TransformComponent>
                    </div>
                  </Col>
                </>
              )}
            </TransformWrapper>
          </Row>
        </>
      )}
      {currentPage === "platlist" && (
        <>
          <SearchResults />
        </>
      )}
    </>
  );
};

export default Grid;
