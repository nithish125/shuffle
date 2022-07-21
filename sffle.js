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
    var b=Math.floor((Math.random())*(r.length))
    var c=Math.floor((Math.random())*(r.length))
    var d=Math.floor((Math.random())*(r.length))
   // var previous=a
    
    
    
        
    function toFindDuplicates() {
        let arry = [200,100,210,230,20];
        let resultToReturn = false;
        // call some function with callback function as argument
        resultToReturn = arry.some((element, index) => {
            return arry.indexOf(element) !== index
        });
        if (resultToReturn) {
            while(resultToReturn = false){
            console.log('Duplicate elements exist');
             a=Math.floor((Math.random())*(r.length))
             s=Math.floor((Math.random())*(r.length))
             b=Math.floor((Math.random())*(r.length))
             c=Math.floor((Math.random())*(r.length))
             d=Math.floor((Math.random())*(r.length))
            }
            }
            else {
                nm1.innerText=r[a];
                nm2.innerText=r[s];
                nm3.innerText=r[b];
                nm4.innerText=r[c];
                nm5.innerText=r[d];
                
                }
            }
    
            toFindDuplicates()
    


    // nm3.style.setProperty("color",r[s] );
    console.log(s)
    //console.log(Math.floor(Math.random()*4))
}


