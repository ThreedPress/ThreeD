FROM node:16-alpine
WORKDIR /app

fe-deps:
  COPY frontend/package.json frontend/tsconfig.json frontend/package-lock.json ./
  RUN npm install
  COPY --dir frontend/src/ src/
  COPY --dir frontend/public/ public/

be-deps:
  COPY backend/package.json backend/tsconfig.json backend/tsconfig.build.json backend/package-lock.json ./
  RUN npm install
  COPY --dir backend/src/ src/

fe-test:
  FROM +fe-deps
  ENV CI true
  RUN npm test

be-test:
  FROM +be-deps
  RUN npm test

fe-build:
  FROM +fe-deps
  RUN npm run build
  SAVE ARTIFACT build/

be-build:
  FROM +be-deps
  RUN npm run build
  SAVE ARTIFACT build/

build-fe-dev-image:
  FROM +fe-deps
  ENTRYPOINT ["npm", "start"]
  SAVE IMAGE threed-press-frontend:dev-build

build-be-dev-image:
  FROM +be-deps
  ENTRYPOINT ["npm", "run", "start:dev"]
  SAVE IMAGE threed-press-backend:dev-build

run-dev:
  LOCALLY
  RUN earthly +build-fe-dev-image
  RUN earthly +build-be-dev-image
  RUN docker-compose up



