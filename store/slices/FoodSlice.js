import { createSlice } from "@reduxjs/toolkit";

export const FoodSlice = createSlice({
    name: "food",
    initialState: {
        categories: [
            { id: "all", name: "All Menus" },
            { id: "breakfast", name: "Breakfast" },
            { id: "lunch", name: "Lunch" },
            { id: "snack", name: "Snack" },
        ],

        foods: [
            {
                id: 1,
                name: "Pancakes with Maple Syrup",
                category: "breakfast",
                image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93",
                description: "Soft fluffy pancakes served with maple syrup and fresh berries.",
                rating: 4.8,
                totalOrders: 1654,
                interest: 32,
                progress: 78,
                ingredients: [
                    "Flour",
                    "Milk",
                    "Eggs",
                    "Butter",
                    "Maple Syrup",
                    "Blueberries"
                ],
                nutrition: {
                    calories: 340,
                    water: "58%",
                    protein: "11 g",
                    carbs: "48 g",
                    sugar: "14 g",
                    fiber: "4 g",
                    fat: "10 g"
                },
                comments: [
                    {
                        id: 1,
                        name: "Sophia Brown",
                        image: "https://i.pravatar.cc/150?img=21",
                        comment: "The pancakes were incredibly soft and delicious.",
                        time: "2 days ago"
                    },
                    {
                        id: 2,
                        name: "Daniel Smith",
                        image: "https://i.pravatar.cc/150?img=22",
                        comment: "Perfect breakfast with just the right sweetness.",
                        time: "5 days ago"
                    },
                    {
                        id: 3,
                        name: "Emma Wilson",
                        image: "https://i.pravatar.cc/150?img=23",
                        comment: "Would definitely order again!",
                        time: "1 week ago"
                    }
                ]
            },
            {
                id: 2,
                name: "Cheese Omelette",
                category: "breakfast",
                image: "https://images.unsplash.com/photo-1510693206972-df098062cb71",
                description: "Fresh eggs folded with melted cheddar cheese and herbs.",
                rating: 4.6,
                totalOrders: 1432,
                interest: 28,
                progress: 69,
                ingredients: [
                    "Eggs",
                    "Cheddar Cheese",
                    "Butter",
                    "Black Pepper",
                    "Parsley"
                ],
                nutrition: {
                    calories: 295,
                    water: "61%",
                    protein: "21 g",
                    carbs: "4 g",
                    sugar: "1 g",
                    fiber: "0 g",
                    fat: "19 g"
                },
                comments: [
                    {
                        id: 1,
                        name: "Olivia Johnson",
                        image: "https://i.pravatar.cc/150?img=24",
                        comment: "Cheese was perfectly melted.",
                        time: "3 days ago"
                    },
                    {
                        id: 2,
                        name: "Noah Davis",
                        image: "https://i.pravatar.cc/150?img=25",
                        comment: "Simple yet very satisfying.",
                        time: "4 days ago"
                    },
                    {
                        id: 3,
                        name: "Charlotte Lee",
                        image: "https://i.pravatar.cc/150?img=26",
                        comment: "One of the best omelettes I've had.",
                        time: "1 week ago"
                    }
                ]
            },
            {
                id: 3,
                name: "Chicken Biryani",
                category: "lunch",
                image: "https://images.unsplash.com/photo-1563379091339-03246963d29d",
                description: "Traditional aromatic chicken biryani served with raita.",
                rating: 4.9,
                totalOrders: 2386,
                interest: 41,
                progress: 91,
                ingredients: [
                    "Basmati Rice",
                    "Chicken",
                    "Yogurt",
                    "Spices",
                    "Mint",
                    "Onion"
                ],
                nutrition: {
                    calories: 540,
                    water: "47%",
                    protein: "29 g",
                    carbs: "63 g",
                    sugar: "3 g",
                    fiber: "5 g",
                    fat: "18 g"
                },
                comments: [
                    {
                        id: 1,
                        name: "Ava Martin",
                        image: "https://i.pravatar.cc/150?img=27",
                        comment: "The rice was perfectly cooked.",
                        time: "Yesterday"
                    },
                    {
                        id: 2,
                        name: "James Taylor",
                        image: "https://i.pravatar.cc/150?img=28",
                        comment: "Amazing flavor and generous portion.",
                        time: "3 days ago"
                    },
                    {
                        id: 3,
                        name: "Mia Walker",
                        image: "https://i.pravatar.cc/150?img=29",
                        comment: "Loved every bite.",
                        time: "6 days ago"
                    }
                ]
            },
            {
                id: 4,
                name: "Grilled Chicken Salad",
                category: "lunch",
                image: "https://images.unsplash.com/photo-1546793665-c74683f339c1",
                description: "Healthy grilled chicken served with fresh vegetables.",
                rating: 4.5,
                totalOrders: 1108,
                interest: 22,
                progress: 63,
                ingredients: [
                    "Chicken Breast",
                    "Lettuce",
                    "Tomatoes",
                    "Cucumber",
                    "Olives",
                    "Olive Oil"
                ],
                nutrition: {
                    calories: 315,
                    water: "69%",
                    protein: "31 g",
                    carbs: "9 g",
                    sugar: "4 g",
                    fiber: "5 g",
                    fat: "14 g"
                },
                comments: [
                    {
                        id: 1,
                        name: "Benjamin White",
                        image: "https://i.pravatar.cc/150?img=30",
                        comment: "Very fresh ingredients.",
                        time: "2 days ago"
                    },
                    {
                        id: 2,
                        name: "Grace Hall",
                        image: "https://i.pravatar.cc/150?img=31",
                        comment: "Healthy and filling.",
                        time: "5 days ago"
                    },
                    {
                        id: 3,
                        name: "Lucas Young",
                        image: "https://i.pravatar.cc/150?img=32",
                        comment: "Chicken was juicy and flavorful.",
                        time: "1 week ago"
                    }
                ]
            },
            {
                id: 5,
                name: "French Fries",
                category: "snack",
                image: "https://images.unsplash.com/photo-1576107232684-1279f390859f",
                description: "Golden crispy fries served with tomato ketchup.",
                rating: 4.7,
                totalOrders: 2845,
                interest: 36,
                progress: 82,
                ingredients: [
                    "Potatoes",
                    "Salt",
                    "Vegetable Oil",
                    "Black Pepper"
                ],
                nutrition: {
                    calories: 365,
                    water: "40%",
                    protein: "4 g",
                    carbs: "49 g",
                    sugar: "1 g",
                    fiber: "5 g",
                    fat: "17 g"
                },
                comments: [
                    {
                        id: 1,
                        name: "Ella Scott",
                        image: "https://i.pravatar.cc/150?img=33",
                        comment: "Very crispy and tasty.",
                        time: "Today"
                    },
                    {
                        id: 2,
                        name: "Henry Adams",
                        image: "https://i.pravatar.cc/150?img=34",
                        comment: "Perfect snack for the evening.",
                        time: "Yesterday"
                    },
                    {
                        id: 3,
                        name: "Harper King",
                        image: "https://i.pravatar.cc/150?img=35",
                        comment: "Loved the seasoning.",
                        time: "4 days ago"
                    }
                ]
            }, {
                id: 6,
                name: "Veg Sandwich",
                category: "breakfast",
                image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af",
                description: "Fresh vegetable sandwich with cheese and mint chutney.",
                rating: 4.5,
                totalOrders: 1325,
                interest: 24,
                progress: 68,
                ingredients: [
                    "Bread",
                    "Tomato",
                    "Cucumber",
                    "Cheese",
                    "Butter",
                    "Mint Chutney"
                ],
                nutrition: {
                    calories: 285,
                    water: "60%",
                    protein: "10 g",
                    carbs: "34 g",
                    sugar: "4 g",
                    fiber: "6 g",
                    fat: "11 g"
                },
                comments: [
                    {
                        id: 1,
                        name: "Liam Carter",
                        image: "https://i.pravatar.cc/150?img=36",
                        comment: "Fresh vegetables and delicious taste.",
                        time: "2 days ago"
                    },
                    {
                        id: 2,
                        name: "Emily Harris",
                        image: "https://i.pravatar.cc/150?img=37",
                        comment: "Perfect for a light breakfast.",
                        time: "5 days ago"
                    },
                    {
                        id: 3,
                        name: "Jack Thomas",
                        image: "https://i.pravatar.cc/150?img=38",
                        comment: "Would definitely recommend it.",
                        time: "1 week ago"
                    }
                ]
            },
            {
                id: 7,
                name: "Masala Dosa",
                category: "breakfast",
                image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976",
                description: "Crispy South Indian dosa stuffed with spicy potato filling.",
                rating: 4.9,
                totalOrders: 2158,
                interest: 40,
                progress: 92,
                ingredients: [
                    "Rice Batter",
                    "Potato",
                    "Onion",
                    "Mustard Seeds",
                    "Curry Leaves",
                    "Ghee"
                ],
                nutrition: {
                    calories: 365,
                    water: "52%",
                    protein: "9 g",
                    carbs: "56 g",
                    sugar: "2 g",
                    fiber: "5 g",
                    fat: "11 g"
                },
                comments: [
                    {
                        id: 1,
                        name: "Sophia Allen",
                        image: "https://i.pravatar.cc/150?img=39",
                        comment: "Authentic South Indian taste.",
                        time: "Yesterday"
                    },
                    {
                        id: 2,
                        name: "Noah Clark",
                        image: "https://i.pravatar.cc/150?img=40",
                        comment: "Loved it with coconut chutney.",
                        time: "3 days ago"
                    },
                    {
                        id: 3,
                        name: "Aiden Lewis",
                        image: "https://i.pravatar.cc/150?img=41",
                        comment: "Very crispy and flavorful.",
                        time: "6 days ago"
                    }
                ]
            },
            {
                id: 8,
                name: "Butter Chicken",
                category: "lunch",
                image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
                description: "Creamy butter chicken served with naan and rice.",
                rating: 4.9,
                totalOrders: 2648,
                interest: 45,
                progress: 94,
                ingredients: [
                    "Chicken",
                    "Butter",
                    "Cream",
                    "Tomato",
                    "Spices",
                    "Coriander"
                ],
                nutrition: {
                    calories: 610,
                    water: "44%",
                    protein: "34 g",
                    carbs: "18 g",
                    sugar: "5 g",
                    fiber: "2 g",
                    fat: "39 g"
                },
                comments: [
                    {
                        id: 1,
                        name: "Mason Walker",
                        image: "https://i.pravatar.cc/150?img=42",
                        comment: "Rich creamy gravy and tender chicken.",
                        time: "Today"
                    },
                    {
                        id: 2,
                        name: "Evelyn Young",
                        image: "https://i.pravatar.cc/150?img=43",
                        comment: "One of my favorite lunch dishes.",
                        time: "Yesterday"
                    },
                    {
                        id: 3,
                        name: "Logan Robinson",
                        image: "https://i.pravatar.cc/150?img=44",
                        comment: "Perfect with butter naan.",
                        time: "4 days ago"
                    }
                ]
            },
            {
                id: 9,
                name: "Veg Fried Rice",
                category: "lunch",
                image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b",
                description: "Stir-fried rice with fresh vegetables and soy sauce.",
                rating: 4.6,
                totalOrders: 1867,
                interest: 30,
                progress: 76,
                ingredients: [
                    "Rice",
                    "Carrot",
                    "Beans",
                    "Capsicum",
                    "Soy Sauce",
                    "Spring Onion"
                ],
                nutrition: {
                    calories: 430,
                    water: "48%",
                    protein: "9 g",
                    carbs: "66 g",
                    sugar: "5 g",
                    fiber: "6 g",
                    fat: "11 g"
                },
                comments: [
                    {
                        id: 1,
                        name: "Scarlett Green",
                        image: "https://i.pravatar.cc/150?img=45",
                        comment: "Very tasty and colorful.",
                        time: "2 days ago"
                    },
                    {
                        id: 2,
                        name: "Jacob Hall",
                        image: "https://i.pravatar.cc/150?img=46",
                        comment: "Nice smoky flavor.",
                        time: "5 days ago"
                    },
                    {
                        id: 3,
                        name: "Amelia Baker",
                        image: "https://i.pravatar.cc/150?img=47",
                        comment: "Great portion size.",
                        time: "1 week ago"
                    }
                ]
            },
            {
                id: 10,
                name: "Chicken Burger",
                category: "snack",
                image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
                description: "Juicy grilled chicken burger with lettuce and cheese.",
                rating: 4.8,
                totalOrders: 3184,
                interest: 48,
                progress: 97,
                ingredients: [
                    "Burger Bun",
                    "Chicken Patty",
                    "Cheese",
                    "Lettuce",
                    "Tomato",
                    "Mayonnaise"
                ],
                nutrition: {
                    calories: 560,
                    water: "42%",
                    protein: "28 g",
                    carbs: "45 g",
                    sugar: "6 g",
                    fiber: "4 g",
                    fat: "27 g"
                },
                comments: [
                    {
                        id: 1,
                        name: "Michael Perez",
                        image: "https://i.pravatar.cc/150?img=48",
                        comment: "Juicy chicken and soft bun.",
                        time: "Today"
                    },
                    {
                        id: 2,
                        name: "Victoria Scott",
                        image: "https://i.pravatar.cc/150?img=49",
                        comment: "One of the best burgers I've had.",
                        time: "Yesterday"
                    },
                    {
                        id: 3,
                        name: "Sebastian Hill",
                        image: "https://i.pravatar.cc/150?img=50",
                        comment: "Worth every bite.",
                        time: "3 days ago"
                    }
                ]
            }, {
                id: 11,
                name: "Poha",
                category: "breakfast",
                image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0",
                description: "Traditional Indian poha prepared with peanuts, onions, curry leaves, and fresh coriander.",
                rating: 4.5,
                totalOrders: 1420,
                interest: 25,
                progress: 71,
                ingredients: [
                    "Flattened Rice",
                    "Onion",
                    "Peanuts",
                    "Mustard Seeds",
                    "Curry Leaves",
                    "Coriander"
                ],
                nutrition: {
                    calories: 270,
                    water: "55%",
                    protein: "7 g",
                    carbs: "46 g",
                    sugar: "3 g",
                    fiber: "4 g",
                    fat: "6 g"
                },
                comments: [
                    {
                        id: 1,
                        name: "Emma Brown",
                        image: "https://i.pravatar.cc/150?img=51",
                        comment: "Light and delicious breakfast.",
                        time: "Today"
                    },
                    {
                        id: 2,
                        name: "Ryan Wilson",
                        image: "https://i.pravatar.cc/150?img=52",
                        comment: "Freshly prepared and tasty.",
                        time: "Yesterday"
                    },
                    {
                        id: 3,
                        name: "Sophia White",
                        image: "https://i.pravatar.cc/150?img=53",
                        comment: "Loved the crunchy peanuts.",
                        time: "5 days ago"
                    }
                ]
            },
            {
                id: 12,
                name: "Idli & Sambar",
                category: "breakfast",
                image: "https://images.unsplash.com/photo-1630383249896-424e482df921",
                description: "Soft steamed idlis served with hot sambar and coconut chutney.",
                rating: 4.8,
                totalOrders: 1985,
                interest: 37,
                progress: 89,
                ingredients: [
                    "Rice Batter",
                    "Urad Dal",
                    "Sambar",
                    "Coconut",
                    "Curry Leaves"
                ],
                nutrition: {
                    calories: 320,
                    water: "59%",
                    protein: "10 g",
                    carbs: "55 g",
                    sugar: "2 g",
                    fiber: "5 g",
                    fat: "5 g"
                },
                comments: [
                    {
                        id: 1,
                        name: "Lucas Green",
                        image: "https://i.pravatar.cc/150?img=54",
                        comment: "Soft idlis and flavorful sambar.",
                        time: "Today"
                    },
                    {
                        id: 2,
                        name: "Olivia Scott",
                        image: "https://i.pravatar.cc/150?img=55",
                        comment: "Authentic South Indian taste.",
                        time: "3 days ago"
                    },
                    {
                        id: 3,
                        name: "Henry Parker",
                        image: "https://i.pravatar.cc/150?img=56",
                        comment: "Healthy and filling.",
                        time: "1 week ago"
                    }
                ]
            },
            {
                id: 13,
                name: "Paneer Butter Masala",
                category: "lunch",
                image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7",
                description: "Creamy paneer curry cooked with tomatoes, butter and aromatic spices.",
                rating: 4.9,
                totalOrders: 2412,
                interest: 43,
                progress: 95,
                ingredients: [
                    "Paneer",
                    "Tomato",
                    "Butter",
                    "Cream",
                    "Spices",
                    "Coriander"
                ],
                nutrition: {
                    calories: 520,
                    water: "46%",
                    protein: "22 g",
                    carbs: "18 g",
                    sugar: "6 g",
                    fiber: "3 g",
                    fat: "37 g"
                },
                comments: [
                    {
                        id: 1,
                        name: "Grace Adams",
                        image: "https://i.pravatar.cc/150?img=57",
                        comment: "Creamy and rich flavor.",
                        time: "Today"
                    },
                    {
                        id: 2,
                        name: "Alexander Hill",
                        image: "https://i.pravatar.cc/150?img=58",
                        comment: "Perfect with butter naan.",
                        time: "Yesterday"
                    },
                    {
                        id: 3,
                        name: "Ella Cooper",
                        image: "https://i.pravatar.cc/150?img=59",
                        comment: "My favorite paneer dish.",
                        time: "4 days ago"
                    }
                ]
            },
            {
                id: 14,
                name: "Rajma Chawal",
                category: "lunch",
                image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
                description: "Comfort food made with kidney beans in spicy gravy served over steamed rice.",
                rating: 4.7,
                totalOrders: 1816,
                interest: 34,
                progress: 80,
                ingredients: [
                    "Kidney Beans",
                    "Rice",
                    "Onion",
                    "Tomato",
                    "Garlic",
                    "Spices"
                ],
                nutrition: {
                    calories: 485,
                    water: "50%",
                    protein: "17 g",
                    carbs: "72 g",
                    sugar: "5 g",
                    fiber: "11 g",
                    fat: "9 g"
                },
                comments: [
                    {
                        id: 1,
                        name: "David King",
                        image: "https://i.pravatar.cc/150?img=60",
                        comment: "Very comforting meal.",
                        time: "Yesterday"
                    },
                    {
                        id: 2,
                        name: "Amelia Reed",
                        image: "https://i.pravatar.cc/150?img=61",
                        comment: "Beans were perfectly cooked.",
                        time: "2 days ago"
                    },
                    {
                        id: 3,
                        name: "Matthew Brooks",
                        image: "https://i.pravatar.cc/150?img=62",
                        comment: "Tastes just like homemade.",
                        time: "6 days ago"
                    }
                ]
            },
            {
                id: 15,
                name: "Veg Momos",
                category: "snack",
                image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46",
                description: "Steamed vegetable momos served with spicy red chutney.",
                rating: 4.8,
                totalOrders: 2698,
                interest: 39,
                progress: 88,
                ingredients: [
                    "Flour",
                    "Cabbage",
                    "Carrot",
                    "Spring Onion",
                    "Garlic",
                    "Ginger"
                ],
                nutrition: {
                    calories: 310,
                    water: "53%",
                    protein: "9 g",
                    carbs: "51 g",
                    sugar: "3 g",
                    fiber: "5 g",
                    fat: "7 g"
                },
                comments: [
                    {
                        id: 1,
                        name: "Isabella Turner",
                        image: "https://i.pravatar.cc/150?img=63",
                        comment: "The chutney was amazing.",
                        time: "Today"
                    },
                    {
                        id: 2,
                        name: "Ethan Morris",
                        image: "https://i.pravatar.cc/150?img=64",
                        comment: "Soft dumplings and fresh filling.",
                        time: "Yesterday"
                    },
                    {
                        id: 3,
                        name: "Chloe Bailey",
                        image: "https://i.pravatar.cc/150?img=65",
                        comment: "Would order again.",
                        time: "3 days ago"
                    }
                ]
            }, {
                id: 16,
                name: "Samosa",
                category: "snack",
                image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa7d5b",
                description: "Golden crispy samosas stuffed with spicy potato filling and served with mint chutney.",
                rating: 4.7,
                totalOrders: 3215,
                interest: 42,
                progress: 90,
                ingredients: [
                    "Potatoes",
                    "Flour",
                    "Green Peas",
                    "Cumin",
                    "Coriander",
                    "Oil"
                ],
                nutrition: {
                    calories: 340,
                    water: "39%",
                    protein: "6 g",
                    carbs: "42 g",
                    sugar: "2 g",
                    fiber: "5 g",
                    fat: "17 g"
                },
                comments: [
                    {
                        id: 1,
                        name: "Sophia Reed",
                        image: "https://i.pravatar.cc/150?img=66",
                        comment: "Very crispy and flavorful.",
                        time: "Today"
                    },
                    {
                        id: 2,
                        name: "Jack Wilson",
                        image: "https://i.pravatar.cc/150?img=67",
                        comment: "The mint chutney was delicious.",
                        time: "Yesterday"
                    },
                    {
                        id: 3,
                        name: "Olivia Brooks",
                        image: "https://i.pravatar.cc/150?img=68",
                        comment: "Best samosa in the cafeteria.",
                        time: "5 days ago"
                    }
                ]
            },
            {
                id: 17,
                name: "Veg Pizza",
                category: "snack",
                image: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
                description: "Thin crust pizza loaded with mozzarella cheese and fresh vegetables.",
                rating: 4.9,
                totalOrders: 3874,
                interest: 47,
                progress: 96,
                ingredients: [
                    "Pizza Base",
                    "Cheese",
                    "Capsicum",
                    "Onion",
                    "Olives",
                    "Tomato Sauce"
                ],
                nutrition: {
                    calories: 510,
                    water: "38%",
                    protein: "18 g",
                    carbs: "54 g",
                    sugar: "5 g",
                    fiber: "4 g",
                    fat: "24 g"
                },
                comments: [
                    {
                        id: 1,
                        name: "Liam Foster",
                        image: "https://i.pravatar.cc/150?img=69",
                        comment: "Cheese pull was amazing.",
                        time: "Today"
                    },
                    {
                        id: 2,
                        name: "Emily Ross",
                        image: "https://i.pravatar.cc/150?img=70",
                        comment: "Loaded with toppings.",
                        time: "Yesterday"
                    },
                    {
                        id: 3,
                        name: "Daniel Cooper",
                        image: "https://i.pravatar.cc/150?img=71",
                        comment: "Would happily order again.",
                        time: "4 days ago"
                    }
                ]
            },
            {
                id: 18,
                name: "Chole Bhature",
                category: "lunch",
                image: "https://images.unsplash.com/photo-1626132647523-66d2dbef1c3f",
                description: "Soft fluffy bhature served with spicy Punjabi chole and fresh onions.",
                rating: 4.8,
                totalOrders: 2753,
                interest: 41,
                progress: 91,
                ingredients: [
                    "Chickpeas",
                    "Flour",
                    "Tomato",
                    "Onion",
                    "Spices",
                    "Oil"
                ],
                nutrition: {
                    calories: 630,
                    water: "41%",
                    protein: "18 g",
                    carbs: "81 g",
                    sugar: "6 g",
                    fiber: "11 g",
                    fat: "22 g"
                },
                comments: [
                    {
                        id: 1,
                        name: "Noah Green",
                        image: "https://i.pravatar.cc/150?img=72",
                        comment: "Authentic Punjabi flavor.",
                        time: "Yesterday"
                    },
                    {
                        id: 2,
                        name: "Charlotte King",
                        image: "https://i.pravatar.cc/150?img=73",
                        comment: "Bhature were perfectly soft.",
                        time: "2 days ago"
                    },
                    {
                        id: 3,
                        name: "Henry Clark",
                        image: "https://i.pravatar.cc/150?img=74",
                        comment: "One of my favorite lunches.",
                        time: "1 week ago"
                    }
                ]
            },
            {
                id: 19,
                name: "Veg Hakka Noodles",
                category: "lunch",
                image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841",
                description: "Classic Indo-Chinese noodles tossed with fresh vegetables and sauces.",
                rating: 4.6,
                totalOrders: 2031,
                interest: 33,
                progress: 77,
                ingredients: [
                    "Noodles",
                    "Carrot",
                    "Capsicum",
                    "Cabbage",
                    "Soy Sauce",
                    "Spring Onion"
                ],
                nutrition: {
                    calories: 460,
                    water: "46%",
                    protein: "11 g",
                    carbs: "68 g",
                    sugar: "4 g",
                    fiber: "5 g",
                    fat: "13 g"
                },
                comments: [
                    {
                        id: 1,
                        name: "Ella Johnson",
                        image: "https://i.pravatar.cc/150?img=75",
                        comment: "Restaurant-quality noodles.",
                        time: "Today"
                    },
                    {
                        id: 2,
                        name: "James Harris",
                        image: "https://i.pravatar.cc/150?img=76",
                        comment: "Perfect amount of seasoning.",
                        time: "Yesterday"
                    },
                    {
                        id: 3,
                        name: "Ava Lewis",
                        image: "https://i.pravatar.cc/150?img=77",
                        comment: "Loved the vegetables.",
                        time: "3 days ago"
                    }
                ]
            },
            {
                id: 20,
                name: "Cold Coffee",
                category: "snack",
                image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c",
                description: "Refreshing chilled coffee blended with milk, ice cream and chocolate syrup.",
                rating: 4.9,
                totalOrders: 2964,
                interest: 44,
                progress: 94,
                ingredients: [
                    "Milk",
                    "Coffee",
                    "Ice Cream",
                    "Chocolate Syrup",
                    "Sugar",
                    "Ice Cubes"
                ],
                nutrition: {
                    calories: 295,
                    water: "63%",
                    protein: "8 g",
                    carbs: "36 g",
                    sugar: "24 g",
                    fiber: "1 g",
                    fat: "10 g"
                },
                comments: [
                    {
                        id: 1,
                        name: "Michael Adams",
                        image: "https://i.pravatar.cc/150?img=78",
                        comment: "Perfectly chilled and refreshing.",
                        time: "Today"
                    },
                    {
                        id: 2,
                        name: "Grace Turner",
                        image: "https://i.pravatar.cc/150?img=79",
                        comment: "Loved the chocolate flavor.",
                        time: "Yesterday"
                    },
                    {
                        id: 3,
                        name: "Benjamin Hall",
                        image: "https://i.pravatar.cc/150?img=80",
                        comment: "Best cold coffee on the menu.",
                        time: "4 days ago"
                    }
                ]
            }, {
                id: 21,
                name: "Aloo Paratha",
                category: "breakfast",
                image: "https://images.unsplash.com/photo-1626508035297-0cd27c397d7b",
                description: "Traditional Indian flatbread stuffed with spicy mashed potatoes and served with curd.",
                rating: 4.8,
                totalOrders: 2214,
                interest: 39,
                progress: 88,
                ingredients: [
                    "Wheat Flour",
                    "Potatoes",
                    "Butter",
                    "Green Chili",
                    "Coriander",
                    "Curd"
                ],
                nutrition: {
                    calories: 420,
                    water: "47%",
                    protein: "11 g",
                    carbs: "58 g",
                    sugar: "3 g",
                    fiber: "6 g",
                    fat: "15 g"
                },
                comments: [
                    {
                        id: 1,
                        name: "Emily Carter",
                        image: "https://i.pravatar.cc/150?img=81",
                        comment: "Soft paratha with delicious stuffing.",
                        time: "Today"
                    },
                    {
                        id: 2,
                        name: "Lucas Brown",
                        image: "https://i.pravatar.cc/150?img=82",
                        comment: "Tasted just like homemade.",
                        time: "Yesterday"
                    },
                    {
                        id: 3,
                        name: "Sophia Evans",
                        image: "https://i.pravatar.cc/150?img=83",
                        comment: "Loved it with fresh curd.",
                        time: "5 days ago"
                    }
                ]
            },
            {
                id: 22,
                name: "Upma",
                category: "breakfast",
                image: "https://images.unsplash.com/photo-1604908176997-4319f7c8f4d2",
                description: "Healthy South Indian upma made with roasted semolina and vegetables.",
                rating: 4.5,
                totalOrders: 1388,
                interest: 23,
                progress: 69,
                ingredients: [
                    "Semolina",
                    "Carrot",
                    "Peas",
                    "Mustard Seeds",
                    "Curry Leaves",
                    "Onion"
                ],
                nutrition: {
                    calories: 290,
                    water: "56%",
                    protein: "8 g",
                    carbs: "47 g",
                    sugar: "2 g",
                    fiber: "4 g",
                    fat: "8 g"
                },
                comments: [
                    {
                        id: 1,
                        name: "Olivia White",
                        image: "https://i.pravatar.cc/150?img=84",
                        comment: "Very healthy breakfast.",
                        time: "Today"
                    },
                    {
                        id: 2,
                        name: "Jack Miller",
                        image: "https://i.pravatar.cc/150?img=85",
                        comment: "Fresh vegetables in every bite.",
                        time: "2 days ago"
                    },
                    {
                        id: 3,
                        name: "Grace Scott",
                        image: "https://i.pravatar.cc/150?img=86",
                        comment: "Simple and tasty.",
                        time: "1 week ago"
                    }
                ]
            },
            {
                id: 23,
                name: "Dal Tadka",
                category: "lunch",
                image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d",
                description: "Yellow lentils tempered with garlic, cumin and Indian spices served with rice.",
                rating: 4.7,
                totalOrders: 2106,
                interest: 35,
                progress: 84,
                ingredients: [
                    "Toor Dal",
                    "Garlic",
                    "Tomato",
                    "Onion",
                    "Cumin",
                    "Ghee"
                ],
                nutrition: {
                    calories: 385,
                    water: "52%",
                    protein: "18 g",
                    carbs: "49 g",
                    sugar: "4 g",
                    fiber: "9 g",
                    fat: "9 g"
                },
                comments: [
                    {
                        id: 1,
                        name: "Daniel Clark",
                        image: "https://i.pravatar.cc/150?img=87",
                        comment: "Comfort food at its best.",
                        time: "Today"
                    },
                    {
                        id: 2,
                        name: "Emma Walker",
                        image: "https://i.pravatar.cc/150?img=88",
                        comment: "Perfect with steamed rice.",
                        time: "Yesterday"
                    },
                    {
                        id: 3,
                        name: "Noah Cooper",
                        image: "https://i.pravatar.cc/150?img=89",
                        comment: "Very flavorful dal.",
                        time: "6 days ago"
                    }
                ]
            },
            {
                id: 24,
                name: "Veg Pulao",
                category: "lunch",
                image: "https://images.unsplash.com/photo-1596797038530-2c107aaab5c5",
                description: "Fragrant basmati rice cooked with vegetables and aromatic spices.",
                rating: 4.6,
                totalOrders: 1927,
                interest: 31,
                progress: 79,
                ingredients: [
                    "Basmati Rice",
                    "Carrot",
                    "Beans",
                    "Peas",
                    "Cinnamon",
                    "Cloves"
                ],
                nutrition: {
                    calories: 410,
                    water: "49%",
                    protein: "9 g",
                    carbs: "67 g",
                    sugar: "4 g",
                    fiber: "5 g",
                    fat: "10 g"
                },
                comments: [
                    {
                        id: 1,
                        name: "Henry Wilson",
                        image: "https://i.pravatar.cc/150?img=90",
                        comment: "Rice was perfectly cooked.",
                        time: "Today"
                    },
                    {
                        id: 2,
                        name: "Chloe Adams",
                        image: "https://i.pravatar.cc/150?img=91",
                        comment: "Great aroma and taste.",
                        time: "3 days ago"
                    },
                    {
                        id: 3,
                        name: "Liam Brooks",
                        image: "https://i.pravatar.cc/150?img=92",
                        comment: "Light yet filling meal.",
                        time: "1 week ago"
                    }
                ]
            },
            {
                id: 25,
                name: "Spring Rolls",
                category: "snack",
                image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143",
                description: "Crispy vegetable spring rolls served with sweet chili sauce.",
                rating: 4.8,
                totalOrders: 2879,
                interest: 43,
                progress: 92,
                ingredients: [
                    "Spring Roll Sheets",
                    "Cabbage",
                    "Carrot",
                    "Capsicum",
                    "Soy Sauce",
                    "Garlic"
                ],
                nutrition: {
                    calories: 360,
                    water: "45%",
                    protein: "8 g",
                    carbs: "42 g",
                    sugar: "5 g",
                    fiber: "4 g",
                    fat: "16 g"
                },
                comments: [
                    {
                        id: 1,
                        name: "Ava Green",
                        image: "https://i.pravatar.cc/150?img=93",
                        comment: "Perfectly crispy rolls.",
                        time: "Today"
                    },
                    {
                        id: 2,
                        name: "James Hall",
                        image: "https://i.pravatar.cc/150?img=94",
                        comment: "Loved the sweet chili dip.",
                        time: "Yesterday"
                    },
                    {
                        id: 3,
                        name: "Mia King",
                        image: "https://i.pravatar.cc/150?img=95",
                        comment: "Would definitely order again.",
                        time: "4 days ago"
                    }
                ]
            }, {
                id: 26,
                name: "Club Sandwich",
                category: "snack",
                image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af",
                description: "Triple layered sandwich filled with fresh vegetables, cheese and mayonnaise.",
                rating: 4.7,
                totalOrders: 2568,
                interest: 38,
                progress: 86,
                ingredients: [
                    "Bread",
                    "Cheese",
                    "Tomato",
                    "Lettuce",
                    "Mayonnaise",
                    "Cucumber"
                ],
                nutrition: {
                    calories: 395,
                    water: "49%",
                    protein: "14 g",
                    carbs: "39 g",
                    sugar: "5 g",
                    fiber: "5 g",
                    fat: "18 g"
                },
                comments: [
                    {
                        id: 1,
                        name: "Harper Allen",
                        image: "https://i.pravatar.cc/150?img=96",
                        comment: "Fresh and filling.",
                        time: "Today"
                    },
                    {
                        id: 2,
                        name: "Jacob Young",
                        image: "https://i.pravatar.cc/150?img=97",
                        comment: "Loved the cheese.",
                        time: "Yesterday"
                    },
                    {
                        id: 3,
                        name: "Lily Moore",
                        image: "https://i.pravatar.cc/150?img=98",
                        comment: "Very satisfying snack.",
                        time: "5 days ago"
                    }
                ]
            },
            {
                id: 27,
                name: "French Toast",
                category: "breakfast",
                image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929",
                description: "Golden toasted bread dipped in egg mixture and served with honey.",
                rating: 4.8,
                totalOrders: 1694,
                interest: 34,
                progress: 83,
                ingredients: [
                    "Bread",
                    "Eggs",
                    "Milk",
                    "Butter",
                    "Honey"
                ],
                nutrition: {
                    calories: 355,
                    water: "52%",
                    protein: "12 g",
                    carbs: "41 g",
                    sugar: "10 g",
                    fiber: "3 g",
                    fat: "14 g"
                },
                comments: [
                    {
                        id: 1,
                        name: "Emma Hill",
                        image: "https://i.pravatar.cc/150?img=99",
                        comment: "Perfect breakfast.",
                        time: "Today"
                    },
                    {
                        id: 2,
                        name: "Ethan Reed",
                        image: "https://i.pravatar.cc/150?img=100",
                        comment: "Nice sweetness.",
                        time: "Yesterday"
                    },
                    {
                        id: 3,
                        name: "Sophia Carter",
                        image: "https://i.pravatar.cc/150?img=101",
                        comment: "Loved the texture.",
                        time: "4 days ago"
                    }
                ]
            },
            {
                id: 28,
                name: "Palak Paneer",
                category: "lunch",
                image: "https://images.unsplash.com/photo-1512058564366-18510be2db19",
                description: "Fresh spinach cooked with soft paneer cubes in rich Indian spices.",
                rating: 4.8,
                totalOrders: 2198,
                interest: 36,
                progress: 87,
                ingredients: [
                    "Spinach",
                    "Paneer",
                    "Garlic",
                    "Cream",
                    "Butter",
                    "Spices"
                ],
                nutrition: {
                    calories: 445,
                    water: "51%",
                    protein: "23 g",
                    carbs: "16 g",
                    sugar: "5 g",
                    fiber: "6 g",
                    fat: "31 g"
                },
                comments: [
                    {
                        id: 1,
                        name: "Daniel Lewis",
                        image: "https://i.pravatar.cc/150?img=102",
                        comment: "Paneer was very soft.",
                        time: "Today"
                    },
                    {
                        id: 2,
                        name: "Grace Foster",
                        image: "https://i.pravatar.cc/150?img=103",
                        comment: "Rich spinach flavor.",
                        time: "Yesterday"
                    },
                    {
                        id: 3,
                        name: "Ryan Brooks",
                        image: "https://i.pravatar.cc/150?img=104",
                        comment: "Excellent with naan.",
                        time: "1 week ago"
                    }
                ]
            },
            {
                id: 29,
                name: "Jeera Rice",
                category: "lunch",
                image: "https://images.unsplash.com/photo-1516684732162-798a0062be99",
                description: "Basmati rice flavored with cumin seeds and aromatic spices.",
                rating: 4.5,
                totalOrders: 1476,
                interest: 26,
                progress: 73,
                ingredients: [
                    "Basmati Rice",
                    "Cumin",
                    "Butter",
                    "Coriander",
                    "Salt"
                ],
                nutrition: {
                    calories: 335,
                    water: "55%",
                    protein: "7 g",
                    carbs: "60 g",
                    sugar: "1 g",
                    fiber: "2 g",
                    fat: "7 g"
                },
                comments: [
                    {
                        id: 1,
                        name: "Olivia Scott",
                        image: "https://i.pravatar.cc/150?img=105",
                        comment: "Simple but delicious.",
                        time: "Yesterday"
                    },
                    {
                        id: 2,
                        name: "Mason Clark",
                        image: "https://i.pravatar.cc/150?img=106",
                        comment: "Perfect with dal.",
                        time: "3 days ago"
                    },
                    {
                        id: 3,
                        name: "Avery Hall",
                        image: "https://i.pravatar.cc/150?img=107",
                        comment: "Nicely cooked rice.",
                        time: "5 days ago"
                    }
                ]
            },
            {
                id: 30,
                name: "Chocolate Muffin",
                category: "snack",
                image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c",
                description: "Soft chocolate muffin topped with chocolate chips.",
                rating: 4.9,
                totalOrders: 3382,
                interest: 49,
                progress: 98,
                ingredients: [
                    "Flour",
                    "Chocolate",
                    "Butter",
                    "Milk",
                    "Eggs",
                    "Sugar"
                ],
                nutrition: {
                    calories: 420,
                    water: "37%",
                    protein: "6 g",
                    carbs: "55 g",
                    sugar: "29 g",
                    fiber: "3 g",
                    fat: "19 g"
                },
                comments: [
                    {
                        id: 1,
                        name: "Ella Green",
                        image: "https://i.pravatar.cc/150?img=108",
                        comment: "Very soft and chocolaty.",
                        time: "Today"
                    },
                    {
                        id: 2,
                        name: "Noah Baker",
                        image: "https://i.pravatar.cc/150?img=109",
                        comment: "Perfect with coffee.",
                        time: "Yesterday"
                    },
                    {
                        id: 3,
                        name: "Victoria King",
                        image: "https://i.pravatar.cc/150?img=110",
                        comment: "My favorite dessert snack.",
                        time: "4 days ago"
                    }
                ]
            },
        ]
    },
    reducers: {
        addFood: (state, action) => {
            state.foods.push({
                id: Date.now(),
                ...action.payload,
            })
        },

        removeFood: (state, action) => {
            state.foods = state.foods.filter(
                (food) => food.id !== action.payload
            )
        },

        editFood: (state, action) => {
            const index = state.foods.findIndex(
                (food) => food.id === action.payload.id
            )

            if (index !== -1) {
                state.foods[index] = action.payload;
            }
        },
    }
})
export const { addFood, removeFood, editFood } = FoodSlice.actions
export default FoodSlice.reducer