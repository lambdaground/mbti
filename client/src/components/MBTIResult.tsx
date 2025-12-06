import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Share2, RotateCcw, Star, Heart, Zap, Target, Brain, Users, BookOpen, Lightbulb } from "lucide-react";
import type { MBTIType, AgeGroup } from "@/lib/mbti-data";

interface MBTIResultProps {
  result: MBTIType;
  ageGroup: AgeGroup;
  onRestart: () => void;
  onShare: () => void;
}

const strengthIcons = [Star, Heart, Zap, Target];
const detailIcons = [Brain, Users, BookOpen];

export default function MBTIResult({ result, ageGroup, onRestart, onShare }: MBTIResultProps) {
  const ageLabels = {
    elementary: '초등학생',
    middle: '중학생',
    high: '고등학생'
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <Card className="overflow-visible">
        <div className={`bg-gradient-to-br ${result.color} p-8 md:p-12 text-white text-center rounded-t-lg relative`}>
          <div className="mb-6">
            <img 
              src={result.image} 
              alt={result.animal}
              className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full border-4 border-white/30 shadow-xl object-cover bg-white/20"
              data-testid="img-mbti-animal"
            />
          </div>
          
          <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-0">
            {ageLabels[ageGroup]} 결과
          </Badge>
          
          <h1 
            className="font-display text-5xl md:text-7xl font-bold mb-3"
            data-testid="text-mbti-type"
          >
            {result.type}
          </h1>
          
          <p 
            className="text-xl md:text-2xl font-medium opacity-90"
            data-testid="text-mbti-nickname"
          >
            {result.nickname}
          </p>
          
          <p className="text-lg opacity-80 mt-2">
            나를 닮은 동물: <span className="font-bold">{result.animal}</span>
          </p>
        </div>
        
        <div className="p-6 md:p-8 space-y-8">
          <div>
            <h2 className="font-display text-xl font-bold mb-3 text-foreground flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-primary" />
              나는 어떤 사람일까요?
            </h2>
            <p 
              className="text-muted-foreground leading-relaxed text-lg"
              data-testid="text-description"
            >
              {result.detailedDescription}
            </p>
          </div>

          <div className="bg-muted/30 rounded-xl p-6">
            <h3 className="font-display text-lg font-bold mb-3 text-foreground flex items-center gap-2">
              왜 {result.animal}일까요?
            </h3>
            <p className="text-muted-foreground leading-relaxed" data-testid="text-animal-description">
              {result.animalDescription}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <Card className="p-4 border-primary/20">
              <div className="flex items-center gap-2 mb-3">
                <Brain className="w-5 h-5 text-primary" />
                <h3 className="font-display font-bold text-foreground">나의 생각 방식</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed" data-testid="text-how-i-think">
                {result.howIThink}
              </p>
            </Card>
            
            <Card className="p-4 border-primary/20">
              <div className="flex items-center gap-2 mb-3">
                <Users className="w-5 h-5 text-primary" />
                <h3 className="font-display font-bold text-foreground">친구들과 함께할 때</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed" data-testid="text-with-friends">
                {result.howIActWithFriends}
              </p>
            </Card>
            
            <Card className="p-4 border-primary/20">
              <div className="flex items-center gap-2 mb-3">
                <BookOpen className="w-5 h-5 text-primary" />
                <h3 className="font-display font-bold text-foreground">공부할 때</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed" data-testid="text-how-i-study">
                {result.howIStudy}
              </p>
            </Card>
          </div>
          
          <div>
            <h2 className="font-display text-xl font-bold mb-4 text-foreground flex items-center gap-2">
              <Star className="w-5 h-5 text-amber-500" />
              나의 강점
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {result.strengths.map((strength, index) => {
                const Icon = strengthIcons[index % strengthIcons.length];
                return (
                  <div 
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg bg-muted/50"
                    data-testid={`text-strength-${index}`}
                  >
                    <div className={`w-8 h-8 rounded-md bg-gradient-to-br ${result.color} flex items-center justify-center shrink-0`}>
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-medium text-foreground">{strength}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold mb-4 text-foreground flex items-center gap-2">
              <Zap className="w-5 h-5 text-blue-500" />
              더 성장하려면
            </h2>
            <div className="space-y-2">
              {result.growthAreas.map((area, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-lg bg-blue-50 dark:bg-blue-950/30"
                  data-testid={`text-growth-${index}`}
                >
                  <span className="text-blue-500 font-bold shrink-0">TIP {index + 1}</span>
                  <span className="text-foreground">{area}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h2 className="font-display text-xl font-bold mb-4 text-foreground flex items-center gap-2">
              <Heart className="w-5 h-5 text-pink-500" />
              이런 활동을 좋아할 거예요
            </h2>
            <div className="flex flex-wrap gap-2">
              {result.activities.map((activity, index) => (
                <Badge 
                  key={index} 
                  variant="outline" 
                  className="text-sm py-1.5 px-3"
                  data-testid={`badge-activity-${index}`}
                >
                  {activity}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold mb-4 text-foreground flex items-center gap-2">
              <Users className="w-5 h-5 text-purple-500" />
              나와 비슷한 유명인/캐릭터
            </h2>
            <div className="flex flex-wrap gap-2">
              {result.famousCharacters.map((character, index) => (
                <Badge 
                  key={index} 
                  className="text-sm py-1.5 px-3 bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300"
                  data-testid={`badge-character-${index}`}
                >
                  {character}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </Card>
      
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Button 
          onClick={onShare}
          className="gap-2"
          data-testid="button-share"
        >
          <Share2 className="w-4 h-4" />
          결과 공유하기
        </Button>
        <Button 
          variant="outline" 
          onClick={onRestart}
          className="gap-2"
          data-testid="button-restart-test"
        >
          <RotateCcw className="w-4 h-4" />
          다시 검사하기
        </Button>
      </div>
    </div>
  );
}
