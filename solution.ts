// problem 1

let formatValue = (value: string | number | boolean): string | number | boolean => {
    if (typeof value === "number") {
        return value * 10;
    } else if (typeof value === 'string') {
        return value.toUpperCase();
    } else { 
        return !value;
    }
}
// problem 2
function getLength(value: string | any[]): number {
    if (typeof value === 'string') {
        return value.length;
    } else if (Array.isArray(value)) {
        return value.length;
    }
    return 0;
}
// problem 3
class Person{
    name:string;
    age:number;
    constructor(name:string,age:number){
this.name=name;
this.age=age;
    }
    getDetails(){

        return`'Name: ${this.name}, Age: ${this.age}'`
    }

}
// problem 4

const filterByRating = (
    books: { title: string; rating: number }[]
): { title: string; rating: string }[] => {
    return books
        .filter(book => book.rating >= 4)
        .map(book => ({
            title: book.title,
            rating: book.rating.toFixed(1) 
        }));
};


//  problem 5

const filterActiveUsers = (arr: {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}[]): {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}[] => {
    return arr.filter(user => user.isActive === true);
};




// problem 6

let printBookDetails = (book: {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}): string => {
    return `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable ? 'Yes' : 'No'}`}
// problem 7

const getUniqueValues = (arr1: (number | string)[], arr2: (number | string)[]): (number | string)[] => {
    let unique: (number | string)[] = [];

    for (let i = 0; i < arr1.length; i++) {
        let exists = false;
        for (let j = 0; j < unique.length; j++) {
            if (arr1[i] === unique[j]) {
                exists = true;
                break;
            }
        }
        if (!exists) {
            unique[unique.length] = arr1[i]!;
        }
    }

    for (let i = 0; i < arr2.length; i++) {
        let exists = false;
        for (let j = 0; j < unique.length; j++) {
            if (arr2[i] === unique[j]) {
                exists = true;
                break;
            }
        }
        if (!exists) {
            unique[unique.length] = arr2[i]!;
        }
    }

    return unique;
};


// problem 8

const calculateTotalPrice = (products: {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
}[]): number => {
    return products.reduce((sum, product) => {
        try {
            if (product.price < 0 || product.quantity < 0 || (product.discount !== undefined && (product.discount < 0 || product.discount > 100))) {
                throw new Error(`Invalid data for product ${product.name}`);
            }

            let total = product.price * product.quantity;

            if (product.discount) {
                total -= total * (product.discount / 100);
            }

            return sum + total;

        } catch (err) {
            console.error(err instanceof Error ? err.message : "Unknown error");
            return sum;
        }
    }, 0);
};

 


const books = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 },
];

console.log(filterByRating(books));


