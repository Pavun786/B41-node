// const double =(n)=> n*2;

// console.log(double(10));

// console.log(process);
//----------------------------------------------
// const double =(n)=> n*2;
// console.log(double(process.argv[2]))


// if we give in terminal like double.js 50 
// const[,,num]=process.argv
//  const double =(n)=> n*2;
//  console.log(num)
// then that o/p-->100
console.log(process.argv)
//process.argv--->used to take a data from terminal

const[,,num]=process.argv
 const double =(n)=> n*2;
  console.log(double(num));