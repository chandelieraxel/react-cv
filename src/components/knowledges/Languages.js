import React, { Component } from "react";
import ProgressBar from "./ProgressBar";

class Languages extends Component {
	state = {
		languages: [
			{ id: 1, value: "Javascript", xp: 0.5 },
			{ id: 2, value: "CSS", xp: 1.6 },
			{ id: 3, value: "Php", xp: 0.2 },
			{ id: 4, value: "SQL", xp: 0.2 }
		],
		frameworks: [
			{ id: 1, value: "React", xp: 0.2 },
			{ id: 2, value: "Angular", xp: 0.3 },
			{ id: 3, value: "Bootstrap", xp: 0.5 },
			{ id: 4, value: "Git", xp: 1.5 }
		],
	};

	render() {
		let { languages, frameworks } = this.state;
		return (
			<div className="languagesFrameworks">
				<ProgressBar
					languages={languages}
					className="langagesDispay"
					title="languages"
				/>
				<ProgressBar
                    title="frameworks & autre outils"
                    languages={frameworks}
					className="frameworksDispay"
                />
			</div>
		);
	}
}

export default Languages;
