import { Link } from "react-router-dom";
//import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

export default function DayList() {
  const days = useFetch("http://localhost:3001/days");

  // const [days, setDays] = useState([]);

  // // json-server와 통신하여 data.json DB의 정보를 받아온다.
  // useEffect(() => {
  //   fetch("http://localhost:3001/days")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setDays(data);
  //     });
  // }, []);

  return (
    <ul className="list_day">
      {days.map((day) => (
        <li key={day.id}>
          <Link to={`/day/${day.day}`}>Day {day.day}</Link>
        </li>
      ))}
    </ul>
  );
}
