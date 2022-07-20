var nm1=document.getElementById("nm1")
var nm2=document.getElementById("nm2")
var nm3=document.getElementById("nm3")
var nm4=document.getElementById("nm4")
var nm5=document.getElementById("nm5")
var sf=document.getElementById("sf")
sf.addEventListener("click",sufle)
r=["A","I","R","F","Y"]

function sufle(){
    var a=Math.floor((Math.random())*(r.length))
    var s=Math.floor((Math.random())*(r.length))
    
    nm1.innerText=r[s] ;
    
    if(s==a){
        var a=Math.floor((Math.random())*(r.length))
    sufle()
    }
    else{
     nm2.innerText=r[a];
    }

    // nm3.style.setProperty("color",r[s] );
    console.log(sf)
    console.log(Math.floor(Math.random()))
}
