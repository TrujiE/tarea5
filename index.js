	

	function onLoad(){

		let who = ['the dog','my granma','his turtle','my bird'];
		let cuenta_who = who.length;
		let random_who = Math.floor(Math.random() * cuenta_who)  ;
		
		let what = ['eat','pissed','crushed','broked'];
		let cuenta_what = what.length;
		let random_what = Math.floor(Math.random() * cuenta_what)  ;
		
		let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];
		let cuenta_when = when.length;
        let random_when = Math.floor(Math.random() * cuenta_when)  ;

      	let element = document.getElementById("excusa");
		element.innerHTML= who[random_who] + " " + what[random_what] + " " + when[random_when];
     
      	//return element.innerHTML;
  
     }


 		
		


