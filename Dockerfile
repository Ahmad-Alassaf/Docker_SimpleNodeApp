FROM node
# make directory in container
WORKDIR /app
# copy package.json file 
COPY package.json .
# create/get all  denepencicies 
RUN npm install
# copy all source code /files
COPY . .
EXPOSE 5000
CMD [ "npm","start" ]