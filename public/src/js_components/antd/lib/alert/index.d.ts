/// <reference types="react" />
import React from 'react';
export interface AlertProps {
    /**
     * Type of Alert styles, options:`success`, `info`, `warning`, `error`
     */
    type?: 'success' | 'info' | 'warning' | 'error';
    /** Whether Alert can be closed */
    closable?: boolean;
    /** Close text to show */
    closeText?: React.ReactNode;
    /** Content of Alert */
    message: React.ReactNode;
    /** Additional content of Alert */
    description?: React.ReactNode;
    /** Callback when close Alert */
    onClose?: React.MouseEventHandler<any>;
    /** Whether to show icon */
    showIcon?: boolean;
    style?: React.CSSProperties;
    prefixCls?: string;
    className?: string;
    banner?: boolean;
}
export default class Alert extends React.Component<AlertProps, any> {
    static defaultProps: {
        type: string;
    };
    constructor(props: any);
    handleClose: (e: any) => void;
    animationEnd: () => void;
    render(): JSX.Element | null;
}
