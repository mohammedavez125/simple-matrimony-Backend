const Images = require("../models/imageDetails");

const uploadImage= async (req, res) => {
    const { base64 } = req.body;
    try {
      await Images.create({ image: base64 });
      res.send({ Status: "ok" })
  
    } catch (error) {
      res.send({ Status: "error", data: error });
      
    }
}
  
const getImages= async (req, res) => {
  try {
    await Images.find({}).then(data => {
      res.send({ status: "ok", data: data })
    })
    
  } catch (error) {
    
  }
};

module.exports = {
    uploadImage,
    getImages
};