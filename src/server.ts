
import app from "./app.js"
import client from "./config/mongodb.js";

const port = 3000

const bootstrap = async () => {
    

    const connect = await client.connect();
    console.log('MongoDB connected');

    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })
}

bootstrap();