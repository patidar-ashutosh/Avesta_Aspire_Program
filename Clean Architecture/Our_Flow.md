```
┌───────────────────────────────────────────────────────────────────────┐
│                        INFRASTRUCTURE LAYER (5th Layer)               │
│                                                                       │
│   └── repositories/               # Implementations of repo interfaces│
└───────────────────────────────────────────────────────────────────────┘
                 ▲
                 │
┌───────────────────────────────────────────────────────────────────────┐
│                        REPOSITORIES (4th Layer)                       │
│                                                                       │
│   └── [interfaces for repositories]                                   │
└───────────────────────────────────────────────────────────────────────┘
                 ▲
                 │
┌───────────────────────────────────────────────────────────────────────┐
│                     PRESENTATION LAYER (3rd Layer)                    │
│                                                                       │
│   ├── controllers/         # Handle req/res and call usecases         │
│   ├── interface/           # Interfaces needed for controllers        │
│   ├── routes/              # Route files (mobileRoutes.js, webRoutes.js)│
│   └── validation/          # Input validation for controller inputs   │
└───────────────────────────────────────────────────────────────────────┘
                 ▲
                 │
┌───────────────────────────────────────────────────────────────────────┐
│                    APPLICATION LAYER (2nd Layer)                      │
│                                                                       │
│   ├── usecases/                                                       │
│   │    └── [moduleName]/                                              │
│   │         ├── usecase.ts         # execute() method with logic      │
│   │         ├── factory.ts         # create dependencies + instance   │
│   │         ├── request.dto.ts     # input interface for usecase      │
│   │         └── response.dto.ts    # output interface for usecase     │
│   └── interface/                  # Usecase related interfaces         │
└───────────────────────────────────────────────────────────────────────┘
                 ▲
                 │
┌───────────────────────────────────────────────────────────────────────┐
│                        DOMAIN LAYER (1st Layer)                       │
│                                                                       │
│   ├── entities/           # Pure business logic entities               │
│   ├── interface/          # Entity interfaces                          │
│   └── services/           # Business services if needed                │
└───────────────────────────────────────────────────────────────────────┘
```

---

### 📌 Notes:

- Har ek layer **ek dusre ke layer ka direct implementation nahi jaanta**, bas interfaces use karta hai (dependency inversion).
- Domain layer sabse core hoti hai, jo **pure business rules** ko define karti hai.
- Application layer, usecases ko manage karti hai — ye **coordinate karne ka kaam karti hai**.
- Presentation layer client se interact karti hai (controllers, routes, validation).
- Infrastructure layer me database, APIs, file systems ke implementation rehte hain.
