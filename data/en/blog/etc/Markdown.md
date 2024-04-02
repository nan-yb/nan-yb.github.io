---
title: 'MarkDown'
date: '2022-09-03'
tags: ['MarkDown']
draft: false
summary: ''
images: ['/static/images/responsive-image.jpg']
authors: ['default']
---

## 개요

      포스팅을 위해서는 MarkDown 작성법을 필수적으로 알아야하기 때문에
      첫 포스팅을 마크다운 작성법으로 시작하려한다.

## 1. 마크다운이란

Markdown이란 텍스트기반의 마크업 언어로 , 처음 이메일의 글쓰기 형식에 영감받아 python 을 이용하여 html 변환기를 만들면서 시작됬다.특수기호와 문자를 이용하여 내용을 작성할 수 있으며 , Markdown 을 통해 기록하고자 하는 내용을 작성할 수 있다. Markdown은 파일 확장자 .md로 쓰이며 대표적으로 github의 README.md 파일을 예로 들 수 있다.

## 2. 마크다운 작성법

### 2-1 헤더 : 제목을 쓰고 싶을 때 (강조 , h1 ~ h6)

---

```
#        제목 1단계
##       제목 2단계
###      제목 3단계
####     제목 4단계
#####    제목 5단계
######   제목 6단계
```

# This is 1단계

## This is 2단계

### This is 3단계

#### This is 4단계

##### This is 5단계

###### This is 6단계

### 2-2 개행 및 수평선

---

MD 파일에서는 엔터키를 누른다고 개행이 되지 않기 때문에 문단을 나누거나 빈줄을 추가하기 위해서는 개행이 필요하는데 개행을 줄의 마지막에  
[ Space Bar ] 두 번을 입력하면 된다.  
문단을 의미적으로 분리하기 위해서는 수평선이 필요하다 수평선을 쓰기 위해서는 - 세 번을 입력하여 사용한다.

```
---
```

### 2-3 강조 및 인용

#### 강조

---

```
강조를 하기 위해서는 강조하고자 하는 문자 양쪽 끝에 * 또는 _ 를 사용하면 된다.
* - 하나를 사용하면 기울기 처리가 되며
** -- 를 사용하게 되면 Bold 처리 할 수 있다.
This is Emphasis
_This is Emphasis_
__This is Emphasis__
```

This is Emphasis  
_This is Emphasis_  
**This is Emphasis**

#### 인용

---

```
인용 상자는 > 를 통해 사용 할 수 있다.
```

> This is blockquotes
> 이것은 인용 상자입니다.

### 2-4 순서 있는 목록과 순서 없는 목록

---

순서있는 목록( 1, 2, 3 )은 간단하게 1 2 3 을 통하여 작성한다.

```
1. 1번
2. 2번
3. 3번
```

1. 1번
2. 2번
3. 3번

순서없는 목록은 \* - + 를 이용하여 작성한다.

```
* 1번
* 2번
   * 2-1번
      * 2-1-1 번
```

- 1번
- 2번
  - 2-1번
    - 2-1-1 번

**Note:** ( \* , - , + ) 은 순서에 상관없이 혼용하여 사용이 가능하다.

### 2-5 이미지 및 하이퍼링크

---

#### 이미지

```
![Alt명](url 링크 및 파일 경로)

![Naver](/images/naver.png)
![Google](/images/google.png)
```

![Naver](/static/images/naver.png) ![Google](/static/images/google.png)

#### 하이퍼링크

```
[이름](url 링크)

[Naver](http://www.naver.com)
[Google](http://www.google.com)
```

[Naver](http://www.naver.com)
[Google](http://www.google.com)

**Note:** 이미지에 링크를 걸어 사용도 가능하다.

```
[![Naver](images/naver.com)](http://naver.com)
[![Google](/images/Google.png)](http://google.com)
```

[![Naver](/static/images/naver.png)](http://naver.com)
[![Google](/static/images/google.png)](http://google.com)

### 2-6 코드 블록

---

`를 3번 입력하고 뒤에 표현하고자 하는 언어를 입력하여 코드블록을 작성할 수 있다.

````
      ```java
         public void test(){
            System.out.println("test");
         }
      ```
````

```java
public void test(){
   System.out.println("test");
}
```

### 2-7 테이블

---

3개 이상의 - 를 사용하여 헤더 셀을 구분할 수 있다.  
Colons(:) 을 사용하여 셀을 정렬 할 수 있다.

```
| Header | Header |
|--- |---|
|CELL 1|CELL 2|
```

| Header | Header |
| ------ | ------ |
| CELL 1 | CELL 2 |


