export interface Feature {
  icon: string
  title: string
  description: string
}

export interface Bonus {
  title: string
  amount: string
  description: string
  icon: string
}

export interface GameCategory {
  name: string
  icon: string
  games: string[]
}

export interface FAQ {
  question: string
  answer: string
}

export interface Review {
  name: string
  initials: string
  rating: number
  comment: string
  date: string
  location: string
}

export interface Step {
  step: number
  title: string
  description: string
}

export interface BlogPost {
  slug: string
  title: string
  description: string
  publishedAt: string
  updatedAt: string
  thumbnail: string
  excerpt: string
  category: string
}

export const siteConfig = {
  name: "Rumi Slot",
  tagline: "Pakistan's Fastest-Growing Real-Money Casino App",
  domain: "https://rumislot.pk",
  downloadUrl: "https://rumislots.asia/?code=2872525",
  version: "3.0.0",
  versionLabel: "v3.0.0 (2026 Update)",
  size: "43.7 MB",
  rating: 4.8,
  totalReviews: 92000,
  developer: "RumiSlots Official",
  lastUpdated: "2026 (Latest)",
  os: "Android 5.0+",
  category: "Casino / Real-Money Gaming",
  price: "Free to Download",

  keywords: {
    primary: "Rumi Slots Game Download APK v2026",
    secondary: "Rumi Slot Earn Real Money Pakistan",
    third: "Rumi Slot Latest Version 2026",
  },

  images: {
    hero: "/images/rumi-slot.webp",
    logo: "/images/rumi-slot.webp",
    apkDownload: "/images/rumi-slots-apk-download.webp",
    register: "/images/rumi-slots-register-account.webp",
    bonuses: "/images/rumi-slot-bonuses.webp",
    bindMail: "/images/rumi-slot-bind-mail.webp",
    gamePakistan: "/images/rumi-slot-game-pakistan.webp",
    screenshots: [
      "/images/rumi-slots-apk-download.webp",
      "/images/rumi-slots-register-account.webp",
      "/images/rumi-slot-bonuses.webp",
    ],
    og: "/images/rumi-slot-game-pakistan.webp",
  },

  features: [
    {
      icon: "Zap",
      title: "Instant JazzCash Withdrawals",
      description:
        "Withdraw your winnings instantly via JazzCash, Easypaisa, or bank transfer. No delays, no hidden fees.",
    },
    {
      icon: "Shield",
      title: "100% Secure Platform",
      description:
        "SSL-encrypted transactions and verified payment gateways protect every rupee you earn or deposit.",
    },
    {
      icon: "Gift",
      title: "PKR 5,000 Welcome Bonus",
      description:
        "New players get PKR 5,000 free — no deposit required. Claim instantly on registration.",
    },
    {
      icon: "Smartphone",
      title: "Mobile Optimized",
      description:
        "Buttery-smooth gameplay on any Android device. Designed for low-end phones with poor internet.",
    },
    {
      icon: "Users",
      title: "Referral Program",
      description:
        "Earn real cash for every friend you refer. No cap on referrals — the more you share, the more you earn.",
    },
    {
      icon: "Trophy",
      title: "100+ Games — 9 Categories",
      description:
        "Slots, live casino, sports betting, card games, and more — all under one roof. New games added weekly.",
    },
    {
      icon: "CreditCard",
      title: "JazzCash & Easypaisa",
      description:
        "Pakistan's most popular payment methods fully supported. Deposit as low as PKR 50.",
    },
    {
      icon: "Star",
      title: "VIP Rewards Program",
      description:
        "Exclusive benefits for loyal players — higher cashback, faster withdrawals, and dedicated support.",
    },
  ] as (Feature & { icon: string })[],

  bonuses: [
    {
      title: "Welcome Bonus",
      amount: "PKR 5,000",
      description: "Get PKR 5,000 free — no deposit required. Claimed instantly on new account registration.",
      icon: "Gift",
    },
    {
      title: "Referral Bonus",
      amount: "Cash Reward",
      description: "Earn real cash for every friend who registers using your referral link. Unlimited referrals.",
      icon: "Users",
    },
    {
      title: "Daily Spin",
      amount: "Up to PKR 500",
      description: "Spin the daily wheel every 24 hours for free cash, coins, or free spins.",
      icon: "RotateCcw",
    },
    {
      title: "Deposit Bonus",
      amount: "50% Extra",
      description: "Every Friday deposit gets a 50% bonus credited instantly to your wallet.",
      icon: "TrendingUp",
    },
    {
      title: "VIP Cashback",
      amount: "10% Weekly",
      description: "VIP members get 10% cashback every Monday on the previous week's net losses.",
      icon: "Crown",
    },
    {
      title: "First Withdrawal",
      amount: "Fee Waived",
      description: "Your first withdrawal of the month is always fee-free regardless of amount.",
      icon: "Wallet",
    },
  ],

  games: [
    {
      name: "Slot Games",
      icon: "Layers",
      games: [
        "Dragon Fortune",
        "Golden Wheel",
        "Fruit Party",
        "Mega Moolah",
        "Book of Ra",
        "Starburst",
        "Wolf Gold",
        "Gates of Olympus",
        "Pakistan Super Spins",
        "Kashmir Dreams",
        "Lahore Lights",
        "Cricket Fever Megaways",
      ],
    },
    {
      name: "Card Games",
      icon: "Layers",
      games: [
        "Teen Patti Gold",
        "Andar Bahar",
        "Baccarat Live",
        "Blackjack Pro",
        "Poker Texas Hold'em",
        "Rummy Gold",
        "3 Patti Joker",
        "Dragon Tiger",
      ],
    },
    {
      name: "Live Casino",
      icon: "Monitor",
      games: [
        "Live Roulette",
        "Live Blackjack",
        "Live Baccarat",
        "Dream Catcher",
        "Lightning Dice",
        "Crazy Time",
        "Speed Baccarat",
        "Lightning Roulette",
      ],
    },
    {
      name: "Sports Betting",
      icon: "Trophy",
      games: [
        "Cricket — PSL",
        "Cricket — IPL",
        "Football Premier League",
        "Kabaddi Live",
        "Tennis ATP",
        "Volleyball World Cup",
        "Hockey World Cup",
        "Badminton Live",
      ],
    },
    {
      name: "Fishing Games",
      icon: "Layers",
      games: [
        "Ocean King",
        "Fish Hunter",
        "Dragon Fortune Fishing",
        "Golden Toad Fishing",
        "Bombing Fishing",
        "Grand Fishing",
      ],
    },
    {
      name: "Crash Games",
      icon: "Zap",
      games: [
        "Aviator",
        "JetX",
        "Spaceman",
        "Mines",
        "Plinko",
        "Crash Rocket",
      ],
    },
    {
      name: "Table Games",
      icon: "Monitor",
      games: [
        "Sic Bo",
        "Pai Gow",
        "Casino War",
        "Red Dog",
        "Caribbean Stud",
        "Pontoon",
      ],
    },
    {
      name: "Lottery & Keno",
      icon: "Trophy",
      games: [
        "Keno Live",
        "Pick 3 Lottery",
        "Scratch Cards",
        "Lotto Pakistan",
        "Lucky Numbers",
        "Instant Win",
      ],
    },
    {
      name: "Arcade Games",
      icon: "Star",
      games: [
        "Candy Crush Slots",
        "Fruit Blast",
        "Coin Pusher",
        "Wheel of Fortune",
        "Golden Eggs",
        "Lucky Wheel",
      ],
    },
  ],

  faqs: [
    {
      question: "What is Rumi Slot Game?",
      answer:
        "Rumi Slot Game is Pakistan's fastest-growing real-money casino app with 100+ games across 9 categories. It offers instant JazzCash and Easypaisa withdrawals, a PKR 5,000 welcome bonus with no deposit required, and a VIP rewards program for loyal players.",
    },
    {
      question: "Is Rumi Slot APK safe to download?",
      answer:
        "Yes. The Rumi Slot APK v3.0.0 is scanned for malware before every release. It uses SSL encryption for all data transfers. Over 92,000 users have rated it 4.8/5. Download only from the official site rumislot.pk to ensure you get the authentic, virus-free APK.",
    },
    {
      question: "How do I get the PKR 5,000 welcome bonus?",
      answer:
        "The PKR 5,000 welcome bonus requires no deposit. Simply register a new account on Rumi Slot and the bonus is credited automatically. No promo code needed — it is available to all new users.",
    },
    {
      question: "How do I withdraw money from Rumi Slot?",
      answer:
        "Go to the Wallet section, tap Withdraw, enter the amount (minimum PKR 200), select JazzCash or Easypaisa, and enter your registered number. Withdrawals are processed within 5–15 minutes during business hours.",
    },
    {
      question: "Is Rumi Slot real or fake?",
      answer:
        "Rumi Slot is a real money gaming application rated 4.8/5 by 92,000+ users. Real withdrawal proofs and payment screenshots are available in our Withdrawal Proof section. The app pays out within minutes via JazzCash and Easypaisa.",
    },
    {
      question: "How many games does Rumi Slot have?",
      answer:
        "Rumi Slot v3.0.0 has 100+ games across 9 categories: Slot Games, Card Games, Live Casino, Sports Betting, Fishing Games, Crash Games, Table Games, Lottery & Keno, and Arcade Games. New games are added regularly.",
    },
    {
      question: "Does Rumi Slot work on iPhone?",
      answer:
        "Currently Rumi Slot is available as an Android APK (Android 5.0+). iOS support is planned. Android users can install the 43.7 MB APK directly without rooting their device.",
    },
    {
      question: "Can I install Rumi Slot on PC?",
      answer:
        "Yes. You can install Rumi Slot on PC using an Android emulator like BlueStacks or LDPlayer. Download the APK from rumislot.pk, import it into the emulator, and play on your computer with full functionality.",
    },
    {
      question: "What is the Rumi Slot VIP Program?",
      answer:
        "The VIP Program offers exclusive benefits for loyal players: higher weekly cashback (up to 20%), faster withdrawal processing, dedicated account managers, exclusive game access, and higher daily withdrawal limits.",
    },
    {
      question: "How do I earn money from Rumi Slot?",
      answer:
        "You can earn money through slot game winnings, sports betting, referral bonuses, daily spin rewards, live casino games, and the VIP cashback program. The referral program and daily bonuses provide consistent income without gambling risk.",
    },
  ],

  reviews: [
    {
      name: "Ali Hassan",
      initials: "AH",
      rating: 5,
      comment:
        "Maine Rumi Slot se pehle mahine mein PKR 15,000 nikale. JazzCash payment 10 minute mein aa gayi. Bahut acha app hai!",
      date: "April 10, 2026",
      location: "Lahore",
    },
    {
      name: "Fatima Malik",
      initials: "FM",
      rating: 5,
      comment:
        "Referral program se PKR 8,000 kamaye bina koi deposit kiye. Apne 40 doston ko refer kiya aur sab ne register kiya.",
      date: "April 8, 2026",
      location: "Karachi",
    },
    {
      name: "Muhammad Bilal",
      initials: "MB",
      rating: 4,
      comment:
        "App thoda slow hota hai purane phone par but games acha hain. Daily spin bonus roz milti hai. Easypaisa withdrawal fast hai.",
      date: "April 5, 2026",
      location: "Islamabad",
    },
    {
      name: "Zainab Qureshi",
      initials: "ZQ",
      rating: 5,
      comment:
        "Gates of Olympus mein PKR 50 se PKR 3,500 bana liye ek game session mein. Yaqeen nahi aya pehle but payment aayi!",
      date: "March 30, 2026",
      location: "Faisalabad",
    },
    {
      name: "Usman Tariq",
      initials: "UT",
      rating: 4,
      comment:
        "Customer support quick hai. Ek baar withdrawal pending thi, support ne 30 minute mein fix kar diya. Trustworthy platform.",
      date: "March 25, 2026",
      location: "Multan",
    },
    {
      name: "Sara Ahmed",
      initials: "SA",
      rating: 5,
      comment:
        "Pakistan mein best slots app hai. WordPress waali sites se 100x better experience. Smooth, fast, real payments.",
      date: "March 20, 2026",
      location: "Rawalpindi",
    },
  ],

  paymentMethods: ["JazzCash", "Easypaisa", "Bank Transfer", "UBL", "HBL", "MCB"],

  steps: {
    download: [
      {
        step: 1,
        title: "Open rumislot.pk",
        description: "Visit rumislot.pk on your Android phone's browser (Chrome recommended).",
      },
      {
        step: 2,
        title: "Tap Download APK",
        description: "Press the Download button. The Rumi Slot v3.0.0 APK (43.7 MB) will start downloading.",
      },
      {
        step: 3,
        title: "Allow Unknown Sources",
        description:
          'Go to Settings → Security → enable "Install from Unknown Sources" for your browser.',
      },
      {
        step: 4,
        title: "Install the APK",
        description: "Open your Downloads folder, tap the Rumi Slot APK file, and tap Install.",
      },
      {
        step: 5,
        title: "Register & Claim Bonus",
        description: "Open Rumi Slot, tap Sign Up, register your account, and claim your PKR 5,000 welcome bonus — no deposit needed.",
      },
    ],
    register: [
      {
        step: 1,
        title: "Open Rumi Slot App",
        description: "Launch the installed Rumi Slot app on your Android device.",
      },
      {
        step: 2,
        title: "Tap Sign Up",
        description: "On the welcome screen, tap the Sign Up / Register button.",
      },
      {
        step: 3,
        title: "Enter Mobile Number",
        description: "Type your Pakistani mobile number (JazzCash or Easypaisa number preferred).",
      },
      {
        step: 4,
        title: "Verify via OTP",
        description: "Enter the 6-digit OTP sent to your phone number within 60 seconds.",
      },
      {
        step: 5,
        title: "Set Password",
        description: "Create a strong password with at least 8 characters including a number.",
      },
      {
        step: 6,
        title: "Claim Welcome Bonus",
        description: "Your PKR 5,000 welcome bonus is automatically credited — no deposit required. Go to Promotions to check your balance.",
      },
    ],
    login: [
      {
        step: 1,
        title: "Open Rumi Slot",
        description: "Launch the Rumi Slot app on your phone.",
      },
      {
        step: 2,
        title: "Tap Login",
        description: "On the home screen, tap the Login button.",
      },
      {
        step: 3,
        title: "Enter Credentials",
        description: "Type your registered mobile number and password.",
      },
      {
        step: 4,
        title: "Complete CAPTCHA",
        description: "Complete the simple image CAPTCHA to verify you are human.",
      },
      {
        step: 5,
        title: "Access Your Account",
        description: "You are now logged in. Your wallet balance appears on the home screen.",
      },
    ],
    deposit: [
      {
        step: 1,
        title: "Tap Wallet",
        description: "From the home screen, tap the Wallet icon at the bottom of the app.",
      },
      {
        step: 2,
        title: "Select Deposit",
        description: "Tap the Deposit button and choose your payment method.",
      },
      {
        step: 3,
        title: "Enter Amount",
        description: "Enter the amount you wish to deposit (minimum PKR 50).",
      },
      {
        step: 4,
        title: "Complete Payment",
        description: "Follow the JazzCash or Easypaisa payment steps on your phone.",
      },
      {
        step: 5,
        title: "Confirm Credit",
        description: "Your deposit is credited instantly. Check your wallet balance.",
      },
    ],
    withdraw: [
      {
        step: 1,
        title: "Tap Wallet",
        description: "Go to the Wallet section from the app home screen.",
      },
      {
        step: 2,
        title: "Select Withdraw",
        description: "Tap Withdraw and select JazzCash or Easypaisa.",
      },
      {
        step: 3,
        title: "Enter Amount",
        description: "Enter the amount to withdraw (minimum PKR 200).",
      },
      {
        step: 4,
        title: "Confirm Mobile Number",
        description: "Verify your registered JazzCash or Easypaisa number is correct.",
      },
      {
        step: 5,
        title: "Receive Payment",
        description: "Payment is sent within 5–15 minutes. You receive an SMS confirmation.",
      },
    ],
  },

  pros: [
    "PKR 5,000 welcome bonus — no deposit required",
    "Instant withdrawals via JazzCash & Easypaisa",
    "100+ games across 9 categories",
    "Rated 4.8/5 by 92,000+ users",
    "VIP rewards program with exclusive benefits",
    "Works on all Android 5.0+ devices",
    "Daily free spins with no deposit required",
    "PC play via Android emulator supported",
    "Urdu language support",
    "24/7 customer support via WhatsApp",
  ],

  cons: [
    "Android only — no native iOS app yet",
    "Minimum withdrawal of PKR 200",
    "Some live games require stable internet",
    "VIP top tiers require consistent deposits",
  ],

  tips: [
    {
      icon: "Target",
      title: "Start With Free Spins",
      description:
        "Always use your daily free spin before depositing. It costs nothing and can win real cash.",
    },
    {
      icon: "TrendingUp",
      title: "Use the Referral Program",
      description:
        "Share your referral link on WhatsApp groups. PKR 200 per referral adds up fast.",
    },
    {
      icon: "Clock",
      title: "Deposit on Fridays",
      description: "Friday deposits get a 50% bonus. Time your top-ups for maximum value.",
    },
    {
      icon: "BookOpen",
      title: "Learn Each Game First",
      description: "Use demo mode to understand a game's mechanics before betting real money.",
    },
    {
      icon: "Wallet",
      title: "Set a Daily Budget",
      description:
        "Decide your maximum daily spend before you start. Responsible gaming protects your earnings.",
    },
    {
      icon: "Bell",
      title: "Enable Notifications",
      description:
        "Turn on app notifications to catch limited-time bonus events and tournament openings.",
    },
  ],

}
