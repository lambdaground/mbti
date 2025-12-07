import type { Language } from './i18n';

export interface LocalizedMBTIType {
  nickname: string;
  description: string;
  strengths: string[];
  activities: string[];
  careers: string[];
  hobbies: string[];
  loveStyle: string;
  behavioralScenarios: { situation: string; behavior: string }[];
}

export type LocalizedMBTIData = Record<string, Record<Language, LocalizedMBTIType>>;

export const mbtiTypesLocalized: LocalizedMBTIData = {
  INTJ: {
    ko: {
      nickname: '전략적인 사색가',
      description: '깊이 생각하고 미래를 계획하는 것을 좋아해요. 혼자만의 시간에 아이디어를 발전시키고, 복잡한 문제를 해결하는 것을 즐겨요. 논리적이고 분석적인 사고를 가지고 있어요.',
      strengths: ['전략적 사고', '독립심', '분석력', '결단력'],
      activities: ['책 읽기', '퍼즐 풀기', '미래 계획 세우기', '새로운 것 배우기'],
      careers: ['연구원', '데이터 과학자', '전략 컨설턴트', '소프트웨어 아키텍트', '투자 분석가'],
      hobbies: ['체스', '독서', '다큐멘터리 감상', '프로그래밍', '미래 계획 세우기'],
      loveStyle: '사랑에도 전략적이에요. 감정 표현은 서툴지만, 한번 마음을 정하면 끝까지 신뢰하고 지지해요. 깊은 대화와 지적인 교류를 통해 친밀감을 느껴요.',
      behavioralScenarios: [
        { situation: '회의에서 의견 충돌이 생기면', behavior: '논리적 근거를 차분하게 제시하며, 감정적 대응은 피해요' },
        { situation: '친구가 갑자기 계획을 바꾸면', behavior: '약간 불편하지만 이유를 듣고 논리적으로 판단해요' },
        { situation: '새로운 프로젝트를 맡으면', behavior: '먼저 전체 그림을 그리고 세부 계획을 세워요' }
      ]
    },
    en: {
      nickname: 'Strategic Thinker',
      description: 'I love thinking deeply and planning for the future. I enjoy developing ideas during alone time and solving complex problems. I have a logical and analytical mind.',
      strengths: ['Strategic Thinking', 'Independence', 'Analytical Skills', 'Decisiveness'],
      activities: ['Reading books', 'Solving puzzles', 'Planning for the future', 'Learning new things'],
      careers: ['Researcher', 'Data Scientist', 'Strategy Consultant', 'Software Architect', 'Investment Analyst'],
      hobbies: ['Chess', 'Reading', 'Documentaries', 'Programming', 'Future planning'],
      loveStyle: 'I\'m strategic in love too. Though I may struggle with emotional expression, once I commit, I stay loyal and supportive. I feel close through deep conversations and intellectual exchange.',
      behavioralScenarios: [
        { situation: 'When there\'s a conflict in meetings', behavior: 'I calmly present logical evidence and avoid emotional responses' },
        { situation: 'When a friend suddenly changes plans', behavior: 'I feel slightly uncomfortable but listen to the reason and judge logically' },
        { situation: 'When taking on a new project', behavior: 'I first draw the big picture and then make detailed plans' }
      ]
    },
    ja: {
      nickname: '戦略的な思想家',
      description: '深く考え、未来を計画することが好きです。一人の時間にアイデアを発展させ、複雑な問題を解決することを楽しみます。論理的で分析的な思考を持っています。',
      strengths: ['戦略的思考', '独立心', '分析力', '決断力'],
      activities: ['読書', 'パズル解き', '将来の計画', '新しいことを学ぶ'],
      careers: ['研究者', 'データサイエンティスト', '戦略コンサルタント', 'ソフトウェアアーキテクト', '投資アナリスト'],
      hobbies: ['チェス', '読書', 'ドキュメンタリー鑑賞', 'プログラミング', '将来計画'],
      loveStyle: '恋愛も戦略的です。感情表現は苦手ですが、一度心を決めたら最後まで信頼し支えます。深い会話と知的な交流を通じて親密さを感じます。',
      behavioralScenarios: [
        { situation: '会議で意見の衝突があったとき', behavior: '論理的な根拠を冷静に提示し、感情的な対応は避けます' },
        { situation: '友人が急に計画を変えたとき', behavior: '少し不快ですが、理由を聞いて論理的に判断します' },
        { situation: '新しいプロジェクトを任されたとき', behavior: 'まず全体像を描き、詳細な計画を立てます' }
      ]
    },
    zh: {
      nickname: '战略思想家',
      description: '我喜欢深入思考和规划未来。我喜欢在独处时发展想法，解决复杂问题。我有逻辑性和分析性的思维。',
      strengths: ['战略思维', '独立性', '分析能力', '决断力'],
      activities: ['阅读', '解谜', '规划未来', '学习新事物'],
      careers: ['研究员', '数据科学家', '战略顾问', '软件架构师', '投资分析师'],
      hobbies: ['国际象棋', '阅读', '纪录片', '编程', '规划未来'],
      loveStyle: '在爱情中也很有策略。虽然不擅长表达感情，但一旦决定了就会一直信任和支持。通过深入对话和智力交流感受亲密。',
      behavioralScenarios: [
        { situation: '会议中发生意见冲突时', behavior: '冷静地提出逻辑依据，避免情绪化反应' },
        { situation: '朋友突然改变计划时', behavior: '虽然有些不适，但会听取原因并理性判断' },
        { situation: '接手新项目时', behavior: '首先绘制整体蓝图，然后制定详细计划' }
      ]
    }
  },
  INTP: {
    ko: {
      nickname: '호기심 많은 탐구가',
      description: '끝없는 호기심으로 세상을 탐구하는 사람이에요. "왜?"라는 질문을 자주 하고, 새로운 아이디어를 생각해내는 것을 좋아해요. 논리적이고 분석적인 사고를 가지고 있어요.',
      strengths: ['분석적 사고', '창의적 문제 해결', '이론적 이해력', '객관적 판단'],
      activities: ['코딩이나 프로그래밍', '수학 문제 풀기', '과학 다큐멘터리 보기', '발명품 구상하기'],
      careers: ['소프트웨어 개발자', '과학자', '철학자', '분석가', '교수'],
      hobbies: ['코딩', '퍼즐 게임', '위키피디아 서핑', '이론 연구', '토론'],
      loveStyle: '연애에서도 지적인 연결을 중요시해요. 감정 표현이 서툴러 오해받기도 하지만, 상대방을 이해하려는 노력을 꾸준히 해요.',
      behavioralScenarios: [
        { situation: '흥미로운 주제를 발견하면', behavior: '몇 시간이고 깊이 파고들며 연구해요' },
        { situation: '감정적인 상황에 놓이면', behavior: '일단 한 발 물러서서 객관적으로 분석하려고 해요' },
        { situation: '규칙이 비효율적으로 느껴지면', behavior: '왜 그런 규칙이 있는지 질문하고 개선점을 제안해요' }
      ]
    },
    en: {
      nickname: 'Curious Explorer',
      description: 'I explore the world with endless curiosity. I often ask "why?" and love coming up with new ideas. I have a logical and analytical mind.',
      strengths: ['Analytical Thinking', 'Creative Problem Solving', 'Theoretical Understanding', 'Objective Judgment'],
      activities: ['Coding or programming', 'Solving math problems', 'Watching science documentaries', 'Inventing things'],
      careers: ['Software Developer', 'Scientist', 'Philosopher', 'Analyst', 'Professor'],
      hobbies: ['Coding', 'Puzzle games', 'Wikipedia surfing', 'Theoretical research', 'Debating'],
      loveStyle: 'I value intellectual connection in relationships. Though I may seem awkward with emotions, I constantly try to understand my partner.',
      behavioralScenarios: [
        { situation: 'When I find an interesting topic', behavior: 'I dive deep and research for hours' },
        { situation: 'In emotional situations', behavior: 'I step back and try to analyze objectively' },
        { situation: 'When rules seem inefficient', behavior: 'I question why they exist and suggest improvements' }
      ]
    },
    ja: {
      nickname: '好奇心旺盛な探求者',
      description: '終わりなき好奇心で世界を探求する人です。「なぜ？」とよく質問し、新しいアイデアを考えるのが好きです。論理的で分析的な思考を持っています。',
      strengths: ['分析的思考', '創造的な問題解決', '理論的理解力', '客観的判断'],
      activities: ['コーディングやプログラミング', '数学の問題を解く', '科学ドキュメンタリーを見る', '発明品を考える'],
      careers: ['ソフトウェア開発者', '科学者', '哲学者', 'アナリスト', '教授'],
      hobbies: ['コーディング', 'パズルゲーム', 'Wikipediaサーフィン', '理論研究', '討論'],
      loveStyle: '恋愛でも知的なつながりを重視します。感情表現が苦手で誤解されることもありますが、相手を理解しようと常に努力します。',
      behavioralScenarios: [
        { situation: '興味深いトピックを見つけたとき', behavior: '何時間でも深く掘り下げて研究します' },
        { situation: '感情的な状況に置かれたとき', behavior: '一歩引いて客観的に分析しようとします' },
        { situation: 'ルールが非効率的に感じるとき', behavior: 'なぜそのルールがあるのか質問し、改善点を提案します' }
      ]
    },
    zh: {
      nickname: '好奇探索者',
      description: '我以无尽的好奇心探索世界。我经常问"为什么？"，喜欢想出新点子。我有逻辑性和分析性的思维。',
      strengths: ['分析性思维', '创造性问题解决', '理论理解力', '客观判断'],
      activities: ['编程', '解数学题', '看科学纪录片', '构思发明'],
      careers: ['软件开发者', '科学家', '哲学家', '分析师', '教授'],
      hobbies: ['编程', '益智游戏', '维基百科', '理论研究', '辩论'],
      loveStyle: '在恋爱中也重视智力连接。虽然不擅长表达感情，有时会被误解，但会不断努力理解对方。',
      behavioralScenarios: [
        { situation: '发现有趣话题时', behavior: '会花几个小时深入研究' },
        { situation: '处于情绪化情况时', behavior: '会先退后一步，尝试客观分析' },
        { situation: '规则感觉低效时', behavior: '会质疑规则存在的原因并提出改进建议' }
      ]
    }
  },
  ENTJ: {
    ko: {
      nickname: '타고난 리더',
      description: '자신감 있고 카리스마가 넘치는 리더예요. 팀을 이끌고 목표를 달성하는 것을 좋아해요. 효율적이고 결단력 있게 일을 처리하며, 다른 사람들에게 동기를 부여하는 능력이 뛰어나요.',
      strengths: ['리더십', '결단력', '효율적인 계획', '설득력'],
      activities: ['팀 프로젝트 이끌기', '토론하기', '목표 세우고 달성하기', '새로운 것 배우기'],
      careers: ['CEO', '경영 컨설턴트', '변호사', '정치인', '사업가'],
      hobbies: ['골프', '네트워킹', '자기계발', '전략 게임', '멘토링'],
      loveStyle: '연애에서도 리더십을 발휘해요. 상대방의 성장을 응원하고, 함께 목표를 향해 나아가는 관계를 원해요. 솔직하고 직접적인 소통을 선호해요.',
      behavioralScenarios: [
        { situation: '팀 프로젝트에서', behavior: '자연스럽게 리더 역할을 맡고 방향을 제시해요' },
        { situation: '비효율적인 상황을 보면', behavior: '즉시 개선 방안을 제안하고 실행해요' },
        { situation: '목표가 생기면', behavior: '구체적인 실행 계획을 세우고 끝까지 밀어붙여요' }
      ]
    },
    en: {
      nickname: 'Natural Leader',
      description: 'I\'m a confident and charismatic leader. I enjoy leading teams and achieving goals. I handle things efficiently and decisively, and I\'m great at motivating others.',
      strengths: ['Leadership', 'Decisiveness', 'Efficient Planning', 'Persuasion'],
      activities: ['Leading team projects', 'Debating', 'Setting and achieving goals', 'Learning new things'],
      careers: ['CEO', 'Management Consultant', 'Lawyer', 'Politician', 'Entrepreneur'],
      hobbies: ['Golf', 'Networking', 'Self-improvement', 'Strategy games', 'Mentoring'],
      loveStyle: 'I take a leadership role in love too. I support my partner\'s growth and want a relationship where we work toward goals together. I prefer honest and direct communication.',
      behavioralScenarios: [
        { situation: 'In team projects', behavior: 'I naturally take the leader role and set directions' },
        { situation: 'When I see inefficiency', behavior: 'I immediately suggest improvements and execute them' },
        { situation: 'When I have a goal', behavior: 'I make concrete plans and push through to the end' }
      ]
    },
    ja: {
      nickname: '生まれながらのリーダー',
      description: '自信に満ちたカリスマ的なリーダーです。チームを率いて目標を達成することが好きです。効率的かつ決断力を持って物事を処理し、他の人をやる気にさせる能力に優れています。',
      strengths: ['リーダーシップ', '決断力', '効率的な計画', '説得力'],
      activities: ['チームプロジェクトを率いる', '討論する', '目標を立てて達成する', '新しいことを学ぶ'],
      careers: ['CEO', '経営コンサルタント', '弁護士', '政治家', '起業家'],
      hobbies: ['ゴルフ', 'ネットワーキング', '自己啓発', '戦略ゲーム', 'メンタリング'],
      loveStyle: '恋愛でもリーダーシップを発揮します。相手の成長を応援し、共に目標に向かって進む関係を望みます。率直で直接的なコミュニケーションを好みます。',
      behavioralScenarios: [
        { situation: 'チームプロジェクトで', behavior: '自然とリーダー役を担い、方向性を示します' },
        { situation: '非効率な状況を見たとき', behavior: 'すぐに改善案を提案し実行します' },
        { situation: '目標ができたとき', behavior: '具体的な実行計画を立て、最後まで押し進めます' }
      ]
    },
    zh: {
      nickname: '天生领袖',
      description: '我是一个自信且有魅力的领导者。我喜欢领导团队并实现目标。我高效果断地处理事务，擅长激励他人。',
      strengths: ['领导力', '决断力', '高效规划', '说服力'],
      activities: ['领导团队项目', '辩论', '设定并实现目标', '学习新事物'],
      careers: ['CEO', '管理顾问', '律师', '政治家', '企业家'],
      hobbies: ['高尔夫', '社交网络', '自我提升', '策略游戏', '指导他人'],
      loveStyle: '在恋爱中也会发挥领导力。支持伴侣成长，希望一起朝着目标前进。喜欢坦诚直接的沟通。',
      behavioralScenarios: [
        { situation: '在团队项目中', behavior: '自然而然地担任领导角色并指明方向' },
        { situation: '看到低效情况时', behavior: '立即提出改进方案并执行' },
        { situation: '有了目标时', behavior: '制定具体执行计划，坚持到底' }
      ]
    }
  },
  ENTP: {
    ko: {
      nickname: '창의적인 도전가',
      description: '새로운 아이디어와 가능성을 탐험하는 것을 좋아해요. 토론을 즐기고, 다양한 관점에서 생각하는 능력이 뛰어나요. 창의적이고 재치있으며, 문제를 새로운 방식으로 해결해요.',
      strengths: ['창의력', '빠른 적응력', '토론 능력', '다양한 관점 이해'],
      activities: ['새로운 아이디어 발표하기', '토론 대회', '브레인스토밍', '발명하기'],
      careers: ['기업가', '마케터', '변호사', '발명가', '코미디언'],
      hobbies: ['토론', '새로운 취미 시도', '스타트업 아이디어 구상', '여행', '즉흥 코미디'],
      loveStyle: '연애도 지루함을 싫어해요. 상대방과 끊임없이 새로운 것을 시도하고, 지적인 대화를 즐겨요. 자유로운 관계를 선호하지만 깊은 유대감도 원해요.',
      behavioralScenarios: [
        { situation: '누군가 "불가능해"라고 하면', behavior: '"정말? 왜?"라고 물으며 가능성을 찾아요' },
        { situation: '새로운 규칙이 생기면', behavior: '일단 왜 그런 규칙이 필요한지 따져봐요' },
        { situation: '아이디어가 떠오르면', behavior: '즉시 누군가와 공유하며 발전시켜요' }
      ]
    },
    en: {
      nickname: 'Creative Challenger',
      description: 'I love exploring new ideas and possibilities. I enjoy debates and excel at thinking from various perspectives. I\'m creative and witty, solving problems in new ways.',
      strengths: ['Creativity', 'Quick Adaptation', 'Debate Skills', 'Understanding Multiple Perspectives'],
      activities: ['Presenting new ideas', 'Debate competitions', 'Brainstorming', 'Inventing'],
      careers: ['Entrepreneur', 'Marketer', 'Lawyer', 'Inventor', 'Comedian'],
      hobbies: ['Debating', 'Trying new hobbies', 'Startup ideas', 'Traveling', 'Improv comedy'],
      loveStyle: 'I hate boredom in relationships too. I constantly try new things with my partner and enjoy intellectual conversations. I prefer freedom but also want deep connections.',
      behavioralScenarios: [
        { situation: 'When someone says "impossible"', behavior: 'I ask "Really? Why?" and look for possibilities' },
        { situation: 'When new rules are made', behavior: 'I first question why such rules are needed' },
        { situation: 'When an idea comes to mind', behavior: 'I immediately share it with someone to develop it' }
      ]
    },
    ja: {
      nickname: '創造的な挑戦者',
      description: '新しいアイデアと可能性を探求することが好きです。討論を楽しみ、さまざまな視点から考える能力に優れています。創造的でウィットに富み、問題を新しい方法で解決します。',
      strengths: ['創造力', '素早い適応力', '討論能力', '多様な視点の理解'],
      activities: ['新しいアイデアを発表する', 'ディベート大会', 'ブレインストーミング', '発明する'],
      careers: ['起業家', 'マーケター', '弁護士', '発明家', 'コメディアン'],
      hobbies: ['討論', '新しい趣味に挑戦', 'スタートアップのアイデア', '旅行', '即興コメディ'],
      loveStyle: '恋愛も退屈が嫌いです。相手と常に新しいことを試し、知的な会話を楽しみます。自由な関係を好みますが、深いつながりも求めます。',
      behavioralScenarios: [
        { situation: '誰かが「不可能だ」と言ったとき', behavior: '「本当に？なぜ？」と聞いて可能性を探します' },
        { situation: '新しいルールができたとき', behavior: 'まずなぜそのルールが必要なのか問います' },
        { situation: 'アイデアが浮かんだとき', behavior: 'すぐに誰かと共有して発展させます' }
      ]
    },
    zh: {
      nickname: '创意挑战者',
      description: '我喜欢探索新想法和可能性。我喜欢辩论，擅长从多角度思考。我有创意且机智，用新方法解决问题。',
      strengths: ['创造力', '快速适应', '辩论能力', '理解多元视角'],
      activities: ['展示新想法', '辩论比赛', '头脑风暴', '发明创造'],
      careers: ['企业家', '市场营销', '律师', '发明家', '喜剧演员'],
      hobbies: ['辩论', '尝试新爱好', '创业点子', '旅行', '即兴喜剧'],
      loveStyle: '恋爱中也讨厌无聊。不断和伴侣尝试新事物，享受智力对话。喜欢自由但也渴望深层连接。',
      behavioralScenarios: [
        { situation: '当有人说"不可能"时', behavior: '会问"真的吗？为什么？"并寻找可能性' },
        { situation: '当出现新规则时', behavior: '首先会质疑为什么需要这样的规则' },
        { situation: '当想到新点子时', behavior: '立即与人分享并发展它' }
      ]
    }
  },
  INFJ: {
    ko: {
      nickname: '통찰력 있는 이상주의자',
      description: '깊은 통찰력으로 사람들의 마음을 이해해요. 조용하지만 확고한 가치관을 가지고 있고, 다른 사람들을 돕는 것에서 의미를 찾아요. 창의적이고 이상적인 비전을 가지고 있어요.',
      strengths: ['공감 능력', '통찰력', '창의적 사고', '헌신적인 태도'],
      activities: ['글쓰기', '봉사 활동', '예술 감상', '깊은 대화 나누기'],
      careers: ['상담사', '작가', '심리학자', 'NPO 활동가', '교육자'],
      hobbies: ['일기 쓰기', '명상', '봉사 활동', '예술 감상', '심리학 공부'],
      loveStyle: '깊고 의미 있는 관계를 원해요. 상대방의 영혼까지 이해하려 하고, 진정한 연결을 추구해요. 표면적인 관계보다 깊은 유대감을 중요시해요.',
      behavioralScenarios: [
        { situation: '친구가 말 안 해도', behavior: '표정과 분위기만으로 기분을 읽어요' },
        { situation: '불의를 목격하면', behavior: '조용하지만 단호하게 목소리를 내요' },
        { situation: '혼자만의 시간이 필요하면', behavior: '사람들에게서 잠시 떨어져 재충전해요' }
      ]
    },
    en: {
      nickname: 'Insightful Idealist',
      description: 'I understand people\'s hearts with deep insight. I\'m quiet but have firm values, and find meaning in helping others. I have creative and idealistic visions.',
      strengths: ['Empathy', 'Insight', 'Creative Thinking', 'Dedication'],
      activities: ['Writing', 'Volunteering', 'Appreciating art', 'Deep conversations'],
      careers: ['Counselor', 'Writer', 'Psychologist', 'NPO Activist', 'Educator'],
      hobbies: ['Journaling', 'Meditation', 'Volunteering', 'Art appreciation', 'Studying psychology'],
      loveStyle: 'I want deep, meaningful relationships. I try to understand my partner\'s soul and pursue genuine connection. I value deep bonds over surface-level relationships.',
      behavioralScenarios: [
        { situation: 'Even when friends don\'t say anything', behavior: 'I read their feelings from expressions and atmosphere' },
        { situation: 'When I witness injustice', behavior: 'I speak up quietly but firmly' },
        { situation: 'When I need alone time', behavior: 'I step away from people to recharge' }
      ]
    },
    ja: {
      nickname: '洞察力のある理想主義者',
      description: '深い洞察力で人々の心を理解します。静かですが確固たる価値観を持ち、他の人を助けることに意味を見出します。創造的で理想的なビジョンを持っています。',
      strengths: ['共感能力', '洞察力', '創造的思考', '献身的な態度'],
      activities: ['執筆', 'ボランティア', '芸術鑑賞', '深い会話をする'],
      careers: ['カウンセラー', '作家', '心理学者', 'NPO活動家', '教育者'],
      hobbies: ['日記を書く', '瞑想', 'ボランティア', '芸術鑑賞', '心理学の勉強'],
      loveStyle: '深く意味のある関係を望みます。相手の魂まで理解しようとし、真のつながりを追求します。表面的な関係より深い絆を大切にします。',
      behavioralScenarios: [
        { situation: '友人が何も言わなくても', behavior: '表情と雰囲気だけで気持ちを読み取ります' },
        { situation: '不正を目撃したとき', behavior: '静かですが毅然と声を上げます' },
        { situation: '一人の時間が必要なとき', behavior: '人から離れて充電します' }
      ]
    },
    zh: {
      nickname: '富有洞察力的理想主义者',
      description: '我以深刻的洞察力理解人心。我安静但有坚定的价值观，在帮助他人中找到意义。我有创造性和理想主义的愿景。',
      strengths: ['同理心', '洞察力', '创造性思维', '奉献精神'],
      activities: ['写作', '志愿服务', '艺术欣赏', '深入交谈'],
      careers: ['咨询师', '作家', '心理学家', 'NPO活动家', '教育者'],
      hobbies: ['写日记', '冥想', '志愿服务', '艺术欣赏', '学习心理学'],
      loveStyle: '我想要深刻而有意义的关系。我试图理解伴侣的灵魂，追求真正的连接。比起表面关系更重视深层纽带。',
      behavioralScenarios: [
        { situation: '即使朋友什么都不说', behavior: '仅从表情和氛围就能读懂感受' },
        { situation: '目睹不公时', behavior: '会安静但坚定地发声' },
        { situation: '需要独处时间时', behavior: '会暂时离开人群充电' }
      ]
    }
  },
  INFP: {
    ko: {
      nickname: '꿈꾸는 이상주의자',
      description: '풍부한 상상력과 깊은 감정을 가진 사람이에요. 자신만의 가치관을 중요하게 여기고, 진정성 있는 삶을 추구해요. 예술적이고 창의적이며, 다른 사람들의 감정에 민감해요.',
      strengths: ['창의력', '공감 능력', '진정성', '적응력'],
      activities: ['시나 소설 쓰기', '음악 듣기', '예술 활동', '자연 속 산책'],
      careers: ['작가', '예술가', '상담사', '그래픽 디자이너', 'UX 디자이너'],
      hobbies: ['글쓰기', '그림 그리기', '음악', '자연 속 산책', '명상'],
      loveStyle: '이상적인 사랑을 꿈꿔요. 진정한 영혼의 동반자를 찾고, 깊은 감정적 연결을 원해요. 로맨틱하고 헌신적이며, 상대방을 있는 그대로 받아들여요.',
      behavioralScenarios: [
        { situation: '마음에 안 드는 일을 해야 할 때', behavior: '가치관에 맞지 않으면 내면의 갈등을 겪어요' },
        { situation: '감동적인 영화를 보면', behavior: '등장인물에 완전히 몰입해서 함께 울어요' },
        { situation: '상상의 세계에 빠지면', behavior: '몇 시간이고 혼자만의 세계를 즐겨요' }
      ]
    },
    en: {
      nickname: 'Dreamy Idealist',
      description: 'I have a rich imagination and deep emotions. I value my own values and pursue an authentic life. I\'m artistic and creative, and sensitive to others\' feelings.',
      strengths: ['Creativity', 'Empathy', 'Authenticity', 'Adaptability'],
      activities: ['Writing poetry or novels', 'Listening to music', 'Art activities', 'Walking in nature'],
      careers: ['Writer', 'Artist', 'Counselor', 'Graphic Designer', 'UX Designer'],
      hobbies: ['Writing', 'Drawing', 'Music', 'Nature walks', 'Meditation'],
      loveStyle: 'I dream of ideal love. I seek a true soulmate and want deep emotional connection. I\'m romantic and devoted, accepting my partner as they are.',
      behavioralScenarios: [
        { situation: 'When I have to do something I don\'t like', behavior: 'I experience inner conflict if it goes against my values' },
        { situation: 'When watching a touching movie', behavior: 'I fully immerse in the characters and cry with them' },
        { situation: 'When lost in imagination', behavior: 'I enjoy my own world for hours' }
      ]
    },
    ja: {
      nickname: '夢見る理想主義者',
      description: '豊かな想像力と深い感情を持つ人です。自分の価値観を大切にし、本物の人生を追求します。芸術的で創造的で、他の人の感情に敏感です。',
      strengths: ['創造力', '共感能力', '真正性', '適応力'],
      activities: ['詩や小説を書く', '音楽を聴く', '芸術活動', '自然の中を散歩'],
      careers: ['作家', 'アーティスト', 'カウンセラー', 'グラフィックデザイナー', 'UXデザイナー'],
      hobbies: ['執筆', '絵を描く', '音楽', '自然散歩', '瞑想'],
      loveStyle: '理想的な愛を夢見ます。真のソウルメイトを探し、深い感情的なつながりを求めます。ロマンチックで献身的で、相手をありのまま受け入れます。',
      behavioralScenarios: [
        { situation: '好きではないことをしなければならないとき', behavior: '価値観に合わないと内面の葛藤を経験します' },
        { situation: '感動的な映画を見たとき', behavior: '登場人物に完全に没入して一緒に泣きます' },
        { situation: '想像の世界に浸るとき', behavior: '何時間でも自分だけの世界を楽しみます' }
      ]
    },
    zh: {
      nickname: '梦想家',
      description: '我有丰富的想象力和深厚的情感。我重视自己的价值观，追求真实的生活。我有艺术性和创造力，对他人的感受很敏感。',
      strengths: ['创造力', '同理心', '真实性', '适应力'],
      activities: ['写诗或小说', '听音乐', '艺术活动', '自然散步'],
      careers: ['作家', '艺术家', '咨询师', '平面设计师', 'UX设计师'],
      hobbies: ['写作', '画画', '音乐', '自然散步', '冥想'],
      loveStyle: '我梦想理想的爱情。寻找真正的灵魂伴侣，渴望深厚的情感连接。浪漫且专一，接受伴侣本来的样子。',
      behavioralScenarios: [
        { situation: '必须做不喜欢的事时', behavior: '如果违背价值观会经历内心冲突' },
        { situation: '看感人电影时', behavior: '完全沉浸在角色中一起哭泣' },
        { situation: '沉浸在想象世界时', behavior: '可以独自享受几个小时' }
      ]
    }
  },
  ENFJ: {
    ko: {
      nickname: '따뜻한 리더',
      description: '다른 사람들을 이끌고 격려하는 것을 좋아해요. 카리스마가 있고, 사람들의 잠재력을 이끌어내는 능력이 있어요. 조화롭고 따뜻한 관계를 중요하게 생각해요.',
      strengths: ['리더십', '공감 능력', '소통 능력', '동기 부여'],
      activities: ['멘토링 하기', '그룹 활동 이끌기', '봉사 활동', '이야기 나누기'],
      careers: ['교사', 'HR 매니저', '상담사', '코치', '정치인'],
      hobbies: ['멘토링', '사회 활동', '글쓰기', '요리해서 나누기', '네트워킹'],
      loveStyle: '사랑에 헌신적이에요. 상대방의 성장을 위해 노력하고, 깊은 감정적 연결을 추구해요. 상대방의 필요를 먼저 생각하는 경향이 있어요.',
      behavioralScenarios: [
        { situation: '팀원이 힘들어 보이면', behavior: '먼저 다가가서 이야기를 들어줘요' },
        { situation: '갈등 상황이 생기면', behavior: '모두가 화해할 수 있도록 조율해요' },
        { situation: '누군가의 잠재력을 발견하면', behavior: '격려하고 성장할 수 있도록 도와줘요' }
      ]
    },
    en: {
      nickname: 'Warm Leader',
      description: 'I love leading and encouraging others. I\'m charismatic and skilled at bringing out people\'s potential. I value harmonious and warm relationships.',
      strengths: ['Leadership', 'Empathy', 'Communication', 'Motivation'],
      activities: ['Mentoring', 'Leading group activities', 'Volunteering', 'Having conversations'],
      careers: ['Teacher', 'HR Manager', 'Counselor', 'Coach', 'Politician'],
      hobbies: ['Mentoring', 'Social activities', 'Writing', 'Cooking and sharing', 'Networking'],
      loveStyle: 'I\'m devoted in love. I work for my partner\'s growth and pursue deep emotional connection. I tend to think of my partner\'s needs first.',
      behavioralScenarios: [
        { situation: 'When a team member seems troubled', behavior: 'I approach first and listen to their story' },
        { situation: 'When conflict arises', behavior: 'I mediate so everyone can reconcile' },
        { situation: 'When I discover someone\'s potential', behavior: 'I encourage and help them grow' }
      ]
    },
    ja: {
      nickname: '温かいリーダー',
      description: '他の人を導き、励ますことが好きです。カリスマ性があり、人々の潜在能力を引き出す能力があります。調和のとれた温かい関係を大切にします。',
      strengths: ['リーダーシップ', '共感能力', 'コミュニケーション能力', 'モチベーション'],
      activities: ['メンタリング', 'グループ活動を率いる', 'ボランティア', '会話をする'],
      careers: ['教師', 'HRマネージャー', 'カウンセラー', 'コーチ', '政治家'],
      hobbies: ['メンタリング', '社会活動', '執筆', '料理を作って分け合う', 'ネットワーキング'],
      loveStyle: '愛に献身的です。相手の成長のために努力し、深い感情的なつながりを追求します。相手のニーズを先に考える傾向があります。',
      behavioralScenarios: [
        { situation: 'チームメンバーが困っているように見えたとき', behavior: '先に近づいて話を聞きます' },
        { situation: '対立状況が起きたとき', behavior: 'みんなが和解できるよう調整します' },
        { situation: '誰かの潜在能力を発見したとき', behavior: '励まし、成長できるよう助けます' }
      ]
    },
    zh: {
      nickname: '温暖的领袖',
      description: '我喜欢领导和鼓励他人。我有魅力，擅长发掘人们的潜力。我重视和谐温暖的关系。',
      strengths: ['领导力', '同理心', '沟通能力', '激励能力'],
      activities: ['指导', '带领团体活动', '志愿服务', '交谈'],
      careers: ['教师', 'HR经理', '咨询师', '教练', '政治家'],
      hobbies: ['指导他人', '社会活动', '写作', '做饭分享', '社交'],
      loveStyle: '在爱情中很专一。为伴侣的成长而努力，追求深厚的情感连接。倾向于先考虑伴侣的需求。',
      behavioralScenarios: [
        { situation: '当团队成员看起来困扰时', behavior: '会先主动接近并倾听' },
        { situation: '发生冲突时', behavior: '会调解让大家和解' },
        { situation: '发现某人的潜力时', behavior: '会鼓励并帮助他们成长' }
      ]
    }
  },
  ENFP: {
    ko: {
      nickname: '열정적인 탐험가',
      description: '에너지가 넘치고 열정적인 사람이에요! 새로운 사람을 만나고 새로운 경험을 하는 것을 좋아해요. 창의적이고 자유로우며, 긍정적인 에너지로 주변 사람들에게 영감을 줘요.',
      strengths: ['창의력', '사교성', '열정', '적응력'],
      activities: ['새로운 친구 사귀기', '창작 활동', '여행', '브레인스토밍'],
      careers: ['마케터', '배우', '작가', '기자', '이벤트 플래너'],
      hobbies: ['여행', '새로운 사람 만나기', '창작 활동', '파티 기획', '다양한 취미 시도'],
      loveStyle: '연애에 열정적이에요! 상대방과 함께 모험하고 새로운 경험을 공유하기를 원해요. 깊은 대화와 감정적 연결을 중요시하며, 자유롭지만 헌신적인 관계를 추구해요.',
      behavioralScenarios: [
        { situation: '새로운 사람을 만나면', behavior: '금방 친해지고 오랜 친구처럼 대화해요' },
        { situation: '재미있는 아이디어가 떠오르면', behavior: '즉시 실행하고 싶어서 안달이 나요' },
        { situation: '루틴한 일을 해야 할 때', behavior: '금방 지루해져서 새로운 방법을 찾아요' }
      ]
    },
    en: {
      nickname: 'Enthusiastic Explorer',
      description: 'I\'m full of energy and passion! I love meeting new people and having new experiences. I\'m creative and free-spirited, inspiring others with positive energy.',
      strengths: ['Creativity', 'Sociability', 'Passion', 'Adaptability'],
      activities: ['Making new friends', 'Creative activities', 'Traveling', 'Brainstorming'],
      careers: ['Marketer', 'Actor', 'Writer', 'Journalist', 'Event Planner'],
      hobbies: ['Traveling', 'Meeting new people', 'Creative activities', 'Party planning', 'Trying various hobbies'],
      loveStyle: 'I\'m passionate in love! I want to adventure and share new experiences with my partner. I value deep conversations and emotional connection, pursuing a free but devoted relationship.',
      behavioralScenarios: [
        { situation: 'When meeting new people', behavior: 'I quickly become friends and chat like old friends' },
        { situation: 'When a fun idea comes up', behavior: 'I\'m eager to execute it immediately' },
        { situation: 'When doing routine tasks', behavior: 'I get bored quickly and look for new ways' }
      ]
    },
    ja: {
      nickname: '情熱的な探検家',
      description: 'エネルギッシュで情熱的な人です！新しい人に会い、新しい経験をすることが好きです。創造的で自由な精神を持ち、ポジティブなエネルギーで周りの人にインスピレーションを与えます。',
      strengths: ['創造力', '社交性', '情熱', '適応力'],
      activities: ['新しい友達を作る', '創作活動', '旅行', 'ブレインストーミング'],
      careers: ['マーケター', '俳優', '作家', 'ジャーナリスト', 'イベントプランナー'],
      hobbies: ['旅行', '新しい人に会う', '創作活動', 'パーティー企画', '様々な趣味に挑戦'],
      loveStyle: '恋愛に情熱的です！相手と一緒に冒険し、新しい経験を共有したいです。深い会話と感情的なつながりを大切にし、自由だけど献身的な関係を求めます。',
      behavioralScenarios: [
        { situation: '新しい人に会ったとき', behavior: 'すぐに仲良くなり、昔からの友達のように話します' },
        { situation: '面白いアイデアが浮かんだとき', behavior: 'すぐに実行したくてたまりません' },
        { situation: 'ルーティンワークをするとき', behavior: 'すぐに退屈して新しい方法を探します' }
      ]
    },
    zh: {
      nickname: '热情探险家',
      description: '我充满能量和热情！我喜欢认识新朋友和体验新事物。我有创造力且自由奔放，用正能量激励周围的人。',
      strengths: ['创造力', '社交能力', '热情', '适应力'],
      activities: ['交新朋友', '创作活动', '旅行', '头脑风暴'],
      careers: ['市场营销', '演员', '作家', '记者', '活动策划'],
      hobbies: ['旅行', '认识新朋友', '创作活动', '策划派对', '尝试各种爱好'],
      loveStyle: '在恋爱中很热情！想和伴侣一起冒险分享新体验。重视深入对话和情感连接，追求自由但专一的关系。',
      behavioralScenarios: [
        { situation: '遇到新朋友时', behavior: '很快就能熟络起来，像老朋友一样聊天' },
        { situation: '想到有趣点子时', behavior: '迫不及待想立刻执行' },
        { situation: '做日常工作时', behavior: '很快就会无聊，会寻找新方法' }
      ]
    }
  },
  ISTJ: {
    ko: {
      nickname: '신뢰할 수 있는 책임자',
      description: '믿음직스럽고 책임감이 강한 사람이에요. 규칙을 잘 따르고, 맡은 일을 끝까지 완수해요. 체계적이고 꼼꼼하며, 실용적인 방식으로 문제를 해결해요.',
      strengths: ['책임감', '신뢰성', '체계적인 사고', '인내심'],
      activities: ['계획표 만들기', '컬렉션 정리하기', '역사 공부하기', '규칙적인 운동'],
      careers: ['회계사', '법률가', '공무원', '관리자', '엔지니어'],
      hobbies: ['등산', '역사 공부', '컬렉션', '정리정돈', '독서'],
      loveStyle: '연애에서도 신뢰와 안정을 중요시해요. 화려한 표현보다 꾸준한 행동으로 사랑을 보여줘요. 약속을 지키고, 장기적인 관계를 추구해요.',
      behavioralScenarios: [
        { situation: '일을 맡으면', behavior: '계획을 세우고 차근차근 완수해요' },
        { situation: '규칙을 어기는 사람을 보면', behavior: '왜 규칙이 있는지 설명하고 싶어져요' },
        { situation: '갑자기 계획이 바뀌면', behavior: '약간 스트레스 받지만 적응하려 노력해요' }
      ]
    },
    en: {
      nickname: 'Reliable Responsible One',
      description: 'I\'m trustworthy and highly responsible. I follow rules well and complete assigned tasks. I\'m systematic and meticulous, solving problems in practical ways.',
      strengths: ['Responsibility', 'Reliability', 'Systematic Thinking', 'Patience'],
      activities: ['Making schedules', 'Organizing collections', 'Studying history', 'Regular exercise'],
      careers: ['Accountant', 'Lawyer', 'Civil Servant', 'Manager', 'Engineer'],
      hobbies: ['Hiking', 'History study', 'Collecting', 'Organizing', 'Reading'],
      loveStyle: 'I value trust and stability in relationships. I show love through consistent actions rather than flashy expressions. I keep promises and pursue long-term relationships.',
      behavioralScenarios: [
        { situation: 'When given a task', behavior: 'I make a plan and complete it step by step' },
        { situation: 'When seeing rule-breakers', behavior: 'I want to explain why rules exist' },
        { situation: 'When plans suddenly change', behavior: 'I feel stressed but try to adapt' }
      ]
    },
    ja: {
      nickname: '信頼できる責任者',
      description: '信頼性が高く責任感の強い人です。ルールをよく守り、任された仕事は最後まで完遂します。体系的で細かく、実用的な方法で問題を解決します。',
      strengths: ['責任感', '信頼性', '体系的思考', '忍耐力'],
      activities: ['スケジュールを作る', 'コレクションを整理する', '歴史を勉強する', '規則的な運動'],
      careers: ['会計士', '弁護士', '公務員', 'マネージャー', 'エンジニア'],
      hobbies: ['登山', '歴史研究', 'コレクション', '整理整頓', '読書'],
      loveStyle: '恋愛でも信頼と安定を重視します。派手な表現より着実な行動で愛を示します。約束を守り、長期的な関係を追求します。',
      behavioralScenarios: [
        { situation: '仕事を任されたとき', behavior: '計画を立てて着実に完遂します' },
        { situation: 'ルールを破る人を見たとき', behavior: 'なぜルールがあるのか説明したくなります' },
        { situation: '急に計画が変わったとき', behavior: '少しストレスを感じますが適応しようと努力します' }
      ]
    },
    zh: {
      nickname: '可靠的责任者',
      description: '我值得信赖且责任感强。我遵守规则，完成分配的任务。我系统而细致，用实际的方式解决问题。',
      strengths: ['责任感', '可靠性', '系统思维', '耐心'],
      activities: ['制定计划', '整理收藏', '学习历史', '规律运动'],
      careers: ['会计师', '律师', '公务员', '管理者', '工程师'],
      hobbies: ['登山', '历史研究', '收藏', '整理', '阅读'],
      loveStyle: '在恋爱中也重视信任和稳定。用持续的行动而非华丽的表达来展示爱。信守承诺，追求长期关系。',
      behavioralScenarios: [
        { situation: '接到任务时', behavior: '会制定计划并逐步完成' },
        { situation: '看到违反规则的人时', behavior: '想解释为什么要有规则' },
        { situation: '计划突然改变时', behavior: '会有些压力但努力适应' }
      ]
    }
  },
  ISFJ: {
    ko: {
      nickname: '따뜻한 수호자',
      description: '다른 사람들을 돌보고 보호하는 것을 좋아해요. 세심하고 배려심이 깊으며, 조용히 헌신하는 타입이에요. 전통과 규칙을 존중하고, 안정적인 환경을 만들어요.',
      strengths: ['배려심', '신뢰성', '세심함', '헌신'],
      activities: ['친구 돕기', '요리하기', '정리정돈', '가족과 시간 보내기'],
      careers: ['간호사', '교사', '사회복지사', '사서', '행정 담당자'],
      hobbies: ['요리', '베이킹', '정원 가꾸기', '수공예', '가족 모임'],
      loveStyle: '헌신적이고 따뜻한 사랑을 해요. 상대방의 필요를 먼저 생각하고, 세심하게 챙겨요. 안정적이고 오래가는 관계를 원하며, 작은 것들로 사랑을 표현해요.',
      behavioralScenarios: [
        { situation: '주변 사람이 힘들어 보이면', behavior: '말없이 옆에서 도와줄 방법을 찾아요' },
        { situation: '감사 인사를 받으면', behavior: '어색해하지만 내심 뿌듯해해요' },
        { situation: '갈등이 생기면', behavior: '자신을 희생해서라도 평화를 유지하려 해요' }
      ]
    },
    en: {
      nickname: 'Warm Protector',
      description: 'I love caring for and protecting others. I\'m considerate and deeply caring, the type who quietly devotes themselves. I respect tradition and rules, creating stable environments.',
      strengths: ['Consideration', 'Reliability', 'Attention to Detail', 'Dedication'],
      activities: ['Helping friends', 'Cooking', 'Organizing', 'Spending time with family'],
      careers: ['Nurse', 'Teacher', 'Social Worker', 'Librarian', 'Administrator'],
      hobbies: ['Cooking', 'Baking', 'Gardening', 'Handicrafts', 'Family gatherings'],
      loveStyle: 'I love devotedly and warmly. I think of my partner\'s needs first and care attentively. I want stable, lasting relationships and express love through small things.',
      behavioralScenarios: [
        { situation: 'When someone nearby seems troubled', behavior: 'I quietly find ways to help' },
        { situation: 'When thanked', behavior: 'I feel awkward but proud inside' },
        { situation: 'When conflict arises', behavior: 'I try to maintain peace even at my own expense' }
      ]
    },
    ja: {
      nickname: '温かい守護者',
      description: '他の人を世話し守ることが好きです。細やかで思いやりが深く、静かに献身するタイプです。伝統とルールを尊重し、安定した環境を作ります。',
      strengths: ['思いやり', '信頼性', '細やかさ', '献身'],
      activities: ['友達を助ける', '料理する', '整理整頓', '家族と過ごす'],
      careers: ['看護師', '教師', '社会福祉士', '司書', '事務担当'],
      hobbies: ['料理', 'ベーキング', 'ガーデニング', '手芸', '家族の集まり'],
      loveStyle: '献身的で温かい愛をします。相手のニーズを先に考え、細やかに気を配ります。安定した長続きする関係を望み、小さなことで愛を表現します。',
      behavioralScenarios: [
        { situation: '周りの人が困っているように見えたとき', behavior: '静かにそばで助ける方法を探します' },
        { situation: '感謝されたとき', behavior: '照れますが内心嬉しいです' },
        { situation: '対立が起きたとき', behavior: '自分を犠牲にしてでも平和を保とうとします' }
      ]
    },
    zh: {
      nickname: '温暖的守护者',
      description: '我喜欢照顾和保护他人。我细心体贴，默默奉献的类型。我尊重传统和规则，创造稳定的环境。',
      strengths: ['体贴', '可靠性', '细心', '奉献'],
      activities: ['帮助朋友', '做饭', '整理', '与家人共度时光'],
      careers: ['护士', '教师', '社会工作者', '图书管理员', '行政人员'],
      hobbies: ['烹饪', '烘焙', '园艺', '手工艺', '家庭聚会'],
      loveStyle: '我用奉献和温暖的方式去爱。先考虑伴侣的需求，细心照顾。想要稳定持久的关系，用小事表达爱。',
      behavioralScenarios: [
        { situation: '看到周围人有困难时', behavior: '会默默寻找帮助的方法' },
        { situation: '被感谢时', behavior: '虽然有些不好意思但内心很高兴' },
        { situation: '发生冲突时', behavior: '即使牺牲自己也会尝试维持和平' }
      ]
    }
  },
  ESTJ: {
    ko: {
      nickname: '결단력 있는 관리자',
      description: '조직적이고 효율적으로 일을 처리하는 사람이에요. 리더십이 있고, 규칙과 질서를 중요하게 생각해요. 실용적이고 논리적이며, 목표 달성을 위해 열심히 노력해요.',
      strengths: ['조직력', '리더십', '실행력', '책임감'],
      activities: ['학급 회장하기', '프로젝트 관리', '스포츠 팀 활동', '계획 세우기'],
      careers: ['관리자', 'CEO', '군인', '판사', '프로젝트 매니저'],
      hobbies: ['골프', '등산', '자원봉사 조직', '스포츠', '커뮤니티 활동'],
      loveStyle: '연애에서도 책임감 있게 행동해요. 상대방에게 안정감을 주고, 실질적인 방법으로 사랑을 표현해요. 약속을 중요시하고, 장기적인 관계를 추구해요.',
      behavioralScenarios: [
        { situation: '팀이 방향을 잃으면', behavior: '즉시 계획을 세우고 역할을 분배해요' },
        { situation: '규칙을 어기는 행동을 보면', behavior: '바로잡으려고 직접적으로 말해요' },
        { situation: '목표가 정해지면', behavior: '효율적인 방법으로 달성하려 노력해요' }
      ]
    },
    en: {
      nickname: 'Decisive Manager',
      description: 'I handle things in an organized and efficient way. I have leadership skills and value rules and order. I\'m practical and logical, working hard to achieve goals.',
      strengths: ['Organization', 'Leadership', 'Execution', 'Responsibility'],
      activities: ['Being class president', 'Project management', 'Sports team activities', 'Making plans'],
      careers: ['Manager', 'CEO', 'Military', 'Judge', 'Project Manager'],
      hobbies: ['Golf', 'Hiking', 'Organizing volunteers', 'Sports', 'Community activities'],
      loveStyle: 'I act responsibly in relationships. I give my partner stability and express love in practical ways. I value promises and pursue long-term relationships.',
      behavioralScenarios: [
        { situation: 'When the team loses direction', behavior: 'I immediately make plans and assign roles' },
        { situation: 'When I see rule-breaking', behavior: 'I speak directly to correct it' },
        { situation: 'When a goal is set', behavior: 'I try to achieve it efficiently' }
      ]
    },
    ja: {
      nickname: '決断力のあるマネージャー',
      description: '組織的で効率的に物事を処理する人です。リーダーシップがあり、ルールと秩序を重視します。実用的で論理的で、目標達成のために一生懸命努力します。',
      strengths: ['組織力', 'リーダーシップ', '実行力', '責任感'],
      activities: ['学級委員長をする', 'プロジェクト管理', 'スポーツチーム活動', '計画を立てる'],
      careers: ['マネージャー', 'CEO', '軍人', '裁判官', 'プロジェクトマネージャー'],
      hobbies: ['ゴルフ', '登山', 'ボランティア組織', 'スポーツ', 'コミュニティ活動'],
      loveStyle: '恋愛でも責任感を持って行動します。相手に安定感を与え、実質的な方法で愛を表現します。約束を大切にし、長期的な関係を追求します。',
      behavioralScenarios: [
        { situation: 'チームが方向を見失ったとき', behavior: 'すぐに計画を立て役割を分担します' },
        { situation: 'ルール違反を見たとき', behavior: '直接的に正そうとします' },
        { situation: '目標が決まったとき', behavior: '効率的な方法で達成しようと努力します' }
      ]
    },
    zh: {
      nickname: '果断的管理者',
      description: '我以有组织和高效的方式处理事务。我有领导力，重视规则和秩序。我务实而有逻辑，努力实现目标。',
      strengths: ['组织能力', '领导力', '执行力', '责任感'],
      activities: ['当班长', '项目管理', '体育团队活动', '制定计划'],
      careers: ['管理者', 'CEO', '军人', '法官', '项目经理'],
      hobbies: ['高尔夫', '登山', '组织志愿者', '运动', '社区活动'],
      loveStyle: '在恋爱中也表现得有责任感。给伴侣安全感，用实际的方式表达爱。重视承诺，追求长期关系。',
      behavioralScenarios: [
        { situation: '当团队失去方向时', behavior: '会立即制定计划并分配角色' },
        { situation: '看到违规行为时', behavior: '会直接指出并纠正' },
        { situation: '目标确定后', behavior: '会努力用高效的方式达成' }
      ]
    }
  },
  ESFJ: {
    ko: {
      nickname: '사교적인 돌봄이',
      description: '친절하고 사교적이며, 다른 사람들과 어울리는 것을 좋아해요. 조화로운 관계를 만들고 유지하는 데 뛰어나요. 실용적이고 협력적이며, 다른 사람들을 돕는 것에서 기쁨을 느껴요.',
      strengths: ['사교성', '협력심', '조직력', '배려심'],
      activities: ['파티 계획하기', '친구들과 어울리기', '봉사 활동', '팀 활동'],
      careers: ['이벤트 플래너', '간호사', '교사', 'HR 담당자', '영업'],
      hobbies: ['파티 기획', '요리', '봉사 활동', '친구 만나기', '커뮤니티 활동'],
      loveStyle: '사랑을 듬뿍 주는 타입이에요. 상대방을 세심하게 챙기고, 함께하는 시간을 소중히 여겨요. 안정적이고 따뜻한 가정을 꿈꾸며, 사랑을 적극적으로 표현해요.',
      behavioralScenarios: [
        { situation: '친구 생일이 다가오면', behavior: '깜짝 파티를 기획하거나 선물을 고르느라 바빠요' },
        { situation: '갈등이 생기면', behavior: '모두가 화해할 수 있도록 중재해요' },
        { situation: '새로운 사람이 오면', behavior: '먼저 다가가서 편하게 만들어줘요' }
      ]
    },
    en: {
      nickname: 'Social Caregiver',
      description: 'I\'m kind and sociable, loving to spend time with others. I\'m excellent at creating and maintaining harmonious relationships. I\'m practical and cooperative, finding joy in helping others.',
      strengths: ['Sociability', 'Cooperation', 'Organization', 'Consideration'],
      activities: ['Planning parties', 'Hanging out with friends', 'Volunteering', 'Team activities'],
      careers: ['Event Planner', 'Nurse', 'Teacher', 'HR Specialist', 'Sales'],
      hobbies: ['Party planning', 'Cooking', 'Volunteering', 'Meeting friends', 'Community activities'],
      loveStyle: 'I give love generously. I care attentively for my partner and treasure time together. I dream of a stable, warm home and express love actively.',
      behavioralScenarios: [
        { situation: 'When a friend\'s birthday approaches', behavior: 'I\'m busy planning surprise parties or choosing gifts' },
        { situation: 'When conflict arises', behavior: 'I mediate so everyone can reconcile' },
        { situation: 'When someone new arrives', behavior: 'I approach first to make them comfortable' }
      ]
    },
    ja: {
      nickname: '社交的なケアギバー',
      description: '親切で社交的で、他の人と過ごすのが好きです。調和のとれた関係を築き維持するのが得意です。実用的で協力的で、他の人を助けることに喜びを感じます。',
      strengths: ['社交性', '協調性', '組織力', '思いやり'],
      activities: ['パーティーを計画する', '友達と過ごす', 'ボランティア', 'チーム活動'],
      careers: ['イベントプランナー', '看護師', '教師', 'HR担当者', '営業'],
      hobbies: ['パーティー企画', '料理', 'ボランティア', '友達に会う', 'コミュニティ活動'],
      loveStyle: 'たっぷり愛を注ぐタイプです。相手を細やかに気遣い、一緒の時間を大切にします。安定した温かい家庭を夢見て、積極的に愛を表現します。',
      behavioralScenarios: [
        { situation: '友達の誕生日が近づくと', behavior: 'サプライズパーティーを企画したりプレゼントを選んだりで忙しいです' },
        { situation: '対立が起きたとき', behavior: 'みんなが和解できるよう仲裁します' },
        { situation: '新しい人が来たとき', behavior: '先に近づいてリラックスさせます' }
      ]
    },
    zh: {
      nickname: '社交照顾者',
      description: '我友善且善于社交，喜欢与他人相处。我擅长建立和维护和谐的关系。我务实且合作，从帮助他人中获得快乐。',
      strengths: ['社交能力', '合作精神', '组织能力', '体贴'],
      activities: ['策划派对', '与朋友相处', '志愿服务', '团队活动'],
      careers: ['活动策划', '护士', '教师', 'HR专员', '销售'],
      hobbies: ['策划派对', '烹饪', '志愿服务', '见朋友', '社区活动'],
      loveStyle: '我会给予很多爱。细心照顾伴侣，珍惜在一起的时光。梦想稳定温暖的家庭，积极表达爱意。',
      behavioralScenarios: [
        { situation: '朋友生日快到时', behavior: '忙着策划惊喜派对或挑选礼物' },
        { situation: '发生冲突时', behavior: '会调解让大家和解' },
        { situation: '有新人加入时', behavior: '会先主动接近让他们感到舒适' }
      ]
    }
  },
  ISTP: {
    ko: {
      nickname: '논리적인 탐구가',
      description: '손재주가 뛰어나고 논리적인 사람이에요. 실용적인 문제를 해결하는 것을 좋아하고, 새로운 것을 분석하고 이해하려고 해요. 조용하지만 모험을 즐기기도 해요.',
      strengths: ['논리적 사고', '손재주', '문제 해결력', '침착함'],
      activities: ['조립하기', '실험하기', '스포츠', '게임'],
      careers: ['엔지니어', '정비사', '조종사', '운동선수', '외과의사'],
      hobbies: ['자동차 정비', '익스트림 스포츠', 'DIY', '게임', '도구 다루기'],
      loveStyle: '행동으로 사랑을 표현해요. 말보다는 함께하는 활동을 통해 친밀감을 쌓아요. 개인 공간을 중요시하지만, 신뢰하는 사람에게는 깊은 유대감을 보여요.',
      behavioralScenarios: [
        { situation: '기계가 고장 나면', behavior: '분해해서 원인을 찾고 직접 고쳐요' },
        { situation: '위기 상황이 생기면', behavior: '침착하게 상황을 분석하고 대처해요' },
        { situation: '지루한 일을 해야 할 때', behavior: '더 효율적인 방법을 찾거나 피해요' }
      ]
    },
    en: {
      nickname: 'Logical Explorer',
      description: 'I\'m skilled with my hands and logical. I enjoy solving practical problems and analyzing new things. I\'m quiet but also enjoy adventure.',
      strengths: ['Logical Thinking', 'Manual Skills', 'Problem Solving', 'Calm Composure'],
      activities: ['Assembling things', 'Experimenting', 'Sports', 'Gaming'],
      careers: ['Engineer', 'Mechanic', 'Pilot', 'Athlete', 'Surgeon'],
      hobbies: ['Car maintenance', 'Extreme sports', 'DIY', 'Gaming', 'Working with tools'],
      loveStyle: 'I express love through actions. I build intimacy through shared activities rather than words. I value personal space but show deep bonds to those I trust.',
      behavioralScenarios: [
        { situation: 'When a machine breaks down', behavior: 'I take it apart to find the cause and fix it myself' },
        { situation: 'In crisis situations', behavior: 'I calmly analyze and handle the situation' },
        { situation: 'When facing boring tasks', behavior: 'I find more efficient ways or avoid them' }
      ]
    },
    ja: {
      nickname: '論理的な探求者',
      description: '手先が器用で論理的な人です。実用的な問題を解決することが好きで、新しいことを分析して理解しようとします。静かですが冒険も楽しみます。',
      strengths: ['論理的思考', '器用さ', '問題解決力', '冷静さ'],
      activities: ['組み立て', '実験', 'スポーツ', 'ゲーム'],
      careers: ['エンジニア', '整備士', 'パイロット', 'アスリート', '外科医'],
      hobbies: ['車の整備', 'エクストリームスポーツ', 'DIY', 'ゲーム', '道具を扱う'],
      loveStyle: '行動で愛を表現します。言葉より一緒の活動を通じて親密さを築きます。個人の空間を大切にしますが、信頼する人には深いつながりを見せます。',
      behavioralScenarios: [
        { situation: '機械が故障したとき', behavior: '分解して原因を見つけ、自分で直します' },
        { situation: '危機的状況が起きたとき', behavior: '冷静に状況を分析して対処します' },
        { situation: '退屈な仕事をしなければならないとき', behavior: 'より効率的な方法を探すか避けます' }
      ]
    },
    zh: {
      nickname: '逻辑探索者',
      description: '我动手能力强且有逻辑。我喜欢解决实际问题，分析理解新事物。我安静但也喜欢冒险。',
      strengths: ['逻辑思维', '动手能力', '解决问题', '冷静沉着'],
      activities: ['组装', '实验', '运动', '游戏'],
      careers: ['工程师', '技工', '飞行员', '运动员', '外科医生'],
      hobbies: ['汽车维修', '极限运动', 'DIY', '游戏', '使用工具'],
      loveStyle: '用行动表达爱。通过共同活动而非言语建立亲密感。重视个人空间，但对信任的人会展示深厚的纽带。',
      behavioralScenarios: [
        { situation: '机器坏了时', behavior: '会拆开找原因并自己修理' },
        { situation: '危机情况发生时', behavior: '会冷静分析并处理情况' },
        { situation: '面对无聊任务时', behavior: '会寻找更高效的方法或避开' }
      ]
    }
  },
  ISFP: {
    ko: {
      nickname: '온화한 예술가',
      description: '예술적 감각이 뛰어나고 온화한 성격이에요. 현재의 순간을 즐기고, 자신만의 방식으로 세상을 표현해요. 겸손하고 친절하며, 조화로운 것을 추구해요.',
      strengths: ['예술적 감각', '적응력', '친절함', '관찰력'],
      activities: ['그림 그리기', '음악 연주하기', '자연 탐험', '사진 찍기'],
      careers: ['디자이너', '사진작가', '뮤지션', '요리사', '동물 관련 직업'],
      hobbies: ['그림', '음악', '사진', '자연 탐방', '동물 돌보기'],
      loveStyle: '조용하지만 깊은 사랑을 해요. 상대방을 있는 그대로 받아들이고, 작은 것들로 애정을 표현해요. 자유로운 관계를 원하지만, 깊은 감정적 연결을 추구해요.',
      behavioralScenarios: [
        { situation: '아름다운 풍경을 보면', behavior: '한참을 멈춰서 감상하거나 사진을 찍어요' },
        { situation: '갈등 상황이 생기면', behavior: '피하거나 조용히 물러나요' },
        { situation: '자신만의 시간이 필요하면', behavior: '예술 활동이나 자연 속에서 재충전해요' }
      ]
    },
    en: {
      nickname: 'Gentle Artist',
      description: 'I have great artistic sense and a gentle personality. I enjoy the present moment and express the world in my own way. I\'m humble and kind, seeking harmony.',
      strengths: ['Artistic Sense', 'Adaptability', 'Kindness', 'Observation'],
      activities: ['Drawing', 'Playing music', 'Exploring nature', 'Taking photos'],
      careers: ['Designer', 'Photographer', 'Musician', 'Chef', 'Animal-related jobs'],
      hobbies: ['Art', 'Music', 'Photography', 'Nature walks', 'Caring for animals'],
      loveStyle: 'I love quietly but deeply. I accept my partner as they are and express affection through small things. I want freedom but pursue deep emotional connection.',
      behavioralScenarios: [
        { situation: 'When seeing beautiful scenery', behavior: 'I stop to appreciate it or take photos' },
        { situation: 'When conflict arises', behavior: 'I avoid it or quietly withdraw' },
        { situation: 'When I need alone time', behavior: 'I recharge through art or nature' }
      ]
    },
    ja: {
      nickname: '穏やかなアーティスト',
      description: '芸術的センスに優れ、穏やかな性格です。今この瞬間を楽しみ、自分なりの方法で世界を表現します。謙虚で親切で、調和を追求します。',
      strengths: ['芸術的センス', '適応力', '親切さ', '観察力'],
      activities: ['絵を描く', '音楽を演奏する', '自然探検', '写真を撮る'],
      careers: ['デザイナー', '写真家', 'ミュージシャン', 'シェフ', '動物関連の仕事'],
      hobbies: ['絵', '音楽', '写真', '自然散策', '動物の世話'],
      loveStyle: '静かですが深く愛します。相手をありのまま受け入れ、小さなことで愛情を表現します。自由を求めますが、深い感情的なつながりも追求します。',
      behavioralScenarios: [
        { situation: '美しい景色を見たとき', behavior: '立ち止まって鑑賞したり写真を撮ったりします' },
        { situation: '対立状況が起きたとき', behavior: '避けたり静かに引き下がります' },
        { situation: '一人の時間が必要なとき', behavior: '芸術活動や自然の中で充電します' }
      ]
    },
    zh: {
      nickname: '温和的艺术家',
      description: '我有很好的艺术感觉和温和的性格。我享受当下，用自己的方式表达世界。我谦逊友善，追求和谐。',
      strengths: ['艺术感', '适应力', '友善', '观察力'],
      activities: ['画画', '演奏音乐', '探索自然', '摄影'],
      careers: ['设计师', '摄影师', '音乐家', '厨师', '动物相关工作'],
      hobbies: ['艺术', '音乐', '摄影', '自然散步', '照顾动物'],
      loveStyle: '我安静但深沉地爱。接受伴侣本来的样子，用小事表达爱意。想要自由但追求深层情感连接。',
      behavioralScenarios: [
        { situation: '看到美丽风景时', behavior: '会停下来欣赏或拍照' },
        { situation: '发生冲突时', behavior: '会避开或安静地退让' },
        { situation: '需要独处时间时', behavior: '通过艺术或自然充电' }
      ]
    }
  },
  ESTP: {
    ko: {
      nickname: '활동적인 모험가',
      description: '에너지가 넘치고 활동적인 사람이에요! 새로운 경험과 모험을 좋아하고, 순간의 즐거움을 추구해요. 문제 상황에서 빠르게 대처하고, 현실적인 해결책을 찾아요.',
      strengths: ['순발력', '대담함', '현실감각', '사교성'],
      activities: ['스포츠', '여행', '새로운 도전', '친구들과 놀기'],
      careers: ['영업', '운동선수', '기업가', '소방관', '이벤트 기획자'],
      hobbies: ['익스트림 스포츠', '파티', '여행', '도박', '새로운 도전'],
      loveStyle: '스릴 있는 연애를 좋아해요! 상대방과 함께 모험하고 새로운 경험을 공유하기를 원해요. 순간을 즐기며, 유쾌하고 재미있는 관계를 추구해요.',
      behavioralScenarios: [
        { situation: '새로운 도전 기회가 오면', behavior: '일단 해보고 결과는 나중에 생각해요' },
        { situation: '위기 상황이 생기면', behavior: '즉시 행동하며 현장에서 해결해요' },
        { situation: '계획을 세우라고 하면', behavior: '최소한만 세우고 유연하게 움직여요' }
      ]
    },
    en: {
      nickname: 'Active Adventurer',
      description: 'I\'m full of energy and active! I love new experiences and adventures, seeking momentary pleasures. I respond quickly to problems and find realistic solutions.',
      strengths: ['Quick Reflexes', 'Boldness', 'Realism', 'Sociability'],
      activities: ['Sports', 'Traveling', 'New challenges', 'Hanging out with friends'],
      careers: ['Sales', 'Athlete', 'Entrepreneur', 'Firefighter', 'Event Planner'],
      hobbies: ['Extreme sports', 'Parties', 'Traveling', 'Gambling', 'New challenges'],
      loveStyle: 'I love thrilling relationships! I want to adventure and share new experiences with my partner. I enjoy the moment and pursue fun, exciting relationships.',
      behavioralScenarios: [
        { situation: 'When a new challenge comes', behavior: 'I just do it and think about results later' },
        { situation: 'In crisis situations', behavior: 'I act immediately and solve it on the spot' },
        { situation: 'When asked to make plans', behavior: 'I make minimal plans and move flexibly' }
      ]
    },
    ja: {
      nickname: 'アクティブな冒険家',
      description: 'エネルギッシュでアクティブな人です！新しい経験と冒険を愛し、瞬間の喜びを追求します。問題状況で素早く対応し、現実的な解決策を見つけます。',
      strengths: ['瞬発力', '大胆さ', '現実感覚', '社交性'],
      activities: ['スポーツ', '旅行', '新しい挑戦', '友達と遊ぶ'],
      careers: ['営業', 'アスリート', '起業家', '消防士', 'イベントプランナー'],
      hobbies: ['エクストリームスポーツ', 'パーティー', '旅行', 'ギャンブル', '新しい挑戦'],
      loveStyle: 'スリルのある恋愛が好きです！相手と一緒に冒険し、新しい経験を共有したいです。瞬間を楽しみ、楽しくてエキサイティングな関係を追求します。',
      behavioralScenarios: [
        { situation: '新しい挑戦の機会が来たとき', behavior: 'まずやってみて結果は後で考えます' },
        { situation: '危機的状況が起きたとき', behavior: 'すぐに行動してその場で解決します' },
        { situation: '計画を立てるように言われたとき', behavior: '最小限だけ立てて柔軟に動きます' }
      ]
    },
    zh: {
      nickname: '活跃冒险家',
      description: '我充满能量且活跃！我喜欢新体验和冒险，追求当下的快乐。我快速应对问题，找到现实的解决方案。',
      strengths: ['反应快', '大胆', '现实感', '社交能力'],
      activities: ['运动', '旅行', '新挑战', '和朋友玩'],
      careers: ['销售', '运动员', '企业家', '消防员', '活动策划'],
      hobbies: ['极限运动', '派对', '旅行', '赌博', '新挑战'],
      loveStyle: '喜欢刺激的恋爱！想和伴侣一起冒险分享新体验。享受当下，追求有趣刺激的关系。',
      behavioralScenarios: [
        { situation: '有新挑战机会时', behavior: '先做了再说，结果以后再想' },
        { situation: '危机情况发生时', behavior: '立即行动，现场解决' },
        { situation: '被要求制定计划时', behavior: '只做最少的计划，灵活行动' }
      ]
    }
  },
  ESFP: {
    ko: {
      nickname: '즐거운 엔터테이너',
      description: '밝고 긍정적인 에너지로 주변을 즐겁게 해요! 사람들과 함께하는 것을 좋아하고, 현재의 순간을 최대한 즐기려고 해요. 자연스럽고 유쾌하며, 분위기를 띄우는 능력이 있어요.',
      strengths: ['사교성', '긍정적 에너지', '적응력', '표현력'],
      activities: ['공연하기', '파티 즐기기', '춤추기', '새로운 경험'],
      careers: ['배우', '가수', '이벤트 플래너', '영업', 'MC'],
      hobbies: ['춤', '노래', '파티', '쇼핑', '패션'],
      loveStyle: '연애를 즐겁게 해요! 상대방과 함께 웃고 즐기며, 매 순간을 특별하게 만들어요. 애정 표현을 아끼지 않고, 함께하는 시간을 소중히 여겨요.',
      behavioralScenarios: [
        { situation: '파티에 가면', behavior: '자연스럽게 분위기를 띄우고 사람들과 어울려요' },
        { situation: '슬픈 일이 생기면', behavior: '오래 슬퍼하지 않고 긍정적인 면을 찾아요' },
        { situation: '계획대로 안 되면', behavior: '유연하게 다른 재미있는 걸 찾아요' }
      ]
    },
    en: {
      nickname: 'Fun Entertainer',
      description: 'I brighten surroundings with positive energy! I love being with people and try to enjoy every moment. I\'m natural and cheerful, with the ability to liven up any atmosphere.',
      strengths: ['Sociability', 'Positive Energy', 'Adaptability', 'Expressiveness'],
      activities: ['Performing', 'Enjoying parties', 'Dancing', 'New experiences'],
      careers: ['Actor', 'Singer', 'Event Planner', 'Sales', 'MC'],
      hobbies: ['Dancing', 'Singing', 'Parties', 'Shopping', 'Fashion'],
      loveStyle: 'I make love fun! I laugh and enjoy with my partner, making every moment special. I don\'t hold back affection and treasure time together.',
      behavioralScenarios: [
        { situation: 'At parties', behavior: 'I naturally liven up the atmosphere and mingle' },
        { situation: 'When sad things happen', behavior: 'I don\'t stay sad long and look for positives' },
        { situation: 'When plans don\'t work out', behavior: 'I flexibly find something else fun' }
      ]
    },
    ja: {
      nickname: '楽しいエンターテイナー',
      description: '明るくポジティブなエネルギーで周りを楽しませます！人と一緒にいることが好きで、今この瞬間を最大限楽しもうとします。自然体で陽気で、雰囲気を盛り上げる能力があります。',
      strengths: ['社交性', 'ポジティブエネルギー', '適応力', '表現力'],
      activities: ['パフォーマンス', 'パーティーを楽しむ', 'ダンス', '新しい経験'],
      careers: ['俳優', '歌手', 'イベントプランナー', '営業', 'MC'],
      hobbies: ['ダンス', '歌', 'パーティー', 'ショッピング', 'ファッション'],
      loveStyle: '恋愛を楽しくします！相手と一緒に笑って楽しみ、毎瞬間を特別にします。愛情表現を惜しまず、一緒の時間を大切にします。',
      behavioralScenarios: [
        { situation: 'パーティーで', behavior: '自然と雰囲気を盛り上げ、みんなと交流します' },
        { situation: '悲しいことが起きたとき', behavior: '長く悲しまずポジティブな面を探します' },
        { situation: '計画通りにいかないとき', behavior: '柔軟に他の楽しいことを探します' }
      ]
    },
    zh: {
      nickname: '快乐的表演者',
      description: '我用积极的能量让周围变得快乐！我喜欢和人在一起，尽可能享受每一刻。我自然开朗，有活跃气氛的能力。',
      strengths: ['社交能力', '正能量', '适应力', '表达力'],
      activities: ['表演', '享受派对', '跳舞', '新体验'],
      careers: ['演员', '歌手', '活动策划', '销售', '主持人'],
      hobbies: ['跳舞', '唱歌', '派对', '购物', '时尚'],
      loveStyle: '让恋爱变得有趣！和伴侣一起欢笑享乐，让每一刻都特别。不吝惜表达爱意，珍惜在一起的时光。',
      behavioralScenarios: [
        { situation: '在派对上', behavior: '自然而然地活跃气氛，与人交流' },
        { situation: '发生难过的事时', behavior: '不会长时间悲伤，会寻找积极面' },
        { situation: '计划没有按预期进行时', behavior: '会灵活地找其他有趣的事' }
      ]
    }
  }
};

export function getLocalizedMBTIType(type: string, language: Language): LocalizedMBTIType | undefined {
  const normalizedType = type.toUpperCase();
  return mbtiTypesLocalized[normalizedType]?.[language];
}
