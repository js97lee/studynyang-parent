const quantity=document.querySelector('#quantity');
quantity.addEventListener('input',()=>{document.querySelector('#total').textContent=quantity.validity.valid?(Number(quantity.value)*79000).toLocaleString('ko-KR')+'원':'수량은 1~10개로 선택해 주세요';});
const dialog=document.querySelector('#orderDialog');
document.querySelector('#orderForm').onsubmit=e=>{e.preventDefault();document.querySelector('#orderSummary').textContent=`스터디냥 ${document.querySelector('#color').value} · ${quantity.value}개 · ${(Number(quantity.value)*79000).toLocaleString('ko-KR')}원`;dialog.showModal();};
document.querySelector('#closeOrder').onclick=()=>dialog.close();document.querySelector('#doneOrder').onclick=()=>dialog.close();
