import React from 'react';

function LocalStorageKullan({mode}) {

    if(mode){
        localStorage.setItem("geceModu" ,true);
       }else {
         localStorage.setItem("geceModu" , false);
       }

  return (
    <></>
  );
}

export default LocalStorageKullan;