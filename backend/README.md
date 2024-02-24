```
npm install
npm run dev
```

```
npm run deploy
```

# neon db connection string

postgresql://dassudip.info:P4mB6tbHAgNy@ep-dry-cherry-a5s8ch2d.us-east-2.aws.neon.tech/test?sslmode=require

# accelerate and generate key

https://www.prisma.io/data-platform/accelerate

# Create the schema and migrate then

npx prisma migrate dev --name init_schema

# generate

npx prisma generate --no-engine

# add the accelerate extension

npm install @prisma/extension-accelerate
