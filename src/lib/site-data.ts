/* Amara Beauty & Spa site content. All copy lives here so pages stay clean. */

export const BRAND = {
  name: "Amara Beauty & Spa",
  shortName: "Amara",
  tagline: "Grace lives here",
  phone: "+234 901 555 0134",
  phoneHref: "tel:+2349015550134",
  whatsapp: "https://wa.me/2349015550134",
  email: "hello@amarabeauty.ng",
  emailHref: "mailto:hello@amarabeauty.ng",
  address: "14B Admiralty Way, Lekki Phase 1, Lagos",
  instagram: "https://instagram.com/amara.beauty.spa",
  facebook: "https://facebook.com/amarabeautyspa",
  tiktok: "https://tiktok.com/@amara.beauty.spa",
  hoursWeek: "Monday to Saturday, 9am to 7pm",
  hoursSunday: "Sunday, 12pm to 6pm",
};

export const NAV_LINKS = [
  { label: "Home", href: "#/" },
  { label: "About", href: "#/about" },
  { label: "Services", href: "#/services" },
  { label: "Pricing", href: "#/pricing" },
  { label: "Gallery", href: "#/gallery" },
  { label: "Contact", href: "#/contact" },
];

export interface Service {
  slug: string;
  name: string;
  priceFrom: string;
  image: string;
  blurb: string;
  detail: string;
  includes: string[];
}

export const SERVICES: Service[] = [
  {
    slug: "hair",
    name: "Hair Styling and Treatments",
    priceFrom: "₦8,500",
    image: "/images/svc_hair.jpg",
    blurb:
      "Cuts, silk press, braids, weaves and colour, each finished with a steam treatment your hair will thank you for.",
    detail:
      "Our stylists start every appointment with a proper consultation. We look at your hair, ask about your routine, and only then pick up the scissors. Whether it is a silk press that survives Lagos humidity or knotless braids that protect your edges, we take our time with every strand. Deep conditioning and steam come standard with most treatments, because healthy hair is the whole point.",
    includes: [
      "Consultation and hair assessment",
      "Wash, steam and deep conditioning",
      "Cuts, silk press, braids and weaves",
      "Colour with gentle, ammonia free products",
    ],
  },
  {
    slug: "nails",
    name: "Manicures and Pedicures",
    priceFrom: "₦12,000",
    image: "/images/svc_nails.jpg",
    blurb:
      "Clean cuticles, perfect polish and a warm foot soak. The kind of quiet hour you did not know you needed.",
    detail:
      "Tools are sterilised before every single client, no exceptions. Your manicure or pedicure begins with a soak, moves through gentle cuticle work, and ends with polish applied by someone who genuinely cares about the small details. Choose from classic shades, gels or a full set of acrylics, and ask about our simple nail art if you want a little something extra.",
    includes: [
      "Warm soak and gentle cuticle care",
      "Gel, classic or acrylic finishes",
      "Hand massage with every manicure",
      "Sterilised tools, fresh files per client",
    ],
  },
  {
    slug: "skin",
    name: "Facials and Skincare",
    priceFrom: "₦28,000",
    image: "/images/svc_facial.jpg",
    blurb:
      "Facials built around your skin, not a template. We map your concerns first, then treat them gently.",
    detail:
      "Every facial starts with a proper skin mapping under our lamp, so we know exactly what we are working with. From there your therapist chooses the cleansers, exfoliants and masks that suit you that day. Most clients book the Signature Glow monthly and let us handle the rest. You will leave with skin that feels clean, calm and quietly brighter, plus honest advice you can actually follow at home.",
    includes: [
      "Skin mapping and consultation",
      "Double cleanse, exfoliation and mask",
      "Extractions done gently, never rushed",
      "Home routine advice that fits your life",
    ],
  },
  {
    slug: "massage",
    name: "Massage and Body Therapy",
    priceFrom: "₦20,000",
    image: "/images/svc_massage.png",
    blurb:
      "Warm oils, dim lights and skilled hands. Come in carrying the week, leave feeling weightless.",
    detail:
      "Our treatment rooms are kept dim, warm and quiet, with fresh linen for every guest. Swedish for gentle relief, deep tissue for the knots that laugh at regular pressure, hot stone when you want to fully switch off. Tell your therapist where it hurts and they will listen. The couples room is popular for anniversaries, so book it early.",
    includes: [
      "Swedish, deep tissue and hot stone",
      "Body scrubs and glow treatments",
      "Private couples room available",
      "Fresh linen and warmed oils every time",
    ],
  },
  {
    slug: "makeup",
    name: "Makeup and Bridal",
    priceFrom: "₦10,000",
    image: "/images/svc_makeup.jpg",
    blurb:
      "Soft glam, bridal looks and gele tied properly. We make sure you look like you, on your best day.",
    detail:
      "Makeup should never feel like a mask. Our artists work with your features, your skin tone and the lighting of your event, then build a look that photographs beautifully and lasts the night. Brides get a full trial ahead of the day, and our gele artists can tie a pleat that stays sharp from ceremony to last dance. We also travel for weddings, ask us about it.",
    includes: [
      "Soft glam and full bridal packages",
      "Gele tying by specialists",
      "Bridal trials before your big day",
      "Home service for wedding parties",
    ],
  },
  {
    slug: "brows",
    name: "Brows and Lashes",
    priceFrom: "₦8,000",
    image: "/images/svc_brows.jpg",
    blurb:
      "Brows shaped to your face and lashes that look real. Small changes, big difference in the mirror.",
    detail:
      "Good brows are measured, not guessed. We map your brow to your bone structure, shape with care and finish with a tint if you want more depth. For lashes we keep it natural, classic sets that read as your lashes but better, and volume for the brave. Removal and aftercare advice always included.",
    includes: [
      "Brow mapping before any shaping",
      "Tinting for fuller looking brows",
      "Classic and volume lash extensions",
      "Lash lift that lasts up to eight weeks",
    ],
  },
];

