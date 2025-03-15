// exercise 1

const studentGrades = [
    { name: "Anna", note: 9 },
    { name: "Denis", note: 7 },
    { name: "Cristian", note: 8 },
    { name: "Daniel", note: 6 },
    { name: "Elena", note: 10 }
  ];
  const sumOfGrades = studentGrades.reduce((sum, student) => sum + student.note, 0);  
  const averageGrade = sumOfGrades / studentGrades.length;
  console.log(averageGrade); 

// exercise 2

const products = [
    {name: "Tshirt", price: 50, isAvailable: true },
    {name: "Pants", price: 80, isAvailable: false },
    {name: "Jacket", price: 120, isAvailable: true },
    {name: "Shirt", price: 60, isAvailable: true },
    {name: "Skirt", price: 40, isAvailable: false }
  ];
  const availableProducts = products
  .filter(product => product.isAvailable)  
  .map(product => product.name);
  console.log(availableProducts);

// exercise 3

const numbers = [10, 5, 8, 15, 3, 20];
const maxNumber = numbers.reduce((max, current) => {
    return current > max ? current : max; 
  }, numbers[0]);
  console.log(maxNumber);

// exercise 4

const students = [
    { John: [8, 7, 9] },
    { Mary: [9, 9, 10] },
    { Alex: [6, 8, 7] }
  ];
  function averageGrades(students) {
    return students.reduce((result, studentt) => {
      const studentName = Object.keys(studentt)[0]; 
      const grades = studentt[studentName]; 
      const averageGradee = grades.reduce((summ, grade) => summ + grade, 0) / grades.length;
      result[studentName] = parseFloat(averageGradee.toFixed(2));
      return result;
    }, {});
  }
  const averageGradess = averageGrades(students);
  console.log(averageGradess);
  
