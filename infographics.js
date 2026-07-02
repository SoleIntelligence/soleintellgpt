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
  },
  {
    title: "Leave the Matches at Home",
    description: "It's harder to build a bridge than to burn one.",
    kicker: "Profession",
    category: "politics-culture",
    url: "leave-the-matches-at-home.html",
    date: "2025-06-15",
    thumbnail: "Sole Intelligence Images/leave-the-matches-at-home.png"
  },

  // ===== Added from the "New things to add to website" batch =====

  // ---- AI Tutorials ----
  {
    title: "GEO Ate SEO",
    description: "Generative-engine optimization is rewiring how patients find you. How it differs from SEO — and what the hype gets dead wrong.",
    kicker: "AI How To",
    category: "ai-tutorials",
    url: "GEO_how_to.html",
    date: "2026-06-24",
    thumbnail: "Sole Intelligence Images/GEO_how_to.png"
  },
  {
    title: "AI Literacy Is a Clinical Skill",
    description: "The real risk isn't a machine taking your job — it's trusting an AI output you can't verify. Why AI literacy now belongs in the clinical skillset.",
    kicker: "AI in Practice",
    category: "ai-tutorials",
    url: "Irresponsible.html",
    date: "2026-05-24",
    thumbnail: "Sole Intelligence Images/irresponsible.png"
  },
  {
    title: "The Deskilling Turn",
    description: "2026 is the year clinicians started naming AI skill-erosion out loud. The fix isn't less AI — it's treating AI as a competency.",
    kicker: "AI in Practice",
    category: "ai-tutorials",
    url: "deskilling.html",
    date: "2026-06-11",
    thumbnail: "Sole Intelligence Images/deskilling.png"
  },

  // ---- Student & Resident Education ----
  {
    title: "The Second MTPJ Problem",
    description: "A surgical-atlas teaching brief on the lesser MTPJ — from cutting it out to saving it.",
    kicker: "Surgical Atlas",
    category: "student-resident",
    url: "2ndmpj.html",
    date: "2026-06-11",
    thumbnail: "Sole Intelligence Images/2ndmpj.png"
  },
  {
    title: "The Lapidus Procedure",
    description: "First-ray stabilization by arthrodesis of the first TMT joint — indications, technique, and correction principles.",
    kicker: "Surgical Atlas",
    category: "student-resident",
    url: "lapidus.html",
    date: "2026-04-04",
    thumbnail: "Sole Intelligence Images/lapidus.png"
  },
  {
    title: "How Deep Should You Microfracture?",
    description: "What the literature actually says about awl depth, plate violation, and when to escalate.",
    kicker: "Surgical Pearls",
    category: "student-resident",
    url: "microfx.html",
    date: "2026-05-19",
    thumbnail: "Sole Intelligence Images/microfx.png"
  },
  {
    title: "Plate Function: Start With the Force",
    description: "The plate isn't the construct — the force it neutralizes is. Four fixation modes, matched to the failure pattern.",
    kicker: "Field Notes",
    category: "student-resident",
    url: "plating.html",
    date: "2026-04-29",
    thumbnail: "Sole Intelligence Images/plating.png"
  },
  {
    title: "TMT Slippage",
    description: "Classroom notes on distal osteotomy failure modes — the post-op subluxation nobody named until recently.",
    kicker: "Classroom Notes",
    category: "student-resident",
    url: "tmt_slippage.html",
    date: "2026-05-16",
    thumbnail: "Sole Intelligence Images/tmt_slippage.png"
  },
  {
    title: "The Quiet Rise of DMMO",
    description: "A burr, no fixation, weight-bearing on day one. How one minimally invasive osteotomy reshaped the metatarsalgia conversation.",
    kicker: "Surgical Technique",
    category: "student-resident",
    url: "dmmo.html",
    date: "2026-05-05",
    thumbnail: "Sole Intelligence Images/dmmo.png"
  },
  {
    title: "History of the APMA",
    description: "A century of standing on its own two feet — the organizational story of American podiatry, 1895 to today.",
    kicker: "History",
    category: "student-resident",
    url: "apma_history.html",
    date: "2026-04-04",
    thumbnail: "Sole Intelligence Images/apma_history.png"
  },

  // ---- Podiatry Politics & Culture ----
  {
    title: "July 1 is the Best Day to Come to the Hospital",
    description: "The new doctors just started. The data says no one dies more in July. The joke we tell new doctors still does damage.",
    kicker: "CULTURAL CONDEMNATION",
    category: "politics-culture",
    url: "july_effect.html",
    date: "2026-07-01",
    thumbnail: "Sole Intelligence Images/july_effect.png"
  },
  {
    title: "Who Gets to Accredit Podiatry?",
    description: "A neutral, both-sides explainer of the debate over moving podiatric residencies from CPME to ACGME accreditation.",
    kicker: "Accreditation",
    category: "politics-culture",
    url: "acgme.html",
    date: "2026-06-24",
    thumbnail: "Sole Intelligence Images/acgme.png"
  },
  {
    title: "The One Accreditor Question",
    description: "Should podiatric residency move under the ACGME? The honest answer is a single disagreement that decides everything else.",
    kicker: "Accreditation",
    category: "politics-culture",
    url: "one_accreditor.html",
    date: "2026-06-11",
    thumbnail: "Sole Intelligence Images/one_accreditor.png"
  },
  {
    title: "War Room: ACGME Scenario Planning",
    description: "A consequence-analysis matrix for the ACGME accreditation transition, built for podiatric surgery residents.",
    kicker: "Scenario Planning",
    category: "politics-culture",
    url: "warroom.html",
    date: "2026-04-04",
    thumbnail: "Sole Intelligence Images/warroom.png"
  },
  {
    title: "The One Board Question",
    description: "Two competing boards, fifty years of parallel certification, a stalled unification effort — and a profession still divided.",
    kicker: "Certification",
    category: "politics-culture",
    url: "one_board.html",
    date: "2026-05-05",
    thumbnail: "Sole Intelligence Images/one_board.png"
  },
  {
    title: "The Two Board Dilemma",
    description: "ABFAS vs. ABPM: how podiatry became one of the only doctoral professions with two separate certifying boards.",
    kicker: "Certification",
    category: "politics-culture",
    url: "twoboards.html",
    date: "2026-04-04",
    thumbnail: "Sole Intelligence Images/twoboards.png"
  },
  {
    title: "2026 APMA House of Delegates",
    description: "An official outcomes brief on the 2026 HOD — what passed, what it means, and why the next generation should care.",
    kicker: "Governance",
    category: "politics-culture",
    url: "hod.html",
    date: "2026-04-04",
    thumbnail: "Sole Intelligence Images/hod.png"
  },
  {
    title: "30 Years of the House of Delegates",
    description: "100 presidents, five major themes, and the pivotal votes that shaped APMA governance from 1996 to today.",
    kicker: "Governance",
    category: "politics-culture",
    url: "HOD_hx.html",
    date: "2026-04-04",
    thumbnail: "Sole Intelligence Images/HOD_hx.png"
  },
  {
    title: "The APMA Corporate Council",
    description: "Six companies just got a seat at the APMA table. Who's in the room, what they sell, and what residents should watch for.",
    kicker: "Profession",
    category: "politics-culture",
    url: "corporate.html",
    date: "2026-05-22",
    thumbnail: "Sole Intelligence Images/corporate.png"
  },
  {
    title: "The Ledger",
    description: "Industry built modern podiatric surgery — and bent it. A data-first reckoning with partnership and its price.",
    kicker: "Industry",
    category: "politics-culture",
    url: "industry.html",
    date: "2026-05-05",
    thumbnail: "Sole Intelligence Images/industry.png"
  },
  {
    title: "The Skin Substitute Debacle",
    description: "A forty-fold spending spike, a billion-dollar fraud sentence, and the Medicare rate cut that blew up a business model.",
    kicker: "Policy",
    category: "politics-culture",
    url: "skinsubs.html",
    date: "2026-05-05",
    thumbnail: "Sole Intelligence Images/skinsubs.png"
  },
  {
    title: "A Compact of Their Own",
    description: "Podiatry finally gets an interstate licensure compact — and why most residents won't qualify on day one.",
    kicker: "Licensure",
    category: "politics-culture",
    url: "ipmic.html",
    date: "2026-05-17",
    thumbnail: "Sole Intelligence Images/ipmic.png"
  },
  {
    title: "Fellowship Inflation",
    description: "A profession quietly built a second residency — and forgot to write the rules. A dossier on fellowship architecture.",
    kicker: "Training",
    category: "politics-culture",
    url: "fellowship.html",
    date: "2026-05-05",
    thumbnail: "Sole Intelligence Images/fellowship.png"
  },
  {
    title: "Fellowship: Tool or Badge?",
    description: "What r/Podiatry actually thinks about the extra training year — and the narrow cases where it still pays off.",
    kicker: "Training",
    category: "politics-culture",
    url: "fellowship_roi.html",
    date: "2026-05-21",
    thumbnail: "Sole Intelligence Images/fellowship_roi.png"
  },
  {
    title: "The False Tradeoff",
    description: "The recruitment debate assumes quality and quantity are opposites. They're both downstream of the same unsolved problem.",
    kicker: "Profession",
    category: "politics-culture",
    url: "student_recruitment.html",
    date: "2026-05-05",
    thumbnail: "Sole Intelligence Images/student_recruitment.png"
  },
  {
    title: "Podiatry at a Crossroads",
    description: "Enrollment pressure, board wars, and a credentialing crisis — what brewed below the surface from 2015 to 2025.",
    kicker: "Profession",
    category: "politics-culture",
    url: "crossroads.html",
    date: "2026-04-04",
    thumbnail: "Sole Intelligence Images/crossroads.png"
  },
  {
    title: "AMA · AOA · APMA",
    description: "A triangular history of organized medicine's three houses — and where podiatry fits in the structure.",
    kicker: "History",
    category: "politics-culture",
    url: "orgs.html",
    date: "2026-04-04",
    thumbnail: "Sole Intelligence Images/orgs.png"
  },
  {
    title: "What SDN Said",
    description: "A decade of anonymous attendings, residents, and pre-pods on Student Doctor Network — podiatry's forum era, reviewed.",
    kicker: "Culture",
    category: "politics-culture",
    url: "sdn.html",
    date: "2026-04-04",
    thumbnail: "Sole Intelligence Images/sdn.png"
  },
  {
    title: "The Bomb & The Model",
    description: "A comparative cultural dossier on how the rhetoric and existential stakes of the nuclear age echo in the age of AI.",
    kicker: "Cultural Dossier",
    category: "politics-culture",
    url: "nuclear.html",
    date: "2026-05-05",
    thumbnail: "Sole Intelligence Images/nuclear.png"
  },
  {
    title: "The Diabetic Foot Bill — Video",
    description: "A short NotebookLM video on the Diabetic Foot Bill I advocated for on Capitol Hill.",
    kicker: "Video",
    category: "politics-culture",
    url: "Sole Intelligence Images/diabetesbill.mp4",
    date: "2026-06-18",
    thumbnail: "Sole Intelligence Images/diabeticfootbill.png"
  },

  // ===== Standalone pages not previously featured =====

  // ---- AI Tutorials ----
  {
    title: "Lawful Access",
    description: "The AI copyright lawsuits look like chaos — but for a resident the practical rules are older and shorter than the headlines suggest.",
    kicker: "AI & the Law",
    category: "ai-tutorials",
    url: "Lawful Access.html",
    date: "2026-06-11",
    thumbnail: "Sole Intelligence Images/Lawful_access.png"
  },
  {
    title: "The Ethical Weight of AI",
    description: "Five questions every healthcare professional should be able to answer about who owns AI, how it was built, and what it costs the planet.",
    kicker: "Ethics & Policy",
    category: "ai-tutorials",
    url: "ai_ethics.html",
    date: "2026-05-21",
    thumbnail: "Sole Intelligence Images/ai_ethics.png"
  },

  // ---- Podiatry Politics & Culture ----
  {
    title: "The Clawback",
    description: "Podiatry won a pay bump for 2026. A 1989 Medicare budget-neutrality rule is built to quietly take it back — and a bipartisan bill wants to loosen the screws.",
    kicker: "Policy",
    category: "politics-culture",
    url: "clawback.html",
    date: "2026-06-02",
    thumbnail: "Sole Intelligence Images/clawback.png"
  },
  {
    title: "The eAdvocacy Action Center",
    description: "You don't have to wait until you're an attending to shape the profession. How residents and students can weigh in on the policy that defines their future practice.",
    kicker: "Advocacy",
    category: "politics-culture",
    url: "e_advocacy.html",
    date: "2026-05-01",
    thumbnail: "Sole Intelligence Images/e_advocacy.png"
  }
]
