document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".button");
  const input = document.querySelector(".input");
  const list = document.querySelector(".list");

  const ITEMS_LS_KEY = "todos";

  const addItemLocalStorage = (value) => {
    // здесь лежит значение ключа todos
    const todos = localStorage.getItem(ITEMS_LS_KEY);
    // проверка на наличие todo в localstorage
    const hasItemsInLocalStorage = todos !== null;
    let newTodos;

    if (!hasItemsInLocalStorage) {
      newTodos = [value];
      //   localStorage.setItem(ITEMS_LS_KEY, JSON.stringify[value]);
    } else {
      const parsedTodos = JSON.parse(todos);
      newTodos = [...parsedTodos, value];
    }

    localStorage.setItem(ITEMS_LS_KEY, JSON.stringify(newTodos));
  };

  const createListItem = (value) => {
    const li = document.createElement("li");
    li.textContent = value;
    return li;
  };

  const onClickHendler = (event) => {
    event.preventDefault();

    const { value } = input;
    const newListItem = createListItem(value);

    list.appendChild(newListItem);

    addItemLocalStorage(value);
  };

  const renderListItemsFromLocalStorsge = () => {
    const todos = localStorage.getItem(ITEMS_LS_KEY);

    if (!todos) {
      return;
    }

    JSON.parse(todos).forEach((todo) => {
      const li = createListItem(todo);
      list.appendChild(li);
    });
  };

  renderListItemsFromLocalStorsge();
  button.addEventListener("click", onClickHendler);
});
