import {Dimensions} from 'react-native';

const w = Dimensions.get('screen').width;
const h = Dimensions.get('screen').height;

export const responsiveHeight = p => {
  return (p / 100) * h;
};

export const responsiveWidth = p => {
  return (p / 100) * w;
};
