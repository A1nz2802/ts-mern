import { Router } from 'express';
import { check } from 'express-validator';

import { videosGet, createVideo, deleteVideo, updateVideo, videosGetById } from '../controllers/video';
import { existVideoById, existVideoByUrl } from '../helpers/db-validators';
import validarCampos from '../middlewares/validar-campos';

const router = Router();

router.get('/', videosGet );

router.get('/:id',[
  check('id', 'No es un ID válido').isMongoId(),
  check('id').custom( existVideoById ),
  validarCampos
], videosGetById );

router.post('/:id',[
  check('title', 'El título del video es obligatorio').not().isEmpty(),
  check('url', 'La url del video es obligatoria').not().isEmpty(),
  check('url', 'Debe ser una url válida').isURL(),
  check('url').custom( existVideoByUrl),
  validarCampos
], createVideo );

router.delete('/:id',[
  check('id', 'No es un ID válido').isMongoId(),
  check('id').custom( existVideoById ),
  validarCampos
], deleteVideo );

router.put('/:id', updateVideo)

export default router;