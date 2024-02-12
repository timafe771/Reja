const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString =
  "mongodb+srv://timafe771:IBgI3Vuv2neOTy1V@clusterO.xetgv24.mongodb.net/Reja";

mongodb.connect(
  connectionString,
  {
    userNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) console.log("ERROR on connection mongoDB");
    else {
      console.log("MongoDB connection succeed");
      module.exports = client;

      const app = require("./app");
      const server = http.createServer(app);
      let PORT = 3000;
      server.listen(PORT, function () {
        console.log(
          `The server is running successfully on port: ${PORT}, http://localhost:${PORT}`
        );
      });
    }
  }
);
