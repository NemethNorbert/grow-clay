import React, { useState } from 'react';
import ClayIcon from "@clayui/icon";
import GrowTagList from "../GrowCard/GrowTagList.es";

const GrowVerticalTagsNav = (props) => {
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
                            <div className="grow-vertical-tags-nav-container">
                                    <GrowTagList articleTags={props.items} tagCount={props.tagCount || undefined} tagLength={props.tagLength || undefined} />
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default GrowVerticalTagsNav;