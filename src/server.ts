import express, { Express } from 'express';
import checkoutRoutes from './routes/checkoutRoutes';

export const app: Express = express();
const PORT = 8080;

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Server is healthy' });
});

// Routes
app.use(checkoutRoutes);

app.listen(PORT, () => {
  console.log(`Server running  on http://localhost:${PORT}`);
});
