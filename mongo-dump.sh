#!/bin/bash
#Color console constant
PURPLE='\033[0;35m'
GREEN='\033[0;32m'
NC='\033[0m' # No PURPLE
N='\n\n';
printf "${GREEN}-------------------------------------${NC}\n\n\n"
printf "${GREEN}       MONGO DUMP${NC}\n\n\n"
printf "${GREEN}-------------------------------------${NC}\n\n"
printf "${GREEN}   made by Vladimir Krupin \033[1mvladimir.krupin133@mail.ru\033[m\n\n${NC}"
printf "${GREEN}-------------------------------------${NC}\n"

#Create mongo dump
sudo docker exec -it friday_docker_mongo_1 mongodump --out /backup/
printf "${GREEN}DONE${NC} ${PURPLE}sudo docker exec -it friday_docker_mongo_1 mongodump --out /backup/${NC}${N}"
