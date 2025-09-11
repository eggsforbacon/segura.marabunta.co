

export interface Protocol {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  textColor: string;
  bgColor: string;
  darkBgColor: string;
  hazards: string[];
  steps: {
    antes: string[];
    durante: string[];
    despues: string[];
  };
}


