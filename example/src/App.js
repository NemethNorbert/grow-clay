import React from "react";
import ClayList from '@clayui/list';
import "@clayui/css/lib/css/atlas.css";
import {GrowCard, GrowCardHorizontal, GrowListItem} from "grow-clay";

const spritemap ="http://localhost:3000/icons.svg";

const GrowCardData = {
	articleAuthor: "Gábor Ambrózy",
	authorAvatar: "https://place-hold.it/300x500",
	createDate: "01.01.2019",
	articleTitle: "Respect badge",
	articleContent:
		'A respect badge can be given by anyone to anyone. You can give 1 badge per month. You can use the Respect badge page to add badges. To give a respect badge, @ mention the name in the table, write your name to the From column and write the reason, why do you give it. The reason has to be for a "superpower", something why you respect the other person and something which you would like to learn from them. For Support Hungary 2016Q3 goals, you have to give min. 1 respect badge until Sept 30. If there will be need, we will add gamification to Grow later on.',
	tags: ["badge", "gamification", "respect", "test1", "test2"],
	readCount: "626",
  articleCategory: "Share",
  assetEntryId: "1245223",
  href:"localhost:3000"
};

const GrowListData = {
	articleAuthor: "Gábor Ambrózy",
	authorAvatar: "https://place-hold.it/300x500",
	createDate: "01.01.2019",
	articleTitle: "Respect badge",
	articleContent:
		'A respect badge can be given by anyone to anyone. You can give 1 badge per month. You can use the Respect badge page to add badges. To give a respect badge, @ mention the name in the table, write your name to the From column and write the reason, why do you give it. The reason has to be for a "superpower", something why you respect the other person and something which you would like to learn from them. For Support Hungary 2016Q3 goals, you have to give min. 1 respect badge until Sept 30. If there will be need, we will add gamification to Grow later on.',
	tags: ["badge", "gamification", "respect", "test1", "test2", "test3", "reallylongtag"],
	articleCategory: "Share",
	star: true,
	like: false
};

const handleLikeClick = (card) => {
  console.log("you clicked the like on " +card.assetEntryId+" so now it's "+ card.like)
}

const handleStarClick = (card) => {
  console.log("you clicked the star on " +card.assetEntryId+" so now it's "+ card.star)
}

