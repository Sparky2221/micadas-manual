filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
/*
let currentPopover = null;

  const buttons = document.querySelectorAll('ion-button');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', handleButtonClick);
  }

  async function handleButtonClick(ev) {
    popover = await popoverController.create({
      component: 'popover-example-page',
      event: ev,
      translucent: true
    });
    currentPopover = popover;
    return popover.present();
  }

  function dismissPopover() {
    if (currentPopover) {
      currentPopover.dismiss().then(() => { currentPopover = null; });
    }
  }

  customElements.define('popover-example-page', class ModalContent extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <ion-list>
          <ion-item>G: GIS-Computer (LabVIEW)</ion-item>
          <ion-item>M: MICADAS-Computer (ACS)</ion-item>
          <ion-item>S: Sunset-Computer (OCEC1133Ox)</ion-item>
          <ion-item>C: CHS-Computer (LabVIEW)</ion-item>
          <ion-item>A: AGE-Computer (VarioMICRO)</ion-item>
          <ion-item lines="none" detail="false" button onClick="dismissPopover()">Close</ion-item>
        </ion-list>
      `;
    }
  });
  */