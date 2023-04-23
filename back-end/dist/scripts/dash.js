var btn1=document.querySelector(".b1");
var btn2 =document.querySelector(".b2");
var btn3=document.querySelector(".b3");
var btn4=document.querySelector(".b4");

active1= () =>
{
  btn1.classList.add('active');
  btn2.classList.remove('active');
  btn3.classList.remove('active');
  btn4.classList.remove('active');
}
active2= () =>
{
  btn1.classList.remove('active');
  btn2.classList.add('active');
  btn3.classList.remove('active');
  btn4.classList.remove('active');
}
active3= () =>
{
  btn1.classList.remove('active');
  btn2.classList.remove('active');
  btn3.classList.add('active');
  btn4.classList.remove('active');
}
active4= () =>
{
  btn1.classList.remove('active');
  btn2.classList.remove('active');
  btn3.classList.remove('active');
  btn4.classList.add('active');
}