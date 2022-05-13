const db = require("../../db");

exports.keahlian = async (req, res) => {
  try {
   const data =  await db("kealian");
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
