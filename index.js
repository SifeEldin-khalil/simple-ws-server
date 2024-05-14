const PORT                  = 3000
const { WebSocketServer }   = require('ws');

const wss = new WebSocketServer({ port: PORT}, ()=>{
    console.log(`Web-socket server is running on ws://localhost:${PORT}`)
});

wss.on('connection', function connection(ws) {
    console.log('New device connected')

    ws.on('message', function message(data) {
        console.log('Server received message: %s', data);
        ws.send(`New Incoming Message From ${data}`);
    });

    ws.on('error', console.error);

    setInterval(() => {
        ws.send(`Ping Form server each 10 seconds at: ${new Date().toISOString()}`);
    }, 10000);

});
