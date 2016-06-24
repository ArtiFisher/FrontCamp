export default function() {
  return function(input, number) {
    input = input || '';
    number = number || 10;
    return input.slice(0, number);
  };
}