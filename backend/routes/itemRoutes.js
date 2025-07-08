import express from 'express';
import {
  getItems,
  createItem,
  updateItem,
  deleteItem
} from '../controllers/itemController.js';
import { keycloak } from '../config/keycloak-config.js';

const router = express.Router();

router.get('/', keycloak.protect('role-get'), getItems);
router.post('/', keycloak.protect('role-post'), createItem);
router.put('/:id', keycloak.protect('role-put'), updateItem);
router.delete('/:id', keycloak.protect('role-delete'), deleteItem);

export default router;
