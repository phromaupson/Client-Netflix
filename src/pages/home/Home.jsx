import { useEffect, useState } from "react";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import axios from "axios";

const Home = ({type}) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() =>{
    const getRandomLists = async ()=>{
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`
        , {
          headers: {
            token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNDlmMDM1N2UzNzJkYzYwYmYzNjA5ZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMzAwNzAwOCwiZXhwIjoxNjMzNDM5MDA4fQ.a8omTDlz551KCiUze9paH5WwhLBXAvjqhvl8LhOzMZw'
          }
        });
        // console.log(res);
        setLists(res.data);
      } catch (err) {
        console.log(err)
      }
    };
    getRandomLists();
  }, [type, genre]);

  return (
    <div className="home">
      <Navbar />
      <Featured type={type}/>
      <List/>
      <List/>
      <List/>
    </div>
  );
};

export default Home;
