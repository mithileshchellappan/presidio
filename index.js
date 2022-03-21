const express = require('express')
const port = 3000
const routes = require('./routes')
const mongoose = require('mongoose')
var cors = require('cors')
const bodyParser = require('body-parser');
const { createProxyMiddleware } = require('http-proxy-middleware');
mongoose
	.connect("mongodb+srv://notagodzilla:8608684820@cluster0.0s183.mongodb.net/test", { useNewUrlParser: true })
	.then(() => {
		const app = express()
		app.use("/api", createProxyMiddleware({ 
			target: 'http://localhost:3000/', //original url
			changeOrigin: true, 
			//secure: false,
			onProxyRes: function (proxyRes, req, res) {
			   proxyRes.headers['Access-Control-Allow-Origin'] = '*';
			}
		})	,routes) 
		app.use(cors())
		app.use(express.urlencoded({extended: true}));
        app.use(bodyParser.urlencoded({ extended: true }));
		app.listen(port, () => {
			console.log("Server has started!")
		})
	})
