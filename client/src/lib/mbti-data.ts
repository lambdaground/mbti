export type AgeGroup = 'elementary' | 'middle' | 'high' | 'adult';

export type Answer = 'A' | 'B' | 'C';

export interface ScenarioQuestion {
  id: number;
  scenario: string;
  situation?: string;
  optionA: { text: string; icon?: string };
  optionB: { text: string; icon?: string };
  optionC: { text: string; icon?: string };
  dimension: 'EI' | 'SN' | 'TF' | 'JP';
  scoring: { A: number; B: number; C: number };
  followUp?: {
    onA?: number[];
    onB?: number[];
    onC?: number[];
  };
}

export interface Question {
  id: number;
  text: string;
  optionA: string;
  optionB: string;
  optionC: string;
  dimension: 'EI' | 'SN' | 'TF' | 'JP';
  scoring: {
    A: number;
    B: number;
    C: number;
  };
}

export interface BehavioralScenario {
  situation: string;
  behavior: string;
}

export interface MBTIType {
  type: string;
  nickname: string;
  description: string;
  strengths: string[];
  activities: string[];
  animal: string;
  color: string;
  animalImage: string;
  careers: string[];
  hobbies: string[];
  loveStyle: string;
  behavioralScenarios: BehavioralScenario[];
}

export interface MBTIResult {
  primaryType: MBTIType;
  primaryPercentage: number;
  secondaryType: MBTIType;
  secondaryPercentage: number;
  dimensionScores: {
    EI: { score: number; percentage: number };
    SN: { score: number; percentage: number };
    TF: { score: number; percentage: number };
    JP: { score: number; percentage: number };
  };
}

export const ageGroupInfo: Record<AgeGroup, { label: string; subtitle: string; questionCount: number }> = {
  elementary: {
    label: '초등학생',
    subtitle: '16개의 재미있는 상황 질문',
    questionCount: 16
  },
  middle: {
    label: '중학생',
    subtitle: '20개의 상황 선택 질문',
    questionCount: 20
  },
  high: {
    label: '고등학생',
    subtitle: '20개의 깊이있는 질문',
    questionCount: 20
  },
  adult: {
    label: '성인',
    subtitle: '24개의 시나리오 질문',
    questionCount: 24
  }
};

export const scenarioQuestionsElementary: ScenarioQuestion[] = [
  {
    id: 1,
    scenario: '놀이공원에 왔어요! 어떻게 하고 싶어요?',
    situation: '신나는 놀이공원 입구에서',
    optionA: { text: '친구들 여러 명이랑 같이 돌아다녀요!', icon: 'users' },
    optionB: { text: '한두 명의 친한 친구랑 천천히 구경해요', icon: 'user' },
    optionC: { text: '혼자 가고 싶은 곳을 정해서 가요', icon: 'compass' },
    dimension: 'EI',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 2,
    scenario: '학교에서 새 짝꿍이 생겼어요!',
    situation: '자리 바꾸기 후 첫날',
    optionA: { text: '내가 먼저 말 걸고 친해져요', icon: 'hand' },
    optionB: { text: '상대방이 말 걸면 친하게 지내요', icon: 'message' },
    optionC: { text: '조용히 지켜보다가 천천히 친해져요', icon: 'eye' },
    dimension: 'EI',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 3,
    scenario: '마법의 그림책이 있어요. 어떤 책을 고를까요?',
    situation: '마법 도서관에서',
    optionA: { text: '용과 마법사가 나오는 판타지 이야기', icon: 'sparkles' },
    optionB: { text: '재미있는 동물 백과사전', icon: 'book' },
    optionC: { text: '실제 탐험가의 모험 이야기', icon: 'map' },
    dimension: 'SN',
    scoring: { A: -2, B: 0, C: 2 }
  },
  {
    id: 4,
    scenario: '레고로 뭔가를 만들려고 해요!',
    situation: '레고 놀이 시간',
    optionA: { text: '설명서대로 정확하게 만들어요', icon: 'clipboard' },
    optionB: { text: '설명서 보면서 조금씩 바꿔요', icon: 'edit' },
    optionC: { text: '상상하는 대로 마음대로 만들어요', icon: 'lightbulb' },
    dimension: 'SN',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 5,
    scenario: '친구가 울고 있어요. 어떻게 할까요?',
    situation: '쉬는 시간에 친구가 슬퍼보여요',
    optionA: { text: '옆에 앉아서 같이 슬퍼해줘요', icon: 'heart' },
    optionB: { text: '무슨 일인지 물어보고 이야기를 들어요', icon: 'ear' },
    optionC: { text: '선생님께 말씀드리거나 해결 방법을 찾아요', icon: 'target' },
    dimension: 'TF',
    scoring: { A: -2, B: 0, C: 2 }
  },
  {
    id: 6,
    scenario: '반장 선거가 있어요. 누구를 뽑을까요?',
    situation: '반장 선거 투표 시간',
    optionA: { text: '친하고 좋아하는 친구를 뽑아요', icon: 'heart' },
    optionB: { text: '잘 모르겠으면 여러 가지 생각해봐요', icon: 'thinking' },
    optionC: { text: '반장 일을 잘할 것 같은 친구를 뽑아요', icon: 'check' },
    dimension: 'TF',
    scoring: { A: -2, B: 0, C: 2 }
  },
  {
    id: 7,
    scenario: '내일 소풍이에요! 어떻게 준비할까요?',
    situation: '소풍 전날 밤',
    optionA: { text: '미리미리 가방에 다 챙겨놔요', icon: 'package' },
    optionB: { text: '중요한 것만 챙기고 아침에 마무리해요', icon: 'clock' },
    optionC: { text: '아침에 일어나서 챙겨요', icon: 'sun' },
    dimension: 'JP',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 8,
    scenario: '방학 숙제가 있어요!',
    situation: '방학 첫날',
    optionA: { text: '방학 시작하자마자 끝내버려요', icon: 'zap' },
    optionB: { text: '조금씩 나눠서 해요', icon: 'calendar' },
    optionC: { text: '방학 끝나기 전에 해요', icon: 'hourglass' },
    dimension: 'JP',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 9,
    scenario: '생일 파티를 열어요!',
    situation: '내 생일날',
    optionA: { text: '많은 친구들을 초대해서 시끌벅적하게!', icon: 'party' },
    optionB: { text: '적당한 친구들과 재미있게!', icon: 'cake' },
    optionC: { text: '가장 친한 친구 몇 명이랑 조용히!', icon: 'gift' },
    dimension: 'EI',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 10,
    scenario: '보물찾기 게임을 해요!',
    situation: '보물찾기 시작',
    optionA: { text: '힌트를 차근차근 따라가요', icon: 'footprints' },
    optionB: { text: '힌트도 보고 감도 써봐요', icon: 'compass' },
    optionC: { text: '직감으로 보물이 있을 것 같은 곳을 찾아요', icon: 'sparkle' },
    dimension: 'SN',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 11,
    scenario: '친구랑 게임에서 졌어요!',
    situation: '게임 끝난 후',
    optionA: { text: '분석해서 다음엔 이기겠다고 다짐해요', icon: 'chart' },
    optionB: { text: '아쉽지만 재미있었어요', icon: 'smile' },
    optionC: { text: '너무 속상해서 다시 하고 싶어요', icon: 'refresh' },
    dimension: 'TF',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 12,
    scenario: '갑자기 계획이 바뀌었어요!',
    situation: '놀러가기로 했는데 비가 와요',
    optionA: { text: '새로운 계획을 세우는 것도 재미있어요', icon: 'shuffle' },
    optionB: { text: '좀 아쉽지만 다른 거 해요', icon: 'droplet' },
    optionC: { text: '약속이 바뀌어서 속상해요', icon: 'cloud' },
    dimension: 'JP',
    scoring: { A: -2, B: 0, C: 2 }
  },
  {
    id: 13,
    scenario: '발표 순서가 왔어요!',
    situation: '반 친구들 앞에서 발표',
    optionA: { text: '신나요! 내 이야기를 들려줄 수 있어서!', icon: 'mic' },
    optionB: { text: '긴장되지만 해볼 수 있어요', icon: 'thumbsup' },
    optionC: { text: '너무 떨려서 힘들어요', icon: 'nervous' },
    dimension: 'EI',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 14,
    scenario: '미래에 어떤 사람이 되고 싶어요?',
    situation: '꿈을 상상할 때',
    optionA: { text: '마법사나 우주 비행사 같은 특별한 일!', icon: 'rocket' },
    optionB: { text: '재미있는 일이면 뭐든지 좋아요', icon: 'star' },
    optionC: { text: '선생님이나 의사 같은 도움이 되는 일!', icon: 'briefcase' },
    dimension: 'SN',
    scoring: { A: -2, B: 0, C: 2 }
  },
  {
    id: 15,
    scenario: '친구가 실수를 했어요!',
    situation: '친구가 넘어져서 물을 쏟았어요',
    optionA: { text: '괜찮은지 먼저 물어봐요', icon: 'heart' },
    optionB: { text: '같이 치우자고 해요', icon: 'hands' },
    optionC: { text: '빨리 휴지를 가져와요', icon: 'tissue' },
    dimension: 'TF',
    scoring: { A: -2, B: 0, C: 2 }
  },
  {
    id: 16,
    scenario: '내 방을 꾸며요!',
    situation: '방 정리 시간',
    optionA: { text: '모든 물건 자리를 정해서 깔끔하게!', icon: 'grid' },
    optionB: { text: '대충 정리하고 편하게!', icon: 'cozy' },
    optionC: { text: '내 스타일대로 자유롭게!', icon: 'palette' },
    dimension: 'JP',
    scoring: { A: 2, B: 0, C: -2 }
  }
];

