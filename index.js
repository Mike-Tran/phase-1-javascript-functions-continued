function saturdayFun(activity = "roller-skate") {
	return `This Saturday, I want to ${activity}!`;
}

function mondayWork(workLocation = "go to the office") {
	return `This Monday, I will ${workLocation}.`;
}

function wrapAdjective(wrap = "*") {
	return function (adjective = "special") {
		return `You are ${wrap}${adjective}${wrap}!`
	};
}
