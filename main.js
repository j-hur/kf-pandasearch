// KF Panda Search

// event listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // input
  let name = document.getElementById("char-in").value.toLowerCase();

  // if statement
  if (name === "po") {
    document.getElementById("char-name").innerHTML = "Po";
    document.getElementById("char-quote").innerHTML =
      "Buddy, I am the Dragon Warrior!";
    document.getElementById("char-img").src = "img/po.png";
  } else if (name === "tigress") {
    document.getElementById("char-name").innerHTML = "Tigress";
    document.getElementById("char-quote").innerHTML =
      "This is what you trained me for.";
    document.getElementById("char-img").src = "img/tigress.png";
  } else if (name === "mantis") {
    document.getElementById("char-name").innerHTML = "Mantis";
    document.getElementById("char-quote").innerHTML =
      "It's not the size of an insect in the fight, but the size of the fight in the insect.";
    document.getElementById("char-img").src = "img/mantis.png";
  } else if (name === "monkey") {
    document.getElementById("char-name").innerHTML = "Monkey";
    document.getElementById("char-quote").innerHTML = "We should hang out.";
    document.getElementById("char-img").src = "img/monkey.png";
  } else if (name === "viper") {
    document.getElementById("char-name").innerHTML = "Viper";
    document.getElementById("char-quote").innerHTML =
      "I don't need to bite to fight!";
    document.getElementById("char-img").src = "img/viper.png";
  } else if (name === "shifu") {
    document.getElementById("char-name").innerHTML = "Shifu";
    document.getElementById("char-quote").innerHTML =
      "Inner peace...Inner peace..";
    document.getElementById("char-img").src = "img/shifu.png";
  } else if (name === "kai") {
    document.getElementById("char-name").innerHTML = "Kai";
    document.getElementById("char-quote").innerHTML =
      "The Jade Slayer. Master of Pain. You may know me as the Beast of Vengeance. Uh...Maker of Widows?";
    document.getElementById("char-img").src = "img/kai.png";
  } else if (name === "mr ping") {
    document.getElementById("char-name").innerHTML = "Mr Ping";
    document.getElementById("char-quote").innerHTML = "...Noodles";
    document.getElementById("char-img").src = "img/mr-ping.png";
  } else if (name === "oogway") {
    document.getElementById("char-name").innerHTML = "Oogway";
    document.getElementById("char-quote").innerHTML =
      "Well done. I see you found a battle worth fighting for.";
    document.getElementById("char-img").src = "img/oogway.png";
  } else if (name === "shen") {
    document.getElementById("char-name").innerHTML = "Shen";
    document.getElementById("char-quote").innerHTML =
      "Happiness...must be taken. And I will take mine";
    document.getElementById("char-img").src = "img/shen.png";
  } else if (name === "soothsayer") {
    document.getElementById("char-name").innerHTML = "Soothsayer";
    document.getElementById("char-quote").innerHTML =
      "Your story may not have such a happy beginning, but that doesn't make you who you are. It is the rest of your story, who you choose to be.";
    document.getElementById("char-img").src = "img/soothsayer.png";
  } else if (name === "storming Ox") {
    document.getElementById("char-name").innerHTML = "Storming Ox";
    document.getElementById("char-quote").innerHTML =
      "It's time to surrender, panda. Kung-Fu is dead!";
    document.getElementById("char-img").src = "img/storming-ox.png";
  } else if (name === "tai lung") {
    document.getElementById("char-name").innerHTML = "Tai Lung";
    document.getElementById("char-quote").innerHTML =
      "Whatever I did, I did to make you proud! Tell me how proud you are, Shifu! Tell me! TELL ME!!";
    document.getElementById("char-img").src = "img/tai-lung.png";
  } else if (name === "boss wolf") {
    document.getElementById("char-name").innerHTML = "Boss Wolf";
    document.getElementById("char-quote").innerHTML =
      "Guess nobody told you: If you mess with the wolf, you get the fangs.";
    document.getElementById("char-img").src = "img/boss-wolf.png";
  } else if (name === "crane") {
    document.getElementById("char-name").innerHTML = "Crane";
    document.getElementById("char-quote").innerHTML =
      "Wings of Justice- KA-KAW!";
    document.getElementById("char-img").src = "img/crane.png";
  } else if (name === "croc") {
    document.getElementById("char-name").innerHTML = "Croc";
    document.getElementById("char-quote").innerHTML =
      "The only hero in this town, is the dead one.";
    document.getElementById("char-img").src = "img/croc.png";
  } else {
    document.getElementById("char-name").innerHTML = "?";
    document.getElementById("char-quote").innerHTML = "-------";
    document.getElementById("char-img").src = "img/question-mark.png";
  }
}

document.getElementById("theme-btn").addEventListener("click", themeClicked);
// Colour theme
function themeClicked() {
  // input
  let theme = document.getElementById("theme-in").value;

  // if statement
  if (theme === "black" || theme === "dark") {
    document.getElementById("background-theme").style.backgroundColor =
      "rgba(0, 0, 0, 0.7)";
    document.getElementById("head1").style.color = "white";
    document.getElementById("char-name").style.color = "white";
    document.getElementById("para1").style.color = "white";
  } else if (theme === "white" || theme === "light") {
    document.getElementById("background-theme").style.backgroundColor =
      "rgba(255, 255, 255, 0.7)";
    document.getElementById("head1").style.color = "black";
    document.getElementById("char-name").style.color = "black";
    document.getElementById("para1").style.color = "black";
  }
}
