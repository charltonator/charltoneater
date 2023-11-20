// 'use client'
import React, { useEffect } from 'react';
import Grid from '@mui/material/Grid';
import SingleCard from './SingleCard';
import PocketBase from 'pocketbase';
import { Result } from 'postcss';

async function getPosts() {
  const db = new PocketBase("https://cfd.pockethost.io");
  const result = await db.collection("posts").getFullList({sort: '-created'})
  // console.log(result)
  return result
}



export default async function Cards() {
  // const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const data = await getPosts();
  //       setPosts(data);
  //     } catch (error) {
  //       console.error('Error fetching posts:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  // const [filte]
  const ans = await getPosts();
  console.log(ans)
  return (
    <>
      {ans?.map((entry) => {
        const home = "https://cfd.pockethost.io"
        const url = home + "/api/files/posts/" + entry.id + "/" + entry.Image 
        return <SingleCard id={entry.id} title={entry.Title} description={entry.Description} date={entry.created} image={url}/>
      })}
  </>
  );
};

