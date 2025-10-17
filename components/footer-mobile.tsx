"use client"
import { LimelightNav } from "@/components/ui/limelight-nav";
import { Home, Bookmark, User, PhoneIcon } from 'lucide-react';

const customNavItems = [
  // Now includes 'href' for routing!
  { id: 'home', icon: <Home />, label: 'Home', onClick: () => console.log('Home Clicked!'), href: '/' },
  { id: 'profile', icon: <User />, label: 'Profile', onClick: () => console.log('Profile Clicked!'), href: '/about' },
  { id: 'bookmark', icon: <Bookmark />, label: 'Bookmarks', onClick: () => console.log('Bookmark Clicked!'), href: '/projects' },
  { id: 'add', icon: <PhoneIcon />, label: 'Add New', onClick: () => console.log('Add Clicked!'), href: '/contact' },
];

export default function FooterMobile() {
  return (
    <LimelightNav
      className="bg-secondary dark:bg-card/50 dark:border-2"
      items={customNavItems}
    />
  );
};