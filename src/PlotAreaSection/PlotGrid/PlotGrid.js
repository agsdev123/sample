// react/jsx-boolean-value
import { Col, Row, Select, Button, Slider } from "antd";
import { useReducer, useRef, useState, useEffect } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import {
  RollbackOutlined,
  DragOutlined,
  RadiusBottomleftOutlined,
  RadiusUpleftOutlined,
  RadiusBottomrightOutlined,
  RadiusUprightOutlined,
} from "@ant-design/icons";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import GridElement from "../GridElements/GridElement";
import { layoutReducer } from "..";
import SearchResults from "../SearchResults/SearchResults";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

import "./PlotGrid.scss";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const { Option } = Select;

const PlotGrid = ({ dynamiclayout, setDynamiclayout, rotate, onDragOver, onDrop, tasks }) => {
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
    cols: { xxl: 75, xl: 75, lg: 75, md: 75, sm: 75, xs: 75 },
    rowHeight: 15,
    width: 25,
    margin: [0, 0],
    // containerPadding: [0, 30],
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
          <Row justify="space-around">
            {/* <TransformWrapper
             minScale={0.5}
              maxscale={0.9}
              // zoomIn={{ step: 5 }}
              // zoomOut={{ step: 5 }}
              wheel={{ disabled: true }}
              doubleClick={{ disabled: true }}
              pan={{ disabled: true, paddingSize: 0 }}
              options={{
                limitToBounds: false,
              }}
            > */}
            {/* {({ zoomIn, zoomOut, resetTransform, positionX, positionY }) => ( */}
            <>
              <Col xs={24}>
                <div
                  className="plot_grid_area"
                  ref={ref}
                  // className={positionX !== canvasX || positionY !== canvasY ? "locked" : ""}
                >
                  {/* <TransformComponent
                        contentStyle={{ width: "100%" }}
                        wrapperStyle={{
                          // maxWidth: "100%",
                          // // maxHeight: "calc(100vh - 50px)",
                           width: "100%",
                          // display: "unset",
                        }}
                      > */}

                  <ResponsiveReactGridLayout
                    className="layout_info"
                    layouts={newLayout}
                    // width={size.width}
                    // height={size.height}
                    compactType={"vertical"}
                    // preventCollision={false}
                    // onResizeStop={(oldItem, newItem) => setIsdynamic(true)}
                    resizeHandles={["s", "w", "e", "n", "sw", "nw", "se", "ne"]}
                    resizeHandle={<RollbackOutlined />}
                    onResize={(layout, item) => {
                      // const newLayout = layout.map((obj, index) => {
                      //   // const ol=dynamiclayout[index].h===obj.h?
                      //   return {
                      //     ...obj,
                      //     task: "container" + index,
                      //     ol: obj.h,
                      //     ob: obj.w,
                      //   };
                      // });
                      const newLayout = dynamiclayout.map((obj) => {
                        if (obj.i == item.i) {
                          return {
                            ...obj,
                            ol: item.h,
                            ob: item.w,
                            h: item.h,
                            w: item.w,
                          };
                        }
                        return obj;
                      });
                      console.log("akakakmsmsm", newLayout);
                      setDynamiclayout(newLayout);
                      dispatch({ type: "newLayout", newLayout });
                    }}
                    // onLayoutChange={(layout) => {
                    //   // setDynamiclayout(layout);
                    //   const newLayout = layout.map((obj, index) => {
                    //     return {
                    //       ...obj,
                    //       task: "container" + index,
                    //       ol: obj.h,
                    //       ob: obj.w,
                    //     };
                    //   });
                    //   console.log("akakakmsmsm", newLayout);
                    //   setDynamiclayout(newLayout);
                    //   dispatch({ type: "newLayout", newLayout });
                    // }}
                    style={{ width: "100%" }}
                    // rowHeight={40}
                    // width={1200}
                    // onWidthChange={calcGridColWidth}
                    onWidthChange={(containerWidth) => {
                      calcGridColWidth(containerWidth);
                    }}
                    {...defaultProps}
                  >
                    {dynamiclayout?.map((item, index) => {
                      console.log("item", item);
                      return (
                        <GridElement key={"" + item.i} css={{ border: "1px solid red" }} {...item}>
                          <div className="slider_blocks">
                            <Slider
                              range={{ draggableTrack: true }}
                              trackStyle={{ backgroundColor: "#fff" }}
                              handleStyle={{ display:"none"}}
                              className="slider_1"
                              defaultValue={[20, 50]}
                            />
                            <Slider
                              range={{ draggableTrack: true }}
                              className="slider_2"
                              defaultValue={[20, 50]}
                               handleStyle={{ display:"none"}}
                              trackStyle={{ backgroundColor: "#fff" }}
                            />
                          </div>

                          <span
                            style={{
                              fontSize: "0.8rem",
                              fontWeight: "600",
                            }}
                          >
                            {item.i}
                          </span>
                          <br />
                          <span
                            style={{
                              fontSize: "0.8rem",
                              fontWeight: "550",
                            }}
                          >
                            {item.w.toFixed(2)} x {item.h.toFixed(2)}
                          </span>
                        </GridElement>
                      );
                    })}
                  </ResponsiveReactGridLayout>
                </div>
              </Col>
              {/* <Col span={3}>
                <div className="directions_img">
                  <CustomImage src={AssetsImage.NorthLogoImg} alt="north" preview={false} />
                </div>
              </Col> */}
            </>
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

export default PlotGrid;
