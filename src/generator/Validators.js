export function maxLength(number) {
  return function maxLength(field) {
    return field.length > number;
  };
}
export function minLength(number) {
  return function minLength(field) {
    return field.length < number;
  };
}

export async function asyncTeste(valor) {
  let result = true;
  await fetch('https://randomuser.me/api/').then(() => (result = false));
  console.log('passei pela promise');
  return result;
}
