FROM node:16.13-alpine
WORKDIR /timetables_trail_system
ENV PATH="./node_modules/.bin:$PATH"
COPY . .
RUN npm install
RUN npm run build
CMD ["npm", "start"]