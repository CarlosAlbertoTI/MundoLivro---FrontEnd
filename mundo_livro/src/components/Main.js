import React from 'react';
import {auth} from './Firebase';
  
const Mainpage = () => {
  
    // Signout function
    const logout = () => {
        auth.signOut();
    }
    
    return (
        <div>
            {console.log(auth.currentUser)}
            Welcome
            {
                auth.currentUser.email
            }
            <button style={{"marginLeft" : "20px"}} 
            onClick={logout}>
                Logout
            </button>
        </div>
    );
}
  
export default Mainpage;