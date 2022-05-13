const db = require("../../db");

exports.project = async (req, res) => {
  try {
   const data =  await db("project");
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
