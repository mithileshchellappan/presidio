const express = require('express')
const port = 3000
const routes = require('./routes')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');

mongoose
	.connect("mongodb+srv://notagodzilla:8608684820@cluster0.0s183.mongodb.net/test", { useNewUrlParser: true })
	.then(() => {
		const app = express()
		app.use("/api", routes) 
		app.use(express.urlencoded({extended: true}));
        app.use(bodyParser.urlencoded({ extended: true }));
		app.listen(port, () => {
			console.log("Server has started!")
		})
	})
