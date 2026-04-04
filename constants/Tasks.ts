export type TaskStatus = "Done" | "In Progress" | "To-do";

export type TaskIcon = {
  name: string;
  backgroundColor: string;
};

export type Task = {
  id: string;
  category: string;
  title: string;
  time: string;
  status: TaskStatus;
  icon: TaskIcon;
};

export const TASKS: Task[] = [
  {
    id: "1",
    category: "Grocery shopping app design",
    title: "Market Research",
    time: "10:00 AM",
    status: "Done",
    icon: { name: "checkmark-circle", backgroundColor: "#FF6B8A" },
  },
  {
    id: "2",
    category: "Grocery shopping app design",
    title: "Competitive Analysis",
    time: "12:00 PM",
    status: "In Progress",
    icon: { name: "time", backgroundColor: "#b86bff" },
  },
  {
    id: "3",
    category: "Uber Eats redesign challenge",
    title: "Create Low-fidelity Wireframe",
    time: "07:00 PM",
    status: "To-do",
    icon: { name: "bookmark", backgroundColor: "#4ADE80" },
  },
  {
    id: "4",
    category: "About design sprint",
    title: "How to pitch a Design Sprint",
    time: "09:00 PM",
    status: "To-do",
    icon: { name: "bookmark", backgroundColor: "#FBBF24" },
  },
  {
    id: "5",
    category: "AI in design",
    title: "AI tools for designers",
    time: "06:00 PM",
    status: "Done",
    icon: { name: "checkmark-circle", backgroundColor: "#1f46c5" },
  },
  {
    id: "6",
    category: "Fitness",
    title: "Morning Workout",
    time: "06:30 AM",
    status: "Done",
    icon: { name: "checkmark-circle", backgroundColor: "#22C55E" },
  },
  {
    id: "7",
    category: "Work",
    title: "Client Meeting",
    time: "11:00 AM",
    status: "In Progress",
    icon: { name: "time", backgroundColor: "#3B82F6" },
  },
  {
    id: "8",
    category: "Learning",
    title: "React Native Practice",
    time: "02:00 PM",
    status: "To-do",
    icon: { name: "book", backgroundColor: "#F97316" },
  },
  {
    id: "9",
    category: "Personal",
    title: "Call Family",
    time: "08:00 PM",
    status: "To-do",
    icon: { name: "call", backgroundColor: "#EF4444" },
  },
  {
    id: "10",
    category: "Shopping",
    title: "Buy Groceries",
    time: "05:00 PM",
    status: "Done",
    icon: { name: "cart", backgroundColor: "#10B981" },
  },
  {
    id: "11",
    category: "Project",
    title: "Fix UI Bugs",
    time: "03:30 PM",
    status: "In Progress",
    icon: { name: "construct", backgroundColor: "#6366F1" },
  },
  {
    id: "12",
    category: "Health",
    title: "Doctor Appointment",
    time: "04:30 PM",
    status: "To-do",
    icon: { name: "medkit", backgroundColor: "#F43F5E" },
  },
  {
    id: "13",
    category: "Finance",
    title: "Pay Electricity Bill",
    time: "07:30 PM",
    status: "To-do",
    icon: { name: "cash", backgroundColor: "#14B8A6" },
  },
  {
    id: "14",
    category: "Study",
    title: "Read System Design",
    time: "09:30 PM",
    status: "In Progress",
    icon: { name: "library", backgroundColor: "#8B5CF6" },
  },
  {
    id: "15",
    category: "Entertainment",
    title: "Watch Movie",
    time: "10:30 PM",
    status: "To-do",
    icon: { name: "film", backgroundColor: "#EC4899" },
  },
];

export const FILTER_OPTIONS = ["All", "To-do", "In Progress", "Done"] as const;

export type FilterOptions = (typeof FILTER_OPTIONS)[number];
