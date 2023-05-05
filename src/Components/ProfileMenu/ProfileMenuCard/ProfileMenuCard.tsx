import { useState } from 'react';
import './ProfileMenuCard.css'
import { Avatar } from '@mui/material';
import { useAppSelector } from '../../../app/hooks';
import { selectUser } from '../../../features/user/userSlice';

interface ProfileMenuCardProps {
    user: any,
}

export const ProfileMenuCard = (props: ProfileMenuCardProps) => {
    const googleUser = useAppSelector(selectUser);

    const [user,] = useState(props);
  
    return (
        <div className='CardMain'>
            <div className='Card'>
            <Avatar src={`${googleUser && googleUser.photoURL}`} />
                <div className='CardText'>
                    <p>{user != null && user.user != null ? user.user : 'Sign In'}
                        <br />
                        {/* @{(user != null && user.user != null ? user.user : '')} */}
                    </p>
                </div>

            </div>
            <div className='Card2'>
                {/* <a href="" className='manageAccount'>Manage Your Google Account</a> */}
                <p className='manageAccount'>Manage Your Google Account</p>
            </div>
        </div>

    )

}