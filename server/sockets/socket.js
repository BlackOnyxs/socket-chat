const { io } = require('../server')
io.on('connection', (client) => {
    
    console.log('User connected');

    client.on('disconnect', () => {
        console.log('Disconnected client');
    });

    client.emit('sentMessage', {
        user: 'Admin',
        msg:'Welcome'
    });

    //Listen client
    client.on('sentMessage', ( data, callback)=>{
        console.log(data);
        
        client.broadcast.emit('sentMessage', data);
        
    });
});