alert("Cc ma belle");
    

function _get(elts){
    return document.getElementById(elts);
 }
 function _creat(elts){
    return document.createElement(elts);
 }
 window.addEventListener('load',function(e){
 
   // var N= parseInt(prompt("Entrer un nombre N"));
     var N=26;
    for( i=0; i<N; i++){

       
        var  tab=_get('tab');

 
        var eltul= _creat('ul');
        tab.appendChild(eltul);
        eltul.id= "eltul_"+i;
          
        var eltli1=_creat('li');
          
        var eltli2=_creat('li');
 
        eltul.appendChild(eltli1);
        eltul.appendChild(eltli2);
        
        eltli1.style.borderRight="1px solid";
      
        if ( i  %  2 != 0 ){
            _get("eltul_"+i).style.backgroundColor = "none";
           }
          
         else  {
            _get("eltul_"+i).style.backgroundColor = "white";
           }   
         
        
 }
 i++;

 });