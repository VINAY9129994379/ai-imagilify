"use client"
import { navLinks } from '@/constants';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { Button } from './ui/button';

const Sidebar = () => {
    const pathname = usePathname(); 

    return (
        <aside className="sidebar">
            <div>
                <Link href="/" className="sidebar-logo">
                    <Image src="/assets/images/logo-text.svg" alt="logo" width={180} height={28} />
                </Link>

                <SignedIn>
                    <ul>
                        {navLinks.slice(0,6).map((link) => {
                            const isActive = link.route === pathname; 
                            return (
                                <li
                                    key={link.route} 
                                    className={`sidebar-nav_element group ${
                                        isActive ? 'bg-purple-400 text-white' : 'text-gray-700'
                                    }`}
                                >
                                    <Link className="sidebar-link" href={link.route}>
                                        <Image
                                            src={link.icon}
                                            alt={link.label}
                                            width={24}
                                            height={24}
                                            className={`${isActive && 'brightness-200'}`}
                                        />
                                        {link.label}
                                    </Link>
                                </li>
                            );
                        })}
                        </ul>


                       <ul  className='sidebar-nav_elements'>

                       {navLinks.slice(6).map((link) => {
                            const isActive = link.route === pathname; 
                            return (
                                <li
                                    key={link.route} 
                                    className={`sidebar-nav_element group ${
                                        isActive ? 'bg-purple-400 text-white' : 'text-gray-700'
                                    }`}
                                >
                                    <Link className="sidebar-link" href={link.route}>
                                        <Image
                                            src={link.icon}
                                            alt={link.label}
                                            width={24}
                                            height={24}
                                            className={`${isActive && 'brightness-200'}`}
                                        />
                                        {link.label}
                                    </Link>
                                </li>
                            );
                        })}

                        <li className='flex-center cursor-pointer gap-2 p-4'>
                            <UserButton afterSwitchSessionUrl='/' showName />

                        </li>
                    </ul>
                </SignedIn>

                <SignedOut>
                    <Button asChild className='button bg-purple-400 bg-cover'>
                        <Link href='/sign-in'>
                        Login</Link>

                    </Button>
                </SignedOut>

            </div>
        </aside>
    );
};

export default Sidebar;
