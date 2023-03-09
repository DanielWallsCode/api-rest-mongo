import express from "express";
import { router } from "./routes/task.routes.js";
import cors from 'cors';
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// settings
app.set('port', process.env.PORT || 3000);

// MIDDLEWARES
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// PUBLIC
app.use(express.static(path.join(__dirname + '/public')));

// ROUTES
app.use('/api/tareas', router);

export default app;
