	

	function onLoad(){

		let who = ['The dog','My granma','His turtle','My bird'];
		let cuenta_who = who.length;
		let random_who = Math.floor(Math.random() * cuenta_who);
		
		let action = ['ate','peed','crushed','broke'];
		let cuenta_action = action.length;
		let random_action = Math.floor(Math.random() * cuenta_action);

		let what = ['eat','pissed','crushed','broked'];
		let cuenta_what = what.length;
		let random_what = Math.floor(Math.random() * cuenta_what);
		
		let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];
		let cuenta_when = when.length;
        let random_when = Math.floor(Math.random() * cuenta_when)  ;

      	let element = document.getElementById("excusa");
		element.innerHTML= who[random_who] + " " + action[random_action] + " " + what[random_what] + " " + when[random_when];
          
  
     }


 		
		


