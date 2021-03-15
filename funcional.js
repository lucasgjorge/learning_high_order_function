//exercicio 1

var grades = [8.0, 7.0, 8.3, 9.0, 4.5, 6.0, 3.7, 5.0, 7.1, 9.5, 6.0]

var all_grades = grades.reduce((accu, curr) => accu + curr);

var avg = all_grades / 11; //media dos alunos


console.log(avg); // media dos alunos

var approved_grades = grades.filter((number) => number >= 6.0); //notas maiores que 6.0

console.log(approved_grades);// imprime notas maiores que 6.0

var students_situation = grades.map((number) => number > 6.0 ? 'APPROVED' : 'FAILED');

console.log(students_situation); //retorna um array com aprovado ou reprvado

//exercicio 2
var names = ["Ben", "Jafar", "Matthews", "Priya", "Brian"];

var inverted_names = names.map((names) => names.split('').reverse().join(''));

console.log(inverted_names); //imprime os nomes invertidos 


var biggest_name = names.reduce(
  function(a, b) {
    return a.length > b.length ? a : b;
  }
);

console.log(biggest_name);//imprime o maior nome 

//exercicio3

var arr = [{
    "id": 70111470,
    "title": "Die Hard",
    "rating": [4.0]
  },
  {
    "id": 654356453,
    "title": "Bad Boys",
    "rating": [5.0]
  },
  {
    "id": 65432445,
    "title": "The Chamber",
    "rating": [3.0]
  }
];

var rating = arr.filter((arr) => arr.rating >= 4.0)
  .map((arr) => arr.title);


console.log(rating);

var arra = arr.filter((arr) => arr.rating >= 4.0)
  .map((arr) => `${arr.id} ${arr.title}`);

console.log(arra);


//exercicio 4


var house=   [{ label: "sala"     , largura: 4.5, comprimento:5 },
              { label: "quarto1"  , largura: 3.5, comprimento:2 },
              { label: "quarto2"  , largura: 2.7, comprimento:2 },
              { label: "banheiro" , largura: 1.5, comprimento:2 }];




var largest_room =  house.map((house) => house.largura * house.comprimento)
                        .reduce(
                          function (a , b){
                           return  a > b  ? a : b;
                          }
                        );
                        
console.log(largest_room);


 const house_size = house.map((house) => house.largura * house.comprimento)
                            .reduce((accu, curr) => accu + curr);

 console.log(house_size);

 var room_size = house.filter((house) => house.label == "quarto1" && "quarto2")
                          .map((house) => house.largura * house.comprimento);

 console.log(room_size);