import { useDispatch } from 'react-redux'
import { setLanguage } from '../redux/slices/commonSlice'

interface languageProps {
  value: string
}
function useCommon() {
  const dispatch = useDispatch()
  const changeLanguage = (props: languageProps) => {
    const { value } = props
    dispatch(setLanguage(value))
  }

  return {
    changeLanguage,
  }
}

export default useCommon
