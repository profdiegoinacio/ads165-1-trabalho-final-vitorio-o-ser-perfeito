# TowerPad

TowerPad é um aplicativo desenvolvido para facilitar a comunicação entre os moradores de um prédio, oferecendo uma plataforma digital para o compartilhamento de avisos, sugestões e reclamações de forma organizada e acessível. A aplicação foi desenvolvida utilizando **Spring Boot, React, MySQL e Postman**, proporcionando uma arquitetura robusta, escalável e de fácil manutenção.

---

## 🛠️ Tecnologias Utilizadas

- **Backend:** Spring Boot  
- **Frontend:** React.js  
- **Banco de Dados:** MySQL  
- **Testes de API:** Postman  
- **Segurança:** JWT para autenticação e criptografia de dados.  
- **Notificações:** Notificações automáticas via WebSockets ou Firebase Cloud Messaging.

---

## 🎯 Estrutura do Projeto

/towerpad  
│── .idea/  
│── backend/  
│   ├── .mvn/  
│   ├── src/  
│   │   ├── main/  
│   │   │   └── java/  
│   │   │       └── com/  
│   │   │           └── upf/  
│   │   │               └── backend/  
│   │   │                   ├── controller/  
│   │   │                   │   └── UserController.java  
│   │   │                   ├── exception/  
│   │   │                   │   ├── UserNotFoundAdvice.java  
│   │   │                   │   └── UserNotFoundException.java  
│   │   │                   ├── model/  
│   │   │                   │   └── User.java  
│   │   │                   ├── repository/  
│   │   │                   │   └── UserRepository.java  
│   │   │                   └── BackendApplication.java  
│   │   └── resources/  
│   │       └── application.properties  
│   ├── test/  
│   ├── target/  
│   ├── HELP.md  
│   ├── mvnw  
│   ├── mvnw.cmd  
│   └── pom.xml  
│── frontend/  
│   ├── node_modules/  
│   ├── public/  
│   ├── src/  
│   │   ├── layout/  
│   │   │   └── Navbar.js  
│   │   ├── pages/  
│   │   │   └── Home.js  
│   │   ├── users/  
│   │   │   ├── AddUser.js  
│   │   │   └── EditUser.js  
│   │   ├── App.js  
│   │   ├── App.css  
│   │   ├── App.test.js  
│   │   ├── index.js  
│   │   ├── index.css  
│   │   ├── logo.svg  
│   │   ├── reportWebVitals.js  
│   │   └── setupTests.js  
│   ├── package.json  
│   ├── package-lock.json  
│   └── .gitignore  
│── database/  
│   └── towerpad.sql  
│── .gitignore  
│── README.md  
│── .env  

---

## ⚡ Instalação

- Clone o repositório:

```
git clone https://github.com/usuario/towerpad.git
cd towerpad
```
---

- Configuração do Banco de Dados

  Crie um banco de dados towerpad.

  Importe o arquivo database/towerpad.sql.

- Backend

Acesse a pasta do backend:
```
cd backend
```

- Configure o banco de dados em src/main/resources/application.properties:
```
spring.datasource.url=jdbc:mysql://localhost:3306/towerpad
spring.datasource.username=SEU_USUARIO
spring.datasource.password=SUA_SENHA

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

- Instale as dependências e inicie o servidor:
```
mvn install
mvn spring-boot:run
```

- Frontend

Acesse a pasta do frontend:
```
cd frontend
```

  Instale as dependências:
```
npm install
```

  Inicie o servidor:
```
npm start
```
