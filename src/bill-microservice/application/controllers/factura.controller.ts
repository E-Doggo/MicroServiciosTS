import { Request, Response } from 'express';
import { FacturaService } from '../../domain/services/factura.service';

export class FacturaController {
  private facturaService: FacturaService;

  constructor(facturaService: FacturaService) {
    this.facturaService = facturaService;
  }

  async crearFactura(req: Request, res: Response): Promise<void> {
    try {
      const { userId,usernombre,usercorreo, planId } = req.body;
      const factura = await this.facturaService.crearFactura(userId,planId);

      res.status(201).json(factura);
    } catch (error:any) {
      res.status(500).json({ error: error.message });
    }
  }
}


