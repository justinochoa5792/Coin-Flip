const flipBtn = document.querySelector(".btn");
const coin = document.querySelector("#coin");

const flipCoin = () => {
  let i = Math.floor(Math.random() * 2);
  coin.style.animation = "none";
  if (i) {
    setTimeout(function () {
      coin.style.animation = "spin-heads 3s forwards";
    }, 100);
  } else {
    setTimeout(function () {
      coin.style.animation = "spin-tails 3s forwards";
    }, 100);
  }
};

flipBtn.addEventListener("click", flipCoin);
