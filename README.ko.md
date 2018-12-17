# SMTV(show-me-the-video)
SMTV 는 비디오 콘텐츠을 포함한 마크 다운 파일을 파싱하여 유투브를 닮은 비디오
클립 웹페이지를 생성해주는 프로젝트입니다. 이 웹페이지를 생성하는 데 필요한
소스 데이터로 github, gitlab 혹은 로컬의 접근 가능한 깃 저장소를 사용합니다.

저장소 루트 경로에 `show-me-the-video` 라는 디렉토리 생성하고 이 디렉토리 안에
마크다운 파일(`*.md`)을 아래 규칙과 같이 작성하면 웹페이지 생성 > 끝!

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

// Describe the video description or related links freely using the Markdown
format.
```

## 개발서버 실행

```sh
$ yarn
$ yarn dev
```

## 운영서버 실행

```sh
$ docker run --rm -v $PWD:/root --workdir /root node:10.14-alpine yarn
$ docker run --rm -v $PWD:/root --workdir /root node:10.14-alpine npx next build src
$ docker-compose up -d
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

