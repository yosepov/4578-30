import { useState } from 'react';
import './ProfileMenuCard.css'

interface ProfileMenuCardProps {
    user: any,
}

export const ProfileMenuCard = (props: ProfileMenuCardProps) => {

    const [user,] = useState(props);
  
    return (
        <div className='CardMain'>
            <div className='Card'>
                <img src="https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg" alt="" />
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