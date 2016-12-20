const { visibilityFilters } = require('./actions');

// View is a function of state - list the items, filtering out completed if needed
module.exports = (state) => {
	return 'TODOS\n' + state.items
	.filter(item => {
		return state.visibilityFilter === visibilityFilters.SHOW_ALL ? true : !item.completed;
	})
	.map(item => {
		return `${item.text} ${item.completed ? '✔' : ''}`;
	})
	.join('\n') + '\n-------------';

};

