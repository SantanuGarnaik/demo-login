// import React from 'react'

import axios from "axios";
import { useEffect } from "react";

const Dashboard = () => {
  const token = localStorage.getItem("TOKEN");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://dummyjson.com/auth/me", {
          // optional, defaults to 6
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        // console.log(res);
        console.log(res.data);
        // localStorage.setItem("TOKEN", res.data.token);
      } catch (error) {
        localStorage.clear()
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return <h1>Dashboard</h1>;
};

export default Dashboard;
