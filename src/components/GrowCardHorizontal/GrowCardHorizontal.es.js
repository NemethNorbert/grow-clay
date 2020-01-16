import ClayCard from '@clayui/card';
import ClayIcon from "@clayui/icon";
import React from 'react';

import "../../styles.scss";

export default class GrowCardHorizontal extends React.Component {
    constructor(props) {
        super(props);

        this._handleStarClick = this._handleStarClick.bind(this);
    }

    _handleStarClick() {
        let data = {
            assetEntryId: this.props.assetEntryId,
            star: !this.props.star
        };

        this.props.handleStarClick(data);
    }

    render () {
        return (
            <div className="col-md-6">
                <ClayCard className={this.props.interactive ? ("mx-1 grow-card grow-card-horizontal interactive card-") +
                this.props.articleCategory.toLowerCase() :
                ("mx-1 grow-card grow-card-horizontal ") +
                "card-" +
                this.props.articleCategory.toLowerCase()
            }>
                    <div className="autofit-row autofit-padded ">
                        <div className="autofit-col grow-user-profile">
                            <div className="autofit-section">
                                {this.props.articleAuthorAvatar ?
                                (<img
                                    alt="Author's thumbnail"
                                    className="img-fluid sticker sticker-primary sticker-xl rounded-circle"
                                    src={this.props.articleAuthorAvatar}
                                />) :
                                <div className="img-fluid sticker sticker-primary sticker-xl rounded-circle">{this.props.userInitials || "Grow"}</div>
                                }
                            </div>
                        </div>
                        <div className="autofit-col autofit-col-expand grow-user-name">
                            <div className="autofit-section text-secondary">
                                <div className="grow-author">{this.props.articleAuthor}</div>
                                <div>
                                {this.props.articleCreateDate}
                                </div>
                            </div>
                        </div>
                        <div className="autofit-col">
                            <div className="autofit-section">
                                <button
                                className="btn grow-btn btn-outline-secondary btn-outline-borderless"
                                type="button"
                                onClick={this._handleStarClick}
                                >
                                {this.props.star && (
                                    <ClayIcon symbol="star" spritemap={this.props.spritemap}/>
                                )}
                                {this.props.star == false && (
                                    <ClayIcon symbol="star-o"  spritemap={this.props.spritemap} />
                                )}
                                </button>

                                <span className="grow-icon icon-align">
                                    {(() => {
                                    switch (this.props.articleCategory) {
                                        case "Excellence":
                                        return (
                                            <ClayIcon
                                            spritemap={this.props.spritemap}
                                            symbol="sheets"
                                            />
                                        );
                                        case "Learn":
                                        return (
                                            <ClayIcon
                                            spritemap={this.props.spritemap}
                                            symbol="info-book"
                                            />
                                        );
                                        case "People":
                                        return (
                                            <ClayIcon
                                            spritemap={this.props.spritemap}
                                            symbol="user"
                                            />
                                        );
                                        default:
                                        return (
                                            <ClayIcon
                                            spritemap={this.props.spritemap}
                                            symbol="share"
                                            />
                                        );
                                    }
                                    })()}
                                </span>
                            </div>
                        </div>
                    </div>
                    <ClayCard.Body>
                    <ClayCard.Description className="grow-card-section grow-card-title" truncate={true} displayType="title">
                        <a href={this.props.href}>
                            {this.props.articleTitle}
                        </a>
                    </ClayCard.Description>
                    </ClayCard.Body>
                </ClayCard>
            </div>
        );
    }
};

GrowCardHorizontal.defaultProps = {
    articleCategory: "Share"
};