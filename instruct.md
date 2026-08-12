Command to get the cloudflare worker initialized is -  npm create cloudflare -- project_name

recorded notes - https://app.notion.com/p/Monitoring-Serverless-3b35446d62ce80148155ee4118a69adf

npx wrangler login -> to let cloudflare wrangler access to deply
then npm run deploy -> mentioned in package.json

Hono is a very great alernative for this, because it supports a lot of framework a great substitute for apps 

for prisma to work with the connection pool 

DATABASE_URL="prisma://accelerate.prisma-data.net/?api_key=your_key" // use your personal

5. Add accelerate as a dependency 
npm install @prisma/extension-accelerate

6. Generate the prisma client
npx prisma generate --no-engine

For neon you have to use the db URL with conn pooling tick on , and in prisma , you have to take it from the prisma accelerate service