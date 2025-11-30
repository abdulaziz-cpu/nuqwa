import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { auth } from './auth'; // Import auth helper

const locales = ['en', 'ar'];
const defaultLocale = 'en';

export const config = {
    matcher: [
        "/((?!api/|_next/|_static/|_vercel|[\\w-]+\\.\\w+).*)",
    ],
};

function getLocale(request: NextRequest) {
    const acceptLanguage = request.headers.get('accept-language');
    if (acceptLanguage?.includes('ar')) return 'ar';
    return defaultLocale;
}

export default auth((req) => {
    const url = req.nextUrl;
    const hostname = req.headers.get("host") || "";
    const isLoggedIn = !!req.auth;

    // 1. Locale Logic
    const pathname = url.pathname;
    const pathnameIsMissingLocale = locales.every(
        (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    );

    let locale = defaultLocale;
    if (pathnameIsMissingLocale) {
        locale = getLocale(req);
    } else {
        const segments = pathname.split('/');
        locale = segments[1];
    }

    const pathWithoutLocale = pathnameIsMissingLocale
        ? pathname
        : pathname.replace(`/${locale}`, '') || '/';

    const searchParams = url.searchParams.toString();
    const finalPath = `${pathWithoutLocale}${searchParams.length > 0 ? `?${searchParams}` : ""
        }`;

    // 2. Subdomain Logic
    let currentHost;
    if (process.env.NODE_ENV === "production") {
        const baseDomain = "nuqwa.com";
        if (hostname.endsWith(`.${baseDomain}`)) {
            currentHost = hostname.replace(`.${baseDomain}`, "");
        } else if (hostname === baseDomain) {
            currentHost = null;
        }
    } else {
        const parts = hostname.split(".");
        if (parts.length > 1 && parts[0] !== "localhost") {
            currentHost = parts[0];
        } else {
            currentHost = null;
        }
    }

    // 3. Auth Protection Logic
    // Protect 'app' (Platform) and 'admin' subdomains
    if ((currentHost === "app" || currentHost === "admin") && !isLoggedIn) {
        // Redirect to login if not authenticated
        // We might want to redirect to the public login page
        // For now, let's allow it to pass for testing, or redirect
        // return NextResponse.redirect(new URL(`/${locale}/login`, req.url));
    }

    // Rewrite Logic
    // Rewrite Logic
    if (currentHost === "app") {
        return NextResponse.rewrite(new URL(`/${locale}/platform${finalPath}`, req.url));
    }

    if (currentHost === "admin") {
        return NextResponse.rewrite(new URL(`/${locale}/admin${finalPath}`, req.url));
    }

    if (currentHost === "artists") {
        return NextResponse.rewrite(new URL(`/${locale}/micro-store${finalPath}`, req.url));
    }

    if (currentHost === "verify") {
        return NextResponse.rewrite(new URL(`/${locale}/verify${finalPath}`, req.url));
    }

    return NextResponse.rewrite(new URL(`/${locale}/public${finalPath}`, req.url));
})
