// @flow
import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import AppWrapper from '../AppWrapper/AppWrapper';
import AppFrame from '../AppFrame/AppFrame';
import PageHome from '../PageHome/PageHome';
import PageGettingStarted from '../PageGettingStarted/PageGettingStarted';
import PageExampleBasic from '../PageExampleBasic/PageExampleBasic';
import PageExampleBottomLeft from '../PageExampleBottomLeft/PageExampleBottomLeft';
import PageExampleOuterRimButton from '../PageExampleOuterRimButton/PageExampleOuterRimButton';
import PageExampleCloseOnClickItem from '../PageExampleCloseOnClickItem/PageExampleCloseOnClickItem';
import PageExampleControlled from '../PageExampleControlled/PageExampleControlled';
import PageExampleStaticUpwardsRightAligned from '../PageExampleStaticUpwardsRightAligned/PageExampleStaticUpwardsRightAligned';
import PageExampleStaticUpwardsLeftAligned from '../PageExampleStaticUpwardsLeftAligned/PageExampleStaticUpwardsLeftAligned';
import PageExampleStaticDownwardsRightAligned from '../PageExampleStaticDownwardsRightAligned/PageExampleStaticDownwardsRightAligned';
import PageExampleStaticDownwardsLeftAligned from '../PageExampleStaticDownwardsLeftAligned/PageExampleStaticDownwardsLeftAligned';

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
			<HashRouter>
				<AppWrapper direction={this.state.direction} paletteType={this.state.paletteType}>
					<CssBaseline />
					<AppFrame
						onToggleDirection={this.handleToggleDirection}
						onTogglePaletteType={this.handleTogglePaletteType}
						direction={this.state.direction}
						paletteType={this.state.paletteType}
					>
						<Route exact component={PageHome} path="/" />
						<Route exact component={PageGettingStarted} path="/getting-started" />
						<Route exact component={PageExampleBasic} path="/example-basic" />
						<Route exact component={PageExampleOuterRimButton} path="/example-outer-rim-button" />
						<Route exact component={PageExampleCloseOnClickItem} path="/example-close-on-click-item" />
						<Route exact component={PageExampleBottomLeft} path="/example-bottom-left" />
						<Route exact component={PageExampleControlled} path="/example-controlled" />
						<Route
							exact
							component={PageExampleStaticUpwardsRightAligned}
							path="/example-static-upwards-right-aligned"
						/>
						<Route
							exact
							component={PageExampleStaticUpwardsLeftAligned}
							path="/example-static-upwards-left-aligned"
						/>
						<Route
							exact
							component={PageExampleStaticDownwardsRightAligned}
							path="/example-static-downwards-right-aligned"
						/>
						<Route
							exact
							component={PageExampleStaticDownwardsLeftAligned}
							path="/example-static-downwards-left-aligned"
						/>
					</AppFrame>
				</AppWrapper>
			</HashRouter>
		);
	}
}

export default App;
