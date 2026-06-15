// 이달의 등대 데이터 (2019년 1월 ~ 2026년 6월)
// 출처: 해양수산부 / 국립해양조사원 이달의 등대 선정 자료
// 2021년 7월은 미선정 또는 데이터 없음

const MONTHLY_LIGHTHOUSE_DATA = [
  { id: 1,  year: 2019, month: 1,  name: "간절곶등대" },
  { id: 2,  year: 2019, month: 2,  name: "무창포방파제등대" },
  { id: 3,  year: 2019, month: 3,  name: "오동도등대" },
  { id: 4,  year: 2019, month: 4,  name: "방두포등대" },
  { id: 5,  year: 2019, month: 5,  name: "팔미도등대" },
  { id: 6,  year: 2019, month: 6,  name: "독도등대" },
  { id: 7,  year: 2019, month: 7,  name: "영도등대" },
  { id: 8,  year: 2019, month: 8,  name: "한산항등표" },
  { id: 9,  year: 2019, month: 9,  name: "목포구등대" },
  { id: 10, year: 2019, month: 10, name: "창포말등대" },
  { id: 11, year: 2019, month: 11, name: "주문진등대" },
  { id: 12, year: 2019, month: 12, name: "선유도등대" },

  { id: 13, year: 2020, month: 1,  name: "묵호등대" },
  { id: 14, year: 2020, month: 2,  name: "죽변등대" },
  { id: 15, year: 2020, month: 3,  name: "비인항남방파제등대" },
  { id: 16, year: 2020, month: 4,  name: "우도등대" },
  { id: 17, year: 2020, month: 5,  name: "축산항등대" },
  { id: 18, year: 2020, month: 6,  name: "소매물도등대" },
  { id: 19, year: 2020, month: 7,  name: "하조도등대" },
  { id: 20, year: 2020, month: 8,  name: "거문도등대" },
  { id: 21, year: 2020, month: 9,  name: "남당항방파제등대" },
  { id: 22, year: 2020, month: 10, name: "물치항등대" },
  { id: 23, year: 2020, month: 11, name: "호미곶등대" },
  { id: 24, year: 2020, month: 12, name: "누에섬등대" },

  { id: 25, year: 2021, month: 1,  name: "울기등대" },
  { id: 26, year: 2021, month: 2,  name: "속초등대" },
  { id: 27, year: 2021, month: 3,  name: "산지등대" },
  { id: 28, year: 2021, month: 4,  name: "당사도등대" },
  { id: 29, year: 2021, month: 5,  name: "가거도등대" },
  { id: 30, year: 2021, month: 6,  name: "말도등대" },
  // { id: 31, year: 2021, month: 7,  name: null },  // 데이터 없음
  { id: 32, year: 2021, month: 8,  name: "제도남항방파제등대" },
  { id: 33, year: 2021, month: 9,  name: "소청도등대" },
  { id: 34, year: 2021, month: 10, name: "소리도등대" },
  { id: 35, year: 2021, month: 11, name: "길포등대" },
  { id: 36, year: 2021, month: 12, name: "감포항등대" },

  { id: 37, year: 2022, month: 1,  name: "송대말등대" },
  { id: 38, year: 2022, month: 2,  name: "정자항북방파제등대" },
  { id: 39, year: 2022, month: 3,  name: "중리항방파제등대" },
  { id: 40, year: 2022, month: 4,  name: "여수구항방파제하멜등대" },
  { id: 41, year: 2022, month: 5,  name: "인천항역무선방파제등대" },
  { id: 42, year: 2022, month: 6,  name: "어청도등대" },
  { id: 43, year: 2022, month: 7,  name: "대천항방파제등대" },
  { id: 44, year: 2022, month: 8,  name: "전곡항테마어항방파제등대" },
  { id: 45, year: 2022, month: 9,  name: "대신등대" },
  { id: 46, year: 2022, month: 10, name: "마라도등대" },
  { id: 47, year: 2022, month: 11, name: "술상항남방파제등대" },
  { id: 48, year: 2022, month: 12, name: "대포항동방파제등대" },

  { id: 49, year: 2023, month: 1,  name: "후포등대" },
  { id: 50, year: 2023, month: 2,  name: "설악항방파제등대" },
  { id: 51, year: 2023, month: 3,  name: "비양도등대" },
  { id: 52, year: 2023, month: 4,  name: "구시포항남방파제등대" },
  { id: 53, year: 2023, month: 5,  name: "완도항방파제등대" },
  { id: 54, year: 2023, month: 6,  name: "간월도항방파제등대" },
  { id: 55, year: 2023, month: 7,  name: "서암항남방파제등대" },
  { id: 56, year: 2023, month: 8,  name: "도동등대" },
  { id: 57, year: 2023, month: 9,  name: "연평도등대" },
  { id: 58, year: 2023, month: 10, name: "흑산도항방파제등대" },
  { id: 59, year: 2023, month: 11, name: "마산항서파제제서단등대" },
  { id: 60, year: 2023, month: 12, name: "슬도등대" },

  { id: 61, year: 2024, month: 1,  name: "울산나사방사제등대" },
  { id: 62, year: 2024, month: 2,  name: "대진등대" },
  { id: 63, year: 2024, month: 3,  name: "비응항서방파제남단등대" },
  { id: 64, year: 2024, month: 4,  name: "방포항방파제등대" },
  { id: 65, year: 2024, month: 5,  name: "용기포항서방파제등대" },
  { id: 66, year: 2024, month: 6,  name: "가사도등대" },
  { id: 67, year: 2024, month: 7,  name: "청사포등대" },
  { id: 68, year: 2024, month: 8,  name: "통영운하방파제등대" },
  { id: 69, year: 2024, month: 9,  name: "울릉도등대" },
  { id: 70, year: 2024, month: 10, name: "신창등대" },
  { id: 71, year: 2024, month: 11, name: "돌산항남방파제등대" },
  { id: 72, year: 2024, month: 12, name: "제부도항등대" },

  { id: 73, year: 2025, month: 1,  name: "척사항북방파제등대" },
  { id: 74, year: 2025, month: 2,  name: "대이작도등대" },
  { id: 75, year: 2025, month: 3,  name: "회동항방파제등대" },
  { id: 76, year: 2025, month: 4,  name: "목포북항동방파제등대" },
  { id: 77, year: 2025, month: 5,  name: "격포항북방파제등대" },
  { id: 78, year: 2025, month: 6,  name: "구조라항남방파제등대" },
  { id: 79, year: 2025, month: 7,  name: "득생곶등대" },
  { id: 80, year: 2025, month: 8,  name: "인구항방파제등대" },
  { id: 81, year: 2025, month: 9,  name: "당진장고항등대" },
  { id: 82, year: 2025, month: 10, name: "애도등대" },
  { id: 83, year: 2025, month: 11, name: "화암추등대" },
  { id: 84, year: 2025, month: 12, name: "어은돌항방파제등대" },

  { id: 85, year: 2026, month: 1,  name: "방어진항북방파제등대" },
  { id: 86, year: 2026, month: 2,  name: "서망항북방파제등대" },
  { id: 87, year: 2026, month: 3,  name: "대진항남방파제등대" },
  { id: 88, year: 2026, month: 4,  name: "삼천포구항동방파제등대" },
  { id: 89, year: 2026, month: 5,  name: "비안도항북방파제등대" },
  { id: 90, year: 2026, month: 6,  name: "칠암항남방파제등대" },
];

// 현재 달의 이달의 등대 반환
function getCurrentMonthlyLighthouse() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  return MONTHLY_LIGHTHOUSE_DATA.find(d => d.year === year && d.month === month) || null;
}

// 특정 연도/월의 이달의 등대 반환
function getMonthlyLighthouse(year, month) {
  return MONTHLY_LIGHTHOUSE_DATA.find(d => d.year === year && d.month === month) || null;
}
