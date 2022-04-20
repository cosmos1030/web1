document.getElementById('assets').onsubmit = function(){
	var deposit = parseInt(this.deposit.value);
	var installment = parseInt(this.installment.value);
	var investing = parseInt(this.investing.value);
	var subscription = parseInt(this.subscription.value);
	
	var total = deposit + installment + investing + subscription;
	var p = document.createElement('p');
  	p.textContent = "자산총액: "+String(total); // 새로 만든 태그의 내용 지정하기
  	document.getElementsByTagName('body')[0].appendChild(p);
  
  	//파트3. input에 쓰여있던 모든 데이터를 없애줍니다(초기화).
  	this.deposit.value = "";
  	this.installment.value = "";
	this.investing.value = "";
	this.subscription.value = "";
  
  	//파트4. 제출 이벤트로 인한 새로고침 방지
  	return false;
}