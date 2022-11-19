export const words_raw = `si so so sa mo ma am im
sisi sasa sao siso sosi Sisi Mama Mimi Oma Sisi
um us su sa mu mi ui im
Susi Mua Ami Maus Susa so Susi Maus Susu Imu`;

export function convert_wordlist(words_raw: string): string[][] {
    return words_raw.split('\n').map(line => line.split(' '));
}

export const wordlist = convert_wordlist(words_raw);