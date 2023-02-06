import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";

import { useState, useEffect } from "react";

import axios from "axios";

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://site--deliveroo-backend--6dqyynyggn8p.code.run/"
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, []);
  return isLoading ? (
    <span>En cours de chargement ...</span>
  ) : (
    <div className="App">
      <Header data={data} />
      <Content data={data} />
    </div>
  );
}

export default App;
