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

export interface LocalizedAgeNarrative {
  overview: string;
  keyTraits: string[];
  scenarios: { situation: string; behavior: string }[];
}

export type AgeGroup = 'elementary' | 'middle' | 'high' | 'adult';

export interface LocalizedFunFacts {
  hiddenTalent: string;
  funFact: string;
  superpower: string;
  famousQuote: string;
  bestMatch: string;
  secretWeakness: string;
}

const ageNarrativesLocalized: Record<string, Record<AgeGroup, Record<Language, LocalizedAgeNarrative>>> = {
  INTP: {
    elementary: {
      ko: {
        overview: "호기심이 많아서 '왜?'라는 질문을 자주 해요. 혼자 생각하는 시간을 좋아하고, 새로운 것을 배우는 걸 즐거워해요.",
        keyTraits: ["호기심이 많아요", "질문을 많이 해요", "혼자 놀기도 좋아해요", "생각이 깊어요"],
        scenarios: [
          { situation: "새로운 장난감이 생기면", behavior: "어떻게 작동하는지 분해해서 살펴봐요" },
          { situation: "모르는 것이 있으면", behavior: "끝까지 알아낼 때까지 질문해요" },
          { situation: "친구들과 놀 때", behavior: "새로운 게임 규칙을 만들어요" }
        ]
      },
      en: {
        overview: "Very curious and often asks 'why?' Enjoys time alone to think and loves learning new things.",
        keyTraits: ["Very curious", "Asks lots of questions", "Likes playing alone too", "Deep thinker"],
        scenarios: [
          { situation: "When getting a new toy", behavior: "Takes it apart to see how it works" },
          { situation: "When there's something unknown", behavior: "Keeps asking until finding the answer" },
          { situation: "When playing with friends", behavior: "Creates new game rules" }
        ]
      },
      ja: {
        overview: "好奇心旺盛で「なぜ？」とよく質問します。一人で考える時間が好きで、新しいことを学ぶのを楽しみます。",
        keyTraits: ["好奇心旺盛", "質問をたくさんする", "一人遊びも好き", "考えが深い"],
        scenarios: [
          { situation: "新しいおもちゃをもらったら", behavior: "どう動くか分解して調べます" },
          { situation: "分からないことがあったら", behavior: "答えが見つかるまで質問し続けます" },
          { situation: "友達と遊ぶとき", behavior: "新しいゲームのルールを作ります" }
        ]
      },
      zh: {
        overview: "非常好奇，经常问'为什么？' 喜欢独自思考的时间，喜欢学习新事物。",
        keyTraits: ["非常好奇", "问很多问题", "也喜欢独自玩耍", "思考深入"],
        scenarios: [
          { situation: "得到新玩具时", behavior: "拆开看看它是怎么工作的" },
          { situation: "有不懂的事情时", behavior: "不断问直到找到答案" },
          { situation: "和朋友玩时", behavior: "创造新的游戏规则" }
        ]
      }
    },
    middle: {
      ko: {
        overview: "논리적 사고력이 발달하고, 복잡한 문제를 푸는 것을 좋아해요. 자신만의 이론을 세우고 검증하려 해요.",
        keyTraits: ["논리적이에요", "분석적이에요", "독립적이에요", "창의적이에요"],
        scenarios: [
          { situation: "수학 문제를 풀 때", behavior: "여러 가지 방법으로 풀어보며 가장 효율적인 방법을 찾아요" },
          { situation: "그룹 활동에서", behavior: "아이디어를 제안하고 논리적으로 설명해요" },
          { situation: "새로운 취미를 찾으면", behavior: "깊이 파고들어 전문가 수준으로 연구해요" }
        ]
      },
      en: {
        overview: "Develops strong logical thinking and enjoys solving complex problems. Tries to build and verify their own theories.",
        keyTraits: ["Logical", "Analytical", "Independent", "Creative"],
        scenarios: [
          { situation: "When solving math problems", behavior: "Tries multiple methods to find the most efficient one" },
          { situation: "In group activities", behavior: "Proposes ideas and explains logically" },
          { situation: "When finding a new hobby", behavior: "Dives deep and researches to expert level" }
        ]
      },
      ja: {
        overview: "論理的思考力が発達し、複雑な問題を解くのが好きです。自分なりの理論を立てて検証しようとします。",
        keyTraits: ["論理的", "分析的", "独立心がある", "創造的"],
        scenarios: [
          { situation: "数学の問題を解くとき", behavior: "いろいろな方法で解いて最も効率的な方法を探します" },
          { situation: "グループ活動で", behavior: "アイデアを提案し、論理的に説明します" },
          { situation: "新しい趣味を見つけたら", behavior: "深く掘り下げて専門家レベルまで研究します" }
        ]
      },
      zh: {
        overview: "逻辑思维能力强，喜欢解决复杂问题。尝试建立并验证自己的理论。",
        keyTraits: ["逻辑性强", "善于分析", "独立", "有创造力"],
        scenarios: [
          { situation: "解数学题时", behavior: "尝试多种方法找出最有效的" },
          { situation: "在小组活动中", behavior: "提出想法并逻辑地解释" },
          { situation: "发现新爱好时", behavior: "深入研究到专家水平" }
        ]
      }
    },
    high: {
      ko: {
        overview: "깊이 있는 사고와 분석으로 문제의 본질을 파악해요. 지적 호기심이 강하고, 이론과 가능성을 탐구해요.",
        keyTraits: ["분석적이에요", "객관적이에요", "이론적이에요", "창의적이에요"],
        scenarios: [
          { situation: "복잡한 문제가 있으면", behavior: "여러 각도에서 분석하고 해결책을 찾아요" },
          { situation: "관심 있는 주제에 대해", behavior: "깊이 연구하고 자기만의 이론을 만들어요" },
          { situation: "틀린 논리를 보면", behavior: "조용히 문제점을 파악하고, 가끔 지적해요" }
        ]
      },
      en: {
        overview: "Grasps the essence of problems through deep thinking and analysis. Has strong intellectual curiosity and explores theories and possibilities.",
        keyTraits: ["Analytical", "Objective", "Theoretical", "Creative"],
        scenarios: [
          { situation: "When facing complex problems", behavior: "Analyzes from multiple angles and finds solutions" },
          { situation: "About topics of interest", behavior: "Researches deeply and creates own theories" },
          { situation: "When seeing flawed logic", behavior: "Quietly identifies issues and sometimes points them out" }
        ]
      },
      ja: {
        overview: "深い思考と分析で問題の本質を把握します。知的好奇心が強く、理論と可能性を探求します。",
        keyTraits: ["分析的", "客観的", "理論的", "創造的"],
        scenarios: [
          { situation: "複雑な問題があったら", behavior: "いろいろな角度から分析して解決策を探します" },
          { situation: "興味のあるテーマについて", behavior: "深く研究して自分だけの理論を作ります" },
          { situation: "間違った論理を見たら", behavior: "静かに問題点を把握し、時々指摘します" }
        ]
      },
      zh: {
        overview: "通过深入思考和分析把握问题本质。有强烈的求知欲，探索理论和可能性。",
        keyTraits: ["分析性强", "客观", "理论性强", "有创造力"],
        scenarios: [
          { situation: "遇到复杂问题时", behavior: "从多角度分析并找出解决方案" },
          { situation: "对于感兴趣的话题", behavior: "深入研究并创建自己的理论" },
          { situation: "看到错误逻辑时", behavior: "静静地发现问题，有时会指出" }
        ]
      }
    },
    adult: {
      ko: {
        overview: "독창적인 아이디어와 논리적 분석으로 혁신을 이끌어요. 복잡한 시스템을 이해하고 개선하는 것에 능해요.",
        keyTraits: ["혁신적이에요", "분석적이에요", "독립적이에요", "논리적이에요"],
        scenarios: [
          { situation: "새로운 프로젝트에서", behavior: "기존의 틀을 벗어난 해결책을 제시해요" },
          { situation: "비효율적인 시스템을 보면", behavior: "개선점을 분석하고 새로운 방법을 제안해요" },
          { situation: "토론에서", behavior: "논리적 근거를 바탕으로 의견을 제시해요" }
        ]
      },
      en: {
        overview: "Leads innovation with original ideas and logical analysis. Skilled at understanding and improving complex systems.",
        keyTraits: ["Innovative", "Analytical", "Independent", "Logical"],
        scenarios: [
          { situation: "In new projects", behavior: "Proposes solutions outside the conventional framework" },
          { situation: "When seeing inefficient systems", behavior: "Analyzes improvements and suggests new methods" },
          { situation: "In discussions", behavior: "Presents opinions based on logical evidence" }
        ]
      },
      ja: {
        overview: "独創的なアイデアと論理的分析でイノベーションをリードします。複雑なシステムを理解し改善することに長けています。",
        keyTraits: ["革新的", "分析的", "独立心がある", "論理的"],
        scenarios: [
          { situation: "新しいプロジェクトで", behavior: "既存の枠を超えた解決策を提示します" },
          { situation: "非効率なシステムを見たら", behavior: "改善点を分析し、新しい方法を提案します" },
          { situation: "議論で", behavior: "論理的な根拠に基づいて意見を述べます" }
        ]
      },
      zh: {
        overview: "用原创想法和逻辑分析引领创新。擅长理解和改进复杂系统。",
        keyTraits: ["创新", "分析性强", "独立", "逻辑性强"],
        scenarios: [
          { situation: "在新项目中", behavior: "提出超越传统框架的解决方案" },
          { situation: "看到低效系统时", behavior: "分析改进点并建议新方法" },
          { situation: "在讨论中", behavior: "基于逻辑证据发表意见" }
        ]
      }
    }
  },
  INFP: {
    elementary: {
      ko: {
        overview: "상상력이 풍부하고 감수성이 예민해요. 혼자만의 세계에서 이야기를 만들고, 다른 사람의 감정에 공감해요.",
        keyTraits: ["상상력이 풍부해요", "감수성이 예민해요", "친절해요", "창의적이에요"],
        scenarios: [
          { situation: "혼자 놀 때", behavior: "상상 속 친구와 이야기를 나눠요" },
          { situation: "친구가 울면", behavior: "같이 슬퍼하며 위로해줘요" },
          { situation: "그림을 그릴 때", behavior: "자신만의 상상의 세계를 표현해요" }
        ]
      },
      en: {
        overview: "Has rich imagination and sensitive emotions. Creates stories in their own world and empathizes with others' feelings.",
        keyTraits: ["Rich imagination", "Sensitive", "Kind", "Creative"],
        scenarios: [
          { situation: "When playing alone", behavior: "Talks with imaginary friends" },
          { situation: "When a friend cries", behavior: "Feels sad together and comforts them" },
          { situation: "When drawing", behavior: "Expresses their own imaginary world" }
        ]
      },
      ja: {
        overview: "想像力が豊かで感受性が繊細です。自分だけの世界で物語を作り、他人の感情に共感します。",
        keyTraits: ["想像力が豊か", "感受性が繊細", "優しい", "創造的"],
        scenarios: [
          { situation: "一人で遊ぶとき", behavior: "想像上の友達と話します" },
          { situation: "友達が泣いたら", behavior: "一緒に悲しんで慰めます" },
          { situation: "絵を描くとき", behavior: "自分だけの想像の世界を表現します" }
        ]
      },
      zh: {
        overview: "想象力丰富，感情细腻。在自己的世界里创造故事，与他人的感受产生共鸣。",
        keyTraits: ["想象力丰富", "敏感", "善良", "有创造力"],
        scenarios: [
          { situation: "独自玩耍时", behavior: "与想象中的朋友交谈" },
          { situation: "朋友哭泣时", behavior: "一起难过并安慰他们" },
          { situation: "画画时", behavior: "表达自己想象的世界" }
        ]
      }
    },
    middle: {
      ko: {
        overview: "자신의 가치관이 형성되기 시작하고, 진정성 있는 관계를 중요시해요. 예술적 표현을 통해 감정을 전달해요.",
        keyTraits: ["이상주의적이에요", "공감 능력이 뛰어나요", "창의적이에요", "내성적이에요"],
        scenarios: [
          { situation: "글쓰기 시간에", behavior: "깊은 감정이 담긴 글을 써요" },
          { situation: "친구 관계에서", behavior: "진심으로 대하는 소수의 친구를 사귀어요" },
          { situation: "불공정한 일을 보면", behavior: "마음이 아프고 바로잡고 싶어해요" }
        ]
      },
      en: {
        overview: "Values begin to form and authentic relationships become important. Expresses emotions through artistic expression.",
        keyTraits: ["Idealistic", "Highly empathetic", "Creative", "Introverted"],
        scenarios: [
          { situation: "During writing time", behavior: "Writes with deep emotions" },
          { situation: "In friendships", behavior: "Makes a few genuine friends" },
          { situation: "When seeing unfairness", behavior: "Feels hurt and wants to make it right" }
        ]
      },
      ja: {
        overview: "自分の価値観が形成され始め、本物の関係を大切にします。芸術的表現を通じて感情を伝えます。",
        keyTraits: ["理想主義的", "共感力が高い", "創造的", "内向的"],
        scenarios: [
          { situation: "作文の時間に", behavior: "深い感情を込めた文章を書きます" },
          { situation: "友人関係で", behavior: "心から向き合える少数の友達を作ります" },
          { situation: "不公平なことを見たら", behavior: "心が痛み、正したいと思います" }
        ]
      },
      zh: {
        overview: "开始形成自己的价值观，重视真诚的关系。通过艺术表达传达情感。",
        keyTraits: ["理想主义", "高度共情", "有创造力", "内向"],
        scenarios: [
          { situation: "写作时", behavior: "写下充满深情的文字" },
          { situation: "在友谊中", behavior: "结交少数真诚的朋友" },
          { situation: "看到不公平时", behavior: "感到难过并想纠正" }
        ]
      }
    },
    high: {
      ko: {
        overview: "자신의 가치와 신념에 따라 살려고 노력해요. 깊은 감정적 연결과 의미 있는 관계를 추구해요.",
        keyTraits: ["이상주의적이에요", "공감력이 뛰어나요", "창의적이에요", "성찰적이에요"],
        scenarios: [
          { situation: "진로를 생각할 때", behavior: "돈보다 의미 있는 일을 하고 싶어해요" },
          { situation: "친한 친구와 대화할 때", behavior: "깊은 이야기를 나누며 서로를 이해해요" },
          { situation: "예술 작품을 볼 때", behavior: "작품에 담긴 감정과 메시지를 느껴요" }
        ]
      },
      en: {
        overview: "Tries to live according to their values and beliefs. Seeks deep emotional connections and meaningful relationships.",
        keyTraits: ["Idealistic", "Highly empathetic", "Creative", "Reflective"],
        scenarios: [
          { situation: "When thinking about careers", behavior: "Wants to do meaningful work over money" },
          { situation: "When talking with close friends", behavior: "Shares deep conversations and understands each other" },
          { situation: "When viewing art", behavior: "Feels the emotions and messages in the work" }
        ]
      },
      ja: {
        overview: "自分の価値観と信念に従って生きようとします。深い感情的なつながりと意味のある関係を求めます。",
        keyTraits: ["理想主義的", "共感力が高い", "創造的", "内省的"],
        scenarios: [
          { situation: "進路を考えるとき", behavior: "お金より意味のある仕事をしたいと思います" },
          { situation: "親しい友人と話すとき", behavior: "深い話をして互いを理解します" },
          { situation: "芸術作品を見るとき", behavior: "作品に込められた感情とメッセージを感じます" }
        ]
      },
      zh: {
        overview: "努力按照自己的价值观和信念生活。寻求深厚的情感联系和有意义的关系。",
        keyTraits: ["理想主义", "高度共情", "有创造力", "善于反思"],
        scenarios: [
          { situation: "考虑职业时", behavior: "想做有意义的工作而非追求金钱" },
          { situation: "与亲密朋友交谈时", behavior: "进行深入对话并相互理解" },
          { situation: "欣赏艺术作品时", behavior: "感受作品中的情感和信息" }
        ]
      }
    },
    adult: {
      ko: {
        overview: "진정성 있는 삶과 의미 있는 일을 추구해요. 창의적 표현과 타인을 돕는 것에서 만족감을 느껴요.",
        keyTraits: ["이상주의적이에요", "공감력이 뛰어나요", "창의적이에요", "헌신적이에요"],
        scenarios: [
          { situation: "일을 선택할 때", behavior: "자신의 가치관과 맞는 일을 찾아요" },
          { situation: "사람들과 교류할 때", behavior: "진심 어린 대화로 깊은 유대감을 형성해요" },
          { situation: "창작 활동을 할 때", behavior: "내면의 감정을 예술로 표현해요" }
        ]
      },
      en: {
        overview: "Pursues an authentic life and meaningful work. Finds satisfaction in creative expression and helping others.",
        keyTraits: ["Idealistic", "Highly empathetic", "Creative", "Dedicated"],
        scenarios: [
          { situation: "When choosing work", behavior: "Looks for work that aligns with their values" },
          { situation: "When interacting with people", behavior: "Forms deep bonds through heartfelt conversations" },
          { situation: "When doing creative activities", behavior: "Expresses inner emotions through art" }
        ]
      },
      ja: {
        overview: "本物の人生と意味のある仕事を追求します。創造的な表現と他者を助けることに満足感を感じます。",
        keyTraits: ["理想主義的", "共感力が高い", "創造的", "献身的"],
        scenarios: [
          { situation: "仕事を選ぶとき", behavior: "自分の価値観に合う仕事を探します" },
          { situation: "人と交流するとき", behavior: "心からの会話で深い絆を築きます" },
          { situation: "創作活動をするとき", behavior: "内面の感情を芸術で表現します" }
        ]
      },
      zh: {
        overview: "追求真实的生活和有意义的工作。在创造性表达和帮助他人中找到满足感。",
        keyTraits: ["理想主义", "高度共情", "有创造力", "有奉献精神"],
        scenarios: [
          { situation: "选择工作时", behavior: "寻找与自己价值观一致的工作" },
          { situation: "与人交流时", behavior: "通过真诚对话建立深厚联系" },
          { situation: "进行创作活动时", behavior: "用艺术表达内心情感" }
        ]
      }
    }
  }
};

