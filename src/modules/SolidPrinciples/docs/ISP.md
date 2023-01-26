# Interface Segregation Principle (ISP)

According to ISP, “clients should not depend upon interfaces that they don’t use.” For the sake of React applications, we’ll translate it into “components shouldn’t depend on props that they don’t use”.

**_Only pass a component props it needs_**

### Using this in React

```jsx
const DisplayUser = (props) => {
	return (
		<div>
			<h1>Hello, {props.user.name}!</h1>
		</div>
	)
}

const App = () => {
	const userData = useMemo(()=>({
		name: "Jim",
		age: 23,
		country: "USA",
		state: "LA"
	}),[])
	
	return <>
		<DisplayUser user={userData} />
	</>;
}
```

`<DisplayUser  />` component does not _care_ about what `user` is. It just needs to know the name of the user. This reliance on implementation details could be harmful if we decide the refactor where the `name` property is on `user`. For instance, we may refactor the `user` data:

```jsx
const user = {
  personalInfo: {
    name: "josh",
    age: 23
  },
  addressInfo: {
	country: "USA",
	state: "LA"
  }
};
```

To fix this, we should only pass to `<DisplayUser  />` what it needs, instead of making it deal with the implementation details how _where_ the name is located.

```jsx
const DisplayUser = ({name}) => {
  return (
    <div>
      <h1>Hello, {name}! </h1>
    </div>
  )
};

const App = () => {
  const user = {
    personalInfo: {
      name: "josh",
      age: 23
    },
    physicalFeatures: {
      hairColor: "blone",
      heightInC,: 175
    }
  }
  return (
    <div>
      <DisplayUser name={user.personalInfo.name} />
    </div>
  )
};
```

This way, if we ever change an implementation detail, all we need to do is pass along the correct information without ever changing code in `<DisplayUser  />`.