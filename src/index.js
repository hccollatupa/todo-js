import './styles.css';
import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

const tarea1 = new Todo('Aprender Javascript');
//const tarea2 = new Todo('Comprar un unicornio');

todoList.nuevoTodo(tarea1);
tarea1.completado = true;
//todoList.nuevoTodo(tarea2);

console.log(todoList);

crearTodoHtml(tarea1);