document.addEventListener('DOMContentLoaded', () => {
	const signupForm = document.querySelector('.signup form'); //formlar
	const loginForm = document.querySelector('.login form');
  
	// kullanıcılar mini db
	const users = [
	  { email: 'isa@atu.com', password: '123456' },
	  { email: 'asu@atu.com', password: 'abcdef' },
	  { email: 'gulsum@atu.com', password: 'qwerty' }
	];
  
	// kayıt butonu ile tetiklenen kayıt alert
	signupForm.addEventListener('submit', (e) => {
	  if (signupForm.checkValidity()) {
		alert('Kayıt Olundu!');
	  } else {
		e.preventDefault();
	  }
	}); 
  
	// sayfa yenilenmesini engeller
	loginForm.addEventListener('submit', (e) => {
	  e.preventDefault(); 
  
	  // formları kontrol eder
	  if (!loginForm.checkValidity()) {
		loginForm.reportValidity();
		return;
	  } 
  
	  // db veri alma
	  const email = loginForm.email.value;
	  const password = loginForm.pswd.value;  
  
	  // db veri eşleştirme
	  const userFound = users.find(user => user.email === email && user.password === password);	  
  
	  if (userFound) {
		alert('Giriş başarılı! Ana sayfaya yönlendiriliyorsun...'); // yönlendirme alert
		window.location.href = 'home.html';  //  anasayfa yönlendirme
	  } else {
		alert('E-posta veya şifre hatalı!'); // hata alert
	  }
	});
  });
  
