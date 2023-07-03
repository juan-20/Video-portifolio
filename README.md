This is a [Next.js](https://nextjs.org/) project.

## Getting Started

First, run the development server:

```bash
npm install

npm run dev
```

## Test

```bash
npx playwright test
```

## API by Sanity

i`ve sent an invite to the email of andre@leadster.com.br. To add a new user, just go to the [sanity studio](http://localhost:3333) and add a new user in POST.

## Deploy on Vercel

The project is deployed on Vercel, you can access it [here](https://video-portifolio.vercel.app/).

## Decisões tomadas

Realizei o código usando tailwind devido sua práticidade e rapidez, além de ser uma ferramenta que eu já tinha conhecimento, além de sua refêrencia na vaga. Inicialmente criei um JSON que era usado e após isso fiz uma integração com Sanity para maior escalabilidade do código. Utilizei o playwright para realizar os testes por ser rápido e simples de se ultilizar.

## Organização do código

O código está organizado no padrão do next 13. Com os arquivos de pages, components, styles e public. Além disso, criei uma pasta de utils para colocar os arquivos de sanity e uma pasta de e2e e sanity para os testes e os schemas.