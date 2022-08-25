import React, { useState, useEffect, useCallback } from "react";
import { Modal, Tooltip, message } from "antd";
import { DeleteOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
// import SmartPhoneColumns from "../Tabledata/Tabledata";
import "./AllPropertys.scss";


import { AssetsImage } from "../../../../../constants/AssetsConstant";
import { useSelector, useDispatch } from "react-redux";
import CustomTable from "../../../../../components/Table/CustomTable";
import CustomImage from "../../../../../components/Image/CustomImage";


const AllPropertys = ({ PropertyList=[] }) => {
  const dispatch = useDispatch();
  // const PropertyList = useSelector((state) => state.Properties?.PropertyList);

  const mainColumns = [
    {
      title: "Property Name",
      dataIndex: "title",
      key: "title",
    },
    {
      // these one we are searching
      title: "Address",
      dataIndex: "address",
      key: "address",
      render: (value, item, index) => {
        const { street } = item?.Total_Sq?.address ?? {};
        return <span>{street}</span>;
      },
    },
    {
      title: "Total Sq",
      dataIndex: "Total_Sq",
      key: "Total_Sq",
      render: (value, item, index) => {
        const { length, breadth } = value ?? {};
        return <span>{length * breadth}</span>;
      },
    },

    {
      // these one we are searching
      title: "Facing",
      dataIndex: "facing",
      key: "facing",
    },

    {
      title: "Cost",
      dataIndex: "cost",
      key: "cost",
    },
    {
      title: "Duration",
      dataIndex: "duration",
      key: "duration",
    },
  ];
  const propertiesColumns = [
    {
      title: "Property Name",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "No of Bedrooms",
      dataIndex: "No_of_Bedrooms",
      key: "No_of_Bedrooms",
    },
    {
      title: "No of Dinning Rooms",
      dataIndex: "No_of_Dinning_Rooms",
      key: "No_of_Dinning_Rooms",
    },
    {
      title: "No of Kitchen Rooms",
      dataIndex: "No_of_Kitchen_Rooms",
      key: "No_of_Kitchen_Rooms",
    },
    {
      title: "No of LivingRooms",
      dataIndex: "No_of_LivingRooms",
      key: "No_of_LivingRooms",
    },
    {
      title: "Facing",
      dataIndex: "facing",
      key: "facing",
    },
  ];
  const propertiesdata = [
    {
      title: "Property Name",
      Facing: "",
    },
    {
      title: "No of Bedrooms",
    },
    {
      title: "No of Dinning Rooms",
    },
    {
      title: "No of Kitchen Rooms",
    },
    {
      title: "No of LivingRooms",
    },
  ];
  const firstLevelColumns = [
    {
      title: "Mainactivity",
      dataIndex: "mainActivityName",
      key: "mainActivityName",
    },
    {
      title: "Duration",
      dataIndex: "duration",
      key: "duration",
    },
    {
      title: "Cost",
      dataIndex: "cost",
      key: "cost",
    },
  ];
  const secondLevelColumns = [
    {
      title: "SubActivityName",
      dataIndex: "activityName",
      key: "",
    },
    {
      title: "Duration",
      dataIndex: "resources",
      key: "resources",
      render: (value, item, index) => {
        console.log("value", value);
        let Totalduration = value.reduce(function (accumulator, item) {
          return accumulator + item.duration;
        }, 0);
        return <span>{Totalduration} days</span>;
      },
    },
    {
      title: "Cost",
      dataIndex: "resources",
      key: "resources",
      render: (value, item, index) => {
        let totalcost = value.reduce(function (accumulator, item) {
          if (item.resourceType === "Work") {
            return accumulator + item.quantity * item.duration * 8 * item.resourceId.cost;
          } else if (item.resourceType === "Material") {
            return accumulator + item.quantity * 1 * item.resourceId.cost;
          }
        }, 0);
        return <span>₹ {totalcost} </span>;
      },
    },
    {
      title: "Number of resources",
      dataIndex: "resources",
      key: "resources",
      render: (value, item, index) => {
        return <span>{value?.length} </span>;
      },
    },


  ];

  const fakeFirstLevelData = [];
  const secondExpandedRow = (record, index, indent, expanded) => {
    let data = [];

    data.push(record.secondLevel);

    return (
      <div className="first_table_data">
        <CustomTable
          rowKey={(record) => record.cardholderid}
          columns={secondLevelColumns}
          dataSource={Array.isArray(record.secondLevel) ? record.secondLevel : []}
          // expandable={{ expandedRowRender: secondExpandedRow }}
          pagination={false}
        />
      </div>
    );
  };
  const propertydata = [];
  for (const iterator of PropertyList) {
    const { title, activities, livingRoom, kitchen, bedrooms, _id, dinning, facing } =
      iterator ?? {};
    let mainsubcost = activities?.map(({ activityId }) => {
      return activityId?.resources?.reduce(function (accumulator, item) {
        if (item.resourceType === "Work") {
          return accumulator + item.quantity * item.duration * 8 * item.resourceId.cost;
        } else if (item.resourceType === "Material") {
          return accumulator + item.quantity * 1 * item.resourceId.cost;
        }
      }, 0);
    });
    const maintotalcost = mainsubcost?.reduce(function (accumulator, item) {
      return accumulator + item;
    }, 0);
    let mainsubduration = activities?.map(({ activityId }) => {
      return activityId?.resources?.reduce(function (accumulator, item) {
        return accumulator + item.duration;
      }, 0);
    });
    const mainTotalduration = mainsubduration?.reduce(function (accumulator, item) {
      return accumulator + item;
    }, 0);
    let fakeFirstLevelData = [];

    let activityinfo = activities?.reduce((agg, curr) => {
      let found = agg.find((x) => x.mainActivityName === curr.mainActivityName);
      if (found) {
        found.subactivity.push({
          activityName: curr.activityId.activityName,
          resources: curr.activityId.resources,
          activityId: curr.activityId.activityId,
          notes: curr.activityId.notes,
        });
      } else {
        agg.push({
          mainActivityName: curr.mainActivityName,
          subactivity: [
            {
              activityName: curr.activityId.activityName,
              resources: curr.activityId.resources,
              activityId: curr.activityId.activityId,
              notes: curr.activityId.notes,
            },
          ],
        });
      }
      return agg;
    }, []);

    for (const iterator of activityinfo) {
      const { mainActivityName, subactivity } = iterator ?? {};
      let subcost = subactivity.map(({ resources }) => {
        return resources.reduce(function (accumulator, item) {
          console.log("item", item);
          if (item.resourceType === "Work") {
            return accumulator + item.quantity * item.duration * 8 * item.resourceId.cost;
          } else if (item.resourceType === "Material") {
            return accumulator + item.quantity * 1 * item.resourceId.cost;
          }
        }, 0);
      });
      const totalcost = subcost.reduce(function (accumulator, item) {
        return accumulator + item;
      }, 0);
      let subduration = subactivity.map(({ resources }) => {
        return resources.reduce(function (accumulator, item) {
          return accumulator + item.duration;
        }, 0);
      });
      const Totalduration = subduration.reduce(function (accumulator, item) {
        return accumulator + item;
      }, 0);
      fakeFirstLevelData.push({
        mainActivityName,
        duration: `${Totalduration} days`,
        cost: `₹ ${totalcost}`,
        // id:_id,
        secondLevel: [
          ...subactivity,
          // {
          //   SubActivityName: activityName,
          //   Duration: duration,
          //   resourceName,
          //   Type: resourceType,
          //   cost,
          // },
        ],
      });
    }

    propertydata.push({
      title,
      duration: `${mainTotalduration} days`,
      cost: `₹ ${maintotalcost}`,
      facing,
      Total_Sq: iterator,
      _id,
      propertiesdata: [
        {
          No_of_Bedrooms: bedrooms?.length ?? 0,
          No_of_Dinning_Rooms: dinning?.length ?? 0,
          No_of_Kitchen_Rooms: kitchen?.length ?? 0,
          No_of_LivingRooms: livingRoom?.length ?? 0,
        },
      ],
      activities: fakeFirstLevelData,
    });
  }

  const firstExpandedRow = (record, index, indent, expanded) => {
    let data = [];

    data.push(...record.propertiesdata);
    return (
      <div className="first_table_data">
        <CustomTable
          rowKey={(record) => record.cardholderid}
          columns={propertiesColumns}
          dataSource={Array.isArray(data) ? data : []}
          pagination={false}
        />
        <CustomTable
          dataSource={record.activities}
          columns={firstLevelColumns}
          rowKey={(record) => record.mainActivityName}
          loading={fakeFirstLevelData ? false : true}
          pagination={false}
          scroll={{ y: 200 }}
          expandable={{
            expandedRowRender: secondExpandedRow,
            defaultExpandAllRows: false,
          }}
        />
      </div>
    );
  };

  return (
    <>
      <div className="AllPropertys_container">
        <div className="AllPropertys_table">
          <CustomTable
            dataSource={propertydata}
            scroll={{ y: 200 }}
            columns={mainColumns}
            pagination={{ position: ["bottomCenter"], pageSize: 10 }}
            expandable={{
              expandedRowRender: firstExpandedRow,
              defaultExpandAllRows: false,
            }}
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>
    </>
  );
};

export default AllPropertys;
