ARG NODE_VERSION=latest
FROM node:${NODE_VERSION}-bookworm-slim

COPY  ./ .
# RUN npm install
RUN npm install && npm run build

EXPOSE 4174
ENTRYPOINT [ "npm", "run", "preview" ]
