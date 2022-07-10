const likes = (name) => {
  if (name.length === 0) {
    return "no one likes this";
  }
  if (name.length === 1) {
    return `${name[0]} likes this`;
  }
  if (name.length === 2) {
    return `${name[0]} and ${name[1]} like this`;
  }
  if (name.length === 3) {
    return `${name[0]}, ${name[1]} and ${name[2]} like this`;
  }
  if (name.length > 3) {
    return `${name[0]}, ${name[1]} and ${name.length - 2} others likes this`;
  }
};
likes([]);
likes(["Peter"]);
likes(["Jacob", "Alex"]);
likes(["Max", "John", "Mark"]);
likes(["Max", "John", "Mark", "Jhon"]);
