# TypeScript Setup

**TypeScript project** start kar rahe ho, toh **Node.js install hai ya nahi?** Pehle check kar lo:  

```sh
node -v
npm -v
```

---
---
---

# Install TypeScript Locally and Globally

## **1️⃣ Globally Install Karna (Har Project me Available Rahega)**
Agar ham chahte ho ki TypeScript **har project** me bina install kiye available ho, toh globally install karna padega:

```sh
npm install -g typescript
```

Phir check karne ke liye:

```sh
tsc -v
```

Agar version dikh raha hai, toh TypeScript globally install ho gaya hai.  

✅ **Iska Faida:** Har project me `tsc` command direct chal sakti hai, alag se install nahi karna padega.  
❌ **Iska Nuksan:** Kabhi kabhi version mismatch ho sakta hai agar project ka TypeScript version different ho.

---

## **2️⃣ Locally Install Karna (Sirf specifically Project ke Liye)**
Local installation ka matlab hai ki TypeScript sirf **iss project** ke andar available rahega:

```sh
npm install --save-dev typescript
```

Phir check karne ke liye:

```sh
tsc -v
```

✅ **Iska Faida:** Har project apne specific TypeScript version ko maintain kar sakta hai.  
❌ **Iska Nuksan:** Har naye project me install karna padega.  

---

### **📌 Kaunsa Install Karna Chahiye?**
- **Agar ham har jagah TypeScript use karna chahte ho → Globally Install Karo.**  
- **Agar ham chahte ho ki har project apna specific TypeScript version use kare → Locally Install Karo.**  
- **Best Practice:** Dono install kar sakte ho, par **local installation recommended hai**, taaki version conflicts na ho.


---
---
---

# **TypeScript File Ko Run Karne Ke Different Tarike**  

TypeScript code ko run karne ke multiple ways hain. Har tarike ka alag use case hota hai.

---

## **1️⃣ Direct Compilation + Run (Traditional Way)**
### **Steps:**
1. **Compile TypeScript File** (`.ts` → `.js` me convert karna)  
   ```sh
   tsc src/index.ts
   ```
   Isse `index.ts` ka compiled JavaScript version `index.js` ban jayega.

2. **Run Compiled JavaScript File**  
   ```sh
   node src/index.js
   ```

### **⚡ Difference & Use Case**  
✔ Production ke liye best hai.  
✔ Code optimized hota hai.  
❌ Har baar manually compile karna padta hai.  

---

## **2️⃣ ts-node (Directly Run TS File Without Compilation)**
### **Steps:**
```sh
ts-node src/index.ts
```

### **⚡ Difference & Use Case**  
✔ Fast development ke liye best hai.  
✔ Compilation ki zaroorat nahi hoti & `.js` file bhi create nahi hoti.  
❌ Production me use nahi karna chahiye.  

---

## **3️⃣ nodemon + ts-node (Auto Restart on Changes)**
Agar ham chahte ho ki **file change hote hi automatically run ho**, toh `nodemon` use kar sakte ho.

### **Install nodemon**
```sh
npm install --save-dev nodemon
```

### **Run TypeScript with Auto Restart**
```sh
nodemon --exec ts-node src/index.ts
```

Yeh command **`src/index.ts`** file ko **ts-node** ke through run karegi aur jaise hi file me koi change hoga, automatically restart ho jayegi. 🚀

### **⚡ Difference & Use Case**  
✔ Development ke liye best hai.  
✔ Code update hote hi auto restart hota hai.  
❌ Nodemon ka setup chahiye.  

---

## **4️⃣ Bun (Fastest Execution Without Compilation)**
Agar ham TypeScript ko bina `ts-node` ke **super fast speed** me run karna chahte ho, toh `bun` ek alternative hai.

### **Install Bun**
```sh
npm install -g bun
```

### **Run TypeScript File**
```sh
bun run src/index.ts
```

### **⚡ Difference & Use Case**  
✔ Speed bahut fast hai.  
✔ Ts-node se zyada efficient hai.  
❌ Har system me Bun install hona chahiye.  

---

## **🎯 Difference**
| Method | Speed | Compilation Chahiye? | Best for |
|--------|-------|---------------------|----------|
| **`tsc + node`** | Slow | ✅ Yes | Production |
| **`ts-node`** | Fast | ❌ No | Development |
| **`nodemon + ts-node`** | Medium | ❌ No | Auto Restart |
| **`bun`** | Fastest | ❌ No | High Speed Execution |

---


---
---
---

# ⚡ TypeScript @types: When & Why to Use?
Agar ham koi JavaScript library use kar rahe ho TypeScript me, toh TypeScript ko **us library ke types ka pata nahi hota**.  

Isi liye jab ham koi third-party library use karte ho jo TypeScript ke types provide nahi karti, toh uske types alag se install karne padte hain using:  

```sh
npm install --save-dev @types/library-name
```

## **💡 Iska Reason Kya Hai?**  
TypeScript ko **type checking** karne ke liye **type definitions** chahiye hote hain.   

Kuch libraries **pure JavaScript me likhi hoti hain**, toh unke **types nahi hote**, isliye **@types/** package alag se install karna padta hai.  

🔹 **`@types/` package install karne ka kaam** → TypeScript ko batana ki is library me kaunse types hain.  

🔹 Yeh packages **DefinitelyTyped** repository se aate hain, jo third-party libraries ke liye TypeScript definitions provide karta hai.  

### **Example:**  
Agar ham **Express** install karte hai:  
```sh
npm install express
```
Toh TypeScript errors de sakta hai kyunki usko pata nahi hai **Express ke types** kya hain.  
Isliye, **@types/express** install karna padta hai:  
```sh
npm install --save-dev @types/express
```


## ⚡ Important Point
**`@types`** sirf **development** ke liye hota hai, **production build me nahi chahiye**.  

### **🔹 Kyu?**  
- **TypeScript sirf development ke liye hota hai** (runtime pe JavaScript chalti hai).  
- Jab ham **`tsc`** se TypeScript ko **compile karke JavaScript bana lete hai**, toh **types ka koi use nahi hota**.  
- Isliye **`@types` wale packages ko `devDependencies` me install karte hain.**
- Jab **production build** banate hai (`npm install --production`), toh **devDependencies install nahi hoti**, aur **@types ki zaroorat bhi nahi hoti**.  

## **📌 Kab Required Hai?**  
1️⃣ Agar library **TypeScript me likhi nahi hai**, toh `@types/` install karna padega.  
2️⃣ Agar library already TypeScript support karti hai (`.d.ts` files included hain), toh `@types/` install karne ki zaroorat nahi hoti.  
3️⃣ Agar `@types/` package available nahi hai → Custom types likhne padenge. 

---

### **🎯 Conclusion**
`@types/` packages TypeScript ko batate hain ki **library me kya types hain**, taaki compile time pe type-checking sahi se ho. 🚀

---

