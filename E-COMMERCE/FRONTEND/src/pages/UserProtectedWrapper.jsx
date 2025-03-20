import React from 'react'
import { UserDataContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'



const UserProtectedWrapper = ({children}) => {

    //const {token} = localStorage.getItem('token')
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const { user, setUser } = React.useContext(UserDataContext);
    const [isLoading, setIsLoading] = React.useState(true);

    useEffect(() => {
        if(!token){
            navigate('/login')
        }

        axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            if(response.status === 200){
                const data = response.data;
                setUser(data);
                setIsLoading(false);
            }
        }).catch((error) => {
            console.log(error);
            localStorage.removeItem('token');
            navigate('/login');
        })

    }, [token] )//check for nevigate



    if (isLoading) {
        return <div>Loading...</div>;
    }

  return (
    <>
        {children}
    </>
  )
}

export default UserProtectedWrapper


