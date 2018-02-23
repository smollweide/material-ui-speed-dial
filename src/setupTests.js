/**
 * Test suite setup
 */
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// https://reactjs.org/docs/javascript-environment-requirements.html
// https://dev.to/letsbsocial1/requestanimationframe--polyfill-in-react-16-2ce
global.requestAnimationFrame = function(cb) {
	setTimeout(cb, 0);
};

configure({ adapter: new Adapter() });
