import app from './app.js';
import './databse.js'


app.listen(app.get('port'),() => {
    console.log('Servidor Corriendo en el puerto',app.get('port'));
});

