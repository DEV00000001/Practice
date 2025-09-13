import React from "react";
import { format, compareAsc, compareDesc } from "date-fns";
import { sub } from "date-fns";
function Lesson2_1() {
  format(new Date(2024, 1, 11), "MM/dd/yyyy");
  // "02/11/2024"
  console.log(format(new Date(2024, 1, 11), "MM/dd/yyyy"));

  const dates = [
    new Date(2024, 1, 11),
    new Date(2023, 5, 21),
    new Date(2025, 3, 15),
  ];
  console.log("dates (ascending)", [...dates].sort(compareAsc));
  console.log("dates (descending)", [...dates].sort(compareDesc));

  // subtract 1 year, 2 months, and 10 days from a date
  const rs = sub(new Date(), {
    years: 10
  })
  console.log(rs);

  return <div>Lesson2_1</div>;
}

export default Lesson2_1;
