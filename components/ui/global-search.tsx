"use client"

import React, { useState, useEffect, useRef, useMemo } from 'react'
import { Search, X, FileText, Users, Calendar, BookOpen, Building } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { facultyMembers, type FacultyMember } from '@/lib/faculty-data'
import { publications, type Publication } from '@/lib/publications-data'
import { events, type Event } from '@/lib/events-data'
import { useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'

type SearchResult = {
  id: string
  title: string
  subtitle?: string
  description?: string
  category: 'faculty' | 'publications' | 'news' | 'events' | 'departments'
  url: string
  icon: React.ReactNode
}

const departments = [
  { id: 'eee', name: 'Electrical & Electronic Engineering', url: '/', description: 'Department of EEE' },
  { id: 'cse', name: 'Computer Science & Engineering', url: '/departments/cse', description: 'Department of CSE' },
  { id: 'civil', name: 'Civil Engineering', url: '/departments/civil', description: 'Department of Civil Engineering' },
]

interface GlobalSearchProps {
  isOpen: boolean
  onClose: () => void
}

export function GlobalSearch({ isOpen, onClose }: GlobalSearchProps) {
  const [query, setQuery] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  // Search functionality
  const searchResults = useMemo(() => {
    if (!query.trim()) return []

    const results: SearchResult[] = []
    const searchTerm = query.toLowerCase().trim()

    // Search faculty
    facultyMembers.forEach((faculty) => {
      if (
        faculty.name.toLowerCase().includes(searchTerm) ||
        faculty.title.toLowerCase().includes(searchTerm) ||
        faculty.role.toLowerCase().includes(searchTerm) ||
        faculty.researchInterests.some(interest => interest.toLowerCase().includes(searchTerm))
      ) {
        results.push({
          id: `faculty-${faculty.id}`,
          title: faculty.name,
          subtitle: faculty.title,
          description: faculty.bio.substring(0, 100) + '...',
          category: 'faculty',
          url: `/faculty/${faculty.id}`,
          icon: <Users className="w-4 h-4" />
        })
      }
    })

    // Search publications
    publications.forEach((pub) => {
      if (
        pub.title.toLowerCase().includes(searchTerm) ||
        pub.authors.some(author => author.toLowerCase().includes(searchTerm)) ||
        pub.journal.toLowerCase().includes(searchTerm) ||
        pub.abstract.toLowerCase().includes(searchTerm)
      ) {
        results.push({
          id: `publication-${pub.id}`,
          title: pub.title,
          subtitle: pub.journal,
          description: pub.abstract.substring(0, 100) + '...',
          category: 'publications',
          url: `/publications#${pub.id}`,
          icon: <FileText className="w-4 h-4" />
        })
      }
    })

    // Search events
    events.forEach((event) => {
      if (
        event.title.toLowerCase().includes(searchTerm) ||
        event.description.toLowerCase().includes(searchTerm)
      ) {
        results.push({
          id: `event-${event.id}`,
          title: event.title,
          subtitle: event.date.toLocaleDateString(),
          description: event.description.substring(0, 100) + '...',
          category: 'events',
          url: event.link,
          icon: <Calendar className="w-4 h-4" />
        })
      }
    })

    // Search departments
    departments.forEach((dept) => {
      if (
        dept.name.toLowerCase().includes(searchTerm) ||
        dept.description.toLowerCase().includes(searchTerm)
      ) {
        results.push({
          id: `department-${dept.id}`,
          title: dept.name,
          subtitle: 'Department',
          description: dept.description,
          category: 'departments',
          url: dept.url,
          icon: <Building className="w-4 h-4" />
        })
      }
    })

    return results.slice(0, 10) // Limit to 10 results
  }, [query])

  // Group results by category
  const groupedResults = useMemo(() => {
    const groups: Record<string, SearchResult[]> = {}
    searchResults.forEach((result) => {
      if (!groups[result.category]) {
        groups[result.category] = []
      }
      groups[result.category].push(result)
    })
    return groups
  }, [searchResults])

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return

      switch (e.key) {
        case 'Escape':
          onClose()
          break
        case 'ArrowDown':
          e.preventDefault()
          setSelectedIndex((prev) => 
            prev < searchResults.length - 1 ? prev + 1 : 0
          )
          break
        case 'ArrowUp':
          e.preventDefault()
          setSelectedIndex((prev) => 
            prev > 0 ? prev - 1 : searchResults.length - 1
          )
          break
        case 'Enter':
          e.preventDefault()
          if (searchResults[selectedIndex]) {
            handleResultClick(searchResults[selectedIndex])
          }
          break
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, searchResults, selectedIndex, onClose])

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  // Reset state when modal closes
  useEffect(() => {
    if (!isOpen) {
      setQuery('')
      setSelectedIndex(0)
    }
  }, [isOpen])

  const handleResultClick = (result: SearchResult) => {
    router.push(result.url)
    onClose()
  }

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'faculty': return 'Faculty'
      case 'publications': return 'Publications'
      case 'events': return 'Events'
      case 'departments': return 'Departments'
      default: return category
    }
  }

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity"
        onClick={onClose}
        style={{ opacity: isOpen ? 1 : 0 }}
      />
      
      {/* Modal */}
      <div 
        className={cn(
          "fixed inset-0 z-50 flex items-start justify-center pt-[15vh] px-4 transition-all duration-300",
          isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
        )}
      >
        <div className="w-full max-w-2xl bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden transform-gpu">
          {/* Search Input */}
          <div className="flex items-center px-5 py-3 border-b border-gray-100">
            <Search className="w-5 h-5 text-gray-400 mr-4" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Search faculty, publications, events, departments..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 text-base bg-transparent outline-none placeholder-gray-400"
            />
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="ml-2 -mr-2 p-1 h-8 w-8 rounded-full"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Results */}
          <div className="max-h-[60vh] overflow-y-auto">
            {query.trim() === '' ? (
              <div className="px-6 py-12 text-center text-gray-500">
                <Search className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                <p className="text-lg font-medium mb-2">Search UAP EEE</p>
                <p className="text-sm">Find faculty, publications, events, and more.</p>
              </div>
            ) : searchResults.length === 0 ? (
              <div className="px-6 py-12 text-center text-gray-500">
                <FileText className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                <p className="text-lg font-medium mb-2">No results found for "{query}"</p>
                <p className="text-sm">Try searching for something else.</p>
              </div>
            ) : (
              <div className="py-2">
                {Object.entries(groupedResults).map(([category, results]) => (
                  <div key={category} className="mb-2 last:mb-0">
                    <div className="px-5 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      {getCategoryLabel(category)}
                    </div>
                    <ul className="px-2">
                      {results.map((result, index) => {
                        const globalIndex = searchResults.indexOf(result);
                        return (
                          <li key={result.id}>
                            <button
                              onClick={() => handleResultClick(result)}
                              className={cn(
                                "w-full px-3 py-3 text-left rounded-lg transition-colors flex items-center space-x-4",
                                globalIndex === selectedIndex ? "bg-blue-50 text-blue-800" : "hover:bg-gray-50"
                              )}
                            >
                              <div className={cn(
                                "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center",
                                globalIndex === selectedIndex ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-500"
                              )}>
                                {result.icon}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="font-medium text-gray-800 truncate">
                                  {result.title}
                                </div>
                                {result.subtitle && (
                                  <div className="text-sm text-gray-500 truncate">
                                    {result.subtitle}
                                  </div>
                                )}
                              </div>
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {query.trim().length > 0 && searchResults.length > 0 && (
            <div className="px-5 py-2 border-t border-gray-100 bg-gray-50/80 text-xs text-gray-600 flex items-center justify-between">
              <div>
                {searchResults.length} {searchResults.length === 1 ? 'result' : 'results'}
              </div>
              <div className="flex items-center space-x-4">
                <span className="flex items-center">
                  <kbd className="px-1.5 py-0.5 bg-white border border-gray-200 rounded text-gray-600 text-[10px]">↑</kbd>
                  <kbd className="px-1.5 py-0.5 bg-white border border-gray-200 rounded text-gray-600 ml-1 text-[10px]">↓</kbd>
                  <span className="ml-2">Navigate</span>
                </span>
                <span className="flex items-center">
                  <kbd className="px-1.5 py-0.5 bg-white border border-gray-200 rounded text-gray-600 font-sans text-[10px]">Enter</kbd>
                  <span className="ml-2">Select</span>
                </span>
                <span className="flex items-center">
                  <kbd className="px-1.5 py-0.5 bg-white border border-gray-200 rounded text-gray-600 font-sans text-[10px]">Esc</kbd>
                  <span className="ml-2">Close</span>
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

// Hook for global keyboard shortcut
export function useGlobalSearch() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault()
        setIsOpen(true)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  return {
    isOpen,
    openSearch: () => setIsOpen(true),
    closeSearch: () => setIsOpen(false)
  }
}