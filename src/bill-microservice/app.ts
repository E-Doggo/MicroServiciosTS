import express from 'express';
import bodyParser from 'body-parser';
import { FacturaController } from './application/bill.controller';

const app = express();
const port = 3000;

// Configura middleware
app.use(bodyParser.json());

// Instancia el controlador de facturas
const facturaController = new FacturaController();

// Configura rutas
app.post('/facturas', async (req, res) => {
  try {
    const nuevaFactura = await facturaController.createFactura(req.body);
    res.json({ factura: nuevaFactura });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor de facturación en ejecución en http://localhost:${port}`);
});
