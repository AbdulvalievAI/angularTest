export enum MyEnum {
  BANANA,
  APPLE,
  MANGO,
}

function test(attr: keyof typeof MyEnum): void {}

test('BANANA');
test('APPLE');
test('DOG');
