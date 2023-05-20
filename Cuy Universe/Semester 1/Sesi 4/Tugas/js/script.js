// Deklarasi Lampu
let lampu1 = document.getElementById("lampu1");
let lampu2 = document.getElementById("lampu2");
let lampu3 = document.getElementById("lampu3");
let lampu4 = document.getElementById("lampu4");
let lampu5 = document.getElementById("lampu5");
let lampu6 = document.getElementById("lampu6");
let lampu7 = document.getElementById("lampu7");
let lampu8 = document.getElementById("lampu8");
let lampu9 = document.getElementById("lampu9");
let lampu10 = document.getElementById("lampu10");

// Deklarasi Saklar
let saklar1 = document.getElementById("saklar1");
let saklar2 = document.getElementById("saklar2");
let saklar3 = document.getElementById("saklar3");
let saklar4 = document.getElementById("saklar4");
let saklar5 = document.getElementById("saklar5");
let saklar6 = document.getElementById("saklar6");
let saklar7 = document.getElementById("saklar7");
let saklar8 = document.getElementById("saklar8");
let saklar9 = document.getElementById("saklar9");
let saklar10 = document.getElementById("saklar10");

// Deklarasi Status 1 by 1
let statusS1 = "OFF";
saklar1.addEventListener("click", saklarRm);
let statusS2 = "OFF";
saklar2.addEventListener("click", saklar2IsClicked);
let statusS3 = "OFF";
saklar3.addEventListener("click", saklar3IsClicked);
let statusS4 = "OFF";
saklar4.addEventListener("click", saklar4IsClicked);
let statusS5 = "OFF";
saklar5.addEventListener("click", saklar5IsClicked);
let statusS6 = "OFF";
saklar6.addEventListener("click", saklar6IsClicked);
let statusS7 = "OFF";
saklar7.addEventListener("click", saklar7IsClicked);
let statusS8 = "OFF";
saklar8.addEventListener("click", saklar8IsClicked);
let statusS9 = "OFF";
saklar9.addEventListener("click", saklar9IsClicked);
let statusS10 = "OFF";
saklar10.addEventListener("click", saklar10IsClicked);

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

function lampu4ON() {
  saklar4.classList.remove("btn-secondary");
  saklar4.classList.add("btn-success");
  saklar4.innerHTML = "ON";
  statusS4 = "ON";
  console.log("Lampu 4 " + statusS4);

  lampu4.src = "img/on.gif";
}

function lampu5ON() {
  saklar5.classList.remove("btn-secondary");
  saklar5.classList.add("btn-success");
  saklar5.innerHTML = "ON";
  statusS5 = "ON";
  console.log("Lampu 5 " + statusS5);

  lampu5.src = "img/on.gif";
}

function lampu6ON() {
  saklar6.classList.remove("btn-secondary");
  saklar6.classList.add("btn-success");
  saklar6.innerHTML = "ON";
  statusS6 = "ON";
  console.log("Lampu 6 " + statusS6);

  lampu6.src = "img/on.gif";
}

function lampu7ON() {
  saklar7.classList.remove("btn-secondary");
  saklar7.classList.add("btn-success");
  saklar7.innerHTML = "ON";
  statusS7 = "ON";
  console.log("Lampu 7 " + statusS7);

  lampu7.src = "img/on.gif";
}

function lampu8ON() {
  saklar8.classList.remove("btn-secondary");
  saklar8.classList.add("btn-success");
  saklar8.innerHTML = "ON";
  statusS8 = "ON";
  console.log("Lampu 8 " + statusS8);

  lampu8.src = "img/on.gif";
}

function lampu9ON() {
  saklar9.classList.remove("btn-secondary");
  saklar9.classList.add("btn-success");
  saklar9.innerHTML = "ON";
  statusS9 = "ON";
  console.log("Lampu 9 " + statusS9);

  lampu9.src = "img/on.gif";
}

