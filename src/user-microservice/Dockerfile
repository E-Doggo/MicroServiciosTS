# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory for the user microservice
WORKDIR src/user-microservice

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle the app source code for the user microservice
COPY . .

# Expose the port the user microservice app runs on
EXPOSE 8001

# Define the command to start the user microservice app
CMD ["npm", "run","dev"]