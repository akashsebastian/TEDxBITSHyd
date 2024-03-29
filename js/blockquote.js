function splitWords(q) {
  var ele = document.querySelector("blockquote q");
  quote = q.quote.replace(/(<([^>]+)>)/ig,"");
  quotewords = quote.toUpperCase().split(" "),
  wordCount = quotewords.length;
  ele.innerHTML = "";
  for (var i=0; i < wordCount; i++) {
    ele.innerHTML += "<span>"+quotewords[i]+"</span>";
    if (i < quotewords.length - 1) {
      ele.innerHTML += " ";
    }
  }
  quotewords = document.querySelectorAll("blockquote q span");
  fadeWords(quotewords);
  var citeEle = document.querySelector("blockquote cite");
  citeEle.innerHTML = q.name;
  var citeEleAll = document.querySelectorAll("blockquote cite");
  fadeWords(citeEleAll);
}

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

function fadeWords(quotewords) {
  Array.prototype.forEach.call(quotewords, function(word) {
    var animate = word.animate([{
      opacity: 0,
      filter: "blur("+getRandom(2,5)+"px)"
    }, {
      opacity: 1,
      filter: "blur(0px)"
    }], 
    { 
      duration: 1100,
      delay: getRandom(500,3300),
      fill: 'forwards'
    } 
   )
  });

}
var quotes = [{
                name:'Daniel Kish',
                quote:'Ignorance and fear are but matters of the mind--and the mind is adaptable.'
              },
              {
                name:'Simon Sinek',
                quote:"People don't buy what you do, they buy why you do it."
              },
              {
                name:'Shahrukh Khan',
                quote:"My country has taught me the capacity for a human being to love is akin to godliness"
              },
              {
                name:'Lawrence Lessig',
                quote:"You don't wake up one day no longer a racist. It takes generations to tear that intuition, that DNA, out of the soul of a people"
              },
              {
                name:'Susan Cain',
                quote:"There's zero correlation between being the best talker and having the best ideas."
              },
              {
                name:"Fei-Fei Li",
                quote:"Vision begins with the eyes, but it truly takes place in the brain."
              },
              {
                name:"Dalai Lama",
                quote:"We are social animals. Others' suffering is ultimately your suffering. Their happiness is ultimately your happiness."
              },
              {
                name:"Dame Ellen MacArthur",
                quote:"If we could build an economy that would use things rather than use them up, we could build a future."
              },
              {
                name:"Lewis Dartnell",
                quote:"It is science that built our modern life, and it is science you would need to build again from scratch"
              },
              {
                name:"Noy Thrupkaew",
                quote:"Our prosperity is no longer prosperity as long as it is pinned to other people's pain."
              }];
var rand = getRandom(0, quotes.length-1);
var randomQuote = quotes[Math.ceil(rand)];
window.onload = splitWords(randomQuote);