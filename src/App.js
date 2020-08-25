import React, {useState, useEffect} from 'react'
import './index.css'
import TodoList from './Todo/TodoList'
import Context from './context'
import Loader from './Loader'

const AddTodo = React.lazy(
  ()=>
  new Promise(resolve=>{
    setTimeout(()=>{
      resolve(import('./Todo/AddTodo'))
    }, 3000)
  })
)

function App() {

  const [source, setSource] = useState([])
  const [loading, setLoading] = useState(true)




  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos/?_limit=5')
    .then(response => response.json())
    .then(todos => 
      {setTimeout(()=>{
        setSource(todos)
        setLoading(false)
      },2000)})
  }, [])
  function onChoose(id){
    setSource(source.map(item=>{
      if (item.id === id){
        item.completed = !item.completed
      }
      return item
    }))
  }

  function deleteTodo(id){
    setSource(
      source.filter((item)=>item.id!==id)
    )
  }

  function onCreateHandler(typed){
    setSource(
      source.concat([{
        id: source.length+1,
        completed: false,
        title: typed
      }])
    )
  }

  return (
    <Context.Provider value={{deleteTodo}}>
        <div className="wrapper">
            <h1>Simple TodoList</h1>

            <React.Suspense fallback={<p>Loading...</p>}>
              <AddTodo onCreate={onCreateHandler}/>
            </React.Suspense>

            {loading && <Loader/>}
            
            { source.length? (<TodoList feature={source} onToggle={onChoose}/>) : 
                loading? null: (<p>It's done</p>)}
        </div>
    </Context.Provider>
  );
}

export default App;
