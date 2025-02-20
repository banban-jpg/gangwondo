// 1일차, 2일차, 3일차 일정 데이터
const itineraryData1 = [
  {
    title: "화명역에서 출발",
    location: "경성대/부경대역 2번출구",
    time: "05:50 ~ 06:30",
    hours: null,
    entryFee: null,
    specialNotes: null,
  },
  {
    title: "고속도로 탑승 (5시간 + 휴게소 1시간)",
    location: null,
    time: "06:30 ~ 12:00",
    hours: null,
    entryFee: null,
    specialNotes: null,
  },
  {
    title: "인제 자작나무숲 (등산 + 구경 3시간)",
    location: "강원특별자치도 인제군 인제읍 원대리 581",
    time: "12:00 ~ 15:00",
    hours: null,
    entryFee: "인당 5000원",
    specialNotes: ["033-463-0044", "아이젠: 인당 5000원", "주차비: 무료"],
  },
  {
    title: "옛날원대막국수 (식사 + 이동 1시간)",
    location: "강원특별자치도 인제군 인제읍 자작나무숲길 1113",
    time: "15:00 ~ 16:00",
    hours: "16:30 영업 마감",
    entryFee: null,
    specialNotes: null,
  },
  {
    title: "속초 숙소까지 이동",
    location: "강원 속초시 조양동 1480-162 속초 서현이네펜션",
    time: "16:00 ~ 17:30",
    hours: null,
    entryFee: null,
    specialNotes: ["인제IC로 이동 예정"],
  },
  {
    title: "속초 숙소 도착 후 휴식",
    location: "강원 속초시 조양동 1480-162 속초 서현이네펜션",
    time: "17:00 ~ 18:30",
    hours: null,
    entryFee: null,
    specialNotes: ["저녁 어디서 먹을지 정해야함"],
  },

  {
    title: "맛집, 바다구경, 시장구경, 카페 등",
    location: null,
    time: "18:30 ~ 00:00",
    hours: null,
    entryFee: null,
    specialNotes: null,
  },
  {
    title: "취침",
    location: null,
    time: "00:00 ~ 00:00",
    hours: null,
    entryFee: null,
    specialNotes: null,
  },
];

// // 1일차, 2일차, 3일차 일정 데이터
// const itineraryData2 = [

//   {
//     title: "체크아웃",
//     location: null,
//     time: "09:00 ~ 10:00",
//     hours: null,
//     entryFee: null,
//     specialNotes: null,
//   },
//   {
//     title: "아바이마을 오징어순대집",
//     location: null,
//     time: "10:00 ~ 11:00",
//     hours: null,
//     entryFee: "",
//     specialNotes: ["아바이마을 신다신가게 등 유명한곳 다 맛있음"],
//   },
  
// ];



const itineraryData2 = [
  {
    title: "체크아웃",
    location: "속초 서현이네펜션",
    time: "10:00",
    hours: null,
    entryFee: null,
    specialNotes: null,
  },
  {
    title: "오징어순대집에서 아침식사",
    location: "강원 속초시 중앙로129번길 22",
    time: "10:00 ~ 11:00",
    hours: "08:00 ~ 20:00",
    entryFee: null,
    specialNotes: ["033-633-5833"],
  },
  {
    title: "영진해변으로 이동",
    location: "강원 강릉시 연곡면 영진리",
    time: "11:00 ~ 12:00",
    hours: null,
    entryFee: null,
    specialNotes: null,
  },
  {
    title: "영진해변 구경 및 카페 방문",
    location: "영진해변",
    time: "12:00 ~ 14:00",
    hours: null,
    entryFee: null,
    specialNotes: ["근처 유명 카페 방문 가능"],
  },
  {
    title: "점심 식사",
    location: "강릉 지역 맛집",
    time: "14:00 ~ 15:00",
    hours: null,
    entryFee: null,
    specialNotes: ["식당 미정"],
  },
  {
    title: "대관령으로 이동",
    location: "강원 평창군 대관령면",
    time: "15:00 ~ 15:50",
    hours: null,
    entryFee: null,
    specialNotes: null,
  },
  {
    title: "대관령 양떼목장 구경",
    location: "강원 평창군 대관령면 대관령마루길 483-32",
    time: "15:50 ~ 16:50",
    hours: "09:00 ~ 17:00",
    entryFee: "성인 7000원, 어린이 4000원",
    specialNotes: ["033-335-1966"],
  },
  {
    title: "안목해변 주차장으로 이동",
    location: "강원 강릉시 창해로 14",
    time: "16:50 ~ 17:30",
    hours: null,
    entryFee: null,
    specialNotes: null,
  },
  {
    title: "일몰 구경 및 카페 방문",
    location: "안목해변 (순두부젤라또 2호점)",
    time: "17:30 ~ 19:00",
    hours: "10:00 ~ 21:00",
    entryFee: null,
    specialNotes: ["033-123-4567"],
  },
  {
    title: "숙소로 이동",
    location: "더강릉 포레 머시기",
    time: "19:00 ~ 19:30",
    hours: null,
    entryFee: null,
    specialNotes: null,
  },
  {
    title: "저녁식사 및 취침 준비",
    location: "숙소 또는 인근 맛집",
    time: "19:30 ~ 22:00",
    hours: null,
    entryFee: null,
    specialNotes: ["식당 미정"],
  },
  {
    title: "취침",
    location: "숙소",
    time: "22:00 ~",
    hours: null,
    entryFee: null,
    specialNotes: null,
  },
];

