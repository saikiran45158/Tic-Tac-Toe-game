let v=document.querySelector("#win");
v.hidden=true;
let b=document.querySelectorAll(".btn");
let turn0=true;
b.forEach((ele)=>{
ele.addEventListener("mouseover",()=>{ele.style.backgroundColor="grey"; 
   });
})
let x=(event)=>{
event.target.style.backgroundColor=""; 
}
b.forEach((ele)=>{
ele.addEventListener("mouseleave",x)
}) 
let winArr=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let isWin=()=>{
  for(i of winArr){
	fir=b[i[0]].innerText;
        sec=b[i[1]].innerText;
	thi=b[i[2]].innerText;
    if(fir!="") {
       if(fir===sec && sec===thi) {
       v.hidden=false;
       console.log(v.innerText);
       v.innerText="Winner "+thi;
        b.forEach((ele)=>{ele.disabled=true;
        });
        break;
        }
     }
}
}
let f=(eve)=>{
  if(turn0){
	eve.target.innerText="X";
        turn0=false
     }
    else {
      eve.target.innerText="O";
        turn0=true;
}
  eve.target.disabled=true;
  isWin();
}
let resetbtn=document.querySelector("#reset");
resetbtn.addEventListener("click",()=>{
   v.hidden=true;
   turn0=true;
   b.forEach((ele)=>{ele.disabled=false;
        ele.innerText="";
});
   
});
b.forEach((ele)=>{  ele.addEventListener("click",f);})

