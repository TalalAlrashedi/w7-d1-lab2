import { useState } from "react";

import "./App.css";

function App() {
  const [initBackground, setBackground] = useState("#EEEEEE");

  const chnageColor = (color) => {
    setBackground(color);
  };

  return (
    <>
      <div
        className="container"
        style={{
          backgroundColor: initBackground,
          height: "100vh",
          width: "100%",
        }}
      >
        <div  className="btns">

          <h2>قائمة الالوان</h2>
          <button
            style={{ backgroundColor: "#FE5D26" }}
            onClick={() => chnageColor("#FE5D26")}
          >
            أحمر
          </button>
          <button
            style={{ backgroundColor: "#4E71FF" }}
            onClick={() => chnageColor("#4E71FF")}
          >
            أزرق
          </button>
          <button
            style={{ background: "#73946B" }}
            onClick={() => chnageColor("#73946B")}
          >
            أخضر
          </button>
          <button
            style={{ backgroundColor: "#F2C078" }}
            onClick={() => chnageColor("#F2C078")}
          >
            أصفر
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
