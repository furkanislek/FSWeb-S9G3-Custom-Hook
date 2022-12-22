
function useLocalStorageKullan() {

    function modeSwitch(mode){
        if(mode){
            localStorage.setItem("geceModu" ,true);
           }else {
             localStorage.setItem("geceModu" , false);
           }
    }

    
  

  return modeSwitch;
}

export default useLocalStorageKullan;