const funFactsLocalized: Record<string, Record<Language, LocalizedFunFacts>> = {
  INTP: {
    ko: {
      hiddenTalent: "모든 것에 '왜?'라고 질문하며, 아무도 생각하지 못한 해결책을 찾아내요",
      funFact: "INTP는 아인슈타인처럼 생각하는 타입! 관심 있는 주제가 생기면 몇 시간이고 파고들어요",
      superpower: "논리의 마법사! 복잡한 문제를 단순하게 풀어내는 천재적인 능력이 있어요",
      famousQuote: "세상의 모든 것은 탐구할 가치가 있어요",
      bestMatch: "따뜻한 ENFJ와 함께하면 세상과 더 잘 연결될 수 있어요",
      secretWeakness: "생각에 빠져 현실을 놓칠 때가 있지만, 따뜻하게 현실로 불러주면 좋아해요"
    },
    en: {
      hiddenTalent: "Questions 'why?' about everything and finds solutions no one else thought of",
      funFact: "INTPs think like Einstein! When they find an interesting topic, they dive deep for hours",
      superpower: "Logic wizard! Has a genius ability to simplify complex problems",
      famousQuote: "Everything in the world is worth exploring",
      bestMatch: "Can connect better with the world when paired with a warm ENFJ",
      secretWeakness: "Sometimes gets lost in thoughts and misses reality, but appreciates being gently brought back"
    },
    ja: {
      hiddenTalent: "すべてに「なぜ？」と質問し、誰も思いつかなかった解決策を見つけます",
      funFact: "INTPはアインシュタインのように考えるタイプ！興味のあるテーマが見つかると何時間でも没頭します",
      superpower: "論理の魔法使い！複雑な問題をシンプルに解く天才的な能力があります",
      famousQuote: "世界のすべては探求する価値があります",
      bestMatch: "温かいENFJと一緒にいると、世界とよりよくつながれます",
      secretWeakness: "考えに没頭して現実を見失うことがありますが、優しく現実に戻してもらうと嬉しいです"
    },
    zh: {
      hiddenTalent: "对所有事物都问'为什么？'，找到别人想不到的解决方案",
      funFact: "INTP像爱因斯坦一样思考！当发现有趣的话题时，会深入研究好几个小时",
      superpower: "逻辑魔法师！有把复杂问题简化的天才能力",
      famousQuote: "世界上的一切都值得探索",
      bestMatch: "和温暖的ENFJ在一起可以更好地与世界连接",
      secretWeakness: "有时会陷入思考而错过现实，但喜欢被温柔地拉回来"
    }
  },
  INFP: {
    ko: {
      hiddenTalent: "사람들의 마음을 읽고, 아무도 모르는 감정까지 이해하는 특별한 능력이 있어요",
      funFact: "INFP는 상상력의 천재! 머릿속에 완전한 판타지 세계가 있어요",
      superpower: "공감의 히어로! 상처받은 마음을 치유하는 힘이 있어요",
      famousQuote: "세상을 더 아름답게 만들고 싶어요",
      bestMatch: "든든한 ENTJ와 함께하면 꿈을 현실로 만들 수 있어요",
      secretWeakness: "비판에 민감하지만, 그것은 진심으로 더 좋은 사람이 되고 싶은 마음 때문이에요"
    },
    en: {
      hiddenTalent: "Has a special ability to read people's hearts and understand hidden emotions",
      funFact: "INFPs are imagination geniuses! They have a complete fantasy world in their minds",
      superpower: "Empathy hero! Has the power to heal wounded hearts",
      famousQuote: "I want to make the world more beautiful",
      bestMatch: "Can make dreams reality when paired with a dependable ENTJ",
      secretWeakness: "Sensitive to criticism, but that's because they sincerely want to be a better person"
    },
    ja: {
      hiddenTalent: "人の心を読み、誰も知らない感情まで理解する特別な能力があります",
      funFact: "INFPは想像力の天才！頭の中に完全なファンタジー世界があります",
      superpower: "共感のヒーロー！傷ついた心を癒す力があります",
      famousQuote: "世界をもっと美しくしたいです",
      bestMatch: "頼りになるENTJと一緒にいると、夢を現実にできます",
      secretWeakness: "批判に敏感ですが、それは本心からより良い人になりたいからです"
    },
    zh: {
      hiddenTalent: "有读懂人心的特殊能力，能理解别人不知道的情感",
      funFact: "INFP是想象力天才！脑海中有一个完整的幻想世界",
      superpower: "共情英雄！有治愈受伤心灵的力量",
      famousQuote: "我想让世界变得更美好",
      bestMatch: "和可靠的ENTJ在一起可以把梦想变为现实",
      secretWeakness: "对批评敏感，但那是因为真心想成为更好的人"
    }
  }
};

