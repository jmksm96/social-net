import React from "react";
import s from './users.module.css'

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers ([
            {
                id: 1, followed: false,
                name: 'Maxim',
                status: 'test status1',
                location: {country: 'Belarus', city: 'Borisov'},
                photoUrl: "https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png"
            },
            {
                id: 2,
                followed: true,
                name: 'Karina',
                status: 'test status2',
                location: {country: 'Belarus', city: 'Brest'},
                photoUrl: "https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png"

            },
            {
                id: 3, followed: true,
                name: 'Mark',
                status: 'test status3',
                location: {country: 'Belarus', city: 'Mink'},
                photoUrl: "https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png"

            },
        ])
    }
    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={s.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}



export default Users;
