import { Box, Typography, Link } from '@mui/material'
import React from 'react'

export const Info = () => {

  return <>
    <Box sx={{width: '640px'}}>
        <Typography>
        Testing is one of those things that people either love or hate. Usually testing is something that is hated, until you work on a project with good tests and you realize how amazing they are. In this video I am going to show you how to get started with testing in JavaScript using Jest. I will talk about the code you need in order to write tests, as well as show you some pitfalls of testing. At the end of the video I will breakdown the importance of testing and some best practices you can adhere to in order to make your tests amazing. 
        </Typography>
            <br/>
            <br/>
        <Typography>📚 Materials/References:</Typography>
        <br/>
        <Typography>Spread Operator Video:</Typography>
        <Typography>Reference Vs Value Video:</Typography>
            <br />
            <br />
        <Typography>🧠 Concepts Covered:</Typography>
        <br />
        <Typography>- How to install Jest</Typography>
        <Typography>- What unit testing is</Typography>
        <Typography>- Why testing is important</Typography>
        <Typography>- How to write unit tests with Jest</Typography>
        <Typography>- The importance of test coverage</Typography>
        <br />
        <br />
        <Typography>🌎 Find Me Here:</Typography>
        <br />
        <Typography>My Courses:<Link>https://courses.webdevsimplified.com</Link></Typography>
        <Typography>Patreon:<Link>https://www.patreon.com/WebDevSimplified</Link></Typography>
        <Typography>Twitter:<Link> https://twitter.com/DevSimplified</Link></Typography>
        <Typography>Discord:<Link> https://discord.gg/7StTjnR</Link></Typography>
        <Typography>GitHub:<Link> https://github.com/WebDevSimplified</Link></Typography>
        <Typography>CodePen:<Link> https://codepen.io/WebDevSimplified</Link></Typography>
        <br />
        <br />
    <Typography sx={{
       color: '#065fd4',
       fontSize: '16px'
      }}> #Jest #UnitTest #WDS</Typography>
    </Box>
  </>
}

