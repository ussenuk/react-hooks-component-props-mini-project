import React from "react";
import Article from "./Article"
import blogData from "../data/blog";

function ArticleList(){

    const articleArray = blogData.posts.map((post)=>{
      return  <Article key={post.id} title ={post.title} date={post.date} preview={post.preview}/>
    })
    
//   console.log(articleArray)
 

    return (
        <main>
            { articleArray }
        </main>
    )
}

export default ArticleList;