import { Skill, Service, PortfolioProject, ExperienceItem, Testimonial, FAQItem } from '../types';

import profileImg from '../assets/images/salah_uddin_profile_1785405174895.jpg';
import brandingImg from '../assets/images/portfolio_branding_1785405186944.jpg';
import videoImg from '../assets/images/portfolio_video_editing_1785405199034.jpg';
import motionImg from '../assets/images/portfolio_motion_graphics_1785405210977.jpg';
import socialImg from '../assets/images/portfolio_social_media_1785405225659.jpg';

export const HERO_DATA = {
  name: "SALAH UDDIN",
  title: "Graphic Designer | Video Editor | Meta Marketer",
  roles: ["Graphic Designer", "Video Editor", "Meta Marketer"],
  status: "Available for Freelance & Remote Work",
  description: "Crafting high-impact brand visuals, cinematic video edits, and data-driven Meta ad campaigns that capture attention, drive conversions, and build unforgettable brand identities.",
  email: "salahuddin.assdi@gmail.com",
  phone: "+880 1700-000000",
  location: "Satarkul, Badda, Dhaka-1212",
  profileImage: profileImg,
  socials: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
    behance: "https://behance.net",
    youtube: "https://youtube.com",
    whatsapp: "https://wa.me/8801700000000"
  },
  stats: []
};

export const ABOUT_DATA = {
  heading: "Driven by Creativity, Powered by Strategy",
  subheading: "Who I Am",
  bioParagraph1: "Hi, I'm Salah Uddin — a versatile creative professional specializing in Graphic Design, Video Editing, Motion Graphics, and Meta Advertising. Over the past 3+ years, I've helped brands, startups, content creators, and agencies transform their visual identity and scale their business through compelling media.",
  bioParagraph2: "My approach bridges art and performance. Whether I'm editing dynamic short-form Reels, crafting a complete brand identity from scratch, or building high-ROAS Meta ad campaigns, my goal remains constant: deliver visually stunning work that generates measurable results.",
  highlights: [
    {
      title: "Visual Mastery",
      desc: "Expertise across Adobe Creative Suite with focus on high-converting brand design & motion."
    },
    {
      title: "Performance Marketing",
      desc: "Proven track record running targeted Meta Ads (Facebook & Instagram) with optimized ROAS."
    },
    {
      title: "Next-Gen AI Workflow",
      desc: "Integrating cutting-edge Generative AI tools to accelerate creative output and storyboarding."
    },
    {
      title: "Client-Centric Process",
      desc: "Clear communication, rapid turnaround times, and relentless attention to project details."
    }
  ]
};

export const SKILLS_DATA: Skill[] = [
  {
    id: "graphic-design",
    name: "Graphic Design",
    category: "design",
    level: 95,
    yearsOfExp: "5+ yrs",
    iconName: "Palette",
    description: "Layout design, print & digital media, typography, poster design, and visual hierarchy.",
    highlight: true
  },
  {
    id: "video-editing",
    name: "Video Editing",
    category: "video",
    level: 92,
    yearsOfExp: "4+ yrs",
    iconName: "Film",
    description: "Cinematic cuts, audio balancing, sound design, color grading, and narrative pacing.",
    highlight: true
  },
  {
    id: "motion-graphics",
    name: "Motion Graphics",
    category: "video",
    level: 88,
    yearsOfExp: "4+ yrs",
    iconName: "Sparkles",
    description: "2D/3D animation, typography motion, logo reveals, kinetic text, and VFX overlays.",
    highlight: true
  },
  {
    id: "adobe-premiere",
    name: "Adobe Premiere Pro",
    category: "video",
    level: 94,
    yearsOfExp: "5+ yrs",
    iconName: "Video",
    description: "Advanced multi-cam editing, Lumetri color grading, essential audio workflow, and fast export.",
    highlight: true
  },
  {
    id: "after-effects",
    name: "After Effects",
    category: "video",
    level: 90,
    yearsOfExp: "4+ yrs",
    iconName: "Zap",
    description: "Complex keyframing, motion tracking, rotoscoping, expression scripting, and lower thirds.",
    highlight: true
  },
  {
    id: "photoshop",
    name: "Photoshop",
    category: "design",
    level: 96,
    yearsOfExp: "5+ yrs",
    iconName: "Image",
    description: "Photo retouching, image manipulation, product mockup creation, and digital matte art.",
    highlight: true
  },
  {
    id: "illustrator",
    name: "Illustrator",
    category: "design",
    level: 93,
    yearsOfExp: "5+ yrs",
    iconName: "PenTool",
    description: "Vector illustration, brand logo craft, scalable icon sets, and vector graphic assets.",
    highlight: true
  },
  {
    id: "meta-marketing",
    name: "Meta Marketing",
    category: "marketing",
    level: 89,
    yearsOfExp: "3+ yrs",
    iconName: "Target",
    description: "Meta Ads Manager, custom audience targeting, A/B creative testing, and pixel analytics.",
    highlight: true
  },
  {
    id: "generative-ai",
    name: "Generative AI Tools",
    category: "tools",
    level: 92,
    yearsOfExp: "2+ yrs",
    iconName: "Bot",
    description: "Midjourney, ChatGPT, Runway, ElevenLabs, and AI image/video workflow integration.",
    highlight: true
  },
  {
    id: "ms-office",
    name: "MS Office",
    category: "tools",
    level: 90,
    yearsOfExp: "5+ yrs",
    iconName: "FileText",
    description: "PowerPoint pitch deck design, Word document formatting, and structured Excel reporting.",
    highlight: true
  }
];

