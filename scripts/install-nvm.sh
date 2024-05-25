#!/bin/bash
# installs nvm (Node Version Manager)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
# download and install Node.js
nvm install v14.20.1
nvm install v20.13.1 
# verifies the right Node.js version is in the environment
node -v # should print `v20.13.1`