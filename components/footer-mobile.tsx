"use client"
import { LimelightNav } from "@/components/ui/limelight-nav";
import { Home, Bookmark, PlusCircle, User, Settings } from 'lucide-react';

const customNavItems = [
  // Now includes 'href' for routing!
  { id: 'home', icon: <Home />, label: 'Home', onClick: () => console.log('Home Clicked!'), href: '/' },
  { id: 'profile', icon: <User />, label: 'Profile', onClick: () => console.log('Profile Clicked!'), href: '/about' },
  { id: 'bookmark', icon: <Bookmark />, label: 'Bookmarks', onClick: () => console.log('Bookmark Clicked!'), href: '/projects' },
  { id: 'add', icon: <PlusCircle />, label: 'Add New', onClick: () => console.log('Add Clicked!'), href: '/contact' },
  { id: 'settings', icon: <Settings />, label: 'Settings', onClick: () => console.log('Settings Clicked!'), href: '/settings' },
];

export default function FooterMobile() {
  return (
    // NOTE: For a mobile footer, you'll likely want to calculate the 'defaultActiveIndex' 
    // based on the current URL path to ensure the limelight is on the correct icon when the page loads.
    <LimelightNav
      className="bg-secondary dark:bg-card/50 dark:border-2"
      items={customNavItems}
    />
  );
};