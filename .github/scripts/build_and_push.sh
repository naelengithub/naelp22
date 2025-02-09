#!/bin/bash

set -e

cd $CONTEXT_DIR
rm /tmp/build_args || echo OK
env >/tmp/build_args
echo "--build-arg \""$(cat /tmp/build_args | sed -z 's/\n/" --build-arg "/g')"IGNORE_VAR=IGNORE_VAR\"" >/tmp/build_args
BUILD_ARGS=$(cat /tmp/build_args)
# Read and transform the existing build arguments
BUILD_ARGS=$(cat /tmp/build_args | sed -z 's/\n/" --build-arg "/g')

# Append additional build arguments for email env variables
BUILD_ARGS+=" --build-arg \"EMAIL_HOST=$EMAIL_HOST\""
BUILD_ARGS+=" --build-arg \"EMAIL_USER=$EMAIL_USER\""
BUILD_ARGS+=" --build-arg \"EMAIL_PASS=$EMAIL_PASS\""
BUILD_ARGS+=" --build-arg \"EMAIL_TO=$EMAIL_TO\""
BUILD_ARGS+=" --build-arg \"EMAIL_PORT=$EMAIL_PORT\""
BUILD_ARGS+=" --build-arg \"IGNORE_VAR=IGNORE_VAR\""

COMMAND="docker build -t $FULL_IMAGE_NAME -t $IMAGE_NAME:latest -f $DOCKERFILE $BUILD_ARGS --no-cache ."
/bin/bash -c "$COMMAND"
echo $IMAGE_NAME
docker push $IMAGE_NAME:latest
docker push $FULL_IMAGE_NAME
		