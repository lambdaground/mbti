export type AgeGroup = 'elementary' | 'middle' | 'high';

export interface Question {
  id: number;
  text: string;
  optionA: string;
  optionB: string;
  dimension: 'EI' | 'SN' | 'TF' | 'JP';
}

export interface MBTIType {
  type: string;
  nickname: string;
  description: string;
  strengths: string[];
  activities: string[];
  animal: string;
  color: string;
}

export const ageGroupInfo: Record<AgeGroup, { label: string; subtitle: string; questionCount: number; icon: string }> = {
  elementary: {
    label: '초등학생',
    subtitle: '12개의 쉬운 질문',
    questionCount: 12,
    icon: '🎒'
  },
  middle: {
    label: '중학생',
    subtitle: '16개의 질문',
    questionCount: 16,
    icon: '📚'
  },
  high: {
    label: '고등학생',
    subtitle: '20개의 질문',
    questionCount: 20,
    icon: '🎓'
  }
};

export const elementaryQuestions: Question[] = [
  { id: 1, text: '친구들과 놀 때 나는...', optionA: '여러 친구들과 함께 노는 게 좋아!', optionB: '한두 명의 친구와 노는 게 좋아!', dimension: 'EI' },
  { id: 2, text: '새로운 친구를 만나면...', optionA: '먼저 말을 걸어!', optionB: '친구가 말 걸어주기를 기다려!', dimension: 'EI' },
  { id: 3, text: '쉬는 시간에 나는...', optionA: '친구들과 수다 떨어!', optionB: '혼자 책 읽거나 그림 그려!', dimension: 'EI' },
  { id: 4, text: '이야기를 들을 때 나는...', optionA: '실제로 일어난 이야기가 좋아!', optionB: '상상 속 이야기가 좋아!', dimension: 'SN' },
  { id: 5, text: '무언가를 배울 때 나는...', optionA: '직접 해보면서 배워!', optionB: '먼저 생각하고 상상해봐!', dimension: 'SN' },
  { id: 6, text: '그림을 그릴 때 나는...', optionA: '보이는 그대로 그려!', optionB: '상상한 것을 그려!', dimension: 'SN' },
  { id: 7, text: '친구가 슬퍼할 때 나는...', optionA: '해결 방법을 알려줘!', optionB: '같이 슬퍼하면서 위로해줘!', dimension: 'TF' },
  { id: 8, text: '뭔가를 결정할 때 나는...', optionA: '어떤 게 맞는지 생각해!', optionB: '기분이 어떤지 생각해!', dimension: 'TF' },
  { id: 9, text: '칭찬을 받으면 나는...', optionA: '왜 칭찬받았는지 궁금해!', optionB: '기분이 너무 좋아!', dimension: 'TF' },
  { id: 10, text: '숙제를 할 때 나는...', optionA: '미리미리 해두는 편이야!', optionB: '하고 싶을 때 해!', dimension: 'JP' },
  { id: 11, text: '방학 계획을 세울 때 나는...', optionA: '할 일을 미리 정해둬!', optionB: '그때그때 하고 싶은 거 해!', dimension: 'JP' },
  { id: 12, text: '준비물을 챙길 때 나는...', optionA: '전날 미리 챙겨!', optionB: '아침에 급하게 챙겨!', dimension: 'JP' },
];

