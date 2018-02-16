// @flow
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Reboot from 'material-ui/Reboot';

import AppWrapper from '../AppWrapper/AppWrapper';
import AppFrame from '../AppFrame/AppFrame';
import PageHome from '../PageHome/PageHome';
import PageExampleBasic from '../PageExampleBasic/PageExampleBasic';

export const PALETTE_TYPE = {
	LIGHT: 'light',
	DARK: 'dark',
};
export const DIRECTION = {
	LTR: 'ltr',
	RTL: 'rtl',
};

export type PaletteTypeEnumType = $Values<typeof PALETTE_TYPE>;
export type DirectionEnumType = $Values<typeof DIRECTION>;

export type AppPropsType = {
	// classes: ClassesType,
};
export type AppStateType = {
	paletteType: PaletteTypeEnumType,
	direction: DirectionEnumType,
};

class App extends Component<AppPropsType, AppStateType> {
	static displayName = 'App';
	static defaultValues = {};

	state = {
		paletteType: PALETTE_TYPE.LIGHT,
		direction: DIRECTION.LTR,
	};

	handleTogglePaletteType = () => {
		this.setState({
			paletteType: this.state.paletteType === PALETTE_TYPE.LIGHT ? PALETTE_TYPE.DARK : PALETTE_TYPE.LIGHT,
		});
	};

	handleToggleDirection = () => {
		this.setState({
			direction: this.state.direction === DIRECTION.LTR ? DIRECTION.RTL : DIRECTION.LTR,
		});
	};

	render(): React$Element<*> {
		return (
			<BrowserRouter>
				<AppWrapper direction={this.state.direction} paletteType={this.state.paletteType}>
					<Reboot />
					<AppFrame
						onToggleDirection={this.handleToggleDirection}
						onTogglePaletteType={this.handleTogglePaletteType}
						direction={this.state.direction}
						paletteType={this.state.paletteType}
					>
						<Route exact component={PageHome} path="/" />
						<Route exact component={PageExampleBasic} path="/example-basic" />
					</AppFrame>
				</AppWrapper>
			</BrowserRouter>
		);
	}
}

export default App;
