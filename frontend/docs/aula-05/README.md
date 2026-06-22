# Aula 05 - Estrutura visual, estilos e rotas

## Objetivo da aula

Nesta aula vamos montar a primeira versão visual do sistema DenkenHub com React + TypeScript. O foco é construir a tela de equipamentos a partir do Figma, organizar os componentes em pastas, usar `styled-components` e criar rotas simples com um layout compartilhado.

Nesta etapa, a prioridade não é regra de negócio. A prioridade é o aluno entender como a interface é montada.

Ao final da aula, os alunos devem entender:

- Como criar rotas com `react-router-dom`.
- Como compartilhar o mesmo layout entre páginas.
- Como separar uma feature em `components`, `pages`, `mocks` e `types`.
- Como criar componentes com `index.tsx` e `styles.ts`.
- Como usar `styled-components` de forma simples.
- Como usar Ant Design como base visual.
- Como usar Material Icons em botões, cards, menu e tabela.
- Como alimentar uma tela com mocks simples.

## Escopo da Aula 05

O que faz parte desta aula:

- Layout geral da aplicação com `Sidebar`, `Header` e área de conteúdo.
- Rota `/equipment`.
- Rota `/locations`.
- Página simples de localizações para demonstrar navegação.
- Tela visual de equipamentos.
- Cards de resumo.
- Filtros visuais.
- Tabela visual.
- Mocks simples.
- Estilos com `styled-components`.

O que fica para a Aula 06:

- Filtros funcionando de verdade.
- Formulário de novo equipamento.
- Ações reais da tabela.
- Tela de detalhes.
- Integração com API.
- Backend, autenticação e persistência.

## Estrutura de pastas

```txt
frontend/src
├── app
│   ├── App.tsx
│   ├── routes.tsx
│   ├── layout
│   │   ├── AppLayout
│   │   └── components
│   │       ├── Header
│   │       └── Sidebar
│   ├── styles
│   │   └── global.css
│   └── theme
│       └── appTheme.ts
└── features
    ├── equipment
    │   ├── components
    │   ├── mocks
    │   ├── pages
    │   └── types
    └── locations
        └── pages
```

## Padrão dos componentes

Cada componente fica em uma pasta própria:

```txt
NomeDoComponente
├── index.tsx
└── styles.ts
```

Exemplo:

```txt
frontend/src/features/equipment/components/EquipmentFilters
├── index.tsx
└── styles.ts
```

Use esta explicação em aula:

> O `index.tsx` mostra a estrutura e a lógica simples. O `styles.ts` mostra a aparência. Separar assim ajuda a turma a encontrar cada parte do componente.

## Estilos globais

O arquivo global ficou propositalmente simples:

```txt
frontend/src/app/styles/global.css
```

Ele contém apenas:

- `box-sizing`.
- estilos básicos do `body`.
- fonte padrão.
- herança de fonte para campos e botões.

As cores ficam diretamente nos `styles.ts` dos componentes. Isso deixa mais fácil para alunos iniciantes enxergarem de onde vem cada cor.

## Tema do Ant Design

O arquivo abaixo guarda a configuração do Ant Design:

```txt
frontend/src/app/theme/appTheme.ts
```

Ele define a cor primária, fonte, bordas e ajustes básicos de componentes como `Button`, `Card` e `Table`.

## Rotas criadas

Arquivo:

```txt
frontend/src/app/routes.tsx
```

Rotas da Aula 05:

```txt
/equipment
/locations
```

A rota `/` redireciona para `/equipment`.

A rota `/locations` existe para mostrar que o mesmo layout pode ser reutilizado por outra página, mesmo que a tela ainda tenha apenas um texto simples.

## Layout compartilhado

Pasta:

```txt
frontend/src/app/layout
```

Componentes:

- `AppLayout`: monta a estrutura com sidebar, header e conteúdo.
- `Sidebar`: menu lateral com os links do sistema.
- `Header`: barra superior com o nome da página atual.

Ponto importante:

> O layout fica em `app` porque ele pertence à aplicação inteira, não somente à feature de equipamentos.

## Feature de equipamentos

Pasta:

```txt
frontend/src/features/equipment
```

Principais partes:

- `pages/EquipmentPage`: página principal da feature.
- `components/PageHeader`: título, descrição e botão principal.
- `components/SummaryCards`: cards de resumo.
- `components/EquipmentFilters`: filtros visuais.
- `components/EquipmentTable`: tabela visual.
- `components/StatusBadge`: tag visual de status.
- `mocks/equipment.mock.ts`: dados simples para renderizar a tela.
- `types/equipment.ts`: tipos usados na feature.

## Feature de localizações

Pasta:

```txt
frontend/src/features/locations
```

Nesta aula, a página de localizações é propositalmente simples. Ela serve para demonstrar:

- criação de uma nova rota;
- reaproveitamento do `AppLayout`;
- troca do item ativo no menu lateral;
- troca do texto no header.

## Roteiro sugerido da aula

1. Abrir o Figma e identificar as áreas da tela.
2. Mostrar `App.tsx` e explicar os providers.
3. Mostrar `routes.tsx` e explicar `/equipment` e `/locations`.
4. Mostrar `AppLayout`, `Sidebar` e `Header`.
5. Abrir `/equipment` no navegador.
6. Mostrar a estrutura da feature de equipamentos.
7. Mostrar os mocks.
8. Mostrar `PageHeader`.
9. Mostrar `SummaryCards`.
10. Mostrar `EquipmentFilters`.
11. Mostrar `EquipmentTable`.
12. Mostrar `StatusBadge`.
13. Abrir `/locations` e mostrar que o layout foi reaproveitado.
14. Revisar a organização dos arquivos.

## Checklist para os alunos

Ao final da aula, os alunos devem conseguir responder:

- Onde ficam as rotas?
- Onde fica o layout compartilhado?
- Qual arquivo cria o menu lateral?
- Qual arquivo cria o header?
- Como a página de equipamentos usa o layout?
- Onde estão os mocks?
- Por que cada componente tem `index.tsx` e `styles.ts`?
- Onde estão os estilos globais?
- Por que usamos `styled-components` nos componentes?

## Comandos úteis

Rodar o projeto:

```bash
cd frontend
npm run dev
```

Verificar lint:

```bash
cd frontend
npm run lint
```

Gerar build:

```bash
cd frontend
npm run build
```
