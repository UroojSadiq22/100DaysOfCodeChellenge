let obj = {
    Name : 'Ammara',
    Age : '22',
    Gender : 'Female',
    Email : 'abc@gmail.com',
    Phone : '123 456 000',
};
for (let x in obj) {
    console.log(`${x}: ${obj[x]}`);
}