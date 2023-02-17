import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // axios({ //axios 사용 1번쨰 방법
    //   method: 'GET',
    //   url:'https://jsonplaceholder.typicode.com/photos'
    // }).then(response => setPosts(response.data))

    // axios.get('https://jsonplaceholder.typicode.com/photos')   //axios 사용 2번쨰 방법
    //       .then(response => setPosts(response.data))

    // const response = await axios.get('https://jsonplaceholder.typicode.com/photos');  //axios 사용 3번쨰 방법 (useEffect 선언 부에 async를 사용해야함. 그 방식 별로긴함)
    // setPosts(response.data);
    const fetchData = async () => {
      //axios 사용 4번째 방법
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/photos"
        );
        setPosts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  });

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <div>{post.title}</div>
          <div>
            <img src={post.thumbnailUrl} alt="colorView" />
          </div>
        </li>
      ))}
    </ul>

    // <div>
    //   안녕하세요
    //   {posts.length}
    // </div>
  );
};

export default App;
