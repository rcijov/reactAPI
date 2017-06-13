import  React from 'react';

class MasterLayout extends React.Component{
	
	constructor(props){
		super(props);
	}
	
	render() {
		return(
		<html lang="en">
			<head>
				<meta httpEquiv="Content-Type" content="text/html;charset=utf-8" />
				<title>{this.props.name}</title>
			</head>
			<body>
				{this.props.childen}
				<div>test</div>
			</body>
		</html>
		);
	}
}

export default  MasterLayout;
