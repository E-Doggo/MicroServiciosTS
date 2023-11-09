import express, { Application, Request, Response } from 'express';
import { FacturaController } from './application/controllers/factura.controller';
import { FacturaService } from './domain/services/factura.service';
import { UserMicroserviceService } from './infrastructure/external-services/user-microservice.service'; // Ajusta según tu estructura

const app: Application = express();
const port = process.env.PORT || 3001;

// Configura middleware y enrutadores
app.use(express.json());

// Configura dependencias
const userMicroserviceService = new UserMicroserviceService();
const facturaService = new FacturaService(userMicroserviceService)
const facturaController = new FacturaController(facturaService);

// Rutas
app.post('/bill', async (req: Request, res: Response) => {
  await facturaController.crearFactura(req, res);
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Microservicio Bill escuchando en el puerto ${port}`);
});

