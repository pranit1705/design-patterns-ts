# Conditionals in JSX

Usually we use the conditions as follows

```jsx
const Component = () => {
  return isTrue ? <p>Something to print</p> : null
}
```

But we can use short-circuit evaluation

```jsx
const Component = () => {
  return isTrue && <p>Something to print</p>
}
```

let's take a look at complex scenarios with too many ternaries:

```jsx
const Component = () => {
  return <div>
    {
      flag && flag2 && !flag3
        ? flag4
          ?<p>statement 1</p>
          : flag5
            ? <p>statement 2</p>
            : <p>statement 3</p>
        : <p>statement 4</p>
    }
  </div>
}
``` 
But it's not readable, and there are two ways to make it readable

- Best approach: move logic to sub-component
- alternate approach: using IIFE (Immediately-Invoked Function Expression)

IIFE approach

```jsx
const Component = () => {
  return (
    <div>
      {
        (()=>{
          if(flag && flag2 && !flag3){
            if (flag4) {
              return <p>Blah</p>
            } else if (flag5) {
              return <p>Meh</p>
            } else {
              return <p>Herp</p>
            }
          } else{
              return <p>statement 4</p>
          }
        })()
      }
    </div>
  )
}
``` 

sub-component approach

```jsx
const Component = () => {
  const basicCondition = flag && flag2 && !flag3;
  if (!basicCondition) return <p>Derp</p>;
  if (flag4) return <p>Blah</p>;
  if (flag5) return <p>Meh</p>;
  return <p>Herp</p>
}
```

