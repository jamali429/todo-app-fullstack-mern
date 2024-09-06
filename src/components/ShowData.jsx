import PropTypes from 'prop-types';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import "./showdata.css"

export default function ShowData({ text, updateMode, deleteToDo }) {
    return (
        <div className='showData'>
            <div className="data">{text}</div>
            <div className="right">
                <FaEdit className="icons" onClick={updateMode} />
                <MdDelete className="icons" onClick={deleteToDo} />
            </div>
        </div>
    )
}


ShowData.propTypes = {
    text: PropTypes.string,
    updateMode: PropTypes.func,
    deleteToDo: PropTypes.func
};