export const scenarioQuestionsMiddle: ScenarioQuestion[] = [
  {
    id: 1,
    scenario: '주말에 갑자기 자유 시간이 생겼어요!',
    situation: '토요일 오후, 할 일이 없는 날',
    optionA: { text: '친구들에게 연락해서 뭐 할지 정해요', icon: 'phone' },
    optionB: { text: '기분에 따라 결정해요', icon: 'shuffle' },
    optionC: { text: '집에서 좋아하는 것을 하면서 쉬어요', icon: 'home' },
    dimension: 'EI',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 2,
    scenario: '새 학기 첫날, 모르는 애들뿐이에요!',
    situation: '교실에 들어섰을 때',
    optionA: { text: '옆자리에 먼저 인사하고 말을 걸어요', icon: 'wave' },
    optionB: { text: '누가 말 걸면 반갑게 대해요', icon: 'smile' },
    optionC: { text: '조용히 앉아서 상황을 지켜봐요', icon: 'eye' },
    dimension: 'EI',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 3,
    scenario: '단체 카톡방이 활발해요!',
    situation: '친구들이 수다를 떨고 있어요',
    optionA: { text: '적극적으로 대화에 참여해요', icon: 'chat' },
    optionB: { text: '가끔 리액션만 해요', icon: 'thumbsup' },
    optionC: { text: '읽기만 하고 필요할 때만 답해요', icon: 'eyeglasses' },
    dimension: 'EI',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 4,
    scenario: '영화를 골라야 해요!',
    situation: '친구들이랑 넷플릭스 볼 때',
    optionA: { text: 'SF나 판타지 같은 상상의 세계 이야기', icon: 'rocket' },
    optionB: { text: '재미있으면 장르 상관없어요', icon: 'popcorn' },
    optionC: { text: '실화 기반이나 현실적인 스토리', icon: 'film' },
    dimension: 'SN',
    scoring: { A: -2, B: 0, C: 2 }
  },
  {
    id: 5,
    scenario: '시험 공부를 해야 해요!',
    situation: '시험 일주일 전',
    optionA: { text: '교과서 내용을 꼼꼼히 암기해요', icon: 'book' },
    optionB: { text: '중요한 부분 위주로 정리해요', icon: 'highlight' },
    optionC: { text: '전체적인 흐름과 연결고리를 파악해요', icon: 'connect' },
    dimension: 'SN',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 6,
    scenario: '진로를 생각해봐야 해요!',
    situation: '미래에 대해 고민할 때',
    optionA: { text: '안정적이고 확실한 직업을 원해요', icon: 'shield' },
    optionB: { text: '아직 잘 모르겠어요', icon: 'thinking' },
    optionC: { text: '새롭고 창의적인 분야가 끌려요', icon: 'lightbulb' },
    dimension: 'SN',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 7,
    scenario: '친구가 속상한 일이 있대요!',
    situation: '친구가 고민을 말해줬어요',
    optionA: { text: '어떻게 하면 좋을지 해결책을 같이 찾아요', icon: 'puzzle' },
    optionB: { text: '이야기를 들어주며 공감해줘요', icon: 'ear' },
    optionC: { text: '같이 슬퍼하면서 위로해줘요', icon: 'hug' },
    dimension: 'TF',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 8,
    scenario: '모둠 과제에서 의견이 갈려요!',
    situation: '팀원들이 다른 의견을 가지고 있어요',
    optionA: { text: '논리적으로 가장 좋은 방법을 설득해요', icon: 'scale' },
    optionB: { text: '다들 의견을 들어보고 절충해요', icon: 'handshake' },
    optionC: { text: '분위기가 안 좋아지지 않게 조율해요', icon: 'peace' },
    dimension: 'TF',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 9,
    scenario: '점수가 기대보다 낮게 나왔어요!',
    situation: '시험 결과를 받았을 때',
    optionA: { text: '왜 틀렸는지 분석하고 다음에 더 잘해요', icon: 'chart' },
    optionB: { text: '아쉽지만 다음에 잘하면 돼요', icon: 'refresh' },
    optionC: { text: '속상하고 우울해져요', icon: 'cloud' },
    dimension: 'TF',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 10,
    scenario: '프로젝트 마감이 다가와요!',
    situation: '제출 3일 전',
    optionA: { text: '이미 거의 다 끝냈어요', icon: 'check' },
    optionB: { text: '지금부터 본격적으로 해요', icon: 'play' },
    optionC: { text: '마감 전날 집중해서 해요', icon: 'fire' },
    dimension: 'JP',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 11,
    scenario: '방학 계획을 세워요!',
    situation: '방학이 시작되기 전',
    optionA: { text: '할 일 목록과 일정표를 만들어요', icon: 'calendar' },
    optionB: { text: '대략적인 계획만 세워요', icon: 'note' },
    optionC: { text: '그때그때 하고 싶은 걸 해요', icon: 'wind' },
    dimension: 'JP',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 12,
    scenario: '갑자기 약속이 취소됐어요!',
    situation: '친구가 갑자기 못 만나게 됐어요',
    optionA: { text: '오히려 좋아! 다른 거 할 수 있어요', icon: 'sparkle' },
    optionB: { text: '아쉽지만 괜찮아요', icon: 'ok' },
    optionC: { text: '기대했는데 좀 짜증나요', icon: 'annoyed' },
    dimension: 'JP',
    scoring: { A: -2, B: 0, C: 2 }
  },
  {
    id: 13,
    scenario: '에너지가 필요해요!',
    situation: '지친 하루 끝에',
    optionA: { text: '친구들 만나서 수다 떨면 충전돼요', icon: 'bolt' },
    optionB: { text: '상황에 따라 달라요', icon: 'battery' },
    optionC: { text: '혼자 조용히 쉬면 충전돼요', icon: 'moon' },
    dimension: 'EI',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 14,
    scenario: '새로운 취미를 시작해요!',
    situation: '관심 있는 것을 찾을 때',
    optionA: { text: '실용적이고 도움이 되는 것을 배워요', icon: 'tool' },
    optionB: { text: '재미있어 보이면 해봐요', icon: 'star' },
    optionC: { text: '독특하고 창의적인 것이 끌려요', icon: 'palette' },
    dimension: 'SN',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 15,
    scenario: '친구가 약속을 어겼어요!',
    situation: '기다렸는데 친구가 안 왔어요',
    optionA: { text: '화가 나지만 이유를 물어봐요', icon: 'question' },
    optionB: { text: '다음엔 이러지 말라고 해요', icon: 'warning' },
    optionC: { text: '무슨 일이 있었나 걱정돼요', icon: 'heart' },
    dimension: 'TF',
    scoring: { A: 0, B: 2, C: -2 }
  },
  {
    id: 16,
    scenario: '내 방 책상은...',
    situation: '평소 책상 상태',
    optionA: { text: '항상 깔끔하게 정리되어 있어요', icon: 'sparkles' },
    optionB: { text: '쓰다가 가끔 정리해요', icon: 'layers' },
    optionC: { text: '나만 알아보는 나만의 스타일이에요', icon: 'chaos' },
    dimension: 'JP',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 17,
    scenario: '대화할 때 더 재미있는 것은?',
    situation: '친구들이랑 이야기할 때',
    optionA: { text: '미래에 대한 상상이나 아이디어', icon: 'crystal' },
    optionB: { text: '다양한 주제 다 좋아요', icon: 'chat' },
    optionC: { text: '실제 있었던 일이나 경험', icon: 'story' },
    dimension: 'SN',
    scoring: { A: -2, B: 0, C: 2 }
  },
  {
    id: 18,
    scenario: '칭찬을 받았어요!',
    situation: '선생님이 칭찬해주셨어요',
    optionA: { text: '뿌듯하고 더 잘하고 싶어요', icon: 'medal' },
    optionB: { text: '기분이 좋아요', icon: 'smile' },
    optionC: { text: '어색하고 부끄러워요', icon: 'blush' },
    dimension: 'TF',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 19,
    scenario: '결정을 내려야 해요!',
    situation: '중요한 선택의 순간',
    optionA: { text: '빨리 결정하고 행동해요', icon: 'zap' },
    optionB: { text: '적당히 고민하고 결정해요', icon: 'scale' },
    optionC: { text: '여러 가능성을 열어두고 천천히 결정해요', icon: 'hourglass' },
    dimension: 'JP',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 20,
    scenario: '수업 시간에 발표해요!',
    situation: '선생님이 발표할 사람을 찾아요',
    optionA: { text: '손 들고 나가서 발표해요', icon: 'hand' },
    optionB: { text: '시키면 해요', icon: 'ok' },
    optionC: { text: '되도록 안 하고 싶어요', icon: 'hide' },
    dimension: 'EI',
    scoring: { A: 2, B: 0, C: -2 }
  }
];

