# Restaurante Japonês - Frontend

## Descrição
Site para restaurante japonês com apresentação do cardápio e localização do estabelecimento.

## Tecnologias
- React 19.2.0
- TypeScript 5.6.3
- Vite 5.4.11
- TailwindCSS 3.4.14
- React Router DOM 7.9.3
- TanStack Query 5.90.2
- Axios 1.12.2

## Estrutura do Projeto
```
src/
├── app/                    # Configuração da aplicação
│   ├── App.tsx            # Componente raiz
│   ├── providers.tsx      # Provedores globais
│   └── router.tsx         # Configuração de rotas
├── pages/                 # Páginas da aplicação
│   ├── layouts/          # Layouts compartilhados
│   ├── Home/             # Página inicial
│   └── NotFound/         # Página 404
├── domain/               # Domínios de negócio
├── core/                 # Componentes e utilitários compartilhados
│   ├── components/       # Componentes genéricos
│   ├── lib/             # Configurações de bibliotecas
│   ├── utils/           # Funções utilitárias
│   └── types/           # Tipos globais
└── assets/              # Recursos estáticos
    └── styles/          # Estilos globais
```

## Instalação
```bash
npm install
```

## Configuração
1. Copie o arquivo `.env.example` para `.env`
2. Configure as variáveis de ambiente:
```
VITE_API_URL=http://localhost:3000
VITE_API_VERSION=v1
VITE_API_TIMEOUT=30000
```

## Desenvolvimento
```bash
npm run dev
```

## Build
```bash
npm run build
```

## Preview
```bash
npm run preview
```

## Lint
```bash
npm run lint
```

## Arquitetura
O projeto segue uma arquitetura modular baseada em domínios:
- **app/**: Configuração e inicialização da aplicação
- **pages/**: Componentes de página para roteamento
- **domain/**: Lógica de negócio organizada por domínio
- **core/**: Componentes e utilitários reutilizáveis
- **assets/**: Recursos estáticos (estilos, imagens, etc.)

## Padrões de Código
- TypeScript strict mode habilitado
- Componentes funcionais com hooks
- Path alias `@/` para imports absolutos
- TailwindCSS para estilização
- React Query para gerenciamento de estado do servidor
- Axios para requisições HTTP

## API Integration
O projeto está configurado para integrar com a API REST:
- **Public endpoints**: `/api/v1/external/`
- **Authenticated endpoints**: `/api/v1/internal/`

Clientes HTTP configurados:
- `publicClient`: Para endpoints públicos
- `authenticatedClient`: Para endpoints autenticados (com token)

## Contribuição
1. Crie uma branch para sua feature
2. Faça commit das mudanças
3. Abra um Pull Request