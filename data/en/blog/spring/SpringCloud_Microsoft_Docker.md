---
title: '[SpringCloud]_Microservice Docker Image 생성'
date: '2023-12-18'
tags: ['MSA', 'SpringCloud', 'Docker']
draft: false
summary: 'inflearn MSA 강좌'
images: ['/static/images/responsive-image.jpg']
authors: ['default']
---

import Twemoji from './Twemoji.tsx'
import UnsplashPhotoInfo from './UnsplashPhotoInfo.tsx'

![thumbnail-image](/static/images/responsive-image.jpg)

<UnsplashPhotoInfo photoURL="https://unsplash.com/photos/TMa0l7fdSW8" author="Dang Cong" />

# Microservice Docker Image 생성

1. docker network 생성

``` sh
  $ docker network create msa-network
    048d5d3af1885690d3e8b64bf8f8daccb6b097cd11ffbc6ab5a1a645466fbf1c
```

2. mysql container 생성

``` sh
  $ docker run --network msa-network -d -p 3307:3306 --restart=always -e MYSQL_ROOT_PASSWORD=1234 --name mysql mysql
```

3. mysql db 생성

``` sh
  $ docker exec -it  msa-mysql /bin/bash
  $ mysql -u root -p
  # password 입력
  $ create database msa;
```

4. Config-server DockerFile 생성

``` DockerFile
  FROM openjdk:18-jdk-alpine AS builder
  COPY gradlew .
  COPY gradle gradle
  COPY build.gradle .
  COPY settings.gradle .
  COPY src src
  RUN chmod +x ./gradlew
  RUN dos2unix ./gradlew
  RUN ./gradlew bootJAR

  FROM openjdk:18-jdk-alpine
  WORKDIR /app
  COPY --from=builder build/libs/*.jar /app/app.jar
  EXPOSE 8080
  ENTRYPOINT ["java", "-jar", "app.jar"]
```

5. docker image 생성

``` sh
 $ docker build ./config-server -t config-server-image  ## 이미지 빌드
 $ docker run --network msa-network -d -p 8080:8080 --name config-server config-server-image # 이미지 실행
 $ docker logs -f config-server # 로그 확인
```

6. Gateway , Eureka , Item-Service 등등 DockerFile 생성
  - Dockerfile 
    - [링크 참고](https://github.com/yb-kimmm/SpringPractice/tree/master/spring-msa)
  - Docker build
  - Docker run

7. bootstrap-docker.yml ex:config-server

- bootstrap-docker 파일 생성
```yml
spring:
  application:
    name: eureka-server
  profiles:
    active: docker # local -> docker로 변경 
  cloud:
    config:
      uri: http://config-server:8080 # msa-network 내의 컨테이너는 이미지 이름으로 접근 가능
    loadbalancer:
      ribbon:
        enabled: false
```

- bootstrap파일을 변경했으므로 Config-Server 설정 파일도 변경해줘야함. ( 다른 컨테이너도 마찬가지 )
``` yml
---생략
spring:
  config:
    import:
      - classpath:/config/datasource-docker.yml

  cloud:
    gateway:
      routes:
      - id: item-service
        uri: lb://item-service
        predicates:
        - Path=/v1/item/**

eureka:
  instance:
    prefer-ip-address: true
  client:
    register-with-eureka: true
    fetch-registry: true
    service-url:
      defaultZone: http://eureka-server:8761/eureka
---생략
```

8. 도커파일들을 모두 빌드 한 후 실행

``` sh
  $ docker run --network msa-network -d -p 8080:8080 --name config-server config-server-image
  $ docker run --network msa-network -d -p 8761:8761 --name eureka-server eureka-server-image
  $ docker run --network msa-network -d -p 8070:8070 --name gateway-server gateway-server-image
  $ docker run --network msa-network -d -p 8900:8900 --name authentication-server authentication-server-image
  $ docker run --network msa-network -d  --name item-service item-service-image
```
