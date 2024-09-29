
let index = 0;

function frontpageCarousel(displayValue){
    console.log("Yeeee boi " + displayValue + ", index is: " +index);
    
    if(displayValue==0){
        if(index===0)index=2;
        else index-=1;
    }
    else if(displayValue==1){
        if(index===2)index=0;
        else index+=1;
    }
    
    if(index===0)
    {
        //set nwt visible
        document.getElementById("nwtCard").style.display = "inline";
        document.getElementById("sSmartCard").style.display = "none";
        document.getElementById("wwfCard").style.display = "none";

        document.getElementById("nwtText").style.display ="inline";
        document.getElementById("ssText").style.display = "none";
        document.getElementById("wwfText").style.display = "none";
    }
    else if(index===1){
        //set solar smart visible
        document.getElementById("nwtCard").style.display = "none";
        document.getElementById("sSmartCard").style.display = "inline";       
        document.getElementById("wwfCard").style.display = "none";

        document.getElementById("nwtText").style.display ="none";
        document.getElementById("ssText").style.display = "inline";
        document.getElementById("wwfText").style.display = "none";
    }
    else if(index===2){
        //Set WWF visible
        document.getElementById("nwtCard").style.display = "none";
        document.getElementById("sSmartCard").style.display = "none";
        document.getElementById("wwfCard").style.display = "inline";

        document.getElementById("nwtText").style.display ="none";
        document.getElementById("ssText").style.display = "none";
        document.getElementById("wwfText").style.display = "inline";
    }    
}

previousDesignPreview.addEventListener("click", function() {
    frontpageCarousel("0");
});

nextDesignPreview.addEventListener("click", function(){
    frontpageCarousel("1");
});


