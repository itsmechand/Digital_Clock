const hourEle=document.getElementById("hour")
const minuteEle=document.getElementById("minutes")
const secondEle=document.getElementById("seconds")
const ampmEle=document.getElementById("ampm")



function updateClock(){

    let h=Date().slice(16,18)
    let m=Date().slice(19,21)
    let s=Date().slice(22,24)

    if(h>=12){
        ampmEle.innerText="PM"
        if(h>12){
            h= h-12
        }
    }

    hourEle.innerText=h;
    minuteEle.innerText=m;
    secondEle.innerText=s;
    setTimeout(()=>{
        updateClock()
    },1000)

}
updateClock();