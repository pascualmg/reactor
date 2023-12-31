class ChatBoxComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.render();
        this.initWebSocket();
    }

    render() {
        this.shadowRoot.innerHTML = `
             <style>
                #messageInput { width: 400px; }
                #chat-box {
                    color: greenyellow;

                }

              </style>
              <div id="chat-box"></div>
              <div id="userInputSection">

              <label for="messageInput"></label>
              <input id="messageInput" type="text" placeholder="Write a message">
              <button id="sendButton">Send</button>
              </div> `;
    }

    initWebSocket() {
        const chatbox = this.shadowRoot.querySelector('#chat-box');
        const messageInput = this.shadowRoot.querySelector('#messageInput');
        const sendButton = this.shadowRoot.querySelector('#sendButton'); // Replace with your server's WebSocket URL
        const websocket = new WebSocket('ws://localhost:8001');

        websocket.onopen = () => {
            console.log('WebSocket Client Connected');
        };

        websocket.onmessage = (message) => {
            console.log(message);
            const payload = JSON.parse(message.data)
            console.log(payload);
            const div = document.createElement('div');
            div.textContent = message.data;
            chatbox.appendChild(div);
        };

        sendButton.addEventListener('click', () => {
            const message = messageInput.value.trim();
            if (message !== "") {
                websocket.send(message);
                messageInput.value = '';
            }
        });
    }
}

window.customElements.define('chat-box', ChatBoxComponent);
