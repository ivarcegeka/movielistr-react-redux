import React from 'react';

class MainLayout extends React.Component {

	constructor() {
		super();
	}

	render() {
		return (
			<div className="app">
				<div className="action-bar">
					<span>MovieListr</span>
				</div>
				<main>
					{this.props.children}
				</main>
			</div>
		);
	}
}

export default MainLayout;
