var nm1 = document.getElementById("nm1")
var nm2 = document.getElementById("nm2")
var nm3 = document.getElementById("nm3")
var nm4 = document.getElementById("nm4")
var nm5 = document.getElementById("nm5")
var sf = document.getElementById("sf")
sf.addEventListener("click", sufle)
var r = ["A", "I", "R", "F", "Y"]
var rr = [nm1, nm2, nm3, nm4, nm5]

function sufle() {
    rr.forEach((b)=>{
    
      var  num = Math.floor(Math.random() * r.length)
        b.innerHTML =r[num]
        r.splice(num,1)  
        console.log(b)
        console.log (r[0])
        console.log( rr[num])
    })
  }
    

