import { FullAudio } from '../components/FullAudio/FullAudio';
import { Input } from '../components/Input/Input';
import { useSelector } from 'react-redux';
import { selectInput } from '../redux/slices/InputSlice';

import './App.scss';

function App() {
  const { states } = useSelector(selectInput)

  return (
    <>
      {states ? <Input/> : <FullAudio/>}
    </>
  );
}

export default App;
