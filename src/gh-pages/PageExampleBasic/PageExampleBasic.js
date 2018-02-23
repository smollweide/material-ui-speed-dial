// @flow
import React from 'react';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Avatar from 'material-ui/Avatar';

import AddIcon from 'material-ui-icons/Add';
import EditIcon from 'material-ui-icons/Edit';

import SpeedDial, { SpeedDialItem, SpeedDialLabel } from '../../speed-dial';
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
} from '../../../material-ui-speed-dial.js.flow';
import type { StylesType, ThemeType, ClassesType } from '../../types/styles';

const styles = (theme: ThemeType): StylesType => {
	return {
		root: {
			position: 'fixed',
			bottom: 0,
			right: 0,
		},
		button: {
			position: 'absolute',
			bottom: theme.spacing.unit * 2,
			right: theme.spacing.unit * 2,
		},
		list: {
			bottom: theme.spacing.unit * 2.5,
			right: 0,
		},
		item: {},
		firstItem: {
			paddingTop: theme.spacing.unit,
		},
		avatar: {
			top: theme.spacing.unit * 0.7,
			right: theme.spacing.unit * 3,
		},
		label: {
			paddingTop: theme.spacing.unit * 0.5,
			paddingRight: theme.spacing.unit,
			paddingBottom: theme.spacing.unit * 0.5,
			paddingLeft: theme.spacing.unit,
			marginRight: theme.spacing.unit * 9,
		},
	};
};

export type PageExampleBasicPropsType = {
	classes: ClassesType,
	theme: ThemeType,
};

const PageExampleBasic = ({ classes }: PageExampleBasicPropsType): React$Element<*> => {
	return (
		<TemplateExample title="Basic Example">
			<SpeedDial
				className={classes.root}
				renderButton={(
					props: RenderButtonPropsType,
					propsIcon: RenderButtonIconPropsType
				): React$Element<*> => (
					<Button
						{...{
							...props,
							className: `${props.className} ${classes.button}`,
						}}
						variant="fab"
						color="primary"
						aria-label="add"
					>
						<AddIcon {...propsIcon} />
					</Button>
				)}
				renderOpenedButton={(
					props: RenderOpenedButtonPropsType,
					propsIcon: RenderOpenedButtonIconPropsType
				): React$Element<*> => (
					<Button
						{...{
							...props,
							className: `${props.className} ${classes.button}`,
						}}
						variant="fab"
						color="secondary"
						aria-label="edit"
					>
						<EditIcon {...propsIcon} />
					</Button>
				)}
				renderList={(props: RenderListPropsType): React$Element<*> => (
					<ul {...{ ...props, className: `${props.className} ${classes.list}` }} />
				)}
			>
				{(props: RenderPropsType): Array<React$Element<*>> => [
					<SpeedDialItem
						{...{ ...props, className: `${props.className} ${classes.item}` }}
						key="c"
						renderAvatar={(propsAvatar: RenderAvatarPropsType): React$Element<*> => (
							<Avatar
								{...{ ...propsAvatar, className: `${propsAvatar.className} ${classes.avatar}` }}
								alt="Eric Hoffman"
								src="/images/people-03.jpeg"
							/>
						)}
					>
						{(propsLabel: RenderLabelPropsType): React$Element<*> => (
							<SpeedDialLabel
								{...{ ...propsLabel, className: `${propsLabel.className} ${classes.label}` }}
								text="Eric Hoffman"
							/>
						)}
					</SpeedDialItem>,
					<SpeedDialItem
						{...{ ...props, className: `${props.className} ${classes.item}` }}
						key="b"
						renderAvatar={(propsAvatar: RenderAvatarPropsType): React$Element<*> => (
							<Avatar
								{...{ ...propsAvatar, className: `${propsAvatar.className} ${classes.avatar}` }}
								alt="Grace Ng"
								src="/images/people-09.jpeg"
							/>
						)}
					>
						{(propsLabel: RenderLabelPropsType): React$Element<*> => (
							<SpeedDialLabel
								{...{ ...propsLabel, className: `${propsLabel.className} ${classes.label}` }}
								text="Grace Ng"
							/>
						)}
					</SpeedDialItem>,
					<SpeedDialItem
						{...{ ...props, className: `${props.className} ${classes.item} ${classes.firstItem}` }}
						key="a"
					>
						{(propsLabel: RenderLabelPropsType): React$Element<*> => (
							<SpeedDialLabel
								{...{ ...propsLabel, className: `${propsLabel.className} ${classes.label}` }}
								text="Edit"
							/>
						)}
					</SpeedDialItem>,
				]}
			</SpeedDial>
		</TemplateExample>
	);
};
PageExampleBasic.displayName = 'PageExampleBasic';

export default withStyles(styles, { withTheme: true })(PageExampleBasic);
