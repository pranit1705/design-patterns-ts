import { Todo } from './types';

const TodoItem = ({ id, title }: Todo) => {
	return <li>{`ID: ${id}, Title: ${title}`}</li>;
};

export default TodoItem;
