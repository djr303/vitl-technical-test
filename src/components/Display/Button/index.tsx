import React, { MouseEvent } from 'react';

import './Button.scss';

interface ButtonProps {
    onClick: (e: MouseEvent) => void
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => <button className="button" onClick={onClick}>{children}</button>

export default Button;