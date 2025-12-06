import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  MessageCircle, 
  Brain, 
  Heart, 
  BookOpen, 
  Lightbulb,
  Target,
  AlertCircle,
  Home,
  Check,
  X,
  Share2,
  RotateCcw
} from "lucide-react";
import {
  type MBTIResult,
  type DimensionDifference,
  type RelationshipInsight,
  type StudyRecommendation,
  getDimensionDifferences,
  getRelationshipInsight,
  getStudyRecommendation,
} from "@/lib/mbti-data";

interface ComparisonResultProps {
  parentResult: MBTIResult;
  childResult: MBTIResult;
  onRestart: () => void;
  onShare?: () => void;
}

const dimensionLabels: Record<string, { full: string; parent: string; child: string }> = {
  EI: { full: '에너지 방향', parent: 'E/I', child: 'E/I' },
  SN: { full: '인식 기능', parent: 'S/N', child: 'S/N' },
  TF: { full: '판단 기능', parent: 'T/F', child: 'T/F' },
  JP: { full: '생활 양식', parent: 'J/P', child: 'J/P' },
};

const dimensionDescriptions: Record<string, { title: string; description: string }> = {
  EI: { title: '에너지를 얻는 방식', description: '외부 활동 vs 내면의 세계' },
  SN: { title: '정보를 받아들이는 방식', description: '구체적 사실 vs 가능성과 의미' },
  TF: { title: '결정을 내리는 방식', description: '논리와 분석 vs 가치와 감정' },
  JP: { title: '생활을 이끌어가는 방식', description: '계획과 체계 vs 유연성과 적응' },
};

