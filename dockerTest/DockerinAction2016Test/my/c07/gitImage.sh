#!/usr/bin/env bash

docker run -it \
--name image-dev \
ubuntu:latest \
/bin/bash

docker run --name tweak-a \
busybox \
touch /HelloWorld

docker run --name tweak-d \
busybox:latest \
rm /bin/vi

docker diff tweak-d

docker run --name tweak-c \
busybox:latest \
touch /bin/vi

docker diff tweak-c