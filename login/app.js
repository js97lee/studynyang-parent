const password = document.querySelector('#password');
const reveal = document.querySelector('#reveal');
reveal.addEventListener('click', () => {
  const show = password.type === 'password';
  password.type = show ? 'text' : 'password';
  reveal.textContent = show ? '숨기기' : '보기';
  reveal.setAttribute('aria-pressed', String(show));
  reveal.setAttribute('aria-label', show ? '비밀번호 숨기기' : '비밀번호 표시');
});
document.querySelector('#loginForm').addEventListener('submit', event => {
  event.preventDefault();
  event.currentTarget.reset();
  window.location.assign('../');
});
