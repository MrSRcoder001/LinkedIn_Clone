import { useState } from "react";

export default function Comment() {
  const [commentData, setCommentData] = useState("");

  const handleChange = (event) => {
    setCommentData(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // stop page reload
    console.log("Submitted Comment:", commentData);

    // clear textarea after submit
    setCommentData("");
  };

  return (
    <div>
      <h1>COMMENT KAROOOOOO!!</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="sms">Your Comment:</label>
        <br />
        <textarea
          name="comment"
          id="sms"
          value={commentData}
          onChange={handleChange}
          placeholder="Enter your personal Feedback in the Comment Box"
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
