// @flow
/* eslint flowtype/require-return-type: 0*/
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';

import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';

import SpeedDial, { SpeedDialItem, SpeedDialLabel, SpeedDialBackdrop } from '../../speed-dial';
import presetFixedBottomRight from '../../presets/presetFixedBottomRight';
import TemplateExample from '../TemplateExample/TemplateExample';

// types
import type {
	PresetType,
	RenderPropsType,
	RenderButtonPropsType,
	RenderButtonIconPropsType,
	RenderOpenedButtonPropsType,
	RenderOpenedButtonIconPropsType,
	RenderListPropsType,
	RenderAvatarPropsType,
	RenderLabelPropsType,
	RenderBackdropPropsType,
} from '../../../material-ui-speed-dial.js.flow';

export type PageExampleCloseOnClickItemPropsType = {
	classes: PresetType,
};

const PageExampleCloseOnClickItem = ({ classes }: PageExampleCloseOnClickItemPropsType) => {
	return (
		<TemplateExample
			title="Close onClick item example"
			hrefCode="https://github.com/smollweide/material-ui-speed-dial/blob/master/src/gh-pages/PageExampleCloseOnClickItem/PageExampleCloseOnClickItem.js"
		>
			<SpeedDial
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
				renderBackdrop={(props: RenderBackdropPropsType) => <SpeedDialBackdrop {...props} />}
			>
				{(props: RenderPropsType): Array<React$Element<*>> => [
					<SpeedDialItem
						{...props}
						key="c"
						renderAvatar={(propsAvatar: RenderAvatarPropsType) => <Avatar {...propsAvatar}>C</Avatar>}
						onClick={props.handleClose}
					>
						{(propsLabel: RenderLabelPropsType) => <SpeedDialLabel {...propsLabel} text="Eric Hoffman" />}
					</SpeedDialItem>,
					<SpeedDialItem
						{...props}
						key="b"
						renderAvatar={(propsAvatar: RenderAvatarPropsType) => <Avatar {...propsAvatar}>B</Avatar>}
						onClick={props.handleClose}
					>
						{(propsLabel: RenderLabelPropsType) => <SpeedDialLabel {...propsLabel} text="Grace Ng" />}
					</SpeedDialItem>,
					<SpeedDialItem
						{...{ ...props, className: `${props.className} ${classes.firstItem}` }}
						key="a"
						onClick={props.handleClose}
					>
						{(propsLabel: RenderLabelPropsType) => <SpeedDialLabel {...propsLabel} text="Edit" />}
					</SpeedDialItem>,
				]}
			</SpeedDial>
		</TemplateExample>
	);
};
PageExampleCloseOnClickItem.displayName = 'PageExampleBasic';

export default withStyles(presetFixedBottomRight)(PageExampleCloseOnClickItem);
