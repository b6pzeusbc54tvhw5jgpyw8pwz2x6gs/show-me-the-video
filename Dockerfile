FROM node:11.3.0-stretch

#RUN apt update && apt install libgit2-dev -y
#RUN ln -s /lib/x86_64-linux-gnu/libcrypto.so.1.0.2 /lib/x86_64-linux-gnu/libcrypto.so.1.0.0

# RUN BUILD_ONLY=true yarn
# https://github.com/nodegit/nodegit/issues/1581

#RUN mkdir /nodegit && \
#    cd /nodegit && \
#    apk update && \
#    apk upgrade && \
#    apk add git libgit2-dev
#
