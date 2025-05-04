# TCG API

Este projeto é um CRUD básico de cartas (Trading Card Game) utilizando **Spring Boot** no backend e **Next.js** com **Tailwind CSS** no frontend.

---

## Tecnologias utilizadas

- **Backend:**
  - Java 17+
  - Spring Boot (Web, DevTools)
  - Jakarta Validation
- **Frontend:**
  - Next.js 14 (App Router)
  - TypeScript
  - Tailwind CSS

---

## Estrutura do Projeto

```
.
├── backend/             # Projeto Spring Boot (pacote base: com.tcg.api)
│   ├── controller/      # Controladores REST
│   ├── service/         # Camada de serviço com regras de negócio
│   ├── repository/      # Interfaces do Spring Data
│   ├── domain/          # Entidades do modelo de domínio
│   ├── dto/             # Data Transfer Objects
│   └── config/          # Configurações (ex: CORS)
│
└── frontend/            # Projeto Next.js
    ├── app/             # Páginas (App Router)
    ├── components/      # Componentes reutilizáveis
    ├── services/        # Comunicação com a API
    └── styles/          # Estilos globais e Tailwind config
```

---

##  Como rodar o projeto

### Backend (Spring Boot)

```bash
cd backend
./mvnw spring-boot:run
```

> A aplicação estará disponível em: http://localhost:8080

### Frontend (Next.js)

```bash
cd frontend
npm install
npm run dev
```

> O frontend estará disponível em: http://localhost:3000

---

## Endpoints da API

Base URL: `http://localhost:8080/api/v1/cartas`
 GET     `/cartas`          Lista todas as cartas             
 GET     `/cartas/{id}`     Busca uma carta pelo ID           
 POST    `/cartas`          Cria uma nova carta               
 PUT     `/cartas/{id}`     Atualiza uma carta existente      
 DELETE  `/cartas/{id}`     Remove uma carta pelo ID          

---


