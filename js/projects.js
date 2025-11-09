
/*
* =========================================================================================
* HOW TO ADD/EDIT PROJECTS
* =========================================================================================
* 
* This file contains all the project data for your portfolio.
* To add a new project, copy an existing project object {} and paste it into the array.
* To edit a project, modify the properties of the corresponding object.
* 
* Project Properties:
* - id: A unique string for the project (e.g., 'project-1'). Used for linking.
* - title: The name of the project.
* - tag: A short tag or client name.
* - category: Must be one of: 'Logo', 'Social Media', 'Packaging', 'Printing'.
* - coverImage: The main image shown on the Work page grid. Use a high-quality image URL.
* - description: A detailed paragraph about the project.
* - images: An array of image URLs to display on the project detail page.
* - video (optional): A URL to a video file (e.g., .mp4) to be displayed.
*
* Recommended image source: https://picsum.photos for placeholders.
* Example: `https://picsum.photos/seed/{some_random_word}/1200/800`
* =========================================================================================
*/

const projects = [
  {
    id: 'project-1',
    title: 'Sahar Crochet',
    tag: 'Branding',
    category: 'Logo',
    coverImage: 'imgs/covers/saharcrochet.jpg',
    description: 'A complete branding design for Sahar Crochet, a handmade crochet brand. The identity reflects elegance and sophistication through a minimalist layout, a royal-inspired logo, and a refined color palette of golden yellow and cocoa brown, capturing the premium essence of handmade craftsmanship.',
    images: [
      'imgs/Sahar Crochet/1 Dark BG.jpg',
      'imgs/Sahar Crochet/2 Light BG3x.jpg',
      'imgs/Sahar Crochet/3 Horizontals.jpg',
      'imgs/Sahar Crochet/4 Color Palette.jpg',
      'imgs/Sahar Crochet/5 Fonts.jpg',
      'imgs/Sahar Crochet/6 Four Palette.jpg',
      'imgs/Sahar Crochet/7 Pattern.jpg',
      'imgs/Sahar Crochet/8 box-teddy.jpg',
      'imgs/Sahar Crochet/9 store 2.jpg',
      'imgs/Sahar Crochet/10 hand-holding-bag.jpg',
      'imgs/Sahar Crochet/11 vertical-store-wood.jpg',
      'imgs/Sahar Crochet/12 website-phone.jpg',
      'imgs/Sahar Crochet/13 Crochet.jpg',
    ],
  },
  {
    id: 'project-2',
    title: 'Hello Tech',
    tag: 'Logo Design',
    category: 'Logo',
    coverImage: 'imgs/HelloDot.jpg',
    description: 'Logo design for Hello Tech, a startup focused on renewable energy solutions. The logo combines a stylized sun and a gear to represent innovation, energy, and progress. The color palette is vibrant and modern, conveying a sense of optimism and technological advancement.',
    images: [
      'imgs/HelloDot.jpg',
      'imgs/HelloDot1.png',
    ],
  },
  {
    id: 'project-3',
    title: 'The Daily Grind',
    tag: 'Social Media Campaign',
    category: 'Social Media',
    coverImage: 'https://picsum.photos/seed/grind-cover/800/600',
    description: 'A social media campaign for "The Daily Grind," a local coffee shop. The campaign involved creating a series of visually consistent and engaging posts for Instagram and Facebook, including photography, short videos, and animated stories. The goal was to increase brand awareness and drive foot traffic.',
    images: [
      'https://picsum.photos/seed/grind-1/800/800',
      'https://picsum.photos/seed/grind-2/800/800',
      'https://picsum.photos/seed/grind-3/800/800',
    ],
    video: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4',
  },
  {
    id: 'project-4',
    title: 'Artisan Fest',
    tag: 'Print & Event Materials',
    category: 'Printing',
    coverImage: 'https://picsum.photos/seed/artisan-cover/800/600',
    description: 'Design of all printing materials for the annual Artisan Fest, including posters, flyers, tickets, and event banners. The design concept was inspired by handcrafted textures and rustic elements, creating a warm and inviting visual identity for the festival.',
    images: [
      'https://picsum.photos/seed/artisan-1/1200/800',
      'https://picsum.photos/seed/artisan-2/800/1200',
      'https://picsum.photos/seed/artisan-3/1200/800',
    ],
  },
  {
    id: 'project-5',
    title: 'Zenith Watches',
    tag: 'Logo & Branding',
    category: 'Logo',
    coverImage: 'https://picsum.photos/seed/zenith-cover/800/600',
    description: 'A sophisticated logo and branding guide for Zenith, a luxury watchmaker. The mark is a modern monogram that reflects precision, elegance, and timelessness. The branding extends to stationery, web assets, and retail displays.',
    images: [
        'https://picsum.photos/seed/zenith-1/1200/800',
        'https://picsum.photos/seed/zenith-2/1200/800',
    ],
  },
  {
    id: 'project-6',
    title: 'Gourmet Bites',
    tag: 'Food Packaging',
    category: 'Packaging',
    coverImage: 'https://picsum.photos/seed/gourmet-cover/800/600',
    description: 'Packaging design for a line of gourmet snacks. The design uses bold colors and playful illustrations to stand out on the shelves, while clear typography and iconography communicate key product information effectively.',
    images: [
        'https://picsum.photos/seed/gourmet-1/1200/800',
        'https://picsum.photos/seed/gourmet-2/1200/800',
        'https://picsum.photos/seed/gourmet-3/1200/800',
    ],
  },
  {
    id: 'project-7',
    title: 'Sahar Crochet',
    tag: 'Handmade products',
    category: 'Logo',
    coverImage: 'https://picsum.photos/800/600',
    description: 'Packaging design for a line of gourmet snacks. The design uses bold colors and playful illustrations to stand out on the shelves, while clear typography and iconography communicate key product information effectively.',
    images: [
        'https://picsum.photos/1200/800?random=1',
        'https://picsum.photos/1200/800?random=2',
        'https://picsum.photos/1200/800?random=3',
    ],
  },
];
