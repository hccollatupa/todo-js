import './styles.css';
import { Todo, TodoList } from './classes';
//import { Todo } from './classes/todo.class.js';
//import { TodoList } from './classes/todo-list.class';

const todoList = new TodoList();

const tarea1 = new Todo('Aprender Javascript');
const tarea2 = new Todo('Comprar un unicornio');

todoList.nuevoTodo(tarea1);
todoList.nuevoTodo(tarea2);

console.log(todoList);