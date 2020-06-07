window.onscroll = function() {changetopbarbgcolor()};

function changetopbarbgcolor() {
  var elem=document.getElementById("tpbr");
  //elem class="topbar"
  elem.className="topbar";
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    //document.getElementById("tpbr").style.backgroundColor="black";
    // document.querySelector(".navbar").style.transform="translateX(50%)";
    elem.className=elem.className+" topbar-small";
  } 
  else {
    //document.getElementById("tpbr").style.backgroundColor="";
    // document.querySelector(".navbar").style.transform="translateX(0%)";
  }
}


sliderinterval=setInterval(changeDiv,5000);

var sliderDivs=["thrdone","thrdtwo","thrdthree"];
var sldDivIndex = -1;
var sliderBtns=["tbt1","tbt2","tbt3"];
var sldBtnIndex = -1;
var prevDivId=null;
var prevBtnId=null;
var currentDivId=null;
var currentBtnId=null;


function changeDiv(){
  if (sldDivIndex>-1 && sldBtnIndex>-1){
      prevDivId=sliderDivs[sldDivIndex];
      prevBtnId=sliderBtns[sldBtnIndex];
    }
  console.log("prevDivId is :"+prevDivId);
  sldDivIndex++;
  sldBtnIndex++;
  if (sldDivIndex>=sliderDivs.length && sldBtnIndex>=sliderBtns.length){
    sldDivIndex=0;
    sldBtnIndex=0;
  }
  currentDivId=sliderDivs[sldDivIndex];
  currentBtnId=sliderBtns[sldBtnIndex];
  console.log("currentDivId is :" + currentDivId)
  if (prevDivId!=null){
    document.getElementById(prevDivId).style.maxWidth="0px";
    document.getElementById(prevDivId).style.transform="translateX(1500px)";
    document.getElementById(prevBtnId).style.backgroundColor="powderblue"
  }
  document.getElementById(currentDivId).style.maxWidth="1500px";
  document.getElementById(currentDivId).style.transform="translateX(0)";
  document.getElementById(currentBtnId).style.backgroundColor="cornflowerblue"
}

function selectDiv(ele) {
  clearInterval(sliderinterval);
  if (currentDivId !== null && currentBtnId != null){
    document.getElementById(currentDivId).style.maxWidth="0px";
    document.getElementById(currentDivId).style.transform="translateX(1500px)";
    document.getElementById(currentBtnId).style.backgroundColor="powderblue"
  }
  if (prevDivId !== null && prevBtnId != null){
    document.getElementById(prevDivId).style.maxWidth="0px";
    document.getElementById(prevDivId).style.transform="translateX(1500px)";
    document.getElementById(prevBtnId).style.backgroundColor="powderblue"
  } 
  prevDivId=null;
  prevBtnId=null; 
  if (ele.id=="tbt1"){
    console.log(ele.id);
    sldDivIndex=-1;
    sldBtnIndex=-1;
  }
  if (ele.id=="tbt2"){
    console.log(ele.id);
    sldDivIndex=0;
    sldBtnIndex=0;
  }
  if (ele.id=="tbt3"){
    console.log(ele.id);
    sldDivIndex=1;
    sldBtnIndex=1;
  }
  changeDiv();
  sliderinterval=setInterval(changeDiv,5000);
}

const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");

hamburger.addEventListener('click',()=>{
  navbar.classList.toggle("open")
})