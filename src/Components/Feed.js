import { useState } from "react";
import React from "react";
import Menu from "./Menu";
import Block from "./Block";

const Feed = () => {
  /* TODO: Declare a new state variable to keep track of the blocks on your Blockstagram feed! */
  // Refer to Hint 2 for more help!
  const [blocks, setBlocks] = useState([]);

  /* Use the map() function to render multiple Blocks! */
  const posts = blocks;

  function handleClick(color) {
    console.log("called click handler");
    setBlocks((blocks) => [
      <Block background-color={color}></Block>,
      ...blocks,
    ]);
    console.log(blocks);
  }

  return (
    <div>
      <Menu handleClick={handleClick}></Menu>

      {/* Below is where all of your Blocks should render! */}
      {posts}
    </div>
  );
};

export default Feed;

// const Feed = () => {
//   /* TODO: Declare a new state variable to keep track of the blocks on your Blockstagram feed! */
//   // Refer to Hint 2 for more help!
//   const [blocks, setBlocks] = useState([]);

//   const handleClick = (color) => {
//     // hint: two ways to use setBlocks, can take in a function
//     setBlocks((blocks) => [<Block />, ...blocks]);
//   };

//   /* Use the map() function to render multiple Blocks! */
//   const posts = null; // TODO: edit this variable

//   return (
//     <div>
//       <Menu handleClick={handleClick}></Menu>

//       {/* Below is where all of your Blocks should render! */}
//       {posts}
//     </div>
//   );
// };

// export default Feed;
