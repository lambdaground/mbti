import { useState } from "react";
import AgeCard from "./AgeCard";
import { ageGroupInfo, type AgeGroup } from "@/lib/mbti-data";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Sparkles, ChevronRight } from "lucide-react";

const mbtiTypes = [
  'INTJ', 'INTP', 'ENTJ', 'ENTP',
  'INFJ', 'INFP', 'ENFJ', 'ENFP',
  'ISTJ', 'ISFJ', 'ESTJ', 'ESFJ',
  'ISTP', 'ISFP', 'ESTP', 'ESFP'
];

interface AgeSelectionProps {
  selectedAge?: AgeGroup;
  onSelect: (age: AgeGroup) => void;
  onMbtiInput?: (mbti: string, ageGroup: AgeGroup) => void;
}

export default function AgeSelection({ selectedAge, onSelect, onMbtiInput }: AgeSelectionProps) {
  const ageGroups: AgeGroup[] = ['elementary', 'middle', 'high', 'adult'];
  const [showMbtiOption, setShowMbtiOption] = useState(false);
  const [tempSelectedAge, setTempSelectedAge] = useState<AgeGroup | null>(null);
  const [showMbtiSelector, setShowMbtiSelector] = useState(false);
  const [selectedMbti, setSelectedMbti] = useState<string | null>(null);
  
  const handleAgeClick = (age: AgeGroup) => {
    setTempSelectedAge(age);
    setShowMbtiOption(true);
  };
  
  const handleTakeQuiz = () => {
    if (tempSelectedAge) {
      onSelect(tempSelectedAge);
    }
  };
  
  const handleKnowMbti = () => {
    setShowMbtiSelector(true);
  };
  
  const handleMbtiSelect = (mbti: string) => {
    setSelectedMbti(mbti);
  };
  
  const handleConfirmMbti = () => {
    if (selectedMbti && tempSelectedAge && onMbtiInput) {
      onMbtiInput(selectedMbti, tempSelectedAge);
    }
  };
  
  const handleBack = () => {
    if (showMbtiSelector) {
      setShowMbtiSelector(false);
      setSelectedMbti(null);
    } else {
      setShowMbtiOption(false);
      setTempSelectedAge(null);
    }
  };
  
  if (showMbtiOption && tempSelectedAge) {
    return (
      <section className="py-12">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center mb-6">
            <Badge variant="outline" className="mb-4">
              {ageGroupInfo[tempSelectedAge].label} ({ageGroupInfo[tempSelectedAge].subtitle})
            </Badge>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
              아이의 MBTI를 알고 계신가요?
            </h2>
            <p className="text-muted-foreground">
              MBTI를 알고 있다면 바로 입력하고, 모른다면 테스트를 진행해요
            </p>
          </div>
          
          {!showMbtiSelector ? (
            <Card className="p-6 overflow-visible">
              <div className="text-center space-y-4">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    onClick={handleKnowMbti}
                    className="gap-2"
                    data-testid="button-child-know-mbti"
                  >
                    <Check className="w-5 h-5" />
                    네, MBTI를 알아요
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    onClick={handleTakeQuiz}
                    className="gap-2"
                    data-testid="button-child-take-quiz"
                  >
                    <Sparkles className="w-5 h-5" />
                    아니요, 테스트할게요
                  </Button>
                </div>
                <Button 
                  variant="ghost"
                  onClick={handleBack}
                  data-testid="button-back-age"
                >
                  연령대 다시 선택
                </Button>
              </div>
            </Card>
          ) : (
            <Card className="p-6 overflow-visible">
              <div className="space-y-4">
                <div className="text-center">
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    아이의 MBTI를 선택하세요
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    선택한 MBTI: {selectedMbti ? (
                      <Badge variant="outline" className="ml-2 bg-sky-50 dark:bg-sky-950/30 text-sky-700 dark:text-sky-300 border-sky-300">
                        {selectedMbti}
                      </Badge>
                    ) : '없음'}
                  </p>
                </div>
                
                <div className="grid grid-cols-4 gap-2" data-testid="container-child-mbti-selector">
                  {mbtiTypes.map((mbti) => (
                    <Button
                      key={mbti}
                      variant={selectedMbti === mbti ? "default" : "outline"}
                      size="sm"
                      onClick={() => handleMbtiSelect(mbti)}
                      className={`font-mono text-sm ${selectedMbti === mbti ? '' : 'hover-elevate'}`}
                      data-testid={`button-child-mbti-${mbti}`}
                    >
                      {mbti}
                    </Button>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                  <Button 
                    variant="ghost"
                    onClick={handleBack}
                    data-testid="button-back-mbti-option"
                  >
                    뒤로 가기
                  </Button>
                  <Button 
                    size="lg"
                    onClick={handleConfirmMbti}
                    disabled={!selectedMbti}
                    className="gap-2"
                    data-testid="button-confirm-child-mbti"
                  >
                    궁합 결과 보기
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </Card>
          )}
        </div>
      </section>
    );
  }
  
  return (
    <section className="py-12">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
            연령대를 선택해주세요
          </h2>
          <p className="text-muted-foreground">
            나이에 맞는 질문으로 더 정확한 결과를 알 수 있어요
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {ageGroups.map((age) => (
            <AgeCard
              key={age}
              ageGroup={age}
              label={ageGroupInfo[age].label}
              subtitle={ageGroupInfo[age].subtitle}
              isSelected={selectedAge === age}
              onClick={() => handleAgeClick(age)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
