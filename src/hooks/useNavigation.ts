import {useNavigation} from '@react-navigation/native';

export const useCustomNavigation = () => {
  const navigation = useNavigation();

  const goTo = (to: string) => navigation.navigate(to);

  const goBack = () => navigation.goBack();

  return {goTo, goBack};
};
