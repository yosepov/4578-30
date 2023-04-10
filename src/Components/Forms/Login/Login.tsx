import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import './Login.css'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../Services/firebase'
import { toast } from 'react-toastify';
import { useAppDispatch } from '../../../app/hooks';
import { setUser } from '../../../features/user/userSlice';

interface LoginProp {
    closeParentModel: () => void
}

export const Login = (props: LoginProp) => {

    const [user, setUsername] = useState('');
    const [pass, setPassword] = useState('');
    const [isSignedUp, setIsSignedUp] = useState(true);
    const [usernameError, setUsernamError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const dispatch = useAppDispatch();

    const handleSubmit = async () => {
        if (isSignedUp) {
            await createUserWithEmailAndPassword(auth, user, pass).then((res) => {
                const user = res.user;
                dispatch(setUser(user))
                sessionStorage.setItem('Auth Token', user.refreshToken);
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
                <TextField className='myTextInput'
                    helperText="Please enter Username/Email"
                    id="demo-helper-text-aligned"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e.currentTarget.value, 'user')}
                    label="Username"
                    error={usernameError}
                />
                <TextField className='myTextInput'
                    helperText="Please enter Password"
                    id="demo-helper-text-aligned-no-helper"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e.currentTarget.value, 'pass')}
                    label="Password"
                    type="password"
                    error={passwordError}
                />

                <div className='myButtonDiv'>
                    <Button
                        className='myButton'
                        onClick={handleSubmit}>
                        {isSignedUp ? 'Signup' : 'Login'}
                    </Button>
                </div>
                <div className='myButtonDiv'>
                    <Button
                        variant='text'
                        className='myButton'
                        onClick={() => setIsSignedUp(!isSignedUp)}>
                        {isSignedUp ? 'Already signed up? Login!' : 'Create new account!'}
                    </Button>
                </div>
            </Box>
        </>
    );
}

