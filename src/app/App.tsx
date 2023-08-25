import { FullAudio } from '../components/FullAudio/FullAudio';
import { Input } from '../components/Input/Input';
import { useSelector } from 'react-redux';
import { selectInput } from '../redux/slices/InputSlice';
import { ErrorMesege } from '../components/ErrorMesege/ErrorMesege';

import './App.scss';


function App() {
  const { states, errMes } = useSelector(selectInput)

  return (
    <>
      {errMes && <ErrorMesege/>}
      {states ? <Input/> : <FullAudio/>}
    </>
  );
}

export default App;
