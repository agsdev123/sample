/* eslint-disable prefer-object-spread */
// eslint-disabled import/no-named-as-default-member
/* eslint-disable */
import {
  ArrowRightOutlined,
  LoadingOutlined,
  RadiusBottomleftOutlined,
  RadiusUpleftOutlined,
  RadiusUprightOutlined,
  BorderBottomOutlined,
} from "@ant-design/icons";
import {
  Button,
  Divider,
  Drawer,
  Input,
  message,
  Select,
  Slider,
  Spin,
  Tabs,
  InputNumber,
} from "antd";
import moment from "moment";
import React, { useState, useEffect } from "react";
import Draggable from "react-draggable";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { common } from "../../../services/Common";
import { addplotdetails } from "../../../store/poltDetails/poltDetailsSlice";
import AddToolsTab from "./AddToolsTab/AddToolsTab";
import FilterDetails from "./FilterDetails/FilterDetails";
import Percentage from "./Percentage/Percentage";
import "./PlotAreaSection.scss";
import PlotGrid from "./PlotGrid/PlotGrid";

const { Option } = Select;
const { TabPane } = Tabs;

const PlotAreaSectionPro = ({ type, area, setcompletePlotArea, index,propertyfaceing }) => {
  const initialState = {
    tasks: [
      {
        name: "1",
        category: "wip",
        bgcolor: "yellow",
        custom: (
          <div className="door">
            <RadiusBottomleftOutlined />
            <h6>D1</h6>
          </div>
        ),
      },
      {
        name: "2",
        category: "wip",
        bgcolor: "yellow",
        custom: (
          <div className="door">
            <RadiusUpleftOutlined />
            <h6>D2</h6>
          </div>
        ),
      },
      {
        name: "3",
        category: "wip",
        bgcolor: "yellow",
        custom: (
          <div className="door">
            <RadiusUpleftOutlined />
            <h6>D3</h6>
          </div>
        ),
      },
      {
        name: "4",
        category: "wip",
        bgcolor: "yellow",
        custom: (
          <div className="door">
            <RadiusUprightOutlined />
            <h6>D4</h6>
          </div>
        ),
      },
      {
        name: "5",
        category: "contentHall",
        bgcolor: "yellow",
        custom: (
          <div
            style={{
              height: "4rem",
              width: "100%",
              background: "#ffe1e1",
              display: "grid",
            }}
          >
            {" "}
            <Slider defaultValue={30} />{" "}
          </div>
        ),
      },
      {
        name: "6",
        category: "bedroom",
        bgcolor: "yellow",
        custom: (
          <div
            style={{
              height: "4rem",
              width: "100%",
              background: "#ffe1e1",
              display: "grid",
            }}
          >
            <BorderBottomOutlined />
          </div>
        ),
      },
      {
        name: "7",
        category: "B1",
        bgcolor: "yellow",
        custom: (
          <div
            style={{
              height: "4rem",
              width: "100%",
              background: "#ffe1e1",
              display: "grid",
            }}
          >
            <BorderBottomOutlined />
          </div>
        ),
      },
      {
        name: "8",
        category: "B2",
        bgcolor: "yellow",
        custom: (
          <div
            style={{
              height: "4rem",
              width: "100%",
              background: "#ffe1e1",
              display: "grid",
            }}
          >
            <BorderBottomOutlined />
          </div>
        ),
      },
      {
        name: "9",
        category: "B3",
        bgcolor: "yellow",
        custom: (
          <div
            style={{
              height: "4rem",
              width: "100%",
              background: "#ffe1e1",
              display: "grid",
            }}
          >
            <BorderBottomOutlined />
          </div>
        ),
      },
      {
        name: "10",
        category: "B4",
        bgcolor: "yellow",
        custom: (
          <div
            style={{
              height: "4rem",
              width: "100%",
              background: "#ffe1e1",
              display: "grid",
            }}
          >
            <BorderBottomOutlined />
          </div>
        ),
      },
    ],
  };
  const [state, setState] = useState(initialState);

  const onDragStart = (ev, id) => {
    console.log("dragstart:", id);
    ev.dataTransfer.setData("id", id);
  };

  const onDrop = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");
    let prevObj = {};
    let index = 0;
    let tasks = state.tasks.filter((task, i) => {
      if (task.name == id) {
        if (task.category === "wip" || task.category === "contentHall") {
          index = i;
          prevObj = {
            ...task,
          };
          prevObj.name = String(moment().unix());
        }

        task.category = cat;
        // console.log("hahahhahah", task, task.category, cat, id, task.name);
      }
      return task;
    });
    // console.log("tasks", tasks, prevObj, Object.keys(prevObj).length >= 1);
    if (Object.keys(prevObj).length >= 1) tasks.splice(index, 0, prevObj);
    setState((prev) => ({
      ...prev,
      tasks,
    }));
  };
  const onDragOver = (ev) => {
    ev.preventDefault();
    console.log("d");
  };
  var tasks = {
    wip: [],
    complete: [],
    outsideDiv: [],
    contentHall: [],
    bedroom: [],
    windowsContent: [],
    cupboardsContent: [],
    basinContent: [],
    B1: [],
    B2: [],
    B3: [],
    B4: [],
    container1: [],
    container0: [],
    container2: [],
    container3: [],
    container4: [],
    container5: [],
    container6: [],
    container7: [],
    container8: [],
    container9: [],
    container10: [],
    container11: [],
    container12: [],
    container13: [],
    container14: [],
    container15: [],
    container16: [],
    extraArea: [],
  };
  state.tasks.forEach((t) => {
    tasks[t.category].push(
      <Draggable bounds="parent">
        <div
          key={t.name}
          onDragStart={(e) => {
            onDragStart(e, t.name);
          }}
          draggable
          className="draggable"
          style={{ backgroundColor: t.bgcolor, width: "20%" }}
        >
          {t.custom}
        </div>
      </Draggable>,
    );
  });
  const [dynamiclayout, setDynamiclayout] = useState([
    { i: "Bath1", x: 1, y: 0, w: 5, h: 15, static: false, task: "container1" },
    {
      i: "BedRoom1",
      x: 6,
      y: 0,
      w: 15,
      h: 15,
      static: false,
      task: "container2",
    },
    { i: "LivingRoom1", x: 21, y: 0, w: 15, h: 15, static: false, task: "container3" },

    { i: "Carparking", x: 36, y: 0, w: 12, h: 15, static: false, task: "container4" },
    { i: "Dinning", x: 21, y: 2, w: 14, h: 12, static: false, task: "container5" },
    { i: "Kitchen", x: 35, y: 2, w: 13, h: 12, static: false, task: "container6" },
    { i: "Bath2", x: 1, y: 2, w: 7, h: 12, static: false, task: "container7" },
    { i: "BedRoom2", x: 8, y: 2, w: 13, h: 12, static: false, task: "container8" },
  ]);
  const handleArea = (type, area, propertyfaceing) => {
    const data = Percentage(type, area,propertyfaceing);
    const { calArea } = data;
    console.log("calAreacalArea", calArea);
    let maxheight = 0;
    let currentwidth = 0;
    let currentheight = 0;
    let staticValueX = 13;
    let staticValueY = 13;
    const lb = calArea?.map(({ l, b, category, area, subRooms }, index) => {
      let length = l;
      let breadth = b;
      if (currentheight < length) {
        currentheight = length;
      }

      const newObj = {
        i: category,
        task: "container" + index,
        x: currentwidth,
        y: maxheight,
        w: l,
        h: b,
        ol: b,
        ob: l,
        minW: 3,
        minH: 3,
        static: false,
        category,
        area,
        subRooms,
      };
      currentwidth += length;
      if ((index + 1) % 4 === 0) {
        currentwidth = 0;
        maxheight = currentheight;
        currentheight = 0;
      }
      return newObj;
    });
    setDynamiclayout(lb);
  };
  useEffect(() => {
    handleArea(type, area);
  }, [type, area]);
  useEffect(() => {
    setcompletePlotArea((prev) => ({
      ...prev,
      [index]: dynamiclayout,
    }));
  }, [dynamiclayout]);
  return (
    <>
      {/* <AddToolsTab  tasks={tasks} type={type} /> */}
      {/* <div className="add_plots_tools"> */}
        <div className="loyout_directions">
      <PlotGrid
        dynamiclayout={dynamiclayout}
        setDynamiclayout={setDynamiclayout}
        tasks={tasks}
        onDrop={onDrop}
        onDragOver={onDragOver}
      />
      </div>
      {/* </div> */}
    </>
  );
};

export default PlotAreaSectionPro;
