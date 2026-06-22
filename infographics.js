// Infographics index for The GuideWire
//
// To add a new infographic:
//   1. Drop a self-contained HTML file (or folder with index.html) anywhere
//      under /Desktop/soleintellwebsitev4/, e.g. "my_new_infographic/index.html".
//   2. Add a new entry to the array below. The card will appear automatically
//      under the matching category on the home page.
//
// Required fields: title, description, category, url
// Optional fields: kicker, date (YYYY-MM-DD), thumbnail (path to image)
//
// Category IDs must match the section IDs in index.html:
//   "ai-tutorials"      -> AI Tutorials
//   "politics-culture"  -> Podiatry Politics & Culture
//   "student-resident"  -> Student/Resident Education
//
// Paths should be RELATIVE (no leading "/") so they work when opening
// index.html directly (file://) and when hosted.

window.INFOGRAPHICS = [
  {
    title: "History of Podiatry",
    description: "A visual walk through where the profession came from and how it grew into what it is today.",
    kicker: "Timeline",
    category: "student-resident",
    url: "history_index.html",
    date: "2025-04-13",
    thumbnail: "Sole Intelligence Images/history.png"
  },
  {
    title: "Feet & Film",
    description: "Podiatry on screen — a cultural look at how feet have shown up in film and what that tells us about the profession's image.",
    kicker: "Culture",
    category: "politics-culture",
    url: "podiatry_in_media_index.html",
    date: "2025-04-27",
    thumbnail: "Sole Intelligence Images/popmedia.png"
  },
  {
    title: "The DPM Comeback",
    description: "A bento-style overview of where podiatry sits today and the case for what's next.",
    kicker: "Profession",
    category: "politics-culture",
    url: "ao_index.html",
    date: "2025-05-04",
    thumbnail: "Sole Intelligence Images/ao.png"
  },
  {
    title: "Handwritten Notes to AI Infographic",
    description: "Start building your digital brain by converting all those paper notes into something actually useful.",
    kicker: "AI How To",
    category: "ai-tutorials",
    url: "how_to_infographics.html",
    date: "2025-05-11",
    thumbnail: "Sole Intelligence Images/infographics.png"
  },
  {
    title: "Posterolateral Talus OCDs",
    description: "Very rare - often asymptomatic. But if it's not...surgical approach is tricky.",
    kicker: "Timeline",
    category: "student-resident",
    url: "posterolateral_ocd.html",
    date: "2025-05-16",
    thumbnail: "Sole Intelligence Images/posterolateral_ocd.png"
  },
  {
    title: "AI Powered Board Study",
    description: "How to use NotebookLM to become an ACTIVE learner, and how to use Claude if you're brave enough to try.",
    kicker: "AI How To",
    category: "ai-tutorials",
    url: "boardstudy.html",
    date: "2025-05-26",
    thumbnail: "Sole Intelligence Images/boardstudy.png"
  },
  {
    title: "Diabetic Foot Bill - Student Edition",
    description: "Why students should care about advocacy now. An infographic example of how I use AI to explain complex topics to myself.",
    kicker: "Profession",
    category: "politics-culture",
    url: "diabeticfootbillstudents.html",
    date: "2025-06-01",
    thumbnail: "Sole Intelligence Images/diabeticfootbillstudents.png"
  },
  {
    title: "Diabetic Foot Bill - Resident Edition",
    description: "A higher register version for those who are interested. An example of how you can easily change AI output's intended audience.",
    kicker: "Profession",
    category: "politics-culture",
    url: "diabeticfootbillresidents.html",
    date: "2025-06-01",
    thumbnail: "Sole Intelligence Images/diabeticfootbill.png"
  },
  {
    title: "CPT Appendix S",
    description: "AI as a billable service",
    kicker: "Timeline",
    category: "student-resident",
    url: "appendix_s.html",
    date: "2025-06-22",
    thumbnail: "Sole Intelligence Images/appendix_s.png"
  }
]
