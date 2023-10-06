import multer from "multer";

const storage = multer.diskStorage({});

export const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5000000,
  },
}).single("image");

export default upload;
