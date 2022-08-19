const list = [];

const addButton = document.getElementById('button');
const input = document.getElementById('input');

var taskId = 0;


function change(id) {
  const item = list.findIndex((d) => {
    if(d.id === id) {
      return true

    }
  })

  const text = prompt("Текст для изменения");
  list[item].text = text;
  render();
}

function render() {
  const mainDiv = document.createElement('div');
  mainDiv.setAttribute('class', 'list');

  for(let i = 0; i < list.length; i++) {
    const div = document.createElement('div');
    div.setAttribute('class', 'todoBlock');
    const h3 = document.createElement('h3');
    h3.innerText = list[i].text;

    div.append(h3);

    const buttons = document.createElement('div');
    buttons.setAttribute('class', 'actions');

    const changeButton = document.createElement('button') ;
    changeButton.setAttribute('class', 'change');

    changeButton.onclick = (event) => {
      change(list[i].id)
    }

    changeButton.innerText = "Change";

    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('class', 'delete')
    deleteButton.innerText = "Delete";

    deleteButton.onclick = (event) => {
      event.preventDefault();
      list.splice(i, 1);
      render();
    }

    buttons.append(changeButton, deleteButton);

    div.append(buttons);

    mainDiv.append(div);
  }

  const form = document.querySelector('.form')

  document.querySelector('.list').remove();

  form.append(mainDiv);
  input.value = '';
}

function handleClick(event) {
  event.preventDefault();
  if(input.value.length < 1)
  {
    return;
  }
  const obj = {
    id: taskId++,
    text: input.value
  };
  list.push(obj);
  console.log(list);
  render();

}

addButton.addEventListener('click', handleClick);