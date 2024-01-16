const app = require('./config/server')

const index = require('./app/routes/index')
index(app)
const users = require('./app/routes/users')
users(app)

const port = 3013   
app.listen(port, ()=> {
    console.log(`Servidor conectado na porta: ${port}` );
})