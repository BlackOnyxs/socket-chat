var socket = io();

        socket.on('connect', function(){
            console.log('Server connected');
        });
        socket.on('disconnect', function(){
            console.log('Lost server connection.')
        });

        socket.emit('sentMessage', {
            user: 'Robin',
            msg: 'Hello Word!'
        }, function( resp ){
            console.log(resp);
        });

        socket.on('sentMessage', function(msg){
            console.log(msg)
        });