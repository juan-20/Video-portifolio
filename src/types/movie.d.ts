export interface VideoProps {
  numerVideo: number;
  title: string;
  description: string;
  url: string;
  thumbnail: {
    alt: string;
    asset: {
    _ref: string;
    }
  };
  category: "Agências" | "ChatBot" | "Marketing Digital" | "Geração de Leads" | "Mídia Paga";
  download?: DowloadProps[]
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