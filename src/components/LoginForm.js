import { useState } from "react"
import  axios  from 'axios'

const LoginForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const projID = '694c6a66-43f4-4d1d-a02b-92ee35f81368';

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = { 'Project-ID': projID, 'User-Name': username, 'User-Secret': password };

        try{
            await axios.get('https://api.chatengine.io/chats', {
                headers: authObject
            });

            localStorage.setItem('username', username);
            localStorage.setItem('secret', password);

            window.location.reload();

        }catch(err){
            setError('Wrong credentials');
        }
    }

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type='text' value={username} 
                        onChange={(e) => setUsername(e.target.value)}
                        className="input"
                        placeholder="Username" required
                    />
                    <input type='password' value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="input"
                        placeholder="Password" required
                    />
                    <div align='center'>
                        <button type='submit' className="button">
                            <span>Start chatting</span>
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
                </form>
            </div>
        </div>
    )
}

export default LoginForm
