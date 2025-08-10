FROM node:18-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build


# Production image
FROM nginx:alpine

WORKDIR /usr/share/nginx/html

# Copy build output from builder stage
COPY --from=builder /app/out .

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
