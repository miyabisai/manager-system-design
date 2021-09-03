document.getElementById("card-expand").addEventListener("click",function (){
    
    let expandArrow = document.getElementById("card-expand");
    let buttons = document.querySelector("#card-buttons");
    if(!expandArrow.classList.contains("expand")){
        if(expandArrow.classList.contains("restract")){expandArrow.classList.remove("restract");}
        expandArrow.classList.add("expand");
    }else{
        expandArrow.classList.remove("expand");
        expandArrow.classList.add("restract");
    }
    if(!buttons.classList.contains("show-buttons")){
        if(buttons.classList.contains("hide-buttons")){
            buttons.classList.remove("hide-buttons");
        }
        buttons.classList.add("show-buttons");
    }else{
        buttons.classList.remove("show-buttons");
        buttons.classList.add("hide-buttons");
    }
    
})

function toggleFullScreen(){
    document.getElementById("full-screen").classList.toggle("d-none");
}
document.getElementById("iconClear").addEventListener("click",function(){
    toggleFullScreen();
});

let buttons_edit = document.querySelectorAll(".icon__watch");
for(let i = 0;i < buttons_edit.length ; i ++){
    buttons_edit[i].addEventListener("click",function (){
        toggleFullScreen();
    });
}