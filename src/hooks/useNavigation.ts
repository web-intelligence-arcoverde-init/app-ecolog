import {useNavigation} from '@react-navigation/native';

export const useCustomNavigation = () => {
  const navigation = useNavigation();

  const goTo = (to: string) => navigation.navigate(to);

  return {goTo};
};