export function getLocalizedAgeNarrative(
  mbtiType: string, 
  ageGroup: AgeGroup, 
  language: Language
): LocalizedAgeNarrative | null {
  const normalizedType = mbtiType.toUpperCase();
  return ageNarrativesLocalized[normalizedType]?.[ageGroup]?.[language] || null;
}

export function getLocalizedFunFacts(
  mbtiType: string, 
  language: Language
): LocalizedFunFacts | null {
  const normalizedType = mbtiType.toUpperCase();
  return funFactsLocalized[normalizedType]?.[language] || null;
}

const hybridNamesLocalized: Record<string, Record<Language, string>> = {
  '개냥이': { ko: '개냥이', en: 'Puppy-Cat', ja: 'イヌネコ', zh: '狗猫咪' },
  '냥멍이': { ko: '냥멍이', en: 'Cat-Pup', ja: 'ネコイヌ', zh: '猫狗狗' },
  '사여우': { ko: '사여우', en: 'Lion-Fox', ja: 'ライオンギツネ', zh: '狮狐' },
  '여자왕': { ko: '여자왕', en: 'Fox-King', ja: 'キツネライオン', zh: '狐王' },
  '올너구리': { ko: '올너구리', en: 'Owl-Raccoon', ja: 'フクロウタヌキ', zh: '猫头鹰浣熊' },
  '너빼미': { ko: '너빼미', en: 'Raccoon-Owl', ja: 'タヌキフクロウ', zh: '浣熊猫头鹰' },
  '늑멍이': { ko: '늑멍이', en: 'Wolf-Pup', ja: 'オオカミイヌ', zh: '狼狗' },
  '멍늑이': { ko: '멍늑이', en: 'Pup-Wolf', ja: 'イヌオオカミ', zh: '狗狼' },
  '토냥이': { ko: '토냥이', en: 'Bunny-Cat', ja: 'ウサギネコ', zh: '兔猫' },
  '냥토끼': { ko: '냥토끼', en: 'Cat-Bunny', ja: 'ネコウサギ', zh: '猫兔' },
  '독사왕': { ko: '독사왕', en: 'Eagle-Lion', ja: 'ワシライオン', zh: '鹰狮王' },
  '사독이': { ko: '사독이', en: 'Lion-Eagle', ja: 'ライオンワシ', zh: '狮鹰' },
  '돌수달': { ko: '돌수달', en: 'Dolphin-Otter', ja: 'イルカカワウソ', zh: '海豚水獭' },
  '수돌이': { ko: '수돌이', en: 'Otter-Dolphin', ja: 'カワウソイルカ', zh: '水獭海豚' },
  '표치타': { ko: '표치타', en: 'Leopard-Cheetah', ja: 'ヒョウチーター', zh: '豹猎豹' },
  '치표범': { ko: '치표범', en: 'Cheetah-Leopard', ja: 'チーターヒョウ', zh: '猎豹豹' },
  '거토끼': { ko: '거토끼', en: 'Turtle-Bunny', ja: 'カメウサギ', zh: '龟兔' },
  '토거북': { ko: '토거북', en: 'Bunny-Turtle', ja: 'ウサギカメ', zh: '兔龟' },
  '유수달': { ko: '유수달', en: 'Unicorn-Otter', ja: 'ユニコーンカワウソ', zh: '独角兽水獭' },
  '수유니': { ko: '수유니', en: 'Otter-Unicorn', ja: 'カワウソユニコーン', zh: '水獭独角兽' },
  '앵수달': { ko: '앵수달', en: 'Parrot-Otter', ja: 'オウムカワウソ', zh: '鹦鹉水獭' },
  '수앵이': { ko: '수앵이', en: 'Otter-Parrot', ja: 'カワウソオウム', zh: '水獭鹦鹉' },
  '늑빼미': { ko: '늑빼미', en: 'Wolf-Owl', ja: 'オオカミフクロウ', zh: '狼猫头鹰' },
  '올늑이': { ko: '올늑이', en: 'Owl-Wolf', ja: 'フクロウオオカミ', zh: '猫头鹰狼' },
  '여냥이': { ko: '여냥이', en: 'Fox-Cat', ja: 'キツネネコ', zh: '狐猫' },
  '냥우이': { ko: '냥우이', en: 'Cat-Fox', ja: 'ネコギツネ', zh: '猫狐' },
  '강토끼': { ko: '강토끼', en: 'Puppy-Bunny', ja: 'イヌウサギ', zh: '狗兔' },
  '토멍이': { ko: '토멍이', en: 'Bunny-Pup', ja: 'ウサギイヌ', zh: '兔狗' },
  '사늑이': { ko: '사늑이', en: 'Lion-Wolf', ja: 'ライオンオオカミ', zh: '狮狼' },
  '늑사왕': { ko: '늑사왕', en: 'Wolf-King', ja: 'オオカミライオン', zh: '狼狮王' },
  '독빼미': { ko: '독빼미', en: 'Eagle-Owl', ja: 'ワシフクロウ', zh: '鹰猫头鹰' },
  '올독이': { ko: '올독이', en: 'Owl-Eagle', ja: 'フクロウワシ', zh: '猫头鹰鹰' },
  '치멍이': { ko: '치멍이', en: 'Cheetah-Pup', ja: 'チーターイヌ', zh: '猎豹狗' },
  '멍치타': { ko: '멍치타', en: 'Pup-Cheetah', ja: 'イヌチーター', zh: '狗猎豹' },
  '돌멍이': { ko: '돌멍이', en: 'Dolphin-Pup', ja: 'イルカイヌ', zh: '海豚狗' },
  '멍고래': { ko: '멍고래', en: 'Pup-Dolphin', ja: 'イヌイルカ', zh: '狗海豚' },
  '앵멍이': { ko: '앵멍이', en: 'Parrot-Pup', ja: 'オウムイヌ', zh: '鹦鹉狗' },
  '멍무새': { ko: '멍무새', en: 'Pup-Parrot', ja: 'イヌオウム', zh: '狗鹦鹉' },
  '멍독이': { ko: '멍독이', en: 'Pup-Eagle', ja: 'イヌワシ', zh: '狗鹰' },
  '독멍이': { ko: '독멍이', en: 'Eagle-Pup', ja: 'ワシイヌ', zh: '鹰狗' },
  '표냥이': { ko: '표냥이', en: 'Leopard-Cat', ja: 'ヒョウネコ', zh: '豹猫' },
  '냥표범': { ko: '냥표범', en: 'Cat-Leopard', ja: 'ネコヒョウ', zh: '猫豹' },
  '거빼미': { ko: '거빼미', en: 'Turtle-Owl', ja: 'カメフクロウ', zh: '龟猫头鹰' },
  '올거북': { ko: '올거북', en: 'Owl-Turtle', ja: 'フクロウカメ', zh: '猫头鹰龟' },
  '사올이': { ko: '사올이', en: 'Lion-Owl', ja: 'ライオンフクロウ', zh: '狮猫头鹰' },
  '올사자': { ko: '올사자', en: 'Owl-Lion', ja: 'フクロウライオン', zh: '猫头鹰狮' },
  '수멍이': { ko: '수멍이', en: 'Otter-Pup', ja: 'カワウソイヌ', zh: '水獭狗' },
  '멍수달': { ko: '멍수달', en: 'Pup-Otter', ja: 'イヌカワウソ', zh: '狗水獭' },
  '너여우': { ko: '너여우', en: 'Raccoon-Fox', ja: 'タヌキギツネ', zh: '浣熊狐' },
  '여너구리': { ko: '여너구리', en: 'Fox-Raccoon', ja: 'キツネタヌキ', zh: '狐浣熊' },
  '거늑이': { ko: '거늑이', en: 'Turtle-Wolf', ja: 'カメオオカミ', zh: '龟狼' },
  '늑거북': { ko: '늑거북', en: 'Wolf-Turtle', ja: 'オオカミカメ', zh: '狼龟' },
  '올빼미': { ko: '올빼미', en: 'Owl', ja: 'フクロウ', zh: '猫头鹰' },
  '너구리': { ko: '너구리', en: 'Raccoon', ja: 'タヌキ', zh: '浣熊' },
  '사자': { ko: '사자', en: 'Lion', ja: 'ライオン', zh: '狮子' },
  '여우': { ko: '여우', en: 'Fox', ja: 'キツネ', zh: '狐狸' },
  '늑대': { ko: '늑대', en: 'Wolf', ja: 'オオカミ', zh: '狼' },
  '유니콘': { ko: '유니콘', en: 'Unicorn', ja: 'ユニコーン', zh: '独角兽' },
  '돌고래': { ko: '돌고래', en: 'Dolphin', ja: 'イルカ', zh: '海豚' },
  '수달': { ko: '수달', en: 'Otter', ja: 'カワウソ', zh: '水獭' },
  '거북이': { ko: '거북이', en: 'Turtle', ja: 'カメ', zh: '乌龟' },
  '토끼': { ko: '토끼', en: 'Rabbit', ja: 'ウサギ', zh: '兔子' },
  '독수리': { ko: '독수리', en: 'Eagle', ja: 'ワシ', zh: '老鹰' },
  '강아지': { ko: '강아지', en: 'Puppy', ja: '子犬', zh: '小狗' },
  '표범': { ko: '표범', en: 'Leopard', ja: 'ヒョウ', zh: '豹' },
  '고양이': { ko: '고양이', en: 'Cat', ja: 'ネコ', zh: '猫' },
  '치타': { ko: '치타', en: 'Cheetah', ja: 'チーター', zh: '猎豹' },
  '앵무새': { ko: '앵무새', en: 'Parrot', ja: 'オウム', zh: '鹦鹉' }
};

