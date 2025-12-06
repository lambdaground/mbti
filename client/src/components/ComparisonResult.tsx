import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  MessageCircle, 
  Brain, 
  Heart, 
  Lightbulb,
  Target,
  Share2,
  RotateCcw,
  Sparkles,
  BookOpen
} from "lucide-react";
import {
  type MBTIResult,
  type HybridPersonality,
  type DimensionSimilarity,
  type AgeGroup,
  type AgeNarrative,
  getRelationshipInsight,
  getComplexComparisonAnalysis,
  getAgeNarrative,
  ageGroupInfo,
  animalPersonalities,
} from "@/lib/mbti-data";

import intjImage from "@assets/generated_images/intj_wise_owl_mascot.png";
import intpImage from "@assets/generated_images/intp_curious_owl_mascot.png";
import entjImage from "@assets/generated_images/entj_lion_leader_mascot.png";
import entpImage from "@assets/generated_images/entp_clever_fox_mascot.png";
import infjImage from "@assets/generated_images/infj_wise_wolf_mascot.png";
import infpImage from "@assets/generated_images/infp_unicorn_dreamer_mascot.png";
import enfjImage from "@assets/generated_images/enfj_caring_dolphin_mascot.png";
import enfpImage from "@assets/generated_images/enfp_butterfly_explorer_mascot.png";
import istjImage from "@assets/generated_images/istj_beaver_worker_mascot.png";
import isfjImage from "@assets/generated_images/isfj_caring_rabbit_mascot.png";
import estjImage from "@assets/generated_images/estj_eagle_leader_mascot.png";
import esfjImage from "@assets/generated_images/esfj_friendly_dog_mascot.png";
import istpImage from "@assets/generated_images/istp_cool_leopard_mascot.png";
import isfpImage from "@assets/generated_images/isfp_artistic_cat_mascot.png";
import estpImage from "@assets/generated_images/estp_cheetah_adventurer_mascot.png";
import esfpImage from "@assets/generated_images/esfp_parrot_entertainer_mascot.png";

import dogCatHybrid from "@assets/generated_images/dog-cat_hybrid_mascot.png";
import lionFoxHybrid from "@assets/generated_images/lion-fox_hybrid_mascot.png";
import owlWolfHybrid from "@assets/generated_images/owl-wolf_hybrid_mascot.png";
import dolphinButterflyHybrid from "@assets/generated_images/dolphin-butterfly_hybrid_mascot.png";
import rabbitCatHybrid from "@assets/generated_images/rabbit-cat_hybrid_mascot.png";
import eagleLionHybrid from "@assets/generated_images/eagle-lion_hybrid_mascot.png";
import cheetahDogHybrid from "@assets/generated_images/cheetah-dog_hybrid_mascot.png";
import unicornButterflyHybrid from "@assets/generated_images/unicorn-butterfly_hybrid_mascot.png";

const mbtiImageMap: Record<string, string> = {
  'INTJ': intjImage,
  'INTP': intpImage,
  'ENTJ': entjImage,
  'ENTP': entpImage,
  'INFJ': infjImage,
  'INFP': infpImage,
  'ENFJ': enfjImage,
  'ENFP': enfpImage,
  'ISTJ': istjImage,
  'ISFJ': isfjImage,
  'ESTJ': estjImage,
  'ESFJ': esfjImage,
  'ISTP': istpImage,
  'ISFP': isfpImage,
  'ESTP': estpImage,
  'ESFP': esfpImage,
};

const hybridImageMap: Record<string, string> = {
  '개냥이': dogCatHybrid,
  '냥멍이': dogCatHybrid,
  '사여우': lionFoxHybrid,
  '여자왕': lionFoxHybrid,
  '늑빼미': owlWolfHybrid,
  '올늑이': owlWolfHybrid,
  '돌나비': dolphinButterflyHybrid,
  '나돌이': dolphinButterflyHybrid,
  '토냥이': rabbitCatHybrid,
  '냥토끼': rabbitCatHybrid,
  '독사왕': eagleLionHybrid,
  '사독이': eagleLionHybrid,
  '치멍이': cheetahDogHybrid,
  '멍치타': cheetahDogHybrid,
  '유나비': unicornButterflyHybrid,
  '나유콘': unicornButterflyHybrid,
};

function getAnimalImage(type: string): string {
  return mbtiImageMap[type.toUpperCase()] || intjImage;
}

function getHybridImage(hybrid: HybridPersonality): string {
  if (hybrid.blendLevel === 'pure') {
    return getAnimalImage(hybrid.primaryType);
  }
  if (hybridImageMap[hybrid.hybridAnimalName]) {
    return hybridImageMap[hybrid.hybridAnimalName];
  }
  return getAnimalImage(hybrid.primaryType);
}

interface ComparisonResultProps {
  parentResult: MBTIResult;
  childResult: MBTIResult;
  childAgeGroup?: AgeGroup;
  onRestart: () => void;
  onShare?: () => void;
}