export interface PriceGroup {
  title: string;
  note: string;
  items: { name: string; price: string }[];
}

export const PRICES: PriceGroup[] = [
  {
    title: "Hair",
    note: "Every hair service begins with a wash and a consultation.",
    items: [
      { name: "Wash and steam", price: "₦8,500" },
      { name: "Classic cut and finish", price: "₦15,000" },
      { name: "Silk press", price: "₦20,000" },
      { name: "Knotless braids, waist length", price: "₦45,000" },
      { name: "Weave installation", price: "₦35,000" },
      { name: "Colour, roots and tone", price: "₦55,000" },
      { name: "Deep conditioning treatment", price: "₦18,000" },
    ],
  },
  {
    title: "Nails",
    note: "Gel removal is always gentle and never charges you extra panic fees.",
    items: [
      { name: "Classic manicure", price: "₦12,000" },
      { name: "Gel polish", price: "₦15,000" },
      { name: "Spa pedicure", price: "₦18,000" },
      { name: "Acrylic full set", price: "₦25,000" },
      { name: "Nail art, per nail", price: "₦1,500" },
      { name: "Gel removal and care", price: "₦6,000" },
    ],
  },
  {
    title: "Skin",
    note: "Not sure which facial fits? Come in for a free skin chat.",
    items: [
      { name: "Signature glow facial", price: "₦30,000" },
      { name: "Deep cleanse facial", price: "₦28,000" },
      { name: "Brightening treatment", price: "₦38,000" },
      { name: "Anti aging facial", price: "₦45,000" },
      { name: "Dermaplaning", price: "₦35,000" },
      { name: "Back facial", price: "₦32,000" },
    ],
  },
  {
    title: "Massage and Body",
    note: "Evening slots go quickly, book a day ahead where you can.",
    items: [
      { name: "Swedish massage, 60 minutes", price: "₦40,000" },
      { name: "Deep tissue, 60 minutes", price: "₦48,000" },
      { name: "Hot stone, 75 minutes", price: "₦55,000" },
      { name: "Body scrub and glow", price: "₦35,000" },
      { name: "Couples retreat, 90 minutes", price: "₦95,000" },
      { name: "Head, neck and shoulders, 30 minutes", price: "₦20,000" },
    ],
  },
  {
    title: "Makeup and Bridal",
    note: "Wedding parties of five or more get the bridal suite to themselves.",
    items: [
      { name: "Soft glam", price: "₦35,000" },
      { name: "Bridal makeup with trial", price: "₦120,000" },
      { name: "Bridesmaid, per person", price: "₦25,000" },
      { name: "Gele tying", price: "₦10,000" },
      { name: "Photoshoot makeup", price: "₦30,000" },
      { name: "One on one makeup lesson", price: "₦50,000" },
    ],
  },
  {
    title: "Brows and Lashes",
    note: "Patch tests are done 48 hours before any tint, every time.",
    items: [
      { name: "Brow shaping", price: "₦8,000" },
      { name: "Brow tint", price: "₦10,000" },
      { name: "Classic lash extensions", price: "₦25,000" },
      { name: "Volume lashes", price: "₦35,000" },
      { name: "Lash lift and tint", price: "₦22,000" },
    ],
  },
];

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export const TEAM: TeamMember[] = [
  {
    name: "Amara Eze",
    role: "Founder and Creative Director",
    image: "/images/team_1.png",
    bio: "Amara opened the salon in 2013 with one chair and a kettle for hair steam. Twelve years later she still takes clients every Thursday and trains every stylist who joins us.",
  },
  {
    name: "Funmi Adeleke",
    role: "Lead Makeup Artist",
    image: "/images/team_2.png",
    bio: "Funmi has done makeup for over three hundred brides across Lagos and Abuja. She is famous here for finishing a soft glam look in under an hour without missing a single detail.",
  },
  {
    name: "Ngozi Kalu",
    role: "Head Spa Therapist",
    image: "/images/team_3.png",
    bio: "Ngozi trained in Ghana and Thailand and has fifteen years of hands on experience. Her hot stone massage has a waiting list, so book ahead and thank us later.",
  },
  {
    name: "Zainab Bello",
    role: "Senior Nail Artist",
    image: "/images/team_4.png",
    bio: "Zainab keeps our clients loyal to their nails. Her acrylic sets grow out so neatly that most people only see her once a month, and her nail art is quietly famous on our Instagram.",
  },
];

