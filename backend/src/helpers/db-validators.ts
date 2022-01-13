import Video from '../models/video';

const existVideoByUrl = async( url: string ) => {

  const existVideo = await Video.findOne({ url });

  if ( existVideo ) {
    throw new Error(`La url ${ url } ya existe`);
  }

}

const existVideoById = async( id: string ) => {
  
  const existVideo = await Video.findById( id );

  if ( !existVideo ) {
    throw new Error(`El id: ${ id } no existe`);
  }
  
}

export {
  existVideoByUrl,
  existVideoById
}