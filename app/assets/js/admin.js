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

function toggleFullScreen(Id){
    document.getElementById(Id).classList.toggle("d-none");
}

document.getElementById("openAdminForm").addEventListener("click",function(){
    toggleFullScreen("addMember");
});

document.getElementById("closeAdminForm").addEventListener("click",function(){
    toggleFullScreen("addMember");
});


document.getElementById("closeEditForm").addEventListener("click",function(){
    toggleFullScreen("editMember");
});

document.getElementById("closeCard").addEventListener("click",function(){
    toggleFullScreen("watchMember");
});


const buttons_watch = document.querySelectorAll(".icon__watch");
for(let i = 0;i < buttons_watch.length ; i ++){
    buttons_watch[i].addEventListener("click",function (){
        toggleFullScreen("watchMember");
    });
}

const buttons_edit = document.querySelectorAll(".icon__pen");
for(let i = 0;i < buttons_edit.length ; i ++){
    buttons_edit[i].addEventListener("click",function (){
        toggleFullScreen("editMember");
    });
}
