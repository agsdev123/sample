import React from 'react'
import CustomTable from '../../../../../components/Table/CustomTable'
import "./DyamicProperty.scss"
const DyamicProperty = ({ activityinfo }) => {
    console.log("activityinfo", activityinfo);
    const firstLevelColumns = [
        {
            title: "ActivityName",
            dataIndex: "ActivityName",
            key: "ActivityName",
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
        title: "Resource Type",
        dataIndex: "resourceType",
        key: "resourceType",
      },
      {
        title: "Resource Name",
        dataIndex: "resourceName",
        key: "resourceName",
      },
      {
        title: "SqFeet",
        dataIndex: "minSqFeet",
        key: "minSqFeet",
        render: (value, item, index) => {
          const { minsq } = item;
          return <span>{minsq} </span>;
        },
      },
      {
        title: "Measurements",
        dataIndex: "measurements",
        key: "measurements",
        render: (value, item, index) => {
         
            const { incomemeasurements, measurements,measurementsunits } = item;
          
          return <span>{(incomemeasurements * measurementsunits).toFixed(2)} </span>;
        },
      },
      {
        title: "Cost",
        dataIndex: "Cost",
        key: "Cost",
        render: (value, item, index) => {
          console.log("value", item);
          const { incomemeasurements, measurements, cost } = item;
          return <span>{(incomemeasurements * measurements * cost).toFixed(2)} </span>;
        },
      },
    //   {
    //     title: "EstimationDays",
    //     dataIndex: "estimationDays",
    //     key: "estimationDays",
    //     // ellipsis: {
    //     //   showTitle: false,
    //     // },
    //     // render: (notes) => (
    //     //   <Tooltip placement="topLeft" title={notes}>
    //     //     {notes}
    //     //   </Tooltip>
    //     // ),
    //   },
    ];
    const fakeFirstLevelData = [];
    for (const iterator of activityinfo??[]) {

        const { active, cost, duration, subactivity, minsq } = iterator;
        const { resources, estimationDays, incomemeasurements, measurements, minSqFeet } =
            subactivity[0] ?? [];

        const resourcedata = [];
        for (const iterator of resources??[]) {
            resourcedata.push({
              ...iterator,
              estimationDays,
              incomemeasurements,
              measurements,
              minSqFeet,
              minsq,
            });
        }

        fakeFirstLevelData.push({
          ActivityName: active,
          // roomId,
          duration: `${duration ?? 0} days`,
          cost: `₹ ${cost.toFixed(2)}`,
          // id:_id,
          secondLevel: resourcedata,
        });
    }


    const firstExpandedRow = (record, index, indent, expanded) => {
        let data = [];
        data.push(record.secondLevel);
        console.log("record.secondLevel)", record.secondLevel);
        return (
            <div className="first_table_data" >
                <CustomTable
                    rowKey={(record) => record.cardholderid}
                    columns={secondLevelColumns}
                    pagination={false}
                    dataSource={Array.isArray(record.secondLevel) ? record.secondLevel : []}
                />
            </div>
        );
    };

    return (
      <div className="DyamicProperty_table">
        <CustomTable
          dataSource={fakeFirstLevelData}
          columns={firstLevelColumns}
          rowKey={(record) => record.ActivityName}
          loading={fakeFirstLevelData ? false : true}
        //   pagination={{ position: ["bottomCenter"], pageSize: 8 }}
          scroll={{ y: 200 }}
          expandable={{
            expandedRowRender: firstExpandedRow,
            defaultExpandAllRows: false,
          }}
        />
      </div>
    );
};

export default DyamicProperty