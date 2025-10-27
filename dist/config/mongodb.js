import { MongoClient, ServerApiVersion } from "mongodb";
const uri = "mongodb+srv://mahbub:mahbub@cluster0.bisro7z.mongodb.net/todo?appName=Cluster0";
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});
export default client;
//# sourceMappingURL=mongodb.js.map