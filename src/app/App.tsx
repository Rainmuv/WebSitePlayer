import { ErrorMesege, Input, FullAudio } from '../components/imports';

import { useSelector } from 'react-redux';
import { selectInput } from '../redux/slices/InputSlice';


import './App.scss';


const App = () => {
  const { states, errMes } = useSelector(selectInput)

  return (
    <>
      {errMes && <ErrorMesege/>}
      {states ? <Input/> : <FullAudio/>}
    </>
  );
}

export default App;
