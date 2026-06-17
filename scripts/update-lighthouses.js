const https = require('https');
const fs = require('fs');

const API_KEY = process.env.LIGHTHOUSE_API_KEY;
const NUM_OF_ROWS = 500;

function fetchPage(pageNo) {
  return new Promise((resolve, reject) => {
    const url = 'https://apis.data.go.kr/1192136/Buoy/getBuoyInfo'
      + '?serviceKey=' + API_KEY
      + '&pageNo=' + pageNo
      + '&numOfRows=' + NUM_OF_ROWS
      + '&type=xml';
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

function parseItems(xml) {
  const items = xml.match(/<item>[\s\S]*?<\/item>/g) || [];
  return items.map(item => {
    const get = (tag) => {
      const m = item.match(new RegExp('<' + tag + '>([^<]*)<\/' + tag + '>'));
      return m ? m[1].trim() : '';
    };
    const latStr = get('wgs84North').replace('N', '').replace('S', '-');
    const lngStr = get('wgs84East').replace('E', '').replace('W', '-');
    return {
      id: get('blfrNo'),
      name: get('buoyKr'),
      nameEn: get('buoyEn'),
      type: get('buoyNm'),
      sea: get('seaNm'),
      light: get('lgt_property'),
      lat: parseFloat(latStr),
      lng: parseFloat(lngStr)
    };
  }).filter(d => d.lat && d.lng);
}

function isKorea(lat, lng) {
  if (lat < 33.0 || lat > 38.63) return false;
  if (lng < 124.0 || lng > 132.0) return false;
  if (lat >= 38.0) {
    return lng >= 128.0 && lng <= 130.0;
  }
  return true;
}

async function main() {
  console.log('API 호출 시작...');
  let allItems = [];
  let pageNo = 1;

  while (true) {
    console.log('페이지', pageNo, '호출 중...');
    const xml = await fetchPage(pageNo);
    const items = parseItems(xml);
    if (items.length === 0) break;
    allItems = allItems.concat(items);
    if (items.length < NUM_OF_ROWS) break;
    pageNo++;
  }

  console.log('전체 항목:', allItems.length);

 const EXCLUDE_IDS = [
    "1204_A",
    "2537.2",
  ];

  const filtered = allItems
    .filter(d => d.name.includes('등대'))
    .filter(d => d.type === '고정표지')
    .filter(d => isKorea(d.lat, d.lng))
    .filter(d => !EXCLUDE_NAMES.includes(d.name));

  console.log('필터링 후:', filtered.length);

  const output = 'const LIGHTHOUSE_DATA =\n' + JSON.stringify(filtered, null, 2);
  fs.writeFileSync('lighthouses.js', output);
  console.log('lighthouses.js 저장 완료');
}

main().catch(err => {
  console.error('오류 발생:', err);
  process.exit(1);
});
