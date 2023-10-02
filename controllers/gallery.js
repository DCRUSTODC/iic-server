import Gallery from "../models/gallery.js";
const postImage = async (req, res) => {
  try {
    const { title, description, image } = req.body;
    if (!title || !description ||! image) {
      res.status(400);
      throw new Error("Please fill all the fields");
    }
    const Newimage = new Gallery({
      title,
      description,
      image,
    });
    await Newimage.save();
    res.send(Newimage);
  } catch (e) {
    res.json({
      error: e.message,
    });
  }
};
const getImage = async (req, res) => {
  try {
    const images = await Gallery.find();
    res.status(200).send(images);
  } catch (e) {
    res.status(401).send(e.message);
  }
};
const deleteImage = async (req, res) => {
  try {
    const { id } = req.params;
    const image = await Gallery.findById(id);
    if (!image) {
      return res.status(400).send("No such Image Exists");
    }
    await Gallery.findByIdAndDelete(id);
    res.json({ message: "deleted successfully" });
  } catch (e) {
    res.status(400).send(e.message);
  }
};
const updateImage = async (req, res) => {
  try {
    const { id } = req.params;
    const image = await Gallery.findById(id);
    const update = req.body;
    if (!image) {
      return res.status(400).send("No such Image Exists");
    }
    await Gallery.findByIdAndUpdate(id, update);
    res.status(200).json({ message: "Editied Successfully" });
  } catch (e) {
    res.status(400).send(e.message);
  }
};
export { postImage,getImage,updateImage,deleteImage};

