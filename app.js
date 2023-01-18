const contact = require('./contacts')

const main = async () => {
    const nama = await contact.tulisPertanyaan('Masukkan nama anda : ');
    const email = await contact.tulisPertanyaan('Masukkan email anda : ');
    const noHP = await contact.tulisPertanyaan('Masukkan noHP anda : ');

    contact.simpanContact(nama, email, noHP)
}
main()

// rl.question('Masukkan nama anda : ', (nama) => {
//     rl.question('Masukkan no HP anda : ', (noHP) => {
//         const contact = { nama, noHP};
//         const file = fs.readFileSync('data/contacts.json', 'utf-8');
//         const contacts = JSON.parse(file);

//         contacts.push(contact);

//         fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));

//         console.log('Terimakasih sudah memasukkan data.');

//         rl.close();
//      })
// });