import './button.css';
import PropTypes from 'prop-types';

function Button({children, type="button", onClick, style}) {
    const buttonStyle = style ?? {};
    return (
        <button style={buttonStyle} type={type} className='button' onClick={onClick}>{children}</button>
    )
}

export default Button;