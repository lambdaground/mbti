import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AgeSelection from "@/components/AgeSelection";
import QuizContainer from "@/components/QuizContainer";
import MBTIResult from "@/components/MBTIResult";
import Footer from "@/components/Footer";
import { mbtiTypes, type AgeGroup } from "@/lib/mbti-data";
import { useToast } from "@/hooks/use-toast";

type Stage = 'home' | 'age-selection' | 'quiz' | 'result';

export default function Home() {
  const [stage, setStage] = useState<Stage>('home');
  const [selectedAge, setSelectedAge] = useState<AgeGroup | undefined>();
  const [mbtiResult, setMbtiResult] = useState<string | undefined>();
  const { toast } = useToast();
  
  const handleStart = () => {
    setStage('age-selection');
  };
  
  const handleAgeSelect = (age: AgeGroup) => {
    setSelectedAge(age);
    setStage('quiz');
  };
  
  const handleQuizComplete = (result: string) => {
    setMbtiResult(result);
    setStage('result');
  };
  
  const handleRestart = () => {
    setStage('home');
    setSelectedAge(undefined);
    setMbtiResult(undefined);
  };
  
  const handleBackToAgeSelection = () => {
    setStage('age-selection');
  };
  
  const handleShare = () => {
    if (navigator.share && mbtiResult) {
      navigator.share({
        title: '나의 MBTI 결과',
        text: `나의 MBTI는 ${mbtiResult} - ${mbtiTypes[mbtiResult]?.nickname}! 키즈 MBTI에서 확인해보세요.`,
        url: window.location.href,
      }).catch(() => {
        copyToClipboard();
      });
    } else {
      copyToClipboard();
    }
  };
  
  const copyToClipboard = () => {
    const text = `나의 MBTI는 ${mbtiResult} - ${mbtiTypes[mbtiResult!]?.nickname}! 키즈 MBTI에서 확인해보세요: ${window.location.href}`;
    navigator.clipboard.writeText(text).then(() => {
      toast({
        title: "복사 완료!",
        description: "결과 링크가 클립보드에 복사되었어요.",
      });
    });
  };
  
  if (stage === 'quiz' && selectedAge) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header showRestart onRestart={handleRestart} />
        <QuizContainer
          ageGroup={selectedAge}
          onComplete={handleQuizComplete}
          onBack={handleBackToAgeSelection}
        />
      </div>
    );
  }
  
  if (stage === 'result' && mbtiResult && mbtiTypes[mbtiResult]) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header showRestart onRestart={handleRestart} />
        <main className="flex-1 py-8 px-4">
          <MBTIResult
            result={mbtiTypes[mbtiResult]}
            ageGroup={selectedAge!}
            onRestart={handleRestart}
            onShare={handleShare}
          />
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {stage === 'home' && (
          <HeroSection onStart={handleStart} />
        )}
        {(stage === 'home' || stage === 'age-selection') && (
          <AgeSelection
            selectedAge={selectedAge}
            onSelect={handleAgeSelect}
          />
        )}
      </main>
      <Footer />
    </div>
  );
}
