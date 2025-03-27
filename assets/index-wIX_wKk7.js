(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function o(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=o(n);fetch(n.href,r)}})();const m="user";function L(){const t=localStorage.getItem(m);return t?JSON.parse(t):null}function p(t){localStorage.setItem(m,JSON.stringify(t))}function O(){localStorage.removeItem(m)}const h=()=>`    
      <footer class="bg-gray-200 p-4 text-center">
          <p>&copy; 2024 항해플러스. All rights reserved.</p>
        </footer>
`,x=()=>`    
      <header class="bg-blue-600 text-white p-4 sticky top-0">
          <h1 class="text-2xl font-bold">항해플러스</h1>
        </header>
`,l={LOGIN_FORM:"login-form",PROFILE_FORM:"profile-form",LOGOUT_BUTTON:"logout"},I=()=>'<li><a href="/login" class="text-gray-600">로그인</a></li>',P=()=>`<li><a href="#" id=${l.LOGOUT_BUTTON} class="text-gray-600">로그아웃</a></li>`,v=()=>`
   <nav class="bg-white shadow-md p-2 sticky top-14">
        <ul class="flex justify-around">
          <li><a href="/" class="text-blue-600">홈</a></li>
          <li><a href="/profile" class="text-gray-600">프로필</a></li>
          ${a?P():I()}
        </ul>
      </nav>
  `,w=[{id:new Date().getTime(),author:"홍길동",createdAt:"5분 전",content:"오늘 날씨가 정말 좋네요."},{id:new Date().getTime(),author:"김철수",createdAt:"15분 전",content:"새로운 프로젝트를 시작했어요. 열심히 코딩 중입니다!"},{id:new Date().getTime(),author:"이영희",createdAt:"30분 전",content:"오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?"},{id:new Date().getTime(),author:"박민수",createdAt:"1시간 전",content:"주말에 등산 가실 분 계신가요? 함께 가요!"},{id:new Date().getTime(),author:"정수연",createdAt:"2시간 전",content:"새로 나온 영화 재미있대요. 같이 보러 갈 사람?"}],T=t=>{const{author:e,createdAt:o,content:s}=t;return`
    <div class="bg-white rounded-lg shadow p-4">
      <div class="flex items-center mb-2">
        <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
        <div>
          <p class="font-bold">${e}</p>
          <p class="text-sm text-gray-500">${o}</p>
        </div>
      </div>
      <p>${s}</p>
      <div class="mt-2 flex justify-between text-gray-500">
        <button>좋아요</button>
        <button>댓글</button>
        <button>공유</button>
      </div>
    </div>
  `},$=()=>`<div class="space-y-4">
    ${w.sort((e,o)=>o.id-e.id).map(e=>T(e)).join("")}
  </div>
  `,f=()=>`
  <div class="bg-gray-100 min-h-screen flex justify-center">
    <div class="max-w-md w-full">
      ${x()}
      ${v()}

      <main class="p-4">
        <div class="mb-4 bg-white rounded-lg shadow p-4" id="write-post">
          <textarea class="w-full p-2 border rounded" placeholder="무슨 생각을 하고 계신가요?"></textarea>
          <button class="mt-2 bg-blue-600 text-white px-4 py-2 rounded">게시</button>
        </div>
        ${$()}
      </main>

      <footer class="bg-gray-200 p-4 text-center">
        ${h()}
      </footer>
    </div>
  </div>
`;function S(t){t.preventDefault();const e=new FormData(t.target),o=e.get("email")||"",s=e.get("username"),n=e.get("bio")||"";return s?(p({username:s,email:o,bio:n}),c(),!0):!1}function E(){const t=document.getElementById(l.LOGIN_FORM);t==null||t.addEventListener("submit",e=>{S(e)&&i()})}const F=()=>`
  <div>
   <form id=${l.LOGIN_FORM}>
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
  `,N=()=>`
   <button id=${l.LOGOUT_BUTTON} class="w-full mt-4 bg-blue-600 text-white p-2 rounded font-bold">로그아웃</button>
  `,g=()=>`
  <main class="bg-gray-100 flex items-center justify-center min-h-screen">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h1 class="text-2xl font-bold text-center text-blue-600 mb-8">항해플러스</h1>
      ${a?N():F()}
    </div>
  </main>
`,U=()=>`
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
`;function D(t){t.preventDefault();const e=new FormData(t.target),o=e.get("email"),s=e.get("username"),n=e.get("bio");p({username:s,email:o,bio:n}),c()}function A(){const t=document.getElementById(l.PROFILE_FORM);t==null||t.addEventListener("submit",e=>{D(e),i()})}function u(t){window.history.pushState({},"",t),i()}const b=()=>{const t=a;if(!t)return u("/login");const{username:e,email:o,bio:s}=t;return`
  <div>
    <div class="bg-gray-100 min-h-screen flex justify-center">
      <div class="max-w-md w-full">
        ${x()}
        ${v()}

        <main class="p-4">
          <div class="bg-white p-8 rounded-lg shadow-md">
            <h2 class="text-2xl font-bold text-center text-blue-600 mb-8">
              내 프로필
            </h2>
            <form id=${l.PROFILE_FORM}>
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
                  value="${s}"
                >${s}</textarea>
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

        ${h()}
      </div>
    </div>
  </div>
`};function _(t){let e=t.split("/").pop();return e=e.split("?")[0],`/${e}`}function B(){const t=y();document.querySelectorAll("nav li a").forEach(o=>{_(o.href)===t?(o.classList.remove("text-gray-600"),o.classList.add("text-blue-600"),o.classList.add("font-bold")):(o.classList.remove("font-bold"),o.classList.remove("text-blue-600"),o.classList.add("text-gray-600"))})}function R(){const t=document.getElementById("write-post"),e=t==null?void 0:t.querySelector("textarea"),o=t==null?void 0:t.querySelector("button");!e||!o||o.addEventListener("click",()=>{const s=e.value,n={id:new Date().getTime(),author:a==null?void 0:a.username,createdAt:"방금",content:s};w.push(n),i()})}let a=null;function c(){a=L()}function y(){let t=window.location.pathname;const e=window.location.hash;return e.includes("#")&&(t=e.slice(1)),t}function M(){const t=y(),e=a;switch(t){case"/":return f();case"/login":return e?(window.history.pushState({},"","/"),f()):g();case"/profile":return e?(window.history.pushState({},"","/profile"),b()):e?b():g();default:return U()}}function j(t){document.body.innerHTML=`<div id="root">${t}</div>`}function G(){document.querySelector("#root").addEventListener("click",t=>{t.target.tagName==="A"&&(t.preventDefault(),u(t.target.href)),t.target.id===l.LOGOUT_BUTTON&&(O(),c(),u("/login"))})}function H(){G(),E(),A(),B(),R()}function i(){c(),j(M()),H()}window.addEventListener("popstate",i);window.addEventListener("hashchange",i);i();
