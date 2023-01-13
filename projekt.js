
let btn=document.querySelector(".button1"),
    spinIcon=document.querySelector(".spinner"),
     btnText=document.querySelector(".btn-text");
     btn.addEventListener("click", () => {
        btn.style.cursor="wait";
        btn.classList.add("checked");
        spinIcon.classList.add("spin");
        btnText.textContent="Loading";
    

        setTimeout(()=>  {
            btn.style.pointerEvents="none";
            spinIcon.classList.replace("spinner", "check");
            spinIcon.classList.replace("fa-circle-notch", "fa-check");
            btnText.textContent="Done";
        }, 4000) //1s=1000ms
     }
     );


function message(){
   var Name=document.getElementById('name');
    var email=document.getElementById('email');
    const success=document.getElementById('success');
    const danger=document.getElementById('danger');
    
    if (Name.value === "" || email.value===""){
        danger.style.display='block';
     }
     else{
         setTimeout(()=>{
            Name.value='';
         email.value='';
     }, 2000);

     success.style.display='block';
}

setTimeout(()=>{
 danger.style.display='none';
 success.style.display='none';
 },4000)
 }  
        