export default function ComparisonResult({ 
  parentResult, 
  childResult, 
  childAgeGroup,
  onRestart,
  onShare 
}: ComparisonResultProps) {
  const parentType = parentResult.primaryType.type;
  const childType = childResult.primaryType.type;
  
  const relationshipInsight = getRelationshipInsight(parentType, childType);
  const complexAnalysis = getComplexComparisonAnalysis(parentResult, childResult);
  
  const { parentHybrid, childHybrid } = complexAnalysis;
  
  const childAgeNarrative = childAgeGroup ? getAgeNarrative(childType, childAgeGroup) : null;
  const ageLabel = childAgeGroup ? ageGroupInfo[childAgeGroup].label : '';

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
        <Card className="border-2 border-rose-200 dark:border-rose-900/50 overflow-visible" data-testid="card-parent-result">
          <CardHeader className="text-center pb-2">
            <div className="flex justify-center mb-4">
              <div className="w-24 h-24 rounded-full bg-rose-100 dark:bg-rose-950/30 p-2 border-2 border-rose-300 dark:border-rose-800">
                <img 
                  src={getHybridImage(parentHybrid)} 
                  alt={parentHybrid.hybridAnimalName}
                  className="w-full h-full object-contain rounded-full"
                  data-testid="img-parent-animal"
                />
              </div>
            </div>
            <div className="text-sm text-muted-foreground mb-1">부모님</div>
            <CardTitle className="text-4xl font-bold text-rose-600 dark:text-rose-400" data-testid="text-parent-mbti">
              {parentType}
            </CardTitle>
            <div className="text-sm text-rose-600/80 dark:text-rose-400/80 mt-1" data-testid="text-parent-mbti-percentage">
              {parentResult.primaryType.type} {parentResult.primaryPercentage}% + {parentResult.secondaryType.type} {parentResult.secondaryPercentage}%
            </div>
            <div className="mt-2">
              <Badge variant="outline" className="bg-rose-50 dark:bg-rose-950/30 text-rose-700 dark:text-rose-300 border-rose-300 dark:border-rose-700">
                {parentHybrid.hybridAnimalName}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="text-center space-y-3">
            <p className="text-lg font-medium text-foreground">{parentResult.primaryType.nickname}</p>
            <p className="text-sm text-muted-foreground">{parentHybrid.blendDescription}</p>
          </CardContent>
        </Card>

        <Card className="border-2 border-sky-200 dark:border-sky-900/50 overflow-visible" data-testid="card-child-result">
          <CardHeader className="text-center pb-2">
            <div className="flex justify-center mb-4">
              <div className="w-24 h-24 rounded-full bg-sky-100 dark:bg-sky-950/30 p-2 border-2 border-sky-300 dark:border-sky-800">
                <img 
                  src={getHybridImage(childHybrid)} 
                  alt={childHybrid.hybridAnimalName}
                  className="w-full h-full object-contain rounded-full"
                  data-testid="img-child-animal"
                />
              </div>
            </div>
            <div className="text-sm text-muted-foreground mb-1">아이</div>
            <CardTitle className="text-4xl font-bold text-sky-600 dark:text-sky-400" data-testid="text-child-mbti">
              {childType}
            </CardTitle>
            <div className="text-sm text-sky-600/80 dark:text-sky-400/80 mt-1" data-testid="text-child-mbti-percentage">
              {childResult.primaryType.type} {childResult.primaryPercentage}% + {childResult.secondaryType.type} {childResult.secondaryPercentage}%
            </div>
            <div className="mt-2">
              <Badge variant="outline" className="bg-sky-50 dark:bg-sky-950/30 text-sky-700 dark:text-sky-300 border-sky-300 dark:border-sky-700">
                {childHybrid.hybridAnimalName}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="text-center space-y-3">
            <p className="text-lg font-medium text-foreground">{childResult.primaryType.nickname}</p>
            <p className="text-sm text-muted-foreground">{childHybrid.blendDescription}</p>
          </CardContent>
        </Card>
      </div>

      {childAgeNarrative && (
        <Card className="border-2 border-sky-200 dark:border-sky-900/50" data-testid="card-child-age-narrative">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-sky-600 dark:text-sky-400">
              <BookOpen className="w-5 h-5" />
              {ageLabel} {childType} 아이는 이런 성향이에요
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              우리 아이의 성격을 쉽게 이해해보세요
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-4 bg-sky-50 dark:bg-sky-950/30 rounded-lg" data-testid="text-child-overview">
              <p className="text-foreground leading-relaxed">{childAgeNarrative.overview}</p>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                핵심 성격 특성
              </h4>
              <div className="flex flex-wrap gap-2" data-testid="container-child-traits">
                {childAgeNarrative.keyTraits.map((trait, index) => (
                  <Badge 
                    key={index} 
                    variant="outline" 
                    className="bg-sky-50 dark:bg-sky-950/30 text-sky-700 dark:text-sky-300 border-sky-300 dark:border-sky-700"
                    data-testid={`badge-child-trait-${index}`}
                  >
                    {trait}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-3">이런 상황에서 이렇게 행동해요</h4>
              <div className="space-y-3" data-testid="container-child-scenarios">
                {childAgeNarrative.scenarios.map((scenario, index) => (
                  <div 
                    key={index} 
                    className="p-3 bg-muted/50 rounded-lg"
                    data-testid={`card-child-scenario-${index}`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 w-6 h-6 rounded-full bg-sky-100 dark:bg-sky-950/50 flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-medium text-sky-600 dark:text-sky-400">{index + 1}</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">{scenario.situation}</p>
                        <p className="text-sm text-muted-foreground mt-1">{scenario.behavior}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <Card className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 border-emerald-300 dark:border-emerald-800" data-testid="card-compatibility">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="w-5 h-5" />
            성향 유사도
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center gap-2 mb-6">
            <div 
              className={`inline-flex items-center rounded-md px-6 py-3 text-2xl font-bold ${
                complexAnalysis.overallCompatibilityScore >= 75 
                  ? 'bg-green-100 dark:bg-green-950/50 text-green-800 dark:text-green-300 border border-green-300 dark:border-green-800' 
                  : complexAnalysis.overallCompatibilityScore >= 50 
                  ? 'bg-yellow-100 dark:bg-yellow-950/50 text-yellow-800 dark:text-yellow-300 border border-yellow-300 dark:border-yellow-800' 
                  : 'bg-blue-100 dark:bg-blue-950/50 text-blue-800 dark:text-blue-300 border border-blue-300 dark:border-blue-800'
              }`}
              data-testid="badge-compatibility"
            >
              성향 일치도 {complexAnalysis.overallCompatibilityScore}%
            </div>
            <p className="text-sm text-muted-foreground">
              {complexAnalysis.overallCompatibilityScore >= 75 
                ? '비슷한 성향으로 소통이 편해요!' 
                : complexAnalysis.overallCompatibilityScore >= 50 
                ? '공통점과 차이점이 조화롭게 있어요' 
                : '서로 다른 관점으로 배울 점이 많아요'}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {complexAnalysis.dimensionSimilarities.map((dimSim) => (
              <DimensionSimilarityCard key={dimSim.dimension} similarity={dimSim} />
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

function DimensionSimilarityCard({ similarity }: { similarity: DimensionSimilarity }) {
  const isHigh = similarity.similarityPct >= 75;
  const isMedium = similarity.similarityPct >= 50 && similarity.similarityPct < 75;
  
  const getTraitLabel = (dim: string, pct: number): string => {
    const labels: Record<string, { low: string; high: string }> = {
      EI: { low: 'E (외향)', high: 'I (내향)' },
      SN: { low: 'S (현실)', high: 'N (직관)' },
      TF: { low: 'T (논리)', high: 'F (감성)' },
      JP: { low: 'J (계획)', high: 'P (자유)' }
    };
    return pct >= 50 ? labels[dim].high : labels[dim].low;
  };
  
  return (
    <div 
      className={`p-4 rounded-lg border ${
        isHigh 
          ? 'bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-900/50' 
          : isMedium
          ? 'bg-yellow-50 dark:bg-yellow-950/20 border-yellow-200 dark:border-yellow-900/50'
          : 'bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-900/50'
      }`}
      data-testid={`card-similarity-${similarity.dimension}`}
    >
      <div className="flex items-center justify-between mb-3">
        <span className="font-medium text-foreground">{similarity.dimensionName}</span>
        <Badge 
          variant="outline" 
          className={
            isHigh 
              ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border-green-300' 
              : isMedium
              ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 border-yellow-300'
              : 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 border-blue-300'
          }
        >
          {similarity.similarityPct}% 일치
        </Badge>
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <span className="text-rose-600 dark:text-rose-400 font-medium">부모:</span>
            <span className="text-foreground">{getTraitLabel(similarity.dimension, similarity.parentPct)}</span>
            <span className="text-muted-foreground text-xs">({similarity.parentPct < 50 ? 100 - similarity.parentPct : similarity.parentPct}%)</span>
          </div>
        </div>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <span className="text-sky-600 dark:text-sky-400 font-medium">아이:</span>
            <span className="text-foreground">{getTraitLabel(similarity.dimension, similarity.childPct)}</span>
            <span className="text-muted-foreground text-xs">({similarity.childPct < 50 ? 100 - similarity.childPct : similarity.childPct}%)</span>
          </div>
        </div>
      </div>
      
      <div className="mt-3 h-2 bg-muted rounded-full overflow-hidden">
        <div 
          className={`h-full rounded-full transition-all ${
            isHigh 
              ? 'bg-green-500' 
              : isMedium 
              ? 'bg-yellow-500' 
              : 'bg-blue-500'
          }`}
          style={{ width: `${similarity.similarityPct}%` }}
        />
      </div>
    </div>
  );
}
