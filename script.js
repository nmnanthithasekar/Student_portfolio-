const quotes = [
     "Success is not final, failure is not fatal: It is the courage to continue that counts.",
     "Believe you can and you're halfway there.",
     "Don’t watch the clock; do what it does. Keep going.",
     "Hard work beats talent when talent doesn’t work hard.",
     "Dream big and dare to fail."
   ];
   
   function generateQuote() {
     const name = document.getElementById("nameInput").value.trim();
     const quoteBox = document.getElementById("quoteBox");
   
     if (!name) {
       quoteBox.innerText = "Please enter your name to get a quote 🙂";
       return;
     }
   
     const randomIndex = Math.floor(Math.random() * quotes.length);
     const randomQuote = quotes[randomIndex];
   
     quoteBox.innerText = `Hi ${name}, here’s your quote:\n"${randomQuote}"`;
   }
   