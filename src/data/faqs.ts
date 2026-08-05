export type Faq = {
  q: string;
  a: string;
  // Optional testimonial video placeholder — a real student answering this
  // question in their own words. Swap `src` for the hosted video file once
  // filmed (e.g. "/videos/faq-is-it-safe.mp4") and it plays automatically.
  video?: { slug: string; label: string; src: string };
};

export const faqs: Faq[] = [
  {
    q: "Is BJJ safe? Am I going to get injured?",
    a: "BJJ is a contact sport, but it's a controlled one when taught properly — and it's widely considered one of the safest combat sports because there's no striking. From your very first session you're taught how to tap out, how to fall safely, and how to respect a partner's limits, so nobody is thrown into hard sparring on day one. Most beginner niggles are mild — think mat burn or a tight muscle — rather than anything serious.",
    video: { slug: "is-it-safe", label: "A student on: is it safe?", src: "" },
  },
  {
    q: "Am I too old to start BJJ?",
    a: "No — it's genuinely never too late. We have members starting in their 30s, 40s, 50s and beyond. BJJ is built around leverage, timing and technique rather than raw athleticism, which is exactly why it works for older beginners and smaller practitioners. Your coach will scale intensity and partners to suit you, so you progress at a pace that's right for your body.",
    video: { slug: "too-old", label: "A student on: am I too old?", src: "" },
  },
  { q: "Do I need any experience to start?", a: "None at all. Our beginner and foundations classes are specifically designed for people with zero experience. Everyone starts somewhere — and our coaches make sure your first class is welcoming, safe, and fun." },
  {
    q: "Do I need to be fit to start?",
    a: "Not at all. Many of our members started with no fitness background. BJJ itself will get you fit — training builds strength, flexibility and cardio over time, scaled to your current level so you're always challenged but never overwhelmed.",
    video: { slug: "fitness", label: "A student on: do I need to be fit?", src: "" },
  },
  {
    q: "What happens in my first class? Will I have to spar?",
    a: "Your first class starts with a warm-up, then you'll be walked through core movements — things like hip escapes and rolling — before learning a technique or two step by step with a partner. You won't be thrown into full sparring on day one; beginners ease in gradually as their confidence and understanding of positions grows.",
    video: { slug: "first-class", label: "A student on: my first class", src: "" },
  },
  { q: "How often should I train as a beginner?", a: "Two to three sessions a week is the sweet spot for beginners — enough to build momentum and retain what you're learning, without burning out. Consistency matters far more than talent, so a realistic, sustainable schedule will always beat trying to do too much too soon." },
  { q: "What should I wear to my first class?", a: "Just wear comfortable gym clothes — shorts and a t-shirt are perfect. You don't need a gi or any special equipment for your free trial. We'll let you know what to get once you decide to join." },
  { q: "Do I need a mouthguard or any other equipment?", a: "For your free trial, just come in gym kit — nothing to buy in advance. Once you're training regularly we'd recommend a mouthguard, and if you move into Gi classes you'll need a kimono. We can point you toward the right gear and sizing once you're ready." },
  { q: "How quickly will I progress, and how long until my next belt?", a: "Progress depends on how often you train and your individual goals. Our gamified coaching method is specifically designed to accelerate learning — most students notice significant improvement within their first few months. Belt promotions in BJJ are earned, not timed, but as a rough guide most consistent students reach blue belt within one to two years of regular training." },
  { q: "How much does membership cost?", a: "We offer flexible monthly membership options for adults starting at £65, kids £55, and families (discounts available). Get in touch via the form below or hit the WhatsApp button and we'll walk you through the packages." },
  {
    q: "Is it safe for children?",
    a: "Absolutely. BJJ is considered one of the safest martial arts for kids. Because it focuses on grappling and ground control with zero striking, it avoids the traumatic head impacts common in other combat and team sports. Our kids programme for ages 5–15 is coached by qualified, DBS-checked instructors in a fully supervised environment.",
    video: { slug: "kids-safety", label: "A parent on: is it safe for kids?", src: "" },
  },
  { q: "Can I try before committing to a membership?", a: "Yes — we offer a completely free trial class with no obligation. Just fill out the form below and we'll book you in. Come and see the facility, meet the coaches, and experience a class before making any decision." },
  {
    q: "Do you run classes for women only?",
    a: "Yes! With one of the largest Women's teams in the UK with over 45 members, we run women only classes led by female coaches on a weekly basis. Get in touch and we'll organise everything to get you training with the biggest and best Women's Team around!",
    video: { slug: "women-only", label: "A student on: our Women's Team", src: "" },
  },
  { q: "Will I have to train with men?", a: "Not if you'd rather not — our Women's Only classes give you a space to learn at your own pace alongside other women, led by female coaches. Many of our women members also train in our mixed classes once they're comfortable, and find that training with a range of partners, including men, is respectful, safe and genuinely helpful for their development, since it forces better technique over relying on strength." },
  { q: "What is the difference between Gi & NoGi?", a: "In BJJ, \"Gi\" and \"No-Gi\" refer to the two main styles of grappling. The Gi is the traditional kimono-like uniform, allowing grips on clothing for a slower, more strategic game. No-Gi is played in form-fitting athletic gear, relying on body grips and athleticism, with submissions often focused on wrestling and leg attacks." },
  { q: "What is lineage and is it important?", a: "Lineage in BJJ is generally a very good thing. It acts as a verifiable chain of promotions tracing back to Brazil and the founding fathers of the art, helping prevent fraud and connecting you to the history and core values of Brazilian Jiu-Jitsu." },
  { q: "How does this compare to activities like football tots or rugby tots?", a: "Most kids' activity clubs run one session a week and focus on a great first introduction to a specific sport — which is great, but different. Guildford Jiu Jitsu gives your child up to 4 classes a week from £55/month, working out far cheaper per session than single-weekly-class activities, while building resilience, physical confidence, and real self-defence skills. Plus, we make sure that they are always active, always progressing and always having FUN!" },
];
