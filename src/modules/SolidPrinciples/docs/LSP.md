# Liskov Substitution Principle (LSP)

**_Make classes substitutable for subclasses_**

The LSP states that any subclass should be substitutable for its base class. This means that if B `extends` A, then we should be able to use B everywhere we use A without altering any functionality.

**we just don't really use this in React**.

A very basic example of a subtype/supertype relationship could be demonstrated with a component built with styled-components library

```jsx
import styled from 'styled-components'
//Html button or Button component from any ui library (mui, antd etc)
const Button = (props) => {  /* ... */  }  

const StyledButton =  styled(Button)`
	border: 1px solid black; 
	border-radius: 5px;
`;

const App = () => { 
	return <StyledButton onClick={handleClick} />  
}
```
In the code above, we create `StyledButton` based on `Button` component. This new `StyledButton` component adds a few CSS classes but it retains the implementation of the original `Button`, so, in this context, we can think of our `Button` and `StyledButton` as supertype and subtype components.

Here’s another example of basing one component on another:
```jsx
type Props = InputHTMLAttributes<HTMLInputElement>  

const Input = (props: Props) => {  /* ... */  } 

const CharCountInput = (props: Props) => {  
	return ( 
		<div>
			<Input {...props} />
			<span>Char count: {props.value.length}</span>
		</div>
	)
}
```

In the code above, we use a basic `Input` component to create an enhanced version of it that can also display the number of characters in the input. Although we add new logic to it, `CharCountInput` still retains the functionality of the original `Input` component. The interface of the component also remains unchanged