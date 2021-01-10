import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign, verify } from 'jsonwebtoken';

import User from '../models/user';

interface Request{
  email: string;
  password: string;
}

interface Response{
  user: User;
  token: string;
}

class CreateSessionService{
  public async execute({ email, password }: Request): Promise<Response>{
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

    const token = sign({}, '826f8c8e23aa6ef876c8301cc1c594ca', {
      subject: user.id,
      expiresIn: '1d',
    })

    return{
      user,
      token
    }
  }
}

export default CreateSessionService;
