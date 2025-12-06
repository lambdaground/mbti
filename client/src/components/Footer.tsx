import { Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="border-t py-8 mt-auto">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center text-center gap-4">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-6 h-6 rounded-md bg-gradient-to-br from-primary to-purple-600">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="font-display text-lg font-bold text-foreground">{t('site.title')}</span>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
            <a href="/about" className="hover:text-foreground transition-colors" data-testid="link-about">
              {t('nav.about')}
            </a>
            <span>|</span>
            <a href="/privacy" className="hover:text-foreground transition-colors" data-testid="link-privacy">
              {t('nav.privacy')}
            </a>
            <span>|</span>
            <a href="/contact" className="hover:text-foreground transition-colors" data-testid="link-contact">
              {t('nav.contact')}
            </a>
          </div>
          
          <p className="text-xs text-muted-foreground">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}
