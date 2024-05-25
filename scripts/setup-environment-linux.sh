#!/bin/bash

sudo apt update
sudo apt install wget 
sudo apt install libgtk2.0-0t64 libgtk-3-0t64 libgbm-dev libnotify-dev libnss3 libxss1 libasound2t64 libxtst6 xauth xvfb
sudo chmod 755 setup-app.sh
sudo chmod 755 install-nvm.sh

# Downdload of projets and unzip
mkdir Klir_interview
wget https://github.com/vardhinikumar2023/Klir_interview/archive/refs/heads/master.zip
wget meuprojeto
unzip master.zip
unzip meuprojeto

# Setup nvm to install node requesits and up a application for testing
./install-nvm.sh
./setup-app.sh