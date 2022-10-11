
function Zenakol() {
    let zena = document.getElementsByName("zena");
    let kol = document.getElementsByName("kol");
    let result = document.getElementById("result");
    let toPrice = zena[0].value;
    let toCount = kol[0].value;
    let z = toCount.match(/^\d+$/);
    let k = toPrice.match(/^\d+$/);
    if(z !== null && k !== null) {
    result.innerHTML = parseInt(zena[0].value) * parseInt(kol[0].value);
    }
  return false;
  }

 function Done() {
    alert("All DONE!");
  }
  
  window.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOM fully loaded and parsed");
    let b = document.getElementById("calculateResult");
    b.addEventListener("click", Done);
  });
