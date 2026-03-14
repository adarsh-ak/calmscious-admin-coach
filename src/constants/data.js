export const STATS = [
  { id: "users",    label: "Total Users",      value: "96352", change: "+56 today",        positive: true  },
  { id: "coaches",  label: "Total Coaches",    value: "6543",  change: "+56 today",        positive: true  },
  { id: "sessions", label: "Total Sessions",   value: "4567",  change: "+5% this week",    positive: true  },
  { id: "today",    label: "Today's Sessions", value: "36",    change: "-5 than yesterday", positive: false },
];

export const UPCOMING_SESSIONS = [
  { id: 1, type: "Mental Health", coach: "Henery Joseph", date: "Wednesday, Feb 10 at 10:00 AM", link: "meet.google.com/ert-ert-khj", status: "Confirmed" },
  { id: 2, type: "Mental Health", coach: "Henery Joseph", date: "Wednesday, Feb 10 at 10:00 AM", link: "meet.google.com/ert-ert-khj", status: "Confirmed" },
  { id: 3, type: "Mental Health", coach: "Henery Joseph", date: "Wednesday, Feb 10 at 10:00 AM", link: "meet.google.com/ert-ert-khj", status: "Confirmed" },
];

export const RECENT_SESSIONS = [
  { id: 1, type: "Mental Health", patient: "Chaman Kumar", coach: "Henery Joseph", date: "Wednesday, Feb 10 at 10:00 AM", duration: "30 mins", status: "Completed", showActions: true  },
  { id: 2, type: "Mental Health", coach: "Henery Joseph",                          date: "Wednesday, Feb 10 at 10:00 AM",                       status: "Cancelled",  showActions: false },
  { id: 3, type: "Mental Health", patient: "Chaman Kumar", coach: "Henery Joseph", date: "Wednesday, Feb 10 at 10:00 AM", duration: "30 mins", status: "Completed", showActions: true  },
];

export const COACH_APPLICATIONS = [
  { id: 1, name: "Arsh Prabhat", role: "Mental Health Coach" },
  { id: 2, name: "Arsh Prabhat", role: "Mental Health Coach" },
];

export const COACHES = [
  { id: 1, name: "Sushila", role: "Meditation Coach", bg: "#a8cdd0" },
  { id: 2, name: "Hailey",  role: "Wellness Coach",   bg: "#b5c8a2" },
  { id: 3, name: "Grace",   role: "Meditation Coach", bg: "#a8cdd0" },
  { id: 4, name: "Harris",  role: "Wellness Coach",   bg: "#b5c8a2" },
];

export const NOTIFICATIONS = [
  { id: 1, title: "Session Starts in 1 hour", message: "Tighten your seatbelts for your journey", hasRemind: true  },
  { id: 2, title: "Session Starts in 1 hour", message: "Tighten your seatbelts for your journey", hasRemind: false },
];

export const QUALIFICATIONS = ["PhD", "Masters", "MBBS", "MD", "MSc Psychology", "BA Psychology"];

export const FOOTER = {
  explore:   ["About Us","Contact Us","Careers at Calmscious","Report a Problem","Therapist / Psychiatrist? Join Us","Online Psychiatric Consultation"],
  corporate: ["Corporate Mental Health Programs","Employee Assistance Program (EAP)","Campus Wellness Program","Best Psychologist Near Me","Best Clinical Psychologist Near Me","Best Marriage Counsellor Near Me"],
  therapy:   ["Relationship & Marriage Counseling","Stress & Anxiety Management","Depression Treatment","OCD (Obsessive Compulsive Disorder) Treatment","ADHD (Attention Deficit Hyperactivity Disorder)","PTSD (Post-Traumatic Stress Disorder)","Relationship & Marriage Counseling","Stress & Anxiety Management","Depression Treatment","OCD (Obsessive Compulsive Disorder) Treatment","ADHD (Attention Deficit Hyperactivity Disorder)","PTSD (Post-Traumatic Stress Disorder)"],
};
