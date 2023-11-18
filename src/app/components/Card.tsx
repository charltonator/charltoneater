import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

interface PostCardProps {
  title: string;
  description: string;
  imageUrl?: string;
}

export default function PostCard(title:string, description:string, imageUrl:string) {
  return (
    <Card>
      {imageUrl && (
        <CardMedia
          component="img"
          alt="Post Image"
          height="140"
          image={imageUrl}
        />
      )}
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};