const App = ()=> {
		return (
			<div>
				<div className="row">
				<div className="col-md-3">
					<GrowCard
            spritemap={spritemap}
						articleAuthor={GrowCardData.articleAuthor}
						articleAuthorAvatar={GrowCardData.authorAvatar}
						articleCreateDate={GrowCardData.createDate}
						articleTitle={"Liferay's Vision and Support's Purpose"}
						articleContent={GrowCardData.articleContent}
						articleTags={GrowCardData.tags}
						articleReadCount={GrowCardData.readCount}
            articleCategory={GrowCardData.articleCategory}
            assetEntryId={GrowCardData.assetEntryId}
            handleStarClick={handleStarClick}
            handleLikeClick={handleLikeClick}
						like={true}
						star={false}
            interactive={true}
            href={GrowCardData.href}
					/>
					</div>
					<div className="col-md-3">
					<GrowCard
            spritemap={spritemap}
						articleAuthor={GrowCardData.articleAuthor}
						articleAuthorAvatar={GrowCardData.authorAvatar}
						articleCreateDate={GrowCardData.createDate}
						articleTitle={GrowCardData.articleTitle}
						articleContent={GrowCardData.articleContent}
						articleTags={GrowCardData.tags}
						articleReadCount={GrowCardData.readCount}
            articleCategory={GrowCardData.articleCategory}
            assetEntryId={"3569921"}
            handleStarClick={handleStarClick}
            handleLikeClick={handleLikeClick}
						like={true}
						star={true}
						interactive={true}
					/>
					</div>
					<div className="col-md-3">
					<GrowCard
            spritemap={spritemap}
						articleAuthor={GrowCardData.articleAuthor}
						articleAuthorAvatar={GrowCardData.authorAvatar}
						articleCreateDate={GrowCardData.createDate}
						articleTitle={GrowCardData.articleTitle}
						articleContent={GrowCardData.articleContent}
						articleTags={GrowCardData.tags}
						articleReadCount={GrowCardData.readCount}
            articleCategory="Excellence"
            assetEntryId={"35276211"}
            handleStarClick={handleStarClick}
            handleLikeClick={handleLikeClick}
						like={false}
						star={true}
						interactive={true}
					/>
					</div>
					<div className="col-md-3">
					<GrowCard
            spritemap={spritemap}
						articleAuthor={GrowCardData.articleAuthor}
						articleAuthorAvatar={GrowCardData.authorAvatar}
						articleCreateDate={GrowCardData.createDate}
						articleTitle={GrowCardData.articleTitle}
						articleContent={GrowCardData.articleContent}
						articleTags={GrowCardData.tags}
						articleReadCount={GrowCardData.readCount}
            articleCategory="Learn"
            assetEntryId={"3955621"}
            handleStarClick={handleStarClick}
            handleLikeClick={handleLikeClick}
						like={false}
						star={false}
						interactive={true}
					/>
					</div>
				</div>
				<div className="row">
				<div className="col-md-3">
					<GrowCard
            spritemap={spritemap}
						articleAuthor={GrowCardData.articleAuthor}
						articleAuthorAvatar={GrowCardData.authorAvatar}
						articleCreateDate={GrowCardData.createDate}
						articleTitle={"Liferay's Vision and Support's Purpose"}
						articleContent={GrowCardData.articleContent}
						articleTags={null || undefined}
						articleReadCount={null || undefined}
            articleCategory={null || undefined}
            assetEntryId={"3259621"}
            handleStarClick={handleStarClick}
            handleLikeClick={handleLikeClick}
						like={true}
						star={false}
						interactive={true}
					/>
					</div>
					<div className="col-md-3">
					<GrowCard
            spritemap={spritemap}
						articleAuthor={GrowCardData.articleAuthor}
						articleAuthorAvatar={GrowCardData.authorAvatar}
						articleCreateDate={GrowCardData.createDate}
						articleTitle={GrowCardData.articleTitle}
						articleContent={GrowCardData.articleContent}
						articleTags={null || undefined}
						articleReadCount={GrowCardData.readCount}
            articleCategory={GrowCardData.articleCategory}
            assetEntryId={"6435621"}
            handleStarClick={handleStarClick}
            handleLikeClick={handleLikeClick}
						like={false}
						star={true}
						interactive={true}
					/>
					</div>
					<div className="col-md-3">
					<GrowCard
            spritemap={spritemap}
						articleAuthor={GrowCardData.articleAuthor}
						articleAuthorAvatar={GrowCardData.authorAvatar}
						articleCreateDate={GrowCardData.createDate}
						articleTitle={GrowCardData.articleTitle}
						articleContent={GrowCardData.articleContent}
						articleTags={GrowCardData.tags}
						articleReadCount={null || undefined}
            articleCategory="Excellence"
            assetEntryId={"2335621"}
            handleStarClick={handleStarClick}
            handleLikeClick={handleLikeClick}
						like={true}
						star={true}
						interactive={true}
					/>
					</div>
					<div className="col-md-3">
					<GrowCard
            spritemap={spritemap}
						articleAuthor={GrowCardData.articleAuthor}
						articleAuthorAvatar={GrowCardData.authorAvatar}
						articleCreateDate={GrowCardData.createDate}
						articleTitle={GrowCardData.articleTitle}
						articleContent={GrowCardData.articleContent}
						articleTags={GrowCardData.tags}
						articleReadCount={GrowCardData.readCount}
            articleCategory="Learn"
            assetEntryId={"1235621"}
            handleStarClick={handleStarClick}
            handleLikeClick={handleLikeClick}
						like={false}
						star={false}
						interactive={true}
					/>
					</div>
				</div>
				<div className="row">
					<div className="col-md-5">
					<GrowCard
            spritemap={spritemap}
						articleAuthor={GrowCardData.articleAuthor}
						articleAuthorAvatar={GrowCardData.authorAvatar}
						articleCreateDate={GrowCardData.createDate}
						articleTitle={GrowCardData.articleTitle}
						articleContent={GrowCardData.articleContent}
						articleTags={GrowCardData.tags}
						articleReadCount={GrowCardData.readCount}
						articleCategory="Excellence"
            categorytoUpperCase={true}
            assetEntryId={"356219"}
            handleStarClick={handleStarClick}
            handleLikeClick={handleLikeClick}
						like={false}
						star={true}
						interactive={false}
            tagCount={3}
            tagLength={15}
					/>
					</div>
					<div className="col-md-5">
					<GrowCard
            spritemap={spritemap}
						articleAuthor={GrowCardData.articleAuthor}
						articleAuthorAvatar={GrowCardData.authorAvatar}
						articleCreateDate={GrowCardData.createDate}
						articleTitle={GrowCardData.articleTitle}
						articleContent={GrowCardData.articleContent}
						articleTags={GrowCardData.tags}
						articleReadCount={GrowCardData.readCount}
						articleCategory="Learn"
            categorytoUpperCase={true}
            assetEntryId={"1625621"}
            handleStarClick={handleStarClick}
            handleLikeClick={handleLikeClick}
						like={true}
						star={true}
						interactive={false}
            tagCount={4}
            tagLength={20}
					/>
					</div>
				</div>
        <div className="row">
				 <GrowCardHorizontal
					spritemap={spritemap}
					articleAuthor={GrowCardData.articleAuthor}
					articleAuthorAvatar={GrowCardData.authorAvatar}
					articleCreateDate={GrowCardData.createDate}
					articleTitle={GrowCardData.articleTitle}
          articleCategory={"Excellence"}
          assetEntryId={"3456121"}
          handleStarClick={handleStarClick}
					star={true}
          interactive={false}
          tagCount={8}
				/>
				<GrowCardHorizontal
					spritemap={spritemap}
					articleAuthor={GrowCardData.articleAuthor}
					articleAuthorAvatar={GrowCardData.authorAvatar}
					articleCreateDate={GrowCardData.createDate}
					articleTitle={GrowCardData.articleTitle}
          articleCategory={"Excellence"}
          assetEntryId={"8235621"}
          handleStarClick={handleStarClick}
					star={true}
					interactive={false}
				/>
				<GrowCardHorizontal
					spritemap={spritemap}
					articleAuthor={GrowCardData.articleAuthor}
					articleAuthorAvatar={GrowCardData.authorAvatar}
					articleCreateDate={GrowCardData.createDate}
          articleTitle={"A really long title with a really deep meaning to make sure everyone's eyes are bleeding from the beatiful UI that deals with this"}
          assetEntryId={"3562194"}
          handleStarClick={handleStarClick}
					star={true}
					interactive={true}
				/>
				<GrowCardHorizontal
					spritemap={spritemap}
					articleAuthor={GrowCardData.articleAuthor}
					articleAuthorAvatar={GrowCardData.authorAvatar}
					articleCreateDate={GrowCardData.createDate}
					articleTitle={GrowCardData.articleTitle}
          articleCategory="People"
          assetEntryId={"35695821"}
          handleStarClick={handleStarClick}
					star={true}
					interactive={true}
				/>
        </div>
        <div className="container">
					<ClayList>
						<GrowListItem
							spritemap={spritemap}
							articleCategory={GrowListData.articleCategory}
							articleAuthorAvatar={GrowListData.authorAvatar}
							articleAuthor={GrowListData.articleAuthor}
							articleCreateDate={GrowListData.createDate}
							articleTitle={GrowListData.articleTitle}
							articleContent={GrowListData.articleContent}
							articleTags={GrowListData.tags}
							star={GrowListData.star}
              like={GrowListData.like}
              assetEntryId={"35621"}
              handleStarClick={handleStarClick}
              handleLikeClick={handleLikeClick}
							tagCount={5} 
              tagLength={10} />
						<GrowListItem
							spritemap={spritemap}
							articleCategory={GrowListData.articleCategory}
							articleAuthorAvatar={GrowListData.authorAvatar}
							articleAuthor={GrowListData.articleAuthor}
							articleCreateDate={GrowListData.createDate}
							articleTitle={GrowListData.articleTitle}
							articleContent={GrowListData.articleContent}
							articleTags={GrowListData.tags}
              star={GrowListData.star}
              assetEntryId={"3521214521"}
              handleStarClick={handleStarClick}
              handleLikeClick={handleLikeClick}
							like={true}
              tagCount={4}
              tagLength={4} />
						<GrowListItem
							spritemap={spritemap}
							articleCategory={GrowListData.articleCategory}
							articleAuthorAvatar={GrowListData.authorAvatar}
							articleAuthor={GrowListData.articleAuthor}
							articleCreateDate={GrowListData.createDate}
							articleTitle={GrowListData.articleTitle}
							articleContent={GrowListData.articleContent}
							articleTags={GrowListData.tags}
							star={GrowListData.star}
              like={GrowListData.like}
              assetEntryId={"356322621"}
              handleStarClick={handleStarClick}
              handleLikeClick={handleLikeClick}
              tagCount={9}
              tagLength={20} />
					</ClayList>
				</div>
			</div>
		);
	}

export default App;
