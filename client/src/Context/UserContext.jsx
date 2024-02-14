import { createContext, useContext, useReducer, useEffect } from 'react'
import { initialState, userReducer } from './Reducers'
import {USER_URL} from '../Constants'
import axios from 'axios'

const UserContext = createContext()

export const loading = () => ({ type: 'LOADING' })
export const loadingSuccess = () => ({ type: 'LOADING_SUCCESS' })
export const success = (payload) => ({ type: 'SUCCESS', payload })
export const loadError = (payload) => ({ type: 'FAILURE', payload })

export const UserContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(userReducer, initialState)
    const token = localStorage.getItem('access_token')
    useEffect(() => {
        if (token) {
            const fetchUser = async () => {
                dispatch(loading())
                try {
                    const {data} = await axios.get(`${USER_URL}`, {
                        headers: {
                            Authorization: token
                        }
                    })
                    console.log("from context", data.user)
                    dispatch(success(data.user))
                } catch (error) {
                    dispatch(loading())
                    const { response: { data: { message } } } = error
                    dispatch(loadError(message))
                }
            }
            fetchUser()
        }
        
    }, [token])
    return (
        <UserContext.Provider value={[state, dispatch]}>{children}</UserContext.Provider>
    )
}

export const useUserState = () => {
    const [state, dispatch] = useContext(UserContext)
    return state
}

export const useUserDispatch = () => {
    const [state, dispatch] = useContext(UserContext)
    return dispatch
}