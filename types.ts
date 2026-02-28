
export interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface BusinessModel {
  title: string;
  price: string;
  features: string[];
  target: string;
  margin: string;
  count: string;
}

export interface Partner {
  name: string;
  logo: string;
}
