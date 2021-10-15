import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { login, logout, selectuser } from './features/userSlice';
import { auth } from './mine/firebase';
import { Header } from './mine/Header';
import { Login } from './mine/Login';
import { Main } from './mine/Main';

function App() {
  const user = useSelector(selectuser);
  const dispatch = useDispatch();

  useEffect(() => {

    auth.onAuthStateChanged(
      (userAuth)=>{
        if(userAuth)
        {dispatch(login({displayName : userAuth.displayName,
          email : userAuth.email,
          photoURL : userAuth.photoURL,
          uid : userAuth.uid,}))
        }
        else{
          dispatch(logout())
        }
        }
    )
   
   
  },[])
  return (
    <div className="App">
      {!user? (<Login/>) :      
      (<div>
      <Header/>
      <Main user={user}/>
      </div> 
      )
      }
    </div>
  );
}

export default App;