export function getLocalizedHybridName(koreanName: string, language: Language): string {
  return hybridNamesLocalized[koreanName]?.[language] || koreanName;
}

export interface LocalizedBlendDescription {
  pureTemplate: string;
  pureWithSecondaryTemplate: string;
  slightTemplate: string;
  balancedTemplate: string;
}

const blendDescriptionTemplates: Record<Language, LocalizedBlendDescription> = {
  ko: {
    pureTemplate: '{animalDesc} {animal} 성향이에요. {typeDesc}',
    pureWithSecondaryTemplate: '{primaryDesc} {primaryAnimal} 성향이 주를 이루지만, {secondaryDesc} {secondaryAnimal}의 특성도 함께 가지고 있어요. 두 가지 성향이 조화를 이루며 상황에 따라 다양한 모습을 보여줘요.',
    slightTemplate: '{primaryAnimal}의 특성이 강하지만, {traits}도 함께 가지고 있어서 {secondaryAnimal}의 매력도 있어요.',
    balancedTemplate: '{primaryAnimal}와(과) {secondaryAnimal}이(가) 조화롭게 섞인 특별한 성격이에요. {traits}을(를) 모두 가지고 있어서 상황에 따라 다양하게 행동해요.'
  },
  en: {
    pureTemplate: 'Has a {animal} personality - {typeDesc}',
    pureWithSecondaryTemplate: 'Primarily has {primaryAnimal} traits, but also shares characteristics of {secondaryAnimal}. These two sides blend together, showing different aspects depending on the situation.',
    slightTemplate: 'Strong {primaryAnimal} characteristics, but also has {traits}, which adds some {secondaryAnimal} charm.',
    balancedTemplate: 'A special personality that harmoniously blends {primaryAnimal} and {secondaryAnimal}. Has both {traits}, behaving differently depending on the situation.'
  },
  ja: {
    pureTemplate: '{animal}の性格です - {typeDesc}',
    pureWithSecondaryTemplate: '主に{primaryAnimal}の特性がありますが、{secondaryAnimal}の特徴も持っています。二つの性向が調和し、状況によって様々な姿を見せます。',
    slightTemplate: '{primaryAnimal}の特性が強いですが、{traits}も持っていて、{secondaryAnimal}の魅力もあります。',
    balancedTemplate: '{primaryAnimal}と{secondaryAnimal}が調和した特別な性格です。{traits}を両方持っていて、状況によって多様に行動します。'
  },
  zh: {
    pureTemplate: '有{animal}的性格 - {typeDesc}',
    pureWithSecondaryTemplate: '主要具有{primaryAnimal}的特性，但也有{secondaryAnimal}的特点。这两种性格融合在一起，根据情况展现不同的一面。',
    slightTemplate: '{primaryAnimal}的特性很强，但也有{traits}，所以也有{secondaryAnimal}的魅力。',
    balancedTemplate: '{primaryAnimal}和{secondaryAnimal}和谐融合的特别性格。同时具有{traits}，根据情况表现不同。'
  }
};

const traitLabelsLocalized: Record<string, Record<Language, string>> = {
  E: { ko: '외향적인', en: 'extroverted', ja: '外向的な', zh: '外向的' },
  I: { ko: '내향적인', en: 'introverted', ja: '内向的な', zh: '内向的' },
  S: { ko: '현실적인', en: 'practical', ja: '現実的な', zh: '现实的' },
  N: { ko: '직관적인', en: 'intuitive', ja: '直感的な', zh: '直觉的' },
  T: { ko: '논리적인', en: 'logical', ja: '論理的な', zh: '逻辑的' },
  F: { ko: '감성적인', en: 'emotional', ja: '感情的な', zh: '感性的' },
  J: { ko: '계획적인', en: 'planned', ja: '計画的な', zh: '有计划的' },
  P: { ko: '자유로운', en: 'spontaneous', ja: '自由な', zh: '自由的' }
};

const animalDescriptionsLocalized: Record<string, Record<Language, string>> = {
  '올빼미': { 
    ko: '혼자서 깊이 생각하는 것을 좋아하고, 전략적으로 목표를 달성하는',
    en: 'likes to think deeply alone and strategically achieves goals',
    ja: '一人で深く考えることが好きで、戦略的に目標を達成する',
    zh: '喜欢独自深思，战略性地实现目标'
  },
  '너구리': {
    ko: '끝없는 호기심으로 새로운 것을 탐구하고 분석하는',
    en: 'explores and analyzes new things with endless curiosity',
    ja: '終わりなき好奇心で新しいことを探求し分析する',
    zh: '以无尽的好奇心探索和分析新事物'
  },
  '사자': {
    ko: '리더십이 강하고 목표를 향해 당당하게 나아가는',
    en: 'has strong leadership and confidently moves toward goals',
    ja: 'リーダーシップが強く、目標に向かって堂々と進む',
    zh: '领导力强，自信地朝着目标前进'
  },
  '여우': {
    ko: '재치있고 창의적이며, 새로운 아이디어로 가득한',
    en: 'witty and creative, full of new ideas',
    ja: '機知に富み創造的で、新しいアイデアに満ちた',
    zh: '机智且有创意，充满新点子'
  },
  '늑대': {
    ko: '신비롭고 깊은 통찰력을 가진 이상주의자',
    en: 'mysterious idealist with deep insight',
    ja: '神秘的で深い洞察力を持つ理想主義者',
    zh: '神秘且有深刻洞察力的理想主义者'
  },
  '유니콘': {
    ko: '상상력이 풍부하고 자신만의 세계를 가진 몽상가',
    en: 'imaginative dreamer with their own world',
    ja: '想像力豊かで自分だけの世界を持つ夢想家',
    zh: '想象力丰富，有自己世界的梦想家'
  },
  '돌고래': {
    ko: '따뜻하고 친절하며, 다른 사람을 돕는 것을 좋아하는',
    en: 'warm and kind, loves helping others',
    ja: '温かく親切で、他の人を助けることが好きな',
    zh: '温暖善良，喜欢帮助他人'
  },
  '수달': {
    ko: '활발하고 사교적이며, 놀기를 좋아하는 에너자이저',
    en: 'active, social energizer who loves to play',
    ja: '活発で社交的で、遊ぶのが好きなエナジャイザー',
    zh: '活跃、社交、爱玩的活力者'
  },
  '거북이': {
    ko: '꾸준하고 신뢰할 수 있으며, 맡은 일을 끝까지 해내는',
    en: 'steady and reliable, completes tasks to the end',
    ja: '着実で信頼でき、任された仕事を最後までやり遂げる',
    zh: '稳重可靠，把任务完成到底'
  },
  '토끼': {
    ko: '부드럽고 다정하며, 주변 사람들을 세심하게 챙기는',
    en: 'gentle and caring, attentively looks after those around',
    ja: '優しく愛情深く、周りの人を細やかに気遣う',
    zh: '温柔体贴，细心照顾周围的人'
  },
  '독수리': {
    ko: '책임감이 강하고 체계적으로 일을 처리하는',
    en: 'highly responsible and handles tasks systematically',
    ja: '責任感が強く、体系的に仕事を処理する',
    zh: '责任感强，系统地处理事务'
  },
  '강아지': {
    ko: '사교적이고 친근하며, 모두와 어울리기를 좋아하는',
    en: 'social and friendly, loves getting along with everyone',
    ja: '社交的で親しみやすく、皆と仲良くするのが好きな',
    zh: '善于社交，友好，喜欢与大家相处'
  },
  '표범': {
    ko: '독립적이고 손재주가 뛰어나며, 문제를 바로 해결하는',
    en: 'independent, skilled, and solves problems right away',
    ja: '独立心があり器用で、問題をすぐ解決する',
    zh: '独立，手巧，立即解决问题'
  },
  '고양이': {
    ko: '예술적 감각이 뛰어나고 자유로운 영혼을 가진',
    en: 'artistic sense and free spirit',
    ja: '芸術的センスに優れ、自由な魂を持つ',
    zh: '艺术感强，拥有自由的灵魂'
  },
  '치타': {
    ko: '모험을 즐기고 행동력이 넘치는 활동가',
    en: 'adventurous activist full of action',
    ja: '冒険を楽しみ、行動力に溢れる活動家',
    zh: '喜欢冒险，充满行动力的活动家'
  },
  '앵무새': {
    ko: '밝고 에너지 넘치며, 주변을 즐겁게 만드는',
    en: 'bright and energetic, makes everyone happy',
    ja: '明るくエネルギーに溢れ、周りを楽しくさせる',
    zh: '开朗有活力，让周围的人快乐'
  }
};

