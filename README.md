### Docker project with nginx, php-fpm, mysql and phpmyadmin
_start project for local assembly_

Append this line to /etc/hosts:

    127.0.1.1 friday api-friday

Start docker with command:

    npm i
    cd api/
    npm i
    docker-compose up -d
    
Config for your server nginx ( nginx at proxy server, transfer requests on localhost:3032 where listening docker ):
    
    sudo cp /var/www/friday/autorun/conf/friday.conf /etc/nginx/sites-available/
    sudo -s ln /etc/nginx/sites-available/friday.conf /etc/nginx/sites-enabled/
    sudo service nginx restart
    
Paste this address into your browser and see:

    http://friday/ or http://localhost:3041/
    http://api-friday/ or http://localhost:3042/
    
Restore mongo dump:

    docker exec -it friday_docker_mongo_1 mongorestore /dump/mongo

______________________________________________________________
**api commands**

    method      |       request       |         body/json         |       params
 
    get               /artists/
    get               /artists/id                                           id
    post              /artists/          {"name": "test-name"}
    put               /artists/          {"name": "change-name"}            id
    delete            /artists/                                             id   
    post              /getfriday/                                              
    
______________________________________________________________
**WARNING! Commands to remove all docker containers!**
    
*Remove all containers*

    sudo docker rm $(sudo docker ps -a -q)

*Remove all images*

    sudo docker rmi $(sudo docker images -q)
