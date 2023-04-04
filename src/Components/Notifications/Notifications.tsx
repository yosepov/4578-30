import './Notifications.css';
import {MouseOverPopoverSettings} from './SettingsIcon'


export const AddNotifications = ()=>{

    return (
    <>
    <div>

    <p id='title'> Notifications </p>
        <span id='icon'><MouseOverPopoverSettings/></span>
        
        <hr/>
            <p id='notifications'>You have no new notifications</p>

        </div>
    </>
    )
}