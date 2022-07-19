# Slack bot test

send message만 구현해봄

slack의 이벤트를 받아서 처리하는 부분은 아래와 같음
https://slack.dev/node-slack-sdk/events-api
https://api.slack.com/events

## build
```
$ yarn install
$ echo [slack token] > .env
$ yarn start
```

> channel 확인하기  
> 메세지를 보낼 채널명이 일치해야한다.

## Reference
1. https://slack.dev/node-slack-sdk/getting-started
2. https://surprisecomputer.tistory.com/49