export const scenarioQuestionsHigh: ScenarioQuestion[] = [
  {
    id: 1,
    scenario: '금요일 밤, 뭘 할까요?',
    situation: '일주일의 끝, 자유 시간',
    optionA: { text: '친구들이랑 나가서 놀아요', icon: 'party' },
    optionB: { text: '기분 따라 정해요', icon: 'dice' },
    optionC: { text: '집에서 혼자만의 시간을 가져요', icon: 'couch' },
    dimension: 'EI',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 2,
    scenario: 'SNS에 올릴 사진이 있어요!',
    situation: '여행에서 좋은 사진을 찍었어요',
    optionA: { text: '바로 올리고 친구들 반응을 봐요', icon: 'share' },
    optionB: { text: '가끔 올려요', icon: 'camera' },
    optionC: { text: '올리는 것보다 보는 게 좋아요', icon: 'eye' },
    dimension: 'EI',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 3,
    scenario: '수행평가 모둠이 정해졌어요!',
    situation: '첫 모둠 회의',
    optionA: { text: '회의를 이끌고 역할을 정해요', icon: 'leader' },
    optionB: { text: '의견을 내고 참여해요', icon: 'comment' },
    optionC: { text: '맡은 역할을 조용히 수행해요', icon: 'work' },
    dimension: 'EI',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 4,
    scenario: '진로 고민 중이에요!',
    situation: '진로진학상담 시간',
    optionA: { text: '안정적이고 확실한 진로가 좋아요', icon: 'shield' },
    optionB: { text: '여러 가지를 고려 중이에요', icon: 'options' },
    optionC: { text: '새롭고 도전적인 분야가 끌려요', icon: 'rocket' },
    dimension: 'SN',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 5,
    scenario: '수업 내용을 이해할 때...',
    situation: '새로운 개념을 배울 때',
    optionA: { text: '구체적인 예시가 있어야 이해돼요', icon: 'example' },
    optionB: { text: '둘 다 필요해요', icon: 'balance' },
    optionC: { text: '전체적인 개념부터 잡으면 이해돼요', icon: 'concept' },
    dimension: 'SN',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 6,
    scenario: '에세이를 쓸 때...',
    situation: '글쓰기 과제',
    optionA: { text: '비유와 상상력을 많이 써요', icon: 'feather' },
    optionB: { text: '주제에 따라 달라요', icon: 'pen' },
    optionC: { text: '사실과 데이터를 바탕으로 써요', icon: 'data' },
    dimension: 'SN',
    scoring: { A: -2, B: 0, C: 2 }
  },
  {
    id: 7,
    scenario: '친구가 잘못된 선택을 하려 해요!',
    situation: '충고가 필요한 상황',
    optionA: { text: '솔직하게 왜 안 되는지 말해요', icon: 'honest' },
    optionB: { text: '돌려서 조심스럽게 말해요', icon: 'careful' },
    optionC: { text: '감정을 먼저 공감해주고 말해요', icon: 'heart' },
    dimension: 'TF',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 8,
    scenario: '토론 수업 시간!',
    situation: '의견이 대립하는 주제',
    optionA: { text: '논리적으로 상대 의견을 반박해요', icon: 'debate' },
    optionB: { text: '양쪽 의견을 듣고 판단해요', icon: 'listen' },
    optionC: { text: '서로 감정이 상하지 않게 조율해요', icon: 'peace' },
    dimension: 'TF',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 9,
    scenario: '친구가 시험을 망쳤대요!',
    situation: '위로가 필요한 순간',
    optionA: { text: '"다음엔 이렇게 하면 돼"라고 조언해요', icon: 'advice' },
    optionB: { text: '"속상하지? 다음엔 잘 될 거야"라고 해요', icon: 'support' },
    optionC: { text: '"많이 힘들지?"라며 같이 아파해요', icon: 'hug' },
    dimension: 'TF',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 10,
    scenario: '수능이 100일 남았어요!',
    situation: 'D-100',
    optionA: { text: '세부 계획표를 세우고 따라가요', icon: 'plan' },
    optionB: { text: '대략적인 목표를 정해요', icon: 'goal' },
    optionC: { text: '그날그날 컨디션 따라 공부해요', icon: 'flow' },
    dimension: 'JP',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 11,
    scenario: '과제 마감이 내일이에요!',
    situation: '아직 시작 안 함',
    optionA: { text: '이런 일은 거의 없어요, 미리 해요', icon: 'never' },
    optionB: { text: '오늘 밤새서 끝내요', icon: 'night' },
    optionC: { text: '압박감이 있어야 집중이 돼요', icon: 'pressure' },
    dimension: 'JP',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 12,
    scenario: '여행 스타일은?',
    situation: '여행 계획을 세울 때',
    optionA: { text: '일정표와 예약을 미리 다 해요', icon: 'itinerary' },
    optionB: { text: '대략적인 틀만 잡아요', icon: 'outline' },
    optionC: { text: '현지에서 즉흥적으로 정해요', icon: 'spontaneous' },
    dimension: 'JP',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 13,
    scenario: '스트레스 받을 때...',
    situation: '힘든 하루를 보냈어요',
    optionA: { text: '친구랑 만나서 수다 떨어요', icon: 'chat' },
    optionB: { text: '그때그때 달라요', icon: 'variable' },
    optionC: { text: '혼자 음악 듣거나 산책해요', icon: 'headphones' },
    dimension: 'EI',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 14,
    scenario: '관심있는 분야는?',
    situation: '뭔가 새로운 걸 배울 때',
    optionA: { text: '실용적이고 현실적인 것', icon: 'practical' },
    optionB: { text: '다양한 분야', icon: 'diverse' },
    optionC: { text: '이론적이고 추상적인 것', icon: 'abstract' },
    dimension: 'SN',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 15,
    scenario: '중요한 결정을 내릴 때...',
    situation: '선택의 갈림길',
    optionA: { text: '장단점을 논리적으로 분석해요', icon: 'analyze' },
    optionB: { text: '이성과 감정 둘 다 고려해요', icon: 'both' },
    optionC: { text: '마음이 가는 대로 결정해요', icon: 'heart' },
    dimension: 'TF',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 16,
    scenario: '계획이 갑자기 바뀌면...',
    situation: '예상치 못한 변화',
    optionA: { text: '유연하게 적응해요', icon: 'flexible' },
    optionB: { text: '좀 불편하지만 괜찮아요', icon: 'okay' },
    optionC: { text: '스트레스 받아요', icon: 'stress' },
    dimension: 'JP',
    scoring: { A: -2, B: 0, C: 2 }
  },
  {
    id: 17,
    scenario: '파티에 초대받았어요!',
    situation: '처음 보는 사람이 많은 파티',
    optionA: { text: '새로운 사람들 만나는 게 신나요', icon: 'excited' },
    optionB: { text: '아는 사람 위주로 어울려요', icon: 'familiar' },
    optionC: { text: '사람 많은 데 가는 게 피곤해요', icon: 'tired' },
    dimension: 'EI',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 18,
    scenario: '새로운 것을 배울 때...',
    situation: '처음 접하는 분야',
    optionA: { text: '직접 해보면서 배워요', icon: 'hands' },
    optionB: { text: '설명 듣고 해봐요', icon: 'listen' },
    optionC: { text: '원리를 먼저 이해하려고 해요', icon: 'think' },
    dimension: 'SN',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 19,
    scenario: '피드백을 줄 때...',
    situation: '친구의 작품에 의견을 달라고 해요',
    optionA: { text: '좋은 점과 아쉬운 점을 솔직히 말해요', icon: 'honest' },
    optionB: { text: '장점 위주로 말하고 조심스럽게 제안해요', icon: 'gentle' },
    optionC: { text: '격려 위주로 말해요', icon: 'encourage' },
    dimension: 'TF',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 20,
    scenario: '인생의 방향에 대해...',
    situation: '미래를 생각할 때',
    optionA: { text: '명확한 계획과 목표가 있어요', icon: 'target' },
    optionB: { text: '대략적인 방향은 있어요', icon: 'compass' },
    optionC: { text: '열린 마음으로 흘러가는 대로 살아요', icon: 'wave' },
    dimension: 'JP',
    scoring: { A: 2, B: 0, C: -2 }
  }
];

