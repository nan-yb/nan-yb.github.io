---
title: '[MSA] Sprint-Cloud Config 설정'
date: '2023-12-18'
tags: ['MSA', 'Spring-Cloud', 'Spring-Cloud Config']
draft: false
summary: 'inflearn MSA 강좌'
authors: ['default']
---

import Twemoji from './Twemoji.tsx'

# Spring Cloud


스프링 프레임워크에서 분산 시스템인 <b>마이크로서비스 아키텍처(MSA)를 구축할 때 유용한 도구를 제공</b>하는 프레임워크입니다.  
주요 기능으로는 서비스 디스커버리, 로드밸런싱, 구성 관리, 회로 차단, 분산 추적 등이 있습니다.


## Spring Cloud 특징

1. 분산/버전 구성(Distributed/versioned configuration) : Spring Cloud Config

2. 서비스 등록 및 검색(Service registration and discovery) : Spring Cloud Discovery

3. 서비스 간 호출(Service-to-service calls) : Spring Cloud Discovery

4. 라우팅(Routing) : Spring Cloud Routing

5. 로드 밸런싱(Load balancing) : Spring Cloud Routing

6. 서킷 브레이커(Circuit Breakers) : Spring Cloud Circuit Breaker

7. 글로벌 락 (Global locks) & 지도자 선출, 클러스터 상태 (Leadership election and cluster state) : Spring Cloud Config

8. 분산 메시징 (Distributed messaging) : Spring Cloud Messaging


## Spring Config

Spring Cloud Config는 분산 시스템에서 외부화된 설정 정보를 서버 및 클라이언트에게 제공하는 시스템이다. 설정 서버는(Config Server)는 외부에서 모든 환경에 대한 정보들을 관리해주는 중앙 서버이다. 기본적으로 설정 정보 저장을 위해 git을 사용하도록 되어있어서 손쉽게 외부 도구들로 접근 가능하고, 버전 관리도 가능하다.

- Spring Cloud Config Server(설정 서버): 버전 관리 레포지토리로 백업된 중앙 집중식 구성 노출을 지원한다.
- Spring Cloud Config Client(설정 클라이언트) : 애플리케이션이 설정 서버에 연결하도록 지원한다 

## Spring-Config 적용


### Config-Server

- Config-Server 프로젝트의 build.gradle에 dependencies를 추가한다.

``` gradle
build.gradle

  ... 생략

  ext {
      set('springCloudVersion', "2021.0.2")
  }

  dependencies {
      implementation 'org.springframework.boot:spring-boot-starter-web'
      implementation 'org.springframework.cloud:spring-cloud-config-server'
      implementation 'org.springframework.boot:spring-boot-starter-actuator'

      testImplementation 'org.springframework.boot:spring-boot-starter-test'
  }

  dependencyManagement {
      imports {
          mavenBom "org.springframework.cloud:spring-cloud-dependencies:${springCloudVersion}"
      }
  }

  ... 생략
```

- application.yml

``` yml
server:
  port: 8080
spring:
  application:
    name: config-server
  profiles:
    active: native
  cloud:
    config:
      server:
        native:
          search-locations: classpath:/config
        encrypt:
          enabled: false
```


- ConfigServerApplication.java
- @EnableConfigServer를 적용하여 ConfigServer로 설정한다.

``` java
import org.springframework.cloud.config.server.EnableConfigServer;

@EnableConfigServer // Config Server 적용 Annotation
@SpringBootApplication
public class ConfigServerApplication {
	public static void main(String[] args) {
		SpringApplication.run(ConfigServerApplication.class, args);
	}
}
```


### Config-Client


- Config-Client 프로젝트의 build.gradle에 dependencies를 추가한다.

``` gradle

  ... 생략

  ext {
      set('springCloudVersion', "2021.0.2")
  }

  dependencies {
      implementation 'org.springframework.boot:spring-boot-starter-web'
      implementation 'org.springframework.cloud:spring-cloud-config-server'
      implementation 'org.springframework.boot:spring-boot-starter-actuator'

      testImplementation 'org.springframework.boot:spring-boot-starter-test'
  }

  dependencyManagement {
      imports {
          mavenBom "org.springframework.cloud:spring-cloud-dependencies:${springCloudVersion}"
      }
  }

  ... 생략
```

- Config-Client 프로젝트의 application.yml 파일으 이름을 <b>bootstrap.yml</b>로 변경하고 yml파일을 작성한다.
``` yml

server:
  port: 0
spring:
  application:
    name: item-service 
  profiles:
    active: local
  cloud:
    config:
      uri: http://localhost:8080
    loadbalancer:
      ribbon:
        enabled: false

```

- Config-Server 프로젝트의 <b>resource/config/item-service.yml</b> 경로의 item-service.yml 파일을 생성하고 설정정보들을 작성한다.

``` yml

  ... 생략

logging:
  file:
    name: logs/api.log
    max-size: 500MB
    max-history: 10
  level:
    root: info
    org.msa.item: debug
   

  ... 생략

```