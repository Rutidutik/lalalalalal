import React from "react";
import API from "../Variables";
import { useState } from "react";
import { useEffect } from "react";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function CustomerTableShow() {
  const [open, setOpen] = useState(false);
  const [listCustomer, setListCustomer] = useState([]);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const tableCustomer = async () => {
      try {
        const response = await API.get(`customer`);
        console.log(response.data);
        setListCustomer(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    tableCustomer();
  }, []);


  return (
    <>
     <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="body2">
        <table className="table table">
        <thead>
          <tr>
            <th>שם</th>
            <th>טלפון</th>
            <th>מייל</th>
          </tr>
        </thead>
        <tbody>
          {listCustomer.map((item, i) => (
            <tr key={i}>
              <td>
                <h5 className="card-title">{item.name}</h5>
              </td>
              <td>
                <p className="card-text">{item.phone}</p>
              </td>
              <td>
                <p>{item.email}</p>
              </td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
          <br />
        </Typography>
      </CardContent>
    </Card>

      <br></br>

      <br></br>
     
    </>
  );
}
export default CustomerTableShow;





