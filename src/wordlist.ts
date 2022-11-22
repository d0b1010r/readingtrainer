export const words_raw = `si so so sa om mo ma is am im
sisi sasa sao siso sosi Sisi Mama Mimi Oma Sisi
um us su sa us mu mi ui im so
Susi Mua Ami Maus Susa so Susi Maus Susu Imu
ir ri ra ro ar or ur ru
riri rara roro ruru ruri rari romu rimu roma
rosa rosi roso rosu Rom Moor mir sar Mimi Ami
Rosi rosa Rom risa Siri Irmi arm am im Arm`;

export function convert_wordlist(words_raw: string): string[][] {
  return words_raw.split("\n").map((line) => line.split(" "));
}

export const wordlist = convert_wordlist(words_raw);
