const { request, response } = require("express");
const express = require("express");
const router = express.Router();
const Note = require("./note");
router.get("/", async (request, response) => {
  try {
    const notes = await Note.find();
    response.json(notes);
  } catch (err) {
    response.send("Error " + err);
  }
});
router.get("/:id", async (request, response) => {
  try {
    const note = await Note.findById(request.params.id);
    response.json(note);
  } catch (err) {
    response.send("Error " + err);
  }
});
router.post("/", async (request, response) => {
  const note = new Note({
    title: request.body.title,
    content: request.body.content,
  });
  try {
    const returnData = await note.save();
    response.send(returnData);
  } catch (err) {
    response.send(" the error is" + err);
  }
});
router.patch("/:id", async (request, response) => {
  try {
    const note = await Note.findById(request.params.id);
    note.title = request.body.title;
    note.content = request.body.content;
    const notes1 = await note.save();
    response.json(notes1);
  } catch (error) {
    response.send(error);
  }
});
router.delete("/:id", async (request, response) => {
  try {
    const note = await Note.findById(request.params.id);
    const notes1 = await note.remove();
    response.json(notes1);
  } catch (error) {
    response.send(error);
  }
});
module.exports = router;
