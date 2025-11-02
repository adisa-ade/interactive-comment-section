import React from 'react'
import Button from './Button'
import data from '../data/data.json'
import ReplyContainer from '../components/ReplyContainer'
import { useCommentScores } from '../hooks/useCommentScore';

function CardContainer() {      
  const { comments, handleScoreChange } = useCommentScores(data.comments);
  return (
    <div className='lg:w-5xl lg:mx-auto'>
      {comments.map((comment, index) => (
        <div 
          key={index} 
          className="bg-(--white) mx-6 mt-6 rounded-[10px] p-6 space-y-4 "
        >

          <div className='flex lg:items-start space-x-4'>

          <div className="hidden lg:flex justify-between lg:items-start">
           <div className="flex items-center gap-6 bg-(--grey-50) py-2 px-4 rounded-[5px] lg:flex-col">            
              <Button onclick={() => handleScoreChange(index, +1)}>+</Button>
              <p className="text-(--purple-600)">{comment.score}</p>
              <Button onclick={() => handleScoreChange(index, -1)}>-</Button>
            </div>  
            </div>
           

          <div>
          <div className="flex items-center space-x-4">
            <img 
              src={comment.user.image.png} 
              alt={comment.user.username} 
              className="w-14 h-14 rounded-full" 
            />
            <h1 className="text-(--grey-800) font-bold">{comment.user.username}</h1>
            <p className="text-var(--grey-500) font-light">{comment.createdAt}</p>
          </div>

          <div>
            <p className="text-(--grey-500) text-[1.2rem] font-light">
              {comment.content}
            </p>
          </div>
          </div>
          


          <button className="hidden lg:flex items-center gap-2 cursor-pointer">
              <img src="./images/icon-reply.svg" alt="reply icon" />
              Reply
            </button>
            </div>
            
          <div className="flex justify-between lg:items-start lg:hidden">
            <div className="flex items-center gap-6 bg-(--grey-50) py-2 px-4 rounded-[5px]">            
              <Button onclick={() => handleScoreChange(index, +1)}>+</Button>
              <p className="text-(--purple-600)">{comment.score}</p>
              <Button onclick={() => handleScoreChange(index, -1)}>-</Button>
            </div>          
            <button className="flex items-center gap-2 cursor-pointer">
              <img src="./images/icon-reply.svg" alt="reply icon" />
              Reply
            </button>
          </div>
        </div>        
      ))}
      <div className='flex items-stretch justify-between lg:ml-22'>
        <div className='w-0.5 bg-(--grey-500) opacity-10 hidden lg:block'></div>        
      <ReplyContainer/>
      </div>
    </div>
  )
}
export default CardContainer
        