export const scenarioQuestionsAdult: ScenarioQuestion[] = [
  {
    id: 1,
    scenario: '금요일 저녁, 퇴근 후 뭘 할까요?',
    situation: '일주일의 피로가 쌓인 금요일 밤',
    optionA: { text: '친구들과 약속을 잡아 외출해요', icon: 'wine' },
    optionB: { text: '기분에 따라 결정해요', icon: 'dice' },
    optionC: { text: '집에서 넷플릭스 보며 쉬어요', icon: 'couch' },
    dimension: 'EI',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 2,
    scenario: '회식 자리에서 당신은...',
    situation: '팀 회식, 20명 정도의 자리',
    optionA: { text: '여러 테이블을 돌며 다양한 사람과 대화해요', icon: 'social' },
    optionB: { text: '옆자리 사람들과 적당히 대화해요', icon: 'chat' },
    optionC: { text: '친한 동료들과만 조용히 대화해요', icon: 'whisper' },
    dimension: 'EI',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 3,
    scenario: '새로운 프로젝트 킥오프 미팅!',
    situation: '처음 만나는 팀원들과의 첫 회의',
    optionA: { text: '적극적으로 아이디어를 제안해요', icon: 'bulb' },
    optionB: { text: '분위기 보며 적절히 참여해요', icon: 'observe' },
    optionC: { text: '경청하며 메모하고 나중에 의견을 정리해요', icon: 'note' },
    dimension: 'EI',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 4,
    scenario: '새 업무를 맡았어요!',
    situation: '처음 해보는 종류의 업무',
    optionA: { text: '기존 사례와 매뉴얼을 먼저 찾아봐요', icon: 'manual' },
    optionB: { text: '대략 파악하고 하면서 배워요', icon: 'learn' },
    optionC: { text: '새로운 접근법을 시도해봐요', icon: 'innovate' },
    dimension: 'SN',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 5,
    scenario: '커리어 방향을 고민해요',
    situation: '이직이나 진로 전환을 생각할 때',
    optionA: { text: '안정적이고 검증된 분야가 좋아요', icon: 'stable' },
    optionB: { text: '여러 가능성을 열어두고 있어요', icon: 'options' },
    optionC: { text: '새롭고 도전적인 분야가 끌려요', icon: 'adventure' },
    dimension: 'SN',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 6,
    scenario: '보고서를 작성해요!',
    situation: '주간 업무 보고',
    optionA: { text: '구체적인 숫자와 사실 위주로 써요', icon: 'data' },
    optionB: { text: '적절히 섞어서 써요', icon: 'balance' },
    optionC: { text: '인사이트와 전략적 제안을 중심으로 써요', icon: 'insight' },
    dimension: 'SN',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 7,
    scenario: '동료가 힘들어 보여요',
    situation: '옆자리 동료가 우울해 보여요',
    optionA: { text: '구체적인 도움을 제안해요', icon: 'help' },
    optionB: { text: '커피 마시며 이야기를 들어줘요', icon: 'coffee' },
    optionC: { text: '공감하며 위로해줘요', icon: 'hug' },
    dimension: 'TF',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 8,
    scenario: '팀 내 갈등이 생겼어요!',
    situation: '두 동료 사이에 의견 충돌',
    optionA: { text: '객관적으로 옳고 그름을 판단해요', icon: 'scale' },
    optionB: { text: '양쪽 의견을 듣고 절충안을 찾아요', icon: 'mediate' },
    optionC: { text: '관계가 상하지 않게 분위기를 조율해요', icon: 'peace' },
    dimension: 'TF',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 9,
    scenario: '부정적인 피드백을 받았어요',
    situation: '업무 평가에서 개선점을 지적받음',
    optionA: { text: '어떤 점을 고쳐야 하는지 분석해요', icon: 'analyze' },
    optionB: { text: '참고해서 개선하려고 해요', icon: 'improve' },
    optionC: { text: '기분이 좀 상하지만 받아들여요', icon: 'accept' },
    dimension: 'TF',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 10,
    scenario: '중요한 프레젠테이션이 있어요!',
    situation: 'D-7, 발표 준비 중',
    optionA: { text: '미리 세세하게 준비하고 리허설해요', icon: 'rehearse' },
    optionB: { text: '핵심만 준비하고 나머지는 즉석에서', icon: 'outline' },
    optionC: { text: '대략적인 방향만 잡고 즉흥적으로 해요', icon: 'improv' },
    dimension: 'JP',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 11,
    scenario: '휴가 계획을 세워요!',
    situation: '일주일 휴가',
    optionA: { text: '일정표와 예약을 미리 다 해요', icon: 'plan' },
    optionB: { text: '숙소만 정하고 나머지는 현지에서', icon: 'semiflex' },
    optionC: { text: '즉흥적으로 그날그날 정해요', icon: 'spontaneous' },
    dimension: 'JP',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 12,
    scenario: '갑자기 미팅이 취소됐어요!',
    situation: '오후에 빈 시간이 생김',
    optionA: { text: '다른 할 일을 빠르게 정리해요', icon: 'replan' },
    optionB: { text: '자유 시간이 생겨서 좋아요', icon: 'relax' },
    optionC: { text: '준비했던 게 헛수고가 되어 약간 짜증나요', icon: 'annoyed' },
    dimension: 'JP',
    scoring: { A: 0, B: -2, C: 2 }
  },
  {
    id: 13,
    scenario: '주말에 에너지를 충전해요!',
    situation: '쉬는 날',
    optionA: { text: '친구들 만나서 활동적으로 보내요', icon: 'active' },
    optionB: { text: '균형있게 보내요', icon: 'balance' },
    optionC: { text: '집에서 조용히 재충전해요', icon: 'recharge' },
    dimension: 'EI',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 14,
    scenario: '새로운 정보를 접할 때...',
    situation: '뉴스나 책을 읽을 때',
    optionA: { text: '구체적인 사실과 데이터에 집중해요', icon: 'facts' },
    optionB: { text: '전체적으로 파악해요', icon: 'overview' },
    optionC: { text: '숨겨진 의미와 패턴을 찾아요', icon: 'pattern' },
    dimension: 'SN',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 15,
    scenario: '연인과 다퉜어요!',
    situation: '의견 충돌 상황',
    optionA: { text: '논리적으로 설명하고 이해시켜요', icon: 'explain' },
    optionB: { text: '차분히 대화하려고 해요', icon: 'talk' },
    optionC: { text: '먼저 상대방 감정을 달래줘요', icon: 'comfort' },
    dimension: 'TF',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 16,
    scenario: '마감이 촉박해요!',
    situation: '업무 마감 2일 전',
    optionA: { text: '미리미리 해서 이미 거의 다 됐어요', icon: 'done' },
    optionB: { text: '지금부터 집중해서 해요', icon: 'focus' },
    optionC: { text: '압박감이 있어야 집중이 돼요', icon: 'pressure' },
    dimension: 'JP',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 17,
    scenario: '네트워킹 행사에 참석해요!',
    situation: '업계 컨퍼런스',
    optionA: { text: '적극적으로 명함 교환하며 인맥을 넓혀요', icon: 'network' },
    optionB: { text: '관심 있는 분야 사람들과 대화해요', icon: 'selective' },
    optionC: { text: '세션만 듣고 조용히 돌아와요', icon: 'observe' },
    dimension: 'EI',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 18,
    scenario: '신규 사업 아이디어를 내야 해요!',
    situation: '브레인스토밍 회의',
    optionA: { text: '검증된 사례를 바탕으로 제안해요', icon: 'proven' },
    optionB: { text: '현실성과 창의성을 균형있게 고려해요', icon: 'balanced' },
    optionC: { text: '혁신적이고 파격적인 아이디어를 내요', icon: 'disrupt' },
    dimension: 'SN',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 19,
    scenario: '후배가 실수를 했어요!',
    situation: '업무상 실수를 발견함',
    optionA: { text: '직접적으로 문제점을 알려줘요', icon: 'direct' },
    optionB: { text: '개선점을 부드럽게 제안해요', icon: 'gentle' },
    optionC: { text: '기분 상하지 않게 돌려서 말해요', icon: 'careful' },
    dimension: 'TF',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 20,
    scenario: '책상 정리 스타일은?',
    situation: '평소 업무 공간',
    optionA: { text: '항상 깔끔하게 정돈되어 있어요', icon: 'tidy' },
    optionB: { text: '가끔 정리해요', icon: 'sometimes' },
    optionC: { text: '나만 알아보는 나만의 시스템이에요', icon: 'chaos' },
    dimension: 'JP',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 21,
    scenario: '혼자 밥 먹기 vs 함께 먹기',
    situation: '점심 시간',
    optionA: { text: '동료들과 같이 먹는 게 좋아요', icon: 'together' },
    optionB: { text: '상황에 따라 달라요', icon: 'flexible' },
    optionC: { text: '혼밥도 편하고 좋아요', icon: 'solo' },
    dimension: 'EI',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 22,
    scenario: '변화가 찾아왔어요!',
    situation: '조직 개편이나 업무 변경',
    optionA: { text: '익숙한 것이 좋지만 적응해요', icon: 'adapt' },
    optionB: { text: '필요한 변화라면 받아들여요', icon: 'accept' },
    optionC: { text: '새로운 변화가 오히려 설레요', icon: 'excited' },
    dimension: 'SN',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 23,
    scenario: '리더로서 가장 중요한 것은?',
    situation: '팀을 이끌 때',
    optionA: { text: '목표 달성과 효율성', icon: 'goal' },
    optionB: { text: '균형 있는 운영', icon: 'balance' },
    optionC: { text: '팀원들의 감정과 동기부여', icon: 'motivate' },
    dimension: 'TF',
    scoring: { A: 2, B: 0, C: -2 }
  },
  {
    id: 24,
    scenario: '인생의 방향에 대해...',
    situation: '장기적인 삶의 계획',
    optionA: { text: '5년, 10년 계획이 있어요', icon: 'longterm' },
    optionB: { text: '대략적인 방향은 있어요', icon: 'direction' },
    optionC: { text: '흘러가는 대로 유연하게 살아요', icon: 'flow' },
    dimension: 'JP',
    scoring: { A: 2, B: 0, C: -2 }
  }
];

