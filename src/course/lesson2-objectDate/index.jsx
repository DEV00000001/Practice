import React from 'react'

function Lesson2_0() {
  // Date objects = Objects that contain values that represent dates and times 
  // these date objects can be changed and formatted 

  // Creating a date object
  const date = new Date();
  // date is return : Sat Sep 13 2025 08:46:26 GMT+0700 (Giờ Đông Dương)
  //                  day of week, month, day, year, hour, minute, second, timezone
  console.log(date);


  // Date(year, month, day, hours, minutes, seconds, milliseconds)
  // 2024-10-20 10:46:26
  // default time zone of the environment
  const specificDate = new Date(2024, 9, 20, 20, 46, 26); // month is 0-indexed 
  console.log("specificDate:", specificDate);


  // format YYYY-MM-DDTHH:mm:ss.sssZ (T separates date and time, Z indicates UTC time)
  const specificDate2 = new Date("2024-10-20T10:46:26Z"); // Z means UTC time
  console.log("specificDate2:", specificDate2);


  // 0 milliseconds from January 1, 1970, 00:00:00 UTC
  // 1 second = 1000 milliseconds
  const specificDate3 = new Date(0); // January 1, 1970, 00:00:00 UTC (EPIC DATE)
  const specificDate4 = new Date(1000); // January 1, 1970, 00:00:01 UTC
  console.log("specificDate3:", specificDate3);
  console.log("specificDate4:", specificDate4);

  // Date methods
  const date1 = new Date();
  const year = date1.getFullYear(); // get the year (4 digits)
  const month = date1.getMonth(); // get the month (0-11)
  const day = date1.getDate(); // get the day of the month (1-31)
  const hours = date1.getHours(); // get the hours (0-23)
  const dayOfWeek = date1.getDay(); // get the day of the week (0-6) 0 is Sunday, 1 is Monday, ..., 6 is Saturday

  // you can set the date using set methods
  const date2 = new Date();
  date2.setFullYear(2022); // set the year to 2022
  console.log(date2);

  // compare dates 
  const dateA = new Date("2024-12-31");
  const dateB = new Date("2025-01-01");
  if(dateB > dateA) {
    console.log("dateB is later than dateA");
    console.log("happy new year");
  }

  return (
    <div>index</div>
  )
}

export default Lesson2_0