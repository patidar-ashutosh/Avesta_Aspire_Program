# 🧱 Clean Architecture

## 🧠 Introduction

Clean Architecture is a way to write software in **layers**, where:

- Core business logic is **independent** of frameworks, DB, or APIs.
- Code is **testable, maintainable, and scalable**.
- Each part has a **single responsibility**.

---

## 🌟 Benefits Of Clean Architecture

Clean Architecture ke benefits kaafi powerful hote hain, especially jab ham long-term maintainable aur scalable software banana chahte ho.

---

### 🧠 1. **Separation of Concerns (SoC)**

Har layer ka apna role hota hai —

- Business logic alag hoti hai
- Database access alag
- HTTP/web layer alag

➡️ Isse code zyada **readable, testable aur maintainable** ban jaata hai.

---

### 🧪 2. **Testability**

Business logic (yaani domain layer) independent hoti hai kisi framework, DB ya web server se.

➡️ Ham easily **unit testing** kar sakte hai bina kisi external dependency ke.

---

### 🔄 3. **Independent of Frameworks**

Hamara core business code kisi bhi framework se tightly coupled nahi hota hai.

➡️ Kal ko agar Express.js se NextJS pe switch karna ho, toh **core logic touch nahi karna padega**.

---

### 🔄 4. **Easier to Replace Technologies**

Chaho toh SQL se NoSQL ya Redis se Kafka switch kar lo —

➡️ Hame bas outer layer ko update karna padega, core untouched rahega.

---

### 🔒 5. **Security & Robustness**

Har layer apna kaam karti hai. Jo cheez controller ko karni chahiye, woh controller hi karega. Business rules koi shortcut nahi lete.

➡️ Isse bugs aur **security loopholes kam hote hain**.

---

### 📈 6. **Scalability**

Architecture easily **scale** ho sakta hai horizontally (multiple teams), aur vertically (more features).

➡️ Teams parallelly kaam kar sakti hain bina ek dusre ke code ko todhe.

---

### 👥 7. **Team Collaboration Friendly**

Front-end, backend, DB, QA — sab apne apne zones mein kaam kar sakte hain without interfering with others.

---

### 🧩 8. **Plug-n-Play Components**

Kal ko hame ek naya payment provider integrate karna ho, toh just usse plug karna padega — no impact on rest of the system.

---

### 🛠️ 9. **Maintenance Cost Down**

Code base bada ho jaaye tab bhi changes **easily track aur manage** ho jaate hain.

---

### 🔄 10. **Business Logic Reusability**

Agar ham CLI app, web app aur background worker team ke alag modules bana rahe hai, toh sab mein ek hi domain logic reuse kar sakte hai.

---

## 🧱 **Basic Layers of Clean Architecture**

Ye ek onion (pyaz) jaisa structure hota hai, jismein alag-alag layers hoti hain:

```
    +---------------------+
    |    Entities         |   👑 Core Business Logic
    +---------------------+
    | Use Cases / Interactors |   🚀 App-specific Logic
    +---------------------+
    | Interface Adapters  |   🎛️ Converters / Controllers
    +---------------------+
    | Frameworks & Drivers|   🌐 Express, DB, etc.
    +---------------------+
```

## 🔁 Core Concepts

| Concept          | Explanation                                                 |
| ---------------- | ----------------------------------------------------------- |
| **Entity**       | Main object of your business logic (e.g. User)              |
| **Use Case**     | Application-specific logic (e.g. CreateUserUseCase)         |
| **Repository**   | Interface to connect to database/storage                    |
| **Controller**   | Entry point for request (HTTP)                              |
| **DTO**          | Data Transfer Object - sanitized request/response           |
| **Mapper**       | Converts between domain ↔ DTO/ORM                           |
| **Domain Layer** | Complete business rules (entities, value objects, services) |

---

## 📁 Folder Structure (Basic)

```
src/
├── modules/
│   └── user/
│       ├── controllers/      ← Handle HTTP
│       ├── dtos/             ← Data Transfer Objects
│       ├── entities/         ← Domain Entities
│       ├── use-cases/        ← Use Case Logic
│       ├── repositories/     ← Interface + In-memory/DB impl
│       ├── mappers/          ← Data mapping helpers
│       └── domain/           ← (Optional) ValueObjects, services
├── shared/
│   ├── errors/               ← AppError
│   ├── utils/                ← Helpers
│   ├── kernel/               ← Base classes/interfaces
│   └── services/             ← Shared services (e.g. mail)
├── config/                   ← App config/env
├── routes.ts                 ← Express Routes
├── app.ts                    ← Express App
└── server.ts                 ← Entry point
```

