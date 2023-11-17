type Links = {
  link: string;
  href: string;
}[];

export const links: Links = [
  { link: "home", href: "/" },
  { link: "blogs", href: "/blogs" },
  { link: "trends", href: "/trends" },
];

export const adminLinks: Links = [
  { link: "home", href: "/admin" },
  { link: "add post", href: "/admin/create-post" },
  { link: "categories", href: "/admin/categories" },
];
