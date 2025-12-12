import { ChatStep, Photo } from "../types";

export const photoAlbum: Photo[] = [
  { url: "/foto1.jpg", alt: "Foto Kenangan 1" },
  { url: "/foto2.jpg", alt: "Momen Spesial 2" },
  { url: "/foto3.jpg", alt: "Kita di Sini 3" },
  { url: "/foto4.jpg", alt: "Senyum Manis 4" },
  { url: "/foto5.jpg", alt: "Foto Kenangan 5" },
];

export const chatScript: ChatStep[] = [
  { text: "Hey, pretty girl.", sender: "me", choices: ["Heyy", "Hai juga, cakep 😗"] },
  { text: "Ciee hari ini tambah tuwir... Happy Birthday ya 🎉", sender: "me", choices: ["Makasih yaa 😭", "Ih kok ingett sih?"] },
  { text: "Gua pasti inget lah. Semoga lu selalu dalam keadaan baik, bahagia, dan semua yang lu mau kejadian. Semoga kita bisa ketemu lagi.", sender: "me", choices: ["Aamiin, makasih banyak 🥺", "Kamu juga ya, semoga hari kamu bagus"] },
  { text: "Oiya, gua ada hadiah kecil buat lu. Mau liat?", sender: "me", choices: ["Mauu bangetttt", "Apa nih?"] },
  { text: "Gua harap ini buat lu senyum sih. Or maybe you'll like it.", sender: "me", choices: ["Coba liat...", "Manaaaaa"] },
  { text: "Oke... Happy Birthday once again. I love you, thanks for existing.", sender: "me", choices: ["🥺❤️", "Makasih... kamu bikin hari aku lebih bagus"] }
];