import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log(`connected host ${conn.connection.host}`);
  } catch (err) {
    console.error("err", err);
  }
};

export default connectDB;
