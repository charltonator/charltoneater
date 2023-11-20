'use client'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

export default function SingleCard({id, title, description, date, image} : {id:string, title:string, description: string, date: string, image: string}) {
  const postUrl = `/posts/${id}`;
  const localDate = new Date(date);
  
  
  return (
    // <Link href={postUrl}>
    <Card sx={{ width: '100%', border: '2px solid gray', borderRadius: '16px', margin: '10px', height: '500px', p: '10' }}>
    <Grid container>
      <Grid item xs={12} md={4}>
        <Image src={image} width={500} height={500} alt="pic" />
      </Grid>
      <Grid item xs={12} md={8}>
        <CardContent sx={{ backgroundColor: 'white', borderColor: 'yellow', height: '100%' }}>
       
            <Typography gutterBottom variant="h5" component="div" color="black" >
              {title} 
            </Typography>
            <Typography gutterBottom variant="h6" component="div" sx={{fontSize: '12px', fontStyle: 'italic'}}>
            {localDate.toLocaleString()}
            </Typography>
            
            <Typography variant="h6" color="black" sx={{fontSize: "16px", whiteSpace: 'pre-wrap'}}>
              {description}
            </Typography>
      
        </CardContent>
      </Grid>
    </Grid>
  </Card>
  // </Link>
  );
}




