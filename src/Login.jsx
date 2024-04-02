import { useState } from "react";
import Dashboard from "./Dashboard";
import axios from "axios";

const Login = () => {
  const [user, setUser] = useState("kminchelle");
  const [password, setPassword] = useState("0lelplR");
 
  const [isErr, setErr] = useState(null);
  const [data, setData] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
      const res = await axios.post("https://dummyjson.com/auth/login", {
        username: user,
        password: password,
        expiresInMins: 1, // optional, defaults to 60
      });
      // console.log(res);
      console.log(res.data);
      localStorage.setItem("TOKEN", res.data.token);
      setData(res.data);
    } catch (error) {
      console.error(error);
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
        backgroundColor: "lightgreen",
        justifyContent: "center",
        alignItems: "center",
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
          }}
        >
          <h5 style={{ marginBottom: 10 }}>Login</h5>
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
            style={{ marginBottom: 10, backgroundColor: "lightblue" }}
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
