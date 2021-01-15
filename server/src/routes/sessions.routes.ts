import { Router } from 'express';
import CreateSessionService from '../services/CreateSessionService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  try {
    const { email, password } = request.body;
    const sessionUser = new CreateSessionService();

    const { user, token } = await sessionUser.execute({
      email,
      password
    })

    const userWithoutPassword = {
      id: user.id,
      name: user.name,
      email: user.email,
      created_at: user.created_at,
      updated_at: user.updated_at,
    };

    return response.json({ user: userWithoutPassword, token });
  } catch (err) {
    return response.status(err.statusCode).json({ error: err.message });  }
});

export default sessionsRouter;
