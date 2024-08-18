import React, { FC, useState, useEffect } from 'react';
import axios from 'axios';
import { IUser } from '../types/types';
import { useParams, useNavigate } from 'react-router-dom';

const UserItemPage: FC = () => {
    const [user, setUser] = useState<IUser | null>(null);
    const { id } = useParams<{ id: string }>(); 
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            fetchUser();
        }
    }, [id]);

    async function fetchUser() {
        try {
            const response = await axios.get<IUser>(`https://jsonplaceholder.typicode.com/users/${id}`);
            setUser(response.data);
        } catch (e) {
            alert('Error fetching user data.');
        }
    }

    return (
        <div>
            <button onClick={() => navigate('/users')}>Back</button>
            <h1>Страница пользователя {user?.name}</h1>
            <div>
                {user?.email}
            </div>
            <div>
                {user?.address.city} {user?.address.street} {user?.address.zipcode}
            </div>
        </div>
    );
};

export default UserItemPage;
