import express from 'express';
import articlesRoutes from "./routes/articleRoutes.js";
import journalistRoutes from "./routes/journalistRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/articles", articlesRoutes);
app.use("/journalists", journalistRoutes);
app.use("/categories", categoryRoutes);

app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});