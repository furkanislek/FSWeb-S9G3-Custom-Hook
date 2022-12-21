import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import Charts from "../components/Charts";
import LocalStorageKullan from './localStorageKullan';

function GeceModuAc({coinData}) {

    const [geceModu, setGeceModu] = useState(false);
    
    const mode = LocalStorageKullan();
    
    
    return (
        <div onClick={() => mode(!geceModu)} className={geceModu ? "dark-mode App" : "App"}>
        
        <Navbar geceModu={geceModu} setGeceModu={setGeceModu} />
        <Charts coinData={coinData} />
    </div>
  );
}

export default GeceModuAc;