export function getLocalizedAnimalDescription(koreanAnimal: string, language: Language): string {
  return animalDescriptionsLocalized[koreanAnimal]?.[language] || '';
}

export function getLocalizedTraitLabel(trait: string, language: Language): string {
  return traitLabelsLocalized[trait]?.[language] || trait;
}

export function getBlendDescriptionTemplates(language: Language): LocalizedBlendDescription {
  return blendDescriptionTemplates[language];
}

interface DimensionInsightItem {
  communication: string;
  behavior: string;
  thinking: string;
  parentGuidance?: string[];
  childUnderstanding?: string[];
}

interface LocalizedDimensionInsights {
  EI: {
    same: { E: DimensionInsightItem; I: DimensionInsightItem };
    different: { parentE_childI: DimensionInsightItem; parentI_childE: DimensionInsightItem };
  };
  SN: {
    same: { S: DimensionInsightItem; N: DimensionInsightItem };
    different: { parentS_childN: DimensionInsightItem; parentN_childS: DimensionInsightItem };
  };
  TF: {
    same: { T: DimensionInsightItem; F: DimensionInsightItem };
    different: { parentT_childF: DimensionInsightItem; parentF_childT: DimensionInsightItem };
  };
  JP: {
    same: { J: DimensionInsightItem; P: DimensionInsightItem };
    different: { parentJ_childP: DimensionInsightItem; parentP_childJ: DimensionInsightItem };
  };
}

