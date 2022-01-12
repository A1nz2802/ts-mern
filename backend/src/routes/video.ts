import { Router } from 'express';
import { check } from 'express-validator';

import { videosGet, createVideo, deleteVideo, updateVideo } from '../controllers/video';
import { existVideoByUrl } from '../helpers/db-validators';


const router = Router();

router.get('/', videosGet );

router.get('/:id', videosGet );

router.post('/:id',[
  check('title', 'El título del video es obligatorio').isEmpty(),
  check('url', 'La url del video es obligatoria').not().isEmpty(),
  check('url', 'Debe ser una url válida').isURL(),
  check('url').custom( existVideoByUrl)

], createVideo );

router.delete('/:id', deleteVideo );

router.put('/:id', updateVideo)

export default router;