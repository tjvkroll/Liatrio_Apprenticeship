FROM node:14 
WORKINGDIR /usr/src/interview
COPY package*.json interview.js ./
RUN npm install
EXPOSE 8000
CMD ["node", "interview.js"]