const dimensionInsightsLocalized: Record<Language, LocalizedDimensionInsights> = {
  ko: {
    EI: {
      same: {
        E: {
          communication: '둘 다 활발하게 대화하고 생각을 바로 표현해요.',
          behavior: '함께 활동적으로 시간을 보내는 것을 좋아해요.',
          thinking: '외부 활동과 사람들과의 교류를 통해 에너지를 얻어요.'
        },
        I: {
          communication: '둘 다 조용하고 깊은 대화를 선호해요.',
          behavior: '함께 조용히 시간을 보내는 것을 편안하게 느껴요.',
          thinking: '혼자만의 시간과 내면의 생각을 중요시해요.'
        }
      },
      different: {
        parentE_childI: {
          communication: '엄마는 말로 표현하고 싶지만, 아이는 속으로 생각을 정리해요.',
          behavior: '엄마는 밖에서 함께하고 싶지만, 아이는 집에서 쉬고 싶어해요.',
          thinking: '엄마는 대화로 에너지를 얻지만, 아이는 혼자 있을 때 충전돼요.',
          parentGuidance: [
            '아이가 혼자 있는 시간을 존중해주세요',
            '대화를 강요하지 말고 아이의 페이스에 맞춰주세요',
            '조용한 환경에서 1:1로 대화하면 아이가 더 편하게 말해요',
            '아이가 생각을 정리할 시간을 주세요'
          ],
          childUnderstanding: [
            '엄마가 자꾸 말을 거는 건 너를 사랑해서야',
            '엄마는 대화하면서 기분이 좋아져',
            '엄마가 밖에 나가자고 하는 건 함께 시간을 보내고 싶어서야',
            '네가 조용히 있고 싶을 땐 엄마한테 말해도 괜찮아'
          ]
        },
        parentI_childE: {
          communication: '엄마는 조용히 듣고 싶지만, 아이는 신나게 이야기해요.',
          behavior: '엄마는 집에서 쉬고 싶지만, 아이는 밖에서 놀고 싶어해요.',
          thinking: '엄마는 혼자 생각할 때 편하지만, 아이는 사람들과 있을 때 행복해요.',
          parentGuidance: [
            '아이가 이야기할 때 적극적으로 들어주세요',
            '아이가 친구들과 어울릴 기회를 많이 만들어주세요',
            '아이의 에너지 넘치는 모습을 긍정적으로 받아들이세요',
            '가끔은 엄마도 아이와 함께 활동적으로 놀아주세요'
          ],
          childUnderstanding: [
            '엄마가 조용히 있고 싶을 때가 있어',
            '엄마가 집에 있고 싶어하는 건 피곤해서가 아니라 그게 편해서야',
            '엄마도 너랑 놀고 싶지만 방식이 다를 뿐이야',
            '엄마한테 조용히 옆에 있어주는 것도 사랑 표현이야'
          ]
        }
      }
    },
    SN: {
      same: {
        S: {
          communication: '둘 다 구체적이고 실제적인 이야기를 좋아해요.',
          behavior: '현실적이고 실용적인 방식으로 문제를 해결해요.',
          thinking: '지금 눈앞에 있는 것에 집중해요.'
        },
        N: {
          communication: '둘 다 상상력 풍부한 이야기를 좋아해요.',
          behavior: '새로운 가능성과 아이디어를 탐구하는 것을 좋아해요.',
          thinking: '미래와 가능성에 대해 생각하는 것을 즐겨요.'
        }
      },
      different: {
        parentS_childN: {
          communication: '엄마는 실제 일어난 일을 말하지만, 아이는 상상의 이야기를 해요.',
          behavior: '엄마는 현실적인 방법을 원하지만, 아이는 창의적인 방법을 시도해요.',
          thinking: '엄마는 지금 당장 해야 할 일에 집중하지만, 아이는 미래를 꿈꿔요.',
          parentGuidance: [
            '아이의 상상력과 창의성을 인정해주세요',
            '"그건 현실적이지 않아"라는 말 대신 "재미있는 생각이네"라고 해주세요',
            '아이가 꿈꾸는 것을 현실로 연결하는 방법을 함께 찾아보세요',
            '때로는 아이의 상상 세계에 함께 들어가보세요'
          ],
          childUnderstanding: [
            '엄마가 현실적인 이야기를 하는 건 너를 걱정해서야',
            '엄마는 지금 당장 필요한 것들을 잘 챙겨',
            '네 꿈을 이루려면 엄마처럼 현실적인 계획도 필요해',
            '엄마도 상상하는 건 어려울 수 있어'
          ]
        },
        parentN_childS: {
          communication: '엄마는 미래 이야기를 하지만, 아이는 지금 있는 것에 관심이 있어요.',
          behavior: '엄마는 새로운 것을 시도하고 싶지만, 아이는 익숙한 것을 좋아해요.',
          thinking: '엄마는 가능성을 보지만, 아이는 눈앞의 현실을 봐요.',
          parentGuidance: [
            '아이에게 구체적이고 단계별로 설명해주세요',
            '추상적인 개념보다 실제 예시를 들어주세요',
            '아이가 세부사항에 집중하는 것을 인정해주세요',
            '새로운 것을 시도할 때 충분한 시간을 주세요'
          ],
          childUnderstanding: [
            '엄마가 미래 이야기를 많이 하는 건 너의 가능성을 믿어서야',
            '엄마는 새로운 것을 상상하는 게 재미있어',
            '네가 꼼꼼하게 하나씩 하는 것도 정말 중요해',
            '엄마의 큰 그림과 네 꼼꼼함이 만나면 최고야'
          ]
        }
      }
    },
    TF: {
      same: {
        T: {
          communication: '둘 다 논리적이고 객관적으로 대화해요.',
          behavior: '문제가 생기면 감정보다 해결책을 먼저 찾아요.',
          thinking: '결정할 때 논리와 이유를 중요하게 생각해요.'
        },
        F: {
          communication: '둘 다 감정을 나누고 공감하는 것을 좋아해요.',
          behavior: '서로의 기분을 살피며 배려해요.',
          thinking: '결정할 때 관계와 감정을 중요하게 생각해요.'
        }
      },
      different: {
        parentT_childF: {
          communication: '엄마는 이성적으로 설명하지만, 아이는 감정을 먼저 느껴요.',
          behavior: '엄마는 해결책을 제시하지만, 아이는 위로를 원해요.',
          thinking: '엄마는 "왜"를 따지지만, 아이는 "기분이 어때"가 중요해요.',
          parentGuidance: [
            '아이가 속상할 때 해결책보다 먼저 공감해주세요',
            '"왜 그랬어?"보다 "많이 힘들었구나"라고 말해주세요',
            '아이의 감정을 인정하고 표현하게 해주세요',
            '비판보다 격려의 말을 먼저 해주세요'
          ],
          childUnderstanding: [
            '엄마가 이유를 묻는 건 너를 이해하고 싶어서야',
            '엄마가 해결책을 말하는 건 도와주고 싶어서야',
            '엄마도 너를 사랑하지만 표현 방식이 다를 뿐이야',
            '엄마한테 네 감정을 말로 설명해주면 더 잘 이해해'
          ]
        },
        parentF_childT: {
          communication: '엄마는 감정을 나누고 싶지만, 아이는 사실만 말해요.',
          behavior: '엄마는 기분을 살피지만, 아이는 논리적으로 행동해요.',
          thinking: '엄마는 관계가 중요하지만, 아이는 결과가 중요해요.',
          parentGuidance: [
            '아이의 논리적인 성향을 인정해주세요',
            '감정을 강요하지 말고 아이의 방식을 존중해주세요',
            '아이가 감정을 표현하지 않아도 괜찮다고 말해주세요',
            '논리적인 대화도 사랑의 표현임을 알아주세요'
          ],
          childUnderstanding: [
            '엄마가 기분을 자주 묻는 건 너를 걱정해서야',
            '엄마는 감정을 나누면서 가까워진다고 느껴',
            '가끔 엄마한테 "좋아" "괜찮아"라고 말해주면 기뻐해',
            '엄마의 걱정은 사랑의 다른 표현이야'
          ]
        }
      }
    },
    JP: {
      same: {
        J: {
          communication: '둘 다 계획적으로 일정을 정하고 지켜요.',
          behavior: '체계적이고 규칙적인 생활을 좋아해요.',
          thinking: '결정을 빨리 내리고 계획대로 실행하는 것을 선호해요.'
        },
        P: {
          communication: '둘 다 유연하게 상황에 맞춰요.',
          behavior: '자유롭고 즉흥적인 것을 좋아해요.',
          thinking: '여러 가능성을 열어두고 천천히 결정해요.'
        }
      },
      different: {
        parentJ_childP: {
          communication: '엄마는 계획을 세우자고 하지만, 아이는 그때그때 하고 싶어해요.',
          behavior: '엄마는 규칙을 따르지만, 아이는 자유롭게 하고 싶어해요.',
          thinking: '엄마는 미리 정해야 편하지만, 아이는 열어두는 게 좋아요.',
          parentGuidance: [
            '아이에게 너무 빡빡한 일정을 강요하지 마세요',
            '큰 틀만 정하고 세부사항은 유연하게 해주세요',
            '아이의 즉흥적인 행동도 장점이 될 수 있어요',
            '마감 시간만 정하고 방법은 아이에게 맡겨보세요'
          ],
          childUnderstanding: [
            '엄마가 계획을 세우는 건 일이 잘 되게 하려고 그래',
            '약속 시간을 지키는 건 서로를 존중하는 거야',
            '엄마는 예상치 못한 일이 생기면 불안해할 수 있어',
            '중요한 일은 미리 말해주면 엄마가 편해해'
          ]
        },
        parentP_childJ: {
          communication: '엄마는 유연하게 가자고 하지만, 아이는 계획이 필요해요.',
          behavior: '엄마는 즉흥적이지만, 아이는 정해진 대로 하고 싶어해요.',
          thinking: '엄마는 열어두고 싶지만, 아이는 빨리 정하고 싶어해요.',
          parentGuidance: [
            '아이가 계획을 세울 수 있도록 미리 정보를 주세요',
            '갑자기 일정을 바꾸면 아이가 불안해할 수 있어요',
            '아이의 규칙적인 생활 리듬을 존중해주세요',
            '변경이 있을 때는 미리 알려주세요'
          ],
          childUnderstanding: [
            '엄마가 갑자기 바꾸는 건 새로운 기회를 보기 때문이야',
            '엄마는 유연하게 하는 게 편해',
            '계획이 바뀌어도 괜찮을 때가 있어',
            '엄마한테 네가 계획이 필요하다고 말해도 돼'
          ]
        }
      }
    }
  },
  en: {
    EI: {
      same: {
        E: {
          communication: 'Both actively talk and express thoughts right away.',
          behavior: 'Both enjoy spending time doing activities together.',
          thinking: 'Both gain energy from external activities and interacting with people.'
        },
        I: {
          communication: 'Both prefer quiet, deep conversations.',
          behavior: 'Both feel comfortable spending quiet time together.',
          thinking: 'Both value alone time and inner thoughts.'
        }
      },
      different: {
        parentE_childI: {
          communication: 'Mom wants to express verbally, but child organizes thoughts internally.',
          behavior: 'Mom wants to go out together, but child prefers staying home.',
          thinking: 'Mom gains energy from conversations, but child recharges when alone.',
          parentGuidance: [
            'Respect your child\'s alone time',
            'Don\'t force conversations, match your child\'s pace',
            'Your child opens up more in quiet 1:1 settings',
            'Give your child time to organize their thoughts'
          ],
          childUnderstanding: [
            'Mom talks to you a lot because she loves you',
            'Mom feels happy when talking with you',
            'Mom wants to go out because she wants to spend time with you',
            'It\'s okay to tell Mom when you need quiet time'
          ]
        },
        parentI_childE: {
          communication: 'Mom wants to listen quietly, but child talks excitedly.',
          behavior: 'Mom wants to rest at home, but child wants to play outside.',
          thinking: 'Mom feels comfortable thinking alone, but child is happy around people.',
          parentGuidance: [
            'Listen actively when your child talks',
            'Create many opportunities for your child to socialize',
            'Accept your child\'s energetic nature positively',
            'Sometimes join in active play with your child'
          ],
          childUnderstanding: [
            'Mom sometimes needs quiet time',
            'Mom prefers staying home because it\'s comfortable, not because she\'s tired',
            'Mom wants to play with you too, just in different ways',
            'Sitting quietly beside Mom is also a way to show love'
          ]
        }
      }
    },
    SN: {
      same: {
        S: {
          communication: 'Both prefer concrete and practical conversations.',
          behavior: 'Both solve problems in realistic and practical ways.',
          thinking: 'Both focus on what\'s right in front of them.'
        },
        N: {
          communication: 'Both enjoy imaginative stories.',
          behavior: 'Both like exploring new possibilities and ideas.',
          thinking: 'Both enjoy thinking about the future and possibilities.'
        }
      },
      different: {
        parentS_childN: {
          communication: 'Mom talks about real events, but child tells imaginative stories.',
          behavior: 'Mom wants practical methods, but child tries creative approaches.',
          thinking: 'Mom focuses on immediate tasks, but child dreams about the future.',
          parentGuidance: [
            'Acknowledge your child\'s imagination and creativity',
            'Instead of "That\'s not realistic," say "What an interesting idea"',
            'Help connect your child\'s dreams to reality together',
            'Sometimes enter your child\'s imaginative world'
          ],
          childUnderstanding: [
            'Mom talks about realistic things because she cares about you',
            'Mom is good at taking care of immediate needs',
            'To achieve your dreams, you need realistic plans like Mom makes',
            'Imagining might be hard for Mom sometimes'
          ]
        },
        parentN_childS: {
          communication: 'Mom talks about the future, but child is interested in the present.',
          behavior: 'Mom wants to try new things, but child prefers familiar things.',
          thinking: 'Mom sees possibilities, but child sees immediate reality.',
          parentGuidance: [
            'Explain things concretely and step by step',
            'Use real examples rather than abstract concepts',
            'Acknowledge your child\'s attention to details',
            'Give enough time when trying new things'
          ],
          childUnderstanding: [
            'Mom talks about the future because she believes in your potential',
            'Mom finds imagining new things fun',
            'Your careful, step-by-step approach is really important too',
            'When Mom\'s big picture meets your attention to detail, it\'s the best'
          ]
        }
      }
    },
    TF: {
      same: {
        T: {
          communication: 'Both communicate logically and objectively.',
          behavior: 'When problems arise, both look for solutions before emotions.',
          thinking: 'Both value logic and reasons when making decisions.'
        },
        F: {
          communication: 'Both enjoy sharing emotions and empathizing.',
          behavior: 'Both check on each other\'s feelings and show care.',
          thinking: 'Both value relationships and emotions when making decisions.'
        }
      },
      different: {
        parentT_childF: {
          communication: 'Mom explains rationally, but child feels emotions first.',
          behavior: 'Mom offers solutions, but child wants comfort.',
          thinking: 'Mom asks "why," but for child "how do you feel" is important.',
          parentGuidance: [
            'When your child is upset, empathize before offering solutions',
            'Say "That must have been hard" instead of "Why did you do that?"',
            'Acknowledge your child\'s feelings and let them express them',
            'Give encouragement before criticism'
          ],
          childUnderstanding: [
            'Mom asks reasons because she wants to understand you',
            'Mom offers solutions because she wants to help',
            'Mom loves you too, just expresses it differently',
            'If you explain your feelings in words, Mom understands better'
          ]
        },
        parentF_childT: {
          communication: 'Mom wants to share feelings, but child states facts.',
          behavior: 'Mom checks on feelings, but child acts logically.',
          thinking: 'Relationships are important to Mom, but results matter to child.',
          parentGuidance: [
            'Acknowledge your child\'s logical nature',
            'Don\'t force emotions, respect your child\'s way',
            'Tell your child it\'s okay not to express emotions',
            'Understand that logical conversation is also a way of showing love'
          ],
          childUnderstanding: [
            'Mom asks about your feelings often because she cares',
            'Mom feels closer when sharing emotions',
            'Saying "I\'m fine" or "I like it" sometimes makes Mom happy',
            'Mom\'s concern is another way of showing love'
          ]
        }
      }
    },
    JP: {
      same: {
        J: {
          communication: 'Both plan schedules and follow them.',
          behavior: 'Both prefer systematic and regular lifestyles.',
          thinking: 'Both prefer making quick decisions and following plans.'
        },
        P: {
          communication: 'Both adapt flexibly to situations.',
          behavior: 'Both enjoy freedom and spontaneity.',
          thinking: 'Both keep options open and decide slowly.'
        }
      },
      different: {
        parentJ_childP: {
          communication: 'Mom wants to make plans, but child wants to go with the flow.',
          behavior: 'Mom follows rules, but child wants to be free.',
          thinking: 'Mom feels comfortable deciding ahead, but child prefers keeping options open.',
          parentGuidance: [
            'Don\'t force too strict schedules on your child',
            'Set the big picture and be flexible with details',
            'Your child\'s spontaneity can be a strength',
            'Set deadlines but let your child decide the method'
          ],
          childUnderstanding: [
            'Mom makes plans so things go well',
            'Keeping promises is showing respect for each other',
            'Mom might feel anxious when unexpected things happen',
            'Telling Mom important things ahead of time helps her feel comfortable'
          ]
        },
        parentP_childJ: {
          communication: 'Mom wants to be flexible, but child needs plans.',
          behavior: 'Mom is spontaneous, but child wants to follow set plans.',
          thinking: 'Mom wants to keep options open, but child wants to decide quickly.',
          parentGuidance: [
            'Give information in advance so your child can plan',
            'Your child might feel anxious with sudden schedule changes',
            'Respect your child\'s regular life rhythm',
            'Give advance notice when there are changes'
          ],
          childUnderstanding: [
            'Mom changes things suddenly because she sees new opportunities',
            'Mom feels comfortable being flexible',
            'Sometimes it\'s okay when plans change',
            'It\'s okay to tell Mom that you need plans'
          ]
        }
      }
    }
  },
  ja: {
    EI: {
      same: {
        E: {
          communication: '二人とも活発に会話し、考えをすぐに表現します。',
          behavior: '一緒に活動的に時間を過ごすのが好きです。',
          thinking: '外部活動や人との交流からエネルギーを得ます。'
        },
        I: {
          communication: '二人とも静かで深い会話を好みます。',
          behavior: '一緒に静かに時間を過ごすのが心地よいです。',
          thinking: '一人の時間と内面の思考を大切にします。'
        }
      },
      different: {
        parentE_childI: {
          communication: 'ママは言葉で表現したいですが、子どもは心の中で考えを整理します。',
          behavior: 'ママは外で一緒にいたいですが、子どもは家で休みたがります。',
          thinking: 'ママは会話でエネルギーを得ますが、子どもは一人でいる時に充電されます。',
          parentGuidance: [
            '子どもの一人の時間を尊重してあげてください',
            '会話を強制せず、子どものペースに合わせてください',
            '静かな環境で1対1で話すと子どもはもっと話しやすくなります',
            '子どもが考えを整理する時間を与えてください'
          ],
          childUnderstanding: [
            'ママがたくさん話しかけるのは、あなたを愛しているからだよ',
            'ママは話していると気分が良くなるの',
            'ママが外に行こうと言うのは、一緒に時間を過ごしたいからだよ',
            '静かにしたい時はママに言っても大丈夫だよ'
          ]
        },
        parentI_childE: {
          communication: 'ママは静かに聞きたいですが、子どもは楽しそうに話します。',
          behavior: 'ママは家で休みたいですが、子どもは外で遊びたがります。',
          thinking: 'ママは一人で考える時が楽ですが、子どもは人といる時が幸せです。',
          parentGuidance: [
            '子どもが話す時は積極的に聞いてあげてください',
            '子どもが友達と交流する機会をたくさん作ってあげてください',
            '子どものエネルギッシュな姿を前向きに受け入れてください',
            '時々ママも子どもと一緒に活動的に遊んであげてください'
          ],
          childUnderstanding: [
            'ママは静かにしたい時があるの',
            'ママが家にいたがるのは疲れているからじゃなくて、それが心地よいからだよ',
            'ママもあなたと遊びたいけど、方法が違うだけだよ',
            'ママのそばで静かにいることも愛情表現だよ'
          ]
        }
      }
    },
    SN: {
      same: {
        S: {
          communication: '二人とも具体的で実際的な話を好みます。',
          behavior: '現実的で実用的な方法で問題を解決します。',
          thinking: '今目の前にあることに集中します。'
        },
        N: {
          communication: '二人とも想像力豊かな話を好みます。',
          behavior: '新しい可能性やアイデアを探求することを好みます。',
          thinking: '未来と可能性について考えることを楽しみます。'
        }
      },
      different: {
        parentS_childN: {
          communication: 'ママは実際に起こったことを話しますが、子どもは想像の話をします。',
          behavior: 'ママは現実的な方法を望みますが、子どもは創造的な方法を試みます。',
          thinking: 'ママは今やるべきことに集中しますが、子どもは未来を夢見ます。',
          parentGuidance: [
            '子どもの想像力と創造性を認めてあげてください',
            '「それは現実的じゃない」の代わりに「面白い考えだね」と言ってあげてください',
            '子どもの夢を現実に繋げる方法を一緒に探してみてください',
            '時には子どもの想像の世界に一緒に入ってみてください'
          ],
          childUnderstanding: [
            'ママが現実的な話をするのは、あなたを心配しているからだよ',
            'ママは今必要なものをちゃんと用意するのが得意だよ',
            'あなたの夢を叶えるには、ママのような現実的な計画も必要だよ',
            'ママも想像するのは難しいこともあるよ'
          ]
        },
        parentN_childS: {
          communication: 'ママは未来の話をしますが、子どもは今あるものに興味があります。',
          behavior: 'ママは新しいことを試したいですが、子どもは慣れたものを好みます。',
          thinking: 'ママは可能性を見ますが、子どもは目の前の現実を見ます。',
          parentGuidance: [
            '子どもに具体的にステップバイステップで説明してあげてください',
            '抽象的な概念より実際の例を挙げてあげてください',
            '子どもが細部に集中することを認めてあげてください',
            '新しいことを試す時は十分な時間を与えてください'
          ],
          childUnderstanding: [
            'ママが未来の話をたくさんするのは、あなたの可能性を信じているからだよ',
            'ママは新しいことを想像するのが楽しいの',
            'あなたが丁寧に一つずつやることもとても大切だよ',
            'ママの大きな絵とあなたの細やかさが合わさると最高だよ'
          ]
        }
      }
    },
    TF: {
      same: {
        T: {
          communication: '二人とも論理的で客観的に会話します。',
          behavior: '問題が起きたら感情より解決策を先に探します。',
          thinking: '決定する時、論理と理由を重視します。'
        },
        F: {
          communication: '二人とも感情を分かち合い、共感することを好みます。',
          behavior: 'お互いの気持ちを気遣い、配慮します。',
          thinking: '決定する時、関係と感情を重視します。'
        }
      },
      different: {
        parentT_childF: {
          communication: 'ママは理性的に説明しますが、子どもは感情を先に感じます。',
          behavior: 'ママは解決策を提示しますが、子どもは慰めを望みます。',
          thinking: 'ママは「なぜ」を問いますが、子どもには「気持ちはどう」が大切です。',
          parentGuidance: [
            '子どもが辛い時は解決策より先に共感してあげてください',
            '「なんでそうしたの？」より「大変だったね」と言ってあげてください',
            '子どもの感情を認め、表現させてあげてください',
            '批判より励ましの言葉を先にかけてあげてください'
          ],
          childUnderstanding: [
            'ママが理由を聞くのは、あなたを理解したいからだよ',
            'ママが解決策を言うのは、助けたいからだよ',
            'ママもあなたを愛しているけど、表現の仕方が違うだけだよ',
            'ママに気持ちを言葉で説明するともっとわかってもらえるよ'
          ]
        },
        parentF_childT: {
          communication: 'ママは感情を分かち合いたいですが、子どもは事実だけを話します。',
          behavior: 'ママは気持ちを気遣いますが、子どもは論理的に行動します。',
          thinking: 'ママには関係が大事ですが、子どもには結果が大事です。',
          parentGuidance: [
            '子どもの論理的な性向を認めてあげてください',
            '感情を強制せず、子どもの方法を尊重してあげてください',
            '子どもが感情を表現しなくても大丈夫だと伝えてあげてください',
            '論理的な会話も愛情表現であることを理解してあげてください'
          ],
          childUnderstanding: [
            'ママが気持ちをよく聞くのは、あなたを心配しているからだよ',
            'ママは感情を分かち合うと近くなると感じるの',
            '時々ママに「好き」「大丈夫」と言ってあげると喜ぶよ',
            'ママの心配は愛情の別の表現だよ'
          ]
        }
      }
    },
    JP: {
      same: {
        J: {
          communication: '二人とも計画的にスケジュールを決めて守ります。',
          behavior: '体系的で規則的な生活を好みます。',
          thinking: '決定を早くし、計画通りに実行することを好みます。'
        },
        P: {
          communication: '二人とも柔軟に状況に合わせます。',
          behavior: '自由で即興的なことを好みます。',
          thinking: '様々な可能性を残してゆっくり決めます。'
        }
      },
      different: {
        parentJ_childP: {
          communication: 'ママは計画を立てようと言いますが、子どもはその場その場でやりたがります。',
          behavior: 'ママはルールに従いますが、子どもは自由にやりたがります。',
          thinking: 'ママは事前に決めると楽ですが、子どもは選択肢を開けておくのが好きです。',
          parentGuidance: [
            '子どもにあまり厳しいスケジュールを強制しないでください',
            '大枠だけ決めて詳細は柔軟にしてあげてください',
            '子どもの即興的な行動も長所になり得ます',
            '締め切りだけ決めて方法は子どもに任せてみてください'
          ],
          childUnderstanding: [
            'ママが計画を立てるのは物事がうまくいくようにするためだよ',
            '約束の時間を守ることはお互いを尊重することだよ',
            'ママは予想外のことがあると不安になることがあるよ',
            '大事なことは事前に言ってあげるとママは楽になるよ'
          ]
        },
        parentP_childJ: {
          communication: 'ママは柔軟にいこうと言いますが、子どもは計画が必要です。',
          behavior: 'ママは即興的ですが、子どもは決まった通りにやりたがります。',
          thinking: 'ママは選択肢を開けておきたいですが、子どもは早く決めたいです。',
          parentGuidance: [
            '子どもが計画を立てられるように事前に情報を与えてください',
            '急にスケジュールを変えると子どもが不安になることがあります',
            '子どもの規則的な生活リズムを尊重してあげてください',
            '変更がある時は事前に知らせてあげてください'
          ],
          childUnderstanding: [
            'ママが急に変えるのは新しいチャンスを見ているからだよ',
            'ママは柔軟にするのが楽なの',
            '計画が変わっても大丈夫な時もあるよ',
            'ママに計画が必要だと言っても大丈夫だよ'
          ]
        }
      }
    }
  },
  zh: {
    EI: {
      same: {
        E: {
          communication: '两个人都活跃地交谈，立即表达想法。',
          behavior: '喜欢一起活跃地度过时间。',
          thinking: '从外部活动和与人交流中获得能量。'
        },
        I: {
          communication: '两个人都喜欢安静深入的对话。',
          behavior: '一起安静地度过时间感到舒适。',
          thinking: '重视独处时间和内心思考。'
        }
      },
      different: {
        parentE_childI: {
          communication: '妈妈想用语言表达，但孩子在心里整理想法。',
          behavior: '妈妈想在外面一起玩，但孩子想在家休息。',
          thinking: '妈妈通过对话获得能量，但孩子独处时才能充电。',
          parentGuidance: [
            '尊重孩子独处的时间',
            '不要强迫对话，配合孩子的节奏',
            '在安静的环境中一对一交谈，孩子会更容易开口',
            '给孩子整理思绪的时间'
          ],
          childUnderstanding: [
            '妈妈经常和你说话是因为爱你',
            '妈妈聊天时会感到开心',
            '妈妈想出去是因为想和你一起度过时光',
            '想安静的时候可以告诉妈妈'
          ]
        },
        parentI_childE: {
          communication: '妈妈想安静地听，但孩子兴奋地说话。',
          behavior: '妈妈想在家休息，但孩子想在外面玩。',
          thinking: '妈妈独自思考时感到舒适，但孩子和人在一起时感到幸福。',
          parentGuidance: [
            '孩子说话时积极倾听',
            '为孩子创造很多与朋友交往的机会',
            '积极接受孩子充满活力的样子',
            '有时妈妈也要和孩子一起活跃地玩'
          ],
          childUnderstanding: [
            '妈妈有时需要安静',
            '妈妈想待在家不是因为累，而是因为那样舒服',
            '妈妈也想和你玩，只是方式不同',
            '安静地陪在妈妈身边也是表达爱的方式'
          ]
        }
      }
    },
    SN: {
      same: {
        S: {
          communication: '两个人都喜欢具体实际的话题。',
          behavior: '用现实实用的方式解决问题。',
          thinking: '专注于眼前的事物。'
        },
        N: {
          communication: '两个人都喜欢富有想象力的故事。',
          behavior: '喜欢探索新的可能性和想法。',
          thinking: '喜欢思考未来和可能性。'
        }
      },
      different: {
        parentS_childN: {
          communication: '妈妈说实际发生的事，但孩子讲想象的故事。',
          behavior: '妈妈想要现实的方法，但孩子尝试创意的方法。',
          thinking: '妈妈专注于当前任务，但孩子梦想未来。',
          parentGuidance: [
            '认可孩子的想象力和创造力',
            '不要说"那不现实"，而是说"有趣的想法"',
            '一起寻找将孩子的梦想与现实联系的方法',
            '有时候进入孩子的想象世界'
          ],
          childUnderstanding: [
            '妈妈说现实的话是因为关心你',
            '妈妈很擅长照顾当前需要的东西',
            '实现梦想需要像妈妈那样的现实计划',
            '有时候想象对妈妈来说也很难'
          ]
        },
        parentN_childS: {
          communication: '妈妈说未来的话题，但孩子对现在的事感兴趣。',
          behavior: '妈妈想尝试新事物，但孩子喜欢熟悉的东西。',
          thinking: '妈妈看到可能性，但孩子看到眼前的现实。',
          parentGuidance: [
            '给孩子具体地、一步步地解释',
            '用实际例子而不是抽象概念',
            '认可孩子对细节的关注',
            '尝试新事物时给足够的时间'
          ],
          childUnderstanding: [
            '妈妈多谈未来是因为相信你的潜力',
            '妈妈觉得想象新事物很有趣',
            '你仔细一步步做也很重要',
            '妈妈的大局观和你的细心结合起来最棒'
          ]
        }
      }
    },
    TF: {
      same: {
        T: {
          communication: '两个人都理性客观地交流。',
          behavior: '有问题时先找解决方案而不是情绪。',
          thinking: '做决定时重视逻辑和理由。'
        },
        F: {
          communication: '两个人都喜欢分享情感和共情。',
          behavior: '相互关心彼此的感受并体贴。',
          thinking: '做决定时重视关系和情感。'
        }
      },
      different: {
        parentT_childF: {
          communication: '妈妈理性解释，但孩子先感受情绪。',
          behavior: '妈妈提供解决方案，但孩子想要安慰。',
          thinking: '妈妈问"为什么"，但孩子觉得"感觉怎么样"更重要。',
          parentGuidance: [
            '孩子难过时先共情再提供解决方案',
            '说"一定很难"而不是"为什么那样做？"',
            '认可孩子的情感并让他们表达',
            '先给鼓励再给批评'
          ],
          childUnderstanding: [
            '妈妈问原因是因为想理解你',
            '妈妈说解决方案是因为想帮助你',
            '妈妈也爱你，只是表达方式不同',
            '用语言向妈妈解释你的感受会更好理解'
          ]
        },
        parentF_childT: {
          communication: '妈妈想分享情感，但孩子只说事实。',
          behavior: '妈妈关心感受，但孩子理性行动。',
          thinking: '对妈妈来说关系重要，但对孩子来说结果重要。',
          parentGuidance: [
            '认可孩子的理性倾向',
            '不要强迫情感，尊重孩子的方式',
            '告诉孩子不表达情感也没关系',
            '理解理性对话也是表达爱的方式'
          ],
          childUnderstanding: [
            '妈妈经常问感受是因为关心你',
            '妈妈觉得分享情感会更亲近',
            '偶尔对妈妈说"喜欢""没事"会让她开心',
            '妈妈的担心是爱的另一种表达'
          ]
        }
      }
    },
    JP: {
      same: {
        J: {
          communication: '两个人都有计划地安排日程并遵守。',
          behavior: '喜欢有系统、有规律的生活。',
          thinking: '喜欢快速做决定并按计划执行。'
        },
        P: {
          communication: '两个人都灵活适应情况。',
          behavior: '喜欢自由和即兴。',
          thinking: '保持多种可能性，慢慢做决定。'
        }
      },
      different: {
        parentJ_childP: {
          communication: '妈妈想做计划，但孩子想随时随机应变。',
          behavior: '妈妈遵守规则，但孩子想自由行动。',
          thinking: '妈妈提前决定会舒服，但孩子喜欢保持开放。',
          parentGuidance: [
            '不要给孩子太严格的日程',
            '只定大框架，细节灵活处理',
            '孩子的即兴行为也可以是优点',
            '只定截止时间，方法让孩子决定'
          ],
          childUnderstanding: [
            '妈妈做计划是为了事情顺利',
            '遵守约定时间是互相尊重',
            '妈妈遇到意外可能会焦虑',
            '重要的事提前告诉妈妈她会更安心'
          ]
        },
        parentP_childJ: {
          communication: '妈妈想灵活，但孩子需要计划。',
          behavior: '妈妈即兴，但孩子想按既定方式做。',
          thinking: '妈妈想保持开放，但孩子想快速决定。',
          parentGuidance: [
            '提前给孩子信息让他们能做计划',
            '突然改变日程孩子可能会焦虑',
            '尊重孩子规律的生活节奏',
            '有变化时提前告知'
          ],
          childUnderstanding: [
            '妈妈突然改变是因为看到新机会',
            '妈妈觉得灵活更舒服',
            '有时候计划改变也没关系',
            '可以告诉妈妈你需要计划'
          ]
        }
      }
    }
  }
};

