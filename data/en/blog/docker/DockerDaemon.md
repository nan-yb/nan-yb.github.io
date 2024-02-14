---
title: '[Docker] Docker Daemon'
date: '2022-10-25'
tags: ['docker-daemon', 'docker', 'devops', '도커']
draft: false
summary: 'A guide to using the srcset and sizes attributes to create responsive images'
images: ['/static/images/responsive-image.jpg']
authors: ['default']
---


## 특정 Docker 컨테이너 상세 정보 확인 명령어

```sh
• docker inspect <실행중인 컨테이너 ID>
• ip addr
```

## Docker 컨테이너가 사용하고 있는 특정 네트워크 인터페이스 확인 명령어

Docker 데몬 상태 확인 명령어

```sh
• systemctl status docker
• journalctl ‒r ‒u docker
```

Docker 정보 확인 명령어

```sh
• docker info
```

특정 Docker 컨테이너 상세 정보 확인 명령어

```sh
• docker inspect <실행중인 컨테이너 ID>
```

특정 Docker 컨테이너 이슈 로깅 명령어

```sh
• docker logs <실행중인 컨테이너 ID>
```

## 인터페이스에서 발생하는 트래픽 정보등을 tcpdump 파일에 수집 방법

tcpdump 수집 명령어

```sh
• tcpdump ‒i <컨테이너 네트워크 인터페이스명> -w <Dump 파일명>
```

tcpdump 파일 로컬로 가져오는 방법

```sh
• scp ‒i <서버접속 SSH Key> <계정명>@<서버 IP 혹은 DNS 주소>:<Dump 파일이 있는 서버의 경로> <Dump 파일을 저장할 로컬환경의 경로>
```

## Wireshark에 tcpdump 파일 import 및 Debugging 수행 방법

Wireshark Import 방법
• 파일 > import > scp로 가져온 Dump 파일선택 > 열기 Wireshark Debugging 방법

```sh
- filter 창에서 다음의 키워드로 검색
  • http
  • tcp.dstport == 80
  • tcp.port == 80 and ip.addr == <특정 목적지 IP>
  • http.request.method == “GET”
  • http.response.code == 200
```

## Docker 데몬 상태 확인 및 이슈 로깅 방법 명령어

Docker 데몬 상태 확인 명령어

```sh
• systemctl status docker
• journalctl ‒r ‒u docker
```

Docker 정보 확인 명령어

```sh
• docker info
```

특정 Docker 컨테이너 상세 정보 확인 명령어

```sh
• docker inspect <실행중인 컨테이너 ID>
```

특정 Docker 컨테이너 이슈 로깅 명령어

```sh
• docker logs <실행중인 컨테이너 ID>
```