export interface Testimonial {
  quote: string;
  name: string;
  area: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "I came in for a facial before my wedding and left feeling like the best version of myself. The room was calm, the music was soft, and my skin has honestly never looked better.",
    name: "Chidinma O.",
    area: "Lekki",
  },
  {
    quote:
      "The knotless braids here last me two good months and my edges have never been healthier. They take their time and you can feel it in the result.",
    name: "Tomiwa A.",
    area: "Yaba",
  },
  {
    quote:
      "I book the hot stone massage every last Friday of the month. It is the one appointment I refuse to miss, no matter how busy work gets.",
    name: "Halima S.",
    area: "Ikoyi",
  },
  {
    quote:
      "Zainab did my acrylics for a party and three weeks later they still looked fresh. The salon smells like eucalyptus and feels like a hug.",
    name: "Blessing E.",
    area: "Victoria Island",
  },
];

export interface GalleryItem {
  image: string;
  category: "Hair" | "Nails" | "Makeup" | "Spa" | "Salon" | "Brows";
  caption: string;
}

export const GALLERY: GalleryItem[] = [
  { image: "/images/gal_updo.jpg", category: "Hair", caption: "Bridal updo with soft tendrils" },
  { image: "/images/svc_nails.jpg", category: "Nails", caption: "Barely there nude gel" },
  { image: "/images/svc_makeup.jpg", category: "Makeup", caption: "Soft glam in progress" },
  { image: "/images/svc_facial_warm.jpg", category: "Spa", caption: "Evening glow facial" },
  { image: "/images/gal_hands.png", category: "Nails", caption: "Manicure and gold rings" },
  { image: "/images/svc_hair.jpg", category: "Hair", caption: "Silk press, glass finish" },
  { image: "/images/svc_brows.jpg", category: "Brows", caption: "Brow mapping session" },
  { image: "/images/svc_massage.png", category: "Spa", caption: "Hot stone session" },
  { image: "/images/gal_bridal.jpg", category: "Makeup", caption: "Bridal glam, soft finish" },
  { image: "/images/gal_products.jpg", category: "Salon", caption: "The products we use and sell" },
  { image: "/images/about_interior.png", category: "Salon", caption: "Inside the salon" },
  { image: "/images/cta_spa.jpg", category: "Spa", caption: "Evening calm in the spa room" },
];

export const STATS = [
  { value: "12", label: "Years in Lekki" },
  { value: "4,800+", label: "Happy clients" },
  { value: "6", label: "Treatment rooms" },
  { value: "4.9", label: "Average rating" },
];

export const WHY_US = [
  {
    title: "Clean tools, always",
    text: "Everything that touches your skin is sterilised before you sit down. Files and buffers are fresh per client. It is basic, and we never skip it.",
  },
  {
    title: "Products we would use ourselves",
    text: "We stock gentle, effective brands and we will tell you honestly what your hair or skin needs, and what it does not.",
  },
  {
    title: "Time that respects yours",
    text: "Appointments start when they should. If we are running behind, we call you ahead instead of letting you wait.",
  },
  {
    title: "Styles that fit your life",
    text: "A look only works if you can maintain it. We give honest advice on what will suit your routine, not just the trend of the week.",
  },
];

export const STEPS = [
  {
    title: "You book",
    text: "Send the form, a WhatsApp message or a call. Tell us the service and the day that suits you.",
  },
  {
    title: "We confirm",
    text: "We reply within a few working hours with a slot and everything you need to know before you come.",
  },
  {
    title: "You arrive",
    text: "Tea or water, a warm welcome, and a proper consultation before anyone starts work.",
  },
  {
    title: "We look after you",
    text: "Unhurried treatments, honest advice, and aftercare tips you can actually follow at home.",
  },
];

export const FAQS = [
  {
    q: "Do I need an appointment or can I walk in?",
    a: "Walk ins are welcome for manicures and brow shaping when we have space. For hair, facials, massage and bridal, please book ahead so we can give you the time you deserve.",
  },
  {
    q: "Do you do home service for weddings?",
    a: "Yes. Our makeup and bridal team travels across Lagos for weddings and photo sessions, and further afield by arrangement. Early booking is best, especially for December.",
  },
  {
    q: "What products do you use?",
    a: "We use gentle professional brands suited to textured hair and melanin rich skin. Everything we use in the salon is available to buy at the front desk, and we will never push a product you do not need.",
  },
  {
    q: "Can I bring my own products?",
    a: "Of course. If your scalp or skin reacts to new things, bring what works for you and we will happily use it during your service.",
  },
  {
    q: "What is your cancellation policy?",
    a: "Life happens, we understand. We simply ask for six hours notice so another client can take the slot. Bridal bookings need one week notice for any changes.",
  },
];

export const TIME_SLOTS = [
  "9:00 am",
  "10:30 am",
  "12:00 pm",
  "1:30 pm",
  "3:00 pm",
  "4:30 pm",
  "6:00 pm",
];
