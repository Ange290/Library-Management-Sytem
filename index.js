library = [{
    title :'The developer',
    author:'Ange Lyka',
    availability :true,
},
{
    title :'Long Eagle',
    author:'Anonymous',
    availability :false,
},
{
    title :'The Davinci Code',
    author:'Dan Brown',
    availability :true,
},
{
    title :'Atomic Habits',
    author:'James Clair',
    availability :false,
},
];

const addBooks = (book) =>{
    console.log(library.length);
}
 library.push(book);
 console.log(library.length);
}