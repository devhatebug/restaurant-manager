const multer = require('multer');

// Cấu hình multer
const storage = multer.memoryStorage();

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    // Chỉ chấp nhận file ảnh
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Chỉ chấp nhận file ảnh'), false);
    }
  },
  limits: {
    fileSize: 2 * 1024 * 1024 // Giới hạn 2MB
  }
});

module.exports = upload.single('file');
