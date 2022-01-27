function copyText(e, id, tooltip) {

  //TODO: Estaria bé que al pulsar sobre copiar puguem formatejar el text perquè copiï els punts o numeros de les llistes <ul>
  var range = document.createRange();
  range.selectNode(document.getElementById(id));
  window.getSelection().removeAllRanges(); // clear current selection
  window.getSelection().addRange(range); // to select text
  document.execCommand("copy");
  window.getSelection().removeAllRanges();// to deselect
  this.showToolTip('ep', tooltip, e.target);
}

function showToolTip(teXTs, tooltipT, button) {
  var tooltipContainer = document.createElement("div");
  var tooltip = document.createElement("span");
  var text = document.createTextNode("👍");
  tooltip.id = tooltipT + "-";
  tooltip.className = "tooltiptext";
  tooltip.appendChild(text);
  tooltipContainer.className = "tooltip";
  tooltipContainer.appendChild(tooltip);
  button.appendChild(tooltipContainer);
  tooltip.style.visibility = "visible";
  tooltipContainer.style.visibility = "visible";
  tooltipContainer.style.opacity = 1;
  tooltipInitialX = Math.round(tooltipContainer.getBoundingClientRect().top);
  // animateTooltip(tooltipContainer, tooltipInitialX, 100);
  fadeTooltip(tooltipContainer);
}

function fadeTooltip(tooltipContainer) {

  var opacity = tooltipContainer.style.opacity;
  const myTimeout = setTimeout(fade, 1500);
  function fade() {
    var id = null;
    clearTimeout(myTimeout);
    clearInterval(id);
    id = setInterval(frame, 40);
    function frame() {
      if (tooltipContainer.style.opacity <= 0) {
        clearInterval(id);
        tooltipContainer.parentElement.removeChild(tooltipContainer);
        //destroy the tooltip
        tooltipContainer
      } else {
        opacity -= 0.1;
        console.log(opacity);
        tooltipContainer.style.opacity = opacity;
      }
    }
  }
}

// function animateTooltip(tooltipContainer, tooltipInitialX, xMove) {
//   var id = null;
//   var xGoal = tooltipInitialX + xMove;
//   var counter = tooltipInitialX;
//   //set the object to a correct position without decimals
//   tooltipContainer.style.top = tooltipInitialX + "px";
//   console.log("-- BEFORE", tooltipContainer.getBoundingClientRect().top);
//   clearInterval(id);
//   id = setInterval(frame, 10);
//   function frame() {
//     if (Math.round(tooltipContainer.style.top) == xGoal) {
//       clearInterval(id);
//     } else {
//       counter++;
//       console.log("ABANS", Math.round(tooltipContainer.getBoundingClientRect().top));
//       console.log("VARIABLE", tooltipInitialX);
//       //tooltipContainer.style.top = tooltipInitialX + 'px';

//     }
//   }
// }
