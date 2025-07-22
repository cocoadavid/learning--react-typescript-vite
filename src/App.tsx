import './App.css'
import Greet from './components/Greet'
import Person from './components/Person'
import PersonList from './components/PersonList'
import Status from './components/Status'
import Header from './components/Header'
import Oscar from './components/Oscar'
import Button from './components/Button'
import Input from './components/Input'
import Container from './components/Container'

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
      <Container styles={{ border: '1px solid yellow', padding: '1rem' }}>
        <Oscar>
          <Header>Oscar goes to... DiCapriooo!</Header>
        </Oscar>
        <Greet name={"David"} isLoggedIn={true} />
        <Person name={personName} />
        <PersonList nameList={nameList} />
        <Status status='loading' />
        <Button handleClick={(event, id) => {
          console.log("button Clicked", event, id)
        }} />
        <Input value='' handleChange={event => console.log(event)} />
      </Container>
    </div>
  )
}

export default App
