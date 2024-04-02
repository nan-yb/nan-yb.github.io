---
title: '[TroubleShooting] Spring Scheduler ThreadPool'
date: '2024-02-14'
tags: ['TroubleShooting', 'Spring', 'Scheduler' , 'Thread pool']
draft: false
summary: ''
authors: ['default']
---

import Twemoji from './Twemoji.tsx'

## 상황 
  - Spring Schuduler가 정상 작동 되지 않음

## 원인 
  - 기존에 돌아가는 Schduler의 갯수는 총 4개 ( 1개는 10초 , 나머지 3개는 60초 )
  - Scheduler의 Thread Pool Size 기본 설정은 1개 이다. 따라서 2개 이상의 작업을 해야할 경우 실행해야 할 쓰레드가 1개 밖에 없기 때문에 작업이 실행되지 않음.
  

## 해결 

  - Spring Scheduler Thread Pool size 조정

``` java
  @Configuration
  public class SchedulerConfig implements SchedulingConfigurer {

    @Override
    public void configureTasks(ScheduledTaskRegistrar taskRegistrar) {
      
      // Thread Pool 설정
      ThreadPoolTaskScheduler threadPool = new ThreadPoolTaskScheduler();  
  
      int threadPoolSize = 3;
      threadPool.setPoolSize(threadPoolSize);
      threadPool.initialize();
          
      taskRegistrar.setTaskScheduler(threadPool);
    }
  }
```