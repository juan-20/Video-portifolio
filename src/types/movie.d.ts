export interface VideoProps {
  id: number;
  title: string;
  description: string;
  url: string;
  date: string;
  thumbnail: {
    alt: string;
    asset: {
    _ref: string;
    }
  };
  category: "Agências" | "ChatBot" | "Marketing Digital" | "Geração de Leads" | "Mídia Paga";
  dowload?: DowloadProps[]
}

interface VideoId {
  _type: string;
  current: string;
}

interface DowloadProps {
  name: string,
  type: 'doc' | 'ppt' | 'xls' | 'zip'
  link: string
}