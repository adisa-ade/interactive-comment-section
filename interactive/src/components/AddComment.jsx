import React from 'react'
import data from "../data/data.json";
function AddComment() {
  return (
    <div className="bg-(--white) mx-6 my-6 rounded-[10px] p-6 flex items-start gap-4">
    <img
      src={data.currentUser.image.webp}
      alt={data.currentUser.username}
      className="w-14 h-14 rounded-full"
    />        
    <textarea name="" id=""         
      placeholder="Add a comment..."
      className="flex-1 border-2 border-(--grey-100) outline-(--purple-200) focus:ring-2 focus:ring-(--purple-600) transition-all ease-in w-auto h-30 rounded-[10px] p-4 resize-none"
    ></textarea>
    <button className="bg-(--purple-600) text-white font-semibold px-5 py-2 rounded-xl hover:opacity-80 active:scale-95 transition cursor-pointer">
      Send
    </button>
  </div>
  )
}

export default AddComment