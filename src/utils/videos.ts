import { VideoProps } from "@/types/movie";


// const videos: VideoProps[] = [
//   {
//     "id": 1,
//     "title": "Como aumentar sua Geração de Leads feat. Traktor (1/1)",
//     "description": "Lorem ipsum dolor sit amet. Ut quia quasi ea voluptas beatae id praesentium repellendus est deserunt recusandae est autem excepturi ut sunt galisum. Eum temporibus corrupti aut porro tempore et consequatur harum eos corrupti similique 33 reprehenderit voluptatem est sunt fugiat!",
//     "url": "9L9ZkGX1p_k",
//     "date": "2023-01-01T12:00:00.000Z",
//     "thumbnail": "https://github.com/juan-20/Video-portifolio/blob/main/src/assets/thumbnail.png?raw=true",
//     "category": "Agências",
//     "dowload":  [
//       {
//       "link": "https://raw.githubusercontent.com/juan-20/Video-portifolio/main/public/teste.xlsx",
//       "name": "Spreadsheet",
//       "type": "xls"
//       },
//       {
//       "link": "https://raw.githubusercontent.com/juan-20/Video-portifolio/main/public/teste.docx",
//       "name": "Document",
//       "type": "doc"
//       },
//       {
//       "link": "https://raw.githubusercontent.com/juan-20/Video-portifolio/main/public/Apresentação%20sem%20título.pptx",
//       "name": "Presentation",
//       "type": "ppt"
//       },
//       {
//       "link": "https://github.com/juan-20/Video-portifolio/archive/refs/heads/main.zip",
//       "name": "Folder",
//       "type": "zip"
//       },
//     ],
//   },
//   {
//     "id": 2,
//     "title": "Como aumentar sua Geração de Leads feat. Traktor (2/2)",
//     "description": "Lorem ipsum dolor sit amet. Ut quia quasi ea voluptas beatae id praesentium repellendus est deserunt recusandae est autem excepturi ut sunt galisum. Eum temporibus corrupti aut porro tempore et consequatur harum eos corrupti similique 33 reprehenderit voluptatem est sunt fugiat!",
//     "url": "9L9ZkGX1p_k",
//     "date": "2023-02-02T12:00:00.000Z",
//     "thumbnail": "https://github.com/juan-20/Video-portifolio/blob/main/src/assets/thumbnail.png?raw=true",
//     "category": "ChatBot"
//   },
//   {
//     "id": 3,
//     "title": "Como aumentar sua Geração de Leads feat. Traktor (3/3)",
//     "description": "Lorem ipsum dolor sit amet. Ut quia quasi ea voluptas beatae id praesentium repellendus est deserunt recusandae est autem excepturi ut sunt galisum. Eum temporibus corrupti aut porro tempore et consequatur harum eos corrupti similique 33 reprehenderit voluptatem est sunt fugiat!",
//     "url": "9L9ZkGX1p_k",
//     "date": "2023-03-03T12:00:00.000Z",
//     "thumbnail": "https://github.com/juan-20/Video-portifolio/blob/main/src/assets/thumbnail.png?raw=true",
//     "category": "Agências"
//   },
//   {
//     "id": 5,
//     "title": "Como aumentar sua Geração de Leads feat. Traktor",
//     "description": "Lorem ipsum dolor sit amet. Ut quia quasi ea voluptas beatae id praesentium repellendus est deserunt recusandae est autem excepturi ut sunt galisum. Eum temporibus corrupti aut porro tempore et consequatur harum eos corrupti similique 33 reprehenderit voluptatem est sunt fugiat!",
//     "url": "9L9ZkGX1p_k",
//     "date": "2023-05-05",
//     "thumbnail": "https://github.com/juan-20/Video-portifolio/blob/main/src/assets/thumbnail.png?raw=true",
//     "category": "Mídia Paga"
//   },
//   {
//     "id": 6,
//     "title": "Como aumentar sua Geração de Leads feat. Traktor",
//     "description": "Lorem ipsum dolor sit amet. Ut quia quasi ea voluptas beatae id praesentium repellendus est deserunt recusandae est autem excepturi ut sunt galisum. Eum temporibus corrupti aut porro tempore et consequatur harum eos corrupti similique 33 reprehenderit voluptatem est sunt fugiat!",
//     "url": "9L9ZkGX1p_k",
//     "date": "2023-06-06",
//     "thumbnail": "https://github.com/juan-20/Video-portifolio/blob/main/src/assets/thumbnail.png?raw=true",
//     "category": "Geração de Leads"
//   },
//   {
//     "id": 4,
//     "title": "Como aumentar sua Geração de Leads feat. Traktor",
//     "description": "Lorem ipsum dolor sit amet. Ut quia quasi ea voluptas beatae id praesentium repellendus est deserunt recusandae est autem excepturi ut sunt galisum. Eum temporibus corrupti aut porro tempore et consequatur harum eos corrupti similique 33 reprehenderit voluptatem est sunt fugiat!",
//     "url": "9L9ZkGX1p_k",
//     "date": "2023-04-04",
//     "thumbnail": "https://github.com/juan-20/Video-portifolio/blob/main/src/assets/thumbnail.png?raw=true",
//     "category": "Agências"
//   },
//   {
//     "id": 7,
//     "title": "Como aumentar sua Geração de Leads feat. Traktor",
//     "description": "Lorem ipsum dolor sit amet. Ut quia quasi ea voluptas beatae id praesentium repellendus est deserunt recusandae est autem excepturi ut sunt galisum. Eum temporibus corrupti aut porro tempore et consequatur harum eos corrupti similique 33 reprehenderit voluptatem est sunt fugiat!",
//     "url": "9L9ZkGX1p_k",
//     "date": "2023-07-07",
//     "thumbnail": "https://github.com/juan-20/Video-portifolio/blob/main/src/assets/thumbnail.png?raw=true",
//     "category": "Geração de Leads"
//   },
//   {
//     "id": 8,
//     "title": "Como aumentar sua Geração de Leads feat. Traktor",
//     "description": "Lorem ipsum dolor sit amet. Ut quia quasi ea voluptas beatae id praesentium repellendus est deserunt recusandae est autem excepturi ut sunt galisum. Eum temporibus corrupti aut porro tempore et consequatur harum eos corrupti similique 33 reprehenderit voluptatem est sunt fugiat!",
//     "url": "9L9ZkGX1p_k",
//     "date": "2023-08-08",
//     "thumbnail": "https://github.com/juan-20/Video-portifolio/blob/main/src/assets/thumbnail.png?raw=true",
//     "category": "Marketing Digital"
//   },
//   {
//     "id": 9,
//     "title": "Como aumentar sua Geração de Leads feat. Traktor",
//     "description": "Lorem ipsum dolor sit amet. Ut quia quasi ea voluptas beatae id praesentium repellendus est deserunt recusandae est autem excepturi ut sunt galisum. Eum temporibus corrupti aut porro tempore et consequatur harum eos corrupti similique 33 reprehenderit voluptatem est sunt fugiat!",
//     "url": "9L9ZkGX1p_k",
//     "date": "2023-09-09",
//     "thumbnail": "https://github.com/juan-20/Video-portifolio/blob/main/src/assets/thumbnail.png?raw=true",
//     "category": "Marketing Digital"
//   },
//   {
//     "id": 10,
//     "title": "Como aumentar sua Geração de Leads feat. Traktor",
//     "description": "bjbjbjbjb",
//     "url": "9L9ZkGX1p_k",
//     "date": "2023-10-10",
//     "thumbnail": "https://github.com/juan-20/Video-portifolio/blob/main/src/assets/thumbnail.png?raw=true",
//     "category": "Geração de Leads"
//   },
//   {
//     "id": 11,
//     "title": "Como aumentar sua Geração de Leads feat. Traktor (11/11)",
//     "description": "Lorem ipsum dolor sit amet. Ut quia quasi ea voluptas beatae id praesentium repellendus est deserunt recusandae est autem excepturi ut sunt galisum. Eum temporibus corrupti aut porro tempore et consequatur harum eos corrupti similique 33 reprehenderit voluptatem est sunt fugiat!",
//     "url": "9L9ZkGX1p_k",
//     "date": "2023-11-11",
//     "thumbnail": "https://github.com/juan-20/Video-portifolio/blob/main/src/assets/thumbnail.png?raw=true",
//     "category": "Marketing Digital"
//   },
//   {
//     "id": 12,
//     "title": "Como aumentar sua Geração de Leads feat. Traktor (12/12)",
//     "description": "Lorem ipsum dolor sit amet. Ut quia quasi ea voluptas beatae id praesentium repellendus est deserunt recusandae est autem excepturi ut sunt galisum. Eum temporibus corrupti aut porro tempore et consequatur harum eos corrupti similique 33 reprehenderit voluptatem est sunt fugiat!",
//     "url": "9L9ZkGX1p_k",
//     "date": "2023-12-12",
//     "thumbnail": "https://github.com/juan-20/Video-portifolio/blob/main/src/assets/thumbnail.png?raw=true",
//     "category": "Marketing Digital"
//   },
//   {
//     "id": 13,
//     "title": "Como aumentar sua Geração de Leads feat. Traktor (13/13)",
//     "description": "Lorem ipsum dolor sit amet. Ut quia quasi ea voluptas beatae id praesentium repellendus est deserunt recusandae est autem excepturi ut sunt galisum. Eum temporibus corrupti aut porro tempore et consequatur harum eos corrupti similique 33 reprehenderit voluptatem est sunt fugiat!",
//     "url": "9L9ZkGX1p_k",
//     "date": "2023-12-15",
//     "thumbnail": "https://github.com/juan-20/Video-portifolio/blob/main/src/assets/thumbnail.png?raw=true",
//     "category": "Geração de Leads"
//   },
//   {
//     "id": 14,
//     "title": "Como aumentar sua Geração de Leads feat. Traktor",
//     "description": "Lorem ipsum dolor sit amet. Ut quia quasi ea voluptas beatae id praesentium repellendus est deserunt recusandae est autem excepturi ut sunt galisum. Eum temporibus corrupti aut porro tempore et consequatur harum eos corrupti similique 33 reprehenderit voluptatem est sunt fugiat!",
//     "url": "9L9ZkGX1p_k",
//     "date": "2023-12-18",
//     "thumbnail": "https://github.com/juan-20/Video-portifolio/blob/main/src/assets/thumbnail.png?raw=true",
//     "category": "ChatBot"
//   },
//   {
//     "id": 15,
//     "title": "Como aumentar sua Geração de Leads feat. Traktor",
//     "description": "Lorem ipsum dolor sit amet. Ut quia quasi ea voluptas beatae id praesentium repellendus est deserunt recusandae est autem excepturi ut sunt galisum. Eum temporibus corrupti aut porro tempore et consequatur harum eos corrupti similique 33 reprehenderit voluptatem est sunt fugiat!",
//     "url": "9L9ZkGX1p_k",
//     "date": "2023-12-21",
//     "thumbnail": "https://github.com/juan-20/Video-portifolio/blob/main/src/assets/thumbnail.png?raw=true",
//     "category": "ChatBot"
//   },
//   {
//     "id": 16,
//     "title": "Como aumentar sua Geração de Leads feat. Traktor",
//     "description": "Lorem ipsum dolor sit amet. Ut quia quasi ea voluptas beatae id praesentium repellendus est deserunt recusandae est autem excepturi ut sunt galisum. Eum temporibus corrupti aut porro tempore et consequatur harum eos corrupti similique 33 reprehenderit voluptatem est sunt fugiat!",
//     "url": "9L9ZkGX1p_k",
//     "date": "2023-12-24",
//     "thumbnail": "https://github.com/juan-20/Video-portifolio/blob/main/src/assets/thumbnail.png?raw=true",
//     "category": "Mídia Paga"
//   },
//   {
//     "id": 17,
//     "title": "Como aumentar sua Geração de Leads feat. Traktor",
//    "description": "Lorem ipsum dolor sit amet. Ut quia quasi ea voluptas beatae id praesentium repellendus est deserunt recusandae est autem excepturi ut sunt galisum. Eum temporibus corrupti aut porro tempore et consequatur harum eos corrupti similique 33 reprehenderit voluptatem est sunt fugiat!",
//     "url": "9L9ZkGX1p_k",
//     "date": "2024-01-10",
//     "thumbnail": "https://github.com/juan-20/Video-portifolio/blob/main/src/assets/thumbnail.png?raw=true",
//     "category": "Marketing Digital"
//   },
//   {
//     "id": 18,
//     "title": "Como aumentar sua Geração de Leads feat. Traktor",
//    "description": "Lorem ipsum dolor sit amet. Ut quia quasi ea voluptas beatae id praesentium repellendus est deserunt recusandae est autem excepturi ut sunt galisum. Eum temporibus corrupti aut porro tempore et consequatur harum eos corrupti similique 33 reprehenderit voluptatem est sunt fugiat!",
//     "url": "9L9ZkGX1p_k",
//     "date": "2024-01-01",
//     "thumbnail": "https://github.com/juan-20/Video-portifolio/blob/main/src/assets/thumbnail.png?raw=true",
//     "category": "Marketing Digital"
//   },
//   {
//     "id": 19,
//     "title": "Como aumentar sua Geração de Leads feat. Traktor",
//    "description": "Lorem ipsum dolor sit amet. Ut quia quasi ea voluptas beatae id praesentium repellendus est deserunt recusandae est autem excepturi ut sunt galisum. Eum temporibus corrupti aut porro tempore et consequatur harum eos corrupti similique 33 reprehenderit voluptatem est sunt fugiat!",
//     "url": "9L9ZkGX1p_k",
//     "date": "2024-01-02",
//     "thumbnail": "https://github.com/juan-20/Video-portifolio/blob/main/src/assets/thumbnail.png?raw=true",
//     "category": "Marketing Digital"
//   },
//   {
//     "id": 20,
//     "title": "Como aumentar sua Geração de Leads feat. Traktor",
//    "description": "Lorem ipsum dolor sit amet. Ut quia quasi ea voluptas beatae id praesentium repellendus est deserunt recusandae est autem excepturi ut sunt galisum. Eum temporibus corrupti aut porro tempore et consequatur harum eos corrupti similique 33 reprehenderit voluptatem est sunt fugiat!",
//     "url": "9L9ZkGX1p_k",
//     "date": "2024-01-03",
//     "thumbnail": "https://github.com/juan-20/Video-portifolio/blob/main/src/assets/thumbnail.png?raw=true",
//     "category": "Marketing Digital"
//   },
//   {
//     "id": 21,
//     "title": "Como aumentar sua Geração de Leads feat. Traktor",
//    "description": "Lorem ipsum dolor sit amet. Ut quia quasi ea voluptas beatae id praesentium repellendus est deserunt recusandae est autem excepturi ut sunt galisum. Eum temporibus corrupti aut porro tempore et consequatur harum eos corrupti similique 33 reprehenderit voluptatem est sunt fugiat!",
//     "url": "9L9ZkGX1p_k",
//     "date": "2024-01-04",
//     "thumbnail": "https://github.com/juan-20/Video-portifolio/blob/main/src/assets/thumbnail.png?raw=true",
//     "category": "Marketing Digital"
//   },
//   {
//     "id": 22,
//     "title": "Como aumentar sua Geração de Leads feat. Traktor",
//    "description": "Lorem ipsum dolor sit amet. Ut quia quasi ea voluptas beatae id praesentium repellendus est deserunt recusandae est autem excepturi ut sunt galisum. Eum temporibus corrupti aut porro tempore et consequatur harum eos corrupti similique 33 reprehenderit voluptatem est sunt fugiat!",
//     "url": "9L9ZkGX1p_k",
//     "date": "2024-01-05",
//     "thumbnail": "https://github.com/juan-20/Video-portifolio/blob/main/src/assets/thumbnail.png?raw=true",
//     "category": "Marketing Digital"
//   },
//   {
//     "id": 23,
//     "title": "Como aumentar sua Geração de Leads feat. Traktor",
//    "description": "Lorem ipsum dolor sit amet. Ut quia quasi ea voluptas beatae id praesentium repellendus est deserunt recusandae est autem excepturi ut sunt galisum. Eum temporibus corrupti aut porro tempore et consequatur harum eos corrupti similique 33 reprehenderit voluptatem est sunt fugiat!",
//     "url": "9L9ZkGX1p_k",
//     "date": "2024-01-06",
//     "thumbnail": "https://github.com/juan-20/Video-portifolio/blob/main/src/assets/thumbnail.png?raw=true",
//     "category": "Marketing Digital"
//   },
//   {
//     "id": 24,
//     "title": "Como aumentar sua Geração de Leads feat. Traktor",
//    "description": "Lorem ipsum dolor sit amet. Ut quia quasi ea voluptas beatae id praesentium repellendus est deserunt recusandae est autem excepturi ut sunt galisum. Eum temporibus corrupti aut porro tempore et consequatur harum eos corrupti similique 33 reprehenderit voluptatem est sunt fugiat!",
//     "url": "9L9ZkGX1p_k",
//     "date": "2024-01-07",
//     "thumbnail": "https://github.com/juan-20/Video-portifolio/blob/main/src/assets/thumbnail.png?raw=true",
//     "category": "Marketing Digital"
//   },
//   {
//     "id": 25,
//     "title": "Como aumentar sua Geração de Leads feat. Traktor (25/25)",
//    "description": "Lorem ipsum dolor sit amet. Ut quia quasi ea voluptas beatae id praesentium repellendus est deserunt recusandae est autem excepturi ut sunt galisum. Eum temporibus corrupti aut porro tempore et consequatur harum eos corrupti similique 33 reprehenderit voluptatem est sunt fugiat!",
//     "url": "9L9ZkGX1p_k",
//     "date": "2024-01-08",
//     "thumbnail": "https://github.com/juan-20/Video-portifolio/blob/main/src/assets/thumbnail.png?raw=true",
//     "category": "Marketing Digital"
//   },
//   {
//     "id": 26,
//     "title": "Como aumentar sua Geração de Leads feat. Traktor",
//    "description": "Lorem ipsum dolor sit amet. Ut quia quasi ea voluptas beatae id praesentium repellendus est deserunt recusandae est autem excepturi ut sunt galisum. Eum temporibus corrupti aut porro tempore et consequatur harum eos corrupti similique 33 reprehenderit voluptatem est sunt fugiat!",
//     "url": "9L9ZkGX1p_k",
//     "date": "2024-01-09",
//     "thumbnail": "https://github.com/juan-20/Video-portifolio/blob/main/src/assets/thumbnail.png?raw=true",
//     "category": "Marketing Digital"
//   },
//   {
//     "id": 27,
//     "title": "Como aumentar sua Geração de Leads feat. Traktor",
//    "description": "Lorem ipsum dolor sit amet. Ut quia quasi ea voluptas beatae id praesentium repellendus est deserunt recusandae est autem excepturi ut sunt galisum. Eum temporibus corrupti aut porro tempore et consequatur harum eos corrupti similique 33 reprehenderit voluptatem est sunt fugiat!",
//     "url": "9L9ZkGX1p_k",
//     "date": "2024-01-10",
//     "thumbnail": "https://github.com/juan-20/Video-portifolio/blob/main/src/assets/thumbnail.png?raw=true",
//     "category": "Marketing Digital"
//   },
//   {
//     "id": 28,
//     "title": "Como aumentar sua Geração de Leads feat. Traktor",
//    "description": "Lorem ipsum dolor sit amet. Ut quia quasi ea voluptas beatae id praesentium repellendus est deserunt recusandae est autem excepturi ut sunt galisum. Eum temporibus corrupti aut porro tempore et consequatur harum eos corrupti similique 33 reprehenderit voluptatem est sunt fugiat!",
//     "url": "9L9ZkGX1p_k",
//     "date": "2024-01-10",
//     "thumbnail": "https://github.com/juan-20/Video-portifolio/blob/main/src/assets/thumbnail.png?raw=true",
//     "category": "Marketing Digital"
//   },
//   {
//     "id": 29,
//     "title": "Como aumentar sua Geração de Leads feat. Traktor",
//    "description": "Lorem ipsum dolor sit amet. Ut quia quasi ea voluptas beatae id praesentium repellendus est deserunt recusandae est autem excepturi ut sunt galisum. Eum temporibus corrupti aut porro tempore et consequatur harum eos corrupti similique 33 reprehenderit voluptatem est sunt fugiat!",
//     "url": "9L9ZkGX1p_k",
//     "date": "2024-01-11",
//     "thumbnail": "https://github.com/juan-20/Video-portifolio/blob/main/src/assets/thumbnail.png?raw=true",
//     "category": "Marketing Digital"
//   },
//   {
//     "id": 30,
//     "title": "Como aumentar sua Geração de Leads feat. Traktor",
//    "description": "Lorem ipsum dolor sit amet. Ut quia quasi ea voluptas beatae id praesentium repellendus est deserunt recusandae est autem excepturi ut sunt galisum. Eum temporibus corrupti aut porro tempore et consequatur harum eos corrupti similique 33 reprehenderit voluptatem est sunt fugiat!",
//     "url": "9L9ZkGX1p_k",
//     "date": "2024-01-12",
//     "thumbnail": "https://github.com/juan-20/Video-portifolio/blob/main/src/assets/thumbnail.png?raw=true",
//     "category": "Marketing Digital"
//   },
//   {
//     "id": 31,
//     "title": "Como aumentar sua Geração de Leads feat. Traktor",
//    "description": "Lorem ipsum dolor sit amet. Ut quia quasi ea voluptas beatae id praesentium repellendus est deserunt recusandae est autem excepturi ut sunt galisum. Eum temporibus corrupti aut porro tempore et consequatur harum eos corrupti similique 33 reprehenderit voluptatem est sunt fugiat!",
//     "url": "9L9ZkGX1p_k",
//     "date": "2024-01-13",
//     "thumbnail": "https://github.com/juan-20/Video-portifolio/blob/main/src/assets/thumbnail.png?raw=true",
//     "category": "Marketing Digital"
//   },
//   {
//     "id": 32,
//     "title": "Como aumentar sua Geração de Leads feat. Traktor",
//    "description": "Lorem ipsum dolor sit amet. Ut quia quasi ea voluptas beatae id praesentium repellendus est deserunt recusandae est autem excepturi ut sunt galisum. Eum temporibus corrupti aut porro tempore et consequatur harum eos corrupti similique 33 reprehenderit voluptatem est sunt fugiat!",
//     "url": "9L9ZkGX1p_k",
//     "date": "2024-01-14",
//     "thumbnail": "https://github.com/juan-20/Video-portifolio/blob/main/src/assets/thumbnail.png?raw=true",
//     "category": "Marketing Digital"
//   },
//   {
//     "id": 33,
//     "title": "Como aumentar sua Geração de Leads feat. Traktor",
//    "description": "Lorem ipsum dolor sit amet. Ut quia quasi ea voluptas beatae id praesentium repellendus est deserunt recusandae est autem excepturi ut sunt galisum. Eum temporibus corrupti aut porro tempore et consequatur harum eos corrupti similique 33 reprehenderit voluptatem est sunt fugiat!",
//     "url": "9L9ZkGX1p_k",
//     "date": "2024-01-15",
//     "thumbnail": "https://github.com/juan-20/Video-portifolio/blob/main/src/assets/thumbnail.png?raw=true",
//     "category": "Marketing Digital"
//   },
//   {
//     "id": 34,
//     "title": "Como aumentar sua Geração de Leads feat. Traktor",
//    "description": "Lorem ipsum dolor sit amet. Ut quia quasi ea voluptas beatae id praesentium repellendus est deserunt recusandae est autem excepturi ut sunt galisum. Eum temporibus corrupti aut porro tempore et consequatur harum eos corrupti similique 33 reprehenderit voluptatem est sunt fugiat!",
//     "url": "9L9ZkGX1p_k",
//     "date": "2024-01-16",
//     "thumbnail": "https://github.com/juan-20/Video-portifolio/blob/main/src/assets/thumbnail.png?raw=true",
//     "category": "Marketing Digital"
//   },
//   {
//     "id": 35,
//     "title": "Como aumentar sua Geração de Leads feat. Traktor",
//    "description": "Lorem ipsum dolor sit amet. Ut quia quasi ea voluptas beatae id praesentium repellendus est deserunt recusandae est autem excepturi ut sunt galisum. Eum temporibus corrupti aut porro tempore et consequatur harum eos corrupti similique 33 reprehenderit voluptatem est sunt fugiat!",
//     "url": "9L9ZkGX1p_k",
//     "date": "2024-01-17",
//     "thumbnail": "https://github.com/juan-20/Video-portifolio/blob/main/src/assets/thumbnail.png?raw=true",
//     "category": "Marketing Digital"
//   },
//   {
//     "id": 36,
//     "title": "Como aumentar sua Geração de Leads feat. Traktor (36/36)",
//    "description": "Lorem ipsum dolor sit amet. Ut quia quasi ea voluptas beatae id praesentium repellendus est deserunt recusandae est autem excepturi ut sunt galisum. Eum temporibus corrupti aut porro tempore et consequatur harum eos corrupti similique 33 reprehenderit voluptatem est sunt fugiat!",
//     "url": "9L9ZkGX1p_k",
//     "date": "2024-01-18",
//     "thumbnail": "https://github.com/juan-20/Video-portifolio/blob/main/src/assets/thumbnail.png?raw=true",
//     "category": "Marketing Digital"
//   },

// ]

// export default videos;
   