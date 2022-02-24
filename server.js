const fastify = require("fastify")({ logger: false });
require("dotenv").config();
// Swagger
fastify.register(require("fastify-swagger"), {
  routePrefix: "/documentation",
  swagger: {
    info: {
      title: "API TESTER",
      description: "Testing the Fastify swagger API",
      version: "0.1.0",
    },
    host: "localhost:5000",
    schemes: ["http"],
    consumes: ["application/json"],
    produces: ["application/json"],
    tags: [
      { name: "user", description: "User related end-points" },
      { name: "code", description: "Code related end-points" },
    ],
    definitions: {
      User: {
        type: "object",
        required: ["id", "email", "password", "fullname"],
        properties: {
          id: { type: "string", format: "uuid" },
          fullname: { type: "string" },
          email: { type: "string", format: "email" },
          password: { type: "string" },
        },
      },
    },
    securityDefinitions: {
      apiKey: {
        type: "apiKey",
        name: "apiKey",
        in: "header",
      },
    },
  },
  uiConfig: {
    docExpansion: "full",
    deepLinking: false,
  },
  uiHooks: {
    onRequest: function (request, reply, next) {
      next();
    },
    preHandler: function (request, reply, next) {
      next();
    },
  },
  staticCSP: true,
  transformStaticCSP: (header) => header,
  exposeRoute: true,
});

fastify.register(require("./routes/test.js"), { prefix: "/v1" });
fastify.register(require("./routes/auth.route.js"), { prefix: "/v1/auth" });
fastify.register(require("./routes/teknisi.route.js"), {
  prefix: "/v1/teknisi",
});
fastify.register(require("./routes/jenisteknisi.route.js"), {
  prefix: "/v1/teknisi/jenis",
});
fastify.register(require("./routes/renovasi.route.js"), {
  prefix: "/v1/renovasi",
});
fastify.register(require("./routes/jenisrumah.route.js"), {
  prefix: "/v1/rumah/jenis",
});
fastify.register(require("./routes/spesifikasirumah.route.js"), {
  prefix: "/v1/rumah/spesifikasi",
});
fastify.register(require("./routes/halaman.route.js"), {
  prefix: "/v1/halaman",
});
fastify.register(require("./routes/interior.route.js"), {
  prefix: "/v1/interior",
});
fastify.register(require("./routes/gedung.route.js"), {
  prefix: "/v1/gedung",
});
fastify.register(require("./routes/jenisgedung.route.js"), {
  prefix: "/v1/gedung/jenis",
});
fastify.register(require("./routes/penutuprumah.route.js"), {
  prefix: "/v1/rumah/penutup",
});
fastify.register(require("./routes/masjid.route.js"), {
  prefix: "/v1/masjid",
});
fastify.register(require("./routes/pemesanan.route.js"), {
  prefix: "/v1/pemesanan",
});
fastify.register(require("./routes/address.route.js"), {
  prefix: "/v1/alamat",
});

//@Server
fastify.listen(5000, (err) => {
  if (err) {
    fastify.swagger();
    console.log(err);
    process.exit(1);
  } else {
    console.log(`Server running, navigate to  https://localhost:5000`);
  }
});
