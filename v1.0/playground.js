<! DOCTYPE html>
 <html>
  <body> 
  <button type = "button" onclick = "fcn()">click me!</button>
   <p id = "text">hi!</p>
   
   <script>
    function fcn() {
    document.getElementById("text").innerHTML = "it is me!";
    }
   </script>
  </body>
 </html>