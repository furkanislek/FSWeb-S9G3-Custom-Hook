import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import Charts from "../components/Charts";
import LocalStorageKullan from './localStorageKullan';

function GeceModuAc({coinData}) {

    const [geceModu, setGeceModu] = useState(false);
    

    
    
    return (
        <div  className={geceModu ? "dark-mode App" : "App"}>
        <LocalStorageKullan mode = {geceModu} />
        <Navbar geceModu={geceModu} setGeceModu={setGeceModu} />
        <Charts coinData={coinData} />
    </div>
  );
}

export default GeceModuAc;
