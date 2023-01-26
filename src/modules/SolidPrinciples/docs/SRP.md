# Single Responsibility Principle

The original definition states that **“every class should have only one responsibility”,** i.e. do exactly one thing. We can simply extrapolate the definition to **“every function/module/component should do exactly one thing”,** but to understand what “one thing” means we’ll need to examine our components from two different perspectives - internal (meaning what the component does inside) and external (how this component is used by other components).

#### To ensure our components do one thing internally, we can:

- break large components that do too much into smaller components,
- extract code unrelated to the main component functionality into separate utility functions.
- encapsulate connected functionality into custom hooks

### Using this in React

Let's take a look at a `TodoPage` component, which will fetch a list of todos from API, slice the first 10, and display this to the user.

```jsx
const TodosPage = () => {
	const [todos, setTodos] = useState([]);

	// 1. Fetching data from API.
	useEffect(() => {
		async function getTodos() {
			const { data } = await axios.get(
				'https://jsonplaceholder.typicode.com/todos/'
			);
			const firstTen = data.slice(0, 10);
			setTodos(firstTen);
		}
		getTodos();
	}, []);

	// 2. Converting todo array into list of React elements.
	const renderTodos = () => {
		return todos.map((todo) => {
			return <li>{`ID: ${todo.id}, Title: ${todo.title}`}</li>;
		});
	};

	// 3. Structuring and displaying the todos.
	return (
		<div>
			<h1>My Todos:</h1>
			<ul>{renderTodos()}</ul>
		</div>
	);
};
```

Our `<TodoPage />` component shouldn't care where the todos came from, or what format they are displayed. All `<TodoPage />` should care about showing the list of todos.

So we should probably break this component:

- `<TodoPage />` will show the page containing our todos.
- `<TodoList />` will handle the creation of list.
- `<TodoItem />` will render the single todo list item.
- `useFetchTodos` will fetch the todos from API.

#### Types for component

```typescript
export type Todo = {
	id: string;
	title: string;
};

export type TodoListType = {
	todos: Todo[];
};
```

#### `<TodoItem />`

```jsx
const TodoItem = ({ id, title }: Todo) => {
	return <li>{`ID: ${id}, Title: ${title}`}</li>;
};
```

#### `<TodoList />`

```jsx
const TodosList = ({ todos }: TodoListType) => {
	const renderTodos = () => {
		return todos.map((todo) => {
			return <TodoItem id={todo.id} title={todo.title} />;
		});
	};

	return <ul>{renderTodos()}</ul>;
};
```

#### `useFetchTodos`

```jsx
export const useFetchTodos = () => {
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		//This can be further broken down into separate api function
		async function getTodos() {
			const { data } = await axios.get(
				'https://jsonplaceholder.typicode.com/todos/'
			);
			//we can create a function to slice this data in case we are showing pagination
			const firstTen = data.slice(0, 10);
			setTodos(firstTen);
		}
		getTodos();
	}, []);

	return { todos };
};
```

#### `<TodoPage />`

```jsx
const TodosPage = () => {
	const { todos } = useFetchTodos();
	return (
		<div>
			<h1>My Todos</h1>
			<TodosList todos={todos} />
		</div>
	);
};
```

This illustrates the idea that each component is only concerned with a single thing.

- `<TodosPage  />` doesn't care about the todos, how they are retrieved, or how they are formatted. It just knows it needs to display a page which will contain them.
- `useFetchTodos` doesn't care about formatting anything or the todos. It just deals with retrieving them and returning them.
- `<TodosList  />` doesn't care about where the todos came from, it just knows it gets a list of todos and should display some area to render them in.
- `<TodoItem  />` doesn't care about how many todos there are, where they came from, or on what page they will be displayed. It just knows it will receive an `id` and `title`, and should return a `<li>` containing that information.

This helps us to achive three things

- Introduce desired **functionality** for our use case.
- Make our code more **maintainable** by making it easier to read, more extensible, etc.
- Increase the **robustness** of our code by increasing its testability, or adding better error handling.
