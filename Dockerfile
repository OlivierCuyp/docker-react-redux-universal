FROM node:6.10.3-alpine

# For private packages
ARG NPM_TOKEN

ENV APP_DIR="/var/www"

ENV NPM_VERSION="5.0.3" \
    NODE_TLS_REJECT_UNAUTHORIZED="0" \
    NPM_GLOBAL_ROOT="/usr/local/lib"

# npm install npm@5 doesn't work ...
# See: https://github.com/npm/npm/issues/15558
#      https://github.com/npm/npm/issues/15611#issuecomment-289133810
RUN cd /tmp && \
    npm install npm@${NPM_VERSION} && \
    rm -rf ${NPM_GLOBAL_ROOT}/node_modules && \
    mv node_modules ${NPM_GLOBAL_ROOT}

COPY package.json ${APP_DIR}/package.json
COPY package-lock.json ${APP_DIR}/package-lock.json

RUN cd ${APP_DIR} && \
    npm install && \
    npm cache clean --force

COPY ./dist/.gitignore ${APP_DIR}/dist/.gitignore
COPY ./.npmrc ${APP_DIR}/.npmrc
COPY ./webpack.config.js ${APP_DIR}/webpack.config.js
COPY ./webpack ${APP_DIR}/webpack
COPY ./config ${APP_DIR}/config
COPY ./src ${APP_DIR}/src
COPY ./test ${APP_DIR}/test

# Makes sure app dir exists & link base packages
RUN echo ${APP_DIR}
RUN mkdir -p ${APP_DIR}

WORKDIR ${APP_DIR}

CMD [ "npm", "start" ]
