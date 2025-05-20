
"use client";
import { useState } from 'react';
// import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Card,
  CardContent,
  // CardFooter,
} from '@/components/ui/card';
import Link from 'next/link';

interface NFTCardProps {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
  // creator: string;
  // creatorAvatar: string;
  likes?: number;
}

const NFTCard = ({
  id,
  name,
  imageUrl,
  price,
  // creator,
  // creatorAvatar,
  likes = 0,
}: NFTCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Toggle like status
    setIsLiked(!isLiked);
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
    
    // This is where blockchain interaction would happen
    console.log(`${isLiked ? 'Unlike' : 'Like'} NFT with ID: ${id}`);
  };

  return (
    <Link href={`/nft/${id}`}>
      <Card className="nft-card overflow-hidden py-0 gap-0 ">
        <div className="relative">
          <img 
            src={imageUrl} 
            alt={name} 
            className="nft-card-image"
          />
          <button
            onClick={handleLike}
            className="absolute top-3 right-3 p-2 rounded-full bg-black/20 backdrop-blur-md hover:bg-black/40 transition-colors"
          >
            <Heart 
              className={`h-4 w-4 ${isLiked ? 'fill-red-500 text-red-500' : 'text-white'}`} 
            />
          </button>
        </div>
        
        <CardContent className="p-4 items-center">
          <div className="flex justify-between items-start">
            <h3 className="font-medium truncate">{name}</h3>
            <div className="text-sm font-semibold text-nft-purple">
              {price} ETH
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            {/* <img 
              src={creatorAvatar} 
              alt={creator}
              className="w-6 h-6 rounded-full object-cover"
            />
            <span className="text-xs text-muted-foreground">@{creator}</span> */}
          </div>
        </CardContent>
        
        <div className="px-4 py-3 border-t flex justify-between">
          <div className="flex items-center text-xs text-muted-foreground">
            <Heart className="h-3 w-3 mr-1" />
            <span>{likeCount}</span>
          </div>
          <Button size="sm" variant="outline" className="text-xs h-8 cursor-pointer">
            {/* Placeholder for blockchain interaction */}
            View Details
          </Button>
        </div>
      </Card>
    </Link>
  );
};

export default NFTCard;
