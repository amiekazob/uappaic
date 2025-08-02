"use client"

import { useEffect, useState } from 'react';
import { SocialShare } from '@/components/ui/social-share';
import { useShareableUrl } from '@/components/ui/social-share';
import { SocialMediaAPI } from '@/lib/social-media-api';

interface CommitteeSocialShareProps {
  memberId: string;
  memberName: string;
  memberPosition: string;
  memberBio?: string;
}

export function CommitteeSocialShare({ 
  memberId, 
  memberName, 
  memberPosition, 
  memberBio 
}: CommitteeSocialShareProps) {
  const shareableUrl = useShareableUrl(`/committee/${memberId}`);
  const [shareContent, setShareContent] = useState<any>(null);

  useEffect(() => {
    const content = SocialMediaAPI.createEventShareContent({
      title: `${memberName} - ${memberPosition}`,
      description: memberBio || `Meet ${memberName}, ${memberPosition} at EEE UAP`,
      url: shareableUrl,
      date: new Date().toISOString(),
      location: 'UAP Campus',
      hashtags: ['#EEECommittee', '#UAP', '#Leadership', '#Faculty']
    });
    setShareContent(content);
  }, [shareableUrl, memberName, memberPosition, memberBio]);

  if (!shareContent) {
    return null;
  }

  return (
    <SocialShare 
      content={shareContent}
      className="mt-6"
    />
  );
}