import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Charts from "../components/Charts";
import useLocalStorageKullan from "./localStorageKullan";

function GeceModuAc({ coinData }) {
  const [geceModu, setGeceModu] = useState(false);
  const mode = useLocalStorageKullan();

  console.log(window.localStorage);

  var classList = "App";
  const latestTheme = localStorage.geceModu === "true";

  if (latestTheme) {
    classList += " dark-mode";
  }

  return (
    <div onClick={() => mode(!geceModu)} className={classList}>
      <Navbar geceModu={geceModu} setGeceModu={setGeceModu} />
      <Charts coinData={coinData} />
    </div>
  );
}

export default GeceModuAc;
