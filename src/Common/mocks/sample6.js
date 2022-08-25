import React from "react";

const percentage = (type = "1BHK", area) => {
  function LengthAndBreadthLogic(area, per) {
    let l_b = Math.floor((per * area) / 100);
    let sqrt = Math.sqrt(l_b).toFixed(2);
    let l = sqrt;
    let b = sqrt;
    return [Number(l), Number(b), l_b];
  }
  const CalArea = (area, category, arr) => {
    const newObj = arr.map(({ category, percentage, subrooms = [] }) => {
      const l = LengthAndBreadthLogic(area, percentage)[0];
      const b = LengthAndBreadthLogic(area, percentage)[1];
      const l_b = LengthAndBreadthLogic(area, percentage)[2];
      let subRooms = [];
      if (subrooms.length > 0) {
        const l = LengthAndBreadthLogic(l_b, subrooms[0].percentage)[0];
        const b = LengthAndBreadthLogic(l_b, subrooms[0].percentage)[1];
        const Roomtype=subrooms[0].category
        const lb_area = LengthAndBreadthLogic(l_b, subrooms[0].percentage)[2];
        subRooms.push({
          l,
          b,
          lb_area,
          Roomtype
        });
      }
      return {
        category,
        percentage,
        area,
        l,
        b,
        l_b,
        subRooms,
      };
    });

    console.log("hshhshsh", newObj);
    return {
      calArea: newObj,
      category,
      area,
    };
  };

  const BHK1 = [
      {
      category: "BATH",
      percentage: 5,
    },
    {
      category: "BED1",
      percentage: 20,
    },
    {
      category: "DIN",
      percentage: 15,
    },
     {
      category: "BALCONY",
      percentage: 5,
    },
  
   {
      category: "PARKING",
      percentage: 11,
    
    },
      {
      category: "CBATH",
      percentage: 5,
    },
   {
      category: "LIVING",
      percentage: 15,
    },

      {
      category: "KIT",
      percentage: 12,
    },
  ];
  const BHK2 = [
       {
      category: "BATH1",
      percentage: 3,
    },
    {
      category: "BED1",
      percentage: 13,
    },

    {
      category: "DINING",
      percentage: 7,
    },

      {
      category: "BED2",
      percentage: 13,
    },

 {
      category: "BATH2",
      percentage: 3,
    },
    //  {
    //   category: "BALCONY",
    //   percentage: 3,
    // },


   {
      category: "PARKING",
      percentage: 10,
    
    },
    {
      category: "STAIRCASE",
      percentage: 3,
    
    },
      {
      category: "CBATH",
      percentage: 5,
    },
   {
      category: "LIVING",
      percentage: 12,
    },

      {
      category: "KIT",
      percentage: 7.5,
    },
   
  ];
  const BHK3 = [
    {
      category: "B1",
      percentage: 25,
      subrooms: [
        {
          percentage: 7,
        },
      ],
    },
    {
      category: "B2",
      percentage: 19,
      subrooms: [
        {
          percentage: 5,
        },
      ],
    },
    {
      category: "B3",
      percentage: 16,
      subrooms: [
        {
          percentage: 4,
        },
      ],
    },
    {
      category: "LIV",
      percentage: 10,
    },
    {
      category: "KIT",
      percentage: 8,
    },
    // {
    //   category: "Bath",
    //   percentage: 7,
    // },
    // {
    //   category: "Bath2",
    //   percentage: 5,
    // },
    // {
    //   category: "Bath3",
    //   percentage: 4,
    // },
    {
      category: "DIN",
      percentage: 10,
    },
    {
      category: "CAR",
      percentage: 12,
    },
  ];
  const BHK4 = [
    {
      category: "B1",
      percentage: 23,
      subrooms: [
        {
          percentage: 7,
        },
      ],
    },
    {
      category: "B2",
      percentage: 20,
      subrooms: [
        {
          percentage: 6,
        },
      ],
    },
    {
      category: "B3",
      percentage: 17,
      subrooms: [
        {
          percentage: 5,
        },
      ],
    },
    {
      category: "B4",
      percentage: 12,
      subrooms: [
        {
          percentage: 4,
        },
      ],
    },
    {
      category: "LIV",
      percentage: 8,
    },
    {
      category: "KIT",
      percentage: 8,
    },
    // {
    //   category: "Bath",
    //   percentage: 7,
    // },
    // {
    //   category: "Bath2",
    //   percentage: 6,
    // },
    // {
    //   category: "Bath3",
    //   percentage: 5,
    // },
    // {
    //   category: "Bath4",
    //   percentage: 4,
    // },
    {
      category: "DIN",
      percentage: 6,
    },
    {
      category: "CAR",
      percentage: 6,
    },
  ];
  if (type === "1BHK") return CalArea(area, type, BHK1);
  else if (type === "2BHK") return CalArea(area, type, BHK2);
  else if (type === "3BHK") return CalArea(area, type, BHK3);
  else if (type === "4BHK") return CalArea(area, type, BHK4);
  else return [];

};
export default percentage;
