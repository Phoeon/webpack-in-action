import React from 'react';
import LiCmp from './li-cmp.js';
import DataSource from './data.js';
console.log(DataSource)
export default React.createClass({
	getInitialState : function(){
		return {items : DataSource};
	},
	render : function() {
		var items = this.state.items;
		return (<ul>
			{items.map(item => (
				<LiCmp item = {item}></LiCmp>
			))}
			</ul>)
	}
})
