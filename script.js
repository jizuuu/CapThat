const memeArray = [
  "https://i.imgur.com/bSi4xLb.png",
  "https://i.imgur.com/6y0G7N0.png",
  "https://i.imgur.com/LXnRao1.png",
  "https://i.imgur.com/Qqoxh1N.png"
];

const captionsArray = [
  "POV: You just realized it’s Monday tomorrow. 😭", 
  "I don’t age; I just level up. 🕹️", 
  "When your '5 more minutes' nap turns into 5 hours. ⏰💤", 
  "Reality check: Adulting is just Googling 'how to do stuff.' 🤷‍♂️", 
  "Me: I should save money. Also me: *buys something I don’t need* 💸"
];

const randomMeme = document.getElementById("random-meme");
const randomCaption = document.getElementById("random-caption");
const generatorBtn = document.getElementById("generator-button");

generatorBtn.addEventListener("click", function(){
  const randomMemeIndex = Math.floor(Math.random() * memeArray.length);
  const randomCaptionIndex = Math.floor(Math.random() * captionsArray.length);
  
  randomMeme.src = memeArray[randomMemeIndex];
  randomCaption.innerHTML = captionsArray[randomCaptionIndex];
});