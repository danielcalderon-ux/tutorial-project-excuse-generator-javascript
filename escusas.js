window.onload = function(){
   let who = ['The dog ','My grandma ','His turtle ','My bird '];
   let action = ['ate ','peed ','crushed ','broke '];
   let what = ['my homework ', 'the keys ', 'the car '];
   let when = ['before the class ','right on time ','when I finished ','during my lunch ','while I was praying '];
  var quien = this.Math.floor((this.Math.random() * who.length));
  var accion = this.Math.floor((this.Math.random() * action.length));
  var que = this.Math.floor((this.Math.random() * what.length));
  var cuando = this.Math.floor((this.Math.random() * when.length));
 document.querySelector("#excusa").innerHTML = who[quien] + action[accion] + what[que] + when[cuando]
}