// components/closetItems.ts
export interface ClosetItem {
  id: number;
  image: string;
  description: string;
}

const closetItems: ClosetItem[] = [
  { id: 1, image: "https://images.unsplash.com/photo-1593032465170-87b8b991c9d0?auto=format&fit=crop&w=600&q=80", description: "Top + Jeans" },
  { id: 2, image: "https://images.unsplash.com/photo-1582912220080-380af15208c0?auto=format&fit=crop&w=600&q=80", description: "Jacket Fit" },
  { id: 3, image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=600&q=80", description: "Summer Dress" },
  { id: 4, image: "https://images.unsplash.com/photo-1532446658420-fbc0ba54b826?auto=format&fit=crop&w=600&q=80", description: "Urban Style" },
  { id: 5, image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80", description: "Chic Outfit" },
  { id: 6, image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=600&q=80", description: "Night Look" },
];

export default closetItems;
