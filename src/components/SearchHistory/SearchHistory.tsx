import React, {FC} from 'react'
import { useDispatch } from 'react-redux';
import { sendLocal } from '../../redux/slices/TageAudioSlice';
import { reverseState } from '../../redux/slices/InputSlice';
import { errorMesege } from '../../redux/slices/InputSlice';
//styles
import './SearchHistory.scss'

export const SearchHistory: FC = () => {
  const dispatch = useDispatch()
  const getHistoryString = window.localStorage.getItem('searchHistory');
  const arrayOfHistoryUsersLinks = getHistoryString !== null ? JSON.parse(getHistoryString) : [];
  function onClickList(props: any) {
    dispatch(sendLocal(props))
    dispatch(reverseState())
    dispatch(errorMesege(false))
  }

  return (
    <div className='history'>
        <ul className='history-localList'>
            {arrayOfHistoryUsersLinks.map((element: string, index: number) => (
                <li 
                    //@ts-ignore
                    onClick={() => onClickList(element)}
                    key={index}
                    className='history-localuser_link'>
                    {element}
                </li>))}
        </ul>
    </div>
  )
}