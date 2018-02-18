// @flow
import React from 'react';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import EditIcon from 'material-ui-icons/Edit';

import SpeedDial from '../../speed-dial';
import TemplateExample from '../TemplateExample/TemplateExample';

// types
import type {
	RenderButtonPropsType,
	RenderButtonIconPropsType,
	RenderOpenedButtonPropsType,
	RenderOpenedButtonIconPropsType,
} from '../../../material-ui-speed-dial.js.flow';

const PageExampleBasic = (): React$Element<*> => (
	<TemplateExample title="Basic Example">
		<SpeedDial
			renderButton={(props: RenderButtonPropsType, propsIcon: RenderButtonIconPropsType): React$Element<*> => (
				<Button {...props} variant="fab" color="primary" aria-label="add">
					<AddIcon {...propsIcon} />
				</Button>
			)}
			renderOpenedButton={(
				props: RenderOpenedButtonPropsType,
				propsIcon: RenderOpenedButtonIconPropsType
			): React$Element<*> => (
				<Button {...props} variant="fab" color="secondary" aria-label="edit">
					<EditIcon {...propsIcon} />
				</Button>
			)}
		/>
	</TemplateExample>
);
PageExampleBasic.displayName = 'PageExampleBasic';

export default PageExampleBasic;
