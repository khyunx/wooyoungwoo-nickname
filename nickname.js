const nicknameList = [
  "갈팡질팡",
  "깐따삐아",
  "달콤짭짤",
  "뒤뚱뒤뚱",
  "러브홀릭",
  "몽글몽글",
  "방긋방긋",
  "블링블링",
  "시시비비",
  "껄렁껄렁",
  "알쏭달쏭",
  "올망졸망",
  "우락부락",
  "위풍당당",
  "전전긍긍",
  "귀염뽀짝",
  "자칭얼짱",
  "권모술수",
  "거두절미",
  "기고만장",
  "유치뽀짝",
  "싱글벙글",
  "우당탕탕",
  "고진감래",
  "독불장군",
  "봄날햇살",
  "산전수전",
  "단짠단짠",
  "생로병사",
  "바이러스",
  "개똥벌레",
  "꼬르르륵",
  "용두사미",
];

const nameForm = document.querySelector("#nameForm");
const nameInput = nameForm.querySelector("input");
const nicknameSpace = document.querySelector("#nickname");
const nameSpace = document.querySelector("#name");
const yourNameIs = document.querySelector("#yourNameIs");
const countDown = document.querySelector("#countDown");
const retry = document.querySelector("#retry");

const makeNickName = (e) => {
  e.preventDefault();
  const name = nameInput.value;
  const nickname =
    nicknameList[Math.floor(Math.random() * nicknameList.length)];
  let time = 4;
  setInterval(() => {
    yourNameIs.innerText = "당신의 별명은!!";
    time -= 1;
    countDown.innerText = time;
    if (time <= 0) {
      countDown.innerText = "";
    }
  }, 1000);

  setTimeout(() => {
    nicknameSpace.innerText = nickname;
    nameSpace.innerText = name;
  }, 4000);
};

nameForm.addEventListener("submit", makeNickName);
retry.addEventListener("click", makeNickName);
