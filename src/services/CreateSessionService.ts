import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';

import User from '../models/user';

interface Request{
  email: string;
  password: string;
}

class CreateSessionService{
  public async execute({ email, password }: Request): Promise<{ user: User }>{
    const usersRepository = getRepository(User);
    const user = await usersRepository.findOne({ where: { email }});

    if(!user){
      throw new Error('Incorret email/password combination');
    }
    // user.password = senha criptografada
    // password = senha inserida no login sem criptografia
    const passwordMatched = await compare(password, user.password);

    if(!passwordMatched){
      throw new Error('Incorret email/password combination');
    }
    return{
      user
    }
  }
}

export default CreateSessionService;