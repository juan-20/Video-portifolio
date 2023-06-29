export interface VideoProps {
  id: number;
  title: string;
  description: string;
  url: string;
  date: string;
  thumbnail: 'https://github.com/juan-20/Video-portifolio/blob/main/src/assets/thumbnail.png?raw=true';
  category: "Agências" | "ChatBot" | "Marketing Digital" | "Geração de Leads" | "Mídia Paga";
  dowload?: DowloadProps[]
}

interface DowloadProps {
  name: string,
  type: 'doc' | 'ppt' | 'xls' | 'zip'
  link: string
}