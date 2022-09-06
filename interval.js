console.log('first');
console.log('second');
let second = 0;
const intervalId =setInterval(()=>{
   
    console.log(++second);
    if(second==11){
        clearInterval(intervalId);
    }
},200)
console.log('fourth');
console.log('fifth');