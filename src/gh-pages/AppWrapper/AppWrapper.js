// @flow

import React, { Component } from 'react';
import JssProvider from 'react-jss/lib/JssProvider';
import { MuiThemeProvider } from '@material-ui/core/styles';
// import getContext, { getTheme } from '../../styles/getContext';
import createContext from '../../styles/createContext';
import type { CreateContextReturnType } from '../../styles/createContext';
import type { PaletteTypeEnumType, DirectionEnumType } from '../App/App';

// // Inject the insertion-point-jss after docssearch
// if (process.browser && !global.__INSERTION_POINT__) {
// 	global.__INSERTION_POINT__ = true;
// 	const styleNode = document.createComment('insertion-point-jss');
// 	const docsearchStylesSheet = document.querySelector('#insertion-point-jss');
//
// 	if (document.head && docsearchStylesSheet) {
// 		document.head.insertBefore(styleNode, docsearchStylesSheet.nextSibling);
// 	}
// }

export type AppWrapperPropsType = {
	children: React$Node,
	paletteType: PaletteTypeEnumType,
	direction: DirectionEnumType,
};

class AppWrapper extends Component<AppWrapperPropsType> {
	static displayName = 'AppWrapper';

	componentWillMount() {
		this.styleContext = createContext();
		this.styleContext.theme.direction = this.props.direction;
	}

	componentDidMount() {
		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector('#jss-server-side');
		if (jssStyles && jssStyles.parentNode) {
			jssStyles.parentNode.removeChild(jssStyles);
		}

		if (document.body) {
			document.body.dir = this.props.direction;
		}
	}

	componentWillReceiveProps(nextProps: AppWrapperPropsType) {
		if (nextProps.direction !== this.props.direction && document.body) {
			document.body.dir = nextProps.direction;
			this.styleContext.theme.direction = nextProps.direction;
		}
	}

	styleContext: CreateContextReturnType;

	render(): React$Element<*> {
		return (
			<JssProvider
				registry={this.styleContext.sheetsRegistry}
				jss={this.styleContext.jss}
				generateClassName={this.styleContext.generateClassName}
			>
				<MuiThemeProvider theme={this.styleContext.theme} sheetsManager={this.styleContext.sheetsManager}>
					{this.props.children}
				</MuiThemeProvider>
			</JssProvider>
		);
	}
}

export default AppWrapper;
