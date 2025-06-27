
# Movie CRUD - Projeto Spring Boot (Milenna e Luis)

Este projeto é uma API RESTful desenvolvida com **Java 17**, **Spring Boot 3**, e **PostgreSQL** para gerenciar um catálogo de filmes.  
Atende aos requisitos acadêmicos: entidade com pelo menos **7 atributos** (`Long`, `String`, `LocalDate`, `Boolean`).

---

## Tecnologias utilizadas

- Java 17
- Spring Boot 3.1.2
- Maven
- Spring Data JPA
- PostgreSQL
- Hibernate ORM
- Postman (para testes)

---

## Estrutura do Projeto

```
movie-crud-milenna-e-luis/
├── pom.xml
├── src/
│   └── main/
│       ├── java/milenna_e_luis/
│       │   ├── MovieCrudApplication.java
│       │   ├── controllers/
│       │   │   └── MovieController.java
│       │   ├── dtos/
│       │   │   ├── MovieCreateDTO.java
│       │   │   └── MovieUpdateDTO.java
│       │   ├── models/
│       │   │   └── Movie.java
│       │   ├── repositories/
│       │   │   └── MovieRepository.java
│       │   └── services/
│       │       ├── MovieService.java
│       │       ├── impl/
│       │       │   └── MovieServiceImplementation.java
│       │       └── exceptions/
│       │           ├── MovieNotFoundException.java
│       │           └── MovieAlreadyExistsException.java
│       └── resources/
│           └── application.properties
```

---

## Funcionalidades da API

| Ação | Método | URL |
|:--|:--|:--|
| Criar Filme | POST | `/movies` |
| Listar Filmes | GET | `/movies` |
| Buscar Filme por ID | GET | `/movies/{id}` |
| Atualizar Filme | PUT | `/movies/{id}` |
| Deletar Filme | DELETE | `/movies/{id}` |

---

## Como Rodar o Projeto

1. Certifique-se que o **PostgreSQL** está rodando e o banco `moviedb` foi criado.
(Caso não tenha sido criado, segue Script:

-- Inicio

-- Script para criação do BD
CREATE DATABASE moviedb;

CREATE TABLE movie (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    director VARCHAR(255) NOT NULL,
    release_date DATE,
    genre VARCHAR(100),
    available BOOLEAN,
    language VARCHAR(100)
);

-- INSERT

INSERT INTO movie (title, director, release_date, genre, available, language)
VALUES 
('Central do Brasil', 'Walter Salles', '1998-04-03', 'Drama', true, 'Português'),

('Cidade de Deus', 'Fernando Meirelles', '2002-08-30', 'Crime', true, 'Português'),

('Tropa de Elite', 'José Padilha', '2007-10-12', 'Ação', true, 'Português'),

('O Auto da Compadecida', 'Guel Arraes', '2000-09-10', 'Comédia', true, 'Português'),

('Que Horas Ela Volta?', 'Anna Muylaert', '2015-01-25', 'Drama', true, 'Português'),

('Bacurau', 'Kleber Mendonça Filho', '2019-05-15', 'Ficção Científica', true, 'Português'),

('2 Filhos de Francisco', 'Breno Silveira', '2005-08-19', 'Biografia', true, 'Português');

-- Fim

)

2. Altere o `application.properties` com suas credenciais se necessário:

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/moviedb
spring.datasource.username=postgres
spring.datasource.password=postgres
spring.jpa.hibernate.ddl-auto=update
```

3. Rode os comandos:

```bash
mvn clean install -DskipTests
mvn spring-boot:run
```

4. Acesse a API em:

```plaintext
http://localhost:8080
```

---

## Collection Postman Disponível

Você pode importar a Collection `Movie-CRUD-Milenna-Luis.postman_collection.json` para testar os endpoints rapidamente.

---

## Requisitos Atendidos

- Entidade Movie com 7 atributos:
  - `id` (Long)
  - `title` (String)
  - `director` (String)
  - `releaseDate` (LocalDate)
  - `genre` (String)
  - `available` (Boolean)
  - `language` (String)

- Uso de DTOs para criação e atualização.
- Implementação de Services, Controllers, Repository, e Exceptions.
- Documentação e Collection Postman.

---

## Projeto acadêmico desenvolvido por:

- Milenna
- Luis
