/**
 * @jest-environment node
 */
const request = require("supertest");
let server;


describe("/api/users", () => {

  describe("GET /", () => {
    beforeEach(() => { server = require("../../server"); });
    afterEach(() => { server.close(); });

      it("should return all users", async () => {
        const res = await request(server).get("/api/users");
        expect(res.status).toBe(200);
        expect(res.body.length).toBe(2);
        expect(res.body.some(data => data.email === 'chinedu.enemuo@gmail.com')).toBeTruthy();
        expect(res.body.some(data => data.email === 'gizmo.enemuo@gmail.com')).toBeTruthy();
      });
  });

  describe("GET /:id", () => {
      it("should return a single user if valid ID is passed", async () => {
        const res = await request(server).get("/api/users/5d1394a86aa1c45f6cc5f716");
        expect(res.status).toBe(200);
        expect(Object.keys(res.body).length).toBe(5);
        expect(res.body).toHaveProperty('email', 'gizmo.enemuo@gmail.com');
      });

      it("should return 404 error if invalid ID is passed", async () => {
        const res = await request(server).get("/api/users/5d1394a86aa1c45f6cc5f7160");
        expect(res.status).toBe(404);
        expect(res.body).toBe("User id does not exist");
      });
  });

});
