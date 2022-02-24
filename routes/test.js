let {
  getUser,
  addUser,
  findUser,
  updateUser,
  deleteUser,
} = require("../controllers/test.js");

async function routes(fastify, options) {
  const optAll = {
    schema: {
      response: {
        200: {
          type: "object",
          properties: {
            message: { type: "string" },
            data: { type: "array" },
          },
        },
      },
    },
    handler: getUser,
  };

  const optDelete = {
    schema: {
      params: {
        type: "object",
        properties: {
          id: { type: "string" },
        },
      },
      response: {
        200: {
          type: "object",
          properties: {
            message: { type: "string" },
            data: { type: "array" },
          },
        },
      },
    },
    handler: deleteUser,
  };

  const optOne = {
    schema: {
      body: {
        type: "object",
        properties: {
          fullname: { type: "string" },
          email: { type: "string" },
          password: { type: "string" },
          address: { type: "string" },
        },
      },
      response: {
        200: {
          type: "object",
          properties: {
            message: { type: "string" },
            data: {
              additionalProperties: true,
              type: "object",
            },
          },
        },
      },
    },
    handler: addUser,
  };

  const optFind = {
    schema: {
      params: {
        type: "object",
        properties: {
          id: { type: "integer" },
        },
      },
      response: {
        200: {
          type: "object",
          properties: {
            message: { type: "string" },
            data: {
              type: "object",
              additionalProperties: true,
            },
          },
        },
      },
    },
    handler: findUser,
  };

  const optUpdate = {
    schema: {
      params: {
        type: "object",
        properties: {
          id: { type: "integer" },
        },
        required: ["id"],
      },
      body: {
        type: "object",
        properties: {
          fullname: { type: "string" },
          email: { type: "string" },
        },
      },
      response: {
        200: {
          type: "object",
          properties: {
            message: { type: "string" },
            data: {
              type: "object",
              additionalProperties: true,
            },
          },
        },
      },
    },
    handler: updateUser,
  };

  fastify.get("/", optAll);
  fastify.get("/:id", optFind);
  fastify.post("/", optOne);
  fastify.put("/:id", optUpdate);
  fastify.delete("/:id", optDelete);
}

module.exports = routes;
