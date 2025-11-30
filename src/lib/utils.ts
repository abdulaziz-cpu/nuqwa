export function getBaseUrl() {
    if (process.env.NEXT_PUBLIC_ROOT_DOMAIN) {
        return `https://${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`;
    }
    return 'http://localhost:3000';
}

export function getAppUrl() {
    if (process.env.NEXT_PUBLIC_ROOT_DOMAIN) {
        return `https://app.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`;
    }
    return 'http://app.localhost:3000';
}
