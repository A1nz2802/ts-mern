import { RequestHandler } from 'express';
import { HydratedDocument } from 'mongoose';

import { VideoInterface } from '../interfaces/video';
import Video from '../models/video';


const videosGet: RequestHandler = async( req, res ) => {
  
  res.json('video saved')
};

const createVideo: RequestHandler = async( req, res ) => {

  const { title, description, url }: VideoInterface = req.body;
  const doc: HydratedDocument<VideoInterface> = new Video({
    title, 
    description, 
    url 
  });

  doc.save();

  res.status(400).json('Video saved!')
};

const deleteVideo: RequestHandler = async( req, res ) => {
  res.json({
    title: 'deleteVideo Ok :)'
  });
};

const updateVideo: RequestHandler = async( req, res ) => {
  res.json({
    title: 'updateVideo Ok :)'
  });
};

export {
  videosGet,
  createVideo,
  deleteVideo,
  updateVideo
}
