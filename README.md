commands used here are:

1. npx create-react-app todo-app --template typescript

2. npm install uuidv4

## function App() vs class App extends Component in the App.js file

A functional component is just a plain JavaScript function which accepts props as an argument and returns a React element.

A class component requires you to extend from React.Component and create a render function which returns a React element. This requires more code but will also give you some benefits.

A functional component doesn’t have its own state. If you need a state in your component you will either need to create a class component or you lift the state up to the parent component and pass it down the functional component via props.

Another feature which you cannot use in functional components are lifecycle hooks. The reason is the same as for state, all lifecycle hooks are coming from the React.Component which you extend from in class components. So if you need lifecycle hooks you should probably use a class component.

Conversely, functional components allowed to use hooks where class components are not allowed to.
