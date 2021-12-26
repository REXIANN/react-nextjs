# NextJs Introduction

개발 환경 시작 
```shell
npm run dev
```

pages 폴더에 만드는 파일은 자동으로 컴파일되어 route가 된다. 기존 처럼 index의 경우 해당 폴더를 대표하는 파일이 되고, 다른 파일명을 가지면
파일 이름을 라우팅 경로로 가진다.

## CSR vs SSR

CSR은 clinet-side-render의 약자로 쉽게 말해 클라이언트의 브라우저가 모든 UI를 만든다는 뜻이다. 브라우저는 js를 받고 클라이언트에 도착한 js가
사이트를 빌드하는 것이다.

SSR은 server-side-render 의 야갖이다. next.js는 정적으로 페이지를 생성해놓는다. 


이 프로젝트는 Next.js를 학습하기 위한 프로젝트로, TypeScript외의 다른 불필요한 프레임워크는 추가하지 않고 Next.js의 연습장으로만 사용했습니다.
