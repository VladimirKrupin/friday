#!/bin/bash
#Color console constant
PURPLE='\033[0;35m'
GREEN='\033[0;32m'
NC='\033[0m' # No PURPLE
N='\n\n';
LINE="${GREEN}-------------------------------------${NC}";
RED='\033[0;31m';

printf "${LINE}\n\n\n"
printf "${GREEN}       HARD RESTART FRIDAY PROJECT${NC}\n\n\n"
printf "${LINE}\n\n"
printf "${GREEN}   made by Vladimir Krupin \033[1mvladimir.krupin133@mail.ru\033[m\n\n${NC}"
printf "${LINE}\n\n"
printf "${RED}Are you sure what you want down all friday containers and remove all friday docker-images? [y/N]${NC}\n"

read -r -p "" response
case "$response" in
    [yY][eE][sS]|[yY])
        sudo docker-compose down
        printf "${GREEN}DONE${NC} ${PURPLE}sudo docker-compose down${NC}${N}"
        sudo docker rmi friday_docker_nodejs
        printf "${GREEN}DONE${NC} ${PURPLE}sudo docker rmi friday_docker_nodejs${NC}${N}"
        sudo docker rmi friday_docker_web
        printf "${GREEN}DONE${NC} ${PURPLE}sudo docker rmi friday_docker_web${NC}${N}"
        sudo docker rmi friday_docker_mongo
        printf "${GREEN}DONE${NC} ${PURPLE}sudo docker rmi friday_docker_mongo${NC}${N}"
        ;;
    *)
        #do_something_else
        ;;
esac
