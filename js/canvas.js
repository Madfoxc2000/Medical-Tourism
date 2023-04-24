  var xPos = -120;
  var intervalHandleFromLeft;
  var intervalHandleFromRight;
  var text = "Medical tourism ";
  var letters = 0;
  var playSound = true;
              
  var ctx;
              
  function LoadBackground()
  {

      var canvasElement = document.getElementById("ffc");
      ctx = canvasElement.getContext("2d");
      var substring;
                  
      var grd = ctx.createRadialGradient(250, 127, 5, 250, 127, 300);
      grd.addColorStop(0, '#34ebd8');
      grd.addColorStop(1, '#34d9eb');
                  

      if ((xPos>=50 || xPos <=250))
      {
          substring = text.substring(0,letters);
      }
                  
      var nightSky = new Image();
      nightSky.src="images/vedro nebo.jpg";
      nightSky.onload = function()
      {
         ctx.drawImage(nightSky,0,0);
          ctx.font = "68px Daughter of Fortune";
         ctx.fillStyle = "black";
         ctx.fillText  (substring, 53, 193);
         ctx.fillStyle = grd;
         ctx.fillText  (substring, 50, 190);
      }
      
      var soundIcon = new Image();
      if (playSound) soundIcon.src="images/snd_on.png";
      else soundIcon.src="images/snd_mute.png"; 
      soundIcon.onload = function()
      {
          ctx.drawImage(soundIcon,450,5);
      }
                  
  }
                          
  function BatFromLeft()
  {

      LoadBackground();

      var img = new Image();
      img.src="images/Airplane.right.png";
      img.onload = function()
      {
          ctx.drawImage(img,xPos,50);
      }
                          
      xPos+=5;
      if (xPos%30==0 && xPos>50) letters++;
                        
      if (xPos>=520) 
      {
          clearInterval(intervalHandleFromLeft);
          intervalHandleFromRight = setInterval(BatFromRight,30);
          if (playSound) document.getElementById('sound').play();
      }
                     
  }
              
  function BatFromRight()
  {

      LoadBackground();

      var img = new Image();
      img.src="images/Airplane.left.png";
      img.onload = function()
      {
          ctx.drawImage(img,xPos,50);
      }
                        
      xPos-=5;
      if (xPos%30==0 && xPos<450 && letters>0) letters--; 
                  
      if (xPos<=-120) 
      {
          clearInterval(intervalHandleFromRight);
          intervalHandleFromLeft = setInterval(BatFromLeft,30);
          if (playSound) document.getElementById('sound').play();
      }
        
  }
      
  function clickCanvas(event)
  {
      var x = event.clientX;
      var y = event.clientY;

      var canvas = document.getElementById("ffc");

      x -= canvas.offsetLeft;
      y -= canvas.offsetTop;
      
      if (isInside(x,y,450,5, 495,50)) playSound=!playSound;
  }
    
  function isInside(x, y, z1, z2, z3, z4) 
  {
    x1 = Math.min(z1, z3);
    x2 = Math.max(z1, z3);
    y1 = Math.min(z2, z4);
    y2 = Math.max(z2, z4);
    if ((x1 <= x ) && ( x <= x2) && (y1 <= y) && (y <= y2)) 
        return true;
    else
        return false;
  }
  
  
  $(document).ready(function(){
    
    var canvas = document.getElementById("ffc");
    canvas.addEventListener("mousedown", clickCanvas, false);
    intervalHandleFromLeft = setInterval(BatFromLeft,30);
    if (playSound) document.getElementById('sound').play();
});