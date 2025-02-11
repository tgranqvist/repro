FROM node:22.13.1-alpine3.21 AS build
#ARG APP_DATABASE_TYPE=pg
WORKDIR /app
COPY . .
RUN npm install && npm run build

FROM node:22.13.1-alpine3.21 AS final
WORKDIR /app
ENV NODE_ENV=production
COPY --from=build /app/package*.json .
RUN npm ci --omit=dev
COPY --from=build /app/build .
EXPOSE 3000
CMD ["node", "index.js"]