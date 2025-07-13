# News & Events Images

This folder contains images for news articles, events, conferences, and announcements.

## Usage

To import news and event images in your components:

```tsx
// Example: Import event image
import eventImage from '/images/news-events/conference-2024.jpg'

// Or use Next.js Image component
import Image from 'next/image'

<Image 
  src="/images/news-events/conference-2024.jpg" 
  alt="EEE Conference 2024"
  width={800}
  height={600}
/>
```

## File Naming Convention

- Use descriptive names with dates: `ieee-conference-2024-03-15.jpg`
- Use kebab-case for multi-word names
- Include event type and date when applicable
- Supported formats: `.jpg`, `.png`, `.webp`, `.svg`

## Folder Structure

You can organize images into subfolders by category or individual news items:

```
news-events/
├── conferences/
├── workshops/
├── seminars/
├── achievements/
├── announcements/
├── general-news/
├── tectron-2025/              # Individual news: UAP Hosted TechTron 2025
├── eee-participate-bitfest-2025/  # Individual news: EEE team at KUET Bitfest 2.0
└── IEEE-WIE-2024/             # Individual news: UAP EEE Team Became Champion
```

### Individual News Folders

Each news item has its own dedicated folder for storing related images:
- **tectron-2025/**: Images for "UAP Hosted TechTron 2025" event
- **eee-participate-bitfest-2025/**: Images for "EEE team at KUET Bitfest 2.0" event
- **IEEE-WIE-2024/**: Images for "UAP EEE Team Became Champion" event

Each folder contains a README.md with specific guidelines and event details.

## Examples

- `ieee-conference-2024.jpg`
- `student-achievement-award.png`
- `workshop-ai-robotics.jpg`
- `department-seminar-march.jpg`
- `graduation-ceremony-2024.jpg`