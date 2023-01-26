import React from 'react';
import TodosList from './TodoList';
import { useFetchTodos } from './useFetchTodos';

const TodosPage = () => {
	const { todos } = useFetchTodos();

	return (
		<div>
			<h1>My Todos</h1>
			{/* using data from hook  */}
			<TodosList todos={todos} />
		</div>
	);
};

export default TodosPage;
