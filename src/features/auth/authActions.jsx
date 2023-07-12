// authActions.js
import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';
import { Navigate } from 'react-router-dom';

const backendURL = 'https://realestateza.up.railway.app'

export const register = createAsyncThunk('auth/register', async (user, thunkAPI) => {
   
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    await axios.post(`${backendURL}/api/user/register/`, user, config)
    .then(res => {
        // localStorage.setItem('userInfo', JSON.stringify(res.data))
        toast.success("Registered successfully")
    })
    .catch(error => {
        // const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        if (error.response) {
            if(error.response.data.password) {
               for (let x in error.response.data.password) {
                    toast.error(error.response.data.password[x])
                } 
            }
            if(error.response.data.email){
                for (let x in error.response.data.email) {
                    toast.error(error.response.data.email[x])
                } 
            }
          } else if (error.request) {
            toast.error(error.request.data)
          } else {
            toast.error(error.message)
            console.log('Error', error.message);
          }

        toast.error(message)
        // return thunkAPI.rejectWithValue(error.message)
    })
  }
)


export const login = createAsyncThunk('auth/login',async (user) => {
   
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  await axios.post(`${backendURL}/api/user/login/`, user, config)
  .then(res => {
      localStorage.setItem('userToken', JSON.stringify(res.data))
      toast.success("Successfully logged-in")
  })
  .catch(error => {
      // const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()

      if (error.response) {

        if(error.response.data) {
          for (let x in error.response.data) {
               toast.error(error.response.data.detail)
           } 
           Navigate('/login')
       }
          if(error.response.data.password) {
             for (let x in error.response.data.password) {
                  toast.error(error.response.data.password[x])
              } 
              Navigate('/login')
          }
          if(error.response.data.email){
              for (let x in error.response.data.email) {
                  toast.error(error.response.data.email[x])
              } 
              Navigate('/login')
          }
        } else if (error.request) {
          toast.error(error.request.data)
          Navigate('/login')
        } else {
          toast.error(error.message)
          Navigate('/login')
        }
  })
}
)

export const logout = createAsyncThunk('auth/logout',async () => {
    await localStorage.removeItem('userToken')
//   const config = {
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   }
// await axios.post(`/api/user/logout/`, config)
// .then(res => {
//     localStorage.removeItem('userToken')
//     console.log(res.data)
// })
// .catch(error => {
//     // const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()

//     console.log(error)

//     if (error.response) {

//       if(error.response.data) {
//         for (let x in error.response.data) {
//              toast.error(error.response.data.detail)
//          } 
//      }
//         if(error.response.data.password) {
//            for (let x in error.response.data.password) {
//                 toast.error(error.response.data.password[x])
//             } 
//         }
//         if(error.response.data.email){
//             for (let x in error.response.data.email) {
//                 toast.error(error.response.data.email[x])
//             } 
//         }
//       } else if (error.request) {
//         toast.error(error.request.data)
//       } else {
//         toast.error(error.message)
//       }
// })
}
)