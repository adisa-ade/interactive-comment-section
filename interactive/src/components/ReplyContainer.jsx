import React from "react";
import Button from "./Button";
import data from "../data/data.json";
import { useCommentScores } from "../hooks/useCommentScore";

const repliesData = data.comments[1].replies;

function CardContainer() {
  const { comments: replies, handleScoreChange } =
    useCommentScores(repliesData);
  return (
    <div>
      {replies.map((reply, index) => (
        <div
          key={index}
          className="bg-(--white) m-6 rounded-[10px] p-6 space-y-4 lg:w-212"
        >
          <div className="flex lg:items-start space-x-4">
            <div className="hidden lg:flex justify-between lg:items-start">
              <div className="flex items-center gap-6 bg-(--grey-50) py-2 px-4 rounded-[5px] lg:flex-col">
                <Button onclick={() => handleScoreChange(index, +1)}>+</Button>
                <p className="text-(--purple-600)">{reply.score}</p>
                <Button onclick={() => handleScoreChange(index, -1)}>-</Button>
              </div>
            </div>

            <div>
              <div className="flex items-center space-x-4">
                <img
                  src={reply.user.image.png}
                  alt={reply.user.username}
                  className="w-14 h-14 rounded-full"
                />
                <h1 className="text-(--grey-800) font-bold">
                  {reply.user.username}
                </h1>
                <p className="text-(--grey-500) font-light">
                  {reply.createdAt}
                </p>
              </div>
              <div>
                <p className="text-(--grey-500) text-[1.2rem] font-light">
                  {reply.content}
                </p>
              </div>
            </div>
            <button className="flex items-center gap-2 cursor-pointer">
              <img src="./images/icon-reply.svg" alt="icon-reply.svg" />
              Reply
            </button>
          </div>
          <div className="flex justify-between lg:items-start lg:hidden">
            <div className="flex items-center gap-6 bg-(--grey-50) py-2 px-4 rounded-[5px]">
              <Button onclick={() => handleScoreChange(index, +1)}>+</Button>
              <p className="text-(--purple-600)">{reply.score}</p>
              <Button onclick={() => handleScoreChange(index, -1)}>-</Button>
            </div>
            <button className="flex items-center gap-2 cursor-pointer">
              <img src="./images/icon-reply.svg" alt="icon-reply.svg" />
              Reply
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
export default CardContainer;
