// backend/server.js
// import express from "express";
// import cors from "cors";
// import productRoutes from "./routes/products.js"; // Ruta correcta

// const app = express();

// app.use(cors());
// app.use(express.json());

// // Rutas
// app.use("/api/products", productRoutes);

// // Ruta raíz de prueba
// app.get("/", (req, res) => {
//     res.send("Servidor funcionando");
// });

// // Puerto
// const PORT = 5001;
// app.listen(PORT, () => {
//     console.log(`Servidor corriendo en http://localhost:${PORT}`);
// });



// backend/server.js

import express from "express";
import cors from "cors";
import productRoutes from "./routes/products.js"; // Importamos las rutas de productos

const app = express();

app.use(cors());
app.use(express.json());

// Usamos las rutas de productos
app.use("/api/products", productRoutes);

// Ruta raíz para probar el servidor
app.get("/", (req, res) => {
  res.send("Servidor funcionando");
});

// Definir el puerto donde se ejecutará el servidor
const PORT = 5001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});