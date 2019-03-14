#!/usr/bin/env bash

docker run --name cmd-git \
--entrypoint git \
ubuntu-git

docker commit \
-m "Set CMD git" \
-a "Yun" \
cmd-git ubuntu-git

docker rm -vf cmd-git

docker run \
--name cmd-git \
ubuntu-git version