---

## 📁 `modules/` Folder — **Feature-based Code**

### 🔥 Ye kya hota hai?

- Ye folder hamare **app ke features** ya **domains** ko represent karta hai.
- Har feature (like User, Product, Order, etc.) ka apna ek chhota sa **Clean Architecture** setup hota hai.

### 📦 Inside `modules/`, har feature ka structure ho sakta hai:

```
modules/
└── user/
    ├── entities/          ← Business rules (e.g., User.ts)
    ├── use-cases/         ← Business logic (e.g., CreateUser.ts)
    ├── controllers/       ← Handle HTTP (e.g., UserController.ts)
    ├── repositories/      ← Interface + DB impl (e.g., UserRepo.ts)
    └── dtos/              ← Data Transfer Objects (e.g., CreateUserDTO.ts)
```

### ✅ Fayda?

- Code **modular** hota hai — ek module update karne se doosre pe koi asar nahi.
- Har feature ka **own clean architecture** hota hai.

---

## 📁 `shared/` Folder — **Common Utilities / Base Code**

### 🔧 Ye kya hota hai?

- Wo saari cheezein jo multiple modules mein **reuse** ho sakti hain, unhe yahan rakha jata hai.

### 🔄 Typical cheezein jo `shared/` mein hoti hain:

```
shared/
├── kernel/               ← Base classes/interfaces (e.g., BaseUseCase, Result, Either)
├── utils/                ← Helper functions (e.g., emailValidator, dateUtils)
├── services/             ← Shared services (e.g., Logger, Mailer)
├── errors/               ← Common error classes (e.g., AppError, NotFoundError)
└── types/                ← Global types/interfaces
```

### ✅ Fayda?

