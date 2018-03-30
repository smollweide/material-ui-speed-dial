// @flow
/* eslint flowtype/require-return-type: 0*/
import React from 'react';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Avatar from 'material-ui/Avatar';

import AddIcon from 'material-ui-icons/Add';
import EditIcon from 'material-ui-icons/Edit';

import SpeedDial, { SpeedDialItem, SpeedDialLabel } from '../../speed-dial';
import combineStyles from '../../utils/combineStyles';
import presetStaticDownwardsRightAligned from '../../presets/presetStaticDownwardsRightAligned';
import TemplateExample from '../TemplateExample/TemplateExample';

// types
import type { ThemeType, ClassesType } from '../../types/styles';
import type {
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

export type PageExampleStaticDownwardsRightAlignedPropsType = {
	classes: ClassesType,
};

const styles = (theme: ThemeType): StylesType => {
	return {
		box: {
			boxShadow: 'inset 0px 0px 4px 0px rgba(0, 0, 0, 0.2)',
			marginTop: theme.spacing.unit * 6,
			height: theme.spacing.unit * 40,
		},
	};
};

const PageExampleStaticDownwardsRightAligned = ({ classes }: PageExampleStaticDownwardsRightAlignedPropsType) => {
	return (
		<TemplateExample
			title="Static downwards and right aligned"
			hrefCode="https://github.com/smollweide/material-ui-speed-dial/blob/master/src/gh-pages/PageExampleStaticDownwardsRightAligned/PageExampleStaticDownwardsRightAligned.js"
		>
			<div className={classes.box}>
				<SpeedDial
					className={classes.speedDial}
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
					// renderBackdrop={(props: RenderBackdropPropsType) => <SpeedDialBackdrop {...props} />}
				>
					{(props: RenderPropsType): Array<React$Element<*>> => [
						<SpeedDialItem
							{...{ ...props, className: `${props.className} ${classes.firstItem}` }}
							key="a"
							onClick={props.handleClose}
						>
							{(propsLabel: RenderLabelPropsType) => <SpeedDialLabel {...propsLabel} text="Edit" />}
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
							{...props}
							key="c"
							renderAvatar={(propsAvatar: RenderAvatarPropsType) => <Avatar {...propsAvatar}>C</Avatar>}
							onClick={props.handleClose}
						>
							{(propsLabel: RenderLabelPropsType) => (
								<SpeedDialLabel {...propsLabel} text="Eric Hoffman" />
							)}
						</SpeedDialItem>,
					]}
				</SpeedDial>
			</div>
		</TemplateExample>
	);
};
PageExampleStaticDownwardsRightAligned.displayName = 'PageExampleBasic';

// $FlowFixMe
export default withStyles(combineStyles(presetStaticDownwardsRightAligned, styles))(
	PageExampleStaticDownwardsRightAligned
);
