// @flow
/* eslint flowtype/require-return-type: 0*/
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';

import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';

import SpeedDial, { SpeedDialItem, SpeedDialLabel } from '../../speed-dial';
import presetFixedBottomRight from '../../presets/presetFixedBottomRight';
import combineStyles from '../../utils/combineStyles';
import TemplateExample from '../TemplateExample/TemplateExample';

// types
import type {
	ClassesType,
	ThemeType,
	StylesType,
	RenderPropsType,
	RenderButtonPropsType,
	RenderButtonIconPropsType,
	RenderOpenedButtonPropsType,
	RenderOpenedButtonIconPropsType,
	RenderListPropsType,
	RenderAvatarPropsType,
	RenderLabelPropsType,
} from '../../../material-ui-speed-dial.js.flow';

export type PageExampleControlledPropsType = {
	classes: ClassesType,
};
export type PageExampleControlledStateType = {
	isOpen: boolean,
};

const styles = (theme: ThemeType): StylesType => {
	return {
		buttonControlledWrapper: {
			marginTop: theme.spacing.unit * 20,
			marginBottom: theme.spacing.unit * 20,
			textAlign: 'center',
		},
	};
};

class PageExampleControlled extends Component<PageExampleControlledPropsType, PageExampleControlledStateType> {
	static displayName = 'PageExampleControlled';
	static defaultValues = {};

	state = {
		isOpen: false,
	};

	handleClick = () => {
		this.setState({
			isOpen: !this.state.isOpen,
		});
	};

	render() {
		const { classes } = this.props;
		const { isOpen } = this.state;
		return (
			<TemplateExample
				title="Controlled SpeedDial example"
				hrefCode="https://github.com/smollweide/material-ui-speed-dial/blob/master/src/gh-pages/PageExampleControlled/PageExampleControlled.js"
			>
				<div className={classes.buttonControlledWrapper}>
					<Button variant="raised" color="primary" onClick={this.handleClick}>
						{isOpen ? 'Close SpeedDial' : 'Open SpeedDial'}
					</Button>
				</div>
				<SpeedDial
					isOpen={isOpen}
					preset={classes}
					renderButton={(props: RenderButtonPropsType, propsIcon: RenderButtonIconPropsType) => (
						<Button {...props} variant="fab" color="secondary" aria-label="add">
							<AddIcon {...propsIcon} />
						</Button>
					)}
					renderOpenedButton={(
						props: RenderOpenedButtonPropsType,
						propsIcon: RenderOpenedButtonIconPropsType
					) => (
						<Button {...props} variant="fab" color="secondary" aria-label="edit">
							<EditIcon {...propsIcon} />
						</Button>
					)}
					renderList={(props: RenderListPropsType) => <ul {...props} />}
				>
					{(props: RenderPropsType): Array<React$Element<*>> => [
						<SpeedDialItem
							{...props}
							key="c"
							renderAvatar={(propsAvatar: RenderAvatarPropsType) => <Avatar {...propsAvatar}>C</Avatar>}
						>
							{(propsLabel: RenderLabelPropsType) => (
								<SpeedDialLabel {...propsLabel} text="Eric Hoffman" />
							)}
						</SpeedDialItem>,
						<SpeedDialItem
							{...props}
							key="b"
							renderAvatar={(propsAvatar: RenderAvatarPropsType) => <Avatar {...propsAvatar}>B</Avatar>}
						>
							{(propsLabel: RenderLabelPropsType) => <SpeedDialLabel {...propsLabel} text="Grace Ng" />}
						</SpeedDialItem>,
						<SpeedDialItem {...{ ...props, className: `${props.className} ${classes.firstItem}` }} key="a">
							{(propsLabel: RenderLabelPropsType) => <SpeedDialLabel {...propsLabel} text="Edit" />}
						</SpeedDialItem>,
					]}
				</SpeedDial>
			</TemplateExample>
		);
	}
}

export default withStyles(combineStyles(presetFixedBottomRight, styles))(PageExampleControlled);
