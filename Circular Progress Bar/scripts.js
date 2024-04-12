var number=document.getElementById("number")
var count=0;
setInterval(()=>{
    if(count==100)
    {
        clearInterval();
    }
    else
    {
        count+=1;
        number.innerHTML=`${count}%`
    }
},79.9)
