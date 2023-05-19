// Deklarasi Lampu
let lampu1 = document.getElementById("lampu1");
let lampu2 = document.getElementById("lampu2");
let lampu3 = document.getElementById("lampu3");

// Deklarasi Saklar
let saklar1 = document.getElementById("saklar1");
let saklar2 = document.getElementById("saklar2");
let saklar3 = document.getElementById("saklar3");

// Deklarasi Status 1 by 1
let statusS1 = "OFF";
saklar1.addEventListener("click", saklarRm);
let statusS2 = "OFF";
saklar2.addEventListener("click", saklar2IsClicked);
let statusS3 = "OFF";
saklar3.addEventListener("click", saklar3IsClicked);

// Nyalakan Lampu 1 by 1
function lampu1ON() {
  saklar1.classList.remove("btn-secondary");
  saklar1.classList.add("btn-success");
  saklar1.innerHTML = "ON";
  statusS1 = "ON";
  console.log("Lampu 1 " + statusS1);

  lampu1.src = "img/on.gif";
}

function lampu2ON() {
  saklar2.classList.remove("btn-secondary");
  saklar2.classList.add("btn-success");
  saklar2.innerHTML = "ON";
  statusS2 = "ON";
  console.log("Lampu 2 " + statusS2);

  lampu2.src = "img/on.gif";
}

function lampu3ON() {
  saklar3.classList.remove("btn-secondary");
  saklar3.classList.add("btn-success");
  saklar3.innerHTML = "ON";
  statusS3 = "ON";
  console.log("Lampu 3 " + statusS3);

  lampu3.src = "img/on.gif";
}

// Matikan Lampu 1 by 1
function lampu1OFF() {
  saklar1.classList.remove("btn-success");
  saklar1.classList.add("btn-secondary");
  saklar1.innerHTML = "OFF";
  statusS1 = "OFF";
  console.log("Lampu 1 " + statusS1);

  lampu1.src = "img/off.gif";
}

function lampu2OFF() {
  saklar2.classList.remove("btn-success");
  saklar2.classList.add("btn-secondary");
  saklar2.innerHTML = "OFF";
  statusS2 = "OFF";
  console.log("Lampu 2 " + statusS1);

  lampu2.src = "img/off.gif";
}

function lampu3OFF() {
  saklar3.classList.remove("btn-success");
  saklar3.classList.add("btn-secondary");
  saklar3.innerHTML = "OFF";
  statusS3 = "OFF";
  console.log("Lampu 3 " + statusS3);

  lampu3.src = "img/off.gif";
}

// Saklar 1 by 1
// Saklar Ruang Makan Start
function saklarRm() {
  if (statusS1 == "OFF") {
    lampu1ON();
  } else {
    lampu1OFF();
  }

  if (statusS1 == "OFF") {
    RMOFF();
  } else {
    RMON();
  }
}
// Saklar Ruang Makan End

// Saklar Ruang Tidur Start
function saklar2IsClicked() {
  if (statusS2 == "OFF") {
    lampu2ON();
  } else {
    lampu2OFF();
  }

  return saklarRt();
}

function saklar3IsClicked() {
  if (statusS3 == "OFF") {
    lampu3ON();
  } else {
    lampu3OFF();
  }

  return saklarRt();
}
function saklarRt() {
  if (statusS2 == "OFF" && statusS3 == "OFF") {
    RTOFF();
  }
  if (statusS2 == "ON" && statusS3 == "ON") {
    RTON();
  }
}
// Saklar Ruang Tidur End

// Pengaturan Ruang Makan Start
let saklarRM = document.getElementById("saklarRuangMakan");
saklarRM.addEventListener("click", saklarRuangMakan);
let statusRM = "OFF";

function RMON() {
  saklarRM.classList.remove("btn-secondary");
  saklarRM.classList.add("btn-success");
  saklarRM.innerHTML = "ON";
  statusRM = "ON";
  console.log("RM " + statusRM);
}

function RMOFF() {
  saklarRM.classList.remove("btn-success");
  saklarRM.classList.add("btn-secondary");
  saklarRM.innerHTML = "OFF";
  statusRM = "OFF";
  console.log("RM " + statusRM);
}
function saklarRuangMakan() {
  if (statusRM == "OFF") {
    lampu1ON();
    RMON();
  } else {
    lampu1OFF();
    RMOFF();
  }
}
// Pengaturan Ruang Makan End

// Pengaturan Ruang Tidur Start
let saklarRT = document.getElementById("saklarRuangTidur");
saklarRT.addEventListener("click", saklarRuangTidur);
let statusRT = "OFF";

function RTON() {
  saklarRT.classList.remove("btn-secondary");
  saklarRT.classList.add("btn-success");
  saklarRT.innerHTML = "ON";
  statusRT = "ON";
  console.log("RT " + statusRT);
}

function RTOFF() {
  saklarRT.classList.remove("btn-success");
  saklarRT.classList.add("btn-secondary");
  saklarRT.innerHTML = "OFF";
  statusRT = "OFF";
  console.log("RT " + statusRT);
}
function saklarRuangTidur() {
  if (statusRT == "OFF") {
    lampu2ON();
    lampu3ON();
    RTON();
  } else {
    lampu2OFF();
    lampu3OFF();
    RTOFF();
  }
}
// Pengaturan Ruang Tidur End
