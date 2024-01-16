var MongoClient = require('mongodb').MongoClient;
module.exports = (app) => {
    
    app.get('/users', async (req, res) => {
        // res.render('users')
        const uri = 'mongodb+srv://leandro:340209755@cluster0.rbzhjzh.mongodb.net/?retryWrites=true&w=majority'; // URI de conexão com o MongoDB
        const dbName = 'app'; // Nome do banco de dados
        const collectionName = 'users'; // Nome da coleção

        const client = new MongoClient(uri);

        try {
            await client.connect();
            const db = client.db(dbName);

            const usuarios = await db.collection(collectionName).find().toArray();
            res.json(usuarios);

        } catch (err) {
            console.error('Erro na conexão com o MongoDB:', err);
            res.status(500).send('Erro na conexão com o banco de dados.');
        } finally {
            client.close();
        }
    })

}