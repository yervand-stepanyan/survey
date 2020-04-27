import { useContext } from 'react';
import SurveyContext from './context';

export function useStore() {
  return useContext(SurveyContext);
}
