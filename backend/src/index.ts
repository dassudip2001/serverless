import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign } from "hono/jwt";

const app = new Hono<THono>();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

// signup
app.post("/api/v1/signup", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();

  const user = await prisma.user.create({
    data: {
      email: body.email,
      password: body.password,
    },
  });

  //@ts-ignore
  const token = await sign({ id: user.id }, c.env.JWT_SECRET);

  return c.json({ token });
});

// signin
app.post("/api/v1/signin", async (c) => {
  const prisma = new PrismaClient({
    //@ts-ignore
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();

  const user = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  });

  if (!user) {
    return c.json({ error: "Invalid email or password" });
  }

  if (user.password !== body.password) {
    return c.json({ error: "Invalid email or password" });
  }

  //@ts-ignore
  const token = await sign({ id: user.id }, c.env.JWT_SECRET);

  return c.json({ token });
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
