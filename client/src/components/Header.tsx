import { Button } from "@/components/ui/button";
import { Sparkles, RotateCcw, Download } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSelector from "@/components/LanguageSelector";
import { useToast } from "@/hooks/use-toast";

interface HeaderProps {
  showRestart?: boolean;
  onRestart?: () => void;
  subtitle?: string;
}

export default function Header({ showRestart, onRestart, subtitle }: HeaderProps) {
  const { t } = useLanguage();
  const { toast } = useToast();
  
  const handleDownload = async () => {
    try {
      toast({
        title: t('download.preparing') || "Preparing download...",
        description: t('download.preparingDesc') || "Creating ZIP file of the project",
      });
      
      const response = await fetch('/api/download-project');
      
      if (!response.ok) {
        throw new Error('Download failed');
      }
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'mbti-family-app.zip';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
      
      toast({
        title: t('download.complete') || "Download complete!",
        description: t('download.completeDesc') || "Your project files have been downloaded",
      });
    } catch (error) {
      console.error('Download failed:', error);
      toast({
        title: t('download.error') || "Download failed",
        description: t('download.errorDesc') || "Failed to download project files",
        variant: "destructive",
      });
    }
  };
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-6xl items-center justify-between gap-4 mx-auto px-4">
        <div className="flex items-center gap-3">
          <a href="/" className="flex items-center gap-2" data-testid="link-home">
            <div className="flex items-center justify-center w-8 h-8 rounded-md bg-gradient-to-br from-primary to-purple-600">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="font-display text-lg md:text-xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent whitespace-nowrap">
              {t('site.title')}
            </span>
          </a>
          {subtitle && (
            <span className="text-sm text-muted-foreground border-l pl-3" data-testid="text-subtitle">
              {subtitle}
            </span>
          )}
        </div>
        
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleDownload}
            title={t('download.button') || "Download Project"}
            data-testid="button-download"
          >
            <Download className="w-4 h-4" />
          </Button>
          <LanguageSelector />
          {showRestart && onRestart && (
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={onRestart}
              data-testid="button-restart"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              {t('restart')}
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
