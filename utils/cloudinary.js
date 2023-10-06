import { v2 as cloudinary } from "cloudinary";

import dotenv from "dotenv";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_APIKEY,
  api_secret: process.env.CLOUDINARY_APISECRET,
});

const uploader = async (path, publicId) => {
  const result = await cloudinary.uploader.upload(
    path,
    {
      resource_type: "auto",
      folder: "binar-challenge",
      public_id: publicId,
    },
    (err, result) => {
      console.log(err);
    }
  );

  return result;
};

export default uploader;
