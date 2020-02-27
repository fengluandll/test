# Running Tests Using Docker

Note: a pycharm project is added on python path

## Bring up Containers

run `docker-compose up -d` in this directory.

## Run Tests

`docker exec -it redis-in-action-python python ch0*_listing_source.py`

## Why Using `network_mode: "host"`?

Because Redis host defaults to `localhost` in every `redis.Redis()`, you would otherwise have to specify `host` in every occurrence.