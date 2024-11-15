# Use the official Node.js image as the base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files to the container
COPY . .

# Build the React application
RUN npm run build

# Expose port 3000 (or the port your app uses)
EXPOSE 3000

# Serve the app using a lightweight web server
CMD ["npx", "serve", "-s", "dist", "-l", "3000"]
