
const sendArticleBtn = document.getElementById("sendArticle");
const cancelSendArticleBtn = document.getElementById("cancelArticle");

    function toggleComment(){
        let command_area =  document.getElementById("comment");
        command_area.classList.toggle("show-comment");   
    }
    
    cancelSendArticleBtn.addEventListener("click",function (){
        let command_area =  document.getElementById("comment");
        if(command_area.classList.contains("show-comment")){
            command_area.classList.remove("show-comment");  
        }
    });
    
    sendArticleBtn.addEventListener("click",function (){
        let command_area =  document.getElementById("comment");
        if(!command_area.classList.contains("show-comment")){
            command_area.classList.add("show-comment");  
        }
    });
