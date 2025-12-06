import intjOwl from '@assets/generated_images/wise_owl_intj_mascot.png';
import intpOwl from '@assets/generated_images/curious_owl_intp_mascot.png';
import entjLion from '@assets/generated_images/lion_leader_entj_mascot.png';
import entpFox from '@assets/generated_images/clever_fox_entp_mascot.png';
import infjWolf from '@assets/generated_images/gentle_wolf_infj_mascot.png';
import infpUnicorn from '@assets/generated_images/dreamy_unicorn_infp_mascot.png';
import enfjDolphin from '@assets/generated_images/caring_dolphin_enfj_mascot.png';
import enfpButterfly from '@assets/generated_images/butterfly_enfp_mascot.png';
import istjBeaver from '@assets/generated_images/hardworking_beaver_istj.png';
import isfjBunny from '@assets/generated_images/caring_bunny_isfj_mascot.png';
import estjEagle from '@assets/generated_images/confident_eagle_estj_mascot.png';
import esfjPuppy from '@assets/generated_images/friendly_puppy_esfj_mascot.png';
import istpLeopard from '@assets/generated_images/cool_leopard_istp_mascot.png';
import isfpCat from '@assets/generated_images/artistic_cat_isfp_mascot.png';
import estpCheetah from '@assets/generated_images/adventurous_cheetah_estp.png';
import esfpParrot from '@assets/generated_images/cheerful_parrot_esfp_mascot.png';

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
  shortDescription: string;
  detailedDescription: string;
  howIThink: string;
  howIActWithFriends: string;
  howIStudy: string;
  strengths: string[];
  growthAreas: string[];
  activities: string[];
  famousCharacters: string[];
  animal: string;
  animalDescription: string;
  color: string;
  image: string;
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
    shortDescription: '독립적이고 전략적인 사고를 가진 사람이에요.',
    detailedDescription: '혼자서 깊이 생각하는 것을 좋아하고, 한 번 목표를 세우면 끝까지 달성하려고 노력해요. 지식을 쌓는 것을 좋아하며, 미래를 계획하는 것에 뛰어나요. 다른 사람들이 보지 못하는 패턴을 발견하고, 복잡한 문제를 해결하는 데 탁월한 능력이 있어요.',
    howIThink: '나는 항상 "왜?"라는 질문을 해요. 모든 것에는 이유가 있다고 생각하고, 그 이유를 찾아내려고 노력해요. 머릿속에서 여러 가지 시나리오를 그려보고, 가장 좋은 방법을 찾아요.',
    howIActWithFriends: '많은 친구보다는 깊이 있는 몇 명의 친구와 시간을 보내는 것을 좋아해요. 수다보다는 의미 있는 대화를 나누고 싶어요. 가끔 혼자만의 시간이 필요할 때가 있어요.',
    howIStudy: '스스로 계획을 세워서 공부하는 게 좋아요. 전체적인 그림을 먼저 이해하고, 세부적인 내용을 채워나가는 방식으로 공부해요. 궁금한 건 끝까지 파고들어요.',
    strengths: ['뛰어난 논리적 사고력', '장기적인 계획 수립 능력', '독립적으로 배우는 힘', '복잡한 문제 해결 능력'],
    growthAreas: ['다른 사람의 감정도 고려해보기', '가끔은 즉흥적으로 행동해보기', '완벽하지 않아도 괜찮다고 생각하기'],
    activities: ['과학 실험하기', '체스나 전략 게임', '추리 소설 읽기', '미래 계획 세우기', '다큐멘터리 보기'],
    famousCharacters: ['셜록 홈즈', '배트맨', '간달프'],
    animal: '올빼미',
    animalDescription: '올빼미처럼 밤에 조용히 생각하는 것을 좋아하고, 날카로운 통찰력으로 다른 사람들이 보지 못하는 것을 봐요. 지혜롭고 신중하며, 혼자 있는 시간을 소중히 여겨요.',
    color: 'from-indigo-500 to-purple-600',
    image: intjOwl
  },
  INTP: {
    type: 'INTP',
    nickname: '호기심 많은 탐구가',
    shortDescription: '끝없는 호기심으로 세상을 탐구하는 사람이에요.',
    detailedDescription: '"왜?"라는 질문을 자주 하고, 새로운 아이디어를 생각해내는 것을 좋아해요. 논리적이고 분석적인 사고를 가지고 있어서 복잡한 이론도 쉽게 이해해요. 머릿속에 항상 새로운 아이디어가 떠다니고 있어요.',
    howIThink: '모든 것에 호기심을 느껴요. "만약 ~라면?"이라는 상상을 자주 하고, 새로운 아이디어를 탐구하는 게 재미있어요. 여러 가지 가능성을 생각해보는 걸 좋아해요.',
    howIActWithFriends: '비슷한 관심사를 가진 친구와 깊은 대화를 나누는 걸 좋아해요. 때로는 혼자 생각에 빠져있어서 조용해 보일 수 있어요. 하지만 관심 있는 주제가 나오면 정말 많이 이야기해요!',
    howIStudy: '암기보다는 원리를 이해하려고 해요. 왜 그런지 이해하면 기억에 더 오래 남아요. 관심 있는 분야는 혼자서도 깊이 파고들어요.',
    strengths: ['분석적이고 논리적인 사고', '창의적인 문제 해결', '복잡한 이론 이해력', '객관적인 판단력'],
    growthAreas: ['생각을 실행으로 옮기기', '시간 관리 연습하기', '감정 표현 연습하기'],
    activities: ['코딩이나 프로그래밍', '수학 퍼즐 풀기', '과학 다큐멘터리 보기', '새로운 발명품 구상하기'],
    famousCharacters: ['아인슈타인', '스폰지밥의 플랑크톤', '알버트'],
    animal: '부엉이',
    animalDescription: '부엉이처럼 호기심이 많고 밤늦게까지 생각에 빠져 있어요. 조용히 관찰하다가 중요한 순간에 날카로운 통찰을 보여줘요.',
    color: 'from-cyan-500 to-blue-600',
    image: intpOwl
  },
  ENTJ: {
    type: 'ENTJ',
    nickname: '타고난 리더',
    shortDescription: '자신감 있고 카리스마가 넘치는 리더예요.',
    detailedDescription: '팀을 이끌고 목표를 달성하는 것을 좋아해요. 효율적이고 결단력 있게 일을 처리하며, 다른 사람들에게 동기를 부여하는 능력이 뛰어나요. 큰 그림을 보고 그것을 현실로 만들어내는 능력이 있어요.',
    howIThink: '목표를 정하고 그것을 이루기 위한 계획을 세워요. 효율적인 방법을 찾는 걸 좋아하고, 문제가 생기면 빠르게 해결책을 찾아요.',
    howIActWithFriends: '친구들과 함께 무언가를 계획하고 실행하는 걸 좋아해요. 자연스럽게 리더 역할을 맡게 되는 경우가 많아요. 솔직하게 의견을 말하는 편이에요.',
    howIStudy: '목표를 세우고 계획적으로 공부해요. 시간을 효율적으로 사용하려고 노력하고, 결과를 확인하며 공부해요.',
    strengths: ['탁월한 리더십', '빠른 결단력', '효율적인 계획 수립', '강한 설득력'],
    growthAreas: ['다른 사람의 속도 존중하기', '감정적인 면도 고려하기', '가끔은 쉬어가기'],
    activities: ['팀 프로젝트 이끌기', '토론 대회', '목표 세우고 달성하기', '새로운 것 배우기'],
    famousCharacters: ['아이언맨 토니 스타크', '심바', '해리포터의 헤르미온느'],
    animal: '사자',
    animalDescription: '사자처럼 당당하고 카리스마가 있어요. 무리를 이끄는 것을 자연스럽게 해내고, 목표를 향해 용감하게 나아가요.',
    color: 'from-amber-500 to-orange-600',
    image: entjLion
  },
  ENTP: {
    type: 'ENTP',
    nickname: '창의적인 도전가',
    shortDescription: '새로운 아이디어와 가능성을 탐험하는 것을 좋아해요.',
    detailedDescription: '토론을 즐기고, 다양한 관점에서 생각하는 능력이 뛰어나요. 창의적이고 재치있으며, 문제를 새로운 방식으로 해결해요. 규칙에 얽매이지 않고 자유롭게 생각하는 것을 좋아해요.',
    howIThink: '항상 새로운 가능성을 찾아요. "다른 방법은 없을까?"라고 생각하고, 기존의 방식에 도전하는 걸 좋아해요. 토론을 통해 생각을 발전시켜요.',
    howIActWithFriends: '재미있고 활기찬 분위기를 만들어요. 친구들과 아이디어를 나누고 토론하는 걸 좋아해요. 때때로 장난스럽고 유머러스한 면을 보여줘요.',
    howIStudy: '하나의 방법만 고집하지 않아요. 다양한 자료를 찾아보고, 나만의 방식을 만들어요. 재미있는 것에 집중하면 시간 가는 줄 몰라요.',
    strengths: ['풍부한 창의력', '빠른 적응력', '뛰어난 토론 능력', '다양한 관점 이해'],
    growthAreas: ['한 가지에 집중하기', '시작한 일 끝까지 마무리하기', '다른 사람 감정 배려하기'],
    activities: ['새로운 아이디어 발표하기', '토론 대회 참가', '브레인스토밍', '발명품 만들기'],
    famousCharacters: ['잭 스패로우', '데드풀', '짱구'],
    animal: '여우',
    animalDescription: '여우처럼 재치있고 영리해요. 어떤 상황에서도 창의적인 해결책을 찾아내고, 빠르게 적응해요.',
    color: 'from-rose-500 to-pink-600',
    image: entpFox
  },
  INFJ: {
    type: 'INFJ',
    nickname: '통찰력 있는 이상주의자',
    shortDescription: '깊은 통찰력으로 사람들의 마음을 이해해요.',
    detailedDescription: '조용하지만 확고한 가치관을 가지고 있고, 다른 사람들을 돕는 것에서 의미를 찾아요. 창의적이고 이상적인 비전을 가지고 있어서 세상을 더 좋은 곳으로 만들고 싶어해요.',
    howIThink: '사람들의 마음을 읽는 것 같은 느낌이 들어요. 말하지 않아도 상대방의 기분을 알 수 있어요. 더 나은 미래를 상상하고, 그것을 위해 노력해요.',
    howIActWithFriends: '진정한 우정을 소중히 여겨요. 표면적인 대화보다 깊고 의미 있는 대화를 나누고 싶어요. 친구의 고민을 진심으로 들어주고 도와주려 해요.',
    howIStudy: '의미 있는 것을 공부할 때 더 집중이 잘 돼요. 단순 암기보다 이해하고 연결 짓는 것을 좋아해요.',
    strengths: ['뛰어난 공감 능력', '깊은 통찰력', '창의적인 사고', '헌신적인 태도'],
    growthAreas: ['자신을 위한 시간 갖기', '완벽주의 내려놓기', '현실적인 목표 세우기'],
    activities: ['글쓰기', '봉사 활동', '예술 감상', '깊은 대화 나누기', '심리학 공부'],
    famousCharacters: ['간달프', '덤블도어', '엘사'],
    animal: '늑대',
    animalDescription: '늑대처럼 충성스럽고 직관적이에요. 무리를 위해 헌신하고, 깊은 유대감을 중요하게 여겨요. 조용하지만 강한 힘을 가지고 있어요.',
    color: 'from-emerald-500 to-teal-600',
    image: infjWolf
  },
  INFP: {
    type: 'INFP',
    nickname: '꿈꾸는 이상주의자',
    shortDescription: '풍부한 상상력과 깊은 감정을 가진 사람이에요.',
    detailedDescription: '자신만의 가치관을 중요하게 여기고, 진정성 있는 삶을 추구해요. 예술적이고 창의적이며, 다른 사람들의 감정에 민감해요. 세상의 아름다움을 발견하고 표현하는 것을 좋아해요.',
    howIThink: '상상의 세계에서 많은 시간을 보내요. 가능성과 꿈을 생각하는 것을 좋아해요. 내 가치관에 맞는지가 중요한 판단 기준이에요.',
    howIActWithFriends: '진정성 있는 관계를 원해요. 겉모습보다 진짜 마음을 중요하게 생각해요. 친구의 감정을 잘 이해하고 공감해줘요.',
    howIStudy: '관심 있는 분야에서는 놀라운 집중력을 보여요. 창의적인 방식으로 공부하는 것을 좋아해요. 나만의 노트 정리 방법이 있어요.',
    strengths: ['풍부한 창의력', '깊은 공감 능력', '진정성', '유연한 적응력'],
    growthAreas: ['비판을 개인적으로 받아들이지 않기', '결정을 미루지 않기', '현실적인 계획 세우기'],
    activities: ['시나 소설 쓰기', '음악 감상', '그림 그리기', '자연 속 산책', '일기 쓰기'],
    famousCharacters: ['프로도 배긴스', '벨', '아리엘'],
    animal: '유니콘',
    animalDescription: '유니콘처럼 특별하고 독특해요. 상상력이 풍부하고, 순수한 마음을 가지고 있어요. 다른 사람들에게 희망과 영감을 줘요.',
    color: 'from-violet-500 to-purple-600',
    image: infpUnicorn
  },
  ENFJ: {
    type: 'ENFJ',
    nickname: '따뜻한 리더',
    shortDescription: '다른 사람들을 이끌고 격려하는 것을 좋아해요.',
    detailedDescription: '카리스마가 있고, 사람들의 잠재력을 이끌어내는 능력이 있어요. 조화롭고 따뜻한 관계를 중요하게 생각하고, 모두가 행복하기를 바라요. 자연스럽게 사람들을 하나로 모으는 능력이 있어요.',
    howIThink: '다른 사람들의 기분과 필요를 먼저 생각해요. 어떻게 하면 모두가 잘 지낼 수 있을지 고민해요. 사람들의 성장을 도와주는 것에서 기쁨을 느껴요.',
    howIActWithFriends: '친구들과 함께하는 시간을 소중히 여겨요. 친구들의 이야기를 진심으로 들어주고, 격려해줘요. 모임을 계획하고 분위기를 이끄는 역할을 자주 해요.',
    howIStudy: '친구들과 함께 공부하면 더 잘 돼요. 다른 사람에게 설명해주면서 더 잘 이해하게 돼요.',
    strengths: ['타고난 리더십', '뛰어난 공감 능력', '훌륭한 소통 능력', '동기 부여 능력'],
    growthAreas: ['자신의 필요도 챙기기', '모든 사람을 만족시키려 하지 않기', '거절하는 법 배우기'],
    activities: ['멘토링 하기', '그룹 활동 이끌기', '봉사 활동', '친구들과 이야기 나누기'],
    famousCharacters: ['모아나', '오프라 윈프리', '캡틴 아메리카'],
    animal: '돌고래',
    animalDescription: '돌고래처럼 사교적이고 똑똑해요. 다른 돌고래들과 함께 있는 것을 좋아하고, 위험에 처한 친구를 도와줘요. 항상 밝고 긍정적인 에너지를 가지고 있어요.',
    color: 'from-sky-500 to-blue-600',
    image: enfjDolphin
  },
  ENFP: {
    type: 'ENFP',
    nickname: '열정적인 탐험가',
    shortDescription: '에너지가 넘치고 열정적인 사람이에요!',
    detailedDescription: '새로운 사람을 만나고 새로운 경험을 하는 것을 좋아해요. 창의적이고 자유로우며, 긍정적인 에너지로 주변 사람들에게 영감을 줘요. 가능성을 보고 열정적으로 추구해요.',
    howIThink: '항상 새롭고 흥미로운 것에 끌려요. "이것도 해보고 싶고, 저것도 해보고 싶어!" 가능성이 넘치는 세상이 신나요.',
    howIActWithFriends: '새로운 친구 사귀는 것을 좋아해요! 친구들과 함께 재미있는 일을 하고, 웃고 떠드는 게 좋아요. 친구들에게 열정과 에너지를 전파해요.',
    howIStudy: '재미있으면 공부도 잘 돼요! 다양한 방법을 시도해보고, 지루하면 방법을 바꿔요. 관심 있는 분야에서는 놀라운 집중력을 보여요.',
    strengths: ['넘치는 창의력', '뛰어난 사교성', '열정', '빠른 적응력'],
    growthAreas: ['집중력 유지하기', '한 가지 일 마무리하기', '일상적인 일도 처리하기'],
    activities: ['새로운 친구 사귀기', '창작 활동', '여행', '아이디어 나누기', '파티 계획하기'],
    famousCharacters: ['라푼젤', '피터팬', '스폰지밥'],
    animal: '나비',
    animalDescription: '나비처럼 자유롭고 아름다워요. 이곳저곳 날아다니며 새로운 것을 탐험하고, 어디를 가든 밝은 에너지를 전해요. 변화를 두려워하지 않아요.',
    color: 'from-orange-500 to-yellow-500',
    image: enfpButterfly
  },
  ISTJ: {
    type: 'ISTJ',
    nickname: '신뢰할 수 있는 책임자',
    shortDescription: '믿음직스럽고 책임감이 강한 사람이에요.',
    detailedDescription: '규칙을 잘 따르고, 맡은 일을 끝까지 완수해요. 체계적이고 꼼꼼하며, 실용적인 방식으로 문제를 해결해요. 약속을 지키고 신뢰를 중요하게 생각해요.',
    howIThink: '사실과 경험을 바탕으로 생각해요. 검증된 방법을 선호하고, 계획대로 일이 진행되는 것을 좋아해요. 책임감이 강해서 맡은 일은 반드시 해내요.',
    howIActWithFriends: '약속을 꼭 지키고, 믿을 수 있는 친구예요. 시끄러운 파티보다 조용한 모임을 좋아해요. 오랜 친구와의 관계를 소중히 여겨요.',
    howIStudy: '계획표대로 꾸준히 공부해요. 정리를 잘 하고, 반복해서 익히는 것을 좋아해요. 차근차근 기초부터 다져요.',
    strengths: ['강한 책임감', '뛰어난 신뢰성', '체계적인 사고', '끈기'],
    growthAreas: ['변화에 유연해지기', '새로운 방법 시도해보기', '감정 표현 연습하기'],
    activities: ['계획표 만들기', '수집품 정리하기', '역사 공부', '규칙적인 운동'],
    famousCharacters: ['허마이오니 그레인저', '캡틴 홀트', '닥터 왓슨'],
    animal: '비버',
    animalDescription: '비버처럼 부지런하고 성실해요. 꾸준히 노력해서 든든한 집을 짓고, 맡은 일은 반드시 완성해요. 믿음직스럽고 책임감이 강해요.',
    color: 'from-slate-500 to-gray-600',
    image: istjBeaver
  },
  ISFJ: {
    type: 'ISFJ',
    nickname: '따뜻한 수호자',
    shortDescription: '다른 사람들을 돌보고 보호하는 것을 좋아해요.',
    detailedDescription: '세심하고 배려심이 깊으며, 조용히 헌신하는 타입이에요. 전통과 규칙을 존중하고, 안정적인 환경을 만들어요. 사랑하는 사람들을 위해 무엇이든 할 준비가 되어 있어요.',
    howIThink: '다른 사람들이 편안한지 먼저 생각해요. 세세한 것까지 기억하고, 필요한 것을 미리 챙겨요. 조화로운 분위기를 만들고 싶어해요.',
    howIActWithFriends: '친구들을 잘 챙기고 돌봐요. 친구의 생일이나 중요한 날을 기억하고, 작은 것도 세심하게 신경 써요. 갈등을 피하고 평화를 유지하려 해요.',
    howIStudy: '꾸준히 노력하는 타입이에요. 노트 정리를 잘 하고, 복습을 철저히 해요. 조용한 환경에서 집중이 잘 돼요.',
    strengths: ['깊은 배려심', '뛰어난 신뢰성', '세심함', '헌신적인 태도'],
    growthAreas: ['자신의 필요도 표현하기', '변화를 두려워하지 않기', '거절하는 법 배우기'],
    activities: ['친구 돕기', '요리하기', '방 꾸미기', '가족과 시간 보내기'],
    famousCharacters: ['신데렐라', '캡틴 아메리카', '왓슨'],
    animal: '토끼',
    animalDescription: '토끼처럼 다정하고 따뜻해요. 가족과 친구를 소중히 여기고, 안전하고 편안한 보금자리를 만들어요. 부드럽지만 필요할 때는 용감해질 수 있어요.',
    color: 'from-pink-400 to-rose-500',
    image: isfjBunny
  },
  ESTJ: {
    type: 'ESTJ',
    nickname: '결단력 있는 관리자',
    shortDescription: '조직적이고 효율적으로 일을 처리하는 사람이에요.',
    detailedDescription: '리더십이 있고, 규칙과 질서를 중요하게 생각해요. 실용적이고 논리적이며, 목표 달성을 위해 열심히 노력해요. 책임감이 강하고 신뢰할 수 있어요.',
    howIThink: '명확한 규칙과 체계를 좋아해요. 효율적인 방법을 찾고, 목표를 향해 곧바로 나아가요. 결과를 중요하게 생각해요.',
    howIActWithFriends: '친구들과 함께 활동하는 것을 좋아해요. 자연스럽게 일을 계획하고 이끄는 역할을 해요. 솔직하고 직접적으로 말하는 편이에요.',
    howIStudy: '계획을 세우고 체계적으로 공부해요. 목표를 정하고 그것을 향해 노력해요. 시간 관리를 잘 하는 편이에요.',
    strengths: ['탁월한 조직력', '강한 리더십', '뛰어난 실행력', '책임감'],
    growthAreas: ['다른 의견도 열린 마음으로 듣기', '감정적인 면도 고려하기', '유연하게 생각하기'],
    activities: ['반장이나 대표 맡기', '프로젝트 관리', '스포츠 팀 활동', '봉사 단체 활동'],
    famousCharacters: ['해리포터의 맥고나걸 교수', '닉 퓨리', '쥬디'],
    animal: '독수리',
    animalDescription: '독수리처럼 날카롭고 결단력이 있어요. 높은 곳에서 전체를 바라보고, 목표를 향해 빠르게 날아가요. 당당하고 자신감 있어요.',
    color: 'from-red-500 to-orange-600',
    image: estjEagle
  },
  ESFJ: {
    type: 'ESFJ',
    nickname: '사교적인 돌봄이',
    shortDescription: '친절하고 사교적이며, 다른 사람들과 어울리는 것을 좋아해요.',
    detailedDescription: '조화로운 관계를 만들고 유지하는 데 뛰어나요. 실용적이고 협력적이며, 다른 사람들을 돕는 것에서 기쁨을 느껴요. 따뜻하고 친절한 분위기를 만들어요.',
    howIThink: '다른 사람들과의 관계를 중요하게 생각해요. 모두가 행복하고 편안하기를 바라요. 전통과 가치를 소중히 여겨요.',
    howIActWithFriends: '친구들과 어울리는 것을 좋아해요! 파티를 계획하고, 친구들을 챙기는 것을 좋아해요. 기억력이 좋아서 친구들의 중요한 날을 잘 기억해요.',
    howIStudy: '친구들과 함께 공부하면 더 재미있어요. 선생님과 좋은 관계를 유지하려 해요. 칭찬을 받으면 더 열심히 해요.',
    strengths: ['뛰어난 사교성', '강한 협력심', '훌륭한 조직력', '깊은 배려심'],
    growthAreas: ['자신의 필요도 우선시하기', '비판에 너무 민감하지 않기', '모든 사람을 기쁘게 하려 하지 않기'],
    activities: ['파티 계획하기', '친구들 모임 만들기', '봉사 활동', '팀 활동'],
    famousCharacters: ['신데렐라', '안나(겨울왕국)', '우디'],
    animal: '강아지',
    animalDescription: '강아지처럼 충성스럽고 다정해요. 사람들과 함께 있는 것을 좋아하고, 모두에게 사랑을 나눠줘요. 활기차고 긍정적인 에너지를 가지고 있어요.',
    color: 'from-yellow-400 to-amber-500',
    image: esfjPuppy
  },
  ISTP: {
    type: 'ISTP',
    nickname: '논리적인 탐구가',
    shortDescription: '손재주가 뛰어나고 논리적인 사람이에요.',
    detailedDescription: '실용적인 문제를 해결하는 것을 좋아하고, 새로운 것을 분석하고 이해하려고 해요. 조용하지만 모험을 즐기기도 해요. 위기 상황에서 침착하게 대처해요.',
    howIThink: '작동 원리를 이해하는 것을 좋아해요. 직접 손으로 해보면서 배우는 것을 선호해요. 불필요한 것은 싫어하고, 효율적인 것을 좋아해요.',
    howIActWithFriends: '조용한 편이지만, 함께 활동하는 것을 좋아해요. 말보다 행동으로 보여주는 타입이에요. 자유로운 시간을 소중히 여겨요.',
    howIStudy: '이론보다 실습을 좋아해요. 직접 해보면서 배우는 게 더 잘 돼요. 필요한 것만 효율적으로 공부해요.',
    strengths: ['뛰어난 논리적 사고', '탁월한 손재주', '문제 해결 능력', '침착함'],
    growthAreas: ['감정 표현 연습하기', '장기 계획 세워보기', '약속 지키기 노력하기'],
    activities: ['물건 조립하기', '과학 실험', '스포츠', '게임', '만들기'],
    famousCharacters: ['제임스 본드', '인디아나 존스', '블랙 위도우'],
    animal: '표범',
    animalDescription: '표범처럼 조용하지만 빠르고 능숙해요. 혼자 행동하는 것을 좋아하고, 필요할 때 놀라운 능력을 보여줘요. 쿨하고 침착해요.',
    color: 'from-zinc-500 to-slate-600',
    image: istpLeopard
  },
  ISFP: {
    type: 'ISFP',
    nickname: '온화한 예술가',
    shortDescription: '예술적 감각이 뛰어나고 온화한 성격이에요.',
    detailedDescription: '현재의 순간을 즐기고, 자신만의 방식으로 세상을 표현해요. 겸손하고 친절하며, 조화로운 것을 추구해요. 아름다움을 발견하고 창조하는 능력이 있어요.',
    howIThink: '현재의 순간을 느끼는 것을 중요하게 생각해요. 아름다운 것에 끌리고, 나만의 방식으로 표현하고 싶어해요. 가치관에 맞는 삶을 살고 싶어요.',
    howIActWithFriends: '조용하지만 친구들에게 다정해요. 함께 무언가를 경험하는 것을 좋아해요. 갈등을 피하고 평화로운 관계를 원해요.',
    howIStudy: '관심 있는 분야에서는 집중을 잘 해요. 시각적인 자료나 실습을 통해 배우는 것을 좋아해요. 나만의 페이스로 공부해요.',
    strengths: ['예술적 감각', '유연한 적응력', '친절함', '관찰력'],
    growthAreas: ['장기 계획 세워보기', '자신의 의견 표현하기', '미래도 생각해보기'],
    activities: ['그림 그리기', '음악 연주', '자연 탐험', '사진 찍기', '공예'],
    famousCharacters: ['오로라(잠자는 숲속의 공주)', '프로도', '밥 로스'],
    animal: '고양이',
    animalDescription: '고양이처럼 독립적이고 우아해요. 조용히 주변을 관찰하고, 자신만의 세계를 가지고 있어요. 친해지면 다정한 면을 보여줘요.',
    color: 'from-lime-500 to-green-600',
    image: isfpCat
  },
  ESTP: {
    type: 'ESTP',
    nickname: '활동적인 모험가',
    shortDescription: '에너지가 넘치고 활동적인 사람이에요!',
    detailedDescription: '새로운 경험과 모험을 좋아하고, 순간의 즐거움을 추구해요. 문제 상황에서 빠르게 대처하고, 현실적인 해결책을 찾아요. 스릴과 재미를 추구해요.',
    howIThink: '지금 이 순간이 중요해요! 직접 경험해보고, 행동하면서 배우는 것을 좋아해요. 위험을 두려워하지 않아요.',
    howIActWithFriends: '친구들과 함께 활동적으로 노는 것을 좋아해요. 재미있는 일을 찾아다니고, 분위기를 띄워요. 솔직하고 직접적으로 말해요.',
    howIStudy: '앉아서 오래 공부하는 건 힘들어요. 실습이나 활동 위주의 학습이 좋아요. 흥미로운 것에는 집중할 수 있어요.',
    strengths: ['뛰어난 순발력', '대담함', '현실 감각', '사교성'],
    growthAreas: ['결과를 먼저 생각해보기', '장기적인 계획 세우기', '인내심 기르기'],
    activities: ['스포츠', '여행', '새로운 도전', '친구들과 놀기', '액션 게임'],
    famousCharacters: ['한 솔로', '잭 스패로우', '바트 심슨'],
    animal: '치타',
    animalDescription: '치타처럼 빠르고 활동적이에요. 순간적인 판단력이 뛰어나고, 어떤 상황에서도 기회를 잡아요. 스릴을 즐기고 도전을 두려워하지 않아요.',
    color: 'from-red-500 to-rose-600',
    image: estpCheetah
  },
  ESFP: {
    type: 'ESFP',
    nickname: '즐거운 엔터테이너',
    shortDescription: '밝고 긍정적인 에너지로 주변을 즐겁게 해요!',
    detailedDescription: '사람들과 함께하는 것을 좋아하고, 현재의 순간을 최대한 즐기려고 해요. 자연스럽고 유쾌하며, 분위기를 띄우는 능력이 있어요. 삶을 축제처럼 살아요.',
    howIThink: '지금 이 순간을 즐기는 게 최고예요! 재미있는 것을 찾고, 다른 사람들과 함께 웃고 싶어요. 긍정적으로 생각하려고 해요.',
    howIActWithFriends: '친구들과 함께 있으면 에너지가 넘쳐요! 분위기 메이커 역할을 자주 해요. 새로운 사람들과도 쉽게 친해져요.',
    howIStudy: '재미있게 공부해야 잘 돼요. 친구들과 함께 공부하거나, 게임처럼 만들면 좋아요. 긴 시간 앉아있는 건 힘들어요.',
    strengths: ['뛰어난 사교성', '긍정적인 에너지', '유연한 적응력', '표현력'],
    growthAreas: ['장기적으로 생각해보기', '어려운 대화도 피하지 않기', '책임감 기르기'],
    activities: ['공연하기', '파티 즐기기', '춤추기', '새로운 경험', '여행'],
    famousCharacters: ['티거', '올라프', '제니(블랙핑크)'],
    animal: '앵무새',
    animalDescription: '앵무새처럼 밝고 화려해요. 사람들과 소통하는 것을 좋아하고, 어디를 가든 분위기를 밝게 만들어요. 다재다능하고 재미있어요.',
    color: 'from-fuchsia-500 to-pink-600',
    image: esfpParrot
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
