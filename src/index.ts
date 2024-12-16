import express from "express";
import bookRoutes from "./routes/bookRoutes";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api", bookRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});