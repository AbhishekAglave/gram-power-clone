import "./App.css";
import Clients from "./components/Clients";
import { createContext, useEffect, useState } from "react";
import Header from "./components/Header";

const DataContext = createContext();

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://192.168.2.235:5000/");
      const jsondata = await response.json();
      setData(jsondata);
      // console.log(jsondata);
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <Header />
      <main className="main_container">
        {data.map((data) => {
          return (
            <DataContext.Provider value={data} key={data.id}>
              <Clients />
            </DataContext.Provider>
          );
        })}
      </main>
    </div>
  );
}

export default App;
export { DataContext };
