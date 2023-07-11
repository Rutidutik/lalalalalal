import React from "react";
import { Button } from "@mui/material";
import { useState } from "react";
// import TableHourse from './TableHourse';

function WorkingHours() {
  const [first, setfirst] = useState([]);
  const [Last, setLast] = useState([]);

  const firstHour = () => {
    const now = new Date();
    const currentHour = now.getHours() + ":" + now.getMinutes();
    setfirst(currentHour);

    console.log(currentHour);
  };

  const LastHour = () => {
    const now = new Date();
    const currentHour = now.getHours() + ":" + now.getMinutes();
    setLast(currentHour);

    console.log(currentHour);
  };

  return (
    <>
      <Button variant="contained" onClick={firstHour}>
        התחל
      </Button>
      <br></br>
      <Button variant="contained" onClick={LastHour}>
        סיים
      </Button>

      <table className="table table">
        <thead>
          <tr>
            <th>שעת התחלה</th>
            <th>שעת סיום</th>
          </tr>
        </thead>
        <tbody>
          <tr >
            <td>
              <h5>
                {first}
                <input type="time"></input>
              </h5>
            </td>
            <td>
              <h5>
                {Last}
                <input type="time"></input>
              </h5>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
export default WorkingHours;