export const mbtiTypes: Record<string, MBTIType> = {
  INTJ: {
    type: 'INTJ',
    nickname: '전략적인 사색가',
    description: '독립적이고 전략적인 사고를 가진 사람이에요. 혼자서 깊이 생각하는 것을 좋아하고, 목표를 세우면 끝까지 달성하려고 노력해요. 지식을 쌓는 것을 좋아하며, 미래를 계획하는 것에 뛰어나요.',
    strengths: ['논리적 사고력', '장기적 계획 수립', '독립적 학습 능력', '문제 해결 능력'],
    activities: ['과학 실험하기', '퍼즐이나 전략 게임', '책 읽기', '미래 계획 세우기'],
    animal: '올빼미',
    color: 'from-indigo-500 to-purple-600',
    animalImage: 'intj_wise_owl_mascot.png',
    careers: ['연구원', '데이터 과학자', '전략 컨설턴트', '소프트웨어 아키텍트', '투자 분석가'],
    hobbies: ['체스', '독서', '다큐멘터리 감상', '프로그래밍', '미래 계획 세우기'],
    loveStyle: '사랑에도 전략적이에요. 감정 표현은 서툴지만, 한번 마음을 정하면 끝까지 신뢰하고 지지해요. 깊은 대화와 지적인 교류를 통해 친밀감을 느껴요.',
    behavioralScenarios: [
      { situation: '회의에서 의견 충돌이 생기면', behavior: '논리적 근거를 차분하게 제시하며, 감정적 대응은 피해요' },
      { situation: '친구가 갑자기 계획을 바꾸면', behavior: '약간 불편하지만 이유를 듣고 논리적으로 판단해요' },
      { situation: '새로운 프로젝트를 맡으면', behavior: '먼저 전체 그림을 그리고 세부 계획을 세워요' }
    ]
  },
  INTP: {
    type: 'INTP',
    nickname: '호기심 많은 탐구가',
    description: '끝없는 호기심으로 세상을 탐구하는 사람이에요. "왜?"라는 질문을 자주 하고, 새로운 아이디어를 생각해내는 것을 좋아해요. 논리적이고 분석적인 사고를 가지고 있어요.',
    strengths: ['분석적 사고', '창의적 문제 해결', '이론적 이해력', '객관적 판단'],
    activities: ['코딩이나 프로그래밍', '수학 문제 풀기', '과학 다큐멘터리 보기', '발명품 구상하기'],
    animal: '부엉이',
    color: 'from-cyan-500 to-blue-600',
    animalImage: 'intp_curious_owl_mascot.png',
    careers: ['소프트웨어 개발자', '과학자', '철학자', '분석가', '교수'],
    hobbies: ['코딩', '퍼즐 게임', '위키피디아 서핑', '이론 연구', '토론'],
    loveStyle: '연애에서도 지적인 연결을 중요시해요. 감정 표현이 서툴러 오해받기도 하지만, 상대방을 이해하려는 노력을 꾸준히 해요.',
    behavioralScenarios: [
      { situation: '흥미로운 주제를 발견하면', behavior: '몇 시간이고 깊이 파고들며 연구해요' },
      { situation: '감정적인 상황에 놓이면', behavior: '일단 한 발 물러서서 객관적으로 분석하려고 해요' },
      { situation: '규칙이 비효율적으로 느껴지면', behavior: '왜 그런 규칙이 있는지 질문하고 개선점을 제안해요' }
    ]
  },
  ENTJ: {
    type: 'ENTJ',
    nickname: '타고난 리더',
    description: '자신감 있고 카리스마가 넘치는 리더예요. 팀을 이끌고 목표를 달성하는 것을 좋아해요. 효율적이고 결단력 있게 일을 처리하며, 다른 사람들에게 동기를 부여하는 능력이 뛰어나요.',
    strengths: ['리더십', '결단력', '효율적인 계획', '설득력'],
    activities: ['팀 프로젝트 이끌기', '토론하기', '목표 세우고 달성하기', '새로운 것 배우기'],
    animal: '사자',
    color: 'from-amber-500 to-orange-600',
    animalImage: 'entj_lion_leader_mascot.png',
    careers: ['CEO', '경영 컨설턴트', '변호사', '정치인', '사업가'],
    hobbies: ['골프', '네트워킹', '자기계발', '전략 게임', '멘토링'],
    loveStyle: '연애에서도 리더십을 발휘해요. 상대방의 성장을 응원하고, 함께 목표를 향해 나아가는 관계를 원해요. 솔직하고 직접적인 소통을 선호해요.',
    behavioralScenarios: [
      { situation: '팀 프로젝트에서', behavior: '자연스럽게 리더 역할을 맡고 방향을 제시해요' },
      { situation: '비효율적인 상황을 보면', behavior: '즉시 개선 방안을 제안하고 실행해요' },
      { situation: '목표가 생기면', behavior: '구체적인 실행 계획을 세우고 끝까지 밀어붙여요' }
    ]
  },
  ENTP: {
    type: 'ENTP',
    nickname: '창의적인 도전가',
    description: '새로운 아이디어와 가능성을 탐험하는 것을 좋아해요. 토론을 즐기고, 다양한 관점에서 생각하는 능력이 뛰어나요. 창의적이고 재치있으며, 문제를 새로운 방식으로 해결해요.',
    strengths: ['창의력', '빠른 적응력', '토론 능력', '다양한 관점 이해'],
    activities: ['새로운 아이디어 발표하기', '토론 대회', '브레인스토밍', '발명하기'],
    animal: '여우',
    color: 'from-rose-500 to-pink-600',
    animalImage: 'entp_clever_fox_mascot.png',
    careers: ['기업가', '마케터', '변호사', '발명가', '코미디언'],
    hobbies: ['토론', '새로운 취미 시도', '스타트업 아이디어 구상', '여행', '즉흥 코미디'],
    loveStyle: '연애도 지루함을 싫어해요. 상대방과 끊임없이 새로운 것을 시도하고, 지적인 대화를 즐겨요. 자유로운 관계를 선호하지만 깊은 유대감도 원해요.',
    behavioralScenarios: [
      { situation: '누군가 "불가능해"라고 하면', behavior: '"정말? 왜?"라고 물으며 가능성을 찾아요' },
      { situation: '새로운 규칙이 생기면', behavior: '일단 왜 그런 규칙이 필요한지 따져봐요' },
      { situation: '아이디어가 떠오르면', behavior: '즉시 누군가와 공유하며 발전시켜요' }
    ]
  },
  INFJ: {
    type: 'INFJ',
    nickname: '통찰력 있는 이상주의자',
    description: '깊은 통찰력으로 사람들의 마음을 이해해요. 조용하지만 확고한 가치관을 가지고 있고, 다른 사람들을 돕는 것에서 의미를 찾아요. 창의적이고 이상적인 비전을 가지고 있어요.',
    strengths: ['공감 능력', '통찰력', '창의적 사고', '헌신적인 태도'],
    activities: ['글쓰기', '봉사 활동', '예술 감상', '깊은 대화 나누기'],
    animal: '늑대',
    color: 'from-emerald-500 to-teal-600',
    animalImage: 'infj_wise_wolf_mascot.png',
    careers: ['상담사', '작가', '심리학자', 'NPO 활동가', '교육자'],
    hobbies: ['일기 쓰기', '명상', '봉사 활동', '예술 감상', '심리학 공부'],
    loveStyle: '깊고 의미 있는 관계를 원해요. 상대방의 영혼까지 이해하려 하고, 진정한 연결을 추구해요. 표면적인 관계보다 깊은 유대감을 중요시해요.',
    behavioralScenarios: [
      { situation: '친구가 말 안 해도', behavior: '표정과 분위기만으로 기분을 읽어요' },
      { situation: '불의를 목격하면', behavior: '조용하지만 단호하게 목소리를 내요' },
      { situation: '혼자만의 시간이 필요하면', behavior: '사람들에게서 잠시 떨어져 재충전해요' }
    ]
  },
  INFP: {
    type: 'INFP',
    nickname: '꿈꾸는 이상주의자',
    description: '풍부한 상상력과 깊은 감정을 가진 사람이에요. 자신만의 가치관을 중요하게 여기고, 진정성 있는 삶을 추구해요. 예술적이고 창의적이며, 다른 사람들의 감정에 민감해요.',
    strengths: ['창의력', '공감 능력', '진정성', '적응력'],
    activities: ['시나 소설 쓰기', '음악 듣기', '예술 활동', '자연 속 산책'],
    animal: '유니콘',
    color: 'from-violet-500 to-purple-600',
    animalImage: 'infp_unicorn_dreamer_mascot.png',
    careers: ['작가', '예술가', '상담사', '그래픽 디자이너', 'UX 디자이너'],
    hobbies: ['글쓰기', '그림 그리기', '음악', '자연 속 산책', '명상'],
    loveStyle: '이상적인 사랑을 꿈꿔요. 진정한 영혼의 동반자를 찾고, 깊은 감정적 연결을 원해요. 로맨틱하고 헌신적이며, 상대방을 있는 그대로 받아들여요.',
    behavioralScenarios: [
      { situation: '마음에 안 드는 일을 해야 할 때', behavior: '가치관에 맞지 않으면 내면의 갈등을 겪어요' },
      { situation: '감동적인 영화를 보면', behavior: '등장인물에 완전히 몰입해서 함께 울어요' },
      { situation: '상상의 세계에 빠지면', behavior: '몇 시간이고 혼자만의 세계를 즐겨요' }
    ]
  },
  ENFJ: {
    type: 'ENFJ',
    nickname: '따뜻한 리더',
    description: '다른 사람들을 이끌고 격려하는 것을 좋아해요. 카리스마가 있고, 사람들의 잠재력을 이끌어내는 능력이 있어요. 조화롭고 따뜻한 관계를 중요하게 생각해요.',
    strengths: ['리더십', '공감 능력', '소통 능력', '동기 부여'],
    activities: ['멘토링 하기', '그룹 활동 이끌기', '봉사 활동', '이야기 나누기'],
    animal: '돌고래',
    color: 'from-sky-500 to-blue-600',
    animalImage: 'enfj_caring_dolphin_mascot.png',
    careers: ['교사', 'HR 매니저', '상담사', '코치', '정치인'],
    hobbies: ['멘토링', '사회 활동', '글쓰기', '요리해서 나누기', '네트워킹'],
    loveStyle: '사랑에 헌신적이에요. 상대방의 성장을 위해 노력하고, 깊은 감정적 연결을 추구해요. 상대방의 필요를 먼저 생각하는 경향이 있어요.',
    behavioralScenarios: [
      { situation: '팀원이 힘들어 보이면', behavior: '먼저 다가가서 이야기를 들어줘요' },
      { situation: '갈등 상황이 생기면', behavior: '모두가 화해할 수 있도록 조율해요' },
      { situation: '누군가의 잠재력을 발견하면', behavior: '격려하고 성장할 수 있도록 도와줘요' }
    ]
  },
  ENFP: {
    type: 'ENFP',
    nickname: '열정적인 탐험가',
    description: '에너지가 넘치고 열정적인 사람이에요! 새로운 사람을 만나고 새로운 경험을 하는 것을 좋아해요. 창의적이고 자유로우며, 긍정적인 에너지로 주변 사람들에게 영감을 줘요.',
    strengths: ['창의력', '사교성', '열정', '적응력'],
    activities: ['새로운 친구 사귀기', '창작 활동', '여행', '브레인스토밍'],
    animal: '나비',
    color: 'from-orange-500 to-yellow-500',
    animalImage: 'enfp_butterfly_explorer_mascot.png',
    careers: ['마케터', '배우', '작가', '기자', '이벤트 플래너'],
    hobbies: ['여행', '새로운 사람 만나기', '창작 활동', '파티 기획', '다양한 취미 시도'],
    loveStyle: '연애에 열정적이에요! 상대방과 함께 모험하고 새로운 경험을 공유하기를 원해요. 깊은 대화와 감정적 연결을 중요시하며, 자유롭지만 헌신적인 관계를 추구해요.',
    behavioralScenarios: [
      { situation: '새로운 사람을 만나면', behavior: '금방 친해지고 오랜 친구처럼 대화해요' },
      { situation: '재미있는 아이디어가 떠오르면', behavior: '즉시 실행하고 싶어서 안달이 나요' },
      { situation: '루틴한 일을 해야 할 때', behavior: '금방 지루해져서 새로운 방법을 찾아요' }
    ]
  },
  ISTJ: {
    type: 'ISTJ',
    nickname: '신뢰할 수 있는 책임자',
    description: '믿음직스럽고 책임감이 강한 사람이에요. 규칙을 잘 따르고, 맡은 일을 끝까지 완수해요. 체계적이고 꼼꼼하며, 실용적인 방식으로 문제를 해결해요.',
    strengths: ['책임감', '신뢰성', '체계적인 사고', '인내심'],
    activities: ['계획표 만들기', '컬렉션 정리하기', '역사 공부하기', '규칙적인 운동'],
    animal: '비버',
    color: 'from-slate-500 to-gray-600',
    animalImage: 'istj_beaver_worker_mascot.png',
    careers: ['회계사', '법률가', '공무원', '관리자', '엔지니어'],
    hobbies: ['등산', '역사 공부', '컬렉션', '정리정돈', '독서'],
    loveStyle: '연애에서도 신뢰와 안정을 중요시해요. 화려한 표현보다 꾸준한 행동으로 사랑을 보여줘요. 약속을 지키고, 장기적인 관계를 추구해요.',
    behavioralScenarios: [
      { situation: '일을 맡으면', behavior: '계획을 세우고 차근차근 완수해요' },
      { situation: '규칙을 어기는 사람을 보면', behavior: '왜 규칙이 있는지 설명하고 싶어져요' },
      { situation: '갑자기 계획이 바뀌면', behavior: '약간 스트레스 받지만 적응하려 노력해요' }
    ]
  },
  ISFJ: {
    type: 'ISFJ',
    nickname: '따뜻한 수호자',
    description: '다른 사람들을 돌보고 보호하는 것을 좋아해요. 세심하고 배려심이 깊으며, 조용히 헌신하는 타입이에요. 전통과 규칙을 존중하고, 안정적인 환경을 만들어요.',
    strengths: ['배려심', '신뢰성', '세심함', '헌신'],
    activities: ['친구 돕기', '요리하기', '정리정돈', '가족과 시간 보내기'],
    animal: '토끼',
    color: 'from-pink-400 to-rose-500',
    animalImage: 'isfj_caring_rabbit_mascot.png',
    careers: ['간호사', '교사', '사회복지사', '사서', '행정 담당자'],
    hobbies: ['요리', '베이킹', '정원 가꾸기', '수공예', '가족 모임'],
    loveStyle: '헌신적이고 따뜻한 사랑을 해요. 상대방의 필요를 먼저 생각하고, 세심하게 챙겨요. 안정적이고 오래가는 관계를 원하며, 작은 것들로 사랑을 표현해요.',
    behavioralScenarios: [
      { situation: '주변 사람이 힘들어 보이면', behavior: '말없이 옆에서 도와줄 방법을 찾아요' },
      { situation: '감사 인사를 받으면', behavior: '어색해하지만 내심 뿌듯해해요' },
      { situation: '갈등이 생기면', behavior: '자신을 희생해서라도 평화를 유지하려 해요' }
    ]
  },
  ESTJ: {
    type: 'ESTJ',
    nickname: '결단력 있는 관리자',
    description: '조직적이고 효율적으로 일을 처리하는 사람이에요. 리더십이 있고, 규칙과 질서를 중요하게 생각해요. 실용적이고 논리적이며, 목표 달성을 위해 열심히 노력해요.',
    strengths: ['조직력', '리더십', '실행력', '책임감'],
    activities: ['학급 회장하기', '프로젝트 관리', '스포츠 팀 활동', '계획 세우기'],
    animal: '독수리',
    color: 'from-red-500 to-orange-600',
    animalImage: 'estj_eagle_leader_mascot.png',
    careers: ['관리자', 'CEO', '군인', '판사', '프로젝트 매니저'],
    hobbies: ['골프', '등산', '자원봉사 조직', '스포츠', '커뮤니티 활동'],
    loveStyle: '연애에서도 책임감 있게 행동해요. 상대방에게 안정감을 주고, 실질적인 방법으로 사랑을 표현해요. 약속을 중요시하고, 장기적인 관계를 추구해요.',
    behavioralScenarios: [
      { situation: '팀이 방향을 잃으면', behavior: '즉시 계획을 세우고 역할을 분배해요' },
      { situation: '규칙을 어기는 행동을 보면', behavior: '바로잡으려고 직접적으로 말해요' },
      { situation: '목표가 정해지면', behavior: '효율적인 방법으로 달성하려 노력해요' }
    ]
  },
  ESFJ: {
    type: 'ESFJ',
    nickname: '사교적인 돌봄이',
    description: '친절하고 사교적이며, 다른 사람들과 어울리는 것을 좋아해요. 조화로운 관계를 만들고 유지하는 데 뛰어나요. 실용적이고 협력적이며, 다른 사람들을 돕는 것에서 기쁨을 느껴요.',
    strengths: ['사교성', '협력심', '조직력', '배려심'],
    activities: ['파티 계획하기', '친구들과 어울리기', '봉사 활동', '팀 활동'],
    animal: '강아지',
    color: 'from-yellow-400 to-amber-500',
    animalImage: 'esfj_friendly_dog_mascot.png',
    careers: ['이벤트 플래너', '간호사', '교사', 'HR 담당자', '영업'],
    hobbies: ['파티 기획', '요리', '봉사 활동', '친구 만나기', '커뮤니티 활동'],
    loveStyle: '사랑을 듬뿍 주는 타입이에요. 상대방을 세심하게 챙기고, 함께하는 시간을 소중히 여겨요. 안정적이고 따뜻한 가정을 꿈꾸며, 사랑을 적극적으로 표현해요.',
    behavioralScenarios: [
      { situation: '친구 생일이 다가오면', behavior: '깜짝 파티를 기획하거나 선물을 고르느라 바빠요' },
      { situation: '갈등이 생기면', behavior: '모두가 화해할 수 있도록 중재해요' },
      { situation: '새로운 사람이 오면', behavior: '먼저 다가가서 편하게 만들어줘요' }
    ]
  },
  ISTP: {
    type: 'ISTP',
    nickname: '논리적인 탐구가',
    description: '손재주가 뛰어나고 논리적인 사람이에요. 실용적인 문제를 해결하는 것을 좋아하고, 새로운 것을 분석하고 이해하려고 해요. 조용하지만 모험을 즐기기도 해요.',
    strengths: ['논리적 사고', '손재주', '문제 해결력', '침착함'],
    activities: ['조립하기', '실험하기', '스포츠', '게임'],
    animal: '표범',
    color: 'from-zinc-500 to-slate-600',
    animalImage: 'istp_cool_leopard_mascot.png',
    careers: ['엔지니어', '정비사', '조종사', '운동선수', '외과의사'],
    hobbies: ['자동차 정비', '익스트림 스포츠', 'DIY', '게임', '도구 다루기'],
    loveStyle: '행동으로 사랑을 표현해요. 말보다는 함께하는 활동을 통해 친밀감을 쌓아요. 개인 공간을 중요시하지만, 신뢰하는 사람에게는 깊은 유대감을 보여요.',
    behavioralScenarios: [
      { situation: '기계가 고장 나면', behavior: '분해해서 원인을 찾고 직접 고쳐요' },
      { situation: '위기 상황이 생기면', behavior: '침착하게 상황을 분석하고 대처해요' },
      { situation: '지루한 일을 해야 할 때', behavior: '더 효율적인 방법을 찾거나 피해요' }
    ]
  },
  ISFP: {
    type: 'ISFP',
    nickname: '온화한 예술가',
    description: '예술적 감각이 뛰어나고 온화한 성격이에요. 현재의 순간을 즐기고, 자신만의 방식으로 세상을 표현해요. 겸손하고 친절하며, 조화로운 것을 추구해요.',
    strengths: ['예술적 감각', '적응력', '친절함', '관찰력'],
    activities: ['그림 그리기', '음악 연주하기', '자연 탐험', '사진 찍기'],
    animal: '고양이',
    color: 'from-lime-500 to-green-600',
    animalImage: 'isfp_artistic_cat_mascot.png',
    careers: ['디자이너', '사진작가', '뮤지션', '요리사', '동물 관련 직업'],
    hobbies: ['그림', '음악', '사진', '자연 탐방', '동물 돌보기'],
    loveStyle: '조용하지만 깊은 사랑을 해요. 상대방을 있는 그대로 받아들이고, 작은 것들로 애정을 표현해요. 자유로운 관계를 원하지만, 깊은 감정적 연결을 추구해요.',
    behavioralScenarios: [
      { situation: '아름다운 풍경을 보면', behavior: '한참을 멈춰서 감상하거나 사진을 찍어요' },
      { situation: '갈등 상황이 생기면', behavior: '피하거나 조용히 물러나요' },
      { situation: '자신만의 시간이 필요하면', behavior: '예술 활동이나 자연 속에서 재충전해요' }
    ]
  },
  ESTP: {
    type: 'ESTP',
    nickname: '활동적인 모험가',
    description: '에너지가 넘치고 활동적인 사람이에요! 새로운 경험과 모험을 좋아하고, 순간의 즐거움을 추구해요. 문제 상황에서 빠르게 대처하고, 현실적인 해결책을 찾아요.',
    strengths: ['순발력', '대담함', '현실감각', '사교성'],
    activities: ['스포츠', '여행', '새로운 도전', '친구들과 놀기'],
    animal: '치타',
    color: 'from-red-500 to-rose-600',
    animalImage: 'estp_cheetah_adventurer_mascot.png',
    careers: ['영업', '운동선수', '기업가', '소방관', '이벤트 기획자'],
    hobbies: ['익스트림 스포츠', '파티', '여행', '도박', '새로운 도전'],
    loveStyle: '스릴 있는 연애를 좋아해요! 상대방과 함께 모험하고 새로운 경험을 공유하기를 원해요. 순간을 즐기며, 유쾌하고 재미있는 관계를 추구해요.',
    behavioralScenarios: [
      { situation: '새로운 도전 기회가 오면', behavior: '일단 해보고 결과는 나중에 생각해요' },
      { situation: '위기 상황이 생기면', behavior: '즉시 행동하며 현장에서 해결해요' },
      { situation: '계획을 세우라고 하면', behavior: '최소한만 세우고 유연하게 움직여요' }
    ]
  },
  ESFP: {
    type: 'ESFP',
    nickname: '즐거운 엔터테이너',
    description: '밝고 긍정적인 에너지로 주변을 즐겁게 해요! 사람들과 함께하는 것을 좋아하고, 현재의 순간을 최대한 즐기려고 해요. 자연스럽고 유쾌하며, 분위기를 띄우는 능력이 있어요.',
    strengths: ['사교성', '긍정적 에너지', '적응력', '표현력'],
    activities: ['공연하기', '파티 즐기기', '춤추기', '새로운 경험'],
    animal: '앵무새',
    color: 'from-fuchsia-500 to-pink-600',
    animalImage: 'esfp_parrot_entertainer_mascot.png',
    careers: ['배우', '가수', '이벤트 플래너', '영업', 'MC'],
    hobbies: ['춤', '노래', '파티', '쇼핑', '패션'],
    loveStyle: '연애를 즐겁게 해요! 상대방과 함께 웃고 즐기며, 매 순간을 특별하게 만들어요. 애정 표현을 아끼지 않고, 함께하는 시간을 소중히 여겨요.',
    behavioralScenarios: [
      { situation: '파티에 가면', behavior: '자연스럽게 분위기를 띄우고 사람들과 어울려요' },
      { situation: '슬픈 일이 생기면', behavior: '오래 슬퍼하지 않고 긍정적인 면을 찾아요' },
      { situation: '계획대로 안 되면', behavior: '유연하게 다른 재미있는 걸 찾아요' }
    ]
  }
};

