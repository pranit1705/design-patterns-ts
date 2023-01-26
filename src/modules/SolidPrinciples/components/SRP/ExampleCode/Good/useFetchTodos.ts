import axios from 'axios';
import { useEffect, useState } from 'react';

export const useFetchTodos = () => {
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		//This can be further broken down into separate api function
		async function getTodos() {
			const { data } = await axios.get(
				'https://jsonplaceholder.typicode.com/todos/'
			);
			const firstTen = data.slice(0, 10);
			setTodos(firstTen);
		}
		getTodos();
	}, []);

	return { todos };
};
