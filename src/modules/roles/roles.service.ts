import { HttpStatus, Injectable } from '@nestjs/common';
import { RolesRepository } from './roles.repository';
import { RoleCreateDto } from './dtos/create-role.dto';
import { ResponseFormat } from 'src/core/interfaces/response.interface';

@Injectable()
export class RolesService {
  constructor(private rolesRepository: RolesRepository) {}

  async findAll(): Promise<ResponseFormat<any>> {
    const roles = await this.rolesRepository.findAll();
    return { statusCode: HttpStatus.CREATED, data: { roles } };
  }

  async create(data: RoleCreateDto): Promise<ResponseFormat<any>> {
    const role = await this.rolesRepository.create(data);
    return { statusCode: HttpStatus.CREATED, data: { role } };
  }
}
