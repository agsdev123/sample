import moment from "moment";
import axios from "axios";

export const blockInvalidChar = (e) =>
  ["e", "E", "+", "-", "#", "$", "(", "@", ")"].includes(e.key) && e.preventDefault();

// export const funturedisabledDate = (current) => {
//   // Can not select days before today and today
//   return current && current.valueOf() > Date.now();
// };
// export const getCurrentWeek = () => {
//   var currentDate = moment();

//   var weekStart = currentDate.clone().startOf("isoWeek");
//   // var weekEnd = currentDate.clone().endOf("isoWeek");

//   var days = [];

//   for (var i = 0; i <= 6; i++) {
//     // days.push(moment(weekStart).add(i, 'days').format());

//     days.push({
//       day: new Date(moment(weekStart).add(i, "days").format()),
//       date: new Date(moment(weekStart).add(i, "days").format()),
//     });
//   }
//   return days;
// };
// export const getGeoInfo = async () => {
//   try {
//     const res = await axios.get("https://ipapi.co/json/");
//     return res.data;
//   } catch (error) {
//     // console.log(error);
//   }
// };
