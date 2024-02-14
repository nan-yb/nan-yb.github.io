---
title: '[Docker] Docker Compose'
date: '2022-10-25'
tags: ['docker-compose', 'docker' , 'devops' , '도커']
draft: false
summary: 'A guide to using the srcset and sizes attributes to create responsive images'
images: ['/static/images/responsive-image.jpg']
authors: ['default']
---


# 도커 컴포즈 소개

## 1. 도커 컴포즈 (Docker Compose)

- 단일 서버에서 여러 컨테이너를 프로젝트 단위로 묶어서 관리 docker-compose.yml YAML 파일을 통해 명시적 관리

- 프로젝트 단위로 도커 네트워크와 볼륨관리
- 프로젝트 내 서비스 간 의존성 정의 가능
- 프로젝트 내 서비스 디스커버리 자동화
- 손 쉬운 컨테이너 수평 확장

```
컴포스 사용 목적

1. 특정 프로젝트의 로컬 개발 환경 구성 목적으로 사용
- 프로젝트의 의존성(Redis , MySQL , Kafka 등)을 쉽게 띄울 수 있다.

2. 자동화된 테스트 환경 구성
- CI/CD 파이프라인 중 쉽게 격리된 테스트 환경을 구성하여 테스트 수행 가능


3. 단일 호스트 내 컨테이너를 선언적 관리
- 단일 서버에서 컨테이너를 관리할 때 YAML 파일을 통해 선언적으로 관리
```

## 2. 프로젝트 / 서비스 / 컨테이너

### 1) 프로젝트 (Project)

- 도커 컴포즈에서 다루는 워크스페이스 단위 ,
- 함께 관리하는 서비스 컨테이너의 묶음.
- 프로젝트 단위로 기본 도커 네트워크가 생성 됨.

### 2) 서비스(Service)

- 도커 컴포즈에서 컨테이너를 관리하기 위한 단위,
- scale을 통해 서비스 컨테이너의 수 확장 가능.

### 3) 컨테이너(Container)

- 서비스를 통해 컨테이너 관리

## 3. Docker_compose.yml

- version, services , networks , - - - - volumes 총 4개의 최상위 옵션

## 4. 도커스왐(Docker Swam)

- 여러 서버를 기반으로 스왐 클러스터를 형성하여 컨테이너를 관리하는 컨테이너 오케스트레이션 시스템
  쿠버네테스와 동일목적으로 만들어졌지만 인기를 끌지 못함.
