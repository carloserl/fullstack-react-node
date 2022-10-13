import express from 'express'
const app = express()
import rootRouter from './routes/files.route.js'
import cors from 'cors';
app.use(express.json());
app.use(cors())
// routes
app.use(rootRouter);


app.listen(3001, () => {
	console.log("Server started at port 3001");
});