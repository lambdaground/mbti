import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Share2, Download, RotateCcw, Star, Heart, Zap, Target } from "lucide-react";
import type { MBTIType, AgeGroup } from "@/lib/mbti-data";

interface MBTIResultProps {
  result: MBTIType;
  ageGroup: AgeGroup;
  onRestart: () => void;
  onShare: () => void;
}

const animalEmojis: Record<string, string> = {
  '올빼미': '/api/placeholder/100/100',
  '부엉이': '/api/placeholder/100/100',
  '사자': '/api/placeholder/100/100',
  '여우': '/api/placeholder/100/100',
  '늑대': '/api/placeholder/100/100',
  '유니콘': '/api/placeholder/100/100',
  '돌고래': '/api/placeholder/100/100',
  '나비': '/api/placeholder/100/100',
  '비버': '/api/placeholder/100/100',
  '토끼': '/api/placeholder/100/100',
  '독수리': '/api/placeholder/100/100',
  '강아지': '/api/placeholder/100/100',
  '표범': '/api/placeholder/100/100',
  '고양이': '/api/placeholder/100/100',
  '치타': '/api/placeholder/100/100',
  '앵무새': '/api/placeholder/100/100',
};

const strengthIcons = [Star, Heart, Zap, Target];

export default function MBTIResult({ result, ageGroup, onRestart, onShare }: MBTIResultProps) {
  const ageLabels = {
    elementary: '초등학생',
    middle: '중학생',
    high: '고등학생'
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <Card className="overflow-visible">
        <div className={`bg-gradient-to-br ${result.color} p-8 md:p-12 text-white text-center rounded-t-lg`}>
          <div className="inline-flex items-center justify-center w-24 h-24 md:w-32 md:h-32 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <span className="text-5xl md:text-6xl font-display font-bold">{result.animal.charAt(0)}</span>
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
            <h2 className="font-display text-xl font-bold mb-3 text-foreground">나는 어떤 사람일까요?</h2>
            <p 
              className="text-muted-foreground leading-relaxed text-lg"
              data-testid="text-description"
            >
              {result.description}
            </p>
          </div>
          
          <div>
            <h2 className="font-display text-xl font-bold mb-4 text-foreground">나의 강점</h2>
            <div className="grid grid-cols-2 gap-3">
              {result.strengths.map((strength, index) => {
                const Icon = strengthIcons[index % strengthIcons.length];
                return (
                  <div 
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg bg-muted/50"
                    data-testid={`text-strength-${index}`}
                  >
                    <div className={`w-8 h-8 rounded-md bg-gradient-to-br ${result.color} flex items-center justify-center`}>
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-medium text-foreground">{strength}</span>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div>
            <h2 className="font-display text-xl font-bold mb-4 text-foreground">이런 활동을 좋아할 거예요</h2>
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
