const quantity=document.querySelector('#quantity'), color=document.querySelector('#color');
const money=()=> (Number(quantity.value)*79000).toLocaleString('ko-KR')+'원';
quantity.addEventListener('input',()=>{document.querySelector('#total').textContent=quantity.validity.valid?money():'수량은 1~10개로 선택해 주세요';});
const dialog=document.querySelector('#orderDialog'), checkout=document.querySelector('#checkoutForm'), complete=document.querySelector('#checkoutComplete');
function openOrder(){if(!document.querySelector('#orderForm').reportValidity())return;document.querySelector('#orderSummary').textContent=`스터디냥 ${color.value} · ${quantity.value}개 · ${money()}`;document.querySelector('#checkoutAmount').textContent=money();checkout.hidden=false;complete.hidden=true;checkout.reset();dialog.showModal();}
document.querySelector('#orderForm').onsubmit=e=>{e.preventDefault();openOrder();};
document.querySelectorAll('[data-buy]').forEach(b=>b.onclick=openOrder);
document.querySelector('#closeOrder').onclick=()=>dialog.close();document.querySelector('#doneOrder').onclick=()=>dialog.close();
checkout.onsubmit=e=>{e.preventDefault();checkout.reset();checkout.hidden=true;complete.hidden=false;dialog.scrollTop=0;};
dialog.addEventListener('close',()=>checkout.reset());
