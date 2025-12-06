import AgeCard from "./AgeCard";
import { ageGroupInfo, type AgeGroup } from "@/lib/mbti-data";

interface AgeSelectionProps {
  selectedAge?: AgeGroup;
  onSelect: (age: AgeGroup) => void;
}

export default function AgeSelection({ selectedAge, onSelect }: AgeSelectionProps) {
  const ageGroups: AgeGroup[] = ['elementary', 'middle', 'high'];
  
  return (
    <section className="py-12">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
            학년을 선택해주세요
          </h2>
          <p className="text-muted-foreground">
            나이에 맞는 질문으로 더 정확한 결과를 알 수 있어요
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {ageGroups.map((age) => (
            <AgeCard
              key={age}
              ageGroup={age}
              label={ageGroupInfo[age].label}
              subtitle={ageGroupInfo[age].subtitle}
              isSelected={selectedAge === age}
              onClick={() => onSelect(age)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
