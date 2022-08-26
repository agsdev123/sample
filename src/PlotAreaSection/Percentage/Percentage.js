import React from "react";

const percentage = (type = "1BHK", area, propertyfaceing = "SOUTH") => {
  function LengthAndBreadthLogic(area, per) {
    return (per * area) / 100;
  }

  const CalArea = (area, category, arr) => {
    const newObj = arr[propertyfaceing][Math.floor(Math.random() * arr[propertyfaceing].length)].map(({ category, l: len, b: breadth }) => {
      const l = len;
      const b = breadth;
      const l_b = len * breadth;

      return {
        category,
        area,
        l: LengthAndBreadthLogic(area, len),
        b: LengthAndBreadthLogic(area, breadth),
        l_b: LengthAndBreadthLogic(area, len * breadth),
        ColsCount:4
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
          category: "HYBRID",
          l: 7.0,
          b: 10.0,
        },
        {
          category: "BATH",
          l: 3.0,
          b: 10.0,
        },
      ],
      NORTH: [
        {
          category: "HYBRID",
          l: 7.0,
          b: 10.0,
        },
        {
          category: "BATH",
          l: 3.0,
          b: 10.0,
        },
      ],

      EAST: [
        {
          category: "HYBRID",
          l: 7.0,
          b: 10.0,
        },
        {
          category: "BATH",
          l: 3.0,
          b: 10.0,
        },
      ],
      WEST: [
        {
          category: "HYBRID",
          l: 7.0,
          b: 10.0,
        },
        {
          category: "BATH",
          l: 3.0,
          b: 10.0,
        },
      ],
    },

    {
      SOUTH: [
        {
          category: "BATH",
          l: 2.67,
          b: 2.67,
        },
        {
          category: "KITCHEN",
          l: 4.0,
          b: 2.67,
        },
        {
          category: "BED/LIVING",
          l: 6.67,
          b: 6.67,
        },
      ],

      NORTH: [
        {
          category: "BED+LIVING",
          l: 7.14,
          b: 7.14,
        },
        {
          category: "BATH",
          l: 2.86,
          b: 2.86,
        },
        {
          category: "KITCHEN",
          l: 4.29,
          b: 2.86,
        },
      ],
      WEST: [
        {
          category: "BED+LIVING",
          l: 7.14,
          b: 7.14,
        },
        {
          category: "BATH",
          l: 2.86,
          b: 2.86,
        },
        {
          category: "KITCHEN",
          l: 4.29,
          b: 2.86,
        },
      ],

      EAST: [
        {
          category: "BATH",
          l: 2.86,
          b: 2.86,
        },
        {
          category: "KITCHEN",
          l: 4.29,
          b: 2.86,
        },
        {
          category: "BED+LIVING",
          l: 7.14,
          b: 7.14,
        },
      ],
    },
    {
      // 2 ROWS 2 COLUMNS

      SOUTH: [
        {
          category: "BED",
          l: 3.42,
          b: 4.27,
        },
        {
          category: "BATH",
          l: 2.14,
          b: 4.27,
        },
        {
          category: "LIVING",
          l: 3.21,
          b: 3.42,
        },
        {
          category: "KITCHEN",
          l: 2.35,
          b: 3.42,
        },
      ],

      NORTH: [
        {
          category: "LIVING",
          l: 3.42,
          b: 3.21,
        },
        {
          category: "KITCHEN",
          l: 3.42,
          b: 2.35,
        },
        {
          category: "BATH",
          l: 2.14,
          b: 4.27,
        },
        {
          category: "BED",
          l: 3.42,
          b: 4.27,
        },
      ],

      WEST: [
        {
          category: "KITCHEN",
          l: 2.35,
          b: 3.42,
        },
        {
          category: "BED1",
          l: 3.42,
          b: 4.27,
        },
        {
          category: "LIVING",
          l: 3.21,
          b: 3.42,
        },
        {
          category: "BATH",
          l: 2.14,
          b: 4.27,
        },
      ],
      EAST: [
        {
          category: "BED1",
          l: 2.35,
          b: 3.42,
        },
        {
          category: "KITCHEN",
          l: 3.21,
          b: 3.42,
        },
        {
          category: "BATH",
          l: 2.14,
          b: 4.27,
        },
        {
          category: "LIVING",
          l: 3.42,
          b: 4.27,
        },
      ],
    },
    {
      SOUTH: [
        [{
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
        }],
         [{
          category: "B2",
          l: 1.97,
          b: 1.52,
        },

        {
          category: "BATH",
          l: 0.76,
          b: 1.52,
        },

        {
          category: "DINING",
          l: 1.52,
          b: 1.52,
        },

        {
          category: "BALCONY",
          l: 0.76,
          b: 1.52,
        },

        {
          category: "PARKING/STAIR",
          l: 1.52,
          b: 1.52,
        },
        {
          category: "C-BATH",
          l: 0.76,
          b: 1.52,
        },

        {
          category: "LIVING",
          l: 1.21,
          b: 1.52,
        },
        {
          category: "KITCHEN",
          l: 1.52,
          b: 1.52,
        }]
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

  if (type === "1BHK") return CalArea(area, type, BHK1[3]);
  // else if (type === "2BHK") return CalArea(area, type, BHK2);
  // else if (type === "3BHK") return CalArea(area, type, BHK3);
  // else if (type === "4BHK") return CalArea(area, type, BHK4);
  else return [];
};
export default percentage;
