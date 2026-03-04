const { MongoClient } = require('mongodb');

const URI = 'mongodb+srv://kathiravan:spuorgpkj@namastenode.owjpmkh.mongodb.net/';

const client = new MongoClient(URI);



// Database Name
const dbName = 'LIMS';

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('User');

    // the following code examples can be pasted here...

    const data = {
        firstname: "Ranveer",
        lastname: "Singh",
        city: "Mumbai",
        phoneNumber: "987543210",
    };

    // const insertResult = await collection.insertOne(data);
    // console.log("Inserted documents =>", insertResult);




    const countResult = await collection.countDocuments({});
    console.log("Count of documents in the User collection => ", countResult);

    // Find all documents with a filter of firstname: Kathir
    const result = await collection.countDocuments({ firstName: "Kathiravan" });
    //     const result = await collection.countDocuments({
    //   firstName: { $regex: '^Kathir', $options: 'i' }   // case‑insensitive
    // });
    console.log("result => ", result);



    const updateResult = await collection.updateOne({ firstname: "Ranveer" }, { $set: { phoneNumber: '8888845322' } });
    console.log('Updated documents =>', updateResult);

    const rename = await collection.updateMany({},{ $rename: { "firstname": "firstName" } });
    console.log('Renamed documents =>', rename);

    const findResult = await collection.find({}).toArray();
    console.log('Found documents =>', findResult);


    return 'done.';
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());