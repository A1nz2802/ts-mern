import express from 'express';
import cors from 'express';
import morgan from 'morgan';

import dbConnection from '../database/config';
import videosRouter from '../routes/video';

export default class Server {

  constructor(
    private app = express(),
    private port:string = process.env.PORT!,
    private videosPath = '/api/videos'
  ) {

    this.conectarDB();

    this.middlewares();

    this.routes();

  }
  
  async conectarDB(): Promise<void> {
    await dbConnection();
  }

  middlewares() {

    this.app.use( cors() );

    this.app.use( morgan('dev') );

    this.app.use( express.json() );

    //? this.app( express.urlencoded({ extended: false }));
  }

  routes() {
    this.app.use( this.videosPath, videosRouter );
  }

  listen(): void {
    this.app.listen( this.port, (): void => {
      console.log('Servidor corriendo en puerto', this.port )
    });
  }
}