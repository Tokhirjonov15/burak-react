#!/bin/bash

#PRODUCTION
git reset --hard
git checkout master
git pull origin master

npm i yarn -g
yarn global add serve
yarn
yarn run build
pm2 start "yarn run start:prod" --name=BURAK-REACT
# pm2 serve build 3000 --name BURAK-REACT --spa (for Windows)