- Reusability high hoti hai.
- DRY (Don't Repeat Yourself) principle follow hota hai.
- Common logic ek jagah likha jata hai, har module mein duplicate nahi hota.

---

## 🧱 Important Layers with Examples

### 1. 🧍 Entity / Domain Layer (Core Models)

- Ye hamare **business rules** hote hain.
- Pure logic hota hai — bina kisi database, HTTP, ya third-party dependency ke.
- Example: `User`, `Order`, `Product`, etc. ka core validation.

Location: `modules/user/entities/User.ts`

```ts
export class User {
  constructor(public name: string, public email: string) {}

  isEmailValid(): boolean {
    return this.email.includes("@");
  }
}
```

➡️ Is layer me hamara **business ka core object** hota hai. Yeh kisi bhi framework (jaise Express, DB) se independent hota hai.

---

### 2. 🧠 Use Case Layer / Interactors (Business Logic)

- Business rules ko **execute** karne wali logic hoti hai.
- Ye decide karte hain kya hona chahiye — like "create user", "place order", etc.

Location: `modules/user/use-cases/create-user.usecase.ts`

```ts
import { User } from "../entities/User";
import { IUserRepository } from "../repositories/user.repository";

export class CreateUserUseCase {
  constructor(private repo: IUserRepository) {}

  async execute(data: { name: string; email: string }) {
    const user = new User(data.name, data.email);

    if (!user.isEmailValid()) {
      throw new Error("Invalid email");
    }

    await this.repo.save(user);
    return user;
  }
}
```

➡️ Is layer me hota hai **app ka business logic**, jo entities ko use karta hai aur repositories ko call karta hai.

---

### 3. 📥 Controller Layer / Interface Adapters (Request Handler)

- Ye **conversion layer** hoti hai — data ko use case se controller tak convert karti hai.
- Yahi pe hamara controller ya presenter hoga jo request-response handle karega.

Location: `modules/user/controllers/create-user.controller.ts`

```ts
import { Request, Response } from "express";
import { CreateUserUseCase } from "../use-cases/create-user.usecase";

export class CreateUserController {
  constructor(private useCase: CreateUserUseCase) {}

  async handle(req: Request, res: Response) {
    const user = await this.useCase.execute(req.body);
    return res.status(201).json(user);
  }
}
```

➡️ Ye Express request handle karta hai aur use case ko call karta hai. Isme logic nahi hona chahiye.

---

### 4. 💾 Frameworks & Drivers / Repository Layer (Abstraction of DB)

- Ye sab external cheezein hoti hain — jaise Express.js, MongoDB, PostgreSQL.
- Inhe andar ke logic pe koi effect nahi daalna chahiye.

Location: `modules/user/repositories/user.repository.ts`

```ts
import { User } from "../entities/User";

export interface IUserRepository {
  save(user: User): Promise<void>;
  findByEmail(email: string): Promise<User | null>;
}
```

➡️ Ye layer DB access ka **interface** provide karti hai. Real DB ya in-memory implementation alag banate hain.

---

### 5. 🔀 Mapper Layer (Convert Between Models)

Location: `modules/user/mappers/UserMap.ts`

```ts
import { User } from "../entities/User";

export class UserMap {
  static toDTO(user: User) {
    return {
      name: user.name,
      email: user.email,
    };
  }

  static toDomain(raw: any): User {
    return new User(raw.name, raw.email);
  }
}
```

➡️ Is layer ka kaam hota hai domain model ko **DTO ya DB model me map** karna — aur vice versa.

---

### 6. 🧱 Domain Layer (Entities + Value Objects + Services)

Location: `modules/user/domain/`

Structure:

```
modules/user/domain/
├── entities/
│   └── User.ts
├── value-objects/
│   └── Email.ts
├── services/
│   └── PasswordEncryptor.ts
```

➡️ Ye poora folder hamare **pure business rules** ko contain karta hai.

---

## 🔄 Flow of Data

```
Client → Controller → Use Case → Entity → Repository → DB
       ← Mapper/DTO  ←         ←        ←
```

---

## 🧱 **Clean Architecture Project Structure (Express + TypeScript)**

```
src/
├── modules/                      # 💡 Feature-based code lives here
│   └── user/                     # 👤 Example: User module
│       ├── controllers/          # HTTP request handlers
│       │   └── CreateUserController.ts
│       ├── dtos/                 # Data Transfer Objects
│       │   └── CreateUserDTO.ts
│       ├── entities/             # Business rules (pure logic)
│       │   └── User.ts
│       ├── use-cases/            # Application-specific logic
│       │   └── CreateUserUseCase.ts
│       ├── repositories/         # Interfaces & Implementations
│       │   ├── IUserRepository.ts
│       │   └── UserRepositoryMongo.ts
│       └── index.ts              # Export everything from the module
│
├── shared/                       # 🔁 Common reusable code
│   ├── errors/                   # Custom app errors
│   │   ├── AppError.ts
│   │   └── NotFoundError.ts
│   ├── kernel/                   # Base interfaces (e.g., UseCase)
│   │   └── IBaseUseCase.ts
│   ├── utils/                    # Helpers (e.g., email validator)
│   │   └── validateEmail.ts
│   └── services/                 # Reusable services (e.g., logger, mailer)
│       └── Logger.ts
│
├── config/                       # ⚙️ App config (env, DB, etc.)
│   ├── env.ts
│   └── database.ts
│
├── app.ts                        # Main app setup (Express instance)
├── routes.ts                     # API route mappings
└── server.ts                     # Server listener (entry point)
```

---

## 🔍 Short Explanation of Important Files

| File/Folder               | Role                                          |
| ------------------------- | --------------------------------------------- |
| `User.ts`                 | Entity with validation logic                  |
| `CreateUserUseCase.ts`    | Handles business logic like creating a user   |
| `CreateUserController.ts` | Reads request, calls use case, sends response |
| `UserRepositoryMongo.ts`  | Talks to MongoDB to save/fetch user           |
| `AppError.ts`             | Custom error to throw meaningful messages     |
| `Logger.ts`               | A shared logging service                      |
| `env.ts`                  | Loads `.env` variables safely                 |
| `database.ts`             | MongoDB/Postgres connection logic             |
| `app.ts`                  | Sets up Express middlewares                   |
| `server.ts`               | Starts the server on a port                   |

---

## 🛠️ Example Use Case - Create User

1. **Controller** receives request → `CreateUserController`
2. It calls **Use Case** → `CreateUserUseCase`
3. Use Case creates **Entity** → `User`
4. Calls **Repository** → `InMemoryUserRepo`
5. Returns result to Controller → sends as response

---

## 🔮 Future Enhancements

- Add validation using `class-validator`
- Use `Prisma` or `Mongoose` for DB layer
- Add `Auth` module with JWT
- Add `Services` for mail, notifications
- Write unit tests using `Jest`

---

## 🧠 Tips for Clean Code

- Har ek folder sirf ek responsibility rakhe
- Entity me kabhi DB ka naam mat lo (e.g. `_id`, `createdAt`)
- Use Case should not return raw DB models
- Controller should be thin - zyada logic use case me ho
- Mapper use karo for domain ↔ persistence mapping

---

## ✅ Conclusion

Clean & Scalable architecture bana ne ke liye ham ye roadmap ko har naye feature mein apply kar sakte hai. Jisme hame har module ke liye bas ye layers banani padegi:

- controller
- use-case
- entity
- repository
- mapper (if needed)
