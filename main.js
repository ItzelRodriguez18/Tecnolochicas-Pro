
let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Es una banda colombiana de pop latino y Rock latino')
  .pauseFor(200)
  .deleteChars(10)
  .start();