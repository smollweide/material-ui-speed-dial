// @flow
/* eslint flowtype/require-return-type: 0*/
import React from 'react';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Avatar from 'material-ui/Avatar';

import AddIcon from 'material-ui-icons/Add';
import EditIcon from 'material-ui-icons/Edit';

import SpeedDial, { SpeedDialItem, SpeedDialLabel, SpeedDialBackdrop } from '../../speed-dial';
import presetFixedBottomRight from '../../presets/presetFixedBottomRight';
import TemplateExample from '../TemplateExample/TemplateExample';

// types
import type {
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
import type { ClassesType } from '../../types/styles';

export type PageExampleBasicPropsType = {
	classes: ClassesType,
};

const PageExampleBasic = ({ classes }: PageExampleBasicPropsType) => {
	return (
		<TemplateExample title="Basic Example">
			<SpeedDial
				preset={classes}
				renderButton={(props: RenderButtonPropsType, propsIcon: RenderButtonIconPropsType) => (
					<Button {...props} variant="fab" color="primary" aria-label="add">
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
						renderAvatar={(propsAvatar: RenderAvatarPropsType) => (
							<Avatar {...propsAvatar} alt="Eric Hoffman" src="http://lorempixel.com/80/80/people/3" />
						)}
					>
						{(propsLabel: RenderLabelPropsType) => <SpeedDialLabel {...propsLabel} text="Eric Hoffman" />}
					</SpeedDialItem>,
					<SpeedDialItem
						{...props}
						key="b"
						renderAvatar={(propsAvatar: RenderAvatarPropsType) => (
							<Avatar {...propsAvatar} alt="Grace Ng" src="http://lorempixel.com/80/80/people/9" />
						)}
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
PageExampleBasic.displayName = 'PageExampleBasic';

export default withStyles(presetFixedBottomRight)(PageExampleBasic);
