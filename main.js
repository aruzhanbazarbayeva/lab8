console.log("hello world!")

let lab1 = [5, 5, 0, 5, 5, 10, 10];
let lab2 = [5, 5, 5, 3, 5, 5, 10];
let lab3 = [5, 10, 10, 10];
let lab4_5 = [10, 5, 5, 5, 5, 5, 8, 10, 10, 10, 5];
let lab6 = [5, 5, 10, 0, 5, 10];
let lab8 = [5, 10, 10, 5, 5];
let quiz1 = [32];
let summa=[];
let sum=0;
let total_score=0;

/*let sum1 = 0;
for (let i = 0; i < lab1.length; i++) {
sum1 += lab1[i];
}

let sum2 = 0;
for (let i = 0; i < lab2.length; i++) {
sum2 += lab2[i];
}

let sum3 = 0;
for (let i = 0; i < lab3.length; i++) {
sum3 += lab3[i];
}

let sum4_5 = 0;
for (let i = 0; i < lab4_5.length; i++) {
sum4_5 += lab4_5[i];
}

let sum6 = 0;
for (let i = 0; i < lab6.length; i++) {
sum6 += lab6[i];
}

let sum8 = 0;
for (let i = 0; i < lab8.length; i++) {
sum8 += lab8[i];
}
*/



function get_sum(lab) {
  for (let i = 0; i < lab.length; i++)
  {
    sum+=lab[i];
  }
  summa.push(sum);
  sum=0;
  const results=
  {
    summa
  }
  return results;
}

console.log(get_sum(lab1), get_sum(lab2),get_sum(lab3),get_sum(lab4_5),get_sum(lab6), get_sum(lab8),get_sum(quiz1))

function total()
{
  total_score=(summa[0]+summa[1]+summa[2]+summa[3]+summa[4]+summa[5])*60/280+summa[6];
  const result=
  {
    total_score
  }
  return result;
}
function main() 
{
  return total();
  }


/*let total_score = [(sum1,sum2,sum3,sum4_5,sum6,sum8)*60/240 + sumquiz]*/


/*const results = {
    lab1: [5, 5, 0, 5, 5, 10, 10],
    lab2: [5, 5, 5, 3, 5, 5, 10],
    lab3: [5, 10, 10, 10],
    lab4_5: [10, 5, 5, 5, 5, 5, 8, 10, 10, 10, 5],
    lab6: [5, 5, 10, 0, 5, 10],
    lab8: [5, 10, 10, 5, 5],
    quiz1: [32],
    sum1: get_sum (lab1),
    sums: [sum1, sum2, sum3, sum4_5, sum6, sum8], 
    total_score: [(sum1+sum2+sum3+sum4_5+sum6+sum8)*60/240 + sumquiz]
} 
*/

console.log(main())

//sum([sum1,sum2,sum3,sum4_5,sum6,sum8]))
//let sum1 = lab1[0]+lab1[1]+lab1[2]+lab1[3]+lab1[4]+lab1[5]+lab1[6];
//sum([sum1,sum2,sum3,sum4_5,sum6,sum8])