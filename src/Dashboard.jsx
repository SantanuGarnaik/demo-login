// import React from 'react'

import axios from "axios";
import { useEffect, useState } from "react";
import { BaseURL, tostMessage } from "./util/tostMessage";

const Dashboard = () => {
  const token = localStorage.getItem("TOKEN");
  const [userData, setUserData] = useState();

  console.log(userData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${BaseURL}/auth/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(res);
        console.log(res.data);
        // localStorage.setItem("TOKEN", res.data.token);
        setUserData(res.data);
        tostMessage.successMsg("Data fetch successfully")
      } catch (error) {
        localStorage.clear();
        console.error(error);
        tostMessage.errorMsg("Error when data fetching..")
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div>
        <h3>Name: {`${userData?.firstName} ${userData?.lastName}`}</h3>
        <img src={userData?.image} alt="img" height={100}/>
        <h5>Hair Color: {userData?.company.address.coordinates.lat}</h5>
      </div>
    </>
  );
};

export default Dashboard;
