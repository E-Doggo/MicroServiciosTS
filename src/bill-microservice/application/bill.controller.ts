// Importa módulos necesarios...
import axios from 'axios';

// Importa lógica de dominio desde la carpeta 'domain'
import { UsuariosClient } from '../infrastructure/users.client';
import { FacturaService } from '../domain/services/bill.service';

// Define la URL del microservicio de usuarios
const usuariosServiceUrl = 'http://localhost:3001'; // Reemplaza con la URL real de tu servicio de usuarios

export class FacturaController {
  private facturaService: FacturaService;
  private usuariosClient: UsuariosClient;

  constructor() {
    this.facturaService = new FacturaService();
    this.usuariosClient = new UsuariosClient(usuariosServiceUrl);
  }

  async createFactura(requestData: any): Promise<any> {
    try {
      // Obtener el ID del usuario desde la solicitud
      const userId = requestData.userId;

      // Consultar el microservicio de usuarios para obtener los datos del usuario
      const usuarioResponse = await axios.get(`${usuariosServiceUrl}/usuarios/${userId}`);

      // Verificar si la solicitud al servicio de usuarios fue exitosa
      if (usuarioResponse.status !== 200) {
        throw new Error(`Error al obtener los datos del usuario. Código de estado: ${usuarioResponse.status}`);
      }

      // Obtener los datos del usuario desde la respuesta
      const userData = usuarioResponse.data;

      // Generar la factura utilizando los datos del usuario y otros datos de la solicitud
      const nuevaFactura = this.facturaService.generarFactura(userData, requestData);

      // Lógica adicional para almacenar la factura en la base de datos, enviar correos, etc.

      return nuevaFactura;
    } catch (error: any) {
      console.error(`Error al crear la factura: ${error.message}`);
      throw new Error('Error interno al procesar la solicitud');
    }
  }

  // Otras operaciones del controlador...
}
