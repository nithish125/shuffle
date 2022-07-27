function load(){
  let b=document.querySelectorAll('#niuk');
  let x="NIGK";
  let y=x.split('');
  console.log(y);
  var len=0
  var d=document.querySelector(".num")
  var sub=document.querySelector("input")
  var balance=document.querySelector(".balance")
  console.log(sub)
  var emp=["KING","INK","IN","GIN","KIG","GK"]
  b.forEach((a)=>{
      let ran=Math.floor(Math.random()*y.length);
      a.innerHTML=y[ran];
      y.splice(ran,1);
      
      a.addEventListener("click",vl)
      function vl(){
        var s=this.innerHTML;
         d.append(s)
        console.log(d.innerHTML);
        
      }
     
  })
  sub.addEventListener("click",add)
  function add(){
    var c=emp.includes(d.innerHTML)
    console.log(emp.includes(d.innerHTML))
    if(c==true){
       
     balance.innerHTML= emp.length-- 
      console.log(emp.length)
    }
    d.innerHTML='';
  }
}

    

