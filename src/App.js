import { ChatEngine } from 'react-chat-engine'

import './App.css'

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm'

function App() {
  if(!localStorage.getItem('username')) return <LoginForm />

  return (
    <ChatEngine 
      height='100vh'
      projectID='694c6a66-43f4-4d1d-a02b-92ee35f81368'
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('secret')}
      renderChatFeed={(chatAppProps) =><ChatFeed {...chatAppProps}/>}
      
    />
  );
}

export default App;
