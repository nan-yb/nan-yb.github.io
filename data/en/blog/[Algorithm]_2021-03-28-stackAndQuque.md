---
title: '[자료구조] 스택 , 큐'
date: '2021-03-29'
tags: ['자료구조', '스택', '큐' ]
draft: false
summary: 'A guide to using the srcset and sizes attributes to create responsive images'
images: ['/static/images/responsive-image.jpg']
authors: ['default']
---


## 1. 스택이란?

스택(stack)은 제한적으로 접근할 수 있는 나열 구조이다.
그 접근 방법은 언제나 목록의 끝에서만 일어난다. 끝먼저내기 목록(Pushdown list)이라고도 한다.

## 2. 스택의 구조

- 데이터를 제한적으로 접근할 수 있는 나열 구조이다.
  - 한쪽 끝에서만 자료를 넣거나 뺄 수 있는 구조
- 가장 나중에 쌓은 데이터를 가장 먼저 빼낼 수 있는 데이터 구조

- 스택은 LIFO(Last In, Fisrt Out) 또는 FILO(First In, Last Out) 데이터 관리 방식을 따름

  - LIFO: 마지막에 넣은 데이터를 가장 먼저 추출하는 데이터 관리 정책
  - FILO: 처음에 넣은 데이터를 가장 마지막에 추출하는 데이터 관리 정책

- 대표적인 스택의 활용

  - 컴퓨터 내부의 프로세스 구조의 함수 동작 방식
  - 웹 브라우저 방문기록 (뒤로 가기)
  - 실행 취소

- 주요 기능

  - push(): 데이터를 스택에 넣기
  - pop(): 데이터를 스택에서 꺼내기  

  <img src="http://www.fun-coding.org/00_Images/stack.png" />

## 3. 자료 구조 스택의 장단점

- 장점
  - 구조가 단순해서, 구현이 쉽다.
  - 데이터 저장/읽기 속도가 빠르다.
- 단점 (일반적인 스택 구현시)
  - 데이터 최대 갯수를 미리 정해야 한다.
    - 파이썬의 경우 재귀 함수는 1000번까지만 호출이 가능함
  - 저장 공간의 낭비가 발생할 수 있음
    - 미리 최대 갯수만큼 저장 공간을 확보해야 함

> 스택은 단순하고 빠른 성능을 위해 사용되므로, 보통 배열 구조를 활용해서 구현하는 것이 일반적임.
> 이 경우, 위에서 열거한 단점이 있을 수 있음

## 4. 큐(Queue) 란?

큐(queue)는 컴퓨터의 기본적인 자료 구조의 한가지로,
먼저 집어 넣은 데이터가 먼저 나오는 FIFO (First In First Out) 구조로 저장하는 형식을 말한다.
영어 단어 queue는 표를 사러 일렬로 늘어선 사람들로 이루어진 줄을 말하기도 하며,
먼저 줄을 선 사람이 먼저 나갈 수 있는 상황을 연상하면 된다.

## 5.큐의 구조

- 줄을 서는 행위와 유사
- 가장 먼저 넣은 데이터를 가장 먼저 꺼낼 수 있는 구조
  - 음식점에서 가장 먼저 줄을 선 사람이 제일 먼저 음식점에 입장하는 것과 동일
  - FIFO(First-In, First-Out) 또는 LILO(Last-In, Last-Out) 방식으로 스택과 꺼내는 순서가 반대

<img src="https://www.fun-coding.org/00_Images/queue.png" />
* 출처: http://www.stoimen.com/blog/2012/06/05/computer-algorithms-stack-and-queue-data-structure/

- 대표적인 큐의 활용
  - 우선순위가 같은 작업 예약 (프린터의 인쇄 대기열)
  - 은행 업무
  - 콜센터 고객 대기시간
  - 프로세스 관리
  - 너비 우선 탐색(BFS, Breadth-First Search) 구현
  - 캐시(Cache) 구현