const defaultParentGuidanceLocalized: Record<Language, string[]> = {
  ko: [
    '아이와 비슷한 성향이라 자연스럽게 소통할 수 있어요',
    '서로를 이해하기 쉬워서 편안한 관계를 유지할 수 있어요',
    '같은 방식으로 생각하고 행동해서 갈등이 적어요'
  ],
  en: [
    'You can communicate naturally because you have similar tendencies',
    'You can maintain a comfortable relationship because you understand each other easily',
    'There is less conflict because you think and act in similar ways'
  ],
  ja: [
    'お子さんと似た性向なので自然にコミュニケーションできます',
    'お互いを理解しやすいので快適な関係を維持できます',
    '同じように考え行動するので衝突が少ないです'
  ],
  zh: [
    '因为和孩子性格相似，可以自然地沟通',
    '因为容易相互理解，可以维持舒适的关系',
    '因为思考和行动方式相同，冲突较少'
  ]
};

const defaultChildUnderstandingLocalized: Record<Language, string[]> = {
  ko: [
    '엄마랑 너는 비슷하게 생각하고 행동해',
    '엄마가 하는 말이 이해가 잘 될 거야',
    '서로 편하게 이야기할 수 있어'
  ],
  en: [
    'You and Mom think and act similarly',
    'You will understand what Mom says easily',
    'You can talk comfortably with each other'
  ],
  ja: [
    'ママとあなたは似たように考えて行動するよ',
    'ママの言うことがよくわかるはずだよ',
    'お互い気楽に話せるよ'
  ],
  zh: [
    '你和妈妈的想法和行动方式很相似',
    '你会很容易理解妈妈说的话',
    '可以轻松地互相交流'
  ]
};