function lampu10ON() {
  saklar10.classList.remove("btn-secondary");
  saklar10.classList.add("btn-success");
  saklar10.innerHTML = "ON";
  statusS10 = "ON";
  console.log("Lampu 10 " + statusS10);

  lampu10.src = "img/on.gif";
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

function lampu4OFF() {
  saklar4.classList.remove("btn-success");
  saklar4.classList.add("btn-secondary");
  saklar4.innerHTML = "OFF";
  statusS4 = "OFF";
  console.log("Lampu 4 " + statusS4);

  lampu4.src = "img/off.gif";
}

function lampu5OFF() {
  saklar5.classList.remove("btn-success");
  saklar5.classList.add("btn-secondary");
  saklar5.innerHTML = "OFF";
  statusS5 = "OFF";
  console.log("Lampu 5 " + statusS5);

  lampu5.src = "img/off.gif";
}

function lampu6OFF() {
  saklar6.classList.remove("btn-success");
  saklar6.classList.add("btn-secondary");
  saklar6.innerHTML = "OFF";
  statusS6 = "OFF";
  console.log("Lampu 6 " + statusS6);

  lampu6.src = "img/off.gif";
}

function lampu7OFF() {
  saklar7.classList.remove("btn-success");
  saklar7.classList.add("btn-secondary");
  saklar7.innerHTML = "OFF";
  statusS7 = "OFF";
  console.log("Lampu 7 " + statusS7);

  lampu7.src = "img/off.gif";
}

function lampu8OFF() {
  saklar8.classList.remove("btn-success");
  saklar8.classList.add("btn-secondary");
  saklar8.innerHTML = "OFF";
  statusS8 = "OFF";
  console.log("Lampu 8 " + statusS6);

  lampu8.src = "img/off.gif";
}

function lampu9OFF() {
  saklar9.classList.remove("btn-success");
  saklar9.classList.add("btn-secondary");
  saklar9.innerHTML = "OFF";
  statusS9 = "OFF";
  console.log("Lampu 9 " + statusS9);

  lampu9.src = "img/off.gif";
}

function lampu10OFF() {
  saklar10.classList.remove("btn-success");
  saklar10.classList.add("btn-secondary");
  saklar10.innerHTML = "OFF";
  statusS10 = "OFF";
  console.log("Lampu 10 " + statusS10);

  lampu10.src = "img/off.gif";
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
  if (statusS2 == "OFF" || statusS3 == "OFF") {
    RTOFF();
  }
  if (statusS2 == "ON" && statusS3 == "ON") {
    RTON();
  }
}
// Saklar Ruang Tidur End

// Saklar Ruang Keluarga Start
function saklar4IsClicked() {
  if (statusS4 == "OFF") {
    lampu4ON();
  } else {
    lampu4OFF();
  }

  return saklarRk();
}

function saklar5IsClicked() {
  if (statusS5 == "OFF") {
    lampu5ON();
  } else {
    lampu5OFF();
  }

  return saklarRk();
}

function saklar6IsClicked() {
  if (statusS6 == "OFF") {
    lampu6ON();
  } else {
    lampu6OFF();
  }

  return saklarRk();
}

function saklarRk() {
  if (statusS4 == "OFF" || statusS5 == "OFF" || statusS6 == "OFF") {
    RKOFF();
  }

  if (statusS4 == "ON" && statusS5 == "ON" && statusS6 == "ON") {
    RKON();
  }
}
// Saklar Ruang Keluarga End

// Saklar Ruang Tamu Start
function saklar7IsClicked() {
  if (statusS7 == "OFF") {
    lampu7ON();
  } else {
    lampu7OFF();
  }

  return saklarRta();
}

function saklar8IsClicked() {
  if (statusS8 == "OFF") {
    lampu8ON();
  } else {
    lampu8OFF();
  }

  return saklarRta();
}

function saklar9IsClicked() {
  if (statusS9 == "OFF") {
    lampu9ON();
  } else {
    lampu9OFF();
  }

  return saklarRta();
}

function saklar10IsClicked() {
  if (statusS10 == "OFF") {
    lampu10ON();
  } else {
    lampu10OFF();
  }

  return saklarRta();
}

function saklarRta() {
  if (
    statusS7 == "OFF" ||
    statusS8 == "OFF" ||
    statusS9 == "OFF" ||
    statusS10 == "OFF"
  ) {
    RTaOFF();
  }

  if (
    statusS7 == "ON" &&
    statusS8 == "ON" &&
    statusS9 == "ON" &&
    statusS10 == "ON"
  ) {
    RTaON();
  }
}
// Saklar Ruang Tamu End

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

// Pengaturan Ruang Keluarga Start
let saklarRK = document.getElementById("saklarRuangKeluarga");
saklarRK.addEventListener("click", saklarRuangKeluarga);
let statusRK = "OFF";

function RKON() {
  saklarRK.classList.remove("btn-secondary");
  saklarRK.classList.add("btn-success");
  saklarRK.innerHTML = "ON";
  statusRK = "ON";
  console.log("RK " + statusRK);
}

function RKOFF() {
  saklarRK.classList.remove("btn-success");
  saklarRK.classList.add("btn-secondary");
  saklarRK.innerHTML = "OFF";
  statusRK = "OFF";
  console.log("RK " + statusRK);
}

function saklarRuangKeluarga() {
  if (statusRK == "OFF") {
    lampu4ON();
    lampu5ON();
    lampu6ON();
    RKON();
  } else {
    lampu4OFF();
    lampu5OFF();
    lampu6OFF();
    RKOFF();
  }
}
// Pengaturan Ruang Keluarga End

// Pengaturan Ruang Tamu Start
let saklarRTa = document.getElementById("saklarRuangTamu");
saklarRTa.addEventListener("click", saklarRuangTamu);
let statusRTa = "OFF";

function RTaON() {
  saklarRTa.classList.remove("btn-secondary");
  saklarRTa.classList.add("btn-success");
  saklarRTa.innerHTML = "ON";
  statusRTa = "ON";
  console.log("RTa " + statusRTa);
}

function RTaOFF() {
  saklarRTa.classList.remove("btn-success");
  saklarRTa.classList.add("btn-secondary");
  saklarRTa.innerHTML = "OFF";
  statusRTa = "OFF";
  console.log("RTa " + statusRTa);
}

function saklarRuangTamu() {
  if (statusRTa == "OFF") {
    lampu7ON();
    lampu8ON();
    lampu9ON();
    lampu10ON();
    RTaON();
  } else {
    lampu7OFF();
    lampu8OFF();
    lampu9OFF();
    lampu10OFF();
    RTaOFF();
  }
}
// Pengaturan Ruang Tamu End
