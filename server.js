// this places every kvp in our `.env`into a javascript object called `process.env`
require('dotenv').config()
// Require modules
const express = require('express');

// Require mongoose and db config
const mongoose = require('mongoose');
const db = mongoose.connection;
const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI, {
	useNewUrlParser: true,
	useUnifiedTopology: true 
});
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

// Create the Express app
const app = express();
// Enable use of JSX View Engine
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

//include the method-override package place this where you instructor places it
const methodOverride = require('method-override');

//after app has been defined
//use methodOverride.  We'll be adding a query parameter to our delete form named _method
app.use(methodOverride('_method'));


// Mount middleware (app.use) to pass data to a post route handler
app.use(express.urlencoded({extended: false}));
// ??? 
app.use((req, res, next) => {
	next();
});

// Import models
const User = require('./models/User.js');


// Mount routes
app.get('/', (req, res) => {
	res.send('<h1>Hello World!</h1>');
});

// TODO: Create the view
// app.get('/login', (req, res) => {
//     res.render('SignUp.jsx');
// });

// app.get('/FoodForm', (req, res) => {
//     res.render('FoodForm.jsx');
// });


// Create the server
app.listen(3000, () => {
	console.log('Listening on port 3000');
});
//  hello
// change 2