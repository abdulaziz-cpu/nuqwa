import 'server-only';

const dictionaries = {
    en: () => import('../../dictionaries/en').then((module) => module.en),
    ar: () => import('../../dictionaries/ar').then((module) => module.ar),
};

export const getDictionary = async (locale: string) => {
    if (locale === 'ar') return dictionaries.ar();
    return dictionaries.en();
};
