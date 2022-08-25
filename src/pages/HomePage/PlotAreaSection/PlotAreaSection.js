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
import PlotAreaSectionPro from "./PlotAreaSectionPro";
import PlotGrid from "./PlotGrid/PlotGrid";

const { Option } = Select;
const { TabPane } = Tabs;

const PlotAreaSection = () => {
  const [visible, setVisible] = useState(false);
  const [propertyfaceing, setPropertyfaceing] = useState(undefined);
  const [completePlotArea, setcompletePlotArea] = useState([]);
  const [ploatTotaolArea, setploatTotaolArea] = useState([
    {
      type: "1BHK",
      area:500,
      label: "G",
    },
    {
      type: "1BHK",
      area: 900,
      label: "G+1",
    },
    {
      type: "1BHK",
      area: 800,
      label: "G+2",
    },
  ]);

  const [count, setCount] = useState(1);
  const [areaForm, setareaForm] = useState({
    l: "",
    b: "",
    setBackLenghtLeft: 0,
    setBackLenghtRight: 0,
    backbreadthFront: 0,
    backbreadthright: 0,
  });
  const [poltSelectionInfo, setPoltSelectionInfo] = useState({
    G: "1BHK",
    G1: "1BHK",
    G2: "1BHK",
    G3: "1BHK",
    G4: "1BHK",
  });
  const [Parking, setParking] = useState({
    PoltType: "",
    propertytype: "",
    length: "",
    breadth: "",
  });
  const [Groundfloor, setGroundfloor] = useState({
    PoltType: "",
    propertytype: "",
    length: "",
    breadth: "",
  });

  const [Groundfloor1, setGroundfloor1] = useState({
    PoltType: "",
    propertytype: "",
    length: "",
    breadth: "",
  });
  const [Groundfloor2, setGroundfloor2] = useState({
    PoltType: "",
    propertytype: "",
    length: "",
    breadth: "",
  });
  const [Groundfloor3, setGroundfloor3] = useState({
    PoltType: "",
    propertytype: "",
    length: "",
    breadth: "",
  });
  const [Groundfloor4, setGroundfloor4] = useState({
    PoltType: "",
    propertytype: "",
    length: "",
    breadth: "",
  });
  const BuiltUplength =
    Number(areaForm.l) - (Number(areaForm.setBackLenghtLeft) + Number(areaForm.setBackLenghtRight));
  const BuiltUpBreath =
    Number(areaForm.b) - (Number(areaForm.backbreadthFront) + Number(areaForm.backbreadthright));

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
            {" "}
            <Slider defaultValue={30} />{" "}
          </div>
        ),
      },

      // {
      //   name: "6",
      //   category: "contentHall",
      //   bgcolor: "yellow",
      //   custom: (
      //     <div
      //       style={{
      //         transareaForm: "rotate(90deg)",
      //       }}
      //     >
      //       {" "}
      //       <Slider defaultValue={30} />{" "}
      //     </div>
      //   ),
      // },
      //
    ],
  };
  const [state, setState] = useState(initialState);

  useEffect(() => {
    if (count > 2) {
      setParking({
        PoltType: "Parking",
        // propertytype: poltSelectionInfo.poltSelectionInfo,
        length: BuiltUplength,
        breadth: BuiltUpBreath,
      });
    }
  }, [count, poltSelectionInfo]);

  useEffect(() => {
    setGroundfloor({
      PoltType: "",
      propertytype: "",
      length: BuiltUplength,
      breadth: BuiltUpBreath,
    });
    setGroundfloor1({
      PoltType: "",
      propertytype: "",
      length: BuiltUplength,
      breadth: BuiltUpBreath,
    });
    setGroundfloor2({
      PoltType: "",
      propertytype: "",
      length: BuiltUplength,
      breadth: BuiltUpBreath,
    });
    setGroundfloor3({
      PoltType: "",
      propertytype: "",
      length: BuiltUplength,
      breadth: BuiltUpBreath,
    });
    setGroundfloor4({
      PoltType: "",
      propertytype: "",
      length: BuiltUplength,
      breadth: BuiltUpBreath,
    });
  }, [BuiltUplength, BuiltUpBreath]);

  useEffect(() => {
    const Area = areaForm.l * areaForm.b;
    if (Area !== 0 && Area < 2156) {
      setareaForm((prev) => {
        return {
          ...prev,
          backbreadthFront: 4.8,
        };
      });
    }
    if (Area !== 0 && Area < 1056) {
      setareaForm((prev) => {
        return {
          ...prev,
          setBackLenghtLeft: 1.6,
          setBackLenghtRight: 1.6,
          backbreadthright: 1.6,
        };
      });
    }
  }, [areaForm.l, areaForm.b]);

  const onDragStart = (ev, id) => {
    console.log("dragstart:", id);
    ev.dataTransfer.setData("id", id);
  };
  // console.log("moment", moment().unix());

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

  var tasks = {
    wip: [],
    bedroom: [],
    complete: [],
    outsideDiv: [],
    contentHall: [],
    windowsContent: [],
    cupboardsContent: [],
    basinContent: [],

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
          style={{ backgroundColor: t.bgcolor }}
        >
          {t.custom}
        </div>
      </Draggable>,
    );
  });
  const [dynamiclayout, setDynamiclayout] = useState([

  ]);

  const onClose = () => {
    setVisible(false);
  };
  const handleAreaPro = (type, area,propertyfaceing) => {
    const data = Percentage(type, area);
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
      currentwidth += breadth;
      if ((index + 1) % 5 === 0) {
        currentwidth = 0;
        maxheight = currentheight;
        currentheight = 0;
      }
      return newObj;
    });
    setDynamiclayout(lb);
  }

  const showDrawer = () => {
    setVisible(true);
  };

  const handleSerarch = async () => {
    const plot = [
      {
        ...Groundfloor,
        label: "G",
        propertytype: poltSelectionInfo.G,
        lb: Number(Groundfloor.length) * Number(Groundfloor.breadth),
      },
      {
        ...Groundfloor1,
        label: "G+1",
        propertytype: poltSelectionInfo.G1,
        lb: Number(Groundfloor1.length) * Number(Groundfloor1.breadth),
      },
      {
        ...Groundfloor2,
        label: "G+2",
        propertytype: poltSelectionInfo.G2,
        lb: Number(Groundfloor2.length) * Number(Groundfloor2.breadth),
      },
      {
        ...Groundfloor3,
        label: "G+3",
        propertytype: poltSelectionInfo.G3,
        lb: Number(Groundfloor3.length) * Number(Groundfloor3.breadth),
      },
      {
        ...Groundfloor4,
        label: "G+4",
        propertytype: poltSelectionInfo.G4,
        lb: Number(Groundfloor4.length) * Number(Groundfloor4.breadth),
      },
    ];
    // const area=plot.filter({lb})=>lb!==0);


    const area = plot.slice(0, count)
      .filter(({ lb }) => lb !== 0)
      .map(({ propertytype, lb, label }) => ({
        type: propertytype,
        area: lb,
        label,
      }));

    if (area.length > 0) {
      const obj = area[0];
      handleAreaPro(obj.type, obj.area);
    }
    setploatTotaolArea(area);
  };

  const handleplanlockchange = async () => {
    console.log("handleplanlockchange", completePlotArea);
  };





  useEffect(() => {
    ploatTotaolArea.map((instance) => {
      const obj = handleAreaPro(instance.type, instance.area);
      setcompletePlotArea((prev) => ({
        ...prev,
        [instance.label]: obj,
      }));
    });
  }, [ploatTotaolArea]);
  //
  useEffect(() => {
    console.log("setcompletePlotArea", completePlotArea);
  }, [completePlotArea]);
  const handleSelectpolt = (name, val) => {
    console.log("val", name);
    setPoltSelectionInfo({
      ...poltSelectionInfo,
      [name]: val,
    });
    if (name === "G") {
      setGroundfloor({
        PoltType: "",
        propertytype: "",
        length: "",
        breadth: "",
      });
    } else if (name === "G1") {
      setGroundfloor1({
        PoltType: "",
        propertytype: "",
        length: "",
        breadth: "",
      });
    } else if (name === "G2") {
      setGroundfloor2({
        PoltType: "",
        propertytype: "",
        length: "",
        breadth: "",
      });
    } else if (name === "G3") {
      setGroundfloor3({
        PoltType: "",
        propertytype: "",
        length: "",
        breadth: "",
      });
    } else if (name === "G4") {
      setGroundfloor4({
        PoltType: "",
        propertytype: "",
        length: "",
        breadth: "",
      });
    }
  };

  const handleInputFormChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setareaForm((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const percentage = (partialValue, totalValue) => {
    // return ((100 * partialValue) / Number(areaForm.l)) * Number(areaForm.b);
    // console.log("partialValue",(partialValue *(Number(areaForm.l)) * Number(areaForm.b)) / 100)
    const total = Number(areaForm.l) * Number(areaForm.b);
    if (partialValue) {
      return ((partialValue / total) * 100).toFixed(2);
    } else {
      return 0;
    }
  };

  const handleplotarea = (e, val) => {
    const { id, name, max, min } = e.target;
    const value = Math.max(min, Math.min(max, Number(e.target.value)));
    if (id === "Ground") {
      setGroundfloor({
        ...Groundfloor,
        [name]: value,
        PoltType: id,
        propertytype: val,
      });
    } else if (id === "Ground1") {
      setGroundfloor1({
        ...Groundfloor1,
        [name]: value,
        PoltType: id,
        propertytype: val,
      });
    } else if (id === "Ground2") {
      setGroundfloor2({
        ...Groundfloor2,
        [name]: value,
        PoltType: id,
        propertytype: val,
      });
    } else if (id === "Ground3") {
      setGroundfloor3({
        ...Groundfloor3,
        [name]: value,
        PoltType: id,
        propertytype: val,
      });
    } else if (id === "Ground4") {
      setGroundfloor4({
        ...Groundfloor4,
        [name]: value,
        PoltType: id,
        propertytype: val,
      });
    }
  };

  // console.log("ploatAreaTotal", ploatAreaTotal);
  const { G: Ground, G1: Ground1, G2: Ground2, G3: Ground3, G4: Ground4 } = poltSelectionInfo;

  return (
    <div>
      <div className="PdfViewer_conatiner">
        <div className="plot_size_data">
     
        </div>
        <div className="searchbar_content">
          <Tabs defaultActiveKey="1" style={{ margin: 0 }}>
            {ploatTotaolArea.map(({ type, area, label }, index) => {
              return (
                <>
                  <TabPane tab={label} key={label}>
                      <div className="loyout_directions">
                      <PlotAreaSectionPro
                        setcompletePlotArea={setcompletePlotArea}
                        index={label}
                        area={area}
                        type={type}
                        propertyfaceing={propertyfaceing}
                      />
                    </div>
                  </TabPane>
                </>
              );
            })}
          </Tabs>
        </div>

        {/* <div
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
        </div> */}
      </div>
    </div>
  );
};

export default PlotAreaSection;
