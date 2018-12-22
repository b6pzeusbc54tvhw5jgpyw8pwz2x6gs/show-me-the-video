 # SMTV(show-me-the-video)
 SMTV is a project that generates a video clip web page similar to YouTube by
 parsing the markdown file including the video contents. Use githu b, gitlab,
 or locally accessible peer store as source data to create this web p age.

 Create a directory `show-me-the-video` in the repository root pat h and write
 markdown files(`*.md`) in this directory as shown in the followin g rules.

 ## Markdown 문서 예제

```markdown
[videoUrl]: http://local-static.aluc.io:8998/video1.mkv "click to checkout"
[thumbnailUrl]: http://local-static.aluc.io:8998/resized.256/video1.jpg
[tags]: windows,linux
[prev]: ./previousMarkdownContent.md
[next]: ./nextMarkdownContent.md
[duration]: 2:30
[author]: alfreduc
[date]: 20181127
[update]: 20181127

# Title

## Sub title

[![my video][thumbnailUrl]][videoUrl]

// Describe the video description or related links freely usingt he Markdown
format.
```

`[![my video][thumbnailUrl]][videoUrl]` is important part. The link contains videoUrl
must be in markdown file. unless SMTV can not find video contents.

| property     | isRequired |  description                  |
|----------    |----------- |-------                        |
| videoUrl     |   required | video content's url           |
| thumbnailUrl |   optional | thumbnail of video            |
| tags         |   optional | command seperated tag texts   |
| prev         |   optional | Specify the previous relevant file in the same directory |
| next         |   optional | Specify the next relevant file in the same directory     |
| duration     |   required | video content's duration time |
| author       |   required | uploader                      |
| date         |   required | upload date                   |
| update       |   required | last update date              |

## Run as devserver

```sh                                                                                   
$ yarn                                                                                  
$ yarn dev
```                                                                                     

## run

```sh
$ docker run --rm -v $PWD:/root --workdir /root node:10.14-alpine
```

## font
- https://google-webfonts-helper.herokuapp.com

# ETC
Some command when you handle Video & Image

## Simple static web server for serving video & image files

```sh
$ docker run -d --rm -v $PWD/videoExample:/usr/share/nginx/html -p8998:80 nginx
```

## Generate thumbnail image from first frame

```sh
$ docker run --rm -v $PWD:/root -w /root jrottenberg/ffmpeg -i vidoe.mp4 -ss 00:00:00.0 -vframes 1 thumbnail.png
```

## Resize image

```sh
$ docker run --rm -v $PWD:/workdir --workdir /workdir jujhars13/docker-imagemagick mogrify -resize 64x -quality 100 -path resized.64 original/*.png
```

