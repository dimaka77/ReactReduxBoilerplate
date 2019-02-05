import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';
import * as CONSTS from '../../constants/ReducerConstants';
import * as ACTIONS from '../../action_creators/Main';
import styles from './App.styles';

class App extends Component {
	static defaultProps = {
		loading: false
	};

	static propTypes = {
		loading: PropTypes.bool
	};

	/**
	 * Renders spinner
	 * @returns {Node} React node
	 */
	renderSpinner = () => {
		const { classes } = this.props;
		return (
			<div className={classes.progressCircle}>
				<CircularProgress classes={{ colorPrimary: classes.progressCircleColor }} />
			</div>
		);
	}

	render() {

		return (
			<div>MAIN APP CONTAINER</div>
		);
	}
}
function mapStateToProps(state) {
	const { main } = state;

	return {
		loading: main.get(CONSTS.LOADING)
	};
}

function mapDispatchToProps(dispatch) {
	return {
		MainActions: bindActionCreators(ACTIONS, dispatch)
	};
}
export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(App));
