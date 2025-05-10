FROM node:20.0.0 as build
WORKDIR /app
COPY . .
COPY Dockerrun.aws.json /app
RUN npm install --force
RUN npm run build
COPY public/.htaccess ./build
#develop environment
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html/
COPY --from=build /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]