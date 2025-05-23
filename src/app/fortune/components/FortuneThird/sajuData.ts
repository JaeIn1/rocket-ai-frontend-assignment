export interface SajuCell {
  text?: string;
  top?: string;
  hanja?: string;
  bottom?: string;
  size?: string;
  weight?: string;
  bg?: string;
  color?: string;
  border?: string;
  rounded?: boolean;
  multiLine?: boolean;
  small?: string;
  large?: string;
}

export const sajuData: SajuCell[][] = [
  // 1행 - 헤더 (년/월/일/시)
  [
    { text: '', small: 'text-xs font-medium', large: 'text-xl font-semibold' },
    { text: '年', small: 'text-xs font-medium', large: 'text-xl font-semibold' },
    { text: '月', small: 'text-xs font-medium', large: 'text-xl font-semibold' },
    { text: '日', small: 'text-xs font-medium', large: 'text-xl font-semibold' },
    { text: '時', small: 'text-xs font-medium', large: 'text-xl font-semibold' },
  ],

  // 2행 - 십성 상단
  [
    { text: '十星\n(십성)', small: 'text-xs font-medium', large: 'text-sm font-semibold' },
    { text: '傷官\n(상관)', small: 'text-xs font-medium', large: 'text-base font-semibold' },
    { text: '比肩\n(비견)', small: 'text-xs font-medium', large: 'text-base font-semibold' },
    { text: '傷官\n(상관)', small: 'text-xs font-medium', large: 'text-base font-semibold' },
    { text: '傷官\n(상관)', small: 'text-xs font-medium', large: 'text-base font-semibold' },
  ],

  // 3행 - 천간
  [
    { text: '天干\n(천간)', small: 'text-xs font-medium', large: 'text-sm font-bold' },
    { top: '임', hanja: '壬', bottom: '陰水', bg: 'bg-gray-800', color: 'text-white', rounded: true },
    { top: '정', hanja: '丁', bottom: '陰火', bg: 'bg-red-500', color: 'text-white', rounded: true },
    { top: '계', hanja: '癸', bottom: '陰水', bg: 'bg-gray-800', color: 'text-white', rounded: true },
    { top: '계', hanja: '癸', bottom: '陰水', bg: 'bg-gray-800', color: 'text-white', rounded: true },
  ],

  // 4행 - 지지
  [
    { text: '地支\n(지지)', small: 'text-xs font-medium', large: 'text-sm font-bold' },
    { top: '인', hanja: '寅', bottom: '陽木', bg: 'bg-teal-500', color: 'text-white', rounded: true },
    { top: '사', hanja: '巳', bottom: '陰火', bg: 'bg-red-500', color: 'text-white', rounded: true },
    { top: '해', hanja: '亥', bottom: '陰水', bg: 'bg-gray-800', color: 'text-white', rounded: true },
    {
      top: '유',
      hanja: '酉',
      bottom: '陰金',
      bg: 'bg-white',
      color: 'text-black',
      border: 'border-[1px] border-black',
      rounded: true,
    },
  ],

  // 5행 - 십성 하단
  [
    { text: '十星\n(십성)', small: 'text-xs font-medium', large: 'text-sm font-bold' },
    { text: '比肩\n(비견)', small: 'text-xs font-medium', large: 'text-base font-bold' },
    { text: '劫財\n(겁재)', small: 'text-xs font-medium', large: 'text-base font-bold' },
    { text: '食神\n(식신)', small: 'text-xs font-medium', large: 'text-base font-bold' },
    { text: '偏財\n(편재)', small: 'text-xs font-medium', large: 'text-base font-bold' },
  ],

  // 6행 - 십이운성
  [
    { text: '十二運星\n(십이운성)', small: 'text-xs font-medium', large: 'text-sm font-bold' },
    { text: '死\n(사)', small: 'text-xs font-medium', large: 'text-base font-bold' },
    { text: '帝旺\n(제왕)', small: 'text-xs font-medium', large: 'text-base font-bold' },
    { text: '胎\n(태)', small: 'text-xs font-medium', large: 'text-base font-bold' },
    { text: '長生\n(장생)', small: 'text-xs font-medium', large: 'text-base font-bold' },
  ],

  // 7행 - 십이신살
  [
    { text: '十二神殺\n(십이신살)', small: 'text-xs font-medium', large: 'text-sm font-bold' },
    { text: '劫殺\n(겁살)', small: 'text-xs font-medium', large: 'text-base font-bold' },
    { text: '地殺\n(지살)', small: 'text-xs font-medium', large: 'text-base font-bold' },
    { text: '驛馬殺\n(역마살)', small: 'text-xs font-medium', large: 'text-base font-bold' },
    { text: '將星殺\n(장성살)', small: 'text-xs font-medium', large: 'text-base font-bold' },
  ],

  // 8행 - 귀인 (3개 항목이 들어가는 셀)
  [
    { text: '貴人\n(귀인)', small: 'text-xs font-medium', large: 'text-base font-bold' },
    { text: '(없음)', small: 'text-xs font-medium' },
    { text: '(없음)', small: 'text-xs font-medium' },
    { text: '天乙\n(천을귀인)', small: 'text-xs font-medium', large: 'text-base font-bold' },
    {
      text: '天乙\n(천을귀인)\n\n大極\n(태극귀인)\n\n文昌\n(문창귀인)',
      small: 'text-xs font-medium',
      large: 'text-base font-bold',
      multiLine: true,
    },
  ],
];

export const sajuInfo = {
  name: '김로켓',
  birthDate: '1980년 8월27일 08:10',
};
