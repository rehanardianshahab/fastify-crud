const db = require("../models");
const User = db.User;

const getUser = async (req, reply) => {
  const users = await User.findAll();
  reply.send({ message: "Success", data: users });
};

const addUser = async (req, reply) => {
  const users = await User.create({
    fullname: req.body.fullname,
    email: req.body.email,
    password: req.body.password,
    address: req.body.address,
    active: 0,
  });
  const all = await User.findOne({
    where: {
      email: req.body.email,
    },
  });
  reply.send({ message: "Success", data: all });
};

const findUser = async (req, reply) => {
  const { id } = await req.params;
  const users = await User.findOne({
    attributes: ["fullname", "email"],
    where: {
      id: id,
    },
  });
  reply.send({ message: "Success", data: users });
};

const updateUser = async (req, reply) => {
  const { id } = await req.params;
  const { fullname, email } = await req.body;
  const users = await User.update(
    {
      fullname: fullname,
      email: email,
    },
    {
      where: {
        id: id,
      },
    }
  );
  const newData = await User.findOne({
    attributes: ["fullname", "email"],
    where: {
      id: id,
    },
  });
  reply.send({ message: "Update Success", data: newData });
};

const deleteUser = async (req, reply) => {
  const { id } = await req.params;
  await User.destroy({
    where: {
      id: id,
    },
  });
  const users = await User.findAll();
  reply.send({ message: "Data Deleted", data: users });
};

module.exports = {
  getUser,
  addUser,
  findUser,
  updateUser,
  deleteUser,
};
