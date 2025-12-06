export type AgeGroup = 'elementary' | 'middle' | 'high' | 'adult';

export type Answer = 'A' | 'B' | 'C';

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

export interface MBTIType {
  type: string;
  nickname: string;
  description: string;
  strengths: string[];
  activities: string[];
  animal: string;
  color: string;
  animalImage: string;
}

export const ageGroupInfo: Record<AgeGroup, { label: string; subtitle: string; questionCount: number }> = {
  elementary: {
    label: '초등학생',
    subtitle: '24개의 쉬운 질문',
    questionCount: 24
  },
  middle: {
    label: '중학생',
    subtitle: '32개의 질문',
    questionCount: 32
  },
  high: {
    label: '고등학생',
    subtitle: '40개의 질문',
    questionCount: 40
  },
  adult: {
    label: '성인',
    subtitle: '48개의 질문',
    questionCount: 48
  }
};

export const elementaryQuestions: Question[] = [
  { id: 1, text: '친구들과 놀 때 나는...', optionA: '여러 친구들과 함께 노는 게 좋아!', optionB: '상황에 따라 달라!', optionC: '한두 명의 친구와 노는 게 좋아!', dimension: 'EI', scoring: { A: 1, B: 0, C: -1 } },
  { id: 2, text: '새로운 친구를 만나면...', optionA: '친구가 말 걸어주기를 기다려!', optionB: '조금 지켜보다가 말을 걸어!', optionC: '먼저 말을 걸어!', dimension: 'EI', scoring: { A: -1, B: 0, C: 1 } },
  { id: 3, text: '쉬는 시간에 나는...', optionA: '친구들과 수다 떨어!', optionB: '친구랑 조용히 있어!', optionC: '혼자 책 읽거나 그림 그려!', dimension: 'EI', scoring: { A: 1, B: 0, C: -1 } },
  { id: 4, text: '학교 끝나고 집에 오면...', optionA: '혼자 놀거나 쉬고 싶어!', optionB: '그날 기분에 따라 달라!', optionC: '바로 친구 만나고 싶어!', dimension: 'EI', scoring: { A: -1, B: 0, C: 1 } },
  { id: 5, text: '생일 파티는...', optionA: '많은 친구들과 시끌벅적하게!', optionB: '적당히 친한 친구들과!', optionC: '소수의 친한 친구들과 조용히!', dimension: 'EI', scoring: { A: 1, B: 0, C: -1 } },
  { id: 6, text: '발표할 때 나는...', optionA: '떨리지만 해볼 수 있어!', optionB: '친구들 앞이라 재미있어!', optionC: '너무 떨려서 힘들어!', dimension: 'EI', scoring: { A: 0, B: 1, C: -1 } },
  { id: 7, text: '이야기를 들을 때 나는...', optionA: '상상 속 이야기가 좋아!', optionB: '둘 다 좋아!', optionC: '실제로 일어난 이야기가 좋아!', dimension: 'SN', scoring: { A: -1, B: 0, C: 1 } },
  { id: 8, text: '무언가를 배울 때 나는...', optionA: '직접 해보면서 배워!', optionB: '설명 듣고 해봐!', optionC: '먼저 생각하고 상상해봐!', dimension: 'SN', scoring: { A: 1, B: 0, C: -1 } },
  { id: 9, text: '그림을 그릴 때 나는...', optionA: '보이는 그대로 그려!', optionB: '보이는 것을 조금 바꿔서 그려!', optionC: '상상한 것을 그려!', dimension: 'SN', scoring: { A: 1, B: 0, C: -1 } },
  { id: 10, text: '좋아하는 놀이는...', optionA: '상상 놀이나 역할극!', optionB: '둘 다 좋아!', optionC: '규칙이 있는 게임!', dimension: 'SN', scoring: { A: -1, B: 0, C: 1 } },
  { id: 11, text: '새로운 장난감을 받으면...', optionA: '설명서를 읽어봐!', optionB: '대충 보고 바로 놀아!', optionC: '바로 가지고 놀아!', dimension: 'SN', scoring: { A: 1, B: 0, C: -1 } },
  { id: 12, text: '꿈을 꿀 때 나는...', optionA: '이상한 상상의 꿈을 많이 꿔!', optionB: '가끔 신기한 꿈을 꿔!', optionC: '실제 있었던 일 같은 꿈을 꿔!', dimension: 'SN', scoring: { A: -1, B: 0, C: 1 } },
  { id: 13, text: '친구가 슬퍼할 때 나는...', optionA: '같이 슬퍼하면서 위로해줘!', optionB: '뭐가 필요한지 물어봐!', optionC: '해결 방법을 알려줘!', dimension: 'TF', scoring: { A: -1, B: 0, C: 1 } },
  { id: 14, text: '뭔가를 결정할 때 나는...', optionA: '어떤 게 맞는지 생각해!', optionB: '여러 가지를 생각해봐!', optionC: '기분이 어떤지 생각해!', dimension: 'TF', scoring: { A: 1, B: 0, C: -1 } },
  { id: 15, text: '칭찬을 받으면 나는...', optionA: '왜 칭찬받았는지 궁금해!', optionB: '그냥 기분이 좋아!', optionC: '너무 기분이 좋고 감동해!', dimension: 'TF', scoring: { A: 1, B: 0, C: -1 } },
  { id: 16, text: '친구랑 싸웠을 때...', optionA: '누가 잘못했는지 생각해!', optionB: '조금 시간이 지나면 화해해!', optionC: '친구 마음이 어떤지 걱정돼!', dimension: 'TF', scoring: { A: 1, B: 0, C: -1 } },
  { id: 17, text: '게임에서 졌을 때...', optionA: '속상하지만 다음에 잘하면 돼!', optionB: '왜 졌는지 분석해!', optionC: '너무 속상해서 울 것 같아!', dimension: 'TF', scoring: { A: 0, B: 1, C: -1 } },
  { id: 18, text: '동물을 볼 때 나는...', optionA: '너무 귀엽고 사랑스러워!', optionB: '관찰하는 게 재미있어!', optionC: '어떤 종류인지 궁금해!', dimension: 'TF', scoring: { A: -1, B: 0, C: 1 } },
  { id: 19, text: '숙제를 할 때 나는...', optionA: '하고 싶을 때 해!', optionB: '시간 되면 해!', optionC: '미리미리 해두는 편이야!', dimension: 'JP', scoring: { A: -1, B: 0, C: 1 } },
  { id: 20, text: '방학 계획을 세울 때 나는...', optionA: '할 일을 미리 정해둬!', optionB: '대충 계획을 세워!', optionC: '그때그때 하고 싶은 거 해!', dimension: 'JP', scoring: { A: 1, B: 0, C: -1 } },
  { id: 21, text: '준비물을 챙길 때 나는...', optionA: '아침에 급하게 챙겨!', optionB: '저녁에 대충 챙겨!', optionC: '전날 미리 챙겨!', dimension: 'JP', scoring: { A: -1, B: 0, C: 1 } },
  { id: 22, text: '내 방은...', optionA: '깔끔하게 정리되어 있어!', optionB: '적당히 어질러져 있어!', optionC: '내 스타일대로 어질러져 있어!', dimension: 'JP', scoring: { A: 1, B: 0, C: -1 } },
  { id: 23, text: '주말에 뭐 할지...', optionA: '그날 아침에 정해!', optionB: '대충 생각해둬!', optionC: '미리 계획을 세워!', dimension: 'JP', scoring: { A: -1, B: 0, C: 1 } },
  { id: 24, text: '갑자기 계획이 바뀌면...', optionA: '좀 불편하지만 괜찮아!', optionB: '아 그래? 뭐 어때!', optionC: '싫어! 원래대로 하고 싶어!', dimension: 'JP', scoring: { A: 0, B: -1, C: 1 } },
];

