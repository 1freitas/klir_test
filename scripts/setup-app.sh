#!/bin/bash
# setup backend project
cd Klir_interview-master/backend
nvm use v14.20.1
node -v > .nvmrc
npm install
npm run &

# setup fronted project
cd ../frontend
nvm use v14.20.1
node -v > .nvmrc
npm install
npm run &