// Add your Circle class here

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  set diameter(diameter) {
    this.radius = diameter / 2
    // this._diameter = diameter
  }

  set circumference(circumference) {
    this.radius = circumference / (Math.PI * 2)
    // this._circumference = circumference;
  }

  set area(area) {
    this._area = area;
  }

  get diameter() {
    return parseFloat(this.radius * 2);
  }

  get circumference() {
    return parseFloat(this.diameter * Math.PI);
  }


  get area() {
    return ((this.radius**2) * Math.PI)
  }
}


// Example
//
// class Bird {
//   constructor(name) {
//     this.name = name;
//   }
//
//   set phrase(phrase) {
//     this._phrase = phrase;
//   }
//
//   get speak() {
//     return `${this.name} says ${this._phrase || 'squawk'}`;
//   }
// }
//
// let daffy = new Bird('Daffy');
// daffy.speak;
// daffy.phrase;
// daffy.speak;