export const SERVICES_DATA: Service[] = [
  {
    id: "graphic-design-service",
    title: "Graphic Design",
    shortDesc: "High-impact visual designs tailored to elevate your brand prestige and catch audience attention.",
    fullDesc: "From promotional banners and marketing collateral to digital banners and print graphics, I craft clean, eye-catching visual layouts that communicate your message clearly and professionally.",
    iconName: "Palette",
    features: [
      "Marketing Banners & Ad Creatives",
      "Poster, Flyer & Brochure Layouts",
      "Print Media & Packaging Graphics",
      "Infographics & Pitch Deck Design"
    ],
    deliverables: ["Editable Source Files (PSD/AI)", "High-Res PNG/JPG/PDF", "Print-Ready Vector Outputs"],
    turnaround: "24 - 48 Hours",
    popular: false
  },
  {
    id: "video-editing-service",
    title: "Video Editing",
    shortDesc: "Cinematic, engaging video editing for YouTube, Reels, TikTok, and corporate brand videos.",
    fullDesc: "Transform raw footage into captivating visual stories. I specialize in fast-paced social media reels, long-form YouTube edits, podcasts, and corporate promotional videos with professional color grading and audio polish.",
    iconName: "Video",
    features: [
      "Short-Form Reels, Shorts & TikToks",
      "Long-Form YouTube & Vlogs",
      "Color Grading & Audio Enhancement",
      "Subtitles, Captions & Sound FX"
    ],
    deliverables: ["4K / 1080p Export (MP4/MOV)", "Project Timelines", "Thumbnail Design Included"],
    turnaround: "1 - 3 Days",
    popular: true
  },
  {
    id: "social-media-service",
    title: "Social Media Design",
    shortDesc: "Cohesive social media kits, Instagram carousels, and Meta ad banners that drive clicks.",
    fullDesc: "Consistency is key on social media. I create tailored graphic templates, multi-slide carousels, profile kits, and high-converting ad graphics optimized for Facebook, Instagram, LinkedIn, and X.",
    iconName: "Share2",
    features: [
      "Custom Instagram Carousel Banners",
      "Meta Ad Graphic Variations (1:1 & 9:16)",
      "Cohesive Brand Grid Layouts",
      "Header Banners & Profile Covers"
    ],
    deliverables: ["Platform-Optimized Formats", "Canva/PSD Templates", "Grid Layout Strategy Guide"],
    turnaround: "24 - 48 Hours",
    popular: false
  },
  {
    id: "motion-graphics-service",
    title: "Motion Graphics",
    shortDesc: "Dynamic 2D/3D animation, animated logos, kinetic typography, and broadcast graphics.",
    fullDesc: "Breathe life into static graphics with fluid motion. Ideal for intro sequences, explainer animations, animated ad creatives, and sleek video overlays that enhance viewer retention.",
    iconName: "Sparkles",
    features: [
      "Animated Logo Ident & Stings",
      "Kinetic Typography Videos",
      "Lottie Animations for Web & Mobile",
      "Broadcast Lower Thirds & Intros"
    ],
    deliverables: ["Alpha Channel Transparent Videos", "Lottie JSON", "MP4 60FPS Video"],
    turnaround: "2 - 4 Days",
    popular: false
  },
  {
    id: "brand-identity-service",
    title: "Brand Identity",
    shortDesc: "Complete brand guidelines, custom logo design, color palettes, and typography hierarchy.",
    fullDesc: "Build a lasting brand footprint. I design distinctive, timeless logos and complete brand guidelines that give your business a unified, professional, and memorable presence across all touchpoints.",
    iconName: "Bookmark",
    features: [
      "Custom Logo Design & Concepts",
      "Brand Color Palette & Typography",
      "Brand Style Guide Manual",
      "Business Cards & Stationery"
    ],
    deliverables: ["Brand Style Guide PDF", "Vector Logo Assets (SVG, EPS, AI)", "Social Media Kit"],
    turnaround: "3 - 5 Days",
    popular: true
  },
  {
    id: "ai-content-creation-service",
    title: "AI Content Creation",
    shortDesc: "Leveraging generative AI to produce unique visual assets, storyboards, and rapid concepts.",
    fullDesc: "Supercharge your workflow with cutting-edge AI image & video generation. I combine Midjourney, ChatGPT, and AI synthesis tools with expert manual editing to produce custom artwork and rapid creative concepts.",
    iconName: "Bot",
    features: [
      "Custom Midjourney Prompt Art",
      "AI Voiceover & Script Polish",
      "Rapid Visual Storyboarding",
      "AI Image Upscaling & Editing"
    ],
    deliverables: ["High-Res Upscaled Art", "Concept Pitch Deck", "Prompt Engineering File"],
    turnaround: "24 Hours",
    popular: false
  }
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: "proj-1",
    title: "Assunnah",
    category: "Video Editing",
    image: "https://img.youtube.com/vi/qpdoE2jjMgY/hqdefault.jpg",
    videoUrl: "https://youtu.be/qpdoE2jjMgY",
    description: "Professional video editing, color grading, and post-production for Assunnah media content.",
    client: "Assunnah Media",
    year: "2025",
    tools: ["Premiere Pro", "After Effects", "Audition"],
    deliverables: ["Full Video Edit", "Color Grading", "Audio Enhancement"],
    highlight: true
  },
  {
    id: "proj-2",
    title: "Nafees Selim",
    category: "Video Editing",
    image: "https://raw.githubusercontent.com/mdsalah2877/my-pic/refs/heads/main/ns%20th.jpg",
    videoUrl: "https://youtu.be/LyEFtSkE5tU",
    description: "Engaging YouTube content editing, storytelling, motion overlays, and custom thumbnail design for Nafees Selim.",
    client: "Nafees Selim",
    year: "2025",
    tools: ["Premiere Pro", "After Effects", "Photoshop"],
    deliverables: ["Main Video Edit", "Custom Thumbnail", "Social Clips"],
    highlight: true
  },
  {
    id: "proj-3",
    title: "Soberly Media",
    category: "Video Editing",
    image: "https://img.youtube.com/vi/Lx27_oBu7Bk/hqdefault.jpg",
    videoUrl: "https://youtu.be/Lx27_oBu7Bk",
    description: "Commercial video edit and cinematic visual storytelling produced for Soberly Media.",
    client: "Soberly Media",
    year: "2025",
    tools: ["Premiere Pro", "After Effects", "DaVinci Resolve"],
    deliverables: ["Commercial Edit", "Social Cutdowns"],
    highlight: true
  },
  {
    id: "proj-4",
    title: "SBMC Assdi",
    category: "Video Editing",
    image: "https://img.youtube.com/vi/q2Jl0jwlu2A/hqdefault.jpg",
    videoUrl: "https://youtube.com/shorts/q2Jl0jwlu2A",
    description: "Dynamic short-form video Reel with fast-paced cuts, sound design, and custom captions.",
    client: "SBMC Assdi",
    year: "2025",
    tools: ["Premiere Pro", "After Effects", "CapCut Pro"],
    deliverables: ["Vertical Short (9:16)", "Subtitles & Captions"],
    highlight: false
  },
  {
    id: "proj-5",
    title: "Ghorer Hut",
    category: "Video Editing",
    image: "https://img.youtube.com/vi/gCKZ55MPOFo/hqdefault.jpg",
    videoUrl: "https://youtube.com/shorts/gCKZ55MPOFo",
    description: "High-converting promotional short-form ad video edit highlighting brand offerings.",
    client: "Ghorer Hut",
    year: "2025",
    tools: ["Premiere Pro", "After Effects", "Photoshop"],
    deliverables: ["Promotional Reel", "Product Highlight"],
    highlight: false
  },
  {
    id: "proj-6",
    title: "Sokkari Kh",
    category: "Video Editing",
    image: "https://img.youtube.com/vi/-nH-R3QaZFs/hqdefault.jpg",
    videoUrl: "https://youtube.com/shorts/-nH-R3QaZFs",
    description: "Fast-paced vertical short-form video editing with custom typography and audio sync.",
    client: "Sokkari Kh",
    year: "2025",
    tools: ["Premiere Pro", "After Effects"],
    deliverables: ["YouTube Short", "Kinetic Subtitles"],
    highlight: false
  },
  {
    id: "proj-7",
    title: "Zayen Motion",
    category: "Motion Graphics",
    image: "https://img.youtube.com/vi/Yy-CaR_Gpbk/hqdefault.jpg",
    videoUrl: "https://youtube.com/shorts/Yy-CaR_Gpbk",
    description: "Creative motion graphics animation and visual effect overlays designed for short-form media.",
    client: "Zayen Motion",
    year: "2025",
    tools: ["After Effects", "Cinema 4D", "Premiere Pro"],
    deliverables: ["Motion Graphics Reel", "Visual Effects"],
    highlight: false
  },
  {
    id: "proj-8",
    title: "Experience",
    category: "Video Editing",
    image: "https://img.youtube.com/vi/GCCtUzNjVhA/hqdefault.jpg",
    videoUrl: "https://youtube.com/shorts/GCCtUzNjVhA",
    description: "Engaging story-driven short video edit crafted for social media reach and engagement.",
    client: "Personal Showcase",
    year: "2025",
    tools: ["Premiere Pro", "After Effects"],
    deliverables: ["Short-form Edit", "Sound Design"],
    highlight: false
  },
  {
    id: "proj-9",
    title: "Porisrom",
    category: "Video Editing",
    image: "https://img.youtube.com/vi/kHgvcLWSPpk/hqdefault.jpg",
    videoUrl: "https://youtube.com/shorts/kHgvcLWSPpk",
    description: "Inspirational video edit featuring cinematic pacing and audio orchestration.",
    client: "Motivational Series",
    year: "2025",
    tools: ["Premiere Pro", "After Effects", "Audition"],
    deliverables: ["Short Video", "Audio Syncing"],
    highlight: false
  },
  {
    id: "proj-10",
    title: "Sreshtho Howa",
    category: "Video Editing",
    image: "https://img.youtube.com/vi/05i98muG45I/hqdefault.jpg",
    videoUrl: "https://youtube.com/shorts/05i98muG45I",
    description: "High-energy short video edit featuring vibrant transitions, color grading, and dynamic captions.",
    client: "Sreshtho Howa",
    year: "2025",
    tools: ["Premiere Pro", "After Effects"],
    deliverables: ["Short-Form Reel", "Color Grading"],
    highlight: false
  },
  {
    id: "proj-11",
    title: "Video Ad",
    category: "Social Media",
    image: "https://img.youtube.com/vi/wzO1HWA05A0/hqdefault.jpg",
    videoUrl: "https://youtube.com/shorts/wzO1HWA05A0",
    description: "High-performing Meta and YouTube short video ad creative designed to capture audience attention.",
    client: "E-Commerce Campaign",
    year: "2025",
    tools: ["Premiere Pro", "After Effects", "Photoshop"],
    deliverables: ["Ad Creative", "Hook Variations"],
    highlight: false
  },
  {
    id: "proj-12",
    title: "Minimalist Architectural Studio Magazine",
    category: "Graphic Design",
    image: brandingImg,
    videoUrl: "https://youtu.be/LyEFtSkE5tU",
    description: "A 48-page modern architectural showcase catalog and poster collection printed on matte heavy cardstock with clean grid layouts and high-contrast typography.",
    client: "Vanguard Studio Architecture",
    year: "2024",
    tools: ["InDesign", "Photoshop", "Illustrator"],
    stats: "Published Print",
    deliverables: ["Print Ready PDF", "Digital Interactive Flipbook", "Poster Set"],
    highlight: false
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "exp-1",
    period: "2023 - Present",
    role: "Senior Graphic Designer & Video Editor",
    company: "Creative Media Agency",
    location: "Remote",
    description: "Lead the creative department in delivering high-converting video edits, social media campaign designs, and Meta marketing assets for international clients across e-commerce, tech, and lifestyle sectors.",
    achievements: [
      "Produced over 120+ high-performing video ad reels generating over 15M combined impressions.",
      "Established brand design workflows that reduced project delivery turnaround times by 30%.",
      "Mentored junior graphic designers and video editors on motion design best practices."
    ],
    skillsUsed: ["Premiere Pro", "After Effects", "Photoshop", "Meta Ads", "Generative AI"]
  },
  {
    id: "exp-2",
    period: "2021 - 2023",
    role: "Meta Marketing & Creative Specialist",
    company: "Digital Growth Studio",
    location: "Dhaka, Bangladesh",
    description: "Managed Meta (Facebook/Instagram) advertising budgets and designed high-ROAS creative assets for e-commerce stores and local service businesses.",
    achievements: [
      "Maintained an average client campaign ROAS of 3.2x across Meta ad setups.",
      "Designed 200+ ad banner variations and conducted rigorous creative A/B testing.",
      "Improved ad conversion rates by optimizing video hooks and thumbnail visuals."
    ],
    skillsUsed: ["Meta Marketing", "Graphic Design", "Photoshop", "Illustrator", "Analytics"]
  },
  {
    id: "exp-3",
    period: "2019 - 2021",
    role: "Freelance Graphic Designer & Motion Artist",
    company: "Self-Employed",
    location: "Worldwide Remote",
    description: "Partnered with over 80+ global clients on Fiverr, Upwork, and direct contracts to deliver logo designs, YouTube channel branding, promotional flyers, and video editing.",
    achievements: [
      "Maintained a 5.0 Star rating across 150+ client reviews on freelance marketplaces.",
      "Delivered custom brand identity packages to startups in the US, UK, and UAE."
    ],
    skillsUsed: ["Photoshop", "Illustrator", "Premiere Pro", "MS Office"]
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "test-1",
    name: "Marcus Vance",
    role: "Marketing Director",
    company: "AuraFit Apparel (USA)",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    content: "Salah is an absolute wizard when it comes to video editing and Meta ad creatives! He understood our brand vibe instantly and delivered edits that boosted our ad CTR by over 200%. Will definitely work with him long term.",
    projectType: "Video Editing & Meta Ads"
  },
  {
    id: "test-2",
    name: "Sophia Rodriguez",
    role: "Founder & CEO",
    company: "CyberPulse Tech",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    content: "The brand identity Salah designed for CyberPulse was beyond our expectations. The attention to detail in typography, color palette, and packaging mockups made us look like a multi-million dollar tech company.",
    projectType: "Brand Identity Design"
  },
  {
    id: "test-3",
    name: "David Chen",
    role: "Content Creator & Youtuber",
    company: "TechVerse (450K Subs)",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    content: "Working with Salah on my YouTube video edits and thumbnails has been a game-changer. His motion graphics intro and fast-paced sound design kept retention high. Highly recommended!",
    projectType: "YouTube Video Editing & Motion Graphics"
  },
  {
    id: "test-4",
    name: "Elena Rostova",
    role: "E-Commerce Manager",
    company: "NexGear Global",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    content: "Incredible communication, ultra-fast delivery, and flawless graphic design execution. Salah delivered 25+ promotional banners for our Black Friday launch ahead of schedule!",
    projectType: "Social Media & Banner Design"
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: "faq-1",
    question: "What software and tools do you use for design and editing?",
    answer: "I primarily work with the Adobe Creative Cloud suite including Adobe Premiere Pro, After Effects, Photoshop, Illustrator, and InDesign. For marketing and productivity, I use Meta Ads Manager, MS Office, and cutting-edge Generative AI tools (Midjourney, ChatGPT, ElevenLabs) to accelerate workflows.",
    category: "General"
  },
  {
    id: "faq-2",
    question: "How long does a typical video editing or design project take?",
    answer: "Turnaround time depends on project scope. Short-form reels and single ad banners are usually completed within 24-48 hours. Long-form YouTube videos take 2-3 days, while complete Brand Identity packages take 3-5 days. Express 24-hour rush options are also available upon request.",
    category: "Workflow"
  },
  {
    id: "faq-3",
    question: "Do you provide editable source files upon completion?",
    answer: "Yes! All final project handovers include high-resolution export files (4K MP4, PNG, JPG, PDF) as well as raw source files (PSD, AI, PRPROJ, AEP) depending on the agreed package terms.",
    category: "Services"
  },
  {
    id: "faq-4",
    question: "Can you manage Meta Ad campaigns in addition to creating the graphics?",
    answer: "Absolutely. I specialize in both creative production and campaign execution. I can set up your Meta Ads Manager, target custom and lookalike audiences, structure campaigns for high ROAS, and continually test creative hooks.",
    category: "Services"
  },
  {
    id: "faq-5",
    question: "What is your revision policy if I need changes?",
    answer: "Client satisfaction is my priority. I offer 3 rounds of free revisions on all projects to ensure every detail matches your exact vision. Further revisions are handled promptly until you are 100% satisfied.",
    category: "Workflow"
  },
  {
    id: "faq-6",
    question: "How do we get started on a project together?",
    answer: "Getting started is easy! You can fill out the contact form below or reach out directly via email at salahuddin.assdi@gmail.com or WhatsApp. We'll discuss your requirements, timeline, and goals, and I'll send over a custom proposal.",
    category: "Payment"
  }
];
