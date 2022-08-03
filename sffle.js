function load() {
  let b = document.querySelectorAll('#niuk');
  let x = "NIGK";
  let y = x.split('');
  var len = 0
  var d = document.querySelector(".num")
  var sub = document.querySelector("input")
  var balance = document.querySelector("span")
  var ba = document.querySelector("body")
  var emp = ["KING", "INK", "IN", "KG", "GK"]
  emp.length--
  var checking = []
  b.forEach((a) => {
    let ran = Math.floor(Math.random() * y.length);
    a.innerHTML = y[ran];
    y.splice(ran, 1);
    console.log(a)
    a.addEventListener("click", vl)
  })
  function vl() {
    var s = this.innerHTML;
    d.append(s)
  }
  sub.addEventListener("click", add)
  function add() {
    var c = emp.includes(d.innerHTML)
    if (emp.length == 0) {
      ba.innerHTML = "comple"
      console.log("hi")
    }
    if (c == true) {
      var con = checking.includes(d.innerHTML)
      if (con == false) {
        checking.push(d.innerHTML)
        console.log(con)
        balance.innerHTML = emp.length--
      }
    }
    d.innerHTML = '';
  }
}
load()

