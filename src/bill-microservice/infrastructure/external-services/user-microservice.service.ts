import axios from 'axios';

export class UserMicroserviceService {
  async obtenerUsuarioPorId(id: string): Promise<any> {
    try {
      const response = await axios.get(`http://localhost:3002/usuarios/${id}`);
      return response.data;
    } catch (error:any) {
      throw new Error(`Error al obtener el usuario del servicio externo: ${error.message}`);
    }
  }
}
