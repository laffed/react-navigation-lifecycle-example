import {DefaultTheme} from 'react-native-paper';
import {COLORS} from '@styles';

export const theme = {
	...DefaultTheme,
	roundness: 2,
	colors: {
		...DefaultTheme.colors,
		primary: COLORS.darkGreen,
		accent: COLORS.lightGreen
	}
}