import { Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t py-8 mt-auto">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center text-center gap-4">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-6 h-6 rounded-md bg-gradient-to-br from-primary to-purple-600">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="font-display text-lg font-bold text-foreground">키즈 MBTI</span>
          </div>
          
          <p className="text-sm text-muted-foreground max-w-md">
            모든 어린이들이 자신의 특별함을 발견할 수 있도록 도와드려요.
            재미있게 자신에 대해 알아가는 첫걸음!
          </p>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors" data-testid="link-about">
              MBTI란?
            </a>
            <span>|</span>
            <a href="#" className="hover:text-foreground transition-colors" data-testid="link-faq">
              자주 묻는 질문
            </a>
            <span>|</span>
            <a href="#" className="hover:text-foreground transition-colors" data-testid="link-privacy">
              개인정보처리방침
            </a>
          </div>
          
          <p className="text-xs text-muted-foreground">
            2024 키즈 MBTI. 교육 목적으로 제작되었습니다.
          </p>
        </div>
      </div>
    </footer>
  );
}
