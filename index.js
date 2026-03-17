function time(){
      const getdate = new Date();
    const options = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
    const change = getdate.toLocaleTimeString([], options); // Force 12-hour with AM/PM
    
    //if phone then,
    const phone=document.getElementById("mt-t");
    if(phone){phone.innerHTML=change};

    const pc=document.getElementById("time");
    if(pc){pc.innerHTML=change};
}

time();
setInterval(time, 1000);