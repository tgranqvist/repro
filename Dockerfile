FROM node:22.13.1-alpine3.21 AS build
COPY . .
RUN npm install && npm run build

FROM node:22.13.1-alpine3.21 AS final
ENV NODE_ENV=production
COPY --from=build package*.json .
RUN npm ci --omit=dev
COPY --from=build build .
EXPOSE 3000
CMD ["node", "index.js"]