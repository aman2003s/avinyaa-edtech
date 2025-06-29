export interface CalendarEvent {
  id: string;
  title: string;
  date: string;
  type: 'deadline' | 'exam' | 'holiday';
  color: string;
}

export interface TodoItem {
  id: string;
  text: string;
  completed: boolean;
}

export interface Announcement {
  id: string;
  title: string;
  description: string;
  timestamp: string;
  type: 'update' | 'new' | 'maintenance' | 'feature' | 'important';
  color: string;
}

export const calendarData: CalendarEvent[] = [
  {
    id: '1',
    title: 'Course Registration Deadline',
    date: 'Dec 15',
    type: 'deadline',
    color: 'blue'
  },
  {
    id: '2',
    title: 'Final Exam Week',
    date: 'Dec 20-24',
    type: 'exam',
    color: 'green'
  },
  {
    id: '3',
    title: 'Holiday Break',
    date: 'Dec 25-Jan 5',
    type: 'holiday',
    color: 'orange'
  }
];

export const todoData: TodoItem[] = [
  {
    id: '1',
    text: 'Complete Assignment 3',
    completed: false
  },
  {
    id: '2',
    text: 'Review Course Materials',
    completed: false
  },
  {
    id: '3',
    text: 'Submit Project Proposal',
    completed: true
  },
  {
    id: '4',
    text: 'Prepare for Final Exam',
    completed: false
  },
  {
    id: '5',
    text: 'Update Student Profile',
    completed: true
  }
];

export const announcementData: Announcement[] = [
  {
    id: '1',
    title: 'Course Schedule Update',
    description: 'Final exam dates have been updated. Please check your schedule.',
    timestamp: '2 hours ago',
    type: 'update',
    color: 'yellow'
  },
  {
    id: '2',
    title: 'New Course Available',
    description: 'Advanced Mathematics course is now open for registration.',
    timestamp: '1 day ago',
    type: 'new',
    color: 'blue'
  },
  {
    id: '3',
    title: 'System Maintenance',
    description: 'Platform will be unavailable from 2-4 AM for maintenance.',
    timestamp: '2 days ago',
    type: 'maintenance',
    color: 'green'
  },
  {
    id: '4',
    title: 'Student Portal Update',
    description: 'New features added to the student portal interface.',
    timestamp: '3 days ago',
    type: 'feature',
    color: 'purple'
  },
  {
    id: '5',
    title: 'Important Notice',
    description: 'Please complete your course evaluations by the end of the week.',
    timestamp: '1 week ago',
    type: 'important',
    color: 'red'
  }
]; 