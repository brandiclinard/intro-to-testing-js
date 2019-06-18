// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('add', function() {
   it('should be a defined function', function() {
       expect(typeof add).toBe('function');
   });
   it('should return 5 when adding 3 and 2.', function() {
       expect(add(3,2)).toBe(5);
   });
   it('should return false when adding two strings', function(){
       expect(add('black', 'bird')).toBe(false);
   });
});

describe('sayHello', function(){
    it('should be a defined function', function(){
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function(){
        expect(typeof sayHello()).toBe('string');
    });
    it('should return the string "Hello, Jane!" when executed', function(){
        expect(sayHello('Jane')).toBe("Hello, Jane!");
    });
    it('should return the string "Hello, Alex!" when executed', function(){
        expect(sayHello('Alex')).toBe("Hello, Alex!");
    });
    it('should return the string "Hello, Pat!" when executed', function(){
        expect(sayHello('Pat')).toBe("Hello, Pat!");
    });
    it('should return the string "Hello, World!" when executed', function(){
        expect(sayHello()).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when executed', function () {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when executed', function () {
        expect(sayHello(false)).toBe("Hello, World!");
    });
    // it('should return the string "Hello, World!" when executed', function(){
    //     expect(sayHello('')).toBe("Hello, World!");
    // });
});

describe('isFive', function(){
    it('should be a defined funciton', function(){
        expect(typeof isFive).toBe('function');
    });
    it('should return a boolean value', function(){
        expect(typeof isFive(true)).toBe('boolean');
        expect(typeof isFive(false)).toBe('boolean');
    });
    it('should return boolean "true" when passed 0 as input', function(){
        expect(isFive(5)).toBe(true);
    });
    it('should return true when "5" is passed as input', function(){
        expect(isFive('5')).toBe(true);
    });
});

describe('isEven', function(){
    it('should be a defined function', function(){
        expect(typeof isFive).toBe('function');
    });
    it('should return a boolean value', function(){
        expect(typeof isEven(true)).toBe('boolean');
        expect(typeof isEven(false)).toBe('boolean');
    });
    it('should return true when passed 2 as input',function(){
        expect(isEven(2)).toBe(true);
    });
    it('should return true when passed -4 as input', function(){
        expect(isEven(-4)).toBe(true);
    });
    it('should return false when passed 3 as input', function(){
        expect(isEven(3)).toBe(false);
    });
    it('should return false when passed "banana" as input',function(){
        expect(isEven('banana')).toBe(false);
    });
    it('should return true when passed 8 as input', function(){
        expect(isEven(8)).toBe(true);
    });
    it('should return false when passed infinity as input', function(){
        expect(isEven(Infinity)).toBe(false);
    });
    it('should return false when passed boolean input', function(){
        expect(isEven(false)).toBe(false);
        expect(isEven(true)).toBe(false);
    });
    it('should return false when passed no argument', function(){
        expect(isEven()).toBe(false);
    });
});