import { Document } from 'mongoose';

export interface VideoInterface extends Document {
  title: string,
  description?: string,
  url: string
}

