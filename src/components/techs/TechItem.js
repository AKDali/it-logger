import React from "react";
import M from "materialize-css/dist/js/materialize.min.js";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteTech } from "../../actions/techActions";

const TechItem = ({ tech, deleteTech }) => {
	const onDelete = () => {
		deleteTech(tech.id);

		M.toast({ html: `Tech ${tech.firstName} ${tech.lastName} deleted ` });
	};

	return (
		<li className='collection-item'>
			<div>
				{tech.firstName} {tech.lastName}
				<a href='#!' onClick={onDelete} className='secondary-content'>
					<i className='material-icons grey-text'>delete</i>
				</a>
			</div>
		</li>
	);
};

TechItem.propTypes = {
	deleteTech: PropTypes.func.isRequired,
	tech: PropTypes.object.isRequired,
};

export default connect(null, { deleteTech })(TechItem);
