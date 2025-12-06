import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Question, Answer } from "@/lib/mbti-data";

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  selectedAnswer?: Answer;
  onAnswer: (answer: Answer) => void;
}

export default function QuestionCard({ 
  question, 
  questionNumber, 
  totalQuestions,
  selectedAnswer, 
  onAnswer 
}: QuestionCardProps) {
  return (
    <Card className="w-full max-w-2xl mx-auto overflow-visible">
      <div className="p-6 md:p-8 space-y-6">
        <div className="flex items-center gap-3">
          <Badge variant="secondary" className="text-sm font-medium">
            Q{questionNumber}
          </Badge>
          <span className="text-sm text-muted-foreground">
            {questionNumber} / {totalQuestions}
          </span>
        </div>
        
        <h2 
          className="font-display text-xl md:text-2xl font-bold leading-relaxed"
          data-testid="text-question"
        >
          {question.text}
        </h2>
        
        <div className="space-y-3 pt-2">
          <Button
            variant={selectedAnswer === 'A' ? 'default' : 'outline'}
            className={`w-full justify-start text-left h-auto py-4 px-6 text-base leading-relaxed whitespace-normal ${
              selectedAnswer === 'A' ? 'ring-2 ring-primary ring-offset-2' : ''
            }`}
            onClick={() => onAnswer('A')}
            data-testid="button-option-a"
          >
            <span className="font-semibold mr-3 shrink-0">A.</span>
            <span>{question.optionA}</span>
          </Button>
          
          <Button
            variant={selectedAnswer === 'B' ? 'default' : 'outline'}
            className={`w-full justify-start text-left h-auto py-4 px-6 text-base leading-relaxed whitespace-normal ${
              selectedAnswer === 'B' ? 'ring-2 ring-primary ring-offset-2' : ''
            }`}
            onClick={() => onAnswer('B')}
            data-testid="button-option-b"
          >
            <span className="font-semibold mr-3 shrink-0">B.</span>
            <span>{question.optionB}</span>
          </Button>
          
          <Button
            variant={selectedAnswer === 'C' ? 'default' : 'outline'}
            className={`w-full justify-start text-left h-auto py-4 px-6 text-base leading-relaxed whitespace-normal ${
              selectedAnswer === 'C' ? 'ring-2 ring-primary ring-offset-2' : ''
            }`}
            onClick={() => onAnswer('C')}
            data-testid="button-option-c"
          >
            <span className="font-semibold mr-3 shrink-0">C.</span>
            <span>{question.optionC}</span>
          </Button>
        </div>
      </div>
    </Card>
  );
}
