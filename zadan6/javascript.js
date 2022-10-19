window.addEventListener('DOMContentLoaded', function (event) {
  const PRICE = 400;
  const PRICE_2 = 1000;
  const PRICE_3 = 2000;
  const OVERPRICE = 10000;
  const CAR = 100;
  const CAR_2 = 150;
  const CAR_3 = 200;
  const CHECKBOX = 3000;
  let price = PRICE;
  let overPrice = OVER_PRICE;
  let cars = document.getElementById("mycars"); 
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
      cars.classList.add("d-none");
      checks.classList.add("d-none");
      overPrice = OVER_PRICE;
      price = PRICE;

    }
    if(select.value === "2") {
      cars.classList.remove("d-none");
      checks.classList.add("d-none");
      document.getElementById("radio1").checked = true;
      overPrice =  OVER_PRICE;
      price = PRICE_2;
    }
    if(select.value === "3"){
      cars.classList.add("d-none");
      checks.classList.remove("d-none");
      overPrice = OVER_PRICE;
      price = PRICE_3;
      document.getElementById("check").checked = false;
    }
  });

c.forEach(function (currentCar) {
    currentCar.addEventListener("change", function (event) {      
        let c = event.target;
        if (c.value === "c1") {      
            overPrice = CAR;
            console.log(c.value);
        }
        if (c.value === "c2") {
            overPrice = CAR_2;
            console.log(c.value);
        }
        if (c.value === "c3") {
            overPrice = CAR_3;
            console.log(c.value);
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
