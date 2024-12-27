import dotenv from "dotenv"
// load the environment variables from .env file
dotenv.config();


const config = {
    credentials:{
    AWSAccessKeyId: process.env.AWS_ACCESS_KEY_ID,
    AWSSecretKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
  REGION: process.env.REGION

};
console.log(config);

  
export default config;