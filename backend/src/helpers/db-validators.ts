import Video from '../models/video';

const existVideoByUrl = async( url: string ) => {

  const existVideo = await Video.find({ url });

  if ( existVideo ) {
    throw new Error(`La url ${ url } ya existe`);
  }

}

export {
  existVideoByUrl
}