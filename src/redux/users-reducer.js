const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS'


let initialState = {
    users: [
        // {id: 1, followed: false, name: 'Maxim', status: 'test status1', location: {country: 'Belarus', city: 'Borisov'}},
        // {id: 2, followed: true, name: 'Karina', status: 'test status2', location: {country: 'Belarus', city: 'Brest'}},
        // {id: 3, followed: true,name: 'Mark', status: 'test status3',  location: {country: 'Belarus', city: 'Mink'}},
        // {id: 4, followed: true,name: 'Danila', status: 'test status4',  location: {country: 'Belarus', city: 'Borisov'}},
        // {id: 5, followed: true,name: 'Dima', status: 'test status5',  location: {country: 'Belarus', city: 'Brest'}},
        // {id: 6, followed: true,name: 'Edik', status: 'test status6',  location: {country: 'Belarus', city: 'Pinsk'}},
    ]
}


const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW:
        return {
            ...state,
           users: state.users.map( u => {
               if(u.id === action.userId) {
                   return {...u, followed: true}
               }
               return u;
           })
        }

        case UNFOLLOW:
        return{
            ...state,
            users: state.users.map(u => {
                if(u.id === action.userId){
                    return{...u, followed: false}
                }
                return u;
            })
        }

        case SET_USERS:
            return {...state, users:[...action.users, ...state.users]}


        default:
            return state
    }
}


export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})

export default userReducer;

