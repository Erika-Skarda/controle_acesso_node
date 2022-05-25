import { Router } from 'express';
import ProductController from '../controllers/ProductController';
import { is } from '../middlewares/permission';

export const productRouter = Router();

const productController = new ProductController();

productRouter.post('', is(['ROLE_Admin']), productController.create)
productRouter.get('', is(['ROLE_Admin', 'ROLE_User']), productController.getAllProducts)
productRouter.get('/:id', is(['ROLE_Admin']), productController.getProductById)