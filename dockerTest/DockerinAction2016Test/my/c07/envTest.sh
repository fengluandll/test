#!/usr/bin/env bash

docker run --name rich-image-example \
-e ENV_EXAMPLE1=Rich \
-e ENV_EXAMPLE2=Example \
busybox:latest

docker commit rich-image-example rie

docker run --rm rie \
bin/sh -c \
"echo \$ENV_EXAMPLE1 \$ENV_EXAMPLE2"