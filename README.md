# Hafta 10 React Ödevi - Ödeme Formu

Bu projede, **React** ve **Tailwind CSS** kullanarak bir ödeme formu geliştirilmiştir.  
Form, verilen görsele birebir uygun olarak tasarlanmıştır ve kullanıcıdan kredi kartı bilgilerini alır.

## 🚀 Özellikler
- **React useState hook** kullanılarak form verilerinin yönetimi
- Kullanıcıdan şu bilgiler alınır:
  - Kart Üzerindeki İsim
  - Kart Numarası
  - Ay (select ile 1-12 arası)
  - Yıl (içinde bulunduğumuz yıldan itibaren +5 yıl)
  - Güvenlik Kodu (CVV)
- "Şimdi Öde" butonuna tıklandığında form verileri `alert()` ile ekranda gösterilir
- Sayfa yenilenmeden form kontrolü yapılır
- **Tailwind CSS** ile görsele birebir uyumlu modern tasarım

## 🛠 Kullanılan Teknolojiler
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

## 📂 Proje Yapısı

Hafta1_Odev/
│── src/
│ ├── components/
│ │ └── Card.tsx
│ └── main.tsx
│── package.json
│── tailwind.config.js
│── README.md
