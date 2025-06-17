"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu, Mountain } from "lucide-react"

export function Navbar() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 p-3">
      <div className="w-full flex h-14 items-center justify-between">
        {/* Logo on the left */}
        <Link href="/" className="flex items-center space-x-2">
          <Mountain className="h-6 w-6" />
          <span className="font-bold sm:inline-block">{siteConfig.name}</span>
        </Link>

        {/* Navigation on the right - desktop */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="flex">
            <NavigationMenuItem className="relative">
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(navigationMenuTriggerStyle(), {
                    "bg-accent": pathname === "/",
                  })}
                >
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="relative">
              <NavigationMenuTrigger>Admission</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="flex flex-col w-[250px] gap-3 p-4">
                  <ListItem href="/bsc-in-eee" title="BSc in EEE">
                    Bachelor of Science in Electrical and Electronic Engineering.
                  </ListItem>
                  <ListItem href="/msc-in-eee" title="MSc in EEE">
                    Master of Science in Electrical and Electronic Engineering.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem className="relative">
              <Link href="/faculty" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(navigationMenuTriggerStyle(), {
                    "bg-accent": pathname === "/faculty",
                  })}
                >
                  Faculty
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="relative">
              <Link href="/publications" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(navigationMenuTriggerStyle(), {
                    "bg-accent": pathname === "/publications",
                  })}
                >
                  Publications
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="relative">
              <NavigationMenuTrigger>News and Events</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="flex flex-col w-[250px] gap-3 p-4">
                  <ListItem href="/news" title="News">
                    Latest news and updates from the department.
                  </ListItem>
                  <ListItem href="/events" title="Upcoming Events">
                    Stay informed about our upcoming events.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem className="relative">
              <NavigationMenuTrigger>Campus Life</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="flex flex-col w-[250px] gap-3 p-4">
                  <ListItem href="/clubs" title="Clubs">
                    Explore student clubs and organizations.
                  </ListItem>
                  <ListItem href="/organizations" title="Organizations">
                    Join student-led organizations and communities.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem className="relative">
              <Link href="/alumni" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(navigationMenuTriggerStyle(), {
                    "bg-accent": pathname === "/alumni",
                  })}
                >
                  Alumni
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="relative">
              <Link href="/more" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(navigationMenuTriggerStyle(), {
                    "bg-accent": pathname === "/more",
                  })}
                >
                  More
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile menu button */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <Link href="/" className="flex items-center mb-6">
              <Mountain className="h-6 w-6" />
              <span className="ml-2 font-bold">{siteConfig.name}</span>
            </Link>
            <div className="grid gap-4 py-2">
              <Link
                href="/"
                className={cn("flex w-full items-center py-2 text-lg font-semibold", {
                  "text-primary": pathname === "/",
                })}
              >
                Home
              </Link>
              <div className="flex flex-col space-y-2">
                <p className="text-lg font-semibold">Admission</p>
                <Link
                  href="/bsc-in-eee"
                  className={cn("pl-4", { "text-primary": pathname === "/bsc-in-eee" })}
                >
                  BSc in EEE
                </Link>
                <Link
                  href="/msc-in-eee"
                  className={cn("pl-4", { "text-primary": pathname === "/msc-in-eee" })}
                >
                  MSc in EEE
                </Link>
              </div>
              <Link
                href="/faculty"
                className={cn("flex w-full items-center py-2 text-lg font-semibold", {
                  "text-primary": pathname === "/faculty",
                })}
              >
                Faculty
              </Link>
              <Link
                href="/publications"
                className={cn("flex w-full items-center py-2 text-lg font-semibold", {
                  "text-primary": pathname === "/publications",
                })}
              >
                Publications
              </Link>
              <div className="flex flex-col space-y-2">
                <p className="text-lg font-semibold">News and Events</p>
                <Link href="/news" className={cn("pl-4", { "text-primary": pathname === "/news" })}>
                  News
                </Link>
                <Link href="/events" className={cn("pl-4", { "text-primary": pathname === "/events" })}>
                  Upcoming Events
                </Link>
              </div>
              <div className="flex flex-col space-y-2">
                <p className="text-lg font-semibold">Campus Life</p>
                <Link href="/clubs" className={cn("pl-4", { "text-primary": pathname === "/clubs" })}>
                  Clubs
                </Link>
                <Link href="/organizations" className={cn("pl-4", { "text-primary": pathname === "/organizations" })}>
                  Organizations
                </Link>
              </div>
              <Link
                href="/alumni"
                className={cn("flex w-full items-center py-2 text-lg font-semibold", {
                  "text-primary": pathname === "/alumni",
                })}
              >
                Alumni
              </Link>
              <Link
                href="/more"
                className={cn("flex w-full items-center py-2 text-lg font-semibold", {
                  "text-primary": pathname === "/more",
                })}
              >
                More
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  }
)
ListItem.displayName = "ListItem" 