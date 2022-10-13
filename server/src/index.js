import express from 'express'
const app = express()
import rootRouter from './routes/files.route.js'


// routes
app.use(rootRouter);


app.listen(3001, () => {
	console.log("Server started at port 3001");
});