

let hrs = document.querySelector('#hrs')
let min = document.querySelector('#min')
let sec = document.querySelector('#sec')

setInterval(()=>{
    let currentTime = new Date();

hrs.innerHTML = currentTime.getHours();
min.innerHTML = currentTime.getMinutes();
sec.innerHTML = currentTime.getSeconds();
},1000)



