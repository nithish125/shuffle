function load(){
  let b=document.querySelectorAll('#niuk');
  let x="NIUK";
  let y=x.split('');
  console.log(y);
  b.forEach((a)=>{
      let ran=Math.floor(Math.random()*y.length);
      a.innerHTML=y[ran];
      y.splice(ran,1);
      console.log(ran);
     
  })
}
    