export const middleQuestions: Question[] = [
  { id: 1, text: '주말에 시간이 생기면...', optionA: '친구들과 약속을 잡아 밖에서 놀아요', optionB: '집에서 혼자만의 시간을 보내요', dimension: 'EI' },
  { id: 2, text: '새 학기 첫날, 나는...', optionA: '새로운 반 친구들에게 먼저 말을 걸어요', optionB: '누군가 말을 걸어주길 기다려요', dimension: 'EI' },
  { id: 3, text: '모둠 활동을 할 때 나는...', optionA: '의견을 적극적으로 말하는 편이에요', optionB: '다른 친구들 의견을 먼저 들어요', dimension: 'EI' },
  { id: 4, text: '힘든 일이 있을 때 나는...', optionA: '친구들과 이야기하며 풀어요', optionB: '혼자 생각을 정리해요', dimension: 'EI' },
  { id: 5, text: '수업 시간에 나는...', optionA: '구체적인 예시와 사실이 더 이해가 잘 돼요', optionB: '전체적인 개념과 이론이 더 흥미로워요', dimension: 'SN' },
  { id: 6, text: '문제를 풀 때 나는...', optionA: '정해진 방법대로 차근차근 풀어요', optionB: '새로운 방법을 찾아보려 해요', dimension: 'SN' },
  { id: 7, text: '미래에 대해 생각할 때 나는...', optionA: '현실적으로 가능한 것을 생각해요', optionB: '다양한 가능성을 상상해요', dimension: 'SN' },
  { id: 8, text: '책이나 영화를 볼 때 나는...', optionA: '현실적인 이야기를 좋아해요', optionB: '판타지나 SF 같은 상상의 세계가 좋아요', dimension: 'SN' },
  { id: 9, text: '친구가 고민을 말할 때 나는...', optionA: '해결책을 찾아 조언해줘요', optionB: '공감하고 감정적으로 지지해줘요', dimension: 'TF' },
  { id: 10, text: '중요한 결정을 할 때 나는...', optionA: '논리적으로 장단점을 따져요', optionB: '마음이 가는 쪽을 선택해요', dimension: 'TF' },
  { id: 11, text: '토론이나 논쟁에서 나는...', optionA: '객관적인 사실을 중요하게 생각해요', optionB: '서로의 감정을 배려하는 게 중요해요', dimension: 'TF' },
  { id: 12, text: '성적표를 받았을 때 나는...', optionA: '점수와 순위를 분석해요', optionB: '선생님 평가 코멘트에 관심이 가요', dimension: 'TF' },
  { id: 13, text: '시험 준비를 할 때 나는...', optionA: '계획표를 세우고 따라가요', optionB: '그날 기분에 따라 공부해요', dimension: 'JP' },
  { id: 14, text: '과제 마감이 있을 때 나는...', optionA: '여유있게 미리 끝내요', optionB: '마감 직전에 집중해서 해요', dimension: 'JP' },
  { id: 15, text: '여행을 갈 때 나는...', optionA: '꼼꼼하게 일정을 짜요', optionB: '즉흥적으로 움직이는 게 좋아요', dimension: 'JP' },
  { id: 16, text: '하루 일과를 보낼 때 나는...', optionA: '정해진 루틴대로 움직여요', optionB: '상황에 따라 유연하게 바꿔요', dimension: 'JP' },
];

export const highQuestions: Question[] = [
  { id: 1, text: '에너지를 충전하는 방법은?', optionA: '사람들과 어울리며 대화할 때 에너지가 생겨요', optionB: '혼자만의 시간을 가질 때 재충전돼요', dimension: 'EI' },
  { id: 2, text: '처음 만나는 사람들 앞에서 나는...', optionA: '먼저 다가가서 대화를 시작해요', optionB: '상대방이 먼저 다가오길 기다려요', dimension: 'EI' },
  { id: 3, text: '그룹 프로젝트에서 나는...', optionA: '리더 역할을 맡아 진행하는 편이에요', optionB: '맡은 역할을 묵묵히 수행해요', dimension: 'EI' },
  { id: 4, text: '스트레스를 받으면 나는...', optionA: '친구들과 수다를 떨며 풀어요', optionB: '혼자 음악 듣거나 산책해요', dimension: 'EI' },
  { id: 5, text: '생각하는 방식에 대해 말하자면...', optionA: '현실적이고 실용적인 편이에요', optionB: '이론적이고 추상적인 편이에요', dimension: 'SN' },
  { id: 6, text: '공부할 때 선호하는 방식은?', optionA: '구체적인 예시와 실습 위주가 좋아요', optionB: '전체적인 개념과 원리 파악이 먼저예요', dimension: 'SN' },
  { id: 7, text: '진로를 생각할 때 나는...', optionA: '안정적이고 현실 가능한 직업을 생각해요', optionB: '새롭고 혁신적인 분야에 관심이 가요', dimension: 'SN' },
  { id: 8, text: '정보를 받아들일 때 나는...', optionA: '구체적인 세부 사항에 집중해요', optionB: '전체적인 패턴과 의미를 찾아요', dimension: 'SN' },
  { id: 9, text: '글이나 보고서를 쓸 때 나는...', optionA: '사실과 데이터를 바탕으로 써요', optionB: '비유와 상징을 활용해 표현해요', dimension: 'SN' },
  { id: 10, text: '결정을 내릴 때 나는...', optionA: '객관적인 기준과 논리를 중시해요', optionB: '관련된 사람들의 감정을 고려해요', dimension: 'TF' },
  { id: 11, text: '피드백을 줄 때 나는...', optionA: '솔직하고 직접적으로 말해요', optionB: '상대방 기분을 고려해 돌려 말해요', dimension: 'TF' },
  { id: 12, text: '갈등 상황에서 나는...', optionA: '공정하고 합리적인 해결책을 찾아요', optionB: '모두의 감정이 상하지 않게 조율해요', dimension: 'TF' },
  { id: 13, text: '친구의 실수에 대해 나는...', optionA: '객관적으로 잘못을 지적해줘요', optionB: '감정을 먼저 위로하고 조언해요', dimension: 'TF' },
  { id: 14, text: '일을 처리하는 방식은?', optionA: '계획을 세우고 체계적으로 진행해요', optionB: '유연하게 상황에 맞춰 처리해요', dimension: 'JP' },
  { id: 15, text: '마감 기한에 대한 나의 태도는?', optionA: '여유있게 미리 완료하는 편이에요', optionB: '마감 직전 집중력이 최고예요', dimension: 'JP' },
  { id: 16, text: '일정이 바뀌었을 때 나는...', optionA: '불편하고 스트레스를 받아요', optionB: '유연하게 적응하는 편이에요', dimension: 'JP' },
  { id: 17, text: '여가 시간 활용에 대해...', optionA: '미리 계획한 활동을 해요', optionB: '그때그때 하고 싶은 걸 해요', dimension: 'JP' },
  { id: 18, text: '책상이나 방 정리는...', optionA: '항상 깔끔하게 정돈되어 있어요', optionB: '나만의 규칙대로 어질러져 있어요', dimension: 'JP' },
  { id: 19, text: '새로운 환경에 적응할 때...', optionA: '미리 정보를 수집하고 준비해요', optionB: '가서 직접 경험하며 적응해요', dimension: 'JP' },
  { id: 20, text: '인생에서 중요하게 생각하는 것은?', optionA: '안정감과 예측 가능한 미래', optionB: '자유로움과 다양한 경험', dimension: 'JP' },
];

export const mbtiTypes: Record<string, MBTIType> = {
  INTJ: {
    type: 'INTJ',
    nickname: '전략적인 사색가',
    description: '독립적이고 전략적인 사고를 가진 사람이에요. 혼자서 깊이 생각하는 것을 좋아하고, 목표를 세우면 끝까지 달성하려고 노력해요. 지식을 쌓는 것을 좋아하며, 미래를 계획하는 것에 뛰어나요.',
    strengths: ['논리적 사고력', '장기적 계획 수립', '독립적 학습 능력', '문제 해결 능력'],
    activities: ['과학 실험하기', '퍼즐이나 전략 게임', '책 읽기', '미래 계획 세우기'],
    animal: '올빼미',
    color: 'from-indigo-500 to-purple-600'
  },
  INTP: {
    type: 'INTP',
    nickname: '호기심 많은 탐구가',
    description: '끝없는 호기심으로 세상을 탐구하는 사람이에요. "왜?"라는 질문을 자주 하고, 새로운 아이디어를 생각해내는 것을 좋아해요. 논리적이고 분석적인 사고를 가지고 있어요.',
    strengths: ['분석적 사고', '창의적 문제 해결', '이론적 이해력', '객관적 판단'],
    activities: ['코딩이나 프로그래밍', '수학 문제 풀기', '과학 다큐멘터리 보기', '발명품 구상하기'],
    animal: '부엉이',
    color: 'from-cyan-500 to-blue-600'
  },
  ENTJ: {
    type: 'ENTJ',
    nickname: '타고난 리더',
    description: '자신감 있고 카리스마가 넘치는 리더예요. 팀을 이끌고 목표를 달성하는 것을 좋아해요. 효율적이고 결단력 있게 일을 처리하며, 다른 사람들에게 동기를 부여하는 능력이 뛰어나요.',
    strengths: ['리더십', '결단력', '효율적인 계획', '설득력'],
    activities: ['팀 프로젝트 이끌기', '토론하기', '목표 세우고 달성하기', '새로운 것 배우기'],
    animal: '사자',
    color: 'from-amber-500 to-orange-600'
  },
  ENTP: {
    type: 'ENTP',
    nickname: '창의적인 도전가',
    description: '새로운 아이디어와 가능성을 탐험하는 것을 좋아해요. 토론을 즐기고, 다양한 관점에서 생각하는 능력이 뛰어나요. 창의적이고 재치있으며, 문제를 새로운 방식으로 해결해요.',
    strengths: ['창의력', '빠른 적응력', '토론 능력', '다양한 관점 이해'],
    activities: ['새로운 아이디어 발표하기', '토론 대회', '브레인스토밍', '발명하기'],
    animal: '여우',
    color: 'from-rose-500 to-pink-600'
  },
  INFJ: {
    type: 'INFJ',
    nickname: '통찰력 있는 이상주의자',
    description: '깊은 통찰력으로 사람들의 마음을 이해해요. 조용하지만 확고한 가치관을 가지고 있고, 다른 사람들을 돕는 것에서 의미를 찾아요. 창의적이고 이상적인 비전을 가지고 있어요.',
    strengths: ['공감 능력', '통찰력', '창의적 사고', '헌신적인 태도'],
    activities: ['글쓰기', '봉사 활동', '예술 감상', '깊은 대화 나누기'],
    animal: '늑대',
    color: 'from-emerald-500 to-teal-600'
  },
  INFP: {
    type: 'INFP',
    nickname: '꿈꾸는 이상주의자',
    description: '풍부한 상상력과 깊은 감정을 가진 사람이에요. 자신만의 가치관을 중요하게 여기고, 진정성 있는 삶을 추구해요. 예술적이고 창의적이며, 다른 사람들의 감정에 민감해요.',
    strengths: ['창의력', '공감 능력', '진정성', '적응력'],
    activities: ['시나 소설 쓰기', '음악 듣기', '예술 활동', '자연 속 산책'],
    animal: '유니콘',
    color: 'from-violet-500 to-purple-600'
  },
  ENFJ: {
    type: 'ENFJ',
    nickname: '따뜻한 리더',
    description: '다른 사람들을 이끌고 격려하는 것을 좋아해요. 카리스마가 있고, 사람들의 잠재력을 이끌어내는 능력이 있어요. 조화롭고 따뜻한 관계를 중요하게 생각해요.',
    strengths: ['리더십', '공감 능력', '소통 능력', '동기 부여'],
    activities: ['멘토링 하기', '그룹 활동 이끌기', '봉사 활동', '이야기 나누기'],
    animal: '돌고래',
    color: 'from-sky-500 to-blue-600'
  },
  ENFP: {
    type: 'ENFP',
    nickname: '열정적인 탐험가',
    description: '에너지가 넘치고 열정적인 사람이에요! 새로운 사람을 만나고 새로운 경험을 하는 것을 좋아해요. 창의적이고 자유로우며, 긍정적인 에너지로 주변 사람들에게 영감을 줘요.',
    strengths: ['창의력', '사교성', '열정', '적응력'],
    activities: ['새로운 친구 사귀기', '창작 활동', '여행', '브레인스토밍'],
    animal: '나비',
    color: 'from-orange-500 to-yellow-500'
  },
  ISTJ: {
    type: 'ISTJ',
    nickname: '신뢰할 수 있는 책임자',
    description: '믿음직스럽고 책임감이 강한 사람이에요. 규칙을 잘 따르고, 맡은 일을 끝까지 완수해요. 체계적이고 꼼꼼하며, 실용적인 방식으로 문제를 해결해요.',
    strengths: ['책임감', '신뢰성', '체계적인 사고', '인내심'],
    activities: ['계획표 만들기', '컬렉션 정리하기', '역사 공부하기', '규칙적인 운동'],
    animal: '비버',
    color: 'from-slate-500 to-gray-600'
  },
  ISFJ: {
    type: 'ISFJ',
    nickname: '따뜻한 수호자',
    description: '다른 사람들을 돌보고 보호하는 것을 좋아해요. 세심하고 배려심이 깊으며, 조용히 헌신하는 타입이에요. 전통과 규칙을 존중하고, 안정적인 환경을 만들어요.',
    strengths: ['배려심', '신뢰성', '세심함', '헌신'],
    activities: ['친구 돕기', '요리하기', '정리정돈', '가족과 시간 보내기'],
    animal: '토끼',
    color: 'from-pink-400 to-rose-500'
  },
  ESTJ: {
    type: 'ESTJ',
    nickname: '결단력 있는 관리자',
    description: '조직적이고 효율적으로 일을 처리하는 사람이에요. 리더십이 있고, 규칙과 질서를 중요하게 생각해요. 실용적이고 논리적이며, 목표 달성을 위해 열심히 노력해요.',
    strengths: ['조직력', '리더십', '실행력', '책임감'],
    activities: ['학급 회장하기', '프로젝트 관리', '스포츠 팀 활동', '계획 세우기'],
    animal: '독수리',
    color: 'from-red-500 to-orange-600'
  },
  ESFJ: {
    type: 'ESFJ',
    nickname: '사교적인 돌봄이',
    description: '친절하고 사교적이며, 다른 사람들과 어울리는 것을 좋아해요. 조화로운 관계를 만들고 유지하는 데 뛰어나요. 실용적이고 협력적이며, 다른 사람들을 돕는 것에서 기쁨을 느껴요.',
    strengths: ['사교성', '협력심', '조직력', '배려심'],
    activities: ['파티 계획하기', '친구들과 어울리기', '봉사 활동', '팀 활동'],
    animal: '강아지',
    color: 'from-yellow-400 to-amber-500'
  },
  ISTP: {
    type: 'ISTP',
    nickname: '논리적인 탐구가',
    description: '손재주가 뛰어나고 논리적인 사람이에요. 실용적인 문제를 해결하는 것을 좋아하고, 새로운 것을 분석하고 이해하려고 해요. 조용하지만 모험을 즐기기도 해요.',
    strengths: ['논리적 사고', '손재주', '문제 해결력', '침착함'],
    activities: ['조립하기', '실험하기', '스포츠', '게임'],
    animal: '표범',
    color: 'from-zinc-500 to-slate-600'
  },
  ISFP: {
    type: 'ISFP',
    nickname: '온화한 예술가',
    description: '예술적 감각이 뛰어나고 온화한 성격이에요. 현재의 순간을 즐기고, 자신만의 방식으로 세상을 표현해요. 겸손하고 친절하며, 조화로운 것을 추구해요.',
    strengths: ['예술적 감각', '적응력', '친절함', '관찰력'],
    activities: ['그림 그리기', '음악 연주하기', '자연 탐험', '사진 찍기'],
    animal: '고양이',
    color: 'from-lime-500 to-green-600'
  },
  ESTP: {
    type: 'ESTP',
    nickname: '활동적인 모험가',
    description: '에너지가 넘치고 활동적인 사람이에요! 새로운 경험과 모험을 좋아하고, 순간의 즐거움을 추구해요. 문제 상황에서 빠르게 대처하고, 현실적인 해결책을 찾아요.',
    strengths: ['순발력', '대담함', '현실감각', '사교성'],
    activities: ['스포츠', '여행', '새로운 도전', '친구들과 놀기'],
    animal: '치타',
    color: 'from-red-500 to-rose-600'
  },
  ESFP: {
    type: 'ESFP',
    nickname: '즐거운 엔터테이너',
    description: '밝고 긍정적인 에너지로 주변을 즐겁게 해요! 사람들과 함께하는 것을 좋아하고, 현재의 순간을 최대한 즐기려고 해요. 자연스럽고 유쾌하며, 분위기를 띄우는 능력이 있어요.',
    strengths: ['사교성', '긍정적 에너지', '적응력', '표현력'],
    activities: ['공연하기', '파티 즐기기', '춤추기', '새로운 경험'],
    animal: '앵무새',
    color: 'from-fuchsia-500 to-pink-600'
  }
};

export function getQuestions(ageGroup: AgeGroup): Question[] {
  switch (ageGroup) {
    case 'elementary':
      return elementaryQuestions;
    case 'middle':
      return middleQuestions;
    case 'high':
      return highQuestions;
  }
}

export function calculateMBTI(answers: Record<number, 'A' | 'B'>, questions: Question[]): string {
  const scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
  
  questions.forEach((question) => {
    const answer = answers[question.id];
    if (!answer) return;
    
    switch (question.dimension) {
      case 'EI':
        if (answer === 'A') scores.E++;
        else scores.I++;
        break;
      case 'SN':
        if (answer === 'A') scores.S++;
        else scores.N++;
        break;
      case 'TF':
        if (answer === 'A') scores.T++;
        else scores.F++;
        break;
      case 'JP':
        if (answer === 'A') scores.J++;
        else scores.P++;
        break;
    }
  });
  
  const e_i = scores.E >= scores.I ? 'E' : 'I';
  const s_n = scores.S >= scores.N ? 'S' : 'N';
  const t_f = scores.T >= scores.F ? 'T' : 'F';
  const j_p = scores.J >= scores.P ? 'J' : 'P';
  
  return `${e_i}${s_n}${t_f}${j_p}`;
}
