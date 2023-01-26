import React from 'react';
import TodoItem from './TodoItem';
import { TodoListType } from './types';

const TodosList = ({ todos }: TodoListType) => {
	const renderTodos = () => {
		return todos.map((todo) => {
			return <TodoItem id={todo.id} title={todo.title} />;
		});
	};

	return <ul>{renderTodos()}</ul>;
};

export default TodosList;
