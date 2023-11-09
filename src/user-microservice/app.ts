
import express, { Application, Request, Response } from 'express';

const app: Application = express();
const port = process.env.PORT || 3002;

const usuarios = [
  { id: '1', nombre: 'Usuario 1', correo: 'usuario1@example.com' },
  { id: '2', nombre: 'Usuario 2', correo: 'usuario2@example.com' },
  // Puedes agregar más usuarios según sea necesario
];

app.use(express.json());

app.get('/usuarios/:id', (req: Request, res: Response) => {
  const userId = req.params.id;
  const usuario = usuarios.find((user) => user.id === userId);

  if (usuario) {
    res.json(usuario);
  } else {
    res.status(404).json({ error: 'Usuario no encontrado' });
  }
});

app.get('/usuarios', (req: Request, res: Response) => {
  res.json(usuarios);
});

app.listen(port, () => {
  console.log(`User Microservice is running at http://localhost:${port}`);
});
