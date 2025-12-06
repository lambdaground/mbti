import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Users, Heart, ChevronRight, Check, Baby } from "lucide-react";

const mbtiTypes = [
  'INTJ', 'INTP', 'ENTJ', 'ENTP',
  'INFJ', 'INFP', 'ENFJ', 'ENFP',
  'ISTJ', 'ISFJ', 'ESTJ', 'ESFJ',
  'ISTP', 'ISFP', 'ESTP', 'ESFP'
];

interface HeroSectionProps {
  onStartWithMbti: (mbti: string) => void;
  onStartWithQuiz: () => void;
}

export default function HeroSection({ onStartWithMbti, onStartWithQuiz }: HeroSectionProps) {
  const [selectedMbti, setSelectedMbti] = useState<string | null>(null);
  const [showMbtiSelector, setShowMbtiSelector] = useState(false);

  const handleMbtiSelect = (mbti: string) => {
    setSelectedMbti(mbti);
  };

  const handleConfirmMbti = () => {
    if (selectedMbti) {
      onStartWithMbti(selectedMbti);
    }
  };

  return (
    <section className="relative overflow-hidden py-12 md:py-16">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/5 to-pink-500/10" />
      
      <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400/20 rounded-full blur-2xl" />
      <div className="absolute top-20 right-20 w-32 h-32 bg-purple-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-1/3 w-24 h-24 bg-pink-400/20 rounded-full blur-2xl" />
      
      <div className="container max-w-4xl mx-auto px-4 relative">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary">
            <Users className="w-4 h-4" />
            <span className="text-sm font-medium">부모-자녀 MBTI 궁합</span>
          </div>
          
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-tight">
            나와 내 아이의
            <br />
            <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
              MBTI 궁합
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            부모님의 MBTI와 아이의 MBTI를 비교해서
            <br className="hidden md:block" />
            서로를 더 잘 이해하고 소통하는 방법을 알아보세요!
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 py-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="w-8 h-8 rounded-full bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center">
                <Heart className="w-4 h-4 text-rose-500" />
              </div>
              <span>부모 MBTI</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="w-8 h-8 rounded-full bg-sky-100 dark:bg-sky-900/30 flex items-center justify-center">
                <Baby className="w-4 h-4 text-sky-500" />
              </div>
              <span>아이 MBTI</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-emerald-500" />
              </div>
              <span>궁합 분석</span>
            </div>
          </div>
        </div>

        {!showMbtiSelector ? (
          <div className="mt-8 space-y-4">
            <Card className="p-6 overflow-visible">
              <div className="text-center space-y-4">
                <h3 className="font-display text-xl font-bold text-foreground">
                  부모님의 MBTI를 알고 계신가요?
                </h3>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    onClick={() => setShowMbtiSelector(true)}
                    className="gap-2"
                    data-testid="button-know-mbti"
                  >
                    <Check className="w-5 h-5" />
                    네, MBTI를 알아요
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    onClick={onStartWithQuiz}
                    className="gap-2"
                    data-testid="button-take-quiz"
                  >
                    <Sparkles className="w-5 h-5" />
                    아니요, 테스트할게요
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        ) : (
          <div className="mt-8 space-y-4">
            <Card className="p-6 overflow-visible">
              <div className="space-y-4">
                <div className="text-center">
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    부모님의 MBTI를 선택하세요
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    선택한 MBTI: {selectedMbti ? (
                      <Badge variant="outline" className="ml-2 bg-rose-50 dark:bg-rose-950/30 text-rose-700 dark:text-rose-300 border-rose-300">
                        {selectedMbti}
                      </Badge>
                    ) : '없음'}
                  </p>
                </div>
                
                <div className="grid grid-cols-4 gap-2" data-testid="container-mbti-selector">
                  {mbtiTypes.map((mbti) => (
                    <Button
                      key={mbti}
                      variant={selectedMbti === mbti ? "default" : "outline"}
                      size="sm"
                      onClick={() => handleMbtiSelect(mbti)}
                      className={`font-mono text-sm ${selectedMbti === mbti ? '' : 'hover-elevate'}`}
                      data-testid={`button-mbti-${mbti}`}
                    >
                      {mbti}
                    </Button>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                  <Button 
                    variant="ghost"
                    onClick={() => {
                      setShowMbtiSelector(false);
                      setSelectedMbti(null);
                    }}
                    data-testid="button-back"
                  >
                    뒤로 가기
                  </Button>
                  <Button 
                    size="lg"
                    onClick={handleConfirmMbti}
                    disabled={!selectedMbti}
                    className="gap-2"
                    data-testid="button-confirm-mbti"
                  >
                    다음: 아이 테스트
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        )}
        
        <p className="text-center text-sm text-muted-foreground mt-6">
          부모님 MBTI 입력 또는 테스트 후, 아이 MBTI 테스트를 진행합니다
        </p>
      </div>
    </section>
  );
}
