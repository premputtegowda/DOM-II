// Your code goes here
//mouseover. HIghlights the selected element text and console logs the element that was selected.
const bodyEl = document.querySelector('body');

bodyEl.addEventListener("mouseover", (e) => {
    e.target.style.color = "grey";
    //console.log(e.target)
    setTimeout(()=> {
        e.target.style.color="";
    },300);
})

//key press
//if you click the menu item and press the key the background will turned red
const menuItems = document.querySelectorAll('nav a');


menuItems.forEach(el => {
    el.addEventListener('keydown',(e)=> {
        e.target.style.backgroundColor = 'red';
    })

})

//wheel
//you can enlarge the text for 3 seconds by using wheel
const image = document.querySelector('img')
image.addEventListener('wheel',(e) => {
    e.target.style.transform = 'scale(1.5)';
    
   
    setTimeout(
        ()=> {
            e.target.style.transform = 'scale(1)';
            e.target.style.color = '';
        },500);
})

//drag / drop

const divEls = document.querySelectorAll('div');
let dragged;
let trashcan;
const footerEl = document.querySelector('footer')
//setting the property draggable to true by dblclick


bodyEl.addEventListener("dblclick", (e) => {
    e.target.style.color = "blue";
    e.target.setAttribute("draggable","true")
    //console.log(e.target)
    trashcan = document.createElement('div');
    trashcan.textContent = "Drop here to delete"
    trashcan.style.background = 'red'
    trashcan.style.height = '20px';
    trashcan.classList.add("dropzone");
    e.target.parentNode.append(trashcan);
   
})




document.addEventListener('drag',(e) => {

},false);

document.addEventListener("dragstart",function(e){
    dragged = e.target;
    e.target.style.opacity = .5
    
}, false)


document.addEventListener("dragend", function(event) {
    // reset the transparency
    e.target.style.opacity = "";
  }, false);


  document.addEventListener("dragover", function(event) {
    // prevent default to allow drop
    event.preventDefault();
  }, false);
  
  document.addEventListener("dragenter", function(event) {
    // highlight potential drop target when the draggable element enters it
    if (event.target.className == "dropzone") {
      event.target.style.background = "yellow";
    }
  
  }, false);
  //dropleave
  document.addEventListener("dragleave", function(event) {
    // reset background of potential drop target when the draggable element leaves it
    if (event.target.className == "dropzone") {
      event.target.style.background = "";
    }
  
  }, false);

//drop
  document.addEventListener("drop", function(event) {
    // prevent default action (open as link for some elements)
    event.preventDefault();
    // move dragged elem to the selected drop target
    if (event.target.className == "dropzone") {
      event.target.style.background = "";
      dragged.parentNode.removeChild( dragged );
      event.target.appendChild( dragged );
      trashcan.textContent ="";
    }
  }, false);



  //load
  window.addEventListener('load', (event) => {
    alert("The page completed loading");
  });

  //resize
  const newBus = document.querySelector('header.intro img')
  window.addEventListener('resize', (event) => {
    newBus.src ="https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1250&q=80"
  });



  

const allImages = document.querySelectorAll('img')

//mouseEnter

allImages.forEach((el)=> {
    el.addEventListener("mouseenter", function(e){
        e.target.style.transform = "scale(1.5)";
        e.target.transition = "transform 1s"
        setTimeout(function(){
            e.target.style.transform = "scale(1)"
        },1000)
    })
})

//mousedown and nested element use to stop propagation

bodyEl.addEventListener('mousedown',function(){
    bodyEl.style.backgroundColor='hotpink';
})

const allDivs = document.querySelectorAll('div');

allDivs.forEach(el => {
    el.addEventListener('mousedown', function(e){
        el.style.backgroundColor="rebeccapurple";
        e.stopPropagation();
    })
})

const navItems = document.querySelectorAll('nav a')

navItems.forEach(el => {
    el.addEventListener("click",function(e){
        e.preventDefault();
        console.log("Stopped the link");
    })
})