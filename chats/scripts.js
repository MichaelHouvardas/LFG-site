var msg = document.getElementById("chatMSG"); //Creates a varuble of the user message based on user input box

function addChatItem() {
    if (msg.value == ""){//looks at the value of msg and checks if its equal to an empty string
        $("#list").append(`<li>Error empty please input some text` + `</li>`);//Creates a clild in the ul that says to put text
        alert("Error empty please input some text");//Creates an alert
    } else{
        $("#list").append(`<li class="userchat">[user]: ` + msg.value + `</li>`); //adds a child to the ul and adds a br to make the next chat appear under the previous one
    }
}

$("#submitChat").on("click", addChatItem); //calls a function when send chat input is clicked
