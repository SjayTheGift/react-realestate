import { Navigate  } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { history } from './_Helpers';



const PrivateRoute = ({ children }) => {

    const { userToken } = useSelector((state) => state.auth)

    console.log('PrivateRoute')

    console.log(history.location)

    if(!userToken){
        // not logged in so redirect to login page with the return url
        return <Navigate to="/login" state={{ from: history.location }}/>
    }

    return children;
}

export { PrivateRoute };
