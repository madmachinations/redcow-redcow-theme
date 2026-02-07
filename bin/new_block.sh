#!/bin/bash

cd blocks || exit 1

read -p "Enter namespace name: " NAMESPACE_NAME
read -p "Enter block name: " BLOCK_NAME

npx @wordpress/create-block@latest "$BLOCK_NAME" --variant dynamic --namespace="$NAMESPACE_NAME"

cd "$BLOCK_NAME" || exit 1
rm -rf node_modules
cd ../../
yarn install

