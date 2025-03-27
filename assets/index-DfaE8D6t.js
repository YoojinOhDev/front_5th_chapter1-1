(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}})();const b=()=>`    
      <footer class="bg-gray-200 p-4 text-center">
          <p>&copy; 2024 항해플러스. All rights reserved.</p>
        </footer>
`,g=()=>`    
      <header class="bg-blue-600 text-white p-4 sticky top-0">
          <h1 class="text-2xl font-bold">항해플러스</h1>
        </header>
`,a={LOGIN_FORM:"login-form",PROFILE_FORM:"profile-form",LOGOUT_BUTTON:"logout"},p="user";function i(){const t=localStorage.getItem(p);return t?JSON.parse(t):null}function h(t){localStorage.setItem(p,JSON.stringify(t))}const y=()=>'<li><a href="/login" class="text-gray-600">로그인</a></li>',w=()=>`<li><a href="#" id=${a.LOGOUT_BUTTON} class="text-gray-600">로그아웃</a></li>`,x=()=>`
   <nav class="bg-white shadow-md p-2 sticky top-14">
        <ul class="flex justify-around">
          <li><a href="/" class="text-blue-600">홈</a></li>
          <li><a href="/profile" class="text-gray-600">프로필</a></li>
          ${i()?w():y()}
        </ul>
      </nav>
  `,L=[{id:1,author:"홍길동",createdAt:"5분 전",content:"오늘 날씨가 정말 좋네요."},{id:2,author:"김철수",createdAt:"15분 전",content:"새로운 프로젝트를 시작했어요. 열심히 코딩 중입니다!"},{id:3,author:"이영희",createdAt:"30분 전",content:"오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?"},{id:4,author:"박민수",createdAt:"1시간 전",content:"주말에 등산 가실 분 계신가요? 함께 가요!"},{id:5,author:"정수연",createdAt:"2시간 전",content:"새로 나온 영화 재미있대요. 같이 보러 갈 사람?"}],O=t=>{const{author:e,createdAt:o,content:n}=t;return`
    <div class="bg-white rounded-lg shadow p-4">
      <div class="flex items-center mb-2">
        <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
        <div>
          <p class="font-bold">${e}</p>
          <p class="text-sm text-gray-500">${o}</p>
        </div>
      </div>
      <p>${n}</p>
      <div class="mt-2 flex justify-between text-gray-500">
        <button>좋아요</button>
        <button>댓글</button>
        <button>공유</button>
      </div>
    </div>
  `},I=()=>`<div class="space-y-4">
    ${L.map(t=>O(t)).join("")}
  </div>
  `,u=()=>`
  <div class="bg-gray-100 min-h-screen flex justify-center">
    <div class="max-w-md w-full">
      ${g()}
      ${x()}

      <main class="p-4">
        <div class="mb-4 bg-white rounded-lg shadow p-4">
          <textarea class="w-full p-2 border rounded" placeholder="무슨 생각을 하고 계신가요?"></textarea>
          <button class="mt-2 bg-blue-600 text-white px-4 py-2 rounded">게시</button>
        </div>
        ${I()}
      </main>

      <footer class="bg-gray-200 p-4 text-center">
        ${b()}
      </footer>
    </div>
  </div>
`;function P(t){t.preventDefault();const e=new FormData(t.target),o=e.get("email")||"",n=e.get("username"),s=e.get("bio")||"";return n?(h({username:n,email:o,bio:s}),!0):!1}function $(){const t=document.getElementById(a.LOGIN_FORM);t==null||t.addEventListener("submit",e=>{P(e)&&l()})}const F=()=>`
  <div>
   <form id=${a.LOGIN_FORM}>
        <div class="mb-4">
          <input type="text" id="username"  name="username" placeholder="사용자 이름" class="w-full p-2 border rounded">
      
        <div class="mb-6">
          <input type="password" id="password" name="password" placeholder="비밀번호" class="w-full p-2 border rounded">
        </div>
        <button type="submit" class="w-full bg-blue-600 text-white p-2 rounded font-bold">로그인</button>
      
      </form>
      <div class="mt-4 text-center">
        <a href="#" class="text-blue-600 text-sm">비밀번호를 잊으셨나요?</a>
      </div>
      <hr class="my-6">
      <div class="text-center">
        <button class="bg-green-500 text-white px-4 py-2 rounded font-bold">새 계정 만들기</button>
      </div>
      </div>
  `,S=()=>`
   <button id=${a.LOGOUT_BUTTON} class="w-full mt-4 bg-blue-600 text-white p-2 rounded font-bold">로그아웃</button>
  `,m=()=>`
  <main class="bg-gray-100 flex items-center justify-center min-h-screen">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h1 class="text-2xl font-bold text-center text-blue-600 mb-8">항해플러스</h1>
      ${i()?S():F()}
    </div>
  </main>
`,N=()=>`
  <main class="bg-gray-100 flex items-center justify-center min-h-screen">
    <div class="bg-white p-8 rounded-lg shadow-md w-full text-center" style="max-width: 480px">
      <h1 class="text-2xl font-bold text-blue-600 mb-4">항해플러스</h1>
      <p class="text-4xl font-bold text-gray-800 mb-4">404</p>
      <p class="text-xl text-gray-600 mb-8">페이지를 찾을 수 없습니다</p>
      <p class="text-gray-600 mb-8">
        요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
      </p>
      <a href="/" class="bg-blue-600 text-white px-4 py-2 rounded font-bold">
        홈으로 돌아가기
      </a>
    </div>
  </main>
`;function T(t){t.preventDefault();const e=new FormData(t.target),o=e.get("email"),n=e.get("username"),s=e.get("bio");h({username:n,email:o,bio:s})}function E(){const t=document.getElementById(a.PROFILE_FORM);t==null||t.addEventListener("submit",e=>{T(e),l()})}function d(t){window.history.pushState({},"",t),l()}const f=()=>{const t=i();if(!t)return d("/login");const{username:e,email:o,bio:n}=t;return`
  <div>
    <div class="bg-gray-100 min-h-screen flex justify-center">
      <div class="max-w-md w-full">
        ${g()}
        ${x()}

        <main class="p-4">
          <div class="bg-white p-8 rounded-lg shadow-md">
            <h2 class="text-2xl font-bold text-center text-blue-600 mb-8">
              내 프로필
            </h2>
            <form id=${a.PROFILE_FORM}>
              <div class="mb-4">
                <label
                  for="username"
                  class="block text-gray-700 text-sm font-bold mb-2"
                  >사용자 이름</label
                >
                <input
                  type="text"
                  id="username"
                  name="username"
                  value="${e}"
                  class="w-full p-2 border rounded"
                />
              </div>
              <div class="mb-4">
                <label
                  for="email"
                  class="block text-gray-700 text-sm font-bold mb-2"
                  >이메일</label
                >
                <input
                  type="email"
                  id="email"
                  name="email"
                  value="${o}"
                  class="w-full p-2 border rounded"
                />
              </div>
              <div class="mb-6">
                <label
                  for="bio"
                  class="block text-gray-700 text-sm font-bold mb-2"
                  >자기소개</label
                >
                <textarea
                  id="bio"
                  name="bio"
                  rows="4"
                  class="w-full p-2 border rounded"
                  value="${n}"
                >${n}</textarea>
              </div>
              <button
                type="submit"
                class="w-full bg-blue-600 text-white p-2 rounded font-bold"
              >
                프로필 업데이트
              </button>
            </form>
          </div>
        </main>

        ${b()}
      </div>
    </div>
  </div>
`};function U(t){let e=t.split("/").pop();return e=e.split("?")[0],`/${e}`}function _(){const t=v();document.querySelectorAll("nav li a").forEach(o=>{U(o.href)===t?(o.classList.remove("text-gray-600"),o.classList.add("text-blue-600"),o.classList.add("font-bold")):(o.classList.remove("font-bold"),o.classList.remove("text-blue-600"),o.classList.add("text-gray-600"))})}function v(){let t=window.location.pathname;const e=window.location.hash;return e.includes("#")&&(t=e.slice(1)),t}function A(){const t=v(),e=i();switch(t){case"/":return u();case"/login":return e?(window.history.pushState({},"","/"),u()):m();case"/profile":return e?(window.history.pushState({},"","/profile"),f()):e?f():m();default:return N()}}function R(t){document.body.innerHTML=`<div id="root">${t}</div>`}function B(){document.querySelector("#root").addEventListener("click",t=>{t.target.tagName==="A"&&(t.preventDefault(),d(t.target.href)),t.target.id===a.LOGOUT_BUTTON&&(localStorage.removeItem("user"),d("/login"))}),$(),E(),_()}function l(){R(A()),B()}window.addEventListener("popstate",l);window.addEventListener("hashchange",l);l();
