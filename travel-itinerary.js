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

// 1일차, 2일차, 3일차 일정 데이터
const itineraryData2 = [

  {
    title: "체크아웃",
    location: null,
    time: "09:00 ~ 10:00",
    hours: null,
    entryFee: null,
    specialNotes: null,
  },
  {
    title: "아바이마을 오징어순대집",
    location: null,
    time: "10:00 ~ 11:00",
    hours: null,
    entryFee: "",
    specialNotes: ["아바이마을 신다신가게 등 유명한곳 다 맛있음"],
  },
  
];

// // 1일차, 2일차, 3일차 일정 데이터
const itineraryData3 = [
  {
    title: "기상 후 안반데기로 출발",
    location: null,
    time: "00:00 ~ 05:00",
    hours: null,
    entryFee: null,
    specialNotes: ["안반데기 일출 07시"],
  },
  
];
const extraDestinations = [
  {
    name: "경포해변",
    location: "강원도 강릉시 경포로 365-1",
    time: "24시간 개방",
  },
  {
    name: "오죽헌",
    location: "강원도 강릉시 율곡로 3139번길 24",
    time: "09:00 - 18:00",
  },
  {
    name: "안목해변 카페 거리",
    location: "강원도 강릉시 창해로14번길 24",
    time: "08:00 - 22:00",
  },

  {
    name: "백담사",
    location: "강원도 인제군 북면 백담로 24",
    time: "상시 개방",
  },
  {
    name: "카페 하추리",
    location: "강원도 인제군 인제읍 하추로 187",
    time: "09:00 - 18:00",
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
