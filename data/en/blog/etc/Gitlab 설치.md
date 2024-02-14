---
title: '[Git]_Gitlab'
date: '2023-12-20'
tags: ['gitlab', 'git' ]
draft: false
summary: '인프런 강의'
images: ['/static/images/responsive-image.jpg']
authors: ['default']
---


# gitlab 설치

### gitlab 설치

``` sh
docker run --detach --name gitlab 
  --hostname localhost -p 80:80 
  --restart always 
  --volume /Users/yongbin/dev/docker-volume/gitlab/config:/etc/gitlab 
  --volume /Users/yongbin/dev/docker-volume/gitlab/logs:/var/log/gitlab 
  --volume /Users/yongbin/dev/docker-volume/gitlab/data:/var/opt/gitlab 
  gitlab/gitlab-ce
```

- detach: 백그라운드 실행.
- hostname: gitlab 전용 도메인
- publish: gitlab에서는 22(ssh), 80(http), 443(https) 포트를 사용하는데 이를 포트포워딩 해준다.
- name: 컨테이너의 이름을 지정한다.
- restart: docker desktop이 실행될 때마다 자동으로 실행하는 명령어.
- volume: 데이터가 저장되는 곳을 설정해준다. 저 코드대로 라면 당연히 - - 로컬에 $HOME/gitlab 디렉토리가 있어야 한다. /config, /logs, /data 디렉토리는 없다면 자동으로 생성해준다

🚨 gitlab 설치 중 PostgreSQL 에러날 시에는 DockerDesktop 확인  
![에러](/static/images/docker-gitlab-postgresql-error.png)


- gitlab 로그인

``` sh
docker exec -it gitlab /bin/bash
cat /etc/gitlab/initial_root_password  #비밀번호 확인
```

- localhost:80/user/signin
- root / [password]

---

1. 비밀번호 변경
2. Group 생성 [MSA]
3. Project 생성


