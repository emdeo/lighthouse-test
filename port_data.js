// 연안여객선 주요 출발 항구 데이터
// TAGO 국내선박운항정보 API (nodeId 기준)
// 좌표는 실제 여객터미널 위치 기준

const PORT_DATA = [
  // ── 동해안 ──
  { nodeId: "SEA44050", name: "속초",     lat: 38.2048, lng: 128.5912 },
  { nodeId: "SEA44030", name: "묵호",     lat: 37.5497, lng: 129.1169 },
  { nodeId: "SEA44010", name: "동해",     lat: 37.5013, lng: 129.1147 },
  { nodeId: "SEA44060", name: "강릉",     lat: 37.7652, lng: 128.9040 },
  { nodeId: "SEA43030", name: "후포",     lat: 36.6803, lng: 129.4564 },
  { nodeId: "SEA43010", name: "포항",     lat: 36.0571, lng: 129.3811 },
  { nodeId: "SEA43110", name: "울릉도",   lat: 37.4839, lng: 130.9057 },

  // ── 남해안 ──
  { nodeId: "SEA42010", name: "부산",             lat: 35.0966, lng: 129.0357 },
  { nodeId: "SEA42011", name: "부산_연안부두",    lat: 35.0893, lng: 129.0441 },
  { nodeId: "SEA40930", name: "진해",             lat: 35.1469, lng: 128.6661 },
  { nodeId: "SEA40010", name: "마산",             lat: 35.1987, lng: 128.5716 },
  { nodeId: "SEA40020", name: "삼천포신항",       lat: 34.9248, lng: 128.0621 },
  { nodeId: "SEA40050", name: "통영",             lat: 34.8544, lng: 128.4339 },
  { nodeId: "SEA96140", name: "여수",             lat: 34.7383, lng: 127.7406 },
  { nodeId: "SEA31910", name: "녹동",             lat: 34.4592, lng: 127.0525 },
  { nodeId: "SEA31020", name: "완도",             lat: 34.3114, lng: 126.7546 },
  { nodeId: "SEA31010", name: "목포",             lat: 34.7886, lng: 126.3917 },

  // ── 서해안 ──
  { nodeId: "SEA30010", name: "군산",     lat: 35.9786, lng: 126.7118 },
  { nodeId: "SEA30020", name: "격포",     lat: 35.6177, lng: 126.4826 },
  { nodeId: "SEA22010", name: "대천",     lat: 36.3174, lng: 126.4997 },
  { nodeId: "SEA22330", name: "안흥",     lat: 36.6744, lng: 126.3269 },
  { nodeId: "SEA10100", name: "인천",     lat: 37.4742, lng: 126.5988 },

  // ── 제주 ──
  { nodeId: "SEA10090", name: "제주",         lat: 33.5190, lng: 126.5243 },
  { nodeId: "SEA96010", name: "제주_서귀포",  lat: 33.2444, lng: 126.5631 },
  { nodeId: "SEA96310", name: "제주_성산포",  lat: 33.4745, lng: 126.9239 },
  { nodeId: "SEA96030", name: "제주_모슬포",  lat: 33.2158, lng: 126.2548 },
];

// 등대 좌표에서 가장 가까운 출발 항구 찾기
function findNearestPort(lat, lng, maxDistKm = 30) {
  function getDist(lat1, lng1, lat2, lng2) {
    const R = 6371;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLng = (lng2 - lng1) * Math.PI / 180;
    const a = Math.sin(dLat/2)**2 + Math.cos(lat1*Math.PI/180) * Math.cos(lat2*Math.PI/180) * Math.sin(dLng/2)**2;
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  }

  let nearest = null;
  let minDist = Infinity;
  for (const port of PORT_DATA) {
    const d = getDist(lat, lng, port.lat, port.lng);
    if (d < minDist) { minDist = d; nearest = port; }
  }

  if (minDist > maxDistKm) return null;
  return { ...nearest, distKm: Math.round(minDist) };
}

window.PORT_DATA = PORT_DATA;
window.findNearestPort = findNearestPort;
