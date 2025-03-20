import mongoose from "mongoose";
import Product from "./src/models/product.js"; // Update path to your Product model
import review from "./src/models/review.js";

const sampleProducts = [
  {
    name: "Chanel Eau de Parfum",
    description: "Classic floral fragrance with notes of jasmine and vanilla",
    price: 145.99,
    sizes: ["50ml", "100ml"],
    images: [
      "https://unsplash.com/photos/50-ml-calvin-klein-one-perfume-bottle-MUX1pDZmVXY",
    ],
    reviews: [],
  },
  {
    name: "White Rose Essence",
    description: "Delicate floral scent with fresh rose petals accord",
    price: 89.99,
    sizes: ["30ml", "50ml"],
    images: [
      " https://unsplash.com/photos/50-ml-calvin-klein-one-perfume-bottle-MUX1pDZmVXY",
    ],
    reviews: [],
  },
  {
    name: "Golden Elixir",
    description: "Luxurious oriental fragrance with amber and musk",
    price: 165.0,
    sizes: ["50ml", "100ml"],
    images: [
      " https://unsplash.com/photos/50-ml-calvin-klein-one-perfume-bottle-MUX1pDZmVXY",
    ],
    reviews: [],
  },
  {
    name: "L'Eau Laurissi",
    description: "Fresh aquatic perfume with marine notes",
    price: 75.5,
    sizes: ["30ml", "50ml"],
    images: [
      " https://unsplash.com/photos/a-bottle-of-perfume-sitting-on-top-of-a-blue-cloth-oHos2n7ypvM",
    ],
    reviews: [],
  },
  {
    name: "Calvin Klein One",
    description: "Iconic unisex fragrance with green tea notes",
    price: 68.99,
    sizes: ["50ml", "100ml"],
    images: [
      " https://unsplash.com/photos/red-and-black-perfume-bottle-7ic3yF64FS8",
    ],
    reviews: [],
  },
  {
    name: "Black & White Edition",
    description: "Modern blend of citrus and woody notes",
    price: 95.0,
    sizes: ["50ml"],
    images: [
      " https://unsplash.com/photos/white-and-black-calvin-klein-perfume-bottle-49c-5-bNCRk",
    ],
    reviews: [],
  },
  {
    name: "Red Passion",
    description: "Intense spicy fragrance with cinnamon undertones",
    price: 110.0,
    sizes: ["30ml", "50ml"],
    images: [
      " https://unsplash.com/photos/calvin-klein-one-perfume-bottle-NZAaeVR7MFw",
    ],
    reviews: [],
  },
  {
    name: "Crystal Essence",
    description: "Clean and fresh scent with bergamot top notes",
    price: 79.99,
    sizes: ["50ml"],
    images: [" https://unsplash.com/photos/l-eau-laurissi-CVz2Ove_NuI"],
    reviews: [],
  },
  {
    name: "Blue Silk",
    description: "Oriental fragrance with vanilla and tonka bean",
    price: 125.0,
    sizes: ["50ml", "100ml"],
    images: [
      "https://unsplash.com/photos/gold-perfume-bottle-on-white-textile-a5917t2ea8I",
    ],
    reviews: [],
  },
  {
    name: "CK One Mini",
    description: "Travel-size version of the classic fragrance",
    price: 45.0,
    sizes: ["30ml"],
    images: [
      " https://unsplash.com/photos/white-rose-on-clear-glass-bottle-CyfmSpqNMD8",
    ],
    reviews: [],
  },
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://venusaiyalamanchili:venusai17@cluster0.3lddw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    const existingProducts = await Product.countDocuments();
    if (existingProducts === 0) {
      await Product.insertMany(sampleProducts);
      console.log("Database seeded successfully with 10 products!");
    } else {
      console.log("Database already contains products - skipping seed");
    }
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    mongoose.disconnect();
  }
};

seedDatabase();
