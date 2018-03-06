export const cellStyles = {

	// For Switch Cell only
	switchCell: {
		mainText: {
			fontSize: 14,
			fontWeight: '600',
			color: '#333333'
		}
	},

	// For Amount Input Cell only
	amountInputCell: {
		mainText: {
			fontSize: 12,
			color: '#a2a2a2',
		},
		inputText: {
			fontSize: 16,
			color: '#333333',
			height: 20,
			marginTop: 5
		},
		cellContent: {
			flex: 1,
			flexDirection: 'column',
			justifyContent: 'center',
			marginLeft: 16,
			marginRight: 16
		}
	},

	expandableCell: {
		mainText: {
			fontSize: 12,
			color: '#a2a2a2'
		},
		detailText: {
			fontSize: 16,
			color: '#333333',
			height: 20,
			marginTop: 5
		},
		cellContent: {
			flex: 1,
			flexDirection: 'column',
			justifyContent: 'center',
			marginLeft: 16,
			marginRight: 16
		},
		subcell: {
			backgroundColor: 'white',
			marginLeft: 32
		}
	},

	// Common to all cells
	cellContainer: {
		flexDirection: 'column',
		backgroundColor: 'white'
	},
	cellContent: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginLeft: 16,
		marginRight: 16
	},
	cellBottomShadow: {
		height: 1,
		backgroundColor: '#e9e9e9'
	},
	mainText: {
		fontSize: 14,
		color: '#333333',
		textAlign: 'left'
	},
	standaloneMainText: {
		fontSize: 14,
		color: '#333333',
		marginRight: 'auto'
	},
	detailText: {
		marginTop: 5,
		fontSize: 12,
		color: '#a2a2a2',
		backgroundColor: 'transparent'
	},
	chevronImage: {
		width: 16,
		height: 16,
		fontSize: 16,
		textAlignVertical: 'center',
		textAlign: 'center',
		color: '#c7c7cc'
	},
	checkbox: {
		backgroundColor: 'transparent',
		height: 25,
		width: 25
	},
	leftIcon: {
		width: 25,
		height: 25,
		resizeMode: 'contain',
		marginRight: 16
	},
	textWithIconContainer: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
	amountText: {
		fontSize: 14,
		textAlign: 'right',
		textAlignVertical: 'center',
		color: '#333333',
		marginRight: 8
	},
	lefTextWithIconContainer: {
		flex: 1,
		paddingRight: 8
	},
	rightTextWithIconContainer: {
		justifyContent: 'flex-end',
	},
	swipeButtonRight: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'flex-start',
    paddingLeft: 13
	},
	swipeButtonLeft: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'flex-end',
    paddingRight: 13
	},
	swipeButtonText: {
		color: '#ffffff',
		textAlign: 'center',
		width: 50,
		fontSize: 10
	},
	sliderInputField: {
		width: '33%',
		textAlign: 'right',
		marginRight: 8,
		padding: 0,
		borderColor: '#d0d0d0',
		borderWidth: 1,
		borderRadius: 5,
		paddingRight: 5
	},
	sliderLabel: {
		position: 'absolute',
		left: 20,
		fontSize: 10
	}
};
