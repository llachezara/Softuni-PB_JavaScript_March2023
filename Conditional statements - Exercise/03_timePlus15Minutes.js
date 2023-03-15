function timePlus15Min(input){
  let hoursInMin = Number(input[0])*60;
  let min = Number(input[1]);

  let totalMin=hoursInMin+min+15;
  let finalHours=Math.floor(totalMin/60);
  let finalMin=totalMin%60;
  if(finalHours==24) finalHours=0;
  if( finalMin<10){
   console.log(`${finalHours}:0${finalMin}`);
  }
  else console.log(`${finalHours}:${finalMin}`);


}
timePlus15Min(["23","59"]);