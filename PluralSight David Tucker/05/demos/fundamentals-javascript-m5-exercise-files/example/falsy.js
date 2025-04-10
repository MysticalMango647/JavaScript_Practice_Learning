// simply function to log out truthyness

const isTruthy = (name, exp) => {
  console.log(`${name} (val is: ${exp}): ${Boolean(exp)}`);
}


//Numbers
isTruthy("val1", 0);
isTruthy("val2", 1);
isTruthy("val3", -1);
isTruthy("val4", NaN);
isTruthy("val5", 0n);
//isTruthy("val6", 1n);

isTruthy("val6", undefined); 
isTruthy("val7", null);
isTruthy("val8", false);

//String
isTruthy("val9", "");
isTruthy('val10', "Hi");
isTruthy("val11", "false");

//objects
isTruthy("val12", {});

let var1;
isTruthy("val13", var1);
isTruthy("val14", var1 === undefined);










/*
// Simply function to log out truthyness
const isTruthy = (name, exp) => {
  console.log(`${name}: ${Boolean(exp)}`);
}

// Numbers
isTruthy("val1", 0);
isTruthy("val2", 1);
isTruthy("val3", -1);
isTruthy("val4", NaN);
isTruthy("val5", 0n);

// Boolean, Null, and Undefined
isTruthy("val6", undefined);
isTruthy("val7", null);
isTruthy("val8", false);

// Strings
isTruthy("val9", "");
isTruthy("val10", "Hi");
isTruthy("val11", "false");

// Objects
isTruthy("val12", {});

// Undefined variables
let var1;
isTruthy("val13", var1);
*/