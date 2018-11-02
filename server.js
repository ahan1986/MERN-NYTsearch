const 
    express = require('express'), 
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    routes = require('./routes'),
    app = express(),
    PORT = process.env.PORT || 3001;
    db = require('./models');

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// db.Result.create({
//     title: 'earnest hemmingway',
//     description: "what is up homie"
// })
//     .then(res => console.log(res))
//     .catch(err => console.log(err));

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/NYSearch");

//Start the API server
app.listen(PORT, () => {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});