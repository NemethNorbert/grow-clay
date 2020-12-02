import React, { useState } from 'react';
import ClayIcon from "@clayui/icon";

const GrowVerticalNav = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="grow-vertical-nav menubar menubar-transparent menubar-vertical-expand-md">
            
            <div className="collapse menubar-collapse">
                <ul className="nav nav-nested">
                    <li className="nav-item">
                        <button className={isOpen ? "nav-link collapse-icon btn btn-unstyled active" : "nav-link collapse-icon btn btn-unstyled collapsed"} type="button" role="button" onClick={() => setIsOpen(!isOpen)} >
                            {props.labelIcon &&
                                <ClayIcon
                                    className="grow-label-icon"
                                    focusable="false"
                                    role="presentation"
                                    symbol={props.labelIcon}
                                    spritemap={props.spritemap}
                                />
                            }
                            <span className="grow-label">{props.label}</span>
                            <span className="collapse-icon-closed">
                                <ClayIcon
                                    focusable="false"
                                    role="presentation"
                                    symbol="angle-right"
                                    spritemap={props.spritemap}
                                />
                            </span>
                            <span className="collapse-icon-open">
                                <ClayIcon
                                    focusable="false"
                                    role="presentation"
                                    symbol="angle-down"
                                    spritemap={props.spritemap}
                                />
                            </span>
                        </button>
                        <div className="line" />
                        <div className={isOpen ? "collapse show" : "collapse"}>
                            <ul className="nav nav-stacked">
                                {props.items.map(item => {
                                    return (
                                        <li className="nav-item">
                                            <button className="nav-link btn btn-unstyled grow-link" type="button" role="button">
                                                <a href={item.url}>{item.label}</a>
                                            </button>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default GrowVerticalNav;