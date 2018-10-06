#!/bin/bash
#Color console constant
PURPLE='\033[0;35m'
GREEN='\033[0;32m'
NC='\033[0m' # No PURPLE
N='\n\n';
printf "${GREEN}-------------------------------------${NC}\n\n\n"
printf "${GREEN}       START FRIDAY PROJECT FOR LOCAL${NC}\n\n\n"
printf "${GREEN}-------------------------------------${NC}\n\n"
printf "${GREEN}   made by Vladimir Krupin \033[1mvladimir.krupin133@mail.ru\033[m\n\n${NC}"
printf "${GREEN}-------------------------------------${NC}\n"

#Start docker with command:
sudo docker-compose up -d
printf "${GREEN}DONE${NC} ${PURPLE}sudo docker-compose up -d${NC}${N}"

#Up frontend:
sudo docker exec -it friday_docker_nodejs_1 sh react-start.sh
printf "${GREEN}DONE${NC} ${PURPLE}sudo docker exec -it friday_docker_nodejs_1 sh react-start.sh${NC}${N}"
sudo docker exec -it friday_docker_nodejs_1 sh react-build.sh
printf "${GREEN}DONE${NC} ${PURPLE}sudo docker exec -it friday_docker_nodejs_1 sh react-build.sh${NC}${N}"

#Download mongo dump
sudo docker exec -it friday_docker_mongo_1 mongorestore /dump/mongo
printf "${GREEN}DONE${NC} ${PURPLE}sudo docker exec -it friday_docker_mongo_1 mongorestore /dump/mongo${NC}${N}"
