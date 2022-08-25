import React from "react";

const percentage = (type = "1BHK", area, propertyfaceing = "SOUTH") => {
  function LengthAndBreadthLogic(area, per) {
    return (per * area) / 100;
  }

  const CalArea = (area, category, arr) => {
    const newObj = arr[propertyfaceing].map(({ category, l: len, b: breadth }) => {
      const l = len;
      const b = breadth;
      const l_b = len * breadth;

      return {
        category,
        area,
        l: LengthAndBreadthLogic(area, len),
        b: LengthAndBreadthLogic(area, breadth),
        l_b: LengthAndBreadthLogic(area, len * breadth),
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
      SOUTH: [
     {
          category: "B1",
          l: 3.24,
          b: 3.34,
        },

        {
          category: "KIT",
          l: 2.02,
          b: 1.89,
        },

        {
          category: "BATH",
          l:1.08,
          b: 1.89,
        },

        {
          category: "BALCONY",
          l: 0.76,
          b: 1.52,
        },

      
        {
          category: "C-BATH",
          l: 0.76,
          b: 1.52,
        },

        {
          category: "LIVING",
          l: 1.16,
          b: 1.89,
        },
        {
          category: "DIN",
          l: 2.02,
          b: 3.24,
        }
      ],

      NORTH: [
        {
          category: "STAIR/STORE",
          l: 0.61,
          b: 1.52,
        },
        {
          category: "C-BATH",
          l: 0.76,
          b: 1.52,
        },

        {
          category: "LIVING",
          l: 1.82,
          b: 1.52,
        },
        {
          category: "PARKING",
          l: 1.82,
          b: 1.52,
        },

        {
          category: "BATH1",
          l: 0.61,
          b: 1.52,
        },
        {
          category: "BED1",
          l: 1.82,
          b: 1.52,
        },

        {
          category: "DINING",
          l: 1.52,
          b: 1.52,
        },
        {
          category: "KITCHEN",
          l: 1.06,
          b: 1.52,
        },
      ],

      EAST: [
        {
          category: "DINING",
          l: 2.03,
          b: 1.802,
        },
        {
          category: "KITCHEN",
          l: 2.14,
          b: 1.351,
        },
        {
          category: "BATH",
          l: 2.03,
          b: 1.351,
        },
        {
          category: "LIVING",
          l: 2.14,
          b: 2.252,
        },

        {
          category: "BED",
          l: 2.03,
          b: 2.252,
        },
        {
          category: "PARKING/STAIR",
          l: 2.14,
          b: 1.8,
        },
      ],

      WEST: [
        {
          category: "PARKING/STAIR",
          l: 2.03,
          b: 2.703,
        },
        {
          category: "KITCHEN",
          l: 2.14,
          b: 1.351,
        },
        {
          category: "BED",
          l: 2.03,
          b: 2.703,
        },
        {
          category: "KITCHEN1",
          l: 2.14,
          b: 1.351,
        },

        {
          category: "DINING",
          l: 2.03,
          b: 1.802,
        },
        {
          category: "LIVING",
          l: 2.14,
          b: 2.252,
        },
      ],
    },
  ];

  if (type === "1BHK") return CalArea(area, type, BHK1[0]);
  // else if (type === "2BHK") return CalArea(area, type, BHK2);
  // else if (type === "3BHK") return CalArea(area, type, BHK3);
  // else if (type === "4BHK") return CalArea(area, type, BHK4);
  else return [];
};
export default percentage;
