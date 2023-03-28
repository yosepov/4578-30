
import { Button, FormControl, Input, InputLabel } from '@mui/material';
import { useState } from 'react';
import { VideoType } from '../../Types/VideoType';

export const AddNewVideoForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [url, setUrl] = useState('');

    const createVideoObject = (title: string, description: string, url: string): VideoType => {
        return {title, description, url}
    };

    const handleSubmit = () =>{
        const newVideo = createVideoObject(title, description, url);
        console.log(newVideo)
    }

    return <form onSubmit={(e) => e.preventDefault()} >
        <InputLabel>Title</InputLabel>
        <Input onChange={(e) => setTitle(e.currentTarget.value)} />
        <InputLabel >Description</InputLabel>
        <Input onChange={(e) => setDescription(e.currentTarget.value)}/>
        <InputLabel >Youtube Video URL</InputLabel>
        <Input onChange={(e) => setUrl(e.currentTarget.value)}/>
        <br />
        <br />
        <Button onClick={handleSubmit} variant='outlined'>Upload new video</Button>
    </form >
}