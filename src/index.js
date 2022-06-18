const person = { 
name: "amine" ,
address:{
    country:"maroc",
    city:"casa"
}
}
let updated = {
    ...person,
    name: 'said',
    address:{
        ...person.address,
    },
}

updated.address.city="rabat"

console.log(person);
console.log(updated);