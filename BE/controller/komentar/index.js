const db = require("../../db");

exports.komentar = async (req, res) => {
  const id = req.params.id;
  try {
   const data =  await db("komentar").where('project_id' , id);
    res.status(200).send({
      status: 200,
      message: "success",
      data:data
    });
  } catch (error) {
    res.status(500).send({
      status: 500,
      message:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};


exports.addKomentar = async (req, res) => {
  try {
   const data =  await db("komentar").insert(req.body);
    res.status(200).send({
      status: 200,
      message: "success",
    });
  } catch (error) {
    res.status(500).send({
      status: 500,
      message:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

