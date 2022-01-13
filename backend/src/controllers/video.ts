import { RequestHandler } from 'express';
import { HydratedDocument } from 'mongoose';

import { VideoInterface } from '../interfaces/video';
import Video from '../models/video';


const videosGet: RequestHandler = async( req, res ) => {

  const videos = await Promise.all([
    Video.find()
  ]);
  
  res.status(200).json({
    videos
  });
};

const videosGetById: RequestHandler = async( req, res ) => {

  const id: string = req.params.id;

  const video = await Video.findById( id );

  res.status(200).json({
    video
  })
  
};

const createVideo: RequestHandler = async( req, res ) => {

  const { title, description, url }: VideoInterface = req.body;
  const doc: HydratedDocument<VideoInterface> = new Video({
    title, 
    description, 
    url 
  });

  doc.save();

  res.status(200).json('Video saved!')
};

const deleteVideo: RequestHandler = async( req, res ) => {
  
  const id: string = req.params.id;

  await Video.findByIdAndDelete( id );

  res.status(200).json({
    msg: 'Video eliminador correctamente.'
  })

};

const updateVideo: RequestHandler = async( req, res ) => {
  
  const id: string = req.params.id;
 
  const video = await Video.findByIdAndUpdate( id, req.body, { new: true })

  res.status(200).json({
    msg:'El siguiente video se ha actualizado correctamente: ',
    video
  })

};

export {
  videosGet,
  videosGetById,
  createVideo,
  deleteVideo,
  updateVideo
}
