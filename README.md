# BiomiraMed - Sağlık Teknolojileri Web Sitesi

Modern, premium bir sağlık teknolojileri web sitesi. Next.js, TypeScript ve Tailwind CSS kullanılarak geliştirilmiştir.

## Özellikler

- **Modern Tasarım**: Minimalist, ferah ve kullanıcı odaklı arayüz
- **Responsive**: Tüm cihazlarda mükemmel görünüm
- **Performans**: Next.js ile optimize edilmiş hızlı yükleme
- **Animasyonlar**: Smooth micro-interactions ve hover efektleri
- **SEO Optimized**: Arama motorları için optimize edilmiş

## Teknolojiler

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Modern icon library

## Kurulum

1. Bağımlılıkları yükleyin:

```bash
npm install
```

2. Geliştirme sunucusunu başlatın:

```bash
npm run dev
```

3. Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresini açın.

## Proje Yapısı

```
├── app/
│   ├── globals.css          # Global stiller
│   ├── layout.tsx           # Ana layout
│   └── page.tsx             # Ana sayfa
├── components/
│   ├── Header.tsx           # Navigasyon
│   ├── Hero.tsx             # Hero bölümü
│   ├── Services.tsx         # Hizmetler
│   ├── About.tsx            # Hakkımızda
│   ├── WhyChooseUs.tsx      # Neden BiomiraMed
│   ├── Testimonials.tsx     # Müşteri görüşleri
│   ├── Blog.tsx             # Blog & haberler
│   ├── Contact.tsx          # İletişim formu
│   └── Footer.tsx           # Footer
├── tailwind.config.js       # Tailwind konfigürasyonu
└── package.json
```

## Renk Paleti

- **Primary**: Turkuaz (#0E7C7B)
- **Accent**: Turuncu (#FF9F1C)
- **Background**: Beyaz ve soft gri tonları
- **Text**: Koyu gri tonları

## Özelleştirme

### Renkler

`tailwind.config.js` dosyasından renk paletini özelleştirebilirsiniz.

### Animasyonlar

Tüm animasyonlar Tailwind CSS ile tanımlanmıştır ve `globals.css` dosyasında özelleştirilebilir.

### İçerik

Bileşenlerdeki statik içerikleri kendi verilerinizle değiştirebilirsiniz.

## Deployment

### Vercel (Önerilen)

```bash
npm run build
```

### Diğer Platformlar

```bash
npm run build
npm start
```

## Lisans

Bu proje MIT lisansı altında lisanslanmıştır.
