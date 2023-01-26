# Open Close Principle (OCP)

OCP states that “software entities should be open for extension, but closed for modification”.

**_Make big components from lots of smaller ones_**

OCP explains that we should make our code **extensible**; we should be able to add new features without having to rewrite parts of our codebase. In React terms, this can be done by using **composition** rather than **inheritance** to create large-scale components.

The open-closed principle advocates for structuring our components in a way that allows them to be extended without changing their original source code. To see it in action, let’s consider the following scenario - we’re working on an application that uses a shared `Header` component on different pages, and depending on the page we’re at, `Header` should render a slightly different UI:

```jsx
const Header = () => {
	const { pathname } = useRouter()
	
	return (
		<header>
			<Logo />
			<Actions>
				{pathname === '/dashboard' && <Link to="/events/new">Create event</Link>}
				{pathname === '/' && <Link to="/dashboard">Go to dashboard</Link>}
			</Actions>
		</header>
	)
}

const HomePage = () => (
	<>
		<Header />
		<OtherHomeStuff />
	</>
)

const DashboardPage = () => (
	<>
		<Header />
		<OtherDashboardStuff />
	</>
)
```

It's easy to realize that this implementation is bad if we think about what will happen when we start adding more pages. Every time a new page is added, we’ll need to go back to our `Header` component and adjust its implementation to make sure it knows which action link to render.

To fix this problem, we can use component composition. Our Header component doesn’t need to concern itself with what it will render inside, and instead, it can delegate this responsibility to the components that will use it using `children` prop:

```jsx
const Header = ({ children }) => (
	<header>
		<Logo />
		<Actions>
			{children}
		</Actions>
	</header>
)

const HomePage = () => (
	<>
		<Header>
			<Link to="/dashboard">Go to dashboard</Link>
		</Header>
		<OtherHomeStuff />
	</>
)

const DashboardPage = () => (
	<>
		<Header>
			<Link to="/events/new">Create event</Link>
		</Header>
		<OtherDashboardStuff />
	</>
)
```