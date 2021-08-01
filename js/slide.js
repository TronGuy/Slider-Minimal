 /**
  * Author: Luiz Fernando
  * Github: github.com/TronGuy
  * Images: Unplash.com
  * License: MIT
  */
 
  let img1 = document.createElement('img')
  let img2 = document.createElement('img')
  let img3 = document.createElement('img')
  let img4 = document.createElement('img')
  let div = document.getElementById('slide')
  let next = document.getElementById('next')
  let previously = document.getElementById('previously')
  img1.src = "img/1.jpg"
  img2.src = "img/2.jpg"
  img3.src = "img/3.jpg"
  img4.src = "img/4.jpg"
  let array = [img1,img2,img3,img4]
  let i = 0;

  array = array.reverse()
  array.forEach(function(e){
      
    div.appendChild(e)
  })

  array = array.reverse()
  
  previously.addEventListener('click',function()
  {
      array.forEach(function(e)
      {
           e.className = "previously"
      })
      
      array[0].className = "next"
      i -= 1
      
      if(i === -1)      {
        i=3
        div.appendChild(array[i])
      }
      
      else{
        
        div.appendChild(array[i])
      }
  })
    
    next.addEventListener('click',function(){
      array.forEach(function(e){
         e.className = "next"
      })
      
      array[0].className = "previously"
      i+=1

      if(i < array.length){
          div.appendChild(array[i])
      }

      else{
        i=0
        div.appendChild(array[i])
      }
    })