#  ব্লগ ১: Union Type & Intersection Type 

##  Union Type —  ব্যবহার করা হয় যখন একটি ভ্যালু একাদিক  type এর হতে  পারে।  

### উদাহরণ:
```ts

let  value: string | number;

value = "Hello"; //সঠিক
value = 100; // এটাও সঠিক
```
### function এর সাথে উদাহরণ:
```ts
function printId(id: string | number) {
  return `Your ID is: ${id}`;
}
printId("A123");
printId(101);
```

## Intersection Type —  ব্যবহার করা হয় যখন আমরা **দুই বা ততোধিক টাইপকে একত্রে মিশিয়ে** একটি টাইপ তৈরি করতে চাই।  
অর্থাৎ ভ্যারিয়েবলটি **সবগুলো টাইপের properties একসাথে** ব্যবহার করতে পারবে।

###  উদাহরণ:
 ```ts
type  Name = { name: string;
};
 type  Age = { age: number;
}; 
type  Person = Name & Age;
const user: Person = { name: "Rahim", age: 25 };
```

এখানে **Person** টাইপে `name` এবং `age` — দুইটাই থাকতে হবে, কারণ এটা **Name & Age** intersection।


# ব্লগ ২: TypeScript এ Enum ব্যবহার
  

**Enum** হলো TypeScript-এ এমন একটি উপায়, যা দিয়ে আমরা কিছু নির্দিষ্ট মানকে **type** এবং **value** হিসেবে একসাথে ব্যবহার করতে পারি।

  

আমরা এটি ব্যবহার করি যাতে:

  

- Typo বা ভুল মানের সম্ভাবনা কমে।

- Value এবং type দুই জায়গাতেই একই রকম থাকে।

- কোড maintainable হয়।

  

---

## উদাহরণ ও ব্যাখ্যা

### ১. String Union ব্যবহার করলে সমস্যা

```ts

type  Role = "admin" | "teacher" | "student";

  

function  whichRole(value: Role) {

if (value === "admin") {

return  "you are a Admin";

} else  if (value === "teacher") {

return  "you are a Teacher";

} else {

return  "you are a  Student";

}

}
whcihRole("addmin"); // Compile-time error
```

"addmin" Role type এর সাথে মেলে না



  

---

## 1.  String  Enum

```ts

enum Role {

Admin = "admin",

Teacher = "teacher",

Student = "student"

}

function whichRole(value: Role) {

if (value === Role.Admin) {

return "you are a admin";

} else if (value === Role.Teacher) {

return "you are a teacher";

} else {

return "you are a student";

}

}

whichRole(Role.Admin); // সঠিক

whichRole("addmin"); //  Compile-time error
```

## 2. Numeric Enum 
```ts

enum DirectionType {
  Up = 1,
  Down = 2,
  Left = 3,
  Right = 4
}

let move: DirectionType = DirectionType.Left;
console.log(move); 
```
