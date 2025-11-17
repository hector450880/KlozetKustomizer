// components/postsData.ts
export interface FeedPost {
  id: number;
  user: string;
  userAvatar: string;
  image: string;
  description: string;
  category: string;       // e.g., Casual, Streetwear
  tags: string[];         // e.g., ['#summer', '#chic']
  likes: number;
  comments: number;
}

const postsData: FeedPost[] = [
  {
    id: 1,
    user: "Alice",
    userAvatar: "https://i.pravatar.cc/150?img=10",
    image: "https://images.unsplash.com/photo-1602810315011-82db1c0b7d04?auto=format&fit=crop&w=600&q=80",
    description: "Perfect summer vibes 🌞",
    category: "Casual",
    tags: ["#summer", "#chic", "#outfit"],
    likes: 34,
    comments: 5,
  },
  {
    id: 2,
    user: "Bob",
    userAvatar: "https://i.pravatar.cc/150?img=12",
    image: "https://images.unsplash.com/photo-1618354694960-70de8a12a0b5?auto=format&fit=crop&w=600&q=80",
    description: "Urban streetwear look",
    category: "Streetwear",
    tags: ["#urban", "#streetstyle", "#fashion"],
    likes: 21,
    comments: 3,
  },
  {
    id: 3,
    user: "Charlie",
    userAvatar: "https://i.pravatar.cc/150?img=14",
    image: "https://images.unsplash.com/photo-1593032465185-5f8f593c4e3b?auto=format&fit=crop&w=600&q=80",
    description: "Night out outfit 💃",
    category: "Evening",
    tags: ["#nightlook", "#party", "#style"],
    likes: 15,
    comments: 2,
  },
];

export default postsData;
