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

SSR은 server-side-render 의 약자이다. next.js는 정적으로 페이지를 생성해놓는다. 유저가 접근할 때 컴포넌트의 초기 상태는 HTML로 렌더링되어 있다.
따라서 유저가 접근할 때 백지화면을 보지 않게 된다. 

Nextjs가 HTML 페이지들을 미리 생성해두고 유저에게 보여주며, React는 다운로드 된 후 프론트엔드에 나타난 뒤 주도권을 가지게 된다(useState 등을 사용할 수 있게된다).
이를 hydrate 라고 한다.

Nextjs에서 기존의 Link를 사용하는 경우 정적파일 생성을 위해 다음과 같이 작성해야 한다.
```javascript
import Link from 'next/link';

function App() {
  return (
    <Link href="https://google.com">
      <a>Go Google</a>
    </Link>
  )
}
```

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

# SECTION 2
## Layout
_app의 경우 구글애널리틱스나 다른 수많은 임포트가 들어가야 하므로 컴포넌트 자체가 커지는 것은 좋지 않다.
따라서 Layout 이라는 추가적인 컴포넌트를 만들어서 해당 부분으로 분리해준다.

## Public
public 폴더 안에 있는 스태틱 파일들은 절대경로 `/`에서 바로 가져올 수 있다. 

## Hide API Keys
API 키는 숨겨야만 하는 다양한 이유가 있다. 키를 돈주고 사서 다른 사람이 사용하지 않기를 원하거, 또는 사용량이 제한되어 있는 경우가 있다.
개발자도구에서 API 키를 찾는 것을 방지해야 하는데 Nextjs 에서는 redirect 와 rewrite를 사용해서 요청에 마스크를 씌우는 방법을 볼 것.

### next.config.js
먼저 API Key를 드러내는 redirect가 있다. 이는 Nextjs가 redirection을 허용하기 때문이다. 
실행중인 화면을 잘 보면 클라이언트 뿐만 아니라 서버가 같이 실행되고 있는 모습을 볼 수 있다.

redirect와 rewrite는 둘다 next.config.js에 넣을 수 있다. 둘 다 배열을 반환한다.

async redirects의 permanent 여부에 따라 브라우저나 검색 엔진이 결과를 기억할지 말지 정할 수 있다.
웹사이트 안에서 밖으로 이동할 수도 있다. 또한 패턴매칭도 지원한다 (`/old-blog/:path` -> `/new-blog/:path`).
뒤에 `*`을 추가하면 해당 에스터리스크 뒤에 있는 모든 경로를 그대로 복사해서 붙여넣는다.

redirect는 url을 바꾸지만(유저가 변경을 알아차리지만) rewirte는 url을 바꾸지 않으면서 변경시킨다. 