export interface LocalizedRelationshipInsight {
  communicationDifference: string;
  behaviorDifference: string;
  thinkingDifference: string;
  parentGuidance: string[];
  childUnderstanding: string[];
}

export function getLocalizedRelationshipInsight(
  parentType: string, 
  childType: string, 
  language: Language
): LocalizedRelationshipInsight {
  const dimensions: Array<{ dim: 'EI' | 'SN' | 'TF' | 'JP'; index: number }> = [
    { dim: 'EI', index: 0 },
    { dim: 'SN', index: 1 },
    { dim: 'TF', index: 2 },
    { dim: 'JP', index: 3 }
  ];

  let communicationParts: string[] = [];
  let behaviorParts: string[] = [];
  let thinkingParts: string[] = [];
  let parentGuidance: string[] = [];
  let childUnderstanding: string[] = [];

  const langInsights = dimensionInsightsLocalized[language];

  dimensions.forEach(({ dim, index }) => {
    const parentLetter = parentType[index];
    const childLetter = childType[index];
    const isSame = parentLetter === childLetter;
    const dimData = langInsights[dim];

    if (isSame) {
      const sameData = dimData.same[parentLetter as keyof typeof dimData.same];
      if (sameData) {
        communicationParts.push(sameData.communication);
        behaviorParts.push(sameData.behavior);
        thinkingParts.push(sameData.thinking);
      }
    } else {
      const diffKey = `parent${parentLetter}_child${childLetter}` as keyof typeof dimData.different;
      const diffData = dimData.different[diffKey];
      if (diffData) {
        communicationParts.push(diffData.communication);
        behaviorParts.push(diffData.behavior);
        thinkingParts.push(diffData.thinking);
        if (diffData.parentGuidance) {
          parentGuidance.push(...diffData.parentGuidance);
        }
        if (diffData.childUnderstanding) {
          childUnderstanding.push(...diffData.childUnderstanding);
        }
      }
    }
  });

  if (parentGuidance.length === 0) {
    parentGuidance = defaultParentGuidanceLocalized[language];
  }

  if (childUnderstanding.length === 0) {
    childUnderstanding = defaultChildUnderstandingLocalized[language];
  }

  return {
    communicationDifference: communicationParts.join(' '),
    behaviorDifference: behaviorParts.join(' '),
    thinkingDifference: thinkingParts.join(' '),
    parentGuidance: parentGuidance.slice(0, 6),
    childUnderstanding: childUnderstanding.slice(0, 6)
  };
}
