const originalObject = {
    name: 'John Doe',
    age: 30,
    gender: 'male'
  };
  const clonedObject = JSON.parse(JSON.stringify(originalObject))
  clonedObject.age = 20;
  clonedObject.email = 'abc@gmail.com';
  console.log(originalObject);
  console.log(clonedObject);
