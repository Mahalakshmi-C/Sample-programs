function setName(){
    var myHeading=document.getElementById("heading1");
    var myName=prompt("enter your name");
     localStorage.setItem("name",myName);
     myHeading.textContent="welcome "+myName +"!";
    }

    function change()
    {
     var myImage=document.getElementById("img1");

        var mySrc=myImage.getAttribute("src");
        if(mySrc=="globe.png")
        {
            myImage.setAttribute("src","world.png");
        }
        else{
            myImage.setAttribute("src","globe.png");
        }
    }
   
    function makeRequest(){
         var httpRequest=new XMLHttpRequest(); 
         httpRequest.onreadystatechange=function(){
        if((httpRequest.readystate == 4) &&(httpRequest.status == 200)){ 
            alert(status);}
            else{
        
          document.getElementById("view").innerHTML=httpRequest.responseText;
           }};
         httpRequest.open('GET','./ex.html');
         httpRequest.send(); 
 }
