
// 1. Danh sachs
let books = [
    {
        bookCode: "B01",
        title: "JavaScript",
        category: "Lap trinh",
        price: 120000,
        totalCopies: 5,
        availableCopies: 3,
        shelfLocation: "A1"
    },
    {
        bookCode: "B02",
        title: "Java",
        category: "Lap trinh",
        price: 150000,
        totalCopies: 4,
        availableCopies: 2,
        shelfLocation: "A2"
    },
    {
        bookCode: "B03",
        title: "Python",
        category: "Lap trinh",
        price: 100000,
        totalCopies: 3,
        availableCopies: 1,
        shelfLocation: "A3"
    }
];

// 2. them
let book = {
    bookCode: "B04",
    title: "HTML CSS",
    category: "Lap trinh",
    price: 90000,
    totalCopies: 6,
    availableCopies: 6,
    shelfLocation: "B1"
};

books.push(book);

// 3. muon
let maMuon = "B01";

for (let i = 0; i < books.length; i++) {
    if (books[i].bookCode === maMuon) {
        if (books[i].availableCopies > 0) {
            books[i].availableCopies--;
        } else {
            console.log("Het sach tren ke");
        }

        if (books[i].availableCopies === 0) {
            books[i].status = "HẾT SÁCH TRÊN KỆ";
        } else {
            books[i].status = "CÒN SÁCH";
        }
        break;
    }
}

// 4. Chuyen sach
let maChuyen = "B02";

for (let i = 0; i < books.length; i++) {
    if (books[i].bookCode === maChuyen) {
        books[i].shelfLocation = "C1";
        break;
    }
}

// 5. Xoa sach hu
let maXoa = "B03";

for (let i = 0; i < books.length; i++) {
    if (books[i].bookCode === maXoa) {
        books.splice(i, 1);
        break;
    }
}

// 6. Kiem ke 
let tongSach = 0;
let sachCon = 0;
let tongTien = 0;

for (let i = 0; i < books.length; i++) {
    tongSach += books[i].totalCopies;
    sachCon += books[i].availableCopies;
    tongTien += books[i].totalCopies * books[i].price;
}

// 7. In ket qua
console.log("       KIEM KE THU VIEN");
console.table(books);
console.log("Tong dau sach:", books.length);
console.log("Tong so sach:", tongSach);
console.log("Sach con tren ke:", sachCon);
console.log("Tong gia tri:", tongTien, "VND");

