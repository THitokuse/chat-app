FROM node:8.11.3-alpine

WORKDIR /chat-app

RUN apk update && \
    npm install -g npm vue-cli

RUN yarn global add expo-cli \
    yarn global add vue-native-cli

EXPOSE 9000

CMD ["/bin/sh"]