# ThreeD.press 🚀

## Development requirements
- [Earthly](https://earthly.dev/)
- [Docker](https://docs.docker.com/engine/install/)
- [Docker-compose](https://docs.docker.com/compose/install/)
- An IDE maybe?

## Development setup
1. Run `earthly +run-dev`
1. Congrats! You've got a hot-reloading frontend/backend for development! 🤩
- Note: newly installed stuff will require a rebuild on the container(s)

Frontend accessible at http://localhost:3000
Backend Swagger UI accessible: http://localhost:5000/api
MongoDB is not exposed, if needed, uncomment the 2 lines in the docker compose and re-run.