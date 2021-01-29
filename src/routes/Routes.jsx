import { Switch, Route } from 'react-router-dom';
import { AccountSettings, CreatePlaylist, Help, Home, SignIn, SignUp } from '../pages';

export default Routes = () => {
	return (
		<Switch>
			<Route path="/" component={Home} />
			<Route exact path="/account-settings" component={AccountSettings} />
			<Route exact path="/create-playlist" component={CreatePlaylist} />
			<Route exact path="/help" component={Help} />
			<Route exact path="/sign-in" component={SignIn} />
			<Route exact path="/sign-up" component={SignUp} />
		</Switch>
	);
};
