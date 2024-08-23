## command line
1. npm create vite@latest application-manage-timer
2. npm install
3. prettier file
4. npm run dev
5. GitHub repo
6. .gitignore file
7. initialized / updated 


## Main goal: 
### Using Context Api
### Creating and Using Reducer Function 

### ACTION: 
1. create a store folder in component to manege Context API = to manage state of the component 
2. it is useful to data management for context api.

### context 
- context has special function - NameContextProvider() {}

### NameContextProvider() {} 
- it is responsible for managing this state that store in the context and 
- making available to all the components that are interested. 
- it receive props object with children props. 

### NameContext.Provider component
- it is for wrapping the children, to return it.
  `function TimersContextProv({ children }: TimersContextProviderProps) {
  return <TimersContext.Provider>{children}</TimersContext.Provider>;
  }`

### useContext hook 
- it will be used in the components that want to consume /use the context state 
- it must need to take an argument - and argument will be the context it want to use in the component. 

## useReducer hook 
- if the state it a bit complex 
- and there potential multiple triggers that could change that state.

### reducer action 
- we should not change the directly the state.  always create a new state. 

### payload when dispatch. 
- means extra data attached to with the new state. 
- also - what kind of payload/ extra data will be added. 
- when it is showing cross on the variable means its value is null. In-that-case, we need to use '!' 
explanation mark with value to say that the value is not null. 
- also we can make payload optional by using payload?: type;  
because we might dont need other places to use the payload. 
- better way to make a discriminated union type. 



### setInterval()
- inside we will use anonymous function and X millisecond 
- it will update the component every millisecond and update the UI
- this has a problem - that it will execute the component function and that then will set a new interval. 
- but behind the scenes, old interval will alos still be running. 
- therefore, it will add more and more intervals and create infinite loop. 
- and will break the application. 
- this is a side effect. 

### clearInterVal = stop the setInterval function. 
we need to use - useRef() for this problem. 


### useEffect 
- side effect should be managed by effect. 
- it will have two arguments - 1. callback function, 2. a dependency [] array. //   e.g. `useEffect(()=>{}, [])`
1. () => {}  // function = 
2. the function will be executed first time and then it will be executed only if the [] dependency item changes. 
3. if it an [] empty array dependency then there is no dependency = so there is nothing to change and 
function will run only once at the fist time when this component executed. 
`useEffect(()=>{}, [])`
4. it also return a function `return ()={}`



### .toFixed(2) 
- meaning- will always be output a number with 2 decimal 