export default function ComparisonResult({ 
  parentResult, 
  childResult, 
  onRestart,
  onShare 
}: ComparisonResultProps) {
  const parentType = parentResult.primaryType.type;
  const childType = childResult.primaryType.type;
  
  const dimensionDifferences = getDimensionDifferences(parentType, childType);
  const relationshipInsight = getRelationshipInsight(parentType, childType);
  const studyRecommendation = getStudyRecommendation(childType);
  
  const sameCount = dimensionDifferences.filter(d => d.isSame).length;
  const compatibilityLevel = sameCount >= 3 ? '높음' : sameCount >= 2 ? '보통' : '다름';

  return (
    <div className="container max-w-4xl mx-auto space-y-8" data-testid="comparison-result-container">
      <div className="text-center space-y-4">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground" data-testid="text-comparison-title">
          부모-자녀 MBTI 비교 결과
        </h1>
        <p className="text-muted-foreground text-lg">
          서로의 성향을 이해하고 더 나은 관계를 만들어가세요
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-2 border-rose-200 dark:border-rose-900/50" data-testid="card-parent-result">
          <CardHeader className="text-center pb-2">
            <div className="text-sm text-muted-foreground mb-1">부모님</div>
            <CardTitle className="text-5xl font-bold text-rose-600 dark:text-rose-400" data-testid="text-parent-mbti">
              {parentType}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-xl font-medium text-foreground">{parentResult.primaryType.nickname}</p>
            <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{parentResult.primaryType.description}</p>
          </CardContent>
        </Card>

        <Card className="border-2 border-sky-200 dark:border-sky-900/50" data-testid="card-child-result">
          <CardHeader className="text-center pb-2">
            <div className="text-sm text-muted-foreground mb-1">아이</div>
            <CardTitle className="text-5xl font-bold text-sky-600 dark:text-sky-400" data-testid="text-child-mbti">
              {childType}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-xl font-medium text-foreground">{childResult.primaryType.nickname}</p>
            <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{childResult.primaryType.description}</p>
          </CardContent>
        </Card>
      </div>

      <Card data-testid="card-compatibility">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="w-5 h-5" />
            성향 유사도
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div 
              className={`inline-flex items-center rounded-md px-4 py-2 text-lg font-medium ${
                sameCount >= 3 
                  ? 'bg-green-100 dark:bg-green-950/50 text-green-800 dark:text-green-300 border border-green-300 dark:border-green-800' 
                  : sameCount >= 2 
                  ? 'bg-yellow-100 dark:bg-yellow-950/50 text-yellow-800 dark:text-yellow-300 border border-yellow-300 dark:border-yellow-800' 
                  : 'bg-blue-100 dark:bg-blue-950/50 text-blue-800 dark:text-blue-300 border border-blue-300 dark:border-blue-800'
              }`}
              data-testid="badge-compatibility"
            >
              {sameCount}/4 차원 일치 - {compatibilityLevel}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {dimensionDifferences.map((diff, index) => (
              <DimensionComparisonCard key={diff.dimension} diff={diff} index={index} />
            ))}
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="differences" className="w-full" data-testid="tabs-insights">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="differences" data-testid="tab-differences">
            <MessageCircle className="w-4 h-4 mr-2" />
            차이점
          </TabsTrigger>
          <TabsTrigger value="parent-guide" data-testid="tab-parent-guide">
            <Heart className="w-4 h-4 mr-2" />
            부모 가이드
          </TabsTrigger>
          <TabsTrigger value="child-guide" data-testid="tab-child-guide">
            <Lightbulb className="w-4 h-4 mr-2" />
            아이 이해
          </TabsTrigger>
        </TabsList>

        <TabsContent value="differences" className="space-y-4 mt-4">
          <InsightCard
            icon={<MessageCircle className="w-5 h-5 text-blue-500" />}
            title="소통 방식의 차이"
            content={relationshipInsight.communicationDifference}
            testId="card-communication"
          />
          <InsightCard
            icon={<Brain className="w-5 h-5 text-purple-500" />}
            title="행동 방식의 차이"
            content={relationshipInsight.behaviorDifference}
            testId="card-behavior"
          />
          <InsightCard
            icon={<Target className="w-5 h-5 text-orange-500" />}
            title="사고 방식의 차이"
            content={relationshipInsight.thinkingDifference}
            testId="card-thinking"
          />
        </TabsContent>

        <TabsContent value="parent-guide" className="mt-4">
          <Card data-testid="card-parent-guidance">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-rose-600 dark:text-rose-400">
                <Heart className="w-5 h-5" />
                부모님을 위한 조언
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                {childType} 유형의 아이를 이해하고 소통하는 방법
              </p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {relationshipInsight.parentGuidance.map((guidance, index) => (
                  <li key={index} className="flex items-start gap-3" data-testid={`text-parent-guidance-${index}`}>
                    <div className="mt-1 w-6 h-6 rounded-full bg-rose-100 dark:bg-rose-950/30 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-medium text-rose-600 dark:text-rose-400">{index + 1}</span>
                    </div>
                    <span className="text-foreground">{guidance}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="child-guide" className="mt-4">
          <Card data-testid="card-child-understanding">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-sky-600 dark:text-sky-400">
                <Lightbulb className="w-5 h-5" />
                아이가 이해할 수 있는 설명
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                엄마(아빠)가 왜 그렇게 행동하는지 알려줄게요
              </p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {relationshipInsight.childUnderstanding.map((understanding, index) => (
                  <li key={index} className="flex items-start gap-3" data-testid={`text-child-understanding-${index}`}>
                    <div className="mt-1 w-6 h-6 rounded-full bg-sky-100 dark:bg-sky-950/30 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-medium text-sky-600 dark:text-sky-400">{index + 1}</span>
                    </div>
                    <span className="text-foreground">{understanding}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card data-testid="card-study-recommendations">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-emerald-500" />
            {childType} 유형을 위한 학습 추천
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            아이의 MBTI에 맞는 효과적인 학습 방법
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-4 rounded-lg bg-emerald-50 dark:bg-emerald-950/20" data-testid="text-learning-style">
            <h4 className="font-semibold text-emerald-700 dark:text-emerald-400 mb-2">학습 스타일</h4>
            <p className="text-foreground">{studyRecommendation.learningStyle}</p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <Target className="w-4 h-4" />
              추천 공부 방법
            </h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {studyRecommendation.studyMethods.map((method, index) => (
                <li key={index} className="flex items-center gap-2 text-foreground" data-testid={`text-study-method-${index}`}>
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>{method}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20">
            <h4 className="font-semibold text-blue-700 dark:text-blue-400 mb-2 flex items-center gap-2">
              <Home className="w-4 h-4" />
              추천 학습 환경
            </h4>
            <p className="text-foreground" data-testid="text-study-environment">{studyRecommendation.studyEnvironment}</p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <Lightbulb className="w-4 h-4" />
              동기부여 팁
            </h4>
            <ul className="space-y-2">
              {studyRecommendation.motivationTips.map((tip, index) => (
                <li key={index} className="flex items-start gap-2 text-foreground" data-testid={`text-motivation-tip-${index}`}>
                  <span className="text-amber-500 mt-0.5">★</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 rounded-lg bg-orange-50 dark:bg-orange-950/20">
            <h4 className="font-semibold text-orange-700 dark:text-orange-400 mb-3 flex items-center gap-2">
              <AlertCircle className="w-4 h-4" />
              주의할 점
            </h4>
            <ul className="space-y-2">
              {studyRecommendation.challengeAreas.map((challenge, index) => (
                <li key={index} className="flex items-start gap-2 text-foreground" data-testid={`text-challenge-area-${index}`}>
                  <X className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
        <Button 
          variant="outline" 
          size="lg" 
          onClick={onRestart}
          className="gap-2"
          data-testid="button-restart"
        >
          <RotateCcw className="w-4 h-4" />
          처음부터 다시하기
        </Button>
        {onShare && (
          <Button 
            size="lg" 
            onClick={onShare}
            className="gap-2"
            data-testid="button-share"
          >
            <Share2 className="w-4 h-4" />
            결과 공유하기
          </Button>
        )}
      </div>
    </div>
  );
}

function DimensionComparisonCard({ diff, index }: { diff: DimensionDifference; index: number }) {
  const dimInfo = dimensionDescriptions[diff.dimension];
  
  return (
    <div 
      className={`p-4 rounded-lg border ${
        diff.isSame 
          ? 'bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-900/50' 
          : 'bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-900/50'
      }`}
      data-testid={`card-dimension-${diff.dimension}`}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="font-medium text-foreground">{dimInfo.title}</span>
        <Badge 
          variant="outline" 
          className={diff.isSame 
            ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border-green-300' 
            : 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 border-amber-300'
          }
        >
          {diff.isSame ? '일치' : '다름'}
        </Badge>
      </div>
      <p className="text-xs text-muted-foreground mb-3">{dimInfo.description}</p>
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-2">
          <span className="text-rose-600 dark:text-rose-400 font-medium">부모:</span>
          <span className="text-foreground">{diff.parentTrait}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sky-600 dark:text-sky-400 font-medium">아이:</span>
          <span className="text-foreground">{diff.childTrait}</span>
        </div>
      </div>
    </div>
  );
}

function InsightCard({ 
  icon, 
  title, 
  content,
  testId 
}: { 
  icon: React.ReactNode; 
  title: string; 
  content: string;
  testId: string;
}) {
  return (
    <Card data-testid={testId}>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center gap-2">
          {icon}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-foreground leading-relaxed">{content}</p>
      </CardContent>
    </Card>
  );
}
