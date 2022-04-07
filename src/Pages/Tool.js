import Button from './Button';

function Tool({ name, surname, age, tool, onClick }) {
  return (
    <div class="styleprops">
      <h2>My name is {name}.</h2>
      <h3>My surname is {surname}.</h3>
      <h4>I am {age} years old.</h4>
      <p>My favorite design tool is {tool}.</p>
      <Button onClick={onClick}>Click me</Button>
    </div>
  );
}

export default Tool;
