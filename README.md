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


## App Component & App Page
Next는 리액트와 달리 페이지별로 스타일링을 생각해야 한다. 다시 말해 `style jsx global` 을 사용하더라도 해당 '페이지' 내에서만 전역적으로 스타일링이 된다.
하지만 전역스타일, 네비게이션 바 등 우리는 모든 페이지가 참조할 무언가가 필요하다. 여기서 AppComponent와 AppPage가 나온다. 

App Component는 어떤 컴포넌트의 청사진으로, next가 모든 페이지를 렌더링하기 위한 컴포넌트이다. 기본적으로 프레임워크에 포함되어 있다. 
App Component(이하 AC)를 커스텀하기 위해서 별다른 설정을 할 필요는 없지만, `_app.js`라는 파일을 하나 만들어야 한다. 파일 이름을 틀려서는 안된다.

Nextjs는 어떤 페이지를 렌더링하기 전에 항상 이 `_app.js`을 먼저 본다. 그리고 나서 해당 페이지의 내용물을 렌더링한다.

`_app.js` 에서 `export default` 되는 함수는 하나의 props를 받는다. 그 props 안에는 두 개의 인자가 있는데,
하나는 `Component` 이고 다른 하나는 `pageProps` 이다.

Component는 렌더링 하고자 하는 페이지이다. 내가 렌더링하고자 하는 컴포넌트를 props로 받아서 감싼 뒤 렌더링 해주는 것이다.
그리고 여기에 css파일을 임포트할 수 있다. 기존의 nextjs에서는 각 파일에 css 파일을 임포트 할 수 없다. 
시도한다면 `Global CSS cannot be imported from files other than your Custom <App>` 이라는 경고를 보게 된다.

따라서 페이지나 컴포넌트에 CSS를 임포트 하고 싶다면 그건 반드시 모듈이 되어야만 한다.
