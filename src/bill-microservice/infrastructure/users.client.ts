

import axios from 'axios';

export class UsuariosClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async getUsuario(userId: string): Promise<any> {
    try {
      const response = await axios.get(`${this.baseUrl}/usuarios/${userId}`);

      if (response.status !== 200) {
        throw new Error(`Error al obtener los datos del usuario. Código de estado: ${response.status}`);
      }

      return response.data;
    } catch (error: any) {
      throw new Error(`Error al obtener los datos del usuario: ${error.message}`);
    }
  }
}
