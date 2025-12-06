import { Button } from "@/components/ui/button";
import { Sparkles, Users, Star, Heart } from "lucide-react";

interface HeroSectionProps {
  onStart: () => void;
}

export default function HeroSection({ onStart }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden py-12 md:py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/5 to-pink-500/10" />
      
      <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400/20 rounded-full blur-2xl" />
      <div className="absolute top-20 right-20 w-32 h-32 bg-purple-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-1/3 w-24 h-24 bg-pink-400/20 rounded-full blur-2xl" />
      
      <div className="container max-w-6xl mx-auto px-4 relative">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">재미있는 성격 테스트</span>
          </div>
          
          <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground leading-tight">
            나에 대해
            <br />
            <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
              알아볼까요?
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            쉽고 재미있는 질문에 답하면서
            <br className="hidden md:block" />
            나의 성격 유형을 발견해보세요!
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 py-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                <Star className="w-4 h-4 text-orange-500" />
              </div>
              <span>맞춤형 질문</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                <Heart className="w-4 h-4 text-emerald-500" />
              </div>
              <span>친절한 설명</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <Users className="w-4 h-4 text-blue-500" />
              </div>
              <span>결과 공유</span>
            </div>
          </div>
          
          <Button 
            size="lg" 
            onClick={onStart}
            className="text-lg px-8 py-6 rounded-xl shadow-lg shadow-primary/25"
            data-testid="button-start-test"
          >
            <Sparkles className="w-5 h-5 mr-2" />
            테스트 시작하기
          </Button>
          
          <p className="text-sm text-muted-foreground">
            이미 <span className="font-bold text-foreground">50,000명</span>의 친구들이 참여했어요!
          </p>
        </div>
      </div>
    </section>
  );
}
