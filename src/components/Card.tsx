import React, { useState } from "react";

interface FormData {
  name: string;
  cardNumber: string;
  month: string;
  year: string;
  cvv: string;
}

const Card: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 6 }, (_, i) => currentYear + i);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    cardNumber: "",
    month: "",
    year: "",
    cvv: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `Kart Üzerindeki İsim: ${formData.name}\n` +
        `Kart Numarası: ${formData.cardNumber}\n` +
        `Ay: ${formData.month}\n` +
        `Yıl: ${formData.year}\n` +
        `Güvenlik Kodu: ${formData.cvv}`
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[450px] border-2 border-gray-300 rounded-2xl p-6"
    >
      <h2 className="text-2xl font-semibold mb-1">Ödeme Bilgileri</h2>
      <p className="text-gray-500 text-sm mb-6">
        Kredi kartı bilgilerinizi giriniz
      </p>

      <label className="block text-lg mb-2">Kart Üzerindeki İsim</label>
      <input
        type="text"
        name="name"
        placeholder="Ahmet Yılmaz"
        value={formData.name}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-lg text-lg placeholder-black 
        focus:ring-2 focus:ring-black focus:outline-none mb-5"
      />

      <label className="block text-lg mb-2">Kart Numarası</label>
      <input
        type="text"
        name="cardNumber"
        placeholder="0000 0000 0000 0000"
        value={formData.cardNumber}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-lg text-lg placeholder-black 
        focus:ring-2 focus:ring-black focus:outline-none mb-6"
      />

      <div className="flex gap-6 mb-6">
        <div className="flex-1">
          <label className="block text-lg mb-2">Ay</label>
          <select
            name="month"
            value={formData.month}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:ring-2
             focus:ring-black focus:outline-none"
          >
            <option value="">AA</option>
            {[...Array(12)].map((_, i) => (
              <option key={i + 1} value={String(i + 1).padStart(2, "0")}>
                {String(i + 1).padStart(2, "0")}
              </option>
            ))}
          </select>
        </div>

        <div className="flex-1">
          <label className="block text-lg mb-2">Yıl</label>
          <select
            name="year"
            value={formData.year}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 
            focus:ring-black focus:outline-none"
          >
            <option value="">YY</option>
            {years.map((y) => (
              <option key={y} value={String(y)}>
                {y}
              </option>
            ))}
          </select>
        </div>

        <div className="flex-1">
          <label className="block text-lg mb-2">Güvenlik Kodu</label>
          <input
            type="text"
            name="cvv"
            placeholder="123"
            value={formData.cvv}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg placeholder-black 
            focus:ring-2 focus:ring-black focus:outline-none"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-black text-white py-3 rounded-lg text-lg 
        font-semibold hover:bg-gray-800 transition"
      >
        Şimdi Öde
      </button>
    </form>
  );
};

export default Card;
