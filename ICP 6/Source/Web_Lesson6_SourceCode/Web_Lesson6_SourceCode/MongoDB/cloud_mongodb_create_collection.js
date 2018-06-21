/**
 * Created by Vijaya Yeruva on 5/27/2017.
 */
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://User7:Pandala1995@ds143778.mlab.com:43778/apiwebdemo';

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbase = db.db("apiwebdemo");
    dbase.createCollection("newCollection", function(err, res) {
        if (err) throw err;
        console.log("Collection created!");
        db.close();
    });
});
