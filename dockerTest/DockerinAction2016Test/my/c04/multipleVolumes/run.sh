docker run --name fowler \
-v /example-books:/library/PoEAA \
-v /library/DSL \
alpine:latest \
echo "Fowler collection created."