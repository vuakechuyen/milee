var slides=document.getElementsByClassName("slide");
var imgsContainer0=slides[0].getElementsByClassName("slide_container"),
imgsContainer1=slides[1].getElementsByClassName("slide_container"),
imgsContainer2=slides[2].getElementsByClassName("slide_container");


var l=0,imgLength=imgsContainer0.length+2;
var dk=(imgLength-3)*100;
 
  var nextSlide=function(z){

    if (z<dk){
        z=z+100;
        let x=z.toString();
            
        for (i=0;i<imgLength-2;i++){
            imgsContainer0[i].style.transform="translateX(-"+x+"%)";
            imgsContainer1[i].style.transform="translateX(-"+x+"%)";
            imgsContainer2[i].style.transform="translateX(-"+x+"%)";
        }

        
    }
    l=z;
}
var previousSlide=function(z){

    if (z>0){
        z=z-100;
        let x=z.toString();
           


        for (i=0;i<imgLength-2;i++){
            imgsContainer0[i].style.transform="translateX(-"+x+"%)";
            imgsContainer1[i].style.transform="translateX(-"+x+"%)";
            imgsContainer2[i].style.transform="translateX(-"+x+"%)";

        }
        
    }
    l=z;
}



document.getElementById("previous_btn").addEventListener("click",function(){previousSlide(l);        
});
document.getElementById("next_btn").addEventListener("click",function(){nextSlide(l);        
}); 

setInterval(function(){
    if (l<dk) {
        
        nextSlide(l);
        if (l==dk){ l=-100;}
    }
     
},
4000); 

