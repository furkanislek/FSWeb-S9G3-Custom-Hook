import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Charts from "../components/Charts";
import LocalStorageKullan from "./localStorageKullan";

function GeceModuAc({ coinData }) {
  const [geceModu, setGeceModu] = useState(false);
  const mode = LocalStorageKullan();

  console.log(window.localStorage);

  var classList = "App";
  const latestTheme = localStorage;

  if (latestTheme.geceModu === "true") {
    classList += " dark-mode App";
  }

  return (
    <div onClick={() => mode(!geceModu)} className={classList}>
      <Navbar geceModu={geceModu} setGeceModu={setGeceModu} />
      <Charts coinData={coinData} />
    </div>
  );
}

export default GeceModuAc;
