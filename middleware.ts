import { NextResponse } from 'next/server';

const excludedPaths: string[] = [
  `/_next/static`,
  `/badges`,
  `/fonts`,
  `/images`,
  `/icons`,
  `/img`,
  `/logos`,
  `/js`,
  `DPA.pdf`,
];

const Middleware = (req) => {
  const isExcludedPath = excludedPaths.findIndex((path) => req.nextUrl.pathname.includes(path)) !== -1;
  if (isExcludedPath) return NextResponse.next();
  if (req.nextUrl.pathname !== req.nextUrl.pathname.toLowerCase() || req.nextUrl.pathname.includes('%20')) {
    const url = req.nextUrl.clone();
    url.pathname = url.pathname.toLowerCase();
    return NextResponse.redirect(decodeURIComponent(url).replace(/\s/, '-'));
  }
  return NextResponse.next();
};

export default Middleware;
