import { UsuarioRepository } from '../repositories/usuario.repository';
import { UserMicroserviceService } from '../../infrastructure/external-services/user-microservice.service';
import { Factura } from '../entities/factura.entity';

export class FacturaService {
  //private usuarioRepository: UsuarioRepository;
  private userMicroserviceService: UserMicroserviceService;

  constructor(userMicroserviceService: UserMicroserviceService) {
    //this.usuarioRepository = usuarioRepository;
    this.userMicroserviceService = userMicroserviceService;
  }

  async crearFactura(userId: string,planId: string): Promise<Factura> {
    try {
        const usuarioExterno = await this.userMicroserviceService.obtenerUsuarioPorId(userId);

        // Aquí podrías realizar lógica de mapeo y transformación según tus necesidades
        // ...

        // Utiliza directamente los datos del usuario externo sin crear una instancia local
        return new Factura(usuarioExterno.id,usuarioExterno.nombre, usuarioExterno.correo, planId, 100);

    } catch (error: any) {
      throw new Error(`Error al crear la factura: ${error.message}`);
    }
  }
}
