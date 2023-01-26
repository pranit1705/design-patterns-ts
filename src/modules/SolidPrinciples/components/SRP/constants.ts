export const componentSteps = [
	'break large components that do too much into smaller components',
	'extract code unrelated to the main component functionality into separate utility functions',
	'encapsulate connected functionality into custom hooks',
];

export const code1 = `const TodosPage = () => {
  const [todos, setTodos] = useState([]);

  // 1. Fetching data from API.
  useEffect(() => {
      async function getTodos() {
          const { data } = await axios.get("https://jsonplaceholder.typicode.com/todos/");
          const firstTen = data.slice(0, 10);
          setTodos(firstTen);
      };
      getTodos();
  }, []);

  // 2. Converting todo array into list of React elements.
  const renderTodos = () => {
      return todos.map(todo => {
          return (
              <li>
                  {\`ID: \${todo.id}, Title: \${todo.title}\`}
              </li>
          )
      });
  };

  // 3. Structuring and displaying the todos.
  return (
      <div>
          <h1>My Todos:</h1>
          <ul>
              {renderTodos()}
          </ul>
      </div>
  )
};`;
