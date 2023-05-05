import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { toast } from 'react-toastify';
import './Login.css'
import { auth, googleSigninProvider, } from '../../../Services/firebase'
import { useAppDispatch } from '../../../app/hooks';
import { setUser } from '../../../features/user/userSlice';
import { addNewUserToDB } from '../../../Services/user/addNewUser';


interface LoginProp {
    closeParentModel: () => void
}

export const Login = (props: LoginProp) => {

    const [user, setUsername] = useState('');
    const [pass, setPassword] = useState('');
    const [isSignedUp, setIsSignedUp] = useState(true);
    const [usernameError, setUsernamError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [passwordShown, setPasswordShown] = useState(false);
    const [repeatedPassword, setRepeatedPassword] = useState('');

    const togglePassword = () => { setPasswordShown(!passwordShown); }
    const dispatch = useAppDispatch();

    const handleSubmit = async () => {
        if(repeatedPassword === pass){

        if (isSignedUp) {
            await createUserWithEmailAndPassword(auth, user, pass).then((res) => {
                const user = res.user;
                dispatch(setUser(user))
                sessionStorage.setItem('Auth Token', user.refreshToken);
                addNewUserToDB(user.uid, user.email, null);
                props.closeParentModel();
                toast(user.email + ' Welcome!', {
                    type: "warning",
                });
            }).catch((e) => toast(e));
        } else {
            await signInWithEmailAndPassword(auth, user, pass).then(res => {
                const user = res.user;
                dispatch(setUser(user))
                sessionStorage.setItem('Auth Token', res.user.refreshToken);
                props.closeParentModel();
                toast(res.user.email + ' Signed in successfully!', {
                    type: "success",
                }
                );
            }
            ).catch(e => toast(e));
        }}else{
            toast('password is not correct')
        }
    }

    const handleChange = (val: string, eleName: string) => {
        if (eleName === 'user') {
                setUsername(val)
            if (val.length === 0) {
                setUsernamError(true)
            }
            else {
                setUsernamError(false)
            }
        }
        else if (eleName === 'pass') {
            
            setPassword(val)
            if (val.length === 0) {
                setPasswordError(true)
            }
            else {
                setPasswordError(false)
            }
        }
        else if(eleName=='repeatedPassword')
        {
            setRepeatedPassword(val);
        }

    }
    /* const handleRepeatedPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRepeatedPassword(event.target.value);
    } */

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleSigninProvider).then((result) => {
            const user = result.user
            dispatch(setUser(user))
            const profilePic = result.user.photoURL
            addNewUserToDB(user.uid, user.email, profilePic).then(() => {
                toast.success('Hi ' + user.email);
            }).catch(e => {
                toast.error(e)

            });

        }).catch((error) => {
            toast.error(error)
        })
    }

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    '& > :not(style)': { m: 1 },
                    flexDirection: 'column'
                }}
            >

                <img className='logoImag' alt='logoPic' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsXFUA0FjKXXTWVnPvl8sqCrX0k_ssLuTIvSumSzSxxj60XVCS8gOCOrfpPCsGpAOsyAc&usqp=CAU'></img>

                <TextField className='myTextInput'
                    id="demo-helper-text-aligned"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e.currentTarget.value, 'user')}
                    label="Enter your email"
                    error={usernameError}
                />
                <TextField className='myTextInput'

                    id="demo-helper-text-aligned-no-helper"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e.currentTarget.value, 'pass')}
                    label="Enter your Password"
                    type={passwordShown ? "text" : "password"}
                    error={passwordError} />
                {isSignedUp && <TextField className='myTextInput'

                    id="demo-helper-text-aligned-no-helper"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e.currentTarget.value, 'repeatedPassword')}
                    label="check password"
                    type={passwordShown ? "text" : "password"}
                    error={passwordError} />}
                <div className='myButtonDiv2'>
                    <ul><li>
                        <input type="checkbox" className='checkBoxInput' onClick={togglePassword} />
                    </li><li>
                            <label className='showPassLabel'>Show password</label>
                        </li></ul>
                    <Button className="login-with-google-btn" onClick={signInWithGoogle}>
                        Sign in with Google
                    </Button>
                </div>

                {/* <div className='myButtonDiv'> */}
                <Button
                    className='myButton1'
                    onClick={handleSubmit}>
                    {isSignedUp ? 'SignUp' : 'Login'}
                </Button>
                {/* </div> */}
                <div className='myButtonDiv2'>
                    <Button
                        variant='text'
                        className='myButton2'
                        onClick={() => setIsSignedUp(!isSignedUp)}>
                        {isSignedUp ? 'Have an account? Login!' : "Don't have an account? SignUp!"}
                    </Button>
                </div>
            </Box>
        </>
    );
}

