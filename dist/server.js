import mongoose from "mongoose";
import app from "./app.js";
const port = 3000;
const uri = "mongodb+srv://mahbub:mahbub@cluster0.bisro7z.mongodb.net/todo?appName=Cluster0";
const bootstrap = async () => {
    await mongoose.connect(uri);
    console.log('MongoDB connected');
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
    });
};
bootstrap();
//# sourceMappingURL=server.js.map