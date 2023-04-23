//Get form element
var form=document.getElementById("formId");
function submitForm(event){

   //Preventing page refresh
   event.preventDefault();
}

//Calling a function during form submission.
form.addEventListener('submit', submitForm);
var pw=document.getElementById('pw');
var gw=document.getElementById('gw');
var plw=document.getElementById('plw');
var ew=document.getElementById('ew');
var sel=document.getElementById('waste');
var text = sel.options[sel.selectedIndex].text;
console.log(text);
if (text=='Paper')
   {
    pw.classList.add('act');
    pw.classList.remove('form');
    gw.classList.remove('act');
    gw.classList.add('form');
    plw.classList.add('form');
    plw.classList.remove('act');
    ew.classList.add('form');
    ew.classList.remove('act');
   }
if (text=='Plastic')
   {
    pw.classList.add('form');
    pw.classList.remove('act');
    gw.classList.remove('act');
    gw.classList.add('form');
    plw.classList.add('act');
    plw.classList.remove('form');
    ew.classList.add('form');
    ew.classList.remove('act');
   }
if (text=='Glass')
   {
    pw.classList.add('form');
    pw.classList.remove('act');
    gw.classList.remove('form');
    gw.classList.add('act');
    plw.classList.add('form');
    plw.classList.remove('act');
    ew.classList.add('form');
    ew.classList.remove('act');
   }
if (text=='E-Waste')
   {
    pw.classList.add('form');
    pw.classList.remove('act');
    gw.classList.remove('act');
    gw.classList.add('form');
    plw.classList.add('form');
    plw.classList.remove('act');
    ew.classList.add('act');
    ew.classList.remove('form');
   }
   