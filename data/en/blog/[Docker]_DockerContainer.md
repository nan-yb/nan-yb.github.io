---
title: '[Docker] Docker Container'
date: '2022-10-25'
tags: ['docker-container',  'docker' , 'devops' , '도커']
draft: false
summary: 'A guide to using the srcset and sizes attributes to create responsive images'
images: ['/static/images/responsive-image.jpg']
authors: ['default']
---


# 1. Docker Network

## 컨테이너 포트 노출

```
$ docker run -p [HOST IP:POST]:[CONTAINER PORT] [container]

# nginx 컨테이너의 80번 포트를 호트트 모든 IP의 80번 포트와 연결하여 실행
$ docker run -d -p 80:80 nginx

# nginx 컨테이너의 80번 포트를 호스트 127.0.0.1 IP의 80번 포트와 연결하여 실행
$ docker run -d -p 127.0.0.1:80:80 nginx

# nginx 컨테이너의 80번 포트를 호스트의 사용 가능한 포트와 연결하여 실행
$ docker run -d -p 80 nginx
```

## Expose Vs Publish

```
#expose 옵션은 그저 문서화 용도
$docker run -d --expose 80 nginx

#puglic 옵션은 실제 포트를 바인딩
$docker run -d -p 80 nginx
```

# 2. Docker Volume

### 볼륨을 사용하는 이유

- 특정 이미지가 데이터를 계속 쌓아두는 경우 해당 데이터를 보관할 필요가 있을 때

### 호스트 볼륨

```
 # 호스트의 /opthtml eㅣ렉토리를 Nginx의 뤱 루트 데릭토리로 마운트
 $ docker run -d \
  --name nginx \
  -v /opt/html:/usr/share/nginx/html \
  nginx
```

### 도커 볼륨

- 도커가 제공하는 볼륨관리 기능을 활용하여 데이터를 보존
  기본적으로 /var/lib/docker/volume/${volume-name}/\_data 에저장

```
# web-volume 도커 볼륨 생성
$ docker volume create --name db

# 도커의 web-volume 볼륨을 Nginx의 웹 루트 디렉토리로 마운트
$ docker run -d \
  --name mysql \
  -v db:/var/lib/mysql \
  -p 3306:3306 \
  mysql:5.7
```

### 읽기전용 볼륨연결

볼륨 연결 설정에 :ro 옵션을 통해 읽기 전용 마운트 옵션을 설정할 수 있습니다.

```
# 도커의 web-volume 볼륨을 Nginx의 웹 루트 디렉토리로 읽기 전용 마운트
$ docker run -d \
  --name nginx \
  -v web-volume:/usr/share/nginx/html:ro \
  nginx
```

# 도커 컨테이너 - 로그

로그 확인하기

```
# 전체 로그 확인
$ docker logs [container]

# 마지막 로그 10줄 확인
$ docker logs --tail 10 [container]

# 실시간 로그 스트림 확인
$ docker logs -f [container]

# 로그마다 타임스탬프 표시
$ docker logs -f -t [container]
```

로그 용량 제한하기

- 컨테이너 단위로 로그 용량 제한을 할 수 있지만 , 도커 엔진에서 기본 설정을 진행할 수 도 있습니다. (운영환경에서 필수 설정)

```
# 한 로그 파일 당 최대 크기를 3Mb로 제한하고 , 최대 로그 파일 3개로 로테이팅.
$ docker run \
  -d
  --log-driver=json-file \
  --log-opt max-size=3m
  --log-opt max-file=5 \
  nginx
```
