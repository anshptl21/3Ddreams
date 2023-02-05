

function downArrow(id, container){
  console.log(document.getElementById(id).className)
  if (document.getElementById(id).className === "fas fa-angle-up"){
    console.log("hello")
    document.getElementById(id).className = "fas fa-angle-down"
     setTimeout(function(){
      document.getElementById(container).style.animation = "1s ease-out 0s 1 fadeOut"
    },200);
     setTimeout(function(){
         document.getElementById(container).style.display = "none"
      },800);

  } else if (document.getElementById(id).className === "fas fa-angle-down"){
    console.log("im here")
  document.getElementById(id).className = "fas fa-angle-up"
     setTimeout(function(){
      document.getElementById(container).style.animation = "1s ease-out 0s 1 fadeIn"
      document.getElementById(container).style.display = "inherit"
    },200);
  }
}




function checkRepeatedLetters(i, t, id){
  var ans = "ASSET";
  var text_box = document.getElementById(id).className;
    if (text_box === "row1 one"){
        if (document.getElementById(id).value !== undefined){
          letterList.push(document.getElementById(id).innerHTML);
        }
    } else if (text_box === "row2 one"){
        if (document.getElementById(id).value !== undefined){
          letterList.push(document.getElementById(id).innerHTML);
        }
    } else if (text_box === "row3 one"){
        if (document.getElementById(id).value !== undefined){
          letterList.push(document.getElementById(id).innerHTML);
        }
    } else if (text_box === "row4 one"){
        if (document.getElementById(id).value !== undefined){
          letterList.push(document.getElementById(id).innerHTML);
        }
    } else if (text_box === "row5 one"){
      if (document.getElementById(id).value !== undefined){
        letterList.push(document.getElementById(id).innerHTML);
      }
    }
    document.getElementById(id).style.background = "#476b6b";
    document.getElementById(id).style.border = "3px solid transparent"

    // loop through guess and mark green if fully correct
    for (let i = 0; i < letterList.length; i++) {
        if (letterList[i] === ans[i]) {
            document.getElementById(id).style.background = "#29a329";
        document.getElementById(id).style.border = "3px solid transparent"
            // remove letter from answer, so it's not scored again
            ans = ans.replace(letterList[i], " ");
            console.log(letterList)
            console.log(ans)
        }
    }
    // loop through guess and mark yellow if partially correct
    for (let i = 0; i < letterList.length; i++) {
        if (document.getElementById(id).style.background !== "rgb(41, 163, 41)" && ans.includes(letterList[i])) {
            document.getElementById(id).style.background = "#e6e600";
            document.getElementById(id).style.border = "3px solid transparent"
            // remove letter from answer, so it's not scored again
            ans = ans.replace(letterList[i], " ");
            console.log(letterList)
            console.log(ans)
        }
    }
    
    
    showWin(text_box)
    showAnswer(ans, id)

  }








  
  while (id<25){
  var text_box = document.getElementById(id).className;

    if (text_box === "row1 one"){
        if (document.getElementById(id).value !== undefined){
          row1.push(document.getElementById(id).innerHTML);
          color1.push(document.getElementById(id).style.background);
        }
    } else if (text_box === "row2 one"){
        if (document.getElementById(id).value !== undefined){
          row2.push(document.getElementById(id).innerHTML);
          color2.push(document.getElementById(id).style.background);
        }
    } else if (text_box === "row3 one"){
        if (document.getElementById(id).value !== undefined){
          row3.push(document.getElementById(id).innerHTML);
          color3.push(document.getElementById(id).style.background);
        }
    } else if (text_box === "row4 one"){
        if (document.getElementById(id).value !== undefined){
          row4.push(document.getElementById(id).innerHTML);
          color4.push(document.getElementById(id).style.background);
        }
    } else if (text_box === "row5 one"){
      if (document.getElementById(id).value !== undefined){
        row5.push(document.getElementById(id).innerHTML);
        color5.push(document.getElementById(id).style.background);
      }
    }
    id++;
  }