import React, { useReducer, useState } from "react";

const BlogContext = React.createContext();
const blogReducer = (state, action) => {
  switch (action.type) {
    case "add_blogpost":
      return [...state, { title: "Angular" }];
    default:
      return state;
  }
};

export const BlogProvider = ({ children }) => {
  const [blogPosts, dispatch] = useReducer(blogReducer, [
    { title: "React Native" },
    { title: "JavaScript" },
  ]);
  // const [blogPosts, setBlogPosts] = useState([
  //   { title: "React Native" },
  //   { title: "JavaScript" },
  // ]);
  const addBlogPost = () => {
    dispatch({ type: "add_blogpost" });
  };
  return (
    <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
