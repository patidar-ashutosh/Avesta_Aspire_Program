## What is Node Js ?
Node Js hai wo ek JavaScript ka runtime environment hai jise ham JavaScript ke code ko server side ya kehe ki apne local machine pe bhi run kar sakte hai.

before Node Js yani jab Node Js nahi tha jab ham JavaScript ko only browser side pe hee run kar sakte the,
yani ki ham kuch click event , button click jese task ko JavaScript se perfrom kar sakte the.

Lekin jab Node Js introduce huva uske baad se ham JavaScript ko server side pe bhi run kar sakte hai.
jise ab ham JavaScript se server side application, games, database management system jese applications create kar sakte hai.


## What is server side ?
server side yani ki Node Js ki help se ham ek server create karke apne JavaScript ke code ko run kar sakte hai.

## What is runtime environment ?
runtime environment yani ki jo server hamne Node Js ki help se create kiya hoga wo server jab tak live hoga,
tab tak ham JavaScript ko server side run kar paayenge , or yadi server live nahi hoga to JavaScript server side pe run nahi hogi.
isi liye Node Js ko ek runtime environment bola jaata hai.


## How Node Js is Created ?
Node.js ko JavaScript ko backend development mein use karne ke liye create kiya gaya hai.
Ise primarily Google Chrome's V8 JavaScript engine ke upar build kiya gaya hai, jo JavaScript ko high-performance environment mein execute karta hai.

Google Chrome's V8 JavaScript engine ko mainly c++ language me create kiya gya hai,
to jo Node Js hai wo bhi mainly c++ language me hee hai.

Node Js hai wo ek JavaScript runtime hai yani ki wo koi programming language nahi hai.
ham jo bhi codee likhte hai wo JavaScript me hee likhte hai.

## difference between Google Chrome's And Node Js.
Node.js aur Google Chrome mein farq unke use cases aur environments mein hai, lekin dono ka JavaScript engine (V8) ek hi hota hai. 

Google Chrome hame kuch functionally provide karta hai.
like : HTML, CSS rendering, DOM manipulation (Web APIs), cookies handling, and local storage

jab ki Node Js hame additional modules , libraries and environment provide karta hai.
like : file system for reading and writing (fs), HTTP server (http), libraries for creating servers

at the end Node Js and Chrome ne apna khud ka ek modified JavaScript create kiya hai.
jisme dono ke apni kuch functionally and environments hai.


## Just For Knowledge
Chrome browser hai wo JavaScript ke code ko run nahi kar sakte hai isliye vo V8 engine ka use karta hai.
Same Node Js bhi JavaScript ke code ko run nahi kar sakte hai isliye vo bhi V8 engine ka use karta hai.

ab JavaScript hai wo DOM manipulation jese tak ko perfrom nahi kar sakta hai,
to DOM manipulation jese task ko perfrom karne ke liye ham browser ka use karte hai.

same JavaScript hai wo files ke saath interaction (read/write) nahi kar sakta hai,
to files ke saath interaction karne ke liye ham Node Js ka use karte hai.

Jo functionally hame browser and Node Js provide karte hai. wo sab c++ language me likhi hoti hai.
to jab ham us functionally ka use karte hai to browser ya Node Js us functionally ke code ko,
hamare V8 engine me send karta hai jisse wo run ho sake.




## Benefits Of Node Js
    Non-Blocking I/O (Input/Output)...

    I/O (Input/Output) yani ki hame browser se kuch input/output lena ho.
    like : fetch data from database,
    yafi hame Node Js ka use karke files se kuch input/output karna ho.
    like : read and write data in file.

    to ye ham Node Js se easliy kar sakte hai.

    # But now the question is What is Non-Blocking I/O (Input/Output) ?
    Non-Blocking yani ki jab current time pe hamara koi input/output task perfrom ho raha ho,
    same ussi time pe ham other task bhi kar sakte hai.

    Jo Blocking I/O hota hai usme yadi hame input/output task perfrom kar rahe hai to ham koi other task nahi kar sakte hai.

    jese ki ham browser me data fetch kar rahe he to jab tak data fetch nahi ho jaata tab tak ,
    ham website me other activity nahi kar paayenge. like : click button

    Or jo Node Js hai wo Non-Blocking I/O (Input/Output) use karta hai jise ham browser ya server side(runtime) pe at a I/O operation time pe bhi other task perfrom kar sakte hai. yani ki ham I/O operation ke end hone ka wait nahi karna padta hai.

    InShort
    Non-blocking I/O operations allow a program to continue performing other tasks while waiting for data from a network connection.

    Blocking I/O operations control does not return to the application until the I/O is complete.

NOTE : Node Js hai wo Non-blocking I/O ka use karta hai joki Node Js ko lightweight and efficient banata hai.
Node.js uses an event-driven non-blocking I/O model that makes it lightweight and efficient.

    # What is event-driven ?
    Event-driven programming ka concept mainly callbacks ya promises ka use karta hai, jo I/O operations ke complete hone ke baad run hota hain.

Another Benefits
    Jab ham Node Js ko install karte hai to NPM tool install hoke aata hai.

    NPM (Node Package Manager) hai wo ek tool hai jaha pe pre-written packages and libraries hai. jinka use ham apne applications me kar sakte hai. like for email validation.


NPM Site -> [Click Here](https://www.npmjs.com/)



## In Short
Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven non-blocking I/O model that makes it lightweight and efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.