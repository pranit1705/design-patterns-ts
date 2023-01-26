# Dependency Inversion Principle (DIP)

**_Always have high-level code interface with an abstraction, rather than an implementation detail_**

The dependency inversion principle states that “one should depend upon abstractions, not concretions”. In other words, one component shouldn’t directly depend on another component, but rather they both should depend on some common abstraction.

Below we have `LoginForm` component that sends user credentials to some API when the form is submitted:

```jsx
import api from '~/common/api';

const LoginForm = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = async (evt) => {
		evt.preventDefault();
		await api.login(email, password);
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<input
				type="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<button type="submit">Log in</button>
		</form>
	);
};
```

In above code, `LoginForm` component directly references the `api` module, so there’s a tight coupling between them. This is bad because such dependency makes it more challenging to make changes in our code, as a change in one component will impact other components. The dependency inversion principle advocates for breaking such coupling,

First we will remove direct reference to api module from inside the `LoginForm`

```jsx
type Props = {
	onSubmit: (email: string, password: string) => Promise<void>,
};

const LoginForm = ({ onSubmit }: Props) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = async (evt) => {
		evt.preventDefault();
		await onSubmit(email, password);
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<input
				type="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<button type="submit">Log in</button>
		</form>
	);
};
```

With this change, our `LoginForm` component no longer depends on the `api` module.

we’ll create a connected version of the `LoginForm` that will delegate form submission logic to the `api` module:

```jsx
import api from '~/common/api';

const ConnectedLoginForm = () => {
	const handleSubmit = async (email, password) => {
		await api.login(email, password);
	};

	return <LoginForm onSubmit={handleSubmit} />;
};
```

`ConnectedLoginForm` component serves as a glue between the `api` and `LoginForm`, while they themselves remain fully independent of each other. We can iterate on them and test them in isolation without worrying about breaking dependent moving pieces as there are none. And as long as both `LoginForm` and `api` adhere to the agreed common abstraction, the application as a whole will continue working as expected.
Dependency Inversion Principle (DIP)
Always have high-level code interface with an abstraction, rather than an implementation detail

The dependency inversion principle states that “one should depend upon abstractions, not concretions”. In other words, one component shouldn’t directly depend on another component, but rather they both should depend on some common abstraction.

Below we have LoginForm component that sends user credentials to some API when the form is submitted:

```
import api from '~/common/api'

const LoginForm = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleSubmit = async (evt) => {
		evt.preventDefault()
		await api.login(email, password)
	}

	return (
		<form onSubmit={handleSubmit}>
			<input type="email" value={email} onChange={e => setEmail(e.target.value)} />
			<input type="password" value={password} onChange={e => setPassword(e.target.value)} />
			<button type="submit">Log in</button>
		</form>
	)
};
```

In above code, LoginForm component directly references the api module, so there’s a tight coupling between them. This is bad because such dependency makes it more challenging to make changes in our code, as a change in one component will impact other components. The dependency inversion principle advocates for breaking such coupling,

First we will remove direct reference to api module from inside the LoginForm

```
type Props = {
	onSubmit: (email: string, password: string) => Promise<void>
}

const LoginForm = ({ onSubmit }: Props) => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleSubmit = async (evt) => {
		evt.preventDefault()
		await onSubmit(email, password)
	}

	return (
		<form onSubmit={handleSubmit}>
			<input type="email" value={email} onChange={e => setEmail(e.target.value)} />
			<input type="password" value={password} onChange={e => setPassword(e.target.value)} />
			<button type="submit">Log in</button>
		</form>
	)
};
```

With this change, our LoginForm component no longer depends on the api module.

we’ll create a connected version of the LoginForm that will delegate form submission logic to the api module:

```
import api from '~/common/api'

	const ConnectedLoginForm = () => {
	const handleSubmit = async (email, password) => {
		await api.login(email, password)
	}

	return (
		<LoginForm onSubmit={handleSubmit} />
	)
};
```

ConnectedLoginForm component serves as a glue between the api and LoginForm, while they themselves remain fully independent of each other. We can iterate on them and test them in isolation without worrying about breaking dependent moving pieces as there are none. And as long as both LoginForm and api adhere to the agreed common abstraction, the application as a whole will continue working as expected.

Markdown 2882 bytes 388 words 76 lines Ln 55, Col 2HTML 2356 characters 381 words 52 paragraphs
MENU
Signed in as Pranit Madhavi.
Main workspace synced with your Google Drive app data folder.
