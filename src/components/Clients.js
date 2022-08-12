import React from "react";
import "./Clients.css";
import { useContext } from "react";
import { DataContext } from "../App";

function Clients() {
  const data = useContext(DataContext);
  const style = {
    main_container: {
      backgroundImage: `url(${data.bg_image})`,
      backgroundSize: "cover",
    },
    img_container: {
      backgroundImage: `url(${data.image})`,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "50% 65%",
    },
  };

  return (
    <div
      className="client_container"
      style={style.main_container}
      key={data.id}
    >
      <div className="image_container" style={style.img_container}>
        {/* <img className="sample_image" src={data.logo} alt="sample_image"/> */}
      </div>
      <div className="details">
        <h2>{data.title}</h2>
        <div className="description">
          <p>{data.description}</p>
          <button className="learn_more" disabled={data.button}>
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
}

export default Clients;
