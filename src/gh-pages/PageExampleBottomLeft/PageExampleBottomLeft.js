// @flow
/* eslint no-alert: 0*/
import React from 'react';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Avatar from 'material-ui/Avatar';

import AddIcon from 'material-ui-icons/Add';
import EditIcon from 'material-ui-icons/Edit';
import LinkIcon from 'material-ui-icons/Link';

import SpeedDial, { SpeedDialItem, SpeedDialLabel, SpeedDialBackdrop } from '../../speed-dial';
import presetFixedBottomLeft from '../../presets/presetFixedBottomLeft';
import TemplateExample from '../TemplateExample/TemplateExample';

// types
import type {
	PresetType,
	RenderPropsType,
	RenderButtonPropsType,
	RenderButtonIconPropsType,
	RenderOpenedButtonPropsType,
	RenderOpenedButtonIconPropsType,
	RenderOuterRimButtonPropsType,
	RenderOuterRimButtonIconPropsType,
	RenderListPropsType,
	RenderAvatarPropsType,
	RenderLabelPropsType,
	RenderBackdropPropsType,
} from '../../../material-ui-speed-dial.js.flow';

export type PageExampleBottomLeftPropsType = {
	classes: PresetType,
};

const PageExampleBottomLeft = ({ classes }: PageExampleBottomLeftPropsType) => {
	return (
		<TemplateExample
			title="Bottom left example"
			hrefCode="https://github.com/smollweide/material-ui-speed-dial/blob/master/src/gh-pages/PageExampleBottomLeft/PageExampleBottomLeft.js"
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
					<Button {...props} onClick={() => alert('edit')} variant="fab" color="secondary" aria-label="edit">
						<EditIcon {...propsIcon} />
					</Button>
				)}
				renderOuterRimButton={(
					props: RenderOuterRimButtonPropsType,
					propsIcon: RenderOuterRimButtonIconPropsType
				) => (
					<Button {...props} mini variant="fab" color="primary" aria-label="add-link">
						<LinkIcon {...propsIcon} />
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
					>
						{(propsLabel: RenderLabelPropsType) => <SpeedDialLabel {...propsLabel} text="Eric Hoffman" />}
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
};
PageExampleBottomLeft.displayName = 'PageExampleBottomLeft';

export default withStyles(presetFixedBottomLeft)(PageExampleBottomLeft);
