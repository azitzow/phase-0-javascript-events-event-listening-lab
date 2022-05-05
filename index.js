function addingEventListener() {
  const input = document.getElementById('input');
  input.addEventListener('click', handleClick);
}

const handleClick = () => alert('I was Clicked!');

addingEventListener();