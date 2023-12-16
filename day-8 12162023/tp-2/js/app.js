const openChatBarElement  = document.getElementById('open-chat-bar');
const chatBubble = document.getElementById('chat-bubble');
const messageElement = document.getElementById('message');
const chatElement = document.getElementById('chat');

var chat = [];

function openChat(){
    openChatBarElement.style.display = 'none';
    chatBubble.style.display = 'block';
}

function closeChat(){
    openChatBarElement.style.display = 'block';
    chatBubble.style.display = 'none';
}



function send(){
    const message = messageElement.value;

    if( message != '' ){
        const obj = { message: message, type : 0 }

        chat.push(obj);

        // play audio !!
        let audio = new Audio('./pop.mp3');
        audio.play();

        // auto reponse !!

        const res = { message: "bonjour", type : 1 }

        chat.push(res);

        showData();
    }
}


function showData(){
    /**
     * 


                
     */

    let blocHTML ='';

    chat.map((m)=>{
        
        blocHTML = blocHTML + `
            <div class="${ m.type == 0 ? 'user-chat-message' : 'pc-chat-message' }">
                    <div class="content">
                        ${m.message}
                    </div>
                </div>
        `;



        /*if (chat.type == 0) {
            blocHTML = blocHTML + `
            <div class="user-chat-message">
                    <div class="content">
                        ${m.message}
                    </div>
                </div>
            `;
        
        } else {
            blocHTML = blocHTML + `
            <div class="pc-chat-message">
                    <div class="content">
                    ${m.message}
                    </div>
                </div>`;
        
        }*/


    })


    chatElement.innerHTML = blocHTML;
}