function Dsicount(){ 
  let amt = Number(document.getElementById("inP").value);
let percent = Number(document.getElementById("peR").value);
let fDis = amt*(percent/100);
let tot = fDis - amt;
let res = document.getElementById("res");
res.innerHTML =`Rs.${fDis}, Discount for ${percent}%, <br/>Your Actual price to pay Rs.${tot}, for this purchase Keep Enjoy !`;
  }
