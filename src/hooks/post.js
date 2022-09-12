import React from "react";
import { useState, useEffect } from "react";

const Post = () => {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [resourceType]);
// create a clean up function to prevent memory leaks
    useEffect(() => {
        console.log('this has been rendered')
        return () => {
            console.log('this has been cleaned up')
        }
    }, [resourceType])

  return (
    <>
      <div className="flex  justify-center justify-between p-5 m-3 bg-blue-300 rounded content-between">
        <button
          onClick={() => setResourceType("posts")}
          className="
                w-[4rem] 
          bg-green-500 
          hover:bg-green-700 
          text-black 
          text-xl 
          py-2 
          px-4 
          rounded
          flex
          justify-center"
        >
          Posts
        </button>
        <button
          onClick={() => {
            setResourceType("users");
          }}
          className="
                w-[4rem] 
          bg-green-500 
          hover:bg-green-700 
          text-black 
          text-xl 
          py-2 
          px-4 
          rounded
          flex
          justify-center"
        >
          Users
        </button>
        <button
          onClick={() => {
            setResourceType("comments");
          }}
          className="
                w-[7rem] 
          bg-green-500 
          hover:bg-green-700 
          text-black 
          text-xl 
          py-2 
          px-4 
          rounded
          flex
          justify-center"
        >
          Comments
        </button>
      </div>
      <div className="flex justify-center p-5">
        <h1 className="text-2xl">
          {" "}
          The state is currently set to:{" "}
          <span className="text-red-600">{resourceType}</span>
        </h1>
      </div>
      <div className="m-5 bg-blue-300 rounded flex-col box-content h-auto w-auto truncate">
        <div className="flex flex-col justify-center p-2 m-3">
          {items.map((item) => {
            return (
              <pre className="text-red-600 text-[6.5px] flex flex-col justify-center">
                {JSON.stringify(item)}
              </pre>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Post;
