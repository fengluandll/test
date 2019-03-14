#!/usr/bin/env bash

docker run -d \
--name ch6_mariadb \
--memory 256m \
--cpu-shares 1024 \
--user nobody \
--cap-drop all \
mariadb