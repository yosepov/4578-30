import React, { useState, useEffect } from 'react';

 function handleClick(){
    let searchArr= []

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
    
      searchArr.push({value, time})
      console.log(searchArr)
    }

