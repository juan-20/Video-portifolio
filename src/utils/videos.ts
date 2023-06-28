interface VideoProps {
  id: number;
  title: string;
  description: string;
  url: string;
  date: string;
  thumbnail: string;
  category: "Agências" | "ChatBot" | "Marketing Digital" | "Geração de Leads" | "Mídia Paga";
}

const videos = [
  {
    "id": 1,
    "title": "Como aumentar sua Geração de Leads feat. Traktor (1/1)",
    "description": "",
    "url": "https://www.youtube.com/watch?v=9L9ZkGX1p_k&ab_channel=Leadster-MarketingConversacional",
    "date": "2023-01-01",
    "thumbnail": "https://i.ytimg.com/vi/9L9ZkGX1p_k/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFfyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAQ70SSIZQJG9epFyc-eyBZODsPnw",
    "category": "Agências"
  },
  {
    "id": 2,
    "title": "Como aumentar sua Geração de Leads feat. Traktor",
    "description": "",
    "url": "https://www.youtube.com/watch?v=9L9ZkGX1p_k&ab_channel=Leadster-MarketingConversacional",
    "date": "2023-02-02",
    "thumbnail": "https://i.ytimg.com/vi/9L9ZkGX1p_k/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFfyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAQ70SSIZQJG9epFyc-eyBZODsPnw",
    "category": "ChatBot"
  },
  {
    "id": 3,
    "title": "Como aumentar sua Geração de Leads feat. Traktor",
    "description": "",
    "url": "https://www.youtube.com/watch?v=9L9ZkGX1p_k&ab_channel=Leadster-MarketingConversacional",
    "date": "2023-03-03",
    "thumbnail": "https://i.ytimg.com/vi/9L9ZkGX1p_k/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFfyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAQ70SSIZQJG9epFyc-eyBZODsPnw",
    "category": "Agências"
  },
  {
    "id": 5,
    "title": "Como aumentar sua Geração de Leads feat. Traktor",
    "description": "",
    "url": "https://www.youtube.com/watch?v=9L9ZkGX1p_k&ab_channel=Leadster-MarketingConversacional",
    "date": "2023-05-05",
    "thumbnail": "https://i.ytimg.com/vi/9L9ZkGX1p_k/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFfyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAQ70SSIZQJG9epFyc-eyBZODsPnw",
    "category": "Agências"
  },
  {
    "id": 6,
    "title": "Como aumentar sua Geração de Leads feat. Traktor",
    "description": "",
    "url": "https://www.youtube.com/watch?v=9L9ZkGX1p_k&ab_channel=Leadster-MarketingConversacional",
    "date": "2023-06-06",
    "thumbnail": "https://i.ytimg.com/vi/9L9ZkGX1p_k/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFfyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAQ70SSIZQJG9epFyc-eyBZODsPnw",
    "category": "Agências"
  },
  {
    "id": 4,
    "title": "Como aumentar sua Geração de Leads feat. Traktor",
    "description": "",
    "url": "https://www.youtube.com/watch?v=9L9ZkGX1p_k&ab_channel=Leadster-MarketingConversacional",
    "date": "2023-04-04",
    "thumbnail": "https://i.ytimg.com/vi/9L9ZkGX1p_k/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFfyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAQ70SSIZQJG9epFyc-eyBZODsPnw",
    "category": "Agências"
  },
  {
    "id": 7,
    "title": "Como aumentar sua Geração de Leads feat. Traktor",
    "description": "",
    "url": "https://www.youtube.com/watch?v=9L9ZkGX1p_k&ab_channel=Leadster-MarketingConversacional",
    "date": "2023-07-07",
    "thumbnail": "https://i.ytimg.com/vi/9L9ZkGX1p_k/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFfyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAQ70SSIZQJG9epFyc-eyBZODsPnw",
    "category": "Agências"
  },
  {
    "id": 8,
    "title": "Como aumentar sua Geração de Leads feat. Traktor",
    "description": "",
    "url": "https://www.youtube.com/watch?v=9L9ZkGX1p_k&ab_channel=Leadster-MarketingConversacional",
    "date": "2023-08-08",
    "thumbnail": "https://i.ytimg.com/vi/9L9ZkGX1p_k/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFfyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAQ70SSIZQJG9epFyc-eyBZODsPnw",
    "category": "Agências"
  },
  {
    "id": 9,
    "title": "Como aumentar sua Geração de Leads feat. Traktor",
    "description": "",
    "url": "https://www.youtube.com/watch?v=9L9ZkGX1p_k&ab_channel=Leadster-MarketingConversacional",
    "date": "2023-09-09",
    "thumbnail": "https://i.ytimg.com/vi/9L9ZkGX1p_k/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFfyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAQ70SSIZQJG9epFyc-eyBZODsPnw",
    "category": "Agências"
  },
  {
    "id": 10,
    "title": "Como aumentar sua Geração de Leads feat. Traktor",
    "description": "",
    "url": "https://www.youtube.com/watch?v=9L9ZkGX1p_k&ab_channel=Leadster-MarketingConversacional",
    "date": "2023-10-10",
    "thumbnail": "https://i.ytimg.com/vi/9L9ZkGX1p_k/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFfyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAQ70SSIZQJG9epFyc-eyBZODsPnw",
    "category": "Agências"
  },
  {
    "id": 11,
    "title": "Como aumentar sua Geração de Leads feat. Traktor",
    "description": "",
    "url": "https://www.youtube.com/watch?v=9L9ZkGX1p_k&ab_channel=Leadster-MarketingConversacional",
    "date": "2023-11-11",
    "thumbnail": "https://i.ytimg.com/vi/9L9ZkGX1p_k/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFfyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAQ70SSIZQJG9epFyc-eyBZODsPnw",
    "category": "Agências"
  },

]

export default videos;
   