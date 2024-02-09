const WebSocket = require('ws');

// Create a WebSocket server
const wss = new WebSocket.Server({ port: 3000 });

let index  = 0;


let chat = [
    {'comment' :"Hi Hello", 'timeStamp' : Date(), 'type' : 'In'},
    {'comment' :"I Had a doubt about the panel", 'timeStamp' : Date(), 'type' : 'In'},
    {'comment' :"How can I reconfigure the Products in Quote page..", 'timeStamp' : Date(), 'type' : 'In'},
    {'comment' :"Yeah! Gottch...", 'timeStamp' : Date(), 'type' : 'In'},
    {'comment' :"Thank you so much, For Quick response..", 'timeStamp' : Date(), 'type' : 'In'},
    {'comment' :"I like the fast response...", 'timeStamp' : Date(), 'type' : 'In'},
    {'comment' :"Yes you can close this session..", 'timeStamp' : Date(), 'type' : 'In'},
]


// Event listener for when a client connects to the server
wss.on('connection', (ws) => {
  console.log('Client connected');

  // Event listener for when the server receives a message from a client
  ws.on('message', (message) => {
    console.log(`Received: ${message}`, '------', index);
    console.log('resend-->',chat[index] )
    index = index +1;
    
    // Echo the received message back to the client
    ws.send(JSON.stringify(chat[index]) );
  });

// on error 
  ws.on('error', (error) => {
    console.error('WebSocket error:', error);
  });
  // Event listener for when the client disconnects from the server
  ws.on('close', () => {
    console.log('Client disconnected');
    index = 0;
  });
});