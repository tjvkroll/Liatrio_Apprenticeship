# starting new container with node 18
FROM node:18
# changing working directory within container to the following path                          
WORKDIR /usr/src/app
# copying .json files and .js files from my machine to new container at workdir path
COPY package*.json ./appreticeship/interview.js ./

# installing all dependencies that I've copied into the working directory I.e. express
RUN npm install

# exposing port 8000 to the host network 
EXPOSE 8000

# run my interview.js using node upon running the container
CMD ["node", "interview.js"]



# docker run --rm -p 8000:8000 -it interview
