// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
let name;
const gender = new Map([['Monica', 'Female'], ['Wendy', 'Male']]);
let age;
let email;
const favoriteColorMonica = ['Yellow', 'Pink', 'White', 'Purple'];
const favoriteColorWendy = ['Blue', 'Black', 'Gray'];
const isHavePet = new Map([['Monica', 'Yes'], ['Wendy', 'No']]);
const eduMonica1 = {
    name: "SD 01",
    city: "Jakarta",
    graduate: 2016
};
const eduMonica2 = {
    name: "SMP 02",
    city: "Jakarta",
    graduate: 2019
};
const eduMonica3 = {
    name: "SMA 02",
    city: "Tanggerang"
};

const eduWendy1 = {
    name: "SD 02",
    city: "Jakarta",
    graduate: 2010
};
const eduWendy2 = {
    name: "SMP 03",
    city: "Bogor",
    graduate: 2013
};
const eduWendy3 = {
    name: "SMA 01",
    city: "Surabaya",
    graduate: 2016
};
const eduWendy4 = {
    name: "Universitas Maju",
    city: "Tanggerang"
};

const favoriteRestaurantMonica = ['Bento', 'Sushi', 'Pancake', 'Eggy', 'Tempura', 'Bento', 'Eggy', 'Padang', 'Tteok', 'Sushi', 'Sushi'];
const favoriteRestaurantWendy = ['Tempura', 'Bento', 'Sushi', 'Pancake','Padang', 'Katsu', 'Geprek', 'Pancake', 'Eggy'];
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
const firstUser = {
    name: "Monica",
    gender: gender.get('Monica'),
    age: 17,
    email: "monica@dingdong.com",
    favoriteColor: favoriteColorMonica,
    isHavePet: isHavePet.get('Monica'),
    education: eduMonica1, eduMonica2, eduMonica3,
    favoriteRestaurant: favoriteRestaurantMonica
    
};
const secondUser = {
    name: "Wendy",
    gender: gender.get('Wendy'),
    age: 23,
    email: "wendy@dingdong.com",
    favoriteColor: favoriteColorWendy,
    isHavePet: isHavePet.get('Wendy'),
    education: eduWendy1, eduWendy2, eduWendy3, eduWendy4,
    favoriteRestaurant: favoriteRestaurantWendy
    
};

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [firstUser, secondUser];

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};