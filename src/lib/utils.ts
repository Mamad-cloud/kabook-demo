export const formatCurrency = (amount: number) => {
    return amount.toLocaleString('fa-IR', {
        style: 'currency',
        currency: 'IRR',
    });
};

export const formatDateToLocal = (
    dateStr: string,
    locale: string = 'fa-IR',
) => {
    const date = new Date(dateStr);
    const options: Intl.DateTimeFormatOptions = {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
    };
    const formatter = new Intl.DateTimeFormat(locale, options);
    return formatter.format(date);
};

export const clamp = (val: number, min: number, max: number) => {
    return Math.min(Math.max(val, min), max)
} 

export const formatScore = (score: number ) => {
    return Math.floor(clamp(score, 1, 5)).toLocaleString('fa-IR')
}