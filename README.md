#  ব্লগ ১: Union Type & Intersection Type (Bangla Explanation)

##  Union Type —  ব্যবহার করা হয় যখন একটি ভ্যালু **একাধিক ধরনের** (type) হতে পারে।  

### ✔ উদাহরণ
```ts

let  value: string | number;

value = "Hello"; // ঠিক আছে 
value = 100; // এটাও ঠিক
```
### ✔ বাস্তব উদাহরণ
```ts
function printId(id: string | number) {
  return `Your ID is: ${id}`;
}
printId("A123");
printId(101);
```

## Intersection Type —  ব্যবহার করা হয় যখন আমরা **দুই বা ততোধিক টাইপকে একত্রে মিশিয়ে** একটি টাইপ তৈরি করতে চাই।  
অর্থাৎ ভ্যারিয়েবলটি **সবগুলো টাইপের প্রপার্টি একসাথে** পাবে।

### ✔ উদাহরণ
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

- কোড আরও পরিপাটি এবং maintainable হয়।

  

---

## উদাহরণ ও ব্যাখ্যা (Bangla)


### ১. String Union ব্যবহার করলে সমস্যা

```ts

type  Role = "admin" | "teacher" | "student";

  

function  checkRole(value: Role) {

if (value === "admin") {

return  "আপনি Admin";

} else  if (value === "teacher") {

return  "আপনি Teacher";

} else {

return  "আপনি Student";

}

}
checkRole("addmin"); // ❌ Compile-time error
```

"addmin" Role type-এর সাথে মেলে না

- এখানে  `"addmin"`  টাইপ  করলে  TypeScript  compile-time  ত্রুটি  দেখাবে।

- একই  string  বারবার  ব্যবহার  করতে  হয়, এবং  typo  হলে  error  হবে।

  

---

## 1.  String  Enum

```ts

enum Role {

Admin = "admin",

Teacher = "teacher",

Student = "student"

}

function checkRole(value: Role) {

if (value === Role.Admin) {

return "আপনি Admin";

} else if (value === Role.Teacher) {

return "আপনি Teacher";

} else {

return "আপনি Student";

}

}

checkRole(Role.Admin); // ✅ নিরাপদ

checkRole("addmin"); // ❌ Compile-time error
```

## 2. Numeric Enum (Value Assign করা)
```ts

enum Direction {
  Up = 1,
  Down = 2,
  Left = 3,
  Right = 4
}

let move: Direction = Direction.Left;
console.log(move); // Output: 3
```
