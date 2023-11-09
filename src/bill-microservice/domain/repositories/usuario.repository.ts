import { Usuario } from '../entities/usuario.entity'

export interface UsuarioRepository {
  obtenerUsuarioPorId(id: string): Promise<Usuario | null>;
}
