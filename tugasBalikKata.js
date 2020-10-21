function balikKata(kata) {
 var kataSkrg = kata;
 var kataBaru = '';
		for (let i = kata.length - 1; i >= 0; i--) {
		  kataBaru = kataBaru + kataSkrg[i];
		 }
		 
		 return kataBaru;
	}
console.log(balikKata("Niomic!"));    
console.log(balikKata("JavaScript"));
console.log(balikKata("alohahola"));  
console.log(balikKata("Jawa_Barat")); 
