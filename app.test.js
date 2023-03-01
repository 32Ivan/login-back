const request = require("supertest");
const app = require("./app.js");

describe("POST /login", () => {
  test("returns a 200 response with a valid email and password", async () => {
    const response = await request(app).post("/login").send({
      email: "optimus.prime@autobots.com",
      password: "validPassword1234!",
    });
    expect(response.status).toBe(200);
  });

  test("returns a 401 response with an invalid email and password", async () => {
    const response = await request(app)
      .post("/login")
      .send({ email: "jane", password: "invalid" });
    expect(response.status).toBe(401);
  });
});

describe("POST /encode", () => {
  test("returns a 200 response with an encoded string", async () => {
    const response = await request(app)
      .post("/encode")
      .set("Authorization", "xyz0987654321")
      .send({ str: "XXXYYYYZZQXX" });
    expect(response.status).toBe(200);
    expect(response.body.encoded).toBe("X3Y4Z2Q1X2");
  });

  test("returns a 400 response with a missing input string", async () => {
    const response = await request(app)
      .post("/encode")
      .set("Authorization", "xyz0987654321");
    expect(response.status).toBe(400);
  });

  test("returns a 401 response with an invalid authorization token", async () => {
    const response = await request(app)
      .post("/encode")
      .set("Authorization", "invalid")
      .send({ str: "XXXYYYYZZQXX" });
    expect(response.status).toBe(401);
  });
});
