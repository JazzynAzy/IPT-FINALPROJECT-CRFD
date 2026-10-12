const recipes = [
    {
        id: "chicken_adobo",
        name: "Chicken Adobo",
        mealType: "Dinner",
        proteinType: "Chicken",
        image: "https://images.pexels.com/photos/4169914/pexels-photo-4169914.jpeg",
        description: "The unofficial national dish of the Philippines. Tender chicken braised in soy sauce, vinegar, garlic, and bay leaves — a perfect balance of salty, sour, and savory.",
        servings: 4,
        prepDuration: "15 minutes",
        cookDuration: "45 minutes",
        difficulty: "Easy",
        ingredients: [
            { name: "Chicken thighs, bone-in", quantity: 8, unit: "pieces" },
            { name: "Soy sauce", quantity: 3, unit: "tablespoons" },
            { name: "White vinegar", quantity: 3, unit: "tablespoons" },
            { name: "Garlic, minced", quantity: 6, unit: "cloves" },
            { name: "Bay leaves", quantity: 3, unit: "pieces" },
            { name: "Whole black peppercorns", quantity: 1, unit: "teaspoon" },
            { name: "Water", quantity: 1, unit: "cup" },
            { name: "Cooking oil", quantity: 2, unit: "tablespoons" },
            { name: "Salt", quantity: "to taste", unit: "" }
        ],
        steps: [
            "Heat oil in a large pot or wok over medium heat. Add the chicken and brown all sides, about 3-4 minutes per side. Remove and set aside.",
            "In the same pot, sauté the garlic until fragrant and golden, about 1 minute.",
            "Add the chicken back to the pot. Pour in soy sauce and vinegar (do not stir immediately to avoid curdling).",
            "Add water, bay leaves, and peppercorns. Bring to a boil, then reduce heat to low.",
            "Cover and simmer for 30-35 minutes, until the chicken is tender and the sauce has thickened.",
            "Taste and adjust seasoning with salt if needed. Serve hot over steamed rice."
        ],
        variations: [
            {
                label: "Adobong Puti (White Adobo)",
                ingredients: [
                    { name: "Chicken thighs, bone-in", quantity: 8, unit: "pieces" },
                    { name: "White vinegar", quantity: 4, unit: "tablespoons" },
                    { name: "Garlic, minced", quantity: 6, unit: "cloves" },
                    { name: "Bay leaves", quantity: 3, unit: "pieces" },
                    { name: "Whole black peppercorns", quantity: 1, unit: "teaspoon" },
                    { name: "Fish sauce (patis)", quantity: 2, unit: "tablespoons" },
                    { name: "Water", quantity: "1 1/2", unit: "cups" },
                    { name: "Cooking oil", quantity: 2, unit: "tablespoons" },
                    { name: "Salt", quantity: "to taste", unit: "" }
                ],
                description: "The sweeter, vinegar-forward cousin of classic adobo. No soy sauce — just vinegar, fish sauce, and aromatics for a lighter, more sour profile.",
                steps: [
                    "Heat oil in a pot and brown the chicken on all sides. Remove and set aside.",
                    "Sauté garlic until golden. Add fish sauce and vinegar, stirring gently.",
                    "Return chicken to the pot. Add water, bay leaves, and peppercorns.",
                    "Simmer covered for 30-35 minutes until chicken is tender and sauce is slightly thickened.",
                    "Season with salt to taste. The vinegar will mellow as it cooks — do not stir immediately after adding to prevent curdling."
                ]
            },
            {
                label: "Adobo sa Gata (Coconut Milk Adobo)",
                ingredients: [
                    { name: "Chicken thighs, bone-in", quantity: 8, unit: "pieces" },
                    { name: "Soy sauce", quantity: 3, unit: "tablespoons" },
                    { name: "White vinegar", quantity: 2, unit: "tablespoons" },
                    { name: "Coconut milk", quantity: 1, unit: "cup" },
                    { name: "Garlic, minced", quantity: 6, unit: "cloves" },
                    { name: "Bay leaves", quantity: 3, unit: "pieces" },
                    { name: "Whole black peppercorns", quantity: 1, unit: "teaspoon" },
                    { name: "Cooking oil", quantity: 2, unit: "tablespoons" }
                ],
                description: "A rich, creamy twist on adobo. The coconut milk adds sweetness and body, transforming the dish into something luxuriously smooth.",
                steps: [
                    "Brown chicken in oil and set aside.",
                    "Sauté garlic until golden. Add soy sauce, vinegar, and peppercorns; simmer 2 minutes.",
                    "Pour in coconut milk and bring to a gentle boil.",
                    "Return chicken to the pot with bay leaves. Simmer uncovered for 25-30 minutes until sauce thickens and chicken is cooked through.",
                    "The sauce should be creamy and coating — reduce longer if you prefer it thicker."
                ]
            }
        ]
    },
    {
        id: "sinigang_na_baboy",
        name: "Sinigang na Baboy",
        mealType: "Lunch",
        proteinType: "Pork",
        image: "https://images.pexels.com/photos/6961930/pexels-photo-6961930.jpeg",
        description: "A sour tamarind broth soup packed with pork, vegetables, and that unmistakable tangy Filipino flavor. Comfort food at its finest.",
        servings: 6,
        prepDuration: "20 minutes",
        cookDuration: "1 hour 30 minutes",
        difficulty: "Medium",
        ingredients: [
            { name: "Pork shoulder (kasim)", quantity: 1, unit: "kg" },
            { name: "Tamarind (sampaloc)", quantity: "1 lemon-sized", unit: "" },
            { name: "Radish (labanos)", quantity: 2, unit: "pieces" },
            { name: "Okra", quantity: 8, unit: "pieces" },
            { name: "Water spinach (kangkong)", quantity: 1, unit: "bunch" },
            { name: "Onion", quantity: 1, unit: "large" },
            { name: "Garlic, crushed", quantity: 4, unit: "cloves" },
            { name: "Tomatoes", quantity: 2, unit: "pieces" },
            { name: "Fish sauce (patis)", quantity: "2 tablespoons", unit: "" },
            { name: "Salt", quantity: "to taste", unit: "" }
        ],
        steps: [
            "Soak tamarind in 1 cup warm water for 10 minutes. Squeeze and strain to extract the sour juice. Set aside.",
            "In a large pot, combine pork, crushed garlic, quartered onion, and enough water to cover. Bring to a boil, skimming foam.",
            "Simmer for 45 minutes until pork is tender.",
            "Add tamarind juice and fish sauce. Taste and adjust — sinigang should be sour-salty balanced.",
            "Add radish and cook for 10 minutes until slightly softened.",
            "Add tomatoes and okra, cook for another 5 minutes.",
            "Add water spinach and cook until just wilted, about 2 minutes. Serve hot with rice."
        ],
        variations: [
            {
                label: "Sinigang na Hipon (Shrimp Sinigang)",
                ingredients: [
                    { name: "Large shrimps", quantity: 500, unit: "grams" },
                    { name: "Tamarind (sampaloc)", quantity: "1 lemon-sized", unit: "" },
                    { name: "Radish (labanos)", quantity: 2, unit: "pieces" },
                    { name: "Okra", quantity: 8, unit: "pieces" },
                    { name: "Water spinach (kangkong)", quantity: 1, unit: "bunch" },
                    { name: "Onion", quantity: 1, unit: "large" },
                    { name: "Garlic, crushed", quantity: 4, unit: "cloves" },
                    { name: "Tomatoes", quantity: 2, unit: "pieces" },
                    { name: "Fish sauce (patis)", quantity: "2 tablespoons", unit: "" }
                ],
                description: "A seafood twist using plump shrimps that cook quickly in the same tangy tamarind broth. Lighter but just as flavorful.",
                steps: [
                    "Prepare tamarind juice the same way — soak and strain.",
                    "In a pot, bring 4 cups water to a boil with garlic, onion, and tomatoes.",
                    "Add tamarind juice and fish sauce. Taste and adjust sourness.",
                    "Add radish and simmer for 8 minutes until just tender.",
                    "Add shrimps and okra. Cook for 3-4 minutes until shrimp is pink and pink-ish.",
                    "Add water spinach and cook until wilted. Serve immediately — over rice or on its own."
                ]
            },
            {
                label: "Sinigang na Isda (Fish Sinigang)",
                ingredients: [
                    { name: "White fish (bangus/milkfish)", quantity: 1, unit: "whole, about 1kg" },
                    { name: "Tamarind (sampaloc)", quantity: "1 lemon-sized", unit: "" },
                    { name: "Radish (labanos)", quantity: 2, unit: "pieces" },
                    { name: "Okra", quantity: 8, unit: "pieces" },
                    { name: "Eggplant", quantity: 2, unit: "pieces" },
                    { name: "Water spinach (kangkong)", quantity: 1, unit: "bunch" },
                    { name: "Onion", quantity: 1, unit: "large" },
                    { name: "Garlic, crushed", quantity: 4, unit: "cloves" },
                    { name: "Tomatoes", quantity: 2, unit: "pieces" },
                    { name: "Fish sauce (patis)", quantity: "2 tablespoons", unit: "" }
                ],
                description: "Using whole fish adds a rich, savory depth to the broth. The eggplant adds a silky texture that soaks up the sour broth beautifully.",
                steps: [
                    "Scale and clean the fish, then cut into 2-inch pieces. Reserve head and bones for extra broth.",
                    "Prepare tamarind juice by soaking and straining.",
                    "In a pot, combine 4 cups water with fish head and bones, garlic, onion, and tomatoes. Simmer 20 minutes.",
                    "Strain broth, return to pot. Add tamarind juice and fish sauce. Adjust sourness.",
                    "Add radish and eggplant, simmer 10 minutes.",
                    "Add fish pieces and okra. Cook gently 5-7 minutes until fish is just cooked through.",
                    "Add water spinach last, cook 2 minutes. Serve hot."
                ]
            }
        ]
    },
    {
        id: "lechon_kawali",
        name: "Lechon Kawali",
        mealType: "Dinner",
        proteinType: "Pork",
        image: "https://images.pexels.com/photos/4612425/pexels-photo-4612425.jpeg",
        description: "Crispy deep-fried pork belly that's been marinated, boiled, then fried to golden perfection. The crackling is addictively crunchy.",
        servings: 4,
        prepDuration: "20 minutes",
        cookDuration: "45 minutes",
        difficulty: "Medium",
        ingredients: [
            { name: "Pork belly (liempo)", quantity: 1, unit: "kg" },
            { name: "Soy sauce", quantity: 3, unit: "tablespoons" },
            { name: "Calamansi juice", quantity: 3, unit: "pieces" },
            { name: "Garlic, minced", quantity: 4, unit: "cloves" },
            { name: "Black pepper", quantity: 1, unit: "teaspoon" },
            { name: "Salt", quantity: "to taste", unit: "" },
            { name: "Oil (for deep-frying)", quantity: "2 cups", unit: "" }
        ],
        steps: [
            "Score the pork belly skin in a crosshatch pattern, being careful not to cut too deep.",
            "Mix soy sauce, calamansi juice, garlic, pepper, and salt in a bowl. Marinate pork for at least 30 minutes.",
            "Boil the pork belly in water for 15-20 minutes until tender. Drain and let cool, then pat dry.",
            "Heat oil in a deep pan to 350°F (175°C).",
            "Fry the pork belly in batches until golden and crispy, about 8-10 minutes per side.",
            "Drain on paper towels. Slice into 1-inch thick pieces. Serve with vinegar dipping sauce."
        ],
        variations: [
            {
                label: "Inihaw na Liempo (Grilled Pork Belly)",
                ingredients: [
                    { name: "Pork belly (liempo)", quantity: 1, unit: "kg" },
                    { name: "Soy sauce", quantity: 4, unit: "tablespoons" },
                    { name: "Calamansi juice", quantity: 4, unit: "pieces" },
                    { name: "Garlic, minced", quantity: 6, unit: "cloves" },
                    { name: "Black pepper", quantity: 1, unit: "teaspoon" },
                    { name: "Bay leaves", quantity: 2, unit: "pieces" },
                    { name: "Oil (for brushing)", quantity: "2 tablespoons", unit: "" }
                ],
                description: "A healthier alternative to deep-frying. Grilled over charcoal gives the pork belly a smoky char and crisp skin without the oil.",
                steps: [
                    "Score the skin in a crosshatch pattern.",
                    "Marinate in soy sauce, calamansi, garlic, pepper, and bay leaves for 1 hour.",
                    "Skewer the pork belly or place directly on a grill over medium heat.",
                    "Grill for 20-25 minutes per side, basting with remaining marinade.",
                    "For extra-crisp skin, use a kitchen torch at the end or move closer to the heat source.",
                    "Let rest 5 minutes before slicing."
                ]
            },
            {
                label: "Creamy Lechon Kawali Dip",
                ingredients: [
                    { name: "Mayonnaise", quantity: 1/2, unit: "cup" },
                    { name: "Soured cream or sour cream", quantity: 2, unit: "tablespoons" },
                    { name: "Garlic, minced", quantity: 2, unit: "cloves" },
                    { name: "Calamansi juice", quantity: 1, unit: "tablespoon" },
                    { name: "Salt and pepper", quantity: "to taste", unit: "" }
                ],
                description: "A rich, creamy dipping sauce that balances the crunch of crispy lechon kawali with cool, tangy flavors.",
                steps: [
                    "Mix all ingredients in a bowl until smooth.",
                    "Let rest for 10 minutes to allow flavors to meld.",
                    "Season with additional salt, pepper, or calamansi juice to taste.",
                    "Serve chilled alongside the hot, crispy pork."
                ]
            }
        ]
    },
    {
        id: "pancit_palabok",
        name: "Pancit Palabok",
        mealType: "Lunch",
        proteinType: "Other",
        image: "https://images.pexels.com/photos/4169915/pexels-photo-4169915.jpeg",
        description: "Rice vermicelli noodles tossed in a rich, savory shrimp-based gravy, topped with hard-boiled eggs, chicharrón, and green onions.",
        servings: 4,
        prepDuration: "30 minutes",
        cookDuration: "30 minutes",
        difficulty: "Hard",
        ingredients: [
            { name: "Rice vermicelli noodles (bihon)", quantity: 400, unit: "grams" },
            { name: "Shrimp (peeled and deveined)", quantity: 12, unit: "pieces" },
            { name: "Annatto seeds (atsuette)", quantity: 1, unit: "tablespoon" },
            { name: "Garlic, minced", quantity: 4, unit: "cloves" },
            { name: "Onion, chopped", quantity: 1, unit: "piece" },
            { name: "All-purpose flour", quantity: 2, unit: "tablespoons" },
            { name: "Butter or cooking oil", quantity: 3, unit: "tablespoons" },
            { name: "Water or broth", quantity: 2, unit: "cups" },
            { name: "Fish sauce (patis)", quantity: 2, unit: "tablespoons" },
            { name: "Salt and pepper", quantity: "to taste", unit: "" },
            { name: "Hard-boiled eggs", quantity: 4, unit: "pieces" },
            { name: "Chicharrón (crispy pork rinds)", quantity: "1 cup", unit: "" },
            { name: "Green onions, chopped", quantity: 3, unit: "stalks" }
        ],
        steps: [
            "Soak annatto seeds in 2 tablespoons hot water for 5 minutes. Strain and set the infused water aside.",
            "In a pan, sauté garlic and onion in butter until fragrant. Add flour and cook for 1-2 minutes to make a roux.",
            "Gradually add water/broth while stirring. Add annatto water, fish sauce, salt, and pepper. Bring to a boil.",
            "Add 6 shrimp and simmer for 5-7 minutes until the sauce thickens and shrimp are cooked.",
            "Blend the sauce in a blender until smooth (be careful with hot liquid). Strain back into the pan.",
            "Cook noodles according to package directions. Drain and divide among serving plates.",
            "Pour the shrimp sauce generously over the noodles.",
            "Top with sliced hard-boiled eggs, remaining shrimp, chicharrón, and green onions."
        ],
        variations: [
            {
                label: "Pancit Habhab (Batil-based)",
                ingredients: [
                    { name: "Rice vermicelli noodles (bihon)", quantity: 400, unit: "grams" },
                    { name: "Shrimp (peeled and deveined)", quantity: 12, unit: "pieces" },
                    { name: "Annatto seeds (atsuette)", quantity: 1, unit: "tablespoon" },
                    { name: "Garlic, minced", quantity: 4, unit: "cloves" },
                    { name: "Onion, chopped", quantity: 1, unit: "piece" },
                    { name: "All-purpose flour", quantity: 2, unit: "tablespoons" },
                    { name: "Butter or cooking oil", quantity: 3, unit: "tablespoons" },
                    { name: "Water or broth", quantity: 2, unit: "cups" },
                    { name: "Fish sauce (patis)", quantity: 2, unit: "tablespoons" },
                    { name: "Chicharrón (crispy pork rinds)", quantity: "1 cup", unit: "" },
                    { name: "Green onions, chopped", quantity: 3, unit: "stalks" },
                    { name: "Egg noodles (pancit canton sticks)", quantity: 100, unit: "grams" }
                ],
                description: "A regional variant from Quezon that uses both bihon and egg noodles for extra texture, and serves the noodles dry-tossed rather than with poured sauce.",
                steps: [
                    "Prepare the shrimp sauce the same way as palabok — blend, strain, and simmer.",
                    "Separate the egg noodles and bihon. Cook them separately — bihon as usual, egg noodles briefly soaked until pliable.",
                    "In a large wok, toss both noodles with a small amount of the sauce to coat — the noodles should be moist but not swimming in sauce.",
                    "Mix in chicharrón and green onions.",
                    "Arrange on a serving platter. Serve the remaining sauce on the side for drizzling.",
                    "Top with hard-boiled egg and extra shrimp as desired."
                ]
            },
            {
                label: "Vegetarian Palabok",
                ingredients: [
                    { name: "Rice vermicelli noodles (bihon)", quantity: 400, unit: "grams" },
                    { name: "White mushrooms", quantity: 200, unit: "grams" },
                    { name: "Shiitake mushrooms", quantity: 100, unit: "grams" },
                    { name: "Annatto seeds (atsuette)", quantity: 1, unit: "tablespoon" },
                    { name: "Garlic, minced", quantity: 4, unit: "cloves" },
                    { name: "Onion, chopped", quantity: 1, unit: "piece" },
                    { name: "All-purpose flour", quantity: 2, unit: "tablespoons" },
                    { name: "Butter or cooking oil", quantity: 3, unit: "tablespoons" },
                    { name: "Vegetable broth", quantity: 2, unit: "cups" },
                    { name: "Soy sauce", quantity: 2, unit: "tablespoons" },
                    { name: "Salt and pepper", quantity: "to taste", unit: "" },
                    { name: "Hard-boiled eggs", quantity: 4, unit: "pieces" },
                    { name: "Green onions, chopped", quantity: 3, unit: "stalks" }
                ],
                description: "A plant-based take on palabok using a rich mushroom broth instead of shrimp. The umami from dried and fresh mushrooms gives depth without any seafood.",
                steps: [
                    "Soak dried shiitake mushrooms in hot water for 15 minutes. Reserve the soaking liquid as part of your broth.",
                    "Sauté garlic and onion in butter. Add flour and cook for 1-2 minutes.",
                    "Gradually whisk in vegetable broth, mushroom soaking liquid, annatto water, and soy sauce. Bring to a boil.",
                    "Add chopped fresh mushrooms and simmer 10 minutes until thickened. Blend and strain for a silky sauce.",
                    "Season with salt and pepper to taste.",
                    "Cook bihon noodles, drain, and assemble with egg slices, green onions, and a pinch of paprika for color."
                ]
            }
        ]
    },
    {
        id: "lumpiang_shanghai",
        name: "Lumpiang Shanghai",
        mealType: "Lunch",
        proteinType: "Pork",
        image: "https://images.pexels.com/photos/4612424/pexels-photo-4612424.jpeg",
        description: "Crispy Filipino-style spring rolls filled with seasoned pork and vegetables. A party favorite and perfect with a dipping sauce.",
        servings: 6,
        prepDuration: "45 minutes",
        cookDuration: "15 minutes",
        difficulty: "Medium",
        ingredients: [
            { name: "Ground pork", quantity: 500, unit: "grams" },
            { name: "Onion, finely chopped", quantity: 1, unit: "medium" },
            { name: "Garlic, minced", quantity: 4, unit: "cloves" },
            { name: "Carrot, julienned", quantity: 1, unit: "piece" },
            { name: "Green onions, finely chopped", quantity: 3, unit: "stalks" },
            { name: "Egg", quantity: 1, unit: "large" },
            { name: "Soy sauce", quantity: 2, unit: "tablespoons" },
            { name: "Fish sauce (patis)", quantity: 1, unit: "tablespoon" },
            { name: "Black pepper", quantity: 1, unit: "teaspoon" },
            { name: "Spring roll wrappers (lumpia)", quantity: 20, unit: "pieces" },
            { name: "Oil (for deep-frying)", quantity: "2 cups", unit: "" },
            { name: "Water (for sealing)", quantity: "2 tablespoons", unit: "" }
        ],
        steps: [
            "In a bowl, combine ground pork, onion, garlic, carrot, green onions, egg, soy sauce, fish sauce, and pepper. Mix until well combined.",
            "Place a spring roll wrapper on a flat surface like a diamond. Add 1-2 tablespoons of filling in a line at the bottom third of the wrapper.",
            "Fold the sides inward, then tightly roll from the bottom. Seal the edge with water.",
            "Heat oil in a deep pan to 350°F (175°C).",
            "Fry lumpia in batches for 3-4 minutes per side until golden brown and crispy.",
            "Drain on paper towels. Serve hot with sweet and sour sauce or banana ketchup."
        ],
        variations: [
            {
                label: "Lumpiang Sariwa (Fresh Lumpia)",
                ingredients: [
                    { name: "Cassava starch or tapioca starch", quantity: 2, unit: "cups" },
                    { name: "Water", quantity: 2, unit: "cups" },
                    { name: "Ground pork", quantity: 300, unit: "grams" },
                    { name: "Onion, finely chopped", quantity: 1, unit: "medium" },
                    { name: "Garlic, minced", quantity: 3, unit: "cloves" },
                    { name: "Carrot, julienned", quantity: 1, unit: "piece" },
                    { name: "Green beans, julienned", quantity: 100, unit: "grams" },
                    { name: "Green onions, chopped", quantity: 3, unit: "stalks" },
                    { name: "Soy sauce", quantity: 2, unit: "tablespoons" },
                    { name: "Fish sauce (patis)", quantity: 1, unit: "tablespoon" },
                    { name: "Black pepper", quantity: 1, unit: "teaspoon" },
                    { name: "Spring roll wrappers", quantity: 20, unit: "pieces" },
                    { name: "Lettuce leaves", quantity: 4, unit: "leaves" },
                    { name: "Peanut sauce", quantity: "1 cup", unit: "" }
                ],
                description: "Instead of deep-frying, fresh lumpia uses delicate spring roll wrappers filled with julienned vegetables and served with a rich peanut sauce. The wrapper is soft, not crispy.",
                steps: [
                    "For the peanut sauce: blend ground peanuts, soy sauce, sugar, garlic, and water until smooth. Simmer 5 minutes until thickened. Set aside.",
                    "Prepare the filling: mix ground pork with onion, garlic, carrot, green beans, green onions, soy sauce, fish sauce, and pepper. Form into small logs.",
                    "Steam or lightly pan-fry the pork filling until just cooked through.",
                    "Soak spring roll wrappers in warm water until soft and pliable.",
                    "Lay a wrapper flat, place a lettuce leaf in the center, add the pork filling, then top with more greens.",
                    "Fold sides in and roll tightly. Serve immediately with peanut sauce."
                ]
            },
            {
                label: "Lumpiang Shanghai with Chicken",
                ingredients: [
                    { name: "Ground chicken", quantity: 500, unit: "grams" },
                    { name: "Onion, finely chopped", quantity: 1, unit: "medium" },
                    { name: "Garlic, minced", quantity: 4, unit: "cloves" },
                    { name: "Carrot, julienned", quantity: 1, unit: "piece" },
                    { name: "Green onions, finely chopped", quantity: 3, unit: "stalks" },
                    { name: "Egg", quantity: 1, unit: "large" },
                    { name: "Soy sauce", quantity: 2, unit: "tablespoons" },
                    { name: "Fish sauce (patis)", quantity: 1, unit: "tablespoon" },
                    { name: "Black pepper", quantity: 1, unit: "teaspoon" },
                    { name: "Spring roll wrappers (lumpia)", quantity: 20, unit: "pieces" },
                    { name: "Oil (for deep-frying)", quantity: "2 cups", unit: "" }
                ],
                description: "A lighter take using ground chicken instead of pork. The filling stays the same — just swap the meat. Chicken lumpia has a slightly milder flavor but the same satisfying crunch.",
                steps: [
                    "Combine ground chicken, onion, garlic, carrot, green onions, egg, soy sauce, fish sauce, and pepper.",
                    "Taste-test a small bit of the mixture before wrapping by frying a tiny patty — adjust seasoning if needed.",
                    "Wrap and seal the same way as traditional Shanghai.",
                    "Fry at the same temperature until golden and the internal temperature reaches 165°F (74°C)."
                ]
            }
        ]
    },
    {
        id: "bicolano_adobo",
        name: "Bicolanos",
        mealType: "Dessert",
        proteinType: "Other",
        image: "https://images.pexels.com/photos/1639559/pexels-photo-1639559.jpeg",
        description: "A rich, indulgent coconut milk dessert made with plantains, sweet potato, and taro simmered in sweet coconut cream. A beloved pasalubong treat.",
        servings: 6,
        prepDuration: "15 minutes",
        cookDuration: "40 minutes",
        difficulty: "Easy",
        ingredients: [
            { name: "Sweet potato (kamote)", quantity: 2, unit: "large" },
            { name: "Green bananas (saba)", quantity: 3, unit: "pieces" },
            { name: "Taro root (gabi)", quantity: 200, unit: "grams" },
            { name: "Coconut milk", quantity: 2, unit: "cups" },
            { name: "Brown sugar", quantity: 3/4, unit: "cup" },
            { name: "Pandan leaves", quantity: 2, unit: "pieces" },
            { name: "Salt", quantity: "1/4 teaspoon", unit: "" }
        ],
        steps: [
            "Peel and cut sweet potato and taro into 1-inch cubes. Peel and slice saba bananas diagonally.",
            "In a pot, combine coconut milk, brown sugar, pandan leaves, and salt. Bring to a gentle boil, stirring until sugar dissolves.",
            "Add sweet potato and taro first (they take longest). Simmer 15 minutes.",
            "Add banana and cook another 10-12 minutes until all vegetables are tender and the sauce is thick and glossy.",
            "Remove pandan leaves. Serve warm or chilled in small dessert bowls."
        ],
        variations: [
            {
                label: "Bicolanos with Macapuno",
                ingredients: [
                    { name: "Sweet potato (kamote)", quantity: 2, unit: "large" },
                    { name: "Green bananas (saba)", quantity: 3, unit: "pieces" },
                    { name: "Coconut milk", quantity: 2, unit: "cups" },
                    { name: "Brown sugar", quantity: 3/4, unit: "cup" },
                    { name: "Macapuno strips (candied preserve)", quantity: "1 cup", unit: "" },
                    { name: "Pandan leaves", quantity: 2, unit: "pieces" },
                    { name: "Salt", quantity: "1/4 teaspoon", unit: "" }
                ],
                description: "The addition of macapuno (young coconut strips) adds a delightful chewiness and extra coconut flavor to the dessert.",
                steps: [
                    "Simmer coconut milk, sugar, pandan, and salt as the base.",
                    "Add sweet potato cubes first and cook 15 minutes.",
                    "Add saba bananas and macapuno strips. Cook 10 minutes more until everything is tender and the sauce clings to the ingredients.",
                    "The macapuno releases its own flavor into the coconut cream — no additional liquid needed."
                ]
            },
            {
                label: "Vegan Purple Yam Bicolanos",
                ingredients: [
                    { name: "Purple yam (ube), steamed and mashed", quantity: 2, unit: "cups" },
                    { name: "Sweet potato (kamote)", quantity: 2, unit: "large" },
                    { name: "Green bananas (saba)", quantity: 3, unit: "pieces" },
                    { name: "Coconut milk", quantity: 2, unit: "cups" },
                    { name: "Palm sugar (or brown sugar)", quantity: 3/4, unit: "cup" },
                    { name: "Pandan leaves", quantity: 2, unit: "pieces" },
                    { name: "Salt", quantity: "1/4 teaspoon", unit: "" }
                ],
                description: "Swap taro for vibrant purple yam (ube) for a stunning color and nutty-sweet flavor. This version is naturally vegan and dairy-free.",
                steps: [
                    "Cook sweet potato in the coconut milk base for 15 minutes.",
                    "Add banana and mashed ube. Stir gently — the ube will bleed its purple color into the cream.",
                    "Continue cooking until thickened, about 10 more minutes.",
                    "The result is a beautiful lavender hue and a subtly sweet, earthy flavor that pairs wonderfully with the coconut."
                ]
            }
        ]
    }
];

module.exports = recipes;

