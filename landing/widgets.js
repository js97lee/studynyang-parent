const popup = document.querySelector('#launchPopup');
if (popup) {
  let hidden = false;
  try { hidden = localStorage.getItem('nyang-launch-hide') === new Date().toLocaleDateString('en-CA'); } catch {}
  if (!hidden) popup.showModal();
  popup.querySelector('[data-close]').onclick = () => popup.close();
  popup.querySelector('[data-hide]').onclick = () => { try { localStorage.setItem('nyang-launch-hide',new Date().toLocaleDateString('en-CA')); } catch {} popup.close(); };
}
const toggle=document.querySelector('#helpToggle'), panel=document.querySelector('#helpPanel');
function closeHelp(){panel.hidden=true;toggle.setAttribute('aria-expanded','false');toggle.focus();}
toggle.onclick=()=>{panel.hidden=!panel.hidden;toggle.setAttribute('aria-expanded',String(!panel.hidden));if(!panel.hidden)panel.querySelector('input').focus();};
panel.querySelector('[data-close-help]').onclick=closeHelp;
panel.addEventListener('keydown',e=>{if(e.key==='Escape')closeHelp();});
function reply(query){
 const log=panel.querySelector('[role="log"]');
 const add=(text,cls)=>{const p=document.createElement('p');p.className=cls;p.textContent=text;log.append(p);};
 add(query,'help-user');
 let answer='냥! 제품 가격, 출시일, 앱 체험을 안내해 드릴게요. 아래 질문을 선택해 주세요. 현재는 자동 안내 데모이며 상담원에게 전송되지 않아요.';
 if(/가격|구매|얼마|할인/.test(query))answer='정가 99,000원에서 20,000원 할인한 79,000원이에요! 아래 제품 구매 페이지에서 자세히 볼 수 있어요. 현재 실제 결제는 연결 준비 중이에요.';
 else if(/출시|오픈|언제/.test(query))answer='스터디냥 정식 오픈일은 9월 5일이에요 🐾';
 else if(/앱|체험|연동/.test(query))answer='대시보드와 냥냥이 인터랙션에서 예시 데이터로 체험할 수 있어요. 실제 앱·기기 연동은 이 웹 데모에 연결되어 있지 않아요.';
 else if(/배송|환불|교환/.test(query))answer='배송 일정과 교환·환불 조건은 아직 안내 전이에요. 실제 주문과 결제가 열리기 전에 구매 페이지에서 확인할 수 있도록 준비할게요.';
 add(answer,'help-cat');log.scrollTop=log.scrollHeight;
}
panel.querySelectorAll('[data-question]').forEach(b=>b.onclick=()=>reply(b.textContent));
panel.querySelector('form').onsubmit=e=>{e.preventDefault();const input=panel.querySelector('input');if(input.value.trim())reply(input.value.trim());input.value='';};
