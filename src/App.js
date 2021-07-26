import "./App.css";
import axios from "axios";
import logo from "./logo.png";
import Categories from "./components/Categories";
import Shop from "./components/Shop";
import { useState, useEffect } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
library.add(faStar);
function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://deliveroo-back-kfachas.herokuapp.com/"
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);
  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div>
      <header>
        <div>
          <img src={logo} alt="" />
        </div>
      </header>
      <div className="subHeader">
        <div>
          <div>
            <h2>{data.restaurant.name}</h2>
            <p>{data.restaurant.description}</p>
          </div>
          <div>
            <img src={data.restaurant.picture} alt="" />
          </div>
        </div>
      </div>
      <main>
        <Categories data={data.categories} />
        <Shop />
      </main>
    </div>
  );
}

export default App;
