---
title: Kafka 명령어
layout: default
nav_order: 4.5
has_children: true
---

# Kafka


## Kafka-Server

### zookeeper 실행

``` sh
bin/zookeeper-server-start.sh -daemon config/zookeeper.properties
```

### kafka broker 실행

``` sh
bin/kafka-server-start.sh -daemon config/server.properties
```