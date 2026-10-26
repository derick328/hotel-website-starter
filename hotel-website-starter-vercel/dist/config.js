// This is the only file a hotel needs to edit for its content and branding.
// Replace the sample images in assets/ with photographs of the actual property.
window.HOTEL = {
  name: "Nuru House",
  pageTitle: "A Softer Way to Stay",
  monogram: "N",
  eyebrow: "A boutique hotel concept",
  location: "A place to pause",
  heroTitle: "Stay a little\nlonger.",
  heroDescription: "A thoughtfully imagined place for slow mornings, memorable evenings, and everything in between.",
  introLabel: "Welcome to Nuru House",
  introTitle: "A softer way to stay.",
  introText: "Good stays have a way of slowing time. Here, considered spaces, warm details, and room to breathe make every moment feel your own.",
  roomsIntro: "Spaces made for settling in, waking slowly, and feeling at home wherever you are.",
  experienceTitle: "The best moments happen in between.",
  experienceText: "From lingering over breakfast to an afternoon with nowhere else to be, the little moments make a stay memorable.",
  closingTitle: "Your next story starts here.",
  closingText: "Take a look around, choose your space, and imagine yourself here.",
  quoteCaption: "An invitation to slow down",
  bookingUrl: "", // Add your real booking-engine URL to activate booking buttons.
  email: "", // Add your hotel's reservations email to show an email contact link.
  phone: "", // Add your hotel's phone number to show a phone contact link.
  mapUrl: "", // Add a Google Maps link for the real property.
  instagramUrl: "",
  images: {
    hero: "assets/hero.jpg",
    intro: "assets/pool.jpg",
    experience: "assets/dining.jpg",
    closing: "assets/room-three.jpg"
  },
  imageAlt: {
    hero: "A welcoming hotel beside a pool at dusk",
    intro: "Sunlit pool and deck",
    experience: "A welcoming dining setting",
    closing: "A peaceful room ready for a stay"
  },
  rooms: [
    { name: "The Classic Room", type: "A restful retreat", description: "A comfortable space to unwind after a day out.", image: "assets/room-one.jpg", alt: "Warm hotel room with garden-facing window" },
    { name: "The Grand Room", type: "A little more room", description: "Extra space for slow mornings and unhurried evenings.", image: "assets/room-two.jpg", alt: "Light-filled guest room with a seating area" },
    { name: "The Suite", type: "Make yourself at home", description: "An inviting setting for stays worth extending.", image: "assets/room-three.jpg", alt: "Contemporary hotel suite" }
  ],
  features: [
    { number: "01", title: "Beautifully considered rooms", text: "Comfort in every detail, with space to truly switch off." },
    { number: "02", title: "Time to slow down", text: "A setting that makes it easy to stay for one more moment." },
    { number: "03", title: "A warm welcome", text: "The kind of thoughtful hospitality that feels effortless." }
  ],
  faqs: [
    { question: "How do I reserve a room?", answer: "When this concept is set up for a real hotel, the Book your stay button can connect to its booking engine. You can also add the hotel's reservations email and phone in config.js." },
    { question: "Where is the hotel located?", answer: "This is a reusable design concept. The hotel's address and map link will be added when the site is adapted for a real property." },
    { question: "Are the rooms and photographs real?", answer: "The rooms and photographs are illustrative. Replace them with accurate room descriptions and photographs before using this site for a hotel." }
  ]
};
