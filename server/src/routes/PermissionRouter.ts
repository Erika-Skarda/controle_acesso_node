import { Router } from 'express';
import PermissionController from '../controllers/PermissionController';

export const permissionRouter = Router();

const permissionController = new PermissionController();

permissionRouter.post('', permissionController.create)