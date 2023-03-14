/**
* * class And Interface
*/
interface Book {
    name: string;
    title: string;
    price: number
}

class Collection<T> {
    public data: T[] = [];
    add(data: T): void {
        this.data.push(data);
    }
}

let itemone = new Collection<Book>();
itemone.add({ name: "Rules", title: "this is Book", price: 123 });
console.log(itemone);

let itemTwo = new Collection<Book>();
itemTwo.add({ name: "Cooks", title: "This is Books", price: 1237 });
console.log(itemTwo);
