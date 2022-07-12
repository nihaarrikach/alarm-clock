const alarmSubmit=document.getElementById("alarmSubmit")

alarmSubmit.addEventListener("click",setAlarm);
var audio=new Audio('http://www.usshelena.org/ussdolphin(ss555)klaxon.wav');
function ringbell(){
   
audio.play();
}

function setAlarm(e){
    e.preventDefault();
    console.log("set alarm")
    const alarm=document.getElementById("alarm")
      alarmDate =new Date(alarm.value);
      now = new Date();
     let timetoalarm=alarmDate-now;
     if(timetoalarm>=0){
        setTimeout(() => {
            console.log("ringing")
            ringbell();
            
        }, timetoalarm);
     }
}