import React from 'react';
import DefaultLayout from './layout/master';

class ViewsIndex extends React.Component {
	
	constructor(props){
		super(props);
	}
	
	
	render(){
		return(
			<DefaultLayout name={this.props.name}>
				<div>
					<h1>this was built in react</h1>
				</div>
			</DefaultLayout>
		)
	}
}

export default ViewsIndex;
