const articles = {};

// Articles 1 to 20 (isdeleted: true)
for (let i = 1; i <= 20; i++) {
  articles[`article${i}`] = {
    id: i,
    heading: "Lorem ipsum dolor sit amet",
    description: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: `./src/images/${i}.jpeg`,
    isdeleted: true,
    url: `https://www.example.com/article/${i}` // Add URL property
  };
}

// Articles 21 to 100 (isdeleted: false)
for (let i = 21; i <= 100; i++) {
  articles[`article${i}`] = {
    id: i,
    heading: "Lorem ipsum dolor sit amet",
    description: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: `./images/${i}.jpeg`,
    isdeleted: true,
    url: `https://www.example.com/article/${i}` // Add URL property
  };
}

console.log("const articles = ", articles, ";\nexport default articles;"); 
