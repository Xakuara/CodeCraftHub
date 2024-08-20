
# Specify the base image with Node.js
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port on which the Node.js application will run
EXPOSE 3000

# Command to start the Node.js application
CMD ["node", "index.js"]



# Specify the base image with MongoDB
FROM mongo

# Expose the port on which MongoDB will run
EXPOSE 27017

# Command to start the MongoDB server
CMD ["mongod"]
