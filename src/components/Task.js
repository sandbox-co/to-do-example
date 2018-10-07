import React, { Component } from "react";

class Task extends Component {
	render() {
		const { id, task, completed, toggleToDo, removeToDo } = this.props;
		return (
			<div className={"todo"}>
				<div onClick={() => toggleToDo(id)}>
					<h1>{id}</h1>
					<h2 className={completed ? "strikethrough" : null}>{task}</h2>
				</div>
				<div onClick={() => removeToDo(id)}>remove</div>
			</div>
		);
	}
}

export default Task;
