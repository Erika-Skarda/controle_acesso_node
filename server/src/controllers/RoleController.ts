import { getCustomRepository } from 'typeorm';
import { Request, Response } from 'express';
import RoleRepository from '../repositories/RoleRepository';

class RoleController {

  async create(request: Request, response: Response) {
    const roleRepository = getCustomRepository(RoleRepository);
  
    const { name, description } = request.body;

    const existRole =  await roleRepository.findOne({ name: name });

    if(existRole) {
      return response.status(400).json({
        error: 'Role already exists'
      });
    }

    const role = roleRepository.create({
      name,
      description
    })

    await roleRepository.save(role);

    return response.json(role);
  }
}

export default RoleController;