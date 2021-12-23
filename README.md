# ThreeD.press 🚀

## Development requirements
- [Earthly](https://earthly.dev/)
- [Docker](https://docs.docker.com/engine/install/)
- [Docker-compose](https://docs.docker.com/compose/install/)
- An IDE maybe?

## Development setup
1. Enter `backend` folder and run `earthly +build-dev-image`
1. Enter `frontend` folder and run `earthly +build-dev-image`
1. In the `frontend` folder, run `docker-compose up`
1. Congrats! You've got a hot-reloading frontend/backend for development! 🤩
- Note: newly installed stuff will require a rebuild on the container