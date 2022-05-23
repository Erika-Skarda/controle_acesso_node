import { Router } from 'express';
import RoleController from '../controllers/RoleController';

export const roleRouter = Router();

const roleController = new RoleController();

roleRouter.post('', roleController.create)