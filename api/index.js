import express from "express";
import bodyParser from 'body-parser';

//routes
import mealRoutes from './routes/meal.route';

const app = express();
const PORT = 9001;

app.get('/', (req, res) => {
    return res.send('The API Is Working');
});

app.use('api/v1/meals', mealRoute);

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});