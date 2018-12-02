# video guide here

## dev static web server

```sh
$ docker run -d --rm -v $PWD/videoExample:/usr/share/nginx/html -p8998:80 nginx
```

## capture thumbnail
```sh
$ docker run --rm -v $PWD:/root -w /root jrottenberg/ffmpeg -i 01-p4sync.mp4 -ss 00:00:00.0 -vframes 1 01-p4sync.png
$ docker run --rm -v $PWD:/root -w /root jrottenberg/ffmpeg -i 02-3minserver.mp4 -ss 00:00:00.0 -vframes 1 02-3minserver.png
$ docker run --rm -v $PWD:/root -w /root jrottenberg/ffmpeg -i 03-eclipseimport.mp4 -ss 00:00:00.0 -vframes 1 03-eclipseimport.png
$ docker run --rm -v $PWD:/root -w /root jrottenberg/ffmpeg -i 04-eclipseremotedebug.mp4 -ss 00:00:00.0 -vframes 1 04-eclipseremotedebug.png
$ docker run --rm -v $PWD:/root -w /root jrottenberg/ffmpeg -i 05-eclipseserver.mp4 -ss 00:00:00.0 -vframes 1 05-eclipseserver.png
$ docker run --rm -v $PWD:/root -w /root jrottenberg/ffmpeg -i 06-eclipseperforceplugin.mp4 -ss 00:00:00.0 -vframes 1 06-eclipseperforceplugin.png
$ docker run --rm -v $PWD:/root -w /root jrottenberg/ffmpeg -i 07-Sourcenotfound.mp4 -ss 00:00:00.0 -vframes 1 07-Sourcenotfound.png
$ docker run --rm -v $PWD:/root -w /root jrottenberg/ffmpeg -i 08-launchgroup.mp4 -ss 00:00:00.0 -vframes 1 08-launchgroup.png
$ docker run --rm -v $PWD:/root -w /root jrottenberg/ffmpeg -i 09-eclipsehotstaticfilereplacement.mp4 -ss 00:00:00.0 -vframes 1 09-eclipsehotstaticfilereplacement.png
```

## resize image
```
$ docker run --rm -v $PWD:/workdir --workdir /workdir jujhars13/docker-imagemagick mogrify -resize 64x -quality 100 -path resized.64 original/*.png
```

## font
- https://google-webfonts-helper.herokuapp.com

## run for dev
```sh
$ yarn
$ yarn dev
```

## run
```sh
docker run --rm -v $PWD:/root --workdir /root node:10.14-alpine yarn
docker run --rm -v $PWD:/root --workdir /root node:10.14-alpine npx next build src
docker-compose up -d
```
