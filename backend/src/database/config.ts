import mongoose from 'mongoose'

const dbConnection = async(): Promise<void> => {
  try {

    await mongoose.connect( process.env.MONGODB_CNN! );

    console.log('Base de datos online');

  } catch (err) {
    console.log( err );
    throw new Error('Error al iniciar la conexión a la base de datos')
  }
};

export default dbConnection;
