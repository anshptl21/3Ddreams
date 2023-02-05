

function downArrow(id, container){
  if (document.getElementById(id).className === "fas fa-angle-up"){
    document.getElementById(id).className = "fas fa-angle-down"
     setTimeout(function(){
      document.getElementById(container).style.animation = "1s ease-out 0s 1 fadeOut"
    },200);
     setTimeout(function(){
         document.getElementById(container).style.display = "none"
      },800);

  } else if (document.getElementById(id).className === "fas fa-angle-down"){
  document.getElementById(id).className = "fas fa-angle-up"
     setTimeout(function(){
      document.getElementById(container).style.animation = "1s ease-out 0s 1 fadeIn"
      document.getElementById(container).style.display = "inherit"
    },200);
  }
}

