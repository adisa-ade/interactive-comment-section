import { useState } from "react";

export function useCommentScores(initialComments) {
  const [comments, setComments] = useState(initialComments);

  // Update comment score by index
  const handleScoreChange = (index, delta) => {
    setComments((prevComments) =>
      prevComments.map((comment, i) =>
        i === index
          ? { ...comment, score: Math.max(0, comment.score + delta) }
          : comment
      )
    );
  };

  return { comments, handleScoreChange, setComments };
}
