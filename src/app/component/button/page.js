import React from "react";
import PropTypes from 'prop-types';

const Button = ({ onClick, className, children, loading = false, variant = "primary" }) => {
    // const classNames = `btn' ${loading ? 'loading' : ''}`;
    const classNames = loading ? `spinnerbtn loading ${className}` : `spinnerbtn ${className}`;
    return (
        <div>
            <button type="button" onClick={onClick} className={classNames} disabled={loading}>
                {loading && (
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden"></span>
                    </div>
                )}
                <span className="button-text">{children}</span>
            </button>
        </div>
    );
};

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    loading: PropTypes.bool,
    variant: PropTypes.string,
    className: PropTypes.string,
};

export default Button;
