import React, { useState } from "react";
import { BlogWrap } from "./Blog.styles";
import Button from "../../Button";
import { AiOutlineLike } from "react-icons/ai";
import { TfiCommentAlt } from "react-icons/tfi";
import { CiFlag1 } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BlogData } from '../../Constant/Data';

const Blog = () => {
  const [expandedPosts, setExpandedPosts] = useState({});

  const handleToggle = (index) => {
    setExpandedPosts(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

  return (
    <BlogWrap>
      <div className="post postBtn">
        <Button type="transparent">Anonymous Posts</Button>
      </div>
      {BlogData.map((value, index) => (
        <div className="post" key={index}>
          <div className="blogHeader">
            <div className="logo">
              <img src={value.img} alt="blog" />
              <div className="titleHolder">
                <h5>{value.title}</h5>
                <div className="tags">
                  <span>{value.tags}</span>
                </div>
              </div>
            </div>
            <div className="icon">
              <BsThreeDotsVertical />
            </div>
          </div>
          <div className="para">
            <p>{expandedPosts[index] ? value.fullPara : `${value.para.substring(0, 100)}...`}</p>
            <Button type="transparent" onClick={() => handleToggle(index)}>
              {expandedPosts[index] ? "see less" : "see more"}
            </Button>
          </div>
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
        </div>
      ))}
    </BlogWrap>
  );
};

export default Blog;
