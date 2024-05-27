const chapters = [
    {
        number: 1,
        title: "Departure",
        coords: [40, -70],
        time: "June 1866",
        plot: "In June 1866, Professor Aronnax is invited to join an expedition sent by the US government to capture a mysterious sea creature. He, along with his assistant Conseil and the whaler Ned Land, boards the warship Abraham Lincoln. One day, they encounter the 'sea monster' in the Atlantic Ocean. After a fierce chase, Professor Aronnax, Conseil, and Ned Land are thrown into the sea and rescued by the mysterious submarine Nautilus. They meet the enigmatic Captain Nemo, who explains his submarine and his love for the ocean, inviting them to join his journey."
    },
    {
        number: 2,
        title: "Crossing the Atlantic",
        coords: [30, -60],
        time: "July 1866",
        plot: "The Nautilus sails through the depths of the Atlantic Ocean. Captain Nemo shows Professor Aronnax the submarine's advanced technology and the strange underwater landscapes. They explore an underwater forest and encounter various unique marine creatures. Captain Nemo also takes them to an ancient shipwreck and retrieves valuable treasures. Ned Land continues to look for opportunities to escape but is constantly watched by Nemo's crew."
    },
    {
        number: 3,
        title: "Antarctic Exploration",
        coords: [-70, -40],
        time: "January 1867",
        plot: "The Nautilus heads south, navigating through countless icebergs, eventually reaching Antarctica. They conduct an exploration under the ice, facing extreme cold and dangerous ice formations. Captain Nemo leads Professor Aronnax and others to plant the Nautilus flag on the ice, claiming sovereignty over Antarctica. On their way back, they encounter an ice collapse, trapping the Nautilus. After calm command by Nemo and the crew's efforts, the submarine breaks free and continues their journey."
    },
    {
        number: 4,
        title: "Pacific Adventure",
        coords: [20, -155],
        time: "March 1867",
        plot: "The Nautilus crosses the Pacific Ocean. Captain Nemo leads them to an underwater volcanic activity area, showcasing spectacular underwater geysers and lava flows. One day, they encounter a group of giant squid, one of which entangles the Nautilus. Captain Nemo and the crew engage in a fierce battle with the squid, eventually driving it away. Professor Aronnax is deeply shocked, realizing that the ocean is not only beautiful but also full of dangers."
    },
    {
        number: 5,
        title: "Indian Ocean Journey",
        coords: [-5, 55],
        time: "June 1867",
        plot: "The Nautilus sails through the Indian Ocean. Captain Nemo takes them to explore the underwater coral kingdom. Professor Aronnax documents the various types of coral and their growth processes. During a diving expedition, they encounter a group of ferocious sharks. Ned Land bravely fights off the sharks, protecting everyone. Captain Nemo praises Ned's courage but warns him against reckless actions."
    },
    {
        number: 6,
        title: "Crossing the Red Sea",
        coords: [20, 38],
        time: "August 1867",
        plot: "The Nautilus crosses the Red Sea and enters the Mediterranean Sea through a secret passage. Professor Aronnax is amazed by Nemo's advanced technology. In the depths of the Red Sea, they discover an ancient Egyptian shipwreck. Captain Nemo leads them to retrieve some artifacts. This exploration gives Professor Aronnax a deeper understanding of the historical and cultural significance of the underwater world."
    },
    {
        number: 7,
        title: "Mediterranean Exploration",
        coords: [37, 25],
        time: "November 1867",
        plot: "The Nautilus sails through the Mediterranean Sea. Professor Aronnax and others explore mysterious underwater ruins, discovering ancient Greek statues and architectural remnants. Captain Nemo tells them stories of the history and culture behind these ruins. Ned Land again proposes an escape plan but is stopped by Nemo's crew. During this time, Professor Aronnax has more guesses about Nemo's identity and motives but fails to uncover his secrets."
    },
    {
        number: 8,
        title: "Return to the Atlantic",
        coords: [60, 5],
        time: "February 1868",
        plot: "The Nautilus returns to the Atlantic Ocean, encountering underwater volcanic eruptions. Captain Nemo calmly directs the submarine to avoid the danger. During an expedition, Professor Aronnax, Conseil, and Ned Land discover an ancient ship frozen in ice, containing valuable historical artifacts. Captain Nemo decides to bring these artifacts back and plans to donate them to humanity. However, this exploration strengthens the trio's resolve to escape."
    },
    {
        number: 9,
        title: "Escape from the Nautilus",
        coords: [60, 5],
        time: "March 1868",
        plot: "On a stormy night, Professor Aronnax, Conseil, and Ned Land decide to execute their escape plan. They leave the Nautilus in a lifeboat, drifting at sea for a while before being rescued by a Norwegian fishing vessel. Back on land, Professor Aronnax writes about their experiences on the Nautilus, revealing Captain Nemo and his mysterious submarine to the world."
    }
];


