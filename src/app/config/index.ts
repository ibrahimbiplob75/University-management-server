import dotenv from 'dotenv';
import path from 'path';
dotenv.config();

dotenv.config({ path: path.join(process.cwd(), '.env') });
import mongoose from "mongoose";


mongoose.connect(process.env.DATABASE_URL as string)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));


export default {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  bcrypt_salt_rounds: process.env.BYCRYPT_SALT_ROUNDS,
  default_user_password: process.env.DEFAULT_USER_PASSWORD,
};
