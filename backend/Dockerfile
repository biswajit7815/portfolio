FROM node:20-alpine

WORKDIR /app

# Install dependencies first for caching layers
COPY package.json package-lock.json* ./
RUN npm install

# Copy application files
COPY . .

# Expose backend port
EXPOSE 5000

CMD ["npm", "start"]
