import { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import MicIcon from '@mui/icons-material/Mic';

export {}
export const SetTimeEndSearch =  () =>{
  const [value, setValue] = useState('');

   function handleChange(event: any) {
      setValue(event.target.value);
  }
  
  const [time, setTime] = useState(new Date());
  useEffect(() => {
      const interval = setInterval(() => {
          setTime(new Date());
      }, 1000);
      return () => clearInterval(interval);
  }, [])
  
  function handleClick(){
      let searchArr= []
  
      searchArr.push({value, time})
      console.log(searchArr)
      }

      return <>
       <div className='search' >
            <button className='micIconButton' ><MicIcon /></button>
            <div className='divInput'>
                <input className='input' value = {value} onChange={handleChange} placeholder='search'></input>
                <button className='searchButton' onClick={handleClick}><SearchIcon /></button>
            </div>
            <button className='kayBoardButton keyboardButton'><KeyboardIcon className='keyboardIcon' /></button>
        </div>
      </>
 }