const oceanRegions = [
    {
        name: "Blue Whale",
        coords: [45, -140],
        description: "This enormous blue whale like a small mountain swam slowly beside us.",
        intro: "The blue whale is the largest animal on Earth reaching up to 30 meters in length and feeding on plankton.",
        image: "/oceanRegions/blue-whale.jpg"
    },
    {
        name: "Kelp",
        coords: [36, -122],
        description: "This gigantic kelp stretched upwards forming underwater canopies.",
        intro: "Kelp is a large brown seaweed that grows in underwater forests in shallow oceans providing food and shelter for marine life.",
        image: "oceanRegions/kelp.jpg"
    },
    {
        name: "Great White Shark",
        coords: [41, -70],
        description: "This massive white shark swam swiftly through the water exposing its sharp teeth.",
        intro: "The great white shark is a top predator in the ocean known for its large size and aggressiveness.",
        image: "oceanRegions/great-white-shark.jpg"
    },
    {
        name: "Swordfish",
        coords: [-20, 70],
        description: "This swordfish darted through the water like an arrow.",
        intro: "Swordfish are known for their long sharp bills excellent at high-speed swimming and hunting small fish.",
        image: "oceanRegions/swordfish.jpg"
    },
    {
        name: "Cuttlefish",
        coords: [36, 15],
        description: "These intelligent cuttlefish could quickly change color to blend into their surroundings.",
        intro: "Cuttlefish are highly intelligent mollusks capable of rapid color change and ink defense.",
        image: "oceanRegions/cuttlefish.jpg"
    },
    {
        name: "Seagrass",
        coords: [35, 18],
        description: "The seagrass meadows swayed gently providing a home for countless marine animals.",
        intro: "Seagrass is a flowering plant that grows in shallow salty and brackish waters forming extensive underwater meadows.",
        image: "oceanRegions/seagrass.jpg"
    },
    {
        name: "Giant Oyster",
        coords: [23, -87],
        description: "These giant oysters had hard shells hiding enormous pearls inside.",
        intro: "Giant oysters live on seabed rocks feeding by filtering microorganisms from the water.",
        image: "oceanRegions/giant-oyster.jpg"
    },
    {
        name: "Coral",
        coords: [23, -87],
        description: "The coral reefs formed beautiful intricate structures teeming with life.",
        intro: "Coral is a marine invertebrate that builds large underwater structures known as coral reefs which provide habitat for many marine species.",
        image: "oceanRegions/coral.jpg"
    },
    {
        name: "Manatee",
        coords: [25, -80],
        description: "These gentle manatees leisurely ate sea grass in the water completely unafraid of us.",
        intro: "Manatees are large aquatic mammals living in shallow waters feeding mainly on sea grass and aquatic plants.",
        image: "oceanRegions/manatee.jpg"
    },
    {
        name: "Giant Squid",
        coords: [32, -64],
        description: "These giant squids stretching out terrifying tentacles attacked our submarine.",
        intro: "The giant squid is a deep-sea mollusk with long tentacles and powerful suckers.",
        image: "oceanRegions/giant-squid.jpg"
    },
    {
        name: "Electric Eel",
        coords: [-3, -60],
        description: "These electric eels could release powerful currents paralyzing their prey instantly.",
        intro: "Electric eels are fish living in South American rivers capable of generating electricity for hunting and defense.",
        image: "oceanRegions/electric-eel.jpg"
    },
    {
        name: "Red Algae",
        coords: [20, -80],
        description: "The red algae added a vibrant splash of color to the underwater scenery.",
        intro: "Red algae are primarily marine algae known for their reddish pigmentation contributing to the formation of coral reefs.",
        image: "oceanRegions/red-algae.jpg"
    },
    {
        name: "Algae",
        coords: [30, -140],
        description: "Various types of algae clung to the rocks forming colorful patches.",
        intro: "Algae is a diverse group of photosynthetic organisms found in various aquatic environments ranging from microscopic phytoplankton to large seaweeds.",
        image: "oceanRegions/algae.jpg"
    },
    {
        name: "Seaweed",
        coords: [29, -84],
        description: "These seaweeds formed dense underwater forests swaying with the currents.",
        intro: "Seaweed is a general term for various species of marine plants and algae that grow in the ocean.",
        image: "oceanRegions/seaweed.jpg"
    },
    {
        name: "Mangroves",
        coords: [10, -75],
        description: "The mangrove trees formed dense thickets along the shorelines their roots submerged in the water.",
        intro: "Mangroves are tropical trees that grow in coastal intertidal zones with roots that provide stability and habitat for many marine species.",
        image: "oceanRegions/mangroves.jpg"
    },
    {
        name: "Phytoplankton",
        coords: [0, -160],
        description: "These tiny phytoplankton drifted with the currents forming the base of the marine food web.",
        intro: "Phytoplankton are microscopic marine algae that perform photosynthesis serving as the primary producers in the oceanic ecosystem.",
        image: "oceanRegions/phytoplankton.jpg"
    }
];

