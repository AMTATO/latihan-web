function saklar() {
  let saklar1 = document.getElementById("saklar1");
  
  let lampu1 = document.getElementById("lampu1");
  
  if(saklar1.checked){
    console.log("Saklar on");
    lampu1.src = "img/on.gif";
  } else {
    console.log("Saklar off");
    lampu1.src = "img/off.gif";
  }
  
}
