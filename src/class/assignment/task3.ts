/*
    لدينا ال Object التالي لا تقم بالتعديل عليه
    لدينا أيضا إثنين Interfaces لا تقم بالتعديل عليهم
    إستخدم ما تعلمته مع عدم تكرار الخواص الموجودة داخل ال Interface لتجعل ال Object جاهز لطباعة محتواه
*/

// Do Not Edit The Code Below
interface Man {
    title: string;
    weight: number;
    age: number;
}

interface Bird {
    canFly: boolean;
}

interface Superman extends Man, Bird {
    bodyType: string,
    origin: string
}

let creature: Superman = {
    title: "Superman",
    weight: 100,
    age: 500,
    canFly: true,
    bodyType: "Iron",
    origin: "Krypton"
}