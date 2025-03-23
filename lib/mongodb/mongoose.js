import mongoose from 'mongoose';

let initialized = false;

export const connect = async () => {
  
   
   
  mongoose.set('strictQuery', true);
  if (initialized) {
    console.log('MongoDB already connected');
    return;
  }
  console.log("here1");
  
  try {
      console.log("here2");
      await mongoose.connect("mongodb+srv://miladstake:milad123456@cluster0.cut30.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
      dbName: 'alpha'
    });
    console.log("here3");
    initialized = true;
    console.log('MongoDB connected');
  } catch (error) {
    console.log('MongoDB connection error:', error);
  }
};