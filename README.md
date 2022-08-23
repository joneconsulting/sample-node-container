#### 실행 명령어 (Windows, MacOS with Intel chip)

- docker network create my-node
- docker run --network my-node -d -p 13306:3306 -e --name mariadb edowon0623/mydb:latest
- docker run --network my-node -d --rm -p 3000:3000 --name simple-node1 edowon0623/node-server1:latest
- docker run --network my-node -d --rm -p 4000:4000 --name simple-node2 edowon0623/node-server2:latest

#### 실행 명령어 (MacOS with Apple silicon chip, m1)
- docker network create my-node
- docker run --network my-node -d -p 13306:3306 -e --name mariadb edowon0623/mydb:m1
- docker run --network my-node -d --rm -p 3000:3000 --name simple-node1 edowon0623/node-server1:m1
- docker run --network my-node -d --rm -p 4000:4000 --name simple-node2 edowon0623/node-server2:m1

#### 테스트 (웹 브라우저)
- http://localhost:3000/list 
- http://localhost:4000/hello

#### 테스트 (터미널)
- docker logs simple-node2

