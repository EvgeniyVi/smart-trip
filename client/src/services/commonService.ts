import { useDispatch } from 'react-redux'
import { setLanguage } from '../redux/slices/commonSlice'

function useCommon() {
  const dispatch = useDispatch()
  const changeLanguage = (value: string) => {
    dispatch(setLanguage(value))
  }

  return {
    changeLanguage,
  }
}

export default useCommon
