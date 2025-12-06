import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Share2, RotateCcw, Star, Heart, Zap, Target } from "lucide-react";
import type { MBTIType, AgeGroup } from "@/lib/mbti-data";

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

interface MBTIResultProps {
  result: MBTIType;
  ageGroup: AgeGroup;
  onRestart: () => void;
  onShare: () => void;
}

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

const getAnimalImage = (type: string): string => {
  const normalizedType = type.toUpperCase();
  return mbtiImageMap[normalizedType] || intjImage;
};

const strengthIcons = [Star, Heart, Zap, Target];

export default function MBTIResult({ result, ageGroup, onRestart, onShare }: MBTIResultProps) {
  const ageLabels: Record<AgeGroup, string> = {
    elementary: '초등학생',
    middle: '중학생',
    high: '고등학생',
    adult: '성인'
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <Card className="overflow-visible">
        <div className={`bg-gradient-to-br ${result.color} p-8 md:p-12 text-white text-center rounded-t-lg`}>
          <div className="inline-flex items-center justify-center w-28 h-28 md:w-36 md:h-36 bg-white/20 backdrop-blur-sm rounded-full mb-6 p-2">
            <img 
              src={getAnimalImage(result.type)} 
              alt={result.animal}
              className="w-full h-full object-contain rounded-full"
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
