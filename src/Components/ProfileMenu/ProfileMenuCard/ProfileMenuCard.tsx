import { useEffect, useState } from 'react';
import './ProfileMenuCard.css'

interface ProfileMenuCardProps {
    user : any,
}

export const ProfileMenuCard = (props:ProfileMenuCardProps) => {

    const [user, setUser] = useState(props);
    // setEmail(props.user!=null ? props.user.email : 'Sign In')
    
    // useEffect(() => {
    //     setUser(props);
    //   }, [props]);
      
    //   console.log(user)

    return (
        <div className='CardMain'>
            <div className='Card'>
                <img src="https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg" alt="" />
                <div className='CardText'>
                    <p>{user!=null && user.user!=null ? user.user : 'Sign In'}
                    <br/>
                    @{(user!=null && user.user!=null ? user.user : '')}
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