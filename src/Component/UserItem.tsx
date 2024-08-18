import React, { FC } from 'react';
import { IUser } from '../types/types';

interface UserItemProps {
    user: IUser;
    onCLick: (user: IUser) => void
}

const UserItem: FC<UserItemProps> = ({ user, onCLick }) => {
    return (
        <div onClick={() => onCLick(user)} style={{ padding: 15, border: '1px solid gray' }}>
            {user.id}. {user.name} проживает в городе {user.address.city} на улице {user.address.street}
        </div>
    );
};

export default UserItem;