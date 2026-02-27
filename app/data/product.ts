export interface Product {
  id: string;
  type: string;
  tag: string;
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

// export const merchandiseProducts: Product[] = [
//   {
//     id: "1",
//     type: "TSHIRT",
//     tag: "MEN",
//     foreground: "PINK",
//     background: "BLACK",
//     imageUrls: [
//       "https://files.blacvolta.com/uploads/male-front-pink-tshirt.png",
//       "https://files.blacvolta.com/uploads/male-back-pink-tshirt.png"
//     ],
//     name: "Pink Logo Tee",
//     price: 45,
//     sizes: ["XS", "S", "M", "L", "XL", "XXL"],
//     description: "Premium cotton t-shirt featuring our signature logo in vibrant pink. Made from 100% organic cotton for ultimate comfort."
//   },
//   {
//     id: "2",
//     type: "TSHIRT",
//     tag: "MEN",
//     foreground: "GREEN",
//     background: "BLACK",
//     imageUrls: [
//       "https://files.blacvolta.com/uploads/male-front-green-tshirt.png",
//       "https://files.blacvolta.com/uploads/male-back-green-tshirt.png"
//     ],
//     name: "Green Logo Tee",
//     price: 45,
//     sizes: ["XS", "S", "M", "L", "XL", "XXL"],
//     description: "Premium cotton t-shirt featuring our signature logo in fresh green. Made from 100% organic cotton for ultimate comfort."
//   },
//   {
//     id: "3",
//     type: "TSHIRT",
//     tag: "MEN",
//     foreground: "YELLOW",
//     background: "BLACK",
//     imageUrls: [
//       "https://files.blacvolta.com/uploads/male-front-yellow-tshirt.png",
//       "https://files.blacvolta.com/uploads/male-back-yellow-tshirt.png"
//     ],
//     name: "Yellow Logo Tee",
//     price: 45,
//     sizes: ["XS", "S", "M", "L", "XL", "XXL"],
//     description: "Premium cotton t-shirt featuring our signature logo in bold yellow. Made from 100% organic cotton for ultimate comfort."
//   },
//   {
//     id: "4",
//     type: "TSHIRT",
//     tag: "MEN",
//     foreground: "GREEN",
//     background: "WHITE",
//     imageUrls: [
//       "https://files.blacvolta.com/uploads/male-front-white-tshirt.png",
//       "https://files.blacvolta.com/uploads/male-back-white-tshirt.png"
//     ],
//     name: "White Logo Tee",
//     price: 45,
//     sizes: ["XS", "S", "M", "L", "XL", "XXL"],
//     description: "Classic white t-shirt featuring our signature logo in green. Made from 100% organic cotton for ultimate comfort."
//   },
//   {
//     id: "5",
//     type: "BAG",
//     tag: "BAGS",
//     foreground: "GREEN",
//     background: "WHITE",
//     imageUrls: [
//       "https://files.blacvolta.com/uploads/tote-bag-white-front.png",
//       "https://files.blacvolta.com/uploads/tote-bag-white-back.png"
//     ],
//     name: "White Tote Bag",
//     price: 35,
//     description: "Eco-friendly canvas tote bag in crisp white. Perfect for everyday use with reinforced handles."
//   },
//   {
//     id: "6",
//     type: "BAG",
//     tag: "BAGS",
//     foreground: "GREEN",
//     background: "BLACK",
//     imageUrls: [
//       "https://files.blacvolta.com/uploads/tote-bag-green-front.png",
//       "https://files.blacvolta.com/uploads/tote-bag-green-back.png"
//     ],
//     name: "Black Tote Bag",
//     price: 35,
//     description: "Eco-friendly canvas tote bag in sleek black. Perfect for everyday use with reinforced handles."
//   }
// ];

export const categories = ["All", "Men", "Women", "Bags", "Caps", "Accessories"];

export const getColorHex = (color: string): string => {
  const colors: Record<string, string> = {
    PINK: "#ec4899",
    GREEN: "#22c55e",
    YELLOW: "#eab308",
    BLACK: "#000000",
    WHITE: "#ffffff"
  };
  return colors[color] || "#888888";
};
