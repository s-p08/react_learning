import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from "./Context/UserContext.jsx";

function App() {
  return (
    <UserContextProvider>
      <h1>hello shivam u r learning context here</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
