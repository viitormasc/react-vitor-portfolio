#!/usr/bin/env bash
set -euo pipefail

: "${IMAGE_TAG:?IMAGE_TAG is required}"
: "${GHCR_USER:?GHCR_USER is required}"

IMAGE=ghcr.io/viitormasc/react-vitor-portfolio
CONTAINER=portfoliofrontend
PROJECT=portfolio

cd "$(dirname "$0")"

registry_config=$(mktemp -d)
trap 'rm -rf "$registry_config"' EXIT
DOCKER_CONFIG="$registry_config" docker login ghcr.io -u "$GHCR_USER" --password-stdin
DOCKER_CONFIG="$registry_config" docker pull "$IMAGE:$IMAGE_TAG"

printf 'IMAGE_TAG=%s\n' "$IMAGE_TAG" > .env

owner=$(docker inspect -f '{{index .Config.Labels "com.docker.compose.project"}}' "$CONTAINER" 2>/dev/null || true)
if [ -n "$owner" ] && [ "$owner" != "$PROJECT" ]; then
  echo "Replacing $CONTAINER from compose project '$owner'"
  docker rm -f "$CONTAINER"
fi

docker compose -p "$PROJECT" up -d --remove-orphans

docker images "$IMAGE" --format '{{.Tag}}' \
  | { grep -vx -e "$IMAGE_TAG" -e latest || true; } \
  | tail -n +3 \
  | xargs -r -I{} docker rmi "$IMAGE:{}"

echo "Deployed $IMAGE:$IMAGE_TAG"
