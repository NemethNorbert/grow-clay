# grow-clay

> Grow UI based on Clay Components

[![NPM](https://img.shields.io/npm/v/grow-clay.svg)](https://www.npmjs.com/package/grow-clay) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save grow-clay
```

## Usage

```jsx
import React, { Component } from 'react'

import ClayList from '@clayui/list';
import {GrowCard, GrowCardHorizontal, GrowListItem} from "grow-clay";

class Example extends Component {
  render () {
    return (
      <div>
        <GrowCard
          spritemap={"https://cdn.jsdelivr.net/npm/@clayui/css/lib/images/icons/icons.svg"}
          articleAuthor={"The author of the article"}
          articleAuthorAvatar={"https://place-hold.it/300x500"}
          articleCreateDate={"01.01.2020"}
          articleTitle={"The title of the Article"}
          articleContent={"The content of the Article ..."}
          articleTags={["tag1", "tag2", "tag3", "tag4", "tag5"]}
          articleReadCount={"756"}
          articleCategory={"Share"}
          assetEntryId={"123456"}
          handleStarClick={(data)=>{console.log("star clicked data is: ", data)}}
          handleLikeClick={(data)=>{console.log("like clicked data is: ", data)}}
          like={true}
          star={false}
          interactive={true}
          href={"localhost:3000"}
          tagCount={8}
          tagLength={10}
        />

        <GrowCardHorizontal
          spritemap={"https://cdn.jsdelivr.net/npm/@clayui/css/lib/images/icons/icons.svg"}
          articleAuthor={"The author of the article"}
          articleAuthorAvatar={"https://place-hold.it/300x500"}
          articleCreateDate={"01.01.2020"}
          articleTitle={"The title of the Article"}
          articleCategory={"Share"}
          assetEntryId={"123456"}
          handleStarClick={(data)=>{console.log("star clicked data is: ", data)}}
          star={false}
          interactive={false}
          href={"localhost:3000"}
        />

        <ClayList>
          <GrowListItem
            spritemap={"https://cdn.jsdelivr.net/npm/@clayui/css/lib/images/icons/icons.svg"}
            articleAuthor={"The author of the article"}
            articleAuthorAvatar={"https://place-hold.it/300x500"}
            articleCreateDate={"01.01.2020"}
            articleTitle={"The title of the Article"}
            articleContent={"The content of the Article ..."}
            articleTags={["tag1", "tag2", "tag3", "tag4", "tag5"]}
            articleCategory={"Share"}
            assetEntryId={"123456"}
            handleStarClick={(data)=>{console.log("star clicked data is: ", data)}}
            handleLikeClick={(data)=>{console.log("like clicked data is: ", data)}}
            like={true}
            star={false}
            tagCount={5} 
          />
        </ClayList>
      </div>
    )
  }
}
```

## License

MIT © [NemethNorbert](https://github.com/NemethNorbert)
