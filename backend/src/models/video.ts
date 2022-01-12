import { Schema, model } from 'mongoose';
import { VideoInterface } from '../interfaces/video';

const VideoSchema = new Schema<VideoInterface>({
  title: {
    type: String,
    require: [true, 'El nombre del video es obligatorio'],
    unique: true,
    trim: true
  },
  description: {
    type: String,
    require: false,
    unique: false,
    trim: true
  },
  url: {
    type: String,
    required: true,
    unique: true,
    trim: true
  }
}, {
  versionKey: false,
  timestamps: true
});

export default model( 'Video', VideoSchema );