// // 1일차, 2일차, 3일차 일정 데이터
const itineraryData3 = [
  {
    title: "기상 및 출발 준비",
    location: "숙소",
    time: "04:00",
    hours: null,
    entryFee: null,
    specialNotes: null,
  },
  {
    title: "안반데기로 이동",
    location: "강원 강릉시 왕산면 대기리",
    time: "04:00 ~ 05:00",
    hours: null,
    entryFee: null,
    specialNotes: null,
  },
  {
    title: "안반데기 별, 일출 구경",
    location: "안반데기",
    time: "05:00 ~ 07:30",
    hours: null,
    entryFee: null,
    specialNotes: ["날씨 등의 이슈로 구경 불가능 판단 시 즉시 복귀"],
  },
  {
    title: "숙소 복귀",
    location: "강릉 숙소",
    time: "07:30 ~ 08:30",
    hours: null,
    entryFee: null,
    specialNotes: null,
  },
  {
    title: "체크아웃",
    location: "강릉 숙소",
    time: "08:30 ~ 11:00",
    hours: null,
    entryFee: null,
    specialNotes: null,
  },
  {
    title: "초당애로 이동",
    location: "강원 강릉시 초당동",
    time: "11:00 ~ 11:20",
    hours: null,
    entryFee: null,
    specialNotes: null,
  },
  {
    title: "강릉 초당애 순두부 짬뽕",
    location: "강원 강릉시 초당동 309-1",
    time: "11:20 ~ 12:30",
    hours: "09:00 ~ 20:00",
    entryFee: null,
    specialNotes: ["033-123-7890"],
  },
  {
    title: "강릉 베리베리 딸기로 이동",
    location: "강원 강릉시 난설헌로 144",
    time: "12:30 ~ 12:50",
    hours: null,
    entryFee: null,
    specialNotes: null,
  },
  {
    title: "베리베리 딸기 카페",
    location: "강원 강릉시 난설헌로 144",
    time: "12:50 ~ 14:00",
    hours: "10:00 ~ 21:00",
    entryFee: null,
    specialNotes: ["033-987-6543"],
  },
  {
    title: "강릉 -> 부경대/성대역 부산 복귀",
    location: "부산",
    time: "14:00 ~ 19:00",
    hours: null,
    entryFee: null,
    specialNotes: ["고속도로 휴게소 정차 포함"],
  },
  {
    title: "화명동 도착",
    location: "부산 화명동",
    time: "19:00 ~ 19:30",
    hours: null,
    entryFee: null,
    specialNotes: null,
  },
];

const extraDestinations = [
  // 강릉 관광지
  {
    name: "경포해변",
    location: "강원도 강릉시 안현동 산1",
    time: "24시간 개방",
  },
  {
    name: "오죽헌",
    location: "강원도 강릉시 율곡로 3139번길 24",
    time: "09:00 - 18:00",
  },
  {
    name: "안목해변 카페거리",
    location: "강원도 강릉시 창해로14번길 24",
    time: "상시 개방",
  },
  {
    name: "정동진",
    location: "강원도 강릉시 강동면 헌화로 990",
    time: "24시간 개방",
  },
  {
    name: "강릉솔향수목원",
    location: "강원도 강릉시 구정면 구정리 산194",
    time: "09:00 - 18:00 (월요일 휴무)",
  },

  // 양양 관광지
  {
    name: "하조대",
    location: "강원도 양양군 현북면 하광정리 산3-2",
    time: "24시간 개방",
  },
  {
    name: "낙산사",
    location: "강원도 양양군 강현면 낙산사로 100",
    time: "08:00 - 18:00",
  },
  {
    name: "남애항",
    location: "강원도 양양군 현남면 남애리 19-6",
    time: "상시 개방",
  },
  {
    name: "죽도해변",
    location: "강원도 양양군 현남면 인구리 3-8",
    time: "24시간 개방",
  },
  {
    name: "양양 국제 서핑장",
    location: "강원도 양양군 현남면 동산리 159-1",
    time: "상시 개방",
  },

  // 평창 관광지
  {
    name: "대관령 양떼목장",
    location: "강원도 평창군 대관령면 대관령마루길 483-32",
    time: "09:00 - 18:00",
  },
  {
    name: "월정사",
    location: "강원도 평창군 진부면 오대산로 374-8",
    time: "08:00 - 18:00",
  },
  {
    name: "이효석 문학관",
    location: "강원도 평창군 봉평면 이효석길 33-11",
    time: "09:00 - 18:00",
  },
  {
    name: "발왕산 케이블카",
    location: "강원도 평창군 대관령면 용산리 130",
    time: "09:00 - 16:30",
  },
  {
    name: "오대산 국립공원",
    location: "강원도 평창군 진부면 동산리 산1",
    time: "24시간 개방",
  },
];

function renderItinerary(day) {
  const itineraryElement = document.getElementById("itinerary");
  itineraryElement.innerHTML = "";

  let data = [];
  if (day === 1) {
    data = itineraryData1;
  } else if (day === 2) {
    data = itineraryData2;
  } else if (day === 3) {
    data = itineraryData3;
  }

  data.forEach((item) => {
    const itineraryItem = `
          <div class="relative pl-8 border-l-2 border-black">
            <div class="absolute -left-2 top-0 w-4 h-4 rounded-full bg-black"></div>
            <div class="bg-white rounded-lg border border-gray-200 p-4">
              <div class="flex justify-start items-start mb-4">
                <div>
                  <h3 class="text-lg font-medium text-gray-900">${
                    item.title
                  }</h3>
                  <p class="text-sm text-gray-500 mt-1"><i class="fas fa-map-marker-alt mr-2"></i>${
                    item.location ? item.location : "정보 없음"
                  }</p>
                </div>
                <span class="text-sm font-medium text-gray-600 ml-4">${
                  item.time ? item.time : "정보 없음"
                }</span>
              </div>
              <div class="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p class="text-gray-600"><i class="far fa-clock mr-2"></i>운영시간: ${
                    item.hours ? item.hours : "정보 없음"
                  }</p>
                  <p class="text-gray-600 mt-2"><i class="fas fa-won-sign mr-2"></i>입장료: ${
                    item.entryFee ? item.entryFee : "정보 없음"
                  }</p>
                </div>
                <div>
                  <p class="text-gray-600"><i class="fas fa-info-circle mr-2"></i>특이사항:</p>
                  <ul class="list-disc list-inside text-gray-600 ml-2">
                    ${
                      item.specialNotes && item.specialNotes.length > 0
                        ? item.specialNotes
                            .map((note) => `<li>${note}</li>`)
                            .join("")
                        : "<li>정보 없음</li>"
                    }
                  </ul>
                </div>
              </div>
            </div>
          </div>
        `;
    itineraryElement.innerHTML += itineraryItem;
  });
}

function renderExtraDestinations() {
  const extraElement = document.getElementById("extraDestinations");
  extraElement.innerHTML = "";

  extraDestinations.forEach((item) => {
    const extraItem = `
            <div class="p-4 bg-gray-50 rounded-lg">
                <h3 class="text-lg font-medium text-gray-900 mb-2">${item.name}</h3>
                <p class="text-sm text-gray-500"><i class="fas fa-map-marker-alt mr-2"></i>${item.location}</p>
                <p class="text-sm text-gray-600 mt-2"><i class="far fa-clock mr-2"></i>${item.time}</p>
            </div>
        `;
    extraElement.innerHTML += extraItem;
  });
}

document.getElementById("day1Btn").addEventListener("click", () => {
  renderItinerary(1);
  // 버튼 스타일 변경
  document
    .getElementById("day1Btn")
    .classList.add("border-black", "text-black", "border-b-2");
  document.getElementById("day1Btn").classList.remove("text-gray-500");
  document
    .getElementById("day2Btn")
    .classList.add("text-gray-500", "border-b-0");
  document
    .getElementById("day3Btn")
    .classList.add("text-gray-500", "border-b-0");
});

document.getElementById("day2Btn").addEventListener("click", () => {
  renderItinerary(2);
  // 버튼 스타일 변경
  document
    .getElementById("day1Btn")
    .classList.add("text-gray-500", "border-b-0");
  document
    .getElementById("day2Btn")
    .classList.add("border-black", "text-black", "border-b-2");
  document.getElementById("day2Btn").classList.remove("text-gray-500");
  document
    .getElementById("day3Btn")
    .classList.add("text-gray-500", "border-b-0");
});

document.getElementById("day3Btn").addEventListener("click", () => {
  renderItinerary(3);
  // 버튼 스타일 변경
  document
    .getElementById("day1Btn")
    .classList.add("text-gray-500", "border-b-0");
  document
    .getElementById("day2Btn")
    .classList.add("text-gray-500", "border-b-0");
  document
    .getElementById("day3Btn")
    .classList.add("border-black", "text-black", "border-b-2");
  document.getElementById("day3Btn").classList.remove("text-gray-500");
});

// 처음에 1일차 일정 렌더링
renderItinerary(1);
renderExtraDestinations();
