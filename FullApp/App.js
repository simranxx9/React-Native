import React,{useState} from 'react';
import Drawer from './routes/drawer';
// import {AppLoading} from 'expo';

// const getFonts = ()=> Font.loadAsync({
//   'oswald-regular':require('./assets/fonts/Oswald-Regular.ttf'),
//   'oswald-bold':require('./assets/fonts/Oswald-Bold.ttf'),
// });

export default function App() {
  return(
    <Drawer />
  )
  
//   const [fonts,setFonts] = useState(false);
  
//   if(fonts)
//   {
//     return (
//       <Drawer />
//     );
//   }
//   else{
//     return(
//         <AppLoading
//       startAsync={getFonts}
//       onFinish={()=>setFonts(true)}

//      />
//     )

//   }
}

