import React, { useState } from "react";
import Button from "../../Button";
import { AiOutlineLike } from "react-icons/ai";
import { TfiCommentAlt } from "react-icons/tfi";
import { CiFlag1 } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FeedCardWrap } from "../FeedCard/FeedCard.styles";
import imag from "../../../assets/blog/blogLogo.png";
import KycLevel from "../../KycLevel"
import { ProgressWrapper } from "./CardProgress.styles";
const progress = [
    {
      grade: "I want to move to Europe",
      percent: "50",
    },
    {
      grade: "I want to move to India",
      percent: "20",
    },
    {
      grade: "I want to move to Us",
      percent: "30",
    },
    {
      grade: "Other",
      percent: "10",
    },
  ];
const CardProgress = () => {
  return (
    <FeedCardWrap>
        <ProgressWrapper>
      <div className="post">
        <div className="blogHeader">
          <div className="logo">
            <img src={imag} alt="blog" />
            <div className="titleHolder">
              <h5>Works at TCS</h5>
              <div className="tags">
                <span>#situation #emergency</span>
              </div>
            </div>
          </div>
          <div className="icon">
            <BsThreeDotsVertical />
          </div>
        </div>
        <h4>Where do you plan to make a move in 2023 furthering your career prospects?</h4>
        <div className="progressbar">
          {progress.map((value, index) => (
            <div className="progressWrap" key={index}>
              <span className="grade">{value.grade}</span>
              <KycLevel level={value.percent} />

              <strong>{value.percent}%</strong>
            </div>
          ))}
        </div>
        <div className="flex">
        <div className="replyWrap">
          <Button hasicon type="transparent" className="reply">
            <AiOutlineLike />
            Like
          </Button>
          <Button hasicon type="transparent" className="reply">
            <TfiCommentAlt />
            Comment
          </Button>
          <Button hasicon type="transparent" className="reply">
            <CiFlag1 />
            Report
          </Button>
        </div>
        <div className="counts">
          <span>0 likes | 0 reports</span>
        </div>
        </div>
      </div>
      </ProgressWrapper>
    </FeedCardWrap>
  );
};

export default CardProgress;
