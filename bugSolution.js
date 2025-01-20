function foo(a, b) {
  if (a === null || b === null) {
    // Handle null values explicitly
    console.log('Null values encountered');
    return 0; //Or return some default value as per requirements
  }
  // ... rest of the function logic that is safe to execute when a and b are not null
  return a + b; 
} 