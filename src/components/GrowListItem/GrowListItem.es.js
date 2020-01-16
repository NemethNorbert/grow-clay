import React from 'react';
import ClayList from '@clayui/list';
import ClayIcon from "@clayui/icon";
import {ClayIconSpriteContext} from "@clayui/icon"
import TextTruncate from 'react-text-truncate';

import GrowTagList from '../GrowCard/GrowTagList.es';

export default class GrowListItem extends React.Component {
    constructor(props) {
        super(props);

        this._handleLikeClick = this._handleLikeClick.bind(this);
        this._handleStarClick = this._handleStarClick.bind(this);
    }

    _handleStarClick() {
        let data = {
            assetEntryId: this.props.assetEntryId,
            star: !this.props.star
        };

        this.props.handleStarClick(data);
    }

    _handleLikeClick() {
        let data = {
            assetEntryId: this.props.assetEntryId,
            like: !this.props.like
        };

        this.props.handleLikeClick(data);
    }
    render() {
        return (
            <div className="grow-list">
            <ClayList.Item header className={"grow-list-header"}>
                <ClayList.ItemField>
                <div className="autofit-col grow-user-profile">
                    <div className="autofit-section">
                        {this.props.articleAuthorAvatar ?
                        (<img
                            alt=""
                            className="img-fluid sticker sticker-primary sticker-xl rounded-circle"
                            src={this.props.articleAuthorAvatar}
                        />) :
                        <div className="img-fluid sticker sticker-primary sticker-xl rounded-circle">
                            {this.props.userInitials || "Grow"}
                        </div>
                        }
                    </div>
                </div>
                </ClayList.ItemField>
                <ClayList.ItemField expand>
                    <div className="autofit-col autofit-col-expand grow-user-name">
                        <div className="autofit-section text-secondary">
                            <div className="grow-author">{this.props.articleAuthor}</div>
                            <div>
                            {this.props.articleCreateDate}
                            </div>
                        </div>
                    </div>
                </ClayList.ItemField>
                <ClayList.ItemField>
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
                                        <ClayIcon className="thumbs-up" symbol="thumbs-up" />
                                    )}
                                </ClayIconSpriteContext.Provider>
                            </button>
                        </div>
                    </div>
                </ClayList.ItemField>
            </ClayList.Item>
            <ClayList.Item className={"grow-list-body"}>
                <ClayList.ItemField expand>
                    <ClayList.ItemTitle className={"grow-list-title"}>
                        <a href={this.props.href}>
                            {this.props.articleTitle}
                        </a>
                    </ClayList.ItemTitle>
                    <span className="grow-margin-bottom grow-list-content">
                        <TextTruncate
                            line={2}
                            truncateText="…"
                            text={this.props.articleContent}
                        >
                        </TextTruncate>
                    </span>
                </ClayList.ItemField>
                <div className="autofit-row autofit-padded">
                    <div className="autofit-section autofit-col-expand">
                        {this.props.articleTags &&
                            <GrowTagList articleTags={this.props.articleTags} tagCount={this.props.tagCount || undefined} tagLength={this.props.tagLength || undefined} />
                        }
                    </div>
                    <div className="autofit-col">
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
                            <span className="grow-card-category mx-1">{this.props.articleCategory}</span>
                        </div>
                    </div>
                </div>
            </ClayList.Item>
        </div>
        );
    };
};