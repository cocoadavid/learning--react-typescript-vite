import './App.css'
import Greet from './components/Greet'
import Person from './components/Person'
import PersonList from './components/PersonList'
import Status from './components/Status'
import Header from './components/Header'
import Oscar from './components/Oscar'

function App() {
  const personName = {
    first: 'Bruce',
    last: 'Wayne'
  }

  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne'
    },
    {
      first: 'Bat',
      last: 'Man'
    },
    {
      first: 'Ro',
      last: 'Bin'
    },
  ]

  return (
    <div className='App'>
      <Oscar>
        <Header>Oscar goes to... DiCapriooo!</Header>
      </Oscar>
      <Greet name={"David"} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList nameList={nameList} />
      <Status status='loading' />
    </div>
  )
}

export default App
