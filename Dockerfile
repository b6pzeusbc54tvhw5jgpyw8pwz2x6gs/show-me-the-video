FROM node:10.14-stretch

#RUN apt update && apt install libgit2-dev -y
#RUN ln -s /lib/x86_64-linux-gnu/libcrypto.so.1.0.2 /lib/x86_64-linux-gnu/libcrypto.so.1.0.0

COPY . /root/application
WORKDIR /root/application
RUN rm -rf node_modules && yarn && npx next build src

CMD ["npx", "next", "start", "src" ]

