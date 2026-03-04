export interface Product {
  id: string;
  type: string;
  category: string[];
  foreground: string;
  background: string;
  imageUrls: string[];
  name: string;
  price: number;
  quantity:number,
  sizes?: string[];
  currency:string
  description?: string;
}
export const categories = ["All", "Men", "Women", "Bags", "Caps", "Accessories"];

export const getColorHex = (color: string): string => {
  const colors: Record<string, string> = {
    PINK: "#ec4899",
    GREEN: "#22c55e",
    YELLOW: "#eab308",
    BLACK: "#000000",
    WHITE: "#ffffff",
    RED: "#ef4444",
  };
  return colors[color] || "#888888";
};
