const recipes = [
  {
    id: "chicken_adobo",
    name: "Chicken Adobo",
    mealType: "Dinner",
    proteinType: "Chicken",
    image: "/images/chicken_adobo.jpg",
    youtubeId: "XtFu4wUN2Ok",
    description: "The unofficial national dish of the Philippines. Tender chicken braised in soy sauce, vinegar, garlic, and bay leaves — a perfect balance of salty, sour, and savory. Allergens: soy. Potential mix: serve with steamed rice, fried egg, or atchara.",
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
        label: "Chicken-Pork Adobo",
        ingredients: [
          { name: "Chicken thighs, bone-in", quantity: 4, unit: "pieces" },
          { name: "Pork belly, cubed", quantity: 1, unit: "lb" },
          { name: "Soy sauce", quantity: 1/4, unit: "cup" },
          { name: "White vinegar", quantity: 1, unit: "cup" },
          { name: "Garlic, crushed", quantity: 2, unit: "heads" },
          { name: "Bay leaves", quantity: 3, unit: "pieces" },
          { name: "Whole black peppercorns", quantity: 1.5, unit: "teaspoons" },
          { name: "Fish sauce", quantity: 2, unit: "tablespoons" },
          { name: "Cooking oil", quantity: 4, unit: "tablespoons" }
        ],
        description: "A hearty combination of chicken and pork simmered in a tangy adobo sauce. Allergens: soy, fish.",
        steps: [
          "Marinate chicken and pork in soy sauce and half the garlic for at least 1 hour (overnight is best).",
          "Heat oil and fry remaining garlic until golden. Set aside.",
          "Transfer marinated meats with marinade to a pot. Add vinegar, peppercorns, and bay leaves. Boil, then simmer for 30-35 minutes.",
          "Remove chicken, continue simmering pork for 20 minutes. Remove pork.",
          "Fry the chicken and pork in garlic oil until browned.",
          "Return fried meats to the pot with sauce. Add fish sauce and simmer for 10-12 minutes. Serve."
        ]
      },
      {
        label: "Adobong Manok sa Gata (Chicken Adobo in Coconut Milk)",
        ingredients: [
          { name: "Chicken thighs, bone-in", quantity: 8, unit: "pieces" },
          { name: "Coconut milk", quantity: 2, unit: "cups" },
          { name: "Soy sauce", quantity: 1/4, unit: "cup" },
          { name: "White vinegar", quantity: 1/4, unit: "cup" },
          { name: "Garlic, crushed", quantity: 6, unit: "cloves" },
          { name: "Ginger, sliced", quantity: 1, unit: "inch" },
          { name: "Bay leaves", quantity: 3, unit: "pieces" },
          { name: "Whole black peppercorns", quantity: 1, unit: "teaspoon" },
          { name: "Fish sauce", quantity: 2, unit: "tablespoons" }
        ],
        description: "A creamy, rich twist on classic adobo. The coconut milk mellows the vinegar and adds a luscious texture. Allergens: soy, fish, coconut.",
        steps: [
          "Sauté garlic and ginger in oil until fragrant.",
          "Add chicken and cook until lightly browned.",
          "Pour in soy sauce, vinegar, and coconut milk. Add bay leaves and peppercorns.",
          "Bring to a boil, then simmer covered for 30-35 minutes until chicken is tender and sauce is thickened.",
          "Season with fish sauce. Serve hot."
        ]
      }
    ]
  },
  {
    id: "fried_bangus",
    name: "Fried Bangus (Milkfish)",
    mealType: "Dinner",
    proteinType: "Fish",
    image: "/images/fried_bangus.jpg",
    youtubeId: "CzHmFg2mEHI",
    description: "Crispy, golden-brown milkfish stuffed with a savory tomato-onion mixture. A classic Filipino comfort food. Allergens: fish. Potential mix: serve with steamed rice and a dipping sauce of vinegar, garlic, and chili.",
    servings: 4,
    prepDuration: "10 minutes",
    cookDuration: "30 minutes",
    difficulty: "Easy",
    ingredients: [
      { name: "Bangus (milkfish), whole", quantity: 1, unit: "piece" },
      { name: "Tomatoes, diced", quantity: 2, unit: "pieces" },
      { name: "Onion, diced", quantity: 1, unit: "piece" },
      { name: "Salt", quantity: 1, unit: "tablespoon" },
      { name: "Magic Sarap", quantity: 1/2, unit: "tablespoon" },
      { name: "Cooking oil", quantity: "for frying", unit: "" }
    ],
    steps: [
      "Mix the diced onion and tomato in a bowl and add salt. Stuff them inside the bangus.",
      "Coat the bangus with salt & Magic Sarap evenly.",
      "Heat oil in a non-stick pan for 5 minutes.",
      "Place the bangus in the pan and let it fry for 10-12 minutes on each side. Fry until golden brown.",
      "Let it cool for 5 minutes. Enjoy."
    ],
    variations: [
      {
        label: "Grilled Bangus (Whole)",
        ingredients: [
          { name: "Bangus (milkfish), whole", quantity: 1, unit: "piece" },
          { name: "Tomatoes, diced", quantity: 2, unit: "pieces" },
          { name: "Onion, diced", quantity: 1, unit: "piece" },
          { name: "Salt", quantity: 1, unit: "tablespoon" },
          { name: "Magic Sarap", quantity: 1/2, unit: "tablespoon" },
          { name: "Aluminum foil", quantity: 1, unit: "wrap" }
        ],
        description: "A smoky, healthier alternative to frying. The banana-leaf or foil wrap steams the fish while grilling, keeping it moist. Allergens: fish.",
        steps: [
          "Mix the diced onion and tomato in a bowl and add salt. Stuff them inside the bangus.",
          "Coat the bangus with salt & Magic Sarap evenly. Cover with foil.",
          "Prepare the grill and place the bangus. Grill for 15-20 minutes. The foil will look burnt, it's ok.",
          "Let it cool for 5 minutes before removing the foil. Enjoy."
        ]
      },
      {
        label: "Fried Bangus (Chopped)",
        ingredients: [
          { name: "Bangus (milkfish), chopped", quantity: 1, unit: "piece" },
          { name: "Salt", quantity: 1, unit: "tablespoon" },
          { name: "Magic Sarap", quantity: 1/2, unit: "tablespoon" },
          { name: "Cooking oil", quantity: "for frying", unit: "" }
        ],
        description: "Quick and easy chopped fried bangus. Best mixed with other recipes like sinigang or served as a side. Allergens: fish.",
        steps: [
          "Coat the bangus with salt & Magic Sarap evenly.",
          "Heat oil in a non-stick pan for 5 minutes.",
          "Place the bangus in the pan and let it fry for 10-12 minutes. Fry until golden brown.",
          "Let it cool for 5 minutes. Enjoy."
        ]
      }
    ]
  },
  {
    id: "chicken_tinola",
    name: "Chicken Tinola",
    mealType: "Lunch",
    proteinType: "Chicken",
    image: "/images/chicken_tinola.jpg",
    youtubeId: "PN3pgZmC1f4",
    description: "A comforting Filipino ginger-based soup with tender chicken, papaya or sayote, and chili leaves. Light, savory, and perfect with rice. Allergens: fish (patis).",
    servings: 5,
    prepDuration: "20 minutes",
    cookDuration: "1 hour",
    difficulty: "Medium",
    ingredients: [
      { name: "Chicken, chopped (thigh/wings)", quantity: 1, unit: "kg" },
      { name: "Garlic, minced", quantity: 1/2, unit: "head" },
      { name: "Onions, sliced", quantity: 2, unit: "pieces" },
      { name: "Ginger, peeled & sliced", quantity: 1, unit: "inch" },
      { name: "Papaya, sliced", quantity: 1, unit: "piece" },
      { name: "Chili leaves (dahon ng sili) or malunggay", quantity: 2, unit: "bundles" },
      { name: "Water", quantity: "3-4", unit: "cups" },
      { name: "Fish sauce (patis)", quantity: 2, unit: "tablespoons" },
      { name: "Magic Sarap, salt & pepper", quantity: 1, unit: "tablespoon" },
      { name: "Chicken cubes", quantity: 2, unit: "pieces" }
    ],
    steps: [
      "Heat oil in a pot and sauté ginger, onion, and garlic (in that order).",
      "Place the chicken in the pot and sauté with patis & pepper.",
      "Let it simmer until the meat turns white.",
      "Add the papaya and pour water. Add the chicken cubes for taste.",
      "Let it boil for 30 minutes, until the papaya is soft. Add Magic Sarap, salt, and pepper for taste.",
      "Lastly, add the chili leaves. Enjoy."
    ],
    variations: [
      {
        label: "Chicken Tinola with Tanglad",
        ingredients: [
          { name: "Chicken, chopped (thigh/wings)", quantity: 1, unit: "kg" },
          { name: "Garlic, minced", quantity: 1/2, unit: "head" },
          { name: "Onions, sliced", quantity: 2, unit: "pieces" },
          { name: "Ginger, peeled & sliced", quantity: 1, unit: "inch" },
          { name: "Sayote, sliced", quantity: 1, unit: "piece" },
          { name: "Tanglad (lemongrass), tied in a knot", quantity: 1, unit: "bundle" },
          { name: "Chili leaves (dahon ng sili)", quantity: 2, unit: "bundles" },
          { name: "Water", quantity: "3-4", unit: "cups" },
          { name: "Fish sauce (patis)", quantity: 2, unit: "tablespoons" },
          { name: "Magic Sarap, salt & pepper", quantity: 1, unit: "tablespoon" },
          { name: "Chicken cubes", quantity: 2, unit: "pieces" }
        ],
        description: "My preferred way of cooking tinola—lemongrass adds a bright, citrusy aroma. Allergens: fish.",
        steps: [
          "Heat oil in a pot and sauté ginger, onion, and garlic (in that order).",
          "Place the chicken in the pot and sauté with patis & pepper.",
          "Let it simmer until the meat turns white.",
          "Add the sayote, tanglad, and pour water. Add the chicken cubes for taste.",
          "Let it boil for 30 minutes, until the sayote is soft. Add Magic Sarap, salt, and pepper for taste.",
          "Lastly, remove the tanglad and add the chili leaves. Enjoy."
        ]
      },
      {
        label: "Tinolang Sotanghon",
        ingredients: [
          { name: "Chicken, chopped (breast part)", quantity: 1, unit: "kg" },
          { name: "Garlic, minced", quantity: 1/2, unit: "head" },
          { name: "Onions, sliced", quantity: 2, unit: "pieces" },
          { name: "Ginger, peeled & sliced", quantity: 1, unit: "inch" },
          { name: "Papaya, sliced", quantity: 1, unit: "piece" },
          { name: "Sotanghon (glass noodles)", quantity: 2, unit: "ounces" },
          { name: "Chili leaves (dahon ng sili)", quantity: 1, unit: "bundle" },
          { name: "Water", quantity: "4-5", unit: "cups" },
          { name: "Fish sauce (patis)", quantity: 2, unit: "tablespoons" },
          { name: "Magic Sarap, salt & pepper", quantity: 1, unit: "tablespoon" },
          { name: "Chicken cubes", quantity: 2, unit: "pieces" }
        ],
        description: "Hearty tinola with glass noodles—a complete meal in a bowl. Allergens: fish.",
        steps: [
          "Heat oil in a pot and sauté ginger, onion, and garlic (in that order).",
          "Place the chicken in the pot and sauté with patis & pepper.",
          "Let it simmer until the meat turns white.",
          "Add the papaya and pour water. Add the chicken cubes for taste.",
          "Dip the sotanghon into a bowl of water to soften, then place in the pot.",
          "Let it boil for 45 minutes, until the papaya and noodles are soft. Add Magic Sarap, salt, and pepper for taste.",
          "Lastly, add the chili leaves. Enjoy."
        ]
      },
      {
        label: "Chicken Tinola with Coconut Milk",
        ingredients: [
          { name: "Chicken, chopped (thigh/wings)", quantity: 1, unit: "kg" },
          { name: "Garlic, minced", quantity: 1/2, unit: "head" },
          { name: "Onions, sliced", quantity: 2, unit: "pieces" },
          { name: "Ginger, peeled & sliced", quantity: 1, unit: "inch" },
          { name: "Coconut milk", quantity: 2, unit: "cups" },
          { name: "Papaya, sliced into wedges", quantity: 1, unit: "piece" },
          { name: "Malunggay leaves", quantity: 1, unit: "bundle" },
          { name: "Siling labuyo (bird's eye chili)", quantity: 3, unit: "pieces" },
          { name: "Water", quantity: 2, unit: "cups" },
          { name: "Fish sauce (patis)", quantity: 2, unit: "tablespoons" },
          { name: "Magic Sarap, salt & pepper", quantity: 1, unit: "tablespoon" },
          { name: "Chicken cubes", quantity: 2, unit: "pieces" }
        ],
        description: "A creamy, spicy version of tinola. Coconut milk adds richness and siling labuyo brings heat. Allergens: fish, coconut.",
        steps: [
          "Heat oil in a pot and sauté ginger, onion, and garlic (in that order).",
          "Place the chicken in the pot and stir-fry until it turns light brown.",
          "Pour the coconut milk into the pot. Let boil.",
          "Add ground black pepper and chili pepper. Cover and cook on low heat for 35 minutes or until the chicken gets tender.",
          "Add papaya. Cover and cook for 7 minutes.",
          "Pour water into the pot. Let it boil.",
          "Add the chicken cube and stir. Cover and cook for 5 to 8 minutes.",
          "Lastly, add patis and malunggay leaves and stir for 3 minutes. Enjoy."
        ]
      }
    ]
  },
  {
    id: "pork_sinigang",
    name: "Pork Sinigang",
    mealType: "Lunch",
    proteinType: "Pork",
    image: "/images/pork_sinigang.jpg",
    youtubeId: "DeXeCmRanWU",
    description: "A sour, savory Filipino soup with tender pork and fresh vegetables in a tamarind broth. Comforting and perfect with rice. Allergens: fish (patis).",
    servings: 5,
    prepDuration: "20 minutes",
    cookDuration: "1 hour 30 minutes",
    difficulty: "Medium",
    ingredients: [
      { name: "Pork belly or shoulder, cubed", quantity: 2, unit: "lbs" },
      { name: "Onions, sliced", quantity: 2, unit: "pieces" },
      { name: "Tomatoes, sliced", quantity: 3, unit: "pieces" },
      { name: "Gabi (taro root), sliced", quantity: 2, unit: "ounces" },
      { name: "Sitaw (string beans)", quantity: 1, unit: "bundle" },
      { name: "Pechay Leaves", quantity: 2, unit: "bundle" },
      { name: "Water", quantity: "4-5", unit: "cups" },
       { name: "Knorr Sinigang sa Sampaloc Mix", quantity: 40, unit: "grams" },
        { name: "Siling Haba (Green Chili)", quantity: 2, unit: "pieces" },
      { name: "Fish sauce (patis)", quantity: 2, unit: "tablespoons" },
      { name: "Magic Sarap, salt & pepper", quantity: 1, unit: "tablespoon" },
      { name: "Pork cubes", quantity: 1, unit: "piece" }
    ],
    steps: [
      "Boil water in a pot and add the pork. Let it boil until the meat turns light brown.",
      "In a separate pot, pour water and bring to a boil. Add onions and tomatoes.",
      "Place the previously boiled pork in the pot and let it boil for 10 minutes.",
      "Add the gabi and let it boil until soft. Then, crush the gabi to thicken the soup.",
      "add the sinigang mix and stir. Let it boil for 5 minutes.",
      "add the sitaw. Let it boil until cooked.",
      "Add the siling haba and adjust the taste with patis, Magic Sarap, salt, and pepper.",
      "Lastly, add the pechay leaves. Enjoy."
    ],
    variations: []
    },
      {
        id: "bangus_sinigang",
        name: "Sinigang na Bangus",
        mealType: "Lunch",
        proteinType: "Fish",
        image: "/images/bangus_sinigang.jpg",
        youtubeId: "T53EiKknc7c",
        description: "A sour milkfish soup with tamarind broth and fresh vegetables. Allergens: fish.",
        servings: 5,
        prepDuration: "20 minutes",
        cookDuration: "1 hour 30 minutes",
        difficulty: "Medium",
        ingredients: [
          { name: "Bangus (milkfish), cleaned & sliced", quantity: 2, unit: "lbs" },
          { name: "Knorr Sinigang sa Sampaloc Mix", quantity: 40, unit: "grams" },
          { name: "Kangkong", quantity: 1, unit: "bunch" },
          { name: "Sitaw (snake beans), cut", quantity: 12, unit: "pieces" },
          { name: "Okra", quantity: 6, unit: "pieces" },
          { name: "Long green pepper", quantity: 2, unit: "pieces" },
          { name: "Tomato, wedged", quantity: 1, unit: "piece" },
          { name: "Onion, wedged", quantity: 1, unit: "piece" },
          { name: "Fish sauce", quantity: 2.5, unit: "tablespoons" },
          { name: "Ground black pepper", quantity: 1/4, unit: "teaspoon" },
          { name: "Water", quantity: 2, unit: "quarts" }
        ],
        steps: [
          "Boil water in a pot. Add tomato and onion.",
          "Add bangus, cover, and cook over medium heat for 8-12 minutes.",
          "Add sinigang mix, stir, and cook for 2 minutes.",
          "Add long green peppers, sitaw, and okra. Cook for 5-7 minutes.",
          "Season with fish sauce and black pepper.",
          "Add kangkong leaves, cover, and turn off heat. Let stand for 5 minutes. Serve."
        ],
        variations: [
            {
                label: "Sinigang na Bangus sa Miso",
                ingredients: [
                { name: "Milkfish, cleaned & sliced", quantity: "1-2", unit: "lbs" },
                { name: "Mustard leaves", quantity: 1, unit: "bunch" },
                { name: "Tomatoes, quartered", quantity: 3, unit: "pieces" },
                { name: "Tamarind soup mix", quantity: 1, unit: "pack (1.4 oz)" },
                { name: "Fish sauce", quantity: 2.5, unit: "tablespoons" },
                { name: "Long green chilies", quantity: 2, unit: "pieces" },
                { name: "White or yellow miso paste", quantity: 1/2, unit: "cup" },
                { name: "Yellow onion, sliced", quantity: 1, unit: "piece" },
                { name: "Cooking oil", quantity: 2, unit: "tablespoons" },
                { name: "Water", quantity: 6, unit: "cups" }
                ],
                description: "Sinigang with a rich umami boost from miso. Allergens: fish, soy.",
                steps: [
                "Sauté onions in oil until soft. Add miso and cook for 2 minutes.",
                "Add fish sauce and water. Bring to a boil.",
                "Add tomatoes and tamarind soup mix. Cook for 5 minutes.",
                "Add long green chilies and milkfish. Cook for 15-18 minutes on low heat.",
                "Add mustard leaves, turn off heat, and cover. Let residual heat cook the greens. Serve."
                ]
            },
            {
            label: "Sinigang sa Miso with Fried Bangus",
            ingredients: [
          { name: "Bangus (milkfish), fried", quantity: 1, unit: "large" },
          { name: "Spinach", quantity: 1, unit: "bunch" },
          { name: "Tomatoes, quartered", quantity: 4, unit: "pieces" },
          { name: "Miso paste", quantity: 3, unit: "tablespoons" },
          { name: "Sinigang sa sampaloc mix", quantity: 1, unit: "sachet" },
          { name: "Water", quantity: 6, unit: "cups" },
          { name: "Fish sauce", quantity: 2, unit: "tablespoons" }
        ],
        description: "Crispy fried bangus simmered in a miso-tamarind broth. Allergens: fish, soy.",
        steps: [
          "Sauté onions and miso in oil. Add fish sauce and water. Bring to a boil.",
          "Add tomatoes and sinigang mix. Simmer for 5 minutes.",
          "Add fried bangus and simmer for 15-18 minutes.",
          "Add spinach, turn off heat, and cover. Serve."
        ]
      }
        ],
      },
  {
    id: "sarsiadong_bangus",
    name: "Sarsiadong Bangus",
    mealType: "Dinner",
    proteinType: "Fish",
    image: "/images/sarsiadong_bangus.jpg",
    youtubeId: "gTPH9VZ2Qds",
    description: "Crispy fried milkfish smothered in a savory tomato-egg sauce. A simple, everyday Filipino dish. Allergens: fish, egg.",
    servings: 4,
    prepDuration: "15 minutes",
    cookDuration: "30 minutes",
    difficulty: "Easy",
    ingredients: [
      { name: "Bangus (milkfish), cut into pieces", quantity: 1, unit: "piece" },
      { name: "Garlic, crushed", quantity: 3, unit: "cloves" },
      { name: "Onions, chopped", quantity: 2, unit: "pieces" },
      { name: "Tomatoes, chopped", quantity: 4, unit: "pieces" },
      { name: "Eggs, beaten", quantity: 3, unit: "pieces" },
      { name: "Water", quantity: 1, unit: "cup" },
      { name: "Salt, Magic Sarap, pepper", quantity: "to taste", unit: "" },
      { name: "Cooking oil", quantity: "for frying", unit: "" }
    ],
    steps: [
      "Clean the bangus, remove gills, scales, and innards. Cut into 5 pieces. Sprinkle with salt.",
      "Heat oil and deep-fry bangus until golden brown and crispy. Drain and set aside.",
      "In a wok, sauté garlic and onions until fragrant. Add tomatoes and cook until soft.",
      "Pour in water and simmer for 3 minutes.",
      "Beat eggs and pour into the simmering sauce, stirring slowly to prevent large clumps.",
      "Season with salt, Magic Sarap, and pepper.",
      "Gently place fried bangus into the egg mixture, coating each piece. Simmer for 2 minutes. Serve."
    ],
    variations: []
  },
  {
    id: "nilagang_baboy",
    name: "Boiled Pork Soup (Nilagang Baboy)",
    mealType: "Lunch",
    proteinType: "Pork",
    image: "/images/nilagang_baboy.jpg",
    youtubeId: "5etQEbP0ZwE",
    description: "A clear, comforting pork soup with tender meat and vegetables. Best served with fish sauce and chili on the side. Allergens: fish (patis).",
    servings: 4,
    prepDuration: "10 minutes",
    cookDuration: "1 hour",
    difficulty: "Easy",
    ingredients: [
      { name: "Pork belly or shoulder, cubed", quantity: 2, unit: "lbs" },
      { name: "Yellow onion", quantity: 1, unit: "piece" },
      { name: "Cabbage, quartered", quantity: 1, unit: "piece" },
      { name: "Potatoes, peeled & cubed", quantity: 2, unit: "pieces" },
      { name: "Saba banana, sliced", quantity: 4, unit: "pieces" },
      { name: "Beef or pork broth", quantity: "6-8", unit: "cups" },
      { name: "Whole peppercorn", quantity: 1, unit: "teaspoon" },
      { name: "Salt", quantity: "to taste", unit: "" },
      { name: "Cooking oil", quantity: 3, unit: "tablespoons" }
    ],
    steps: [
      "Heat oil in a pot. Sauté onion and peppercorn for 20 seconds.",
      "Add pork and cook until lightly browned, about 3-5 minutes.",
      "Pour in broth. Bring to a boil, then simmer for 45-60 minutes until pork is tender.",
      "Add saba banana and potatoes. Cook for 12 minutes.",
      "Add cabbage and season with salt. Cook for 3 minutes.",
      "Serve with a spicy fish sauce dipping sauce."
    ],
    variations: []
  },
  {
    id: "pork_giniling",
    name: "Pork Giniling",
    mealType: "Lunch",
    proteinType: "Pork",
    image: "/images/pork_giniling.jpg",
    youtubeId: "3MdiDjrvMJo",
    description: "A hearty ground pork stew with potatoes, carrots, and tomato sauce. A staple Filipino comfort food. Allergens: soy (if using soy sauce), egg (if using boiled eggs).",
    servings: 4,
    prepDuration: "10 minutes",
    cookDuration: "40 minutes",
    difficulty: "Easy",
    ingredients: [
      { name: "Ground pork", quantity: 1.5, unit: "lbs" },
      { name: "Potatoes, diced", quantity: 1.5, unit: "cups" },
      { name: "Carrots, diced", quantity: 1, unit: "cup" },
      { name: "Tomato sauce", quantity: 8, unit: "ounces" },
      { name: "Garlic, crushed", quantity: 6, unit: "cloves" },
      { name: "Onion, minced", quantity: 1, unit: "piece" },
      { name: "Granulated sugar", quantity: 1, unit: "teaspoon" },
      { name: "Beef or pork cube", quantity: 1, unit: "piece" },
      { name: "Boiled eggs, shelled", quantity: 4, unit: "pieces" },
      { name: "Salt & pepper", quantity: "to taste", unit: "" },
      { name: "Cooking oil", quantity: 3, unit: "tablespoons" },
      { name: "Water", quantity: 1, unit: "cup" }
    ],
    steps: [
      "Heat oil in a pot. Sauté garlic until light brown. Add onions and cook until soft.",
      "Add ground pork and cook for 5 minutes.",
      "Add beef or pork cube, tomato sauce, and water. Bring to a boil, then simmer for 20 minutes.",
      "Add carrots and potatoes. Simmer for 10-12 minutes.",
      "Season with salt, pepper, and sugar.",
      "Add boiled eggs, turn off heat. Serve."
    ],
    variations: [
      {
        label: "Pork Giniling without Tomato Sauce",
        ingredients: [
          { name: "Ground pork", quantity: 1.5, unit: "lbs" },
          { name: "Potatoes, diced", quantity: 1.5, unit: "cups" },
          { name: "Carrots, diced", quantity: 1, unit: "cup" },
          { name: "Garlic, minced", quantity: 5, unit: "cloves" },
          { name: "Onion, chopped", quantity: 1, unit: "piece" },
          { name: "Soy sauce", quantity: 3, unit: "tablespoons" },
          { name: "Fish sauce (patis)", quantity: 1, unit: "tablespoon" },
          { name: "Water", quantity: 1, unit: "cup" },
          { name: "Salt & pepper", quantity: "to taste", unit: "" },
          { name: "Cooking oil", quantity: 3, unit: "tablespoons" }
        ],
        description: "A savory version without tomato sauce, using soy sauce and fish sauce for flavor. Allergens: soy, fish.",
        steps: [
          "Sauté garlic and onion in oil until fragrant.",
          "Add ground pork and cook until lightly browned.",
          "Add soy sauce and fish sauce. Stir and cook for 2 minutes.",
          "Pour in water and bring to a boil. Simmer for 20 minutes.",
          "Add potatoes and carrots. Simmer for 10-12 minutes until tender.",
          "Season with salt and pepper. Serve."
        ]
      },
      {
        label: "Pork & Sayote Guisado",
        ingredients: [
          { name: "Pork belly, thinly sliced", quantity: 1, unit: "lb" },
          { name: "Sayote, sliced", quantity: 2, unit: "pieces" },
          { name: "Garlic, minced", quantity: 5, unit: "cloves" },
          { name: "Onion, sliced", quantity: 1, unit: "piece" },
          { name: "Tomatoes, diced", quantity: 2, unit: "pieces" },
          { name: "Soy sauce", quantity: 2, unit: "tablespoons" },
          { name: "Fish sauce (patis)", quantity: 1, unit: "tablespoon" },
          { name: "Water", quantity: 1/2, unit: "cup" },
          { name: "Salt & pepper", quantity: "to taste", unit: "" },
          { name: "Cooking oil", quantity: 2, unit: "tablespoons" }
        ],
        description: "A simple stir-fry of pork and sayote (chayote) in a savory sauce. Allergens: soy, fish.",
        steps: [
          "Sauté garlic, onion, and tomatoes in oil until soft.",
          "Add pork and cook until lightly browned.",
          "Add soy sauce and fish sauce. Stir.",
          "Pour in water and simmer for 10 minutes.",
          "Add sayote and cook for 5-7 minutes until tender but crisp.",
          "Season with salt and pepper. Serve."
        ]
      }
    ]
  },
  {
    id: "ginisang_monggo",
    name: "Ginisang Monggo",
    mealType: "Lunch",
    proteinType: "Pork",
    image: "/images/ginisang_monggo.jpg",
    youtubeId: "Na9SsSWaqo",
    description: "A savory mung bean stew with pork, shrimp, and leafy greens. Traditionally served on Fridays. Allergens: fish (patis), shellfish (shrimp).",
    servings: 5,
    prepDuration: "15 minutes",
    cookDuration: "1 hour",
    difficulty: "Medium",
    ingredients: [
      { name: "Mung beans", quantity: 1.5, unit: "cups" },
      { name: "Pork, thinly sliced", quantity: 1/2, unit: "lb" },
      { name: "Garlic, minced", quantity: 1, unit: "tablespoon" },
      { name: "Onion, chopped", quantity: 1, unit: "piece" },
      { name: "Tomato, chopped", quantity: 1, unit: "piece" },
      { name: "Shrimp", quantity: "5-8", unit: "pieces" },
      { name: "Spinach or alugbati", quantity: 2, unit: "cups" },
      { name: "Beef cube", quantity: 1, unit: "piece" },
      { name: "Fish sauce", quantity: 2, unit: "tablespoons" },
      { name: "Water", quantity: "24", unit: "ounces" },
      { name: "Cooking oil", quantity: 2, unit: "tablespoons" }
    ],
    steps: [
      "Boil water in a pot. Add mung beans and simmer for 35-50 minutes until soft.",
      "In a separate pan, sauté garlic, onion, and tomato in oil.",
      "Add pork and cook for 5 minutes. Add beef cube and fish sauce. Simmer for 10 minutes.",
      "Add shrimp and cook for 2 minutes.",
      "Add cooked mung beans and their liquid to the pan. Stir and simmer for 5 minutes.",
      "Add spinach or alugbati. Cook for 2 minutes. Serve."
    ],
    variations: []
  },
  {
    id: "pork_adobo",
    name: "Pork Adobo",
    mealType: "Dinner",
    proteinType: "Pork",
    image: "/images/pork_adobo.jpg",
    youtubeId: "OTGASYe7hQk",
    description: "Tender pork belly braised in soy sauce, vinegar, garlic, and bay leaves. A classic Filipino adobo. Allergens: soy.",
    servings: 4,
    prepDuration: "10 minutes",
    cookDuration: "50 minutes",
    difficulty: "Easy",
    ingredients: [
      { name: "Pork belly, cubed", quantity: 1.5, unit: "lbs" },
      { name: "Whole peppercorn", quantity: 1.5, unit: "teaspoons" },
      { name: "Dried bay leaves", quantity: "5-6", unit: "pieces" },
      { name: "Garlic, crushed", quantity: "6-8", unit: "cloves" },
      { name: "Soy sauce", quantity: 5, unit: "tablespoons" },
      { name: "Coconut vinegar", quantity: 3, unit: "tablespoons" },
      { name: "Water or beef broth", quantity: 1.5, unit: "cups" },
      { name: "Cooking oil", quantity: 3, unit: "tablespoons" },
      { name: "Salt", quantity: "to taste", unit: "" }
    ],
    steps: [
      "Heat oil in a pot. Add garlic and cook until light brown.",
      "Add peppercorns and bay leaves. Cook for 20 seconds.",
      "Add pork belly and cook until lightly browned.",
      "Pour in soy sauce and broth. Bring to a boil, then simmer covered for 40 minutes.",
      "Pour in vinegar. Let it re-boil, then stir and cook for 8 minutes.",
      "Season with salt if needed. Serve."
    ],
    variations: [
      {
        label: "Pork Steak",
        ingredients: [
          { name: "Pork chops", quantity: 4, unit: "pieces" },
          { name: "Soy sauce", quantity: 5, unit: "tablespoons" },
          { name: "Calamansi or lime juice", quantity: 2, unit: "pieces" },
          { name: "Garlic, minced", quantity: 3, unit: "cloves" },
          { name: "Onion, sliced into rings", quantity: 1, unit: "piece" },
          { name: "Sugar", quantity: 1, unit: "teaspoon" },
          { name: "Water", quantity: 1/2, unit: "cup" },
          { name: "Cooking oil", quantity: 2, unit: "tablespoons" },
          { name: "Salt & pepper", quantity: "to taste", unit: "" }
        ],
        description: "Filipino-style pork steak (bistek) with soy sauce, calamansi, and onion rings. Allergens: soy.",
        steps: [
          "Marinate pork chops in soy sauce, calamansi juice, garlic, salt, and pepper for at least 1 hour.",
          "Pan-fry marinated pork chops in oil for 3 minutes per side until golden. Set aside.",
          "In the same pan, sauté onion rings until soft.",
          "Return pork chops to the pan. Add marinade, water, and sugar. Simmer for 10-15 minutes until tender.",
          "Serve with rice."
        ]
      },
      {
        label: "Adobong Porkchop",
        ingredients: [
          { name: "Pork chops", quantity: 4, unit: "pieces" },
          { name: "Soy sauce", quantity: 1/4, unit: "cup" },
          { name: "White vinegar", quantity: 1/4, unit: "cup" },
          { name: "Garlic, crushed", quantity: 6, unit: "cloves" },
          { name: "Bay leaves", quantity: 3, unit: "pieces" },
          { name: "Whole peppercorns", quantity: 1, unit: "teaspoon" },
          { name: "Water", quantity: 1/2, unit: "cup" },
          { name: "Cooking oil", quantity: 2, unit: "tablespoons" }
        ],
        description: "Pork chops cooked adobo-style—tangy, savory, and tender. Allergens: soy.",
        steps: [
          "Marinate pork chops in soy sauce, garlic, peppercorns, and bay leaves for 30 minutes. (Taste better if left overnight.)",
          "Heat oil in a pan. Fry pork chops until browned on both sides.",
          "Pour in marinade, vinegar, and water. Bring to a boil, then simmer for 20-25 minutes until tender.",
          "Serve with rice."
        ]
      }
    ]
  },
  {
    id: "kare_kare",
    name: "Kare-Kare (Beef)",
    mealType: "Dinner",
    proteinType: "Beef",
    image: "/images/kare_kare.jpg",
    youtubeId: "t-EIrkDQ9tQ",
    description: "A rich, savory peanut stew with tender oxtail and vegetables. Served with shrimp paste (bagoong). Allergens: peanuts, shellfish (bagoong).",
    servings: 6,
    prepDuration: "15 minutes",
    cookDuration: "2 hours 30 minutes",
    difficulty: "Hard",
    ingredients: [
      { name: "Oxtail, cut into pieces", quantity: 2, unit: "lbs" },
      { name: "Onion, chopped", quantity: 1, unit: "piece" },
      { name: "Garlic, minced", quantity: 4, unit: "cloves" },
      { name: "Ground peanuts", quantity: 1, unit: "cup" },
      { name: "Peanut butter", quantity: 1/2, unit: "cup" },
      { name: "Annatto seed water", quantity: 1/2, unit: "cup" },
      { name: "Toasted ground rice", quantity: 1/4, unit: "cup" },
      { name: "Banana flower", quantity: 1, unit: "piece" },
      { name: "Eggplant, sliced", quantity: 1, unit: "piece" },
      { name: "String beans", quantity: 1, unit: "bunch" },
      { name: "Bagoong alamang (shrimp paste)", quantity: "for serving", unit: "" },
      { name: "Water", quantity: 10, unit: "cups" },
      { name: "Salt & pepper", quantity: "to taste", unit: "" }
    ],
    steps: [
      "Boil water in a large pot. Add oxtail and onion. Simmer for 2.5-3 hours until tender (or 35 minutes in a pressure cooker).",
      "Add ground peanuts, peanut butter, and annatto water. Simmer for 5-7 minutes.",
      "Add toasted ground rice. Simmer for 5 minutes.",
      "In a separate pan, sauté garlic, banana flower, eggplant, and string beans for 5 minutes.",
      "Transfer vegetables to the large pot. Season with salt and pepper.",
      "Serve hot with bagoong alamang."
    ],
    variations: []
  },
  {
    id: "pancit_bihon",
    name: "Pancit Bihon",
    mealType: "Lunch",
    proteinType: "Chicken",
    image: "/images/pancit_bihon.jpg",
    youtubeId: "025q17zw7JI",
    description: "Thin rice noodles stir-fried with chicken, pork, and vegetables. A birthday staple symbolizing long life. Allergens: soy, shellfish (oyster sauce).",
    servings: 6,
    prepDuration: "15 minutes",
    cookDuration: "20 minutes",
    difficulty: "Medium",
    ingredients: [
      { name: "Rice stick noodles (bihon)", quantity: 250, unit: "g" },
      { name: "Chicken breast, thinly sliced", quantity: 200, unit: "g" },
      { name: "Pork belly, cut into strips", quantity: 150, unit: "g" },
      { name: "Soy sauce", quantity: 3, unit: "tablespoons" },
      { name: "Oyster sauce", quantity: 1, unit: "tablespoon" },
      { name: "Calamansi or lemon juice", quantity: "6 pcs or 2 tbsp", unit: "" },
      { name: "Garlic, minced", quantity: 5, unit: "cloves" },
      { name: "Onion, sliced", quantity: 1, unit: "piece" },
      { name: "Carrot, julienned", quantity: 1, unit: "piece" },
      { name: "Cabbage, shredded", quantity: 1/4, unit: "head" },
      { name: "Green beans, cut", quantity: 1, unit: "cup" },
      { name: "Celery, sliced", quantity: 2, unit: "stalks" },
      { name: "Chicken broth", quantity: 2, unit: "cups" },
      { name: "Cooking oil", quantity: 3, unit: "tablespoons" },
      { name: "Salt & pepper", quantity: "to taste", unit: "" },
      { name: "Green onions", quantity: "for garnish", unit: "" }
    ],
    steps: [
      "Soak bihon noodles in room-temperature water for 10-15 minutes until pliable. Drain and set aside.",
      "Heat oil in a wok. Sear pork strips until crispy, then add chicken and cook until no longer pink. Remove and set aside.",
      "In the same wok, sauté garlic and onion. Add carrots and green beans, stir-fry for 2 minutes. Add celery and cook for 1 minute.",
      "Pour in chicken broth and bring to a simmer. Add drained bihon noodles and toss constantly for 3-4 minutes until most liquid is absorbed.",
      "Add soy sauce and oyster sauce. Return cooked meat to the wok. Toss in cabbage and cook for 1 minute.",
      "Season with salt and pepper. Squeeze calamansi over the top. Garnish with green onions. Serve."
    ],
    variations: [
      {
        label: "Pancit Palabok",
        ingredients: [
          { name: "Palabok noodles (cornstarch sticks)", quantity: 12, unit: "oz" },
          { name: "Pork shoulder, sliced", quantity: 8, unit: "oz" },
          { name: "Knorr Shrimp Cube", quantity: 1, unit: "piece" },
          { name: "Tinapa flakes", quantity: 1/2, unit: "cup" },
          { name: "All-purpose flour", quantity: 6, unit: "tablespoons" },
          { name: "Annatto water", quantity: 1/2, unit: "cup" },
          { name: "Fish sauce", quantity: 3.5, unit: "tablespoons" },
          { name: "Shrimp, peeled", quantity: 12, unit: "pieces" },
          { name: "Napa cabbage, chopped", quantity: 1, unit: "cup" },
          { name: "Hard-boiled eggs, quartered", quantity: 3, unit: "pieces" },
          { name: "Crushed chicharon", quantity: 1/2, unit: "cup" },
          { name: "Scallions, chopped", quantity: 1/2, unit: "cup" },
          { name: "Calamansi or lime", quantity: "for serving", unit: "" }
        ],
        description: "Thick cornstarch noodles with a savory orange sauce, topped with shrimp, eggs, and chicharon. Allergens: fish, shellfish, egg.",
        steps: [
          "Soak palabok noodles in water for 30 minutes. Drain.",
          "Sauté pork in oil until light brown. Add fish sauce and annatto water. Stir.",
          "Add water and bring to a boil. Simmer for 15-18 minutes until pork is tender.",
          "Add Knorr Shrimp Cube and tinapa flakes. Stir until dissolved. Cook for 5 minutes.",
          "Mix flour with water to make a slurry. Pour into the pot, stirring until sauce thickens. Season with pepper.",
          "Boil water in a separate pot. Cook shrimp for 1.5 minutes. Blanch Napa cabbage for 1 minute.",
          "Cook soaked noodles in boiling water until tender but firm. Drain and transfer to a platter.",
          "Pour sauce over noodles. Top with shrimp, cabbage, eggs, chicharon, and scallions. Serve with calamansi."
        ]
      },
      {
        label: "Pancit Malabon",
        ingredients: [
          { name: "Rice noodles (bihon)", quantity: 250, unit: "g" },
          { name: "Shrimp, peeled", quantity: 200, unit: "g" },
          { name: "Squid, sliced", quantity: 150, unit: "g" },
          { name: "Pork belly, sliced", quantity: 150, unit: "g" },
          { name: "Annatto water", quantity: 1/2, unit: "cup" },
          { name: "Fish sauce", quantity: 3, unit: "tablespoons" },
          { name: "Garlic, minced", quantity: 5, unit: "cloves" },
          { name: "Onion, sliced", quantity: 1, unit: "piece" },
          { name: "Cabbage, shredded", quantity: 1, unit: "cup" },
          { name: "Hard-boiled eggs, sliced", quantity: 2, unit: "pieces" },
          { name: "Crushed chicharon", quantity: 1/2, unit: "cup" },
          { name: "Calamansi", quantity: "for serving", unit: "" }
        ],
        description: "A hearty noodle dish with a rich seafood sauce, similar to palabok but with more seafood. Allergens: fish, shellfish, egg.",
        steps: [
          "Soak bihon noodles in water until soft. Drain.",
          "Sauté garlic and onion. Add pork and cook until browned.",
          "Add shrimp and squid. Cook for 3 minutes.",
          "Add fish sauce and annatto water. Stir.",
          "Add noodles and toss to coat. Cook for 5 minutes.",
          "Add cabbage and cook for 2 minutes.",
          "Top with eggs, chicharon, and calamansi. Serve."
        ]
      }
    ]
  },
  {
    id: "sinangag",
    name: "Sinangag (Fried Rice)",
    mealType: "Breakfast",
    proteinType: "None",
    image: "/images/sinangag.jpg",
    youtubeId: "51SXyPeptBs",
    description: "Filipino garlic fried rice made with day-old rice and lots of toasted garlic. The perfect base for silog meals. Allergens: none (unless served with egg or meat).",
    servings: 4,
    prepDuration: "5 minutes",
    cookDuration: "10 minutes",
    difficulty: "Easy",
    ingredients: [
      { name: "Cooked white rice, chilled overnight", quantity: 3, unit: "cups" },
      { name: "Garlic, crushed", quantity: 5, unit: "cloves" },
      { name: "Salt", quantity: 1/2, unit: "teaspoon" },
      { name: "Cooking oil", quantity: 2.5, unit: "tablespoons" }
    ],
    steps: [
      "Heat oil in a wide pan. Add crushed garlic and cook slowly until golden brown and crunchy.",
      "Add the rice and stir-fry, breaking up any clumps.",
      "Season with salt. Continue frying until rice is heated through and slightly toasted.",
      "Serve hot with fried egg, tapa, longganisa, or any viand."
    ],
    variations: []
  },
  {
    id: "longganisa",
    name: "Longganisa (Fried Sausages)",
    mealType: "Breakfast",
    proteinType: "Pork",
    image: "/images/longganisa.jpg",
    youtubeId: "feXclcivuoM",
    description: "Sweet and garlicky Filipino pork sausages. Usually served with fried rice and egg (longsilog). Allergens: none (if skinless).",
    servings: 6,
    prepDuration: "20 minutes",
    cookDuration: "15 minutes",
    difficulty: "Easy",
    ingredients: [
      { name: "Ground pork", quantity: 1.75, unit: "lbs" },
      { name: "Dark brown sugar", quantity: 9, unit: "tablespoons" },
      { name: "Smoked paprika", quantity: 1, unit: "tablespoon" },
      { name: "Vegetable oil", quantity: 3, unit: "tablespoons" },
      { name: "Coarse salt", quantity: 1.25, unit: "tablespoons" },
      { name: "Ground black pepper", quantity: 1, unit: "teaspoon" },
      { name: "Garlic, minced", quantity: 2, unit: "heads" }
    ],
    steps: [
      "Peel and mince garlic. Combine with ground pork, sugar, paprika, oil, salt, and pepper in a bowl. Mix well.",
      "Cover and refrigerate for 2 hours.",
      "Shape the mixture into sausage links using wax paper.",
      "Cook by combining 1 cup water and 4 tablespoons oil in a pan. Add longganisa and turn on heat.",
      "Let the liquid boil, then lower heat and continue boiling until water evaporates.",
      "Fry both sides in the remaining oil until brown. Serve with rice and egg."
    ],
    variations: []
  },
  {
    id: "pork_tapa",
    name: "Pork Tapa",
    mealType: "Breakfast",
    proteinType: "Pork",
    image: "/images/pork_tapa.jpg",
    youtubeId: "hbckdNhbVr4",
    description: "Sweet and savory cured pork, similar to beef jerky. A breakfast favorite served with garlic rice and egg (tapsilog). Allergens: soy.",
    servings: 4,
    prepDuration: "12 hours",
    cookDuration: "15 minutes",
    difficulty: "Easy",
    ingredients: [
      { name: "Pork loin, thinly sliced", quantity: 1, unit: "lb" },
      { name: "Soy sauce", quantity: 3, unit: "tablespoons" },
      { name: "Garlic, minced", quantity: 2, unit: "teaspoons" },
      { name: "Sugar", quantity: 0.5, unit: "teaspoon" },
      { name: "Salt", quantity: 0.5, unit: "teaspoon" },
      { name: "Ground black pepper", quantity: 0.25, unit: "teaspoon" },
      { name: "Cooking oil", quantity: 3, unit: "tablespoons" }
    ],
    steps: [
      "In a resealable bag, combine pork, soy sauce, garlic, sugar, salt, and pepper. Mix well.",
      "Marinate overnight in the refrigerator.",
      "Heat oil in a frying pan. Fry marinated pork pieces over low to medium heat until medium brown, flipping as needed.",
      "Serve with garlic rice and fried egg."
    ],
    variations: [
      {
        label: "Beef Tapa",
        ingredients: [
          { name: "Beef sirloin, thinly sliced", quantity: 1.5, unit: "lbs" },
          { name: "Soy sauce", quantity: 5, unit: "tablespoons" },
          { name: "Garlic, minced", quantity: 3, unit: "tablespoons" },
          { name: "Sugar", quantity: 2, unit: "tablespoons" },
          { name: "Salt", quantity: 0.25, unit: "teaspoon" },
          { name: "Ground black pepper", quantity: 0.25, unit: "teaspoon" },
          { name: "Cooking oil", quantity: 3, unit: "tablespoons" }
        ],
        description: "Cured beef slices, a classic tapsilog component. Allergens: soy.",
        steps: [
          "Combine soy sauce, garlic, salt, pepper, and sugar. Mix well.",
          "Place beef in a plastic bag and pour in the marinade. Mix well.",
          "Refrigerate for at least 12 hours.",
          "In a pan, boil 1 cup water. Add 3 tablespoons oil and the marinated beef. Cook until water evaporates.",
          "Fry the beef in the remaining oil until browned. Serve."
        ]
      }
    ]
  },
  {
    id: "lumpiang_shanghai",
    name: "Lumpiang Shanghai",
    mealType: "Dessert",
    proteinType: "Pork",
    youtubeId: "san6M1fGoGw",
    image: "/images/lumpiang_shanghai.jpg",
    description: "Crispy Filipino spring rolls filled with seasoned ground pork and vegetables. A party favorite. Allergens: egg (wrapper), soy.",
    servings: 8,
    prepDuration: "30 minutes",
    cookDuration: "20 minutes",
    difficulty: "Medium",
    ingredients: [
      { name: "Ground pork", quantity: 1.5, unit: "lbs" },
      { name: "Carrot, minced", quantity: 1, unit: "cup" },
      { name: "Onion, minced", quantity: 1, unit: "piece" },
      { name: "Garlic powder", quantity: 1, unit: "teaspoon" },
      { name: "Eggs", quantity: 2, unit: "pieces" },
      { name: "Parsley, chopped", quantity: 2, unit: "tablespoons" },
      { name: "Sesame oil", quantity: 1, unit: "teaspoon" },
      { name: "Salt & pepper", quantity: "to taste", unit: "" },
      { name: "Lumpia wrappers", quantity: 50, unit: "pieces" },
      { name: "Cooking oil", quantity: "for deep frying", unit: "" }
    ],
    steps: [
      "Combine ground pork, carrot, onion, garlic powder, eggs, parsley, sesame oil, salt, and pepper in a bowl. Mix well.",
      "Place a spoonful of filling on a lumpia wrapper. Roll tightly, sealing the edges with beaten egg.",
      "Heat oil for deep frying. Fry lumpia in batches for 3-5 minutes until golden brown and cooked through.",
      "Drain on a rack. Serve with sweet chili sauce or ketchup."
    ],
    variations: [
        {
            label: "Lumpiang Sariwa",
            ingredients: [
        { name: "Sweet potato, cubed", quantity: 2, unit: "cups" },
        { name: "Cabbage, shredded", quantity: 1, unit: "lb" },
        { name: "Carrots, julienned", quantity: 1.5, unit: "cups" },
        { name: "Peanuts, crushed", quantity: 1/2, unit: "cup" },
        { name: "Pork, thinly sliced", quantity: 1/2, unit: "lb" },
        { name: "Tofu, sliced", quantity: 1, unit: "block" },
        { name: "Shrimp, peeled", quantity: 1/2, unit: "lb" },
        { name: "String beans", quantity: 1, unit: "cup" },
        { name: "Onion, sliced", quantity: 1, unit: "piece" },
        { name: "Garlic, minced", quantity: 3, unit: "tablespoons" },
        { name: "Fish sauce (patis)", quantity: 2, unit: "tablespoons" },
        { name: "Lumpia wrappers", quantity: 4, unit: "pieces" },
        { name: "Lettuce leaves", quantity: 4, unit: "pieces" },
        { name: "Cooking oil", quantity: 3, unit: "tablespoons" }
        ],
        description: "Fresh Filipino spring rolls filled with sautéed vegetables, pork, and shrimp, wrapped in a soft crepe-like wrapper and topped with a sweet garlic sauce. Allergens: shellfish, egg, gluten.",
        steps: [
        "Sauté garlic and onion in oil. Add pork and cook until lightly browned.",
        "Add shrimp and sweet potatoes. Cook for 5 minutes.",
        "Add tofu, carrots, string beans, and cabbage. Cook for 5 minutes.",
        "Season with fish sauce. Set aside.",
        "Place a lettuce leaf on a lumpia wrapper. Add filling and roll, tucking in the sides.",
        "Serve with a sweet garlic sauce (made from soy sauce, sugar, garlic, and cornstarch)."
        ],
        }
    ]
  },
  {
    id: "pandesal",
    name: "Pandesal",
    mealType: "Breakfast",
    proteinType: "None",
    image: "/images/pandesal.jpg",
    youtubeId: "4RiNlBSRi7w",
    description: "Soft, fluffy Filipino bread rolls coated with breadcrumbs. Best enjoyed warm with butter, cheese, or dipped in coffee. Allergens: gluten, dairy, egg.",
    servings: 12,
    prepDuration: "2 hours",
    cookDuration: "15 minutes",
    difficulty: "Medium",
    ingredients: [
      { name: "All-purpose flour", quantity: 2, unit: "cups" },
      { name: "Bread flour", quantity: 2, unit: "cups" },
      { name: "White sugar", quantity: 1/2, unit: "cup" },
      { name: "Rapid rise yeast", quantity: 1, unit: "pouch" },
      { name: "Warm fresh milk", quantity: 1.25, unit: "cups" },
      { name: "Butter, melted", quantity: 5, unit: "tablespoons" },
      { name: "Baking powder", quantity: 1, unit: "teaspoon" },
      { name: "Salt", quantity: 1, unit: "teaspoon" },
      { name: "Egg", quantity: 1, unit: "piece" },
      { name: "Cooking oil", quantity: 1, unit: "tablespoon" },
      { name: "Breadcrumbs", quantity: "for coating", unit: "" }
    ],
    steps: [
      "Dissolve yeast and sugar in warm milk. Let stand for 5 minutes.",
      "In a large bowl, combine all-purpose flour, bread flour, salt, and baking powder.",
      "Add the yeast mixture, egg, melted butter, and oil. Mix until a dough forms.",
      "Knead on a floured surface until smooth and elastic. Place in a bowl, cover, and let rise for 1 hour.",
      "Divide dough into 4 parts. Roll each into a cylinder and slice diagonally into pieces.",
      "Roll each piece in breadcrumbs and place on a baking tray. Let rise for 15 minutes.",
      "Preheat oven to 375°F (190°C). Bake for 15 minutes until golden brown. Serve warm."
    ],
    variations: []
  },
  {
    id: "leche_flan",
    name: "Leche Flan",
    mealType: "Dessert",
    proteinType: "None",
    image: "/images/leche_flan.jpg",
    youtubeId: "iDJxsbWzrY4",
    description: "A rich, creamy Filipino caramel custard made with egg yolks, condensed milk, and evaporated milk. A celebration staple. Allergens: egg, dairy.",
    servings: 6,
    prepDuration: "10 minutes",
    cookDuration: "1 hour",
    difficulty: "Medium",
    ingredients: [
      { name: "Egg yolks", quantity: 10, unit: "pieces" },
      { name: "Condensed milk", quantity: 1, unit: "can (14 oz)" },
      { name: "Evaporated milk", quantity: 1, unit: "cup" },
      { name: "Granulated sugar", quantity: 1, unit: "cup" },
      { name: "Vanilla extract", quantity: 1, unit: "teaspoon" },
      { name: "Lime or calamansi zest", quantity: 1/4, unit: "teaspoon (optional)" }
    ],
    steps: [
      "Make caramel: Melt sugar in a llanera (or mold) over low heat until golden brown. Set aside.",
      "Beat egg yolks. Add condensed milk, evaporated milk, and vanilla. Mix gently.",
      "Strain the mixture into the caramel-lined mold.",
      "Cover with foil and steam over low heat for 45-60 minutes until set.",
      "Let cool, then refrigerate. To serve, run a knife around the edge and invert onto a plate."
    ],
    variations: []
  },
  {
    id: "chicken_empanada",
    name: "Chicken Empanada",
    mealType: "Dessert",
    proteinType: "Chicken",
    image: "/images/chicken_empanada.jpg",
    youtubeId: "-5PMTGLt06U",
    description: "Flaky turnovers filled with seasoned chicken, potatoes, carrots, and peas. A savory Filipino pastry. Allergens: gluten, dairy, egg.",
    servings: 6,
    prepDuration: "40 minutes",
    cookDuration: "25 minutes",
    difficulty: "Medium",
    ingredients: [
      { name: "Chicken breast, cubed", quantity: 1.5, unit: "lbs" },
      { name: "Potato, diced", quantity: 1, unit: "cup" },
      { name: "Carrot, diced", quantity: 1, unit: "cup" },
      { name: "Green peas", quantity: 1, unit: "cup" },
      { name: "Raisins", quantity: 1/4, unit: "cup" },
      { name: "Onion, minced", quantity: 1, unit: "piece" },
      { name: "Garlic, minced", quantity: 1, unit: "tablespoon" },
      { name: "Oyster sauce", quantity: 2, unit: "tablespoons" },
      { name: "Soy sauce", quantity: 2, unit: "tablespoons" },
      { name: "Sugar", quantity: 1, unit: "teaspoon" },
      { name: "Flour", quantity: 3, unit: "cups" },
      { name: "Butter", quantity: 1, unit: "cup" },
      { name: "Baking powder", quantity: 1/2, unit: "teaspoon" },
      { name: "Water, cold", quantity: 6, unit: "tablespoons" },
      { name: "Egg", quantity: 1, unit: "piece" },
      { name: "Cooking oil", quantity: 2, unit: "tablespoons" }
    ],
    steps: [
      "Sauté garlic and onion in oil. Add chicken and cook until lightly browned.",
      "Add oyster sauce, soy sauce, and chicken cube. Cook for 5 minutes.",
      "Add carrots and potatoes. Cook for 5 minutes. Add peas, raisins, and sugar. Simmer for 3 minutes. Season and set aside.",
      "Make dough: Combine flour, sugar, baking powder, and salt. Cut in cold butter. Add cold water gradually until dough forms.",
      "Divide dough into balls. Flatten each and fill with chicken mixture. Fold and seal edges.",
      "Brush with egg wash. Bake at 400°F (200°C) for 25 minutes until golden brown."
    ],
    variations: []
  },
  {
    id: "chop_suey",
    name: "Chop Suey",
    mealType: "Lunch",
    proteinType: "Chicken",
    image: "/images/chopsuey.jpg",
    youtubeId: "Ricns55f450",
    description: "A colorful stir-fry of chicken, shrimp, and vegetables in a savory sauce. A Chinese-Filipino favorite. Allergens: shellfish, soy.",
    servings: 4,
    prepDuration: "10 minutes",
    cookDuration: "25 minutes",
    difficulty: "Easy",
    ingredients: [
      { name: "Shrimp", quantity: 1/4, unit: "lb" },
      { name: "Boneless chicken", quantity: 1/2, unit: "lb" },
      { name: "Garlic, minced", quantity: 1, unit: "teaspoon" },
      { name: "Cornstarch", quantity: 2, unit: "teaspoons" },
      { name: "Oyster sauce", quantity: 1, unit: "tablespoon" },
      { name: "Cabbage, quartered", quantity: 1/2, unit: "piece" },
      { name: "Green bell pepper, sliced", quantity: 1, unit: "cup" },
      { name: "Red bell pepper, sliced", quantity: 1, unit: "cup" },
      { name: "Cauliflower, cut", quantity: 1, unit: "small piece" },
      { name: "Snow peas", quantity: 1.5, unit: "cups" },
      { name: "Carrots, sliced", quantity: 1, unit: "cup" },
      { name: "Onion, diced", quantity: 1, unit: "cup" },
      { name: "Chicken liver, sliced", quantity: 1, unit: "cup" },
      { name: "Water", quantity: 1.25, unit: "cups" },
      { name: "Salt & pepper", quantity: "to taste", unit: "" }
    ],
    steps: [
      "Sauté garlic and onion in oil. Add chicken and cook for 2 minutes.",
      "Add chicken liver and cook for 3 minutes.",
      "Pour in shrimp juice and water. Bring to a boil, then simmer for 5 minutes.",
      "Add shrimp and season with salt and pepper.",
      "Add oyster sauce and simmer for 2 minutes.",
      "Add cauliflower and cabbage. Mix well.",
      "Add carrots, snow peas, and bell peppers. Simmer for 5 minutes.",
      "Dilute cornstarch in water and pour into the pot. Stir until sauce thickens. Serve."
    ],
    variations: []
  },
  {
    id: "sisig",
    name: "Sisig (Pork)",
    mealType: "Lunch",
    proteinType: "Pork",
    image: "/images/sisig.jpg",
    youtubeId: "v2fxqlg-k0o",
    description: "A sizzling, chopped pork dish with chicken liver, onions, and calamansi. A popular pulutan (beer food). Allergens: egg (mayonnaise).",
    servings: 4,
    prepDuration: "1 hour",
    cookDuration: "20 minutes",
    difficulty: "Medium",
    ingredients: [
      { name: "Pork belly", quantity: 1.5, unit: "lbs" },
      { name: "Pig face (maskara)", quantity: 1, unit: "lb" },
      { name: "Chicken liver", quantity: 4, unit: "ounces" },
      { name: "Onion, chopped", quantity: 2, unit: "pieces" },
      { name: "Chicharon, crumbled", quantity: 1/2, unit: "cup" },
      { name: "Mayonnaise", quantity: 3, unit: "tablespoons" },
      { name: "Knorr Liquid Seasoning", quantity: 3, unit: "tablespoons" },
      { name: "Onion powder", quantity: 2, unit: "teaspoons" },
      { name: "Ground black pepper", quantity: 1/4, unit: "teaspoon" },
      { name: "Chili flakes", quantity: 1/2, unit: "teaspoon (optional)" },
      { name: "Butter", quantity: 1, unit: "tablespoon" },
      { name: "Cooking oil", quantity: 3, unit: "tablespoons" },
      { name: "Water", quantity: 2, unit: "quarts" }
    ],
    steps: [
      "Boil pork belly and pig face in water for 1 hour until tender.",
      "Grill boiled meats for 5 minutes per side until slightly charred.",
      "Chop the grilled meats into small pieces.",
      "Sauté onions in oil. Add chicken liver and cook until done, mashing it.",
      "Add chopped meats and chicharon. Stir for 3 minutes.",
      "Add liquid seasoning, onion powder, pepper, and chili flakes. Stir.",
      "Add mayonnaise and butter. Mix well. Serve on a sizzling plate."
    ],
    variations: []
  },
  {
    id: "paella",
    name: "Paella (Seafood)",
    mealType: "Dinner",
    proteinType: "Seafood",
    image: "/images/paella.jpg",
    youtubeId: "vaTscmbOmf4",
    description: "A festive Filipino-style seafood paella with rice, shrimp, clams, mussels, and squid. Allergens: shellfish.",
    servings: 8,
    prepDuration: "20 minutes",
    cookDuration: "30 minutes",
    difficulty: "Hard",
    ingredients: [
      { name: "Paella rice", quantity: 2, unit: "cups" },
      { name: "Cooked little-neck clams", quantity: 13, unit: "pieces" },
      { name: "Large tiger shrimp", quantity: 13, unit: "pieces" },
      { name: "Cooked mussels", quantity: 13, unit: "pieces" },
      { name: "Squid, sliced into rings", quantity: 1, unit: "large" },
      { name: "Clam juice", quantity: 16, unit: "ounces" },
      { name: "Water", quantity: 1, unit: "cup" },
      { name: "Parsley, chopped", quantity: 1/4, unit: "cup" },
      { name: "Tomato, diced", quantity: 1, unit: "piece" },
      { name: "Green peas", quantity: 1, unit: "cup" },
      { name: "Saffron", quantity: 1.5, unit: "teaspoons" },
      { name: "Onion, chopped", quantity: 1, unit: "piece" },
      { name: "Red bell pepper, roasted & sliced", quantity: 1, unit: "piece" },
      { name: "Paprika", quantity: 1, unit: "tablespoon" },
      { name: "Garlic paste", quantity: 1.5, unit: "tablespoons" },
      { name: "Olive oil", quantity: 6, unit: "tablespoons" },
      { name: "Salt", quantity: 2, unit: "teaspoons" },
      { name: "Lemon, sliced into wedges", quantity: 2, unit: "pieces" }
    ],
    steps: [
      "Grind garlic into a paste. Combine with parsley, salt, paprika, and 2 tablespoons olive oil. Grind into a paste. Set aside.",
      "Heat remaining olive oil in a paella pan. Fry shrimp and squid for 1 minute per side. Remove and set aside.",
      "Sauté onion and tomato. Add green peas and the paste mixture. Stir.",
      "Pour in water and clam juice. Bring to a boil.",
      "Add saffron and rice. Cover and cook on low for 20 minutes.",
      "Arrange clams, mussels, shrimp, squid, and roasted bell pepper on top. Cover and cook for 8 minutes.",
      "Arrange lemon wedges on the side. Serve."
    ],
    variations: []
  },
  {
    id: "ginataang_tuna",
    name: "Ginataang Tuna",
    mealType: "Dinner",
    proteinType: "Fish",
    image: "/images/ginataang_tuna.jpg",
    youtubeId: "L7swq4golfM",
    description: "Yellowfin tuna simmered in coconut cream with ginger, chili, and ampalaya leaves. A rich, savory seafood dish. Allergens: fish, coconut.",
    servings: 3,
    prepDuration: "10 minutes",
    cookDuration: "20 minutes",
    difficulty: "Easy",
    ingredients: [
      { name: "Yellowfin tuna fillets", quantity: 3, unit: "pieces" },
      { name: "Ampalaya leaves", quantity: 1, unit: "cup" },
      { name: "Coconut cream", quantity: 2.5, unit: "cups" },
      { name: "Ginger, julienned", quantity: 2, unit: "thumbs" },
      { name: "Red onion, diced", quantity: 1, unit: "piece" },
      { name: "Garlic, crushed & chopped", quantity: 5, unit: "cloves" },
      { name: "Cooking oil", quantity: 4, unit: "tablespoons" },
      { name: "Fish sauce", quantity: 2, unit: "tablespoons" },
      { name: "Ground black pepper", quantity: 1/8, unit: "teaspoon" },
      { name: "Chili flakes", quantity: 1/2, unit: "teaspoon" }
    ],
    steps: [
      "Pan-fry tuna fillets for 1 minute per side. Set aside.",
      "Heat oil in a pan. Sauté garlic and onion. Add ginger and cook until onion is soft.",
      "Pour in coconut cream. Stir and let boil.",
      "Add black pepper and fish sauce. Stir and cook for 1 minute.",
      "Add fried tuna fillets. Scoop coconut cream on top. Cover and cook on low-medium for 12 minutes.",
      "Add ampalaya leaves. Stir, cover, and cook for 3 minutes.",
      "Add chili flakes. Serve."
    ],
    variations: []
  },
  {
    id: "paksiw_na_bangus",
    name: "Paksiw na Bangus",
    mealType: "Lunch",
    proteinType: "Fish",
    image: "/images/paksiw_na_bangus.jpg",
    youtubeId: "_HUeU7lWo_s",
    description: "Milkfish stewed in vinegar with ginger, garlic, and vegetables. A tangy, savory Filipino classic. Allergens: fish.",
    servings: 4,
    prepDuration: "10 minutes",
    cookDuration: "15 minutes",
    difficulty: "Easy",
    ingredients: [
      { name: "Milkfish, cleaned & sliced", quantity: 1.5, unit: "lbs" },
      { name: "Ginger, crushed", quantity: 3, unit: "thumbs" },
      { name: "Garlic, crushed", quantity: 5, unit: "cloves" },
      { name: "White vinegar", quantity: 1/2, unit: "cup" },
      { name: "Water", quantity: 1, unit: "cup" },
      { name: "Onion, sliced", quantity: 1, unit: "piece" },
      { name: "Chinese eggplant, chopped", quantity: 1, unit: "piece" },
      { name: "Okra", quantity: 5, unit: "pieces" },
      { name: "Long green pepper", quantity: 2, unit: "pieces" },
      { name: "Whole peppercorn", quantity: 1, unit: "teaspoon" },
      { name: "Salt", quantity: "to taste", unit: "" }
    ],
    steps: [
      "Arrange ginger, garlic, okra, onion, long green pepper, peppercorn, and eggplant in a pot.",
      "Top with bangus slices.",
      "Pour water and vinegar. Apply heat and let boil.",
      "Cover and cook on low-medium heat for 15 minutes.",
      "Add salt to taste. Serve."
    ],
    variations: []
  }
];

module.exports = recipes;