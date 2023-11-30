# Docker Demo

Source code for a Docker demo I did for Operating System students at McMaster University.

## Requirements

[`docker`](https://docs.docker.com/get-docker/) Any recent version (v24.0.2 is current)

## Building an Image

You can build individual images by opening a shell in [frontend/](frontend/) or [backend/](backend/) and running

```
docker build -t $IMAGE_TAG .
```

The variable `$IMAGE_TAG` is what you should call your image so you can reference it when building your container.

## Running a Container

Since each container has it's own network, you will need to expose each respective app to your computer's local network. You can do this using the `-p` tag to map a container port to a local port.

The following commands will build and expose both containers while using the `$IMAGE_TAG` name you created earlier to specify which image to use.

```
docker run -p 3000:3000 $FRONTEND_IMAGE_TAG
docker run -p 4000:4000 $BACKEND_IMAGE_TAG
```

## All in One Step

The [`docker-compose.yml`](docker-compose.yml) can help facilitate all this for you in one go. By running

```
docker compose build
docker compose up
```

You can build each image defined under the `build` key of each service.