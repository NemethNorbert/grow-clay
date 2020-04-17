import ClayCard from '@clayui/card';
import ClayIcon from "@clayui/icon";
import {ClayIconSpriteContext} from "@clayui/icon" 
import React from 'react';
import TextTruncate from 'react-text-truncate';
import GrowTagList from './GrowTagList.es';

import "../../styles.scss";

export default class GrowCard extends React.Component {
    constructor(props) {
        super(props);

        this._handleLikeClick = this._handleLikeClick.bind(this);
        this._handleStarClick = this._handleStarClick.bind(this);
    }

    _handleStarClick() {
        let data = {
            ...this.props,
            star: !this.props.star
        };

        this.props.handleStarClick(data);
    }

    _handleLikeClick() {
        let data = {
            ...this.props,
            like: !this.props.like
        };

        this.props.handleLikeClick(data);
    }

    render () {
        return (
            <ClayCard className={this.props.interactive ? ("mx-1 grow-card interactive card-") +
                this.props.articleCategory.toLowerCase() :
                ("mx-1 grow-card ") +
                "card-" +
                this.props.articleCategory.toLowerCase()
            }>
                <div className="autofit-row autofit-padded">
                    <div className="autofit-col grow-user-profile">
                        <div className="autofit-section">
                            {this.props.articleAuthorAvatar ?
                            (<img
                                alt=""
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
                                <ClayIcon symbol="star" spritemap={this.props.spritemap} />
                            )}
                            {this.props.star == false && (
                                <ClayIcon symbol="star-o"  spritemap={this.props.spritemap} />
                            )}
                            </button>

                            <button
                            className="btn grow-btn btn-outline-secondary btn-outline-borderless"
                            type="button"
                            onClick={this._handleLikeClick}
                            >
                            <ClayIconSpriteContext.Provider value={this.props.spritemap}>
                            {this.props.like && (
                                <ClayIcon className="thumbs-up-liked" symbol="thumbs-up" />
                            )}
                            {this.props.like == false && (
                                <ClayIcon symbol="thumbs-up" />
                            )}
                            </ClayIconSpriteContext.Provider>
                            </button>
                        </div>
                    </div>
                </div>
                <ClayCard.Body>
                <ClayCard.Description className="grow-card-section grow-card-title" truncate={true} displayType="title">
                    <a
                    href={this.props.href}
                    >
                        {this.props.articleTitle}
                    </a>
                </ClayCard.Description>
                <div className="card-text grow-card-content">
                    <TextTruncate
                        line={4}
                        truncateText="…"
                        text={this.props.articleContent}
                        className="grow-card-section"
                    >
                    </TextTruncate>
                </div>
                <div className="autofit-row autofit-padded">
                    
                    <div className="autofit-section autofit-col-expand">
                        {this.props.articleTags &&
                            <GrowTagList articleTags={this.props.articleTags} tagCount={this.props.tagCount || undefined} tagLength={this.props.tagLength || undefined} />
                        }
                    </div>
                    <div className="autofit-col">
                        <div className="autofit-section text-secondary">
                            {this.props.articleReadCount ? (
                                <React.Fragment>
                                    <ClayIcon
                                        spritemap={this.props.spritemap}
                                        symbol="view"
                                        />
                                    <span className="mx-1">{this.props.articleReadCount}</span>
                                </React.Fragment> 
                            ) : (<React.Fragment>
                                <ClayIcon
                                    spritemap={this.props.spritemap}
                                    symbol="view"
                                    className="hide"
                                    />
                                <span className="mx-1">{this.props.articleReadCount}</span>
                            </React.Fragment> )
                            }
                        </div>
                    </div>
                </div>
                </ClayCard.Body>
                <div className="autofit-row text-center">
                    <div className="autofit-col autofit-col-expand">
                        <div className="grow-card-footer autofit-section mx-1">
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
                            <span className="grow-card-category mx-1">{this.props.categorytoUpperCase ? this.props.articleCategory.toUpperCase() : this.props.articleCategory}</span>
                        </div>
                    </div>
                </div>
            </ClayCard>
        );
    }
};

GrowCard.defaultProps = {
    articleCategory: "Share"
};