export type Announcement = {
  id: string
  title: string
  content: string
  date: string
  priority: 'high' | 'medium' | 'low'
  category: 'academic' | 'event' | 'general' | 'urgent'
  isActive: boolean
  expiryDate?: string
}

export const announcements: Announcement[] = [
  // Note: Press release content has been moved to press-release-data.ts
  // This file now contains only regular announcements and notices
]

// Helper function to get active announcements
export const getActiveAnnouncements = (): Announcement[] => {
  const now = new Date()
  return announcements.filter(announcement => {
    if (!announcement.isActive) return false
    if (announcement.expiryDate) {
      const expiryDate = new Date(announcement.expiryDate)
      return now <= expiryDate
    }
    return true
  })
}

// Helper function to get announcements by priority
export const getAnnouncementsByPriority = (priority: 'high' | 'medium' | 'low'): Announcement[] => {
  return getActiveAnnouncements().filter(announcement => announcement.priority === priority)
}

// Helper function to get announcements by category
export const getAnnouncementsByCategory = (category: 'academic' | 'event' | 'general' | 'urgent'): Announcement[] => {
  return getActiveAnnouncements().filter(announcement => announcement.category === category)
}