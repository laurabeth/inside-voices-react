import { Switch, Route } from 'react-router-dom';
import AccountSettings from '../pages/AccountSettings';
import CreatePlaylist from '../pages/CreatePlayList';

const Routes = () => {
	return (
		<Switch>
			<Route path="/" />
			<Route path="/" component={AccountSettings} />
			<Route path="/" component={CreatePlaylist} />
			<Route path="/" component={Help} />
			<Route path="/" component={SignIn} />
			<Route path="/" component={SignUp} />
		</Switch>
	);
};

export default Routes;