export function getScenarioQuestions(ageGroup: AgeGroup): ScenarioQuestion[] {
  switch (ageGroup) {
    case 'elementary':
      return scenarioQuestionsElementary;
    case 'middle':
      return scenarioQuestionsMiddle;
    case 'high':
      return scenarioQuestionsHigh;
    case 'adult':
      return scenarioQuestionsAdult;
  }
}

export function getQuestions(ageGroup: AgeGroup): Question[] {
  const scenarios = getScenarioQuestions(ageGroup);
  return scenarios.map(s => ({
    id: s.id,
    text: s.scenario,
    optionA: s.optionA.text,
    optionB: s.optionB.text,
    optionC: s.optionC.text,
    dimension: s.dimension,
    scoring: s.scoring
  }));
}

export function calculateMBTIWithPercentage(answers: Record<number, Answer>, questions: Question[]): MBTIResult {
  const dimensionScores = { EI: 0, SN: 0, TF: 0, JP: 0 };
  const maxScores = { EI: 0, SN: 0, TF: 0, JP: 0 };
  
  questions.forEach((question) => {
    const answer = answers[question.id];
    if (!answer) return;
    
    const score = question.scoring[answer];
    dimensionScores[question.dimension] += score;
    maxScores[question.dimension] += 2;
  });

  const calculatePercentage = (score: number, max: number): number => {
    if (max === 0) return 50;
    const normalized = (score + max) / (2 * max);
    return Math.round(normalized * 100);
  };

  const eiPercent = calculatePercentage(dimensionScores.EI, maxScores.EI);
  const snPercent = calculatePercentage(dimensionScores.SN, maxScores.SN);
  const tfPercent = calculatePercentage(dimensionScores.TF, maxScores.TF);
  const jpPercent = calculatePercentage(dimensionScores.JP, maxScores.JP);

  const primaryE = eiPercent >= 50 ? 'E' : 'I';
  const primaryS = snPercent >= 50 ? 'S' : 'N';
  const primaryT = tfPercent >= 50 ? 'T' : 'F';
  const primaryJ = jpPercent >= 50 ? 'J' : 'P';
  
  const primaryType = `${primaryE}${primaryS}${primaryT}${primaryJ}`;

  const distances = [
    { dim: 'EI', dist: Math.abs(eiPercent - 50), letter: eiPercent >= 50 ? 'E' : 'I', opposite: eiPercent >= 50 ? 'I' : 'E' },
    { dim: 'SN', dist: Math.abs(snPercent - 50), letter: snPercent >= 50 ? 'S' : 'N', opposite: snPercent >= 50 ? 'N' : 'S' },
    { dim: 'TF', dist: Math.abs(tfPercent - 50), letter: tfPercent >= 50 ? 'T' : 'F', opposite: tfPercent >= 50 ? 'F' : 'T' },
    { dim: 'JP', dist: Math.abs(jpPercent - 50), letter: jpPercent >= 50 ? 'J' : 'P', opposite: jpPercent >= 50 ? 'P' : 'J' }
  ];

  distances.sort((a, b) => a.dist - b.dist);
  const closestDim = distances[0];

  let secondaryType = primaryType;
  if (closestDim.dim === 'EI') {
    secondaryType = `${closestDim.opposite}${primaryS}${primaryT}${primaryJ}`;
  } else if (closestDim.dim === 'SN') {
    secondaryType = `${primaryE}${closestDim.opposite}${primaryT}${primaryJ}`;
  } else if (closestDim.dim === 'TF') {
    secondaryType = `${primaryE}${primaryS}${closestDim.opposite}${primaryJ}`;
  } else {
    secondaryType = `${primaryE}${primaryS}${primaryT}${closestDim.opposite}`;
  }

  const primaryConfidence = 50 + (closestDim.dist > 0 ? closestDim.dist : 5);
  const secondaryConfidence = 100 - primaryConfidence;

  return {
    primaryType: mbtiTypes[primaryType] || mbtiTypes['INFP'],
    primaryPercentage: Math.min(95, Math.max(55, primaryConfidence)),
    secondaryType: mbtiTypes[secondaryType] || mbtiTypes['ENFP'],
    secondaryPercentage: Math.max(5, Math.min(45, secondaryConfidence)),
    dimensionScores: {
      EI: { score: dimensionScores.EI, percentage: eiPercent },
      SN: { score: dimensionScores.SN, percentage: snPercent },
      TF: { score: dimensionScores.TF, percentage: tfPercent },
      JP: { score: dimensionScores.JP, percentage: jpPercent }
    }
  };
}

export function calculateMBTI(answers: Record<number, Answer>, questions: Question[]): string {
  const result = calculateMBTIWithPercentage(answers, questions);
  return result.primaryType.type;
}
