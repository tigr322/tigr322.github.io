window.addEventListener('DOMContentLoaded', function (event) {
  const PRICE = 40;
  const PRICE_2 = 100;
  const PRICE_3 = 200;
  const OVERPRICE = 1000;
  const RADIO = 10;
  const RADIO_2 = 15;
  const RADIO_3 = 20;
  const CHECKBOX = 300;
  let price = PRICE;
  let overPrice = OVER_PRICE;
  let radios = document.getElementById("myradios"); 
  let s = document.getElementsByName("myselect");
  let checks = document.getElementById("mycheck");
  let c = document.querySelectorAll(".pis input[type=radio]");
  let checkbox = document.getElementById("check");
  let result = document.getElementById("result");
  let count = document.getElementsByName("count");
  let calc = document.getElementById("calc");
  
  s[0].addEventListener("change", function(event) {
    let select = event.target;
    
    if (select.value === "1") {
      radios.classList.add("d-none");
      checks.classList.add("d-none");
      overPrice = OVER_PRICE;
      price = PRICE;

    }
    if(select.value === "2") {
      radios.classList.remove("d-none");
      checks.classList.add("d-none");
      document.getElementById("radio1").checked = true;
      overPrice =  OVER_PRICE;
      price = PRICE_2;
    }
    if(select.value === "3"){
      radios.classList.add("d-none");
      checks.classList.remove("d-none");
      overPrice = OVER_PRICE;
      price = PRICE_3;
      document.getElementById("check").checked = false;
    }
  });

c.forEach(function (currentRadio) {
    currentRadio.addEventListener("change", function (event) {      
        let c = event.target;
        if (c.value === "c1") {      
            overPrice = RADIO_1;
            console.log(r.value);
        }
        if (c.value === "c2") {
            overPrice = RADIO_2;
            console.log(r.value);
        }
        if (c.value === "c3") {
            overPrice = RADIO_3;
            console.log(r.value);
        }
    });
});

checkbox.addEventListener("change", function () {
  if (checkbox.checked) {
      overPrice = CHECKBOX;
  } else {
      overPrice = OVER_PRICE;
  }
});

calc.addEventListener("change", function () {
  let toCount = count[0].value;
  let f = toCount.match(/^\d+$/);
  if(f!== null){
    result.innerHTML=(price + overPrice )*parseInt(count[0].value);
  }
  else{
      result.innerHTML = "Введите число в поле - количество !";
  }

});
});
