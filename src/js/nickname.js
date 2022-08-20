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
  "독불장군",
  "봄날햇살",
  "단짠단짠",
  "생로병사",
  "바이러스",
  "개똥벌레",
  "꼬르르륵",
  "용두사미",
  "갑오징어",
  "곤지곤지",
  "고슴도치",
  "곰돌이푸",
  "국가대표",
  "월급루팡",
  "국어사전",
  "귀염둥이",
  "귀차니즘",
  "금상첨화",
  "기억상실",
  "꼬마공주",
  "꼬깃꼬깃",
  "꼬마신사",
  "난공불락",
  "노트필기",
  "달콤짭짤",
  "도라에몽",
  "동그라미",
  "뒤뚱뒤뚱",
  "딸기우유",
  "레인보우",
  "마시마로",
  "모태솔로",
  "몽글몽글",
  "몽실몽실",
  "무한도전",
  "바나나맛",
  "바람둥이",
  "반짝반짝",
  "방긋방긋",
  "방울방울",
  "버블버블",
  "붉은장미",
  "블랙커피",
  "블링블링",
  "비타민씨",
  "안아줘요",
  "마마보이",
  "새콤달콤",
  "살랑살랑",
  "성형미인",
  "소주한잔",
  "깡소주파",
  "신데렐라",
  "외뿔고래",
  "백설공주",
  "아침이슬",
  "알록달록",
  "알쏭달쏭",
  "엄지공주",
  "연금술사",
  "올망졸망",
  "요리조리",
  "요조숙녀",
  "이런저런",
  "인어공주",
  "자유분방",
  "주렁주렁",
  "초등학생",
  "콩쥐팥쥐",
  "맑은햇살",
  "평강공주",
  "푸른하늘",
  "피노키오",
  "하루살이",
  "하얀고래",
  "하얀장미",
  "해바라기",
  "허리케인",
  "효녀심청",
  "호동왕자",
  "혹등고래",
  "큐티섹시",
];

const nameForm = document.querySelector("#nameForm");
const nameInput = nameForm.querySelector("input:first-child");
const submitBtn = nameForm.querySelector("input:nth-child(2)");
const retryBtn = nameForm.querySelector("input:last-child");
const nicknameSpace = document.querySelector("#nickname");
const nameSpace = document.querySelector("#name");
const yourNameIs = document.querySelector("#yourNameIs");
const countDown = document.querySelector("#countDown");
let isSubmit = false;

const makeNickName = (e) => {
  e.preventDefault();
  if (!isSubmit) {
    isSubmit = true;
    if (nicknameSpace.innerText) {
      yourNameIs.innerText = "";
      nicknameSpace.innerText = "";
      nameSpace.innerText = "";
    }
    const name = nameInput.value;
    const nickname =
      nicknameList[Math.floor(Math.random() * nicknameList.length)];
    let time = 4;
    const interval = setInterval(() => {
      yourNameIs.innerText = "당신의 별명은!!";
      time -= 1;
      countDown.innerText = time;
    }, 1000);
    setTimeout(() => {
      nicknameSpace.innerText = nickname;
      nameSpace.innerText = name;
      countDown.innerText = "";
      if (retryBtn.classList.contains("hidden")) {
        retryBtn.classList.remove("hidden");
        submitBtn.classList.add("hidden");
      }
      clearInterval(interval);
      isSubmit = false;
    }, 4000);
  }
};

nameForm.addEventListener("submit", makeNickName);
