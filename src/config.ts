export const SITE = {
  website: "https://astro-paper.pages.dev/", // replace this with your deployed domain
  author: "y3ll0weye",
  profile: "",
  desc: "ctf player for Queen's University's Qu4cks team. Here you can find my writeups, projects and whatever else comes to mind.",
  title: "y3ll0weye",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,
    text: "Suggest Changes",
    url: "https://github.com/satnaing/astro-paper/edit/main/",
  },
  dynamicOgImage: true,
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Bangkok", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
