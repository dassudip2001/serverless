import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

// signup
app.get("/api/v1/signup", (c) => {
  return c.text("Hello Hono!");
});

// signin
app.get("/api/v1/signin", (c) => {
  return c.text("Hello Hono!");
});

// get post
app.get("/api/v1/blog", (c) => {
  return c.text("Hello Hono!");
});

app.post("/api/v1/blog", (c) => {
  return c.text("Hello Hono!");
});

app.get("/api/v1/blog/:id", (c) => {
  return c.text("Hello Hono!");
});
export default app;
