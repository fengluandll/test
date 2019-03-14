#!/usr/bin/env bash

docker run --name hw-container \
ubuntu:latest \
touch /HelloWorld

docker commit hw-container hw_image

docker run --rm \
hw_image \
ls -l /HelloWorld