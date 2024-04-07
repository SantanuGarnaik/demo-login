import { useState } from "react";
import Dashboard from "./Dashboard";
import axios from "axios";
import {tostMessage} from "./util/tostMessage"

const Login = () => {
  const [user, setUser] = useState("kminchelle");
  const [password, setPassword] = useState("0lelplR");

  const [isErr, setErr] = useState(null);
  const [data, setData] = useState({});



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://dummyjson.com/auth/login", {
        username: user,
        password: password,
        expiresInMins: 10, // optional, defaults to 60
      });
      console.log(res);
      console.log(res.data);
      tostMessage.successMsg(`Hy ${res.data.firstName}, Login successfully`);

      localStorage.setItem("TOKEN", res.data.token);
      setData(res.data);
    } catch (error) {
      console.error(error);
      // e(error.response.data.message || "Invalid Login")
      tostMessage.errorMsg(error.response.data.message || "Invalid Login")
      // setErr(error.response.data.message || "Invalid Login");
    }
  };

  const token = localStorage.getItem("TOKEN");

  //"kminchelle"  "0lelplR"
  //  //make a function to add two numbers
  //  const addFunction = () =>{

  //  }

  return (
    <main
      style={{
        display: "flex",
        height: "100vh",
        // backgroundColor: "lightgreen",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "",
      }}
    >
      {token ? (
        <>
          <Dashboard />
        </>
      ) : (
        <form
          action="submit"
          style={{
            padding: 5,
            border: "1px solid",
            display: "flex",
            flexDirection: "column",
            borderRadius: 5,
            width: 400,
          }}
        >
          <h2 style={{ marginBottom: 10 }}>Login</h2>
          <input
            value={user}
            type="user"
            onChange={(e) => setUser(e.target.value)}
            placeholder="Enter user..."
            style={{ marginBottom: 10 }}
          />

          <input
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password..."
            style={{ marginBottom: 10 }}
          />

          <button
            onClick={handleSubmit}
            style={{
              marginBottom: 10,
              backgroundColor: "lightblue",
              color: "black",
              fontWeight: 600,
            }}
          >
            Submit
          </button>
          {isErr && <h6>{isErr}</h6>}
        </form>
      )}
    </main>
  );
};

export default Login;
