function parseCount(value) {
  let parseValue = Number.parseInt(value);
  
  if (isNaN(parseValue)) {
    let err = new Error('Невалидное значение');
    throw err;
  } 
  
  return parseValue;
}  

function validateCount(userInput) {
  let parsedValue;
  try {
    parsedValue = parseCount(userInput);
  } catch(err) {
    return err;
  }
  return parsedValue;
}

class Triangle {
  constructor(a, b, c) {     
    if (a + b < c || a + c < b || b + c < a) {
      let triangleError = new Error('Треугольник с такими сторонами не существует');
      throw triangleError;
    }       
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getPerimeter() {
    return this.a + this.b + this.c;
  }
  getArea() {
    let p = (this.a + this.b + this.c) * 0.5;
    let area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    return +area.toFixed(3);
  }
}

function getTriangle(a, b, c) {
  let triangle = {
    getPerimeter() {
      return 'Ошибка! Треугольник не существует';
    },
    getArea() {
      return 'Ошибка! Треугольник не существует';
    } 
  };  
  try {
    triangle = new Triangle(a, b, c);
  } catch (triangleError) {
    return triangleError;
  } finally {
    return triangle;
  }
}