export const middleQuestions: Question[] = [
  { id: 1, text: '주말에 시간이 생기면...', optionA: '친구들과 약속을 잡아 밖에서 놀아요', optionB: '기분에 따라 달라요', optionC: '집에서 혼자만의 시간을 보내요', dimension: 'EI', scoring: { A: 1, B: 0, C: -1 } },
  { id: 2, text: '새 학기 첫날, 나는...', optionA: '누군가 말을 걸어주길 기다려요', optionB: '옆자리 친구에게 먼저 인사해요', optionC: '새로운 반 친구들에게 먼저 말을 걸어요', dimension: 'EI', scoring: { A: -1, B: 0, C: 1 } },
  { id: 3, text: '모둠 활동을 할 때 나는...', optionA: '의견을 적극적으로 말하는 편이에요', optionB: '때에 따라 말하거나 들어요', optionC: '다른 친구들 의견을 먼저 들어요', dimension: 'EI', scoring: { A: 1, B: 0, C: -1 } },
  { id: 4, text: '힘든 일이 있을 때 나는...', optionA: '친구들과 이야기하며 풀어요', optionB: '상황에 따라 달라요', optionC: '혼자 생각을 정리해요', dimension: 'EI', scoring: { A: 1, B: 0, C: -1 } },
  { id: 5, text: '학교에서 쉬는 시간에...', optionA: '조용히 혼자 쉬고 싶어요', optionB: '친한 친구랑 이야기해요', optionC: '여러 친구들과 어울려요', dimension: 'EI', scoring: { A: -1, B: 0, C: 1 } },
  { id: 6, text: '에너지가 생기는 때는...', optionA: '사람들과 함께할 때', optionB: '때에 따라 달라요', optionC: '혼자 있을 때', dimension: 'EI', scoring: { A: 1, B: 0, C: -1 } },
  { id: 7, text: '새로운 모임에 가면...', optionA: '지켜보다가 적응해요', optionB: '자연스럽게 섞여요', optionC: '먼저 나서서 인사해요', dimension: 'EI', scoring: { A: -1, B: 0, C: 1 } },
  { id: 8, text: '친구를 사귀는 방식은...', optionA: '많은 친구와 두루두루 지내요', optionB: '적당히 친한 친구들이 있어요', optionC: '소수의 깊은 친구가 있어요', dimension: 'EI', scoring: { A: 1, B: 0, C: -1 } },
  { id: 9, text: '수업 시간에 나는...', optionA: '전체적인 개념과 이론이 더 흥미로워요', optionB: '둘 다 중요해요', optionC: '구체적인 예시와 사실이 더 이해가 잘 돼요', dimension: 'SN', scoring: { A: -1, B: 0, C: 1 } },
  { id: 10, text: '문제를 풀 때 나는...', optionA: '정해진 방법대로 차근차근 풀어요', optionB: '상황에 맞게 풀어요', optionC: '새로운 방법을 찾아보려 해요', dimension: 'SN', scoring: { A: 1, B: 0, C: -1 } },
  { id: 11, text: '미래에 대해 생각할 때 나는...', optionA: '다양한 가능성을 상상해요', optionB: '대략적으로 생각해요', optionC: '현실적으로 가능한 것을 생각해요', dimension: 'SN', scoring: { A: -1, B: 0, C: 1 } },
  { id: 12, text: '책이나 영화를 볼 때 나는...', optionA: '현실적인 이야기를 좋아해요', optionB: '장르 상관없이 재미있으면 돼요', optionC: '판타지나 SF 같은 상상의 세계가 좋아요', dimension: 'SN', scoring: { A: 1, B: 0, C: -1 } },
  { id: 13, text: '새로운 것을 배울 때...', optionA: '실제로 해보면서 배워요', optionB: '설명을 듣고 시도해요', optionC: '원리를 먼저 이해하려 해요', dimension: 'SN', scoring: { A: 1, B: 0, C: -1 } },
  { id: 14, text: '대화할 때 나는...', optionA: '구체적인 사실을 말해요', optionB: '상황에 맞게 말해요', optionC: '비유나 예시를 많이 들어요', dimension: 'SN', scoring: { A: 1, B: 0, C: -1 } },
  { id: 15, text: '정보를 얻을 때...', optionA: '숨겨진 의미를 찾으려 해요', optionB: '내용을 이해하려 해요', optionC: '있는 그대로 받아들여요', dimension: 'SN', scoring: { A: -1, B: 0, C: 1 } },
  { id: 16, text: '취미를 고를 때...', optionA: '실용적인 것을 좋아해요', optionB: '재미있으면 돼요', optionC: '창의적인 것을 좋아해요', dimension: 'SN', scoring: { A: 1, B: 0, C: -1 } },
  { id: 17, text: '친구가 고민을 말할 때 나는...', optionA: '공감하고 감정적으로 지지해줘요', optionB: '들어주면서 필요하면 조언해요', optionC: '해결책을 찾아 조언해줘요', dimension: 'TF', scoring: { A: -1, B: 0, C: 1 } },
  { id: 18, text: '중요한 결정을 할 때 나는...', optionA: '논리적으로 장단점을 따져요', optionB: '이성과 감정 둘 다 생각해요', optionC: '마음이 가는 쪽을 선택해요', dimension: 'TF', scoring: { A: 1, B: 0, C: -1 } },
  { id: 19, text: '토론이나 논쟁에서 나는...', optionA: '객관적인 사실을 중요하게 생각해요', optionB: '상황에 따라 달라요', optionC: '서로의 감정을 배려하는 게 중요해요', dimension: 'TF', scoring: { A: 1, B: 0, C: -1 } },
  { id: 20, text: '성적표를 받았을 때 나는...', optionA: '선생님 평가 코멘트에 관심이 가요', optionB: '전체적으로 살펴봐요', optionC: '점수와 순위를 분석해요', dimension: 'TF', scoring: { A: -1, B: 0, C: 1 } },
  { id: 21, text: '친구가 실수했을 때...', optionA: '솔직하게 알려줘요', optionB: '상황을 보고 판단해요', optionC: '기분이 상하지 않게 조심해요', dimension: 'TF', scoring: { A: 1, B: 0, C: -1 } },
  { id: 22, text: '영화를 볼 때 끌리는 것은...', optionA: '감동적인 스토리', optionB: '재미있는 이야기', optionC: '논리적인 전개', dimension: 'TF', scoring: { A: -1, B: 0, C: 1 } },
  { id: 23, text: '칭찬을 할 때...', optionA: '솔직하게 잘한 점을 말해요', optionB: '상황에 맞게 해요', optionC: '기분 좋게 해주려고 해요', dimension: 'TF', scoring: { A: 1, B: 0, C: -1 } },
  { id: 24, text: '갈등이 생기면...', optionA: '공정하게 해결하려 해요', optionB: '상황을 보고 판단해요', optionC: '관계가 안 상하게 해요', dimension: 'TF', scoring: { A: 1, B: 0, C: -1 } },
  { id: 25, text: '시험 준비를 할 때 나는...', optionA: '그날 기분에 따라 공부해요', optionB: '대략적인 계획을 세워요', optionC: '계획표를 세우고 따라가요', dimension: 'JP', scoring: { A: -1, B: 0, C: 1 } },
  { id: 26, text: '과제 마감이 있을 때 나는...', optionA: '여유있게 미리 끝내요', optionB: '적당히 시간 맞춰서 해요', optionC: '마감 직전에 집중해서 해요', dimension: 'JP', scoring: { A: 1, B: 0, C: -1 } },
  { id: 27, text: '여행을 갈 때 나는...', optionA: '즉흥적으로 움직이는 게 좋아요', optionB: '대강의 계획만 세워요', optionC: '꼼꼼하게 일정을 짜요', dimension: 'JP', scoring: { A: -1, B: 0, C: 1 } },
  { id: 28, text: '하루 일과를 보낼 때 나는...', optionA: '정해진 루틴대로 움직여요', optionB: '대체로 일정하게 보내요', optionC: '상황에 따라 유연하게 바꿔요', dimension: 'JP', scoring: { A: 1, B: 0, C: -1 } },
  { id: 29, text: '약속 시간에 대해...', optionA: '여유있게 미리 도착해요', optionB: '시간에 맞춰 가요', optionC: '조금 늦어도 괜찮아요', dimension: 'JP', scoring: { A: 1, B: 0, C: -1 } },
  { id: 30, text: '새로운 일을 시작할 때...', optionA: '계획을 세우고 시작해요', optionB: '대략적으로 생각하고 시작해요', optionC: '일단 해보면서 배워요', dimension: 'JP', scoring: { A: 1, B: 0, C: -1 } },
  { id: 31, text: '방을 정리하는 스타일은...', optionA: '정리 안 해도 괜찮아요', optionB: '가끔 정리해요', optionC: '항상 깔끔하게 해요', dimension: 'JP', scoring: { A: -1, B: 0, C: 1 } },
  { id: 32, text: '계획이 갑자기 바뀌면...', optionA: '유연하게 받아들여요', optionB: '좀 불편하지만 괜찮아요', optionC: '많이 스트레스 받아요', dimension: 'JP', scoring: { A: -1, B: 0, C: 1 } },
];

export const highQuestions: Question[] = [
  { id: 1, text: '에너지를 충전하는 방법은?', optionA: '사람들과 어울리며 대화할 때 에너지가 생겨요', optionB: '상황에 따라 달라요', optionC: '혼자만의 시간을 가질 때 재충전돼요', dimension: 'EI', scoring: { A: 1, B: 0, C: -1 } },
  { id: 2, text: '처음 만나는 사람들 앞에서 나는...', optionA: '상대방이 먼저 다가오길 기다려요', optionB: '자연스럽게 대화해요', optionC: '먼저 다가가서 대화를 시작해요', dimension: 'EI', scoring: { A: -1, B: 0, C: 1 } },
  { id: 3, text: '그룹 프로젝트에서 나는...', optionA: '리더 역할을 맡아 진행하는 편이에요', optionB: '상황에 따라 역할이 바뀌어요', optionC: '맡은 역할을 묵묵히 수행해요', dimension: 'EI', scoring: { A: 1, B: 0, C: -1 } },
  { id: 4, text: '스트레스를 받으면 나는...', optionA: '친구들과 수다를 떨며 풀어요', optionB: '때에 따라 다르게 해소해요', optionC: '혼자 음악 듣거나 산책해요', dimension: 'EI', scoring: { A: 1, B: 0, C: -1 } },
  { id: 5, text: '파티나 모임에서 나는...', optionA: '조용히 있다가 일찍 나가요', optionB: '적당히 어울리다 나가요', optionC: '여러 사람과 이야기하며 즐겨요', dimension: 'EI', scoring: { A: -1, B: 0, C: 1 } },
  { id: 6, text: 'SNS 활동에 대해서는...', optionA: '자주 포스팅하고 소통해요', optionB: '가끔 활동해요', optionC: '보기만 하는 편이에요', dimension: 'EI', scoring: { A: 1, B: 0, C: -1 } },
  { id: 7, text: '의사소통 스타일은...', optionA: '글로 정리해서 전달해요', optionB: '상황에 맞게 선택해요', optionC: '말로 직접 전달해요', dimension: 'EI', scoring: { A: -1, B: 0, C: 1 } },
  { id: 8, text: '휴일에는...', optionA: '밖에서 사람들과 보내요', optionB: '균형있게 보내요', optionC: '집에서 조용히 보내요', dimension: 'EI', scoring: { A: 1, B: 0, C: -1 } },
  { id: 9, text: '친구 수에 대해서는...', optionA: '많은 친구가 있어요', optionB: '적당한 수의 친구가 있어요', optionC: '소수의 깊은 친구가 있어요', dimension: 'EI', scoring: { A: 1, B: 0, C: -1 } },
  { id: 10, text: '혼자 있는 시간은...', optionA: '심심하고 외로워요', optionB: '가끔은 필요해요', optionC: '편하고 좋아요', dimension: 'EI', scoring: { A: 1, B: 0, C: -1 } },
  { id: 11, text: '생각하는 방식에 대해 말하자면...', optionA: '이론적이고 추상적인 편이에요', optionB: '상황에 따라 달라요', optionC: '현실적이고 실용적인 편이에요', dimension: 'SN', scoring: { A: -1, B: 0, C: 1 } },
  { id: 12, text: '공부할 때 선호하는 방식은?', optionA: '구체적인 예시와 실습 위주가 좋아요', optionB: '균형있게 배워요', optionC: '전체적인 개념과 원리 파악이 먼저예요', dimension: 'SN', scoring: { A: 1, B: 0, C: -1 } },
  { id: 13, text: '진로를 생각할 때 나는...', optionA: '새롭고 혁신적인 분야에 관심이 가요', optionB: '다양한 가능성을 열어두어요', optionC: '안정적이고 현실 가능한 직업을 생각해요', dimension: 'SN', scoring: { A: -1, B: 0, C: 1 } },
  { id: 14, text: '정보를 받아들일 때 나는...', optionA: '구체적인 세부 사항에 집중해요', optionB: '전체와 세부를 함께 봐요', optionC: '전체적인 패턴과 의미를 찾아요', dimension: 'SN', scoring: { A: 1, B: 0, C: -1 } },
  { id: 15, text: '글이나 보고서를 쓸 때 나는...', optionA: '비유와 상징을 활용해 표현해요', optionB: '상황에 맞게 써요', optionC: '사실과 데이터를 바탕으로 써요', dimension: 'SN', scoring: { A: -1, B: 0, C: 1 } },
  { id: 16, text: '문제 해결 방식은...', optionA: '검증된 방법을 사용해요', optionB: '상황에 맞는 방법을 찾아요', optionC: '새로운 접근법을 시도해요', dimension: 'SN', scoring: { A: 1, B: 0, C: -1 } },
  { id: 17, text: '대화에서 선호하는 것은...', optionA: '구체적인 사실 이야기', optionB: '균형있게 대화해요', optionC: '아이디어와 가능성 이야기', dimension: 'SN', scoring: { A: 1, B: 0, C: -1 } },
  { id: 18, text: '시간에 대한 인식은...', optionA: '현재에 집중해요', optionB: '과거, 현재, 미래를 함께 생각해요', optionC: '미래를 많이 생각해요', dimension: 'SN', scoring: { A: 1, B: 0, C: -1 } },
  { id: 19, text: '변화에 대해서는...', optionA: '새로운 것을 환영해요', optionB: '필요하면 받아들여요', optionC: '익숙한 것이 편해요', dimension: 'SN', scoring: { A: -1, B: 0, C: 1 } },
  { id: 20, text: '관심 분야는...', optionA: '실용적인 것들', optionB: '다양해요', optionC: '이론적인 것들', dimension: 'SN', scoring: { A: 1, B: 0, C: -1 } },
  { id: 21, text: '결정을 내릴 때 나는...', optionA: '관련된 사람들의 감정을 고려해요', optionB: '이성과 감정을 함께 고려해요', optionC: '객관적인 기준과 논리를 중시해요', dimension: 'TF', scoring: { A: -1, B: 0, C: 1 } },
  { id: 22, text: '피드백을 줄 때 나는...', optionA: '솔직하고 직접적으로 말해요', optionB: '상황에 맞게 조절해요', optionC: '상대방 기분을 고려해 돌려 말해요', dimension: 'TF', scoring: { A: 1, B: 0, C: -1 } },
  { id: 23, text: '갈등 상황에서 나는...', optionA: '모두의 감정이 상하지 않게 조율해요', optionB: '적절한 해결책을 찾으려 해요', optionC: '공정하고 합리적인 해결책을 찾아요', dimension: 'TF', scoring: { A: -1, B: 0, C: 1 } },
  { id: 24, text: '친구의 실수에 대해 나는...', optionA: '객관적으로 잘못을 지적해줘요', optionB: '상황을 보고 판단해요', optionC: '감정을 먼저 위로하고 조언해요', dimension: 'TF', scoring: { A: 1, B: 0, C: -1 } },
  { id: 25, text: '비판을 받으면...', optionA: '논리적으로 분석해요', optionB: '내용을 생각해봐요', optionC: '감정적으로 받아들여요', dimension: 'TF', scoring: { A: 1, B: 0, C: -1 } },
  { id: 26, text: '중요한 것은...', optionA: '사실과 진실', optionB: '상황에 따라 달라요', optionC: '사람과 감정', dimension: 'TF', scoring: { A: 1, B: 0, C: -1 } },
  { id: 27, text: '리더로서 중요하게 생각하는 것은...', optionA: '구성원들의 감정 배려', optionB: '균형있는 운영', optionC: '목표 달성과 효율성', dimension: 'TF', scoring: { A: -1, B: 0, C: 1 } },
  { id: 28, text: '다른 사람을 평가할 때...', optionA: '객관적 기준으로 평가해요', optionB: '여러 면을 고려해요', optionC: '개인 사정을 고려해요', dimension: 'TF', scoring: { A: 1, B: 0, C: -1 } },
  { id: 29, text: '논쟁에서는...', optionA: '논리적 타당성이 중요해요', optionB: '상황에 맞게 대응해요', optionC: '관계 유지가 중요해요', dimension: 'TF', scoring: { A: 1, B: 0, C: -1 } },
  { id: 30, text: '사과할 때는...', optionA: '상대방 감정에 집중해요', optionB: '진심으로 사과해요', optionC: '문제점을 분석해서 말해요', dimension: 'TF', scoring: { A: -1, B: 0, C: 1 } },
  { id: 31, text: '일을 처리하는 방식은?', optionA: '유연하게 상황에 맞춰 처리해요', optionB: '적당히 계획하고 유연하게 해요', optionC: '계획을 세우고 체계적으로 진행해요', dimension: 'JP', scoring: { A: -1, B: 0, C: 1 } },
  { id: 32, text: '마감 기한에 대한 나의 태도는?', optionA: '여유있게 미리 완료하는 편이에요', optionB: '적당히 여유를 두고 해요', optionC: '마감 직전 집중력이 최고예요', dimension: 'JP', scoring: { A: 1, B: 0, C: -1 } },
  { id: 33, text: '일정이 바뀌었을 때 나는...', optionA: '불편하고 스트레스를 받아요', optionB: '좀 불편하지만 적응해요', optionC: '유연하게 적응하는 편이에요', dimension: 'JP', scoring: { A: 1, B: 0, C: -1 } },
  { id: 34, text: '여가 시간 활용에 대해...', optionA: '미리 계획한 활동을 해요', optionB: '대략적인 계획을 세워요', optionC: '그때그때 하고 싶은 걸 해요', dimension: 'JP', scoring: { A: 1, B: 0, C: -1 } },
  { id: 35, text: '책상이나 방 정리는...', optionA: '나만의 규칙대로 어질러져 있어요', optionB: '적당히 정리되어 있어요', optionC: '항상 깔끔하게 정돈되어 있어요', dimension: 'JP', scoring: { A: -1, B: 0, C: 1 } },
  { id: 36, text: '새로운 환경에 적응할 때...', optionA: '미리 정보를 수집하고 준비해요', optionB: '적당히 준비하고 적응해요', optionC: '가서 직접 경험하며 적응해요', dimension: 'JP', scoring: { A: 1, B: 0, C: -1 } },
  { id: 37, text: '인생에서 중요하게 생각하는 것은?', optionA: '자유로움과 다양한 경험', optionB: '균형 잡힌 삶', optionC: '안정감과 예측 가능한 미래', dimension: 'JP', scoring: { A: -1, B: 0, C: 1 } },
  { id: 38, text: '결정을 내릴 때...', optionA: '빨리 결정해요', optionB: '적당히 고민해요', optionC: '여러 선택지를 열어두어요', dimension: 'JP', scoring: { A: 1, B: 0, C: -1 } },
  { id: 39, text: '규칙에 대해서는...', optionA: '규칙을 따라요', optionB: '상황에 따라 달라요', optionC: '유연하게 해석해요', dimension: 'JP', scoring: { A: 1, B: 0, C: -1 } },
  { id: 40, text: '시간 관리는...', optionA: '계획적으로 해요', optionB: '적당히 해요', optionC: '자유롭게 해요', dimension: 'JP', scoring: { A: 1, B: 0, C: -1 } },
];

export const adultQuestions: Question[] = [
  { id: 1, text: '업무 후 에너지를 충전하는 방법은?', optionA: '동료들이나 친구들과 함께 시간을 보내요', optionB: '상황에 따라 달라요', optionC: '집에서 혼자 조용히 쉬어요', dimension: 'EI', scoring: { A: 1, B: 0, C: -1 } },
  { id: 2, text: '네트워킹 행사에서 나는...', optionA: '다양한 사람들에게 먼저 다가가요', optionB: '자연스럽게 대화에 참여해요', optionC: '아는 사람과만 대화해요', dimension: 'EI', scoring: { A: 1, B: 0, C: -1 } },
  { id: 3, text: '팀 회의에서 나는...', optionA: '적극적으로 의견을 제시해요', optionB: '필요할 때 발언해요', optionC: '경청하며 메모해요', dimension: 'EI', scoring: { A: 1, B: 0, C: -1 } },
  { id: 4, text: '주말 저녁 계획은...', optionA: '친구들과 만나거나 외출해요', optionB: '기분에 따라 달라요', optionC: '집에서 편하게 보내요', dimension: 'EI', scoring: { A: 1, B: 0, C: -1 } },
  { id: 5, text: '전화 통화에 대해서는...', optionA: '길게 이야기하는 게 좋아요', optionB: '필요한 만큼 해요', optionC: '가능하면 문자로 해요', dimension: 'EI', scoring: { A: 1, B: 0, C: -1 } },
  { id: 6, text: '아이디어가 떠오를 때...', optionA: '바로 주변 사람과 공유해요', optionB: '정리 후 공유해요', optionC: '혼자 곰곰이 생각해요', dimension: 'EI', scoring: { A: 1, B: 0, C: -1 } },
  { id: 7, text: '휴가 스타일은...', optionA: '여러 사람과 함께 여행해요', optionB: '소수의 사람과 여행해요', optionC: '혼자 또는 가족과 조용히 보내요', dimension: 'EI', scoring: { A: 1, B: 0, C: -1 } },
  { id: 8, text: '스트레스 해소법은...', optionA: '사람들과 어울리며 풀어요', optionB: '다양한 방법을 사용해요', optionC: '혼자만의 활동으로 풀어요', dimension: 'EI', scoring: { A: 1, B: 0, C: -1 } },
  { id: 9, text: '새로운 모임에 참석하면...', optionA: '먼저 인사하고 대화를 이끌어요', optionB: '자연스럽게 섞여요', optionC: '한쪽에서 상황을 지켜봐요', dimension: 'EI', scoring: { A: 1, B: 0, C: -1 } },
  { id: 10, text: '혼자 식사하는 것은...', optionA: '불편하고 외로워요', optionB: '상관없어요', optionC: '편하고 좋아요', dimension: 'EI', scoring: { A: 1, B: 0, C: -1 } },
  { id: 11, text: '의사결정 시 중요하게 여기는 것은...', optionA: '큰 그림과 가능성', optionB: '다양한 관점을 고려해요', optionC: '구체적인 사실과 데이터', dimension: 'SN', scoring: { A: -1, B: 0, C: 1 } },
  { id: 12, text: '회의 자료를 검토할 때...', optionA: '세부 사항을 꼼꼼히 확인해요', optionB: '전체와 세부를 함께 봐요', optionC: '핵심 컨셉과 방향에 집중해요', dimension: 'SN', scoring: { A: 1, B: 0, C: -1 } },
  { id: 13, text: '문제를 해결할 때...', optionA: '검증된 방법을 선호해요', optionB: '상황에 맞는 방법을 찾아요', optionC: '창의적인 접근을 시도해요', dimension: 'SN', scoring: { A: 1, B: 0, C: -1 } },
  { id: 14, text: '설명을 들을 때...', optionA: '구체적인 예시가 있어야 이해돼요', optionB: '둘 다 필요해요', optionC: '전체적인 개념 설명이 좋아요', dimension: 'SN', scoring: { A: 1, B: 0, C: -1 } },
  { id: 15, text: '미래 계획에 대해서는...', optionA: '현실적인 목표를 세워요', optionB: '적절히 균형을 맞춰요', optionC: '다양한 가능성을 열어두어요', dimension: 'SN', scoring: { A: 1, B: 0, C: -1 } },
  { id: 16, text: '새로운 프로젝트를 시작할 때...', optionA: '비전과 가능성에 집중해요', optionB: '전체적으로 검토해요', optionC: '실행 가능성을 먼저 따져요', dimension: 'SN', scoring: { A: -1, B: 0, C: 1 } },
  { id: 17, text: '경험에서 배우는 것은...', optionA: '구체적인 교훈', optionB: '다양한 것들', optionC: '인생의 패턴과 의미', dimension: 'SN', scoring: { A: 1, B: 0, C: -1 } },
  { id: 18, text: '관심사는 주로...', optionA: '실용적인 것들', optionB: '다양해요', optionC: '추상적이고 이론적인 것들', dimension: 'SN', scoring: { A: 1, B: 0, C: -1 } },
  { id: 19, text: '대화에서 더 흥미로운 것은...', optionA: '사실과 현실적인 이야기', optionB: '둘 다 흥미로워요', optionC: '아이디어와 미래에 대한 이야기', dimension: 'SN', scoring: { A: 1, B: 0, C: -1 } },
  { id: 20, text: '변화에 대해서는...', optionA: '익숙한 것이 좋아요', optionB: '필요하면 변화해요', optionC: '새로운 것을 환영해요', dimension: 'SN', scoring: { A: 1, B: 0, C: -1 } },
  { id: 21, text: '팀원의 실수를 발견했을 때...', optionA: '직접적으로 지적해요', optionB: '상황에 맞게 대처해요', optionC: '상대방 기분을 고려해 돌려 말해요', dimension: 'TF', scoring: { A: 1, B: 0, C: -1 } },
  { id: 22, text: '결정을 내릴 때 중요한 것은...', optionA: '논리와 객관적 분석', optionB: '균형 있는 고려', optionC: '관련된 사람들의 감정', dimension: 'TF', scoring: { A: 1, B: 0, C: -1 } },
  { id: 23, text: '갈등 상황에서의 접근 방식은...', optionA: '공정하고 논리적인 해결', optionB: '적절한 해결책을 찾아요', optionC: '관계 유지와 화합', dimension: 'TF', scoring: { A: 1, B: 0, C: -1 } },
  { id: 24, text: '비판을 받았을 때...', optionA: '내용을 분석해요', optionB: '생각해보고 판단해요', optionC: '감정적으로 상처받아요', dimension: 'TF', scoring: { A: 1, B: 0, C: -1 } },
  { id: 25, text: '칭찬할 때의 스타일은...', optionA: '구체적인 성과를 언급해요', optionB: '상황에 맞게 해요', optionC: '진심을 담아 격려해요', dimension: 'TF', scoring: { A: 1, B: 0, C: -1 } },
  { id: 26, text: '팀을 이끌 때 중요하게 여기는 것은...', optionA: '목표 달성과 효율성', optionB: '균형 있는 관리', optionC: '팀원들의 감정과 동기부여', dimension: 'TF', scoring: { A: 1, B: 0, C: -1 } },
  { id: 27, text: '의사결정에서 중요한 것은...', optionA: '팀의 화합과 공감', optionB: '다양한 요소를 고려해요', optionC: '사실에 기반한 판단', dimension: 'TF', scoring: { A: -1, B: 0, C: 1 } },
  { id: 28, text: '협상에서 중요하게 여기는 것은...', optionA: '공정한 결과', optionB: '균형 있는 합의', optionC: '모두가 만족하는 결과', dimension: 'TF', scoring: { A: 1, B: 0, C: -1 } },
  { id: 29, text: '피드백을 받을 때 선호하는 것은...', optionA: '솔직하고 구체적인 피드백', optionB: '건설적인 피드백', optionC: '격려와 함께 제안', dimension: 'TF', scoring: { A: 1, B: 0, C: -1 } },
  { id: 30, text: '좋은 결정의 기준은...', optionA: '논리적 타당성', optionB: '상황에 따라 달라요', optionC: '모두에게 좋은 결정', dimension: 'TF', scoring: { A: 1, B: 0, C: -1 } },
  { id: 31, text: '업무 진행 방식은...', optionA: '계획에 따라 체계적으로', optionB: '대략적인 계획 후 유연하게', optionC: '상황에 맞게 유연하게', dimension: 'JP', scoring: { A: 1, B: 0, C: -1 } },
  { id: 32, text: '마감에 대한 태도는...', optionA: '여유 있게 미리 완료해요', optionB: '적정 시간에 맞춰요', optionC: '마감 직전에 집중해요', dimension: 'JP', scoring: { A: 1, B: 0, C: -1 } },
  { id: 33, text: '일정 변경에 대해서는...', optionA: '스트레스를 받아요', optionB: '적응해요', optionC: '유연하게 대처해요', dimension: 'JP', scoring: { A: 1, B: 0, C: -1 } },
  { id: 34, text: '의사결정 속도는...', optionA: '신속하게 결정해요', optionB: '적절히 고민해요', optionC: '충분히 검토 후 결정해요', dimension: 'JP', scoring: { A: 1, B: 0, C: -1 } },
  { id: 35, text: '업무 환경에서 선호하는 것은...', optionA: '체계적이고 구조화된 환경', optionB: '적절한 자유가 있는 환경', optionC: '자유롭고 유연한 환경', dimension: 'JP', scoring: { A: 1, B: 0, C: -1 } },
  { id: 36, text: '새 프로젝트 시작 시...', optionA: '상세한 계획을 수립해요', optionB: '대략적인 방향을 정해요', optionC: '진행하면서 결정해요', dimension: 'JP', scoring: { A: 1, B: 0, C: -1 } },
  { id: 37, text: '예상치 못한 기회가 왔을 때...', optionA: '기존 계획을 유지해요', optionB: '상황을 보고 판단해요', optionC: '유연하게 받아들여요', dimension: 'JP', scoring: { A: 1, B: 0, C: -1 } },
  { id: 38, text: '규칙과 절차에 대해서는...', optionA: '철저히 따라요', optionB: '대체로 따르되 유연하게', optionC: '상황에 맞게 조정해요', dimension: 'JP', scoring: { A: 1, B: 0, C: -1 } },
  { id: 39, text: '멀티태스킹에 대해서는...', optionA: '한 가지씩 집중해요', optionB: '필요에 따라 해요', optionC: '여러 일을 동시에 해요', dimension: 'JP', scoring: { A: 1, B: 0, C: -1 } },
  { id: 40, text: '업무 공간 정리는...', optionA: '깔끔하게 정돈해요', optionB: '적당히 정리해요', optionC: '나만의 방식으로 두어요', dimension: 'JP', scoring: { A: 1, B: 0, C: -1 } },
  { id: 41, text: '일과 삶의 균형에서...', optionA: '계획적으로 관리해요', optionB: '적절히 조절해요', optionC: '자연스럽게 흘러가게 해요', dimension: 'JP', scoring: { A: 1, B: 0, C: -1 } },
  { id: 42, text: '목표 설정 시...', optionA: '구체적인 목표와 기한을 정해요', optionB: '대략적인 방향을 정해요', optionC: '유연한 목표를 세워요', dimension: 'JP', scoring: { A: 1, B: 0, C: -1 } },
  { id: 43, text: '여행 계획에 대해서는...', optionA: '상세히 계획해요', optionB: '대략적으로 정해요', optionC: '즉흥적으로 정해요', dimension: 'JP', scoring: { A: 1, B: 0, C: -1 } },
  { id: 44, text: '시간 약속에 대해서는...', optionA: '항상 미리 도착해요', optionB: '시간에 맞춰 도착해요', optionC: '종종 늦어요', dimension: 'JP', scoring: { A: 1, B: 0, C: -1 } },
  { id: 45, text: '새로운 정보를 접할 때...', optionA: '정리해서 저장해요', optionB: '필요한 것만 기억해요', optionC: '필요할 때 다시 찾아요', dimension: 'JP', scoring: { A: 1, B: 0, C: -1 } },
  { id: 46, text: '책임감에 대해서는...', optionA: '맡은 일은 끝까지 해요', optionB: '최선을 다해요', optionC: '유연하게 대처해요', dimension: 'JP', scoring: { A: 1, B: 0, C: -1 } },
  { id: 47, text: '결과물에 대해서는...', optionA: '완벽을 추구해요', optionB: '충분히 좋으면 만족해요', optionC: '과정이 중요해요', dimension: 'JP', scoring: { A: 1, B: 0, C: -1 } },
  { id: 48, text: '인생의 방향에 대해서는...', optionA: '명확한 계획이 있어요', optionB: '대략적인 방향이 있어요', optionC: '열린 마음으로 살아가요', dimension: 'JP', scoring: { A: 1, B: 0, C: -1 } },
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
    animalImage: 'intj_wise_owl_mascot.png'
  },
  INTP: {
    type: 'INTP',
    nickname: '호기심 많은 탐구가',
    description: '끝없는 호기심으로 세상을 탐구하는 사람이에요. "왜?"라는 질문을 자주 하고, 새로운 아이디어를 생각해내는 것을 좋아해요. 논리적이고 분석적인 사고를 가지고 있어요.',
    strengths: ['분석적 사고', '창의적 문제 해결', '이론적 이해력', '객관적 판단'],
    activities: ['코딩이나 프로그래밍', '수학 문제 풀기', '과학 다큐멘터리 보기', '발명품 구상하기'],
    animal: '부엉이',
    color: 'from-cyan-500 to-blue-600',
    animalImage: 'intp_curious_owl_mascot.png'
  },
  ENTJ: {
    type: 'ENTJ',
    nickname: '타고난 리더',
    description: '자신감 있고 카리스마가 넘치는 리더예요. 팀을 이끌고 목표를 달성하는 것을 좋아해요. 효율적이고 결단력 있게 일을 처리하며, 다른 사람들에게 동기를 부여하는 능력이 뛰어나요.',
    strengths: ['리더십', '결단력', '효율적인 계획', '설득력'],
    activities: ['팀 프로젝트 이끌기', '토론하기', '목표 세우고 달성하기', '새로운 것 배우기'],
    animal: '사자',
    color: 'from-amber-500 to-orange-600',
    animalImage: 'entj_lion_leader_mascot.png'
  },
  ENTP: {
    type: 'ENTP',
    nickname: '창의적인 도전가',
    description: '새로운 아이디어와 가능성을 탐험하는 것을 좋아해요. 토론을 즐기고, 다양한 관점에서 생각하는 능력이 뛰어나요. 창의적이고 재치있으며, 문제를 새로운 방식으로 해결해요.',
    strengths: ['창의력', '빠른 적응력', '토론 능력', '다양한 관점 이해'],
    activities: ['새로운 아이디어 발표하기', '토론 대회', '브레인스토밍', '발명하기'],
    animal: '여우',
    color: 'from-rose-500 to-pink-600',
    animalImage: 'entp_clever_fox_mascot.png'
  },
  INFJ: {
    type: 'INFJ',
    nickname: '통찰력 있는 이상주의자',
    description: '깊은 통찰력으로 사람들의 마음을 이해해요. 조용하지만 확고한 가치관을 가지고 있고, 다른 사람들을 돕는 것에서 의미를 찾아요. 창의적이고 이상적인 비전을 가지고 있어요.',
    strengths: ['공감 능력', '통찰력', '창의적 사고', '헌신적인 태도'],
    activities: ['글쓰기', '봉사 활동', '예술 감상', '깊은 대화 나누기'],
    animal: '늑대',
    color: 'from-emerald-500 to-teal-600',
    animalImage: 'infj_wise_wolf_mascot.png'
  },
  INFP: {
    type: 'INFP',
    nickname: '꿈꾸는 이상주의자',
    description: '풍부한 상상력과 깊은 감정을 가진 사람이에요. 자신만의 가치관을 중요하게 여기고, 진정성 있는 삶을 추구해요. 예술적이고 창의적이며, 다른 사람들의 감정에 민감해요.',
    strengths: ['창의력', '공감 능력', '진정성', '적응력'],
    activities: ['시나 소설 쓰기', '음악 듣기', '예술 활동', '자연 속 산책'],
    animal: '유니콘',
    color: 'from-violet-500 to-purple-600',
    animalImage: 'infp_unicorn_dreamer_mascot.png'
  },
  ENFJ: {
    type: 'ENFJ',
    nickname: '따뜻한 리더',
    description: '다른 사람들을 이끌고 격려하는 것을 좋아해요. 카리스마가 있고, 사람들의 잠재력을 이끌어내는 능력이 있어요. 조화롭고 따뜻한 관계를 중요하게 생각해요.',
    strengths: ['리더십', '공감 능력', '소통 능력', '동기 부여'],
    activities: ['멘토링 하기', '그룹 활동 이끌기', '봉사 활동', '이야기 나누기'],
    animal: '돌고래',
    color: 'from-sky-500 to-blue-600',
    animalImage: 'enfj_caring_dolphin_mascot.png'
  },
  ENFP: {
    type: 'ENFP',
    nickname: '열정적인 탐험가',
    description: '에너지가 넘치고 열정적인 사람이에요! 새로운 사람을 만나고 새로운 경험을 하는 것을 좋아해요. 창의적이고 자유로우며, 긍정적인 에너지로 주변 사람들에게 영감을 줘요.',
    strengths: ['창의력', '사교성', '열정', '적응력'],
    activities: ['새로운 친구 사귀기', '창작 활동', '여행', '브레인스토밍'],
    animal: '나비',
    color: 'from-orange-500 to-yellow-500',
    animalImage: 'enfp_butterfly_explorer_mascot.png'
  },
  ISTJ: {
    type: 'ISTJ',
    nickname: '신뢰할 수 있는 책임자',
    description: '믿음직스럽고 책임감이 강한 사람이에요. 규칙을 잘 따르고, 맡은 일을 끝까지 완수해요. 체계적이고 꼼꼼하며, 실용적인 방식으로 문제를 해결해요.',
    strengths: ['책임감', '신뢰성', '체계적인 사고', '인내심'],
    activities: ['계획표 만들기', '컬렉션 정리하기', '역사 공부하기', '규칙적인 운동'],
    animal: '비버',
    color: 'from-slate-500 to-gray-600',
    animalImage: 'istj_beaver_worker_mascot.png'
  },
  ISFJ: {
    type: 'ISFJ',
    nickname: '따뜻한 수호자',
    description: '다른 사람들을 돌보고 보호하는 것을 좋아해요. 세심하고 배려심이 깊으며, 조용히 헌신하는 타입이에요. 전통과 규칙을 존중하고, 안정적인 환경을 만들어요.',
    strengths: ['배려심', '신뢰성', '세심함', '헌신'],
    activities: ['친구 돕기', '요리하기', '정리정돈', '가족과 시간 보내기'],
    animal: '토끼',
    color: 'from-pink-400 to-rose-500',
    animalImage: 'isfj_caring_rabbit_mascot.png'
  },
  ESTJ: {
    type: 'ESTJ',
    nickname: '결단력 있는 관리자',
    description: '조직적이고 효율적으로 일을 처리하는 사람이에요. 리더십이 있고, 규칙과 질서를 중요하게 생각해요. 실용적이고 논리적이며, 목표 달성을 위해 열심히 노력해요.',
    strengths: ['조직력', '리더십', '실행력', '책임감'],
    activities: ['학급 회장하기', '프로젝트 관리', '스포츠 팀 활동', '계획 세우기'],
    animal: '독수리',
    color: 'from-red-500 to-orange-600',
    animalImage: 'estj_eagle_leader_mascot.png'
  },
  ESFJ: {
    type: 'ESFJ',
    nickname: '사교적인 돌봄이',
    description: '친절하고 사교적이며, 다른 사람들과 어울리는 것을 좋아해요. 조화로운 관계를 만들고 유지하는 데 뛰어나요. 실용적이고 협력적이며, 다른 사람들을 돕는 것에서 기쁨을 느껴요.',
    strengths: ['사교성', '협력심', '조직력', '배려심'],
    activities: ['파티 계획하기', '친구들과 어울리기', '봉사 활동', '팀 활동'],
    animal: '강아지',
    color: 'from-yellow-400 to-amber-500',
    animalImage: 'esfj_friendly_dog_mascot.png'
  },
  ISTP: {
    type: 'ISTP',
    nickname: '논리적인 탐구가',
    description: '손재주가 뛰어나고 논리적인 사람이에요. 실용적인 문제를 해결하는 것을 좋아하고, 새로운 것을 분석하고 이해하려고 해요. 조용하지만 모험을 즐기기도 해요.',
    strengths: ['논리적 사고', '손재주', '문제 해결력', '침착함'],
    activities: ['조립하기', '실험하기', '스포츠', '게임'],
    animal: '표범',
    color: 'from-zinc-500 to-slate-600',
    animalImage: 'istp_cool_leopard_mascot.png'
  },
  ISFP: {
    type: 'ISFP',
    nickname: '온화한 예술가',
    description: '예술적 감각이 뛰어나고 온화한 성격이에요. 현재의 순간을 즐기고, 자신만의 방식으로 세상을 표현해요. 겸손하고 친절하며, 조화로운 것을 추구해요.',
    strengths: ['예술적 감각', '적응력', '친절함', '관찰력'],
    activities: ['그림 그리기', '음악 연주하기', '자연 탐험', '사진 찍기'],
    animal: '고양이',
    color: 'from-lime-500 to-green-600',
    animalImage: 'isfp_artistic_cat_mascot.png'
  },
  ESTP: {
    type: 'ESTP',
    nickname: '활동적인 모험가',
    description: '에너지가 넘치고 활동적인 사람이에요! 새로운 경험과 모험을 좋아하고, 순간의 즐거움을 추구해요. 문제 상황에서 빠르게 대처하고, 현실적인 해결책을 찾아요.',
    strengths: ['순발력', '대담함', '현실감각', '사교성'],
    activities: ['스포츠', '여행', '새로운 도전', '친구들과 놀기'],
    animal: '치타',
    color: 'from-red-500 to-rose-600',
    animalImage: 'estp_cheetah_adventurer_mascot.png'
  },
  ESFP: {
    type: 'ESFP',
    nickname: '즐거운 엔터테이너',
    description: '밝고 긍정적인 에너지로 주변을 즐겁게 해요! 사람들과 함께하는 것을 좋아하고, 현재의 순간을 최대한 즐기려고 해요. 자연스럽고 유쾌하며, 분위기를 띄우는 능력이 있어요.',
    strengths: ['사교성', '긍정적 에너지', '적응력', '표현력'],
    activities: ['공연하기', '파티 즐기기', '춤추기', '새로운 경험'],
    animal: '앵무새',
    color: 'from-fuchsia-500 to-pink-600',
    animalImage: 'esfp_parrot_entertainer_mascot.png'
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
    case 'adult':
      return adultQuestions;
  }
}

export function calculateMBTI(answers: Record<number, Answer>, questions: Question[]): string {
  const scores = { EI: 0, SN: 0, TF: 0, JP: 0 };
  
  questions.forEach((question) => {
    const answer = answers[question.id];
    if (!answer) return;
    
    const score = question.scoring[answer];
    scores[question.dimension] += score;
  });
  
  const e_i = scores.EI >= 0 ? 'E' : 'I';
  const s_n = scores.SN >= 0 ? 'S' : 'N';
  const t_f = scores.TF >= 0 ? 'T' : 'F';
  const j_p = scores.JP >= 0 ? 'J' : 'P';
  
  return `${e_i}${s_n}${t_f}${j_p}`;
}
