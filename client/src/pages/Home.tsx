import { useState, useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AgeSelection from "@/components/AgeSelection";
import RoleSelection from "@/components/RoleSelection";
import QuizContainer from "@/components/QuizContainer";
import MBTIResult from "@/components/MBTIResult";
import ComparisonResult from "@/components/ComparisonResult";
import Footer from "@/components/Footer";
import { type AgeGroup, type MBTIResult as MBTIResultType, type Role } from "@/lib/mbti-data";
import { useToast } from "@/hooks/use-toast";

type Stage = 'home' | 'role-selection' | 'age-selection' | 'quiz' | 'result' | 'comparison-result';

const SESSION_KEYS = {
  PARENT_RESULT: 'mbti_parent_result',
  CHILD_RESULT: 'mbti_child_result',
  CHILD_AGE_GROUP: 'mbti_child_age_group',
  CURRENT_ROLE: 'mbti_current_role',
  COMPARISON_MODE: 'mbti_comparison_mode',
};

function saveToSession<T>(key: string, value: T): void {
  try {
    sessionStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error('Failed to save to session storage:', e);
  }
}

function loadFromSession<T>(key: string): T | null {
  try {
    const item = sessionStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (e) {
    console.error('Failed to load from session storage:', e);
    return null;
  }
}

function clearSession(): void {
  Object.values(SESSION_KEYS).forEach(key => {
    sessionStorage.removeItem(key);
  });
}

export default function Home() {
  const [stage, setStage] = useState<Stage>('home');
  const [selectedAge, setSelectedAge] = useState<AgeGroup | undefined>();
  const [mbtiResult, setMbtiResult] = useState<MBTIResultType | undefined>();
  const [currentRole, setCurrentRole] = useState<Role | undefined>();
  const [isComparisonMode, setIsComparisonMode] = useState(false);
  const [parentResult, setParentResult] = useState<MBTIResultType | undefined>();
  const [childResult, setChildResult] = useState<MBTIResultType | undefined>();
  const [childAgeGroup, setChildAgeGroup] = useState<AgeGroup | undefined>();
  const { toast } = useToast();
  
  useEffect(() => {
    const savedParentResult = loadFromSession<MBTIResultType>(SESSION_KEYS.PARENT_RESULT);
    const savedChildResult = loadFromSession<MBTIResultType>(SESSION_KEYS.CHILD_RESULT);
    const savedChildAgeGroup = loadFromSession<AgeGroup>(SESSION_KEYS.CHILD_AGE_GROUP);
    const savedRole = loadFromSession<Role>(SESSION_KEYS.CURRENT_ROLE);
    const savedComparisonMode = loadFromSession<boolean>(SESSION_KEYS.COMPARISON_MODE);
    
    if (savedParentResult) setParentResult(savedParentResult);
    if (savedChildResult) setChildResult(savedChildResult);
    if (savedChildAgeGroup) setChildAgeGroup(savedChildAgeGroup);
    if (savedRole) setCurrentRole(savedRole);
    if (savedComparisonMode) setIsComparisonMode(savedComparisonMode);
  }, []);
  
  const handleStart = () => {
    setStage('role-selection');
  };
  
  const handleRoleSelect = (role: Role) => {
    setCurrentRole(role);
    saveToSession(SESSION_KEYS.CURRENT_ROLE, role);
    
    if (role === 'parent') {
      setSelectedAge('adult');
      setStage('quiz');
    } else {
      setStage('age-selection');
    }
  };
  
  const handleStartComparison = () => {
    setIsComparisonMode(true);
    saveToSession(SESSION_KEYS.COMPARISON_MODE, true);
    setCurrentRole('parent');
    saveToSession(SESSION_KEYS.CURRENT_ROLE, 'parent');
    setSelectedAge('adult');
    setStage('quiz');
    toast({
      title: "비교 테스트 시작!",
      description: "먼저 부모님이 테스트를 진행합니다.",
    });
  };
  
  const handleAgeSelect = (age: AgeGroup) => {
    setSelectedAge(age);
    setStage('quiz');
  };
  
  const handleQuizComplete = (result: MBTIResultType) => {
    setMbtiResult(result);
    
    if (isComparisonMode) {
      if (currentRole === 'parent') {
        setParentResult(result);
        saveToSession(SESSION_KEYS.PARENT_RESULT, result);
        setCurrentRole('child');
        saveToSession(SESSION_KEYS.CURRENT_ROLE, 'child');
        setSelectedAge(undefined);
        setStage('age-selection');
        toast({
          title: "부모님 테스트 완료!",
          description: "이제 아이가 테스트를 진행합니다.",
        });
      } else {
        setChildResult(result);
        saveToSession(SESSION_KEYS.CHILD_RESULT, result);
        setChildAgeGroup(selectedAge);
        saveToSession(SESSION_KEYS.CHILD_AGE_GROUP, selectedAge);
        setStage('comparison-result');
      }
    } else {
      if (currentRole === 'parent') {
        setParentResult(result);
        saveToSession(SESSION_KEYS.PARENT_RESULT, result);
      } else if (currentRole === 'child') {
        setChildResult(result);
        saveToSession(SESSION_KEYS.CHILD_RESULT, result);
      }
      setStage('result');
    }
  };
  
  const handleRestart = () => {
    setStage('home');
    setSelectedAge(undefined);
    setMbtiResult(undefined);
    setCurrentRole(undefined);
    setIsComparisonMode(false);
    setParentResult(undefined);
    setChildResult(undefined);
    setChildAgeGroup(undefined);
    clearSession();
  };
  
  const handleBackToAgeSelection = () => {
    setStage('age-selection');
  };
  
  const handleBackToRoleSelection = () => {
    setStage('role-selection');
  };
  
  const handleShare = () => {
    if (navigator.share && mbtiResult) {
      navigator.share({
        title: '나의 MBTI 결과',
        text: `나의 MBTI는 ${mbtiResult.primaryType.type} - ${mbtiResult.primaryType.nickname}! 키즈 MBTI에서 확인해보세요.`,
        url: window.location.href,
      }).catch(() => {
        copyToClipboard();
      });
    } else {
      copyToClipboard();
    }
  };
  
  const copyToClipboard = () => {
    if (!mbtiResult) return;
    const text = `나의 MBTI는 ${mbtiResult.primaryType.type} - ${mbtiResult.primaryType.nickname}! 키즈 MBTI에서 확인해보세요: ${window.location.href}`;
    navigator.clipboard.writeText(text).then(() => {
      toast({
        title: "복사 완료!",
        description: "결과 링크가 클립보드에 복사되었어요.",
      });
    });
  };
  
  const getRoleLabel = () => {
    if (isComparisonMode && currentRole === 'child') {
      return '아이 테스트';
    }
    if (isComparisonMode && currentRole === 'parent') {
      return '부모님 테스트';
    }
    return currentRole === 'parent' ? '부모님 테스트' : '아이 테스트';
  };
  
  if (stage === 'quiz' && selectedAge) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header 
          showRestart 
          onRestart={handleRestart} 
          subtitle={getRoleLabel()}
        />
        <QuizContainer
          ageGroup={selectedAge}
          onComplete={handleQuizComplete}
          onBack={currentRole === 'child' ? handleBackToAgeSelection : handleBackToRoleSelection}
        />
      </div>
    );
  }
  
  if (stage === 'result' && mbtiResult) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header showRestart onRestart={handleRestart} />
        <main className="flex-1 py-8 px-4">
          <MBTIResult
            result={mbtiResult}
            ageGroup={selectedAge!}
            onRestart={handleRestart}
            onShare={handleShare}
          />
        </main>
        <Footer />
      </div>
    );
  }
  
  const handleComparisonShare = () => {
    if (!parentResult || !childResult) return;
    const text = `부모(${parentResult.primaryType.type}) & 아이(${childResult.primaryType.type}) MBTI 비교! 키즈 MBTI에서 확인해보세요: ${window.location.href}`;
    if (navigator.share) {
      navigator.share({
        title: '부모-자녀 MBTI 비교 결과',
        text,
        url: window.location.href,
      }).catch(() => {
        navigator.clipboard.writeText(text).then(() => {
          toast({
            title: "복사 완료!",
            description: "결과 링크가 클립보드에 복사되었어요.",
          });
        });
      });
    } else {
      navigator.clipboard.writeText(text).then(() => {
        toast({
          title: "복사 완료!",
          description: "결과 링크가 클립보드에 복사되었어요.",
        });
      });
    }
  };

  if (stage === 'comparison-result' && parentResult && childResult) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header showRestart onRestart={handleRestart} />
        <main className="flex-1 py-8 px-4">
          <ComparisonResult
            parentResult={parentResult}
            childResult={childResult}
            childAgeGroup={childAgeGroup}
            onRestart={handleRestart}
            onShare={handleComparisonShare}
          />
        </main>
        <Footer />
      </div>
    );
  }
  
  if (stage === 'age-selection') {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header 
          showRestart 
          onRestart={handleRestart}
          subtitle={isComparisonMode ? '아이 테스트' : undefined}
        />
        <main className="flex-1">
          <AgeSelection
            selectedAge={selectedAge}
            onSelect={handleAgeSelect}
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
        {stage === 'role-selection' && (
          <RoleSelection 
            onSelectRole={handleRoleSelect}
            onStartComparison={handleStartComparison}
          />
        )}
      </main>
      <Footer />
    </div>
  );
}
