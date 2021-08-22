import React, {useEffect, useRef} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import LottieView from 'lottie-react-native';
import {cooking_animation} from '@assets';
import {useAppState} from '@state';

function Splash() {
	const {splashMessage} = useAppState().app;
	const lottieRef = useRef<LottieView>(null);

	useEffect(() => {
		lottieRef?.current?.play();
	}, [lottieRef]);

	return (
		<View style={styles.container}>
			<LottieView
				style={styles.lottie}
				source={cooking_animation}
				ref={lottieRef}
			/>
			<View style={{marginTop: '5%'}}>
				<Text style={styles.title}>Préchauffer!</Text>
				<Text style={styles.msg}>{splashMessage}</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		height: '80%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		textAlign: 'center',
	},
	title: {
		fontSize: 30,
		fontWeight: 'bold',
		alignSelf: 'center'
	},
	msg: {
		marginTop: 5,
		fontSize: 20,
		alignSelf: 'center'
	},
	lottie: {
		width: '100%',
		margin: 0,
		alignSelf: 'center',
	}
})

export default Splash;