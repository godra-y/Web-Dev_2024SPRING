export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  img: string;
  img2: string;
  url: string;
  rating: string;
  category: string;
  likes: number;
}

export const products = [
  {
    id: 1,
    name: 'IPhone 15 128Gb',
    price: 799,
    description: 'The Apple iPhone 15 is a smartphone that combines advanced optics, a powerful processor, a long-lasting battery and a memorable design.',
    img: "https://resources.cdn-kaspi.kz/img/m/p/h35/h29/84797162192926.jpg?format=gallery-medium",
    img2: "https://resources.cdn-kaspi.kz/img/m/p/h10/h74/84797162323998.jpg?format=gallery-medium",
    url: "https://kaspi.kz/shop/p/apple-iphone-15-256gb-dual-sim-rozovyi-115701533/?c=750000000",
    rating: "★ ★ ★ ★ ★ ",
    category: "Phones, gadgets",
    likes: 0
  },
  {
    id: 2,
    name: 'Electric kettle Smeg KLF03PKEU pink',
    price: 699,
    description: 'Fast, safe and reliable, Smeg kettles offer stainless steel body, a large 1.7 litres capacity and a cordless base. ',
    img: "https://resources.cdn-kaspi.kz/img/m/p/h86/h41/63760794746910.jpg?format=gallery-medium",
    img2: "https://resources.cdn-kaspi.kz/img/m/p/h90/hbd/63760795205662.jpg?format=gallery-medium",
    url: "https://kaspi.kz/shop/p/elektrochainik-smeg-klf03pkeu-rozovyi-6301569/?c=750000000",
    rating: "★ ★ ★ ★ ★ ",
    category: "Appliances",
    likes: 0
  },
  {
    id: 3,
    name: 'Polaris PVC 0826 Vacuum Cleaner Robot White, Pink',
    price: 299,
    description: ' The Best Robot Vacuums to Keep Your Home Clean ',
    img: "https://resources.cdn-kaspi.kz/img/m/p/h47/h1e/63886666596382.jpg?format=gallery-medium",
    img2: "https://resources.cdn-kaspi.kz/img/m/p/h59/hc2/63886669938718.jpg?format=gallery-medium",
    url: "https://kaspi.kz/shop/p/polaris-pvcr-0826-belyi-rozovyi-100174227/?c=750000000",
    rating: "★ ★ ★ ★ ★ ",
    category: "Appliances",
    likes: 0
  },
  {
    id: 4,
    name: 'Apple Earpods Max Headphones Pink',
    price: 299,
    description: 'The Apple Earpods Max Bluetooth headset will be able to completely change your idea of full-size headphones.',
    img: "https://resources.cdn-kaspi.kz/img/m/p/h5b/h11/64019769753630.jpg?format=gallery-medium",
    img2: "https://resources.cdn-kaspi.kz/img/m/p/h32/h72/64019772047390.jpg?format=gallery-medium",
    url: "https://kaspi.kz/shop/p/apple-airpods-max-rozovyi-101161561/?c=750000000",
    rating: "★ ★ ★ ★ ★ ",
    category: "Phones, gadgets",
    likes: 0
  },
  {
    id: 5,
    name: 'Dior Miss Dior perfume water EDP 30 ml',
    price: 299,
    description: 'This is a fragrance for women, it belongs to the chypre floral group.',
    img: "https://resources.cdn-kaspi.kz/img/m/p/h5a/h70/64392124465182.jpg?format=gallery-medium",
    img2: "https://resources.cdn-kaspi.kz/img/m/p/h09/h06/64392127217694.jpg?format=gallery-medium",
    url: "https://kaspi.kz/shop/p/dior-miss-dior-parfjumernaja-voda-edp-30-ml-103903564/?c=750000000",
    rating: "★ ★ ★ ★ ★ ",
    category: "Beauty and health",
    likes: 0
  },
  {
    id: 6,
    name: 'Dyson HS05 Longfuk Styler 1300 W',
    price: 299,
    description: 'It is quite possible to do professional styling yourself if you use a Dyson hair styler.',
    img: "https://resources.cdn-kaspi.kz/img/m/p/h54/h77/64655085240350.jpg?format=gallery-medium",
    img2: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h16/h1b/67104330809374/dyson-hs05-airwrap-complete-long-fen-shchetka-1300-w-104498649-1.jpg",
    url: "https://kaspi.kz/shop/p/dyson-hs05-longfuk-stailer-1300-w-106615919/?c=750000000",
    rating: "★ ★ ★ ★ ★ ",
    category: "Beauty and health",
    likes: 0
  },
  {
    id: 7,
    name: 'Logitech Pebble M350 Mouse Pink',
    price: 299,
    description: 'Minimalism, modern design and silent operation — these three concepts now characterize your workspace.',
    img: "https://resources.cdn-kaspi.kz/img/m/p/hf3/h6c/63858612731934.jpg?format=gallery-medium",
    img2: "https://resources.cdn-kaspi.kz/img/m/p/hb9/h7c/63858615484446.jpg?format=gallery-medium",
    url: "https://kaspi.kz/shop/p/logitech-pebble-m350-rozovyi-100370949/?c=750000000",
    rating: "★ ★ ★ ★ ★ ",
    category: "Computers",
    likes: 0
  },
  {
    id: 8,
    name: 'Smart speaker Yandex Station Light pink',
    price: 299,
    description: 'Yandex.Light Station is a bright and compact smart speaker that is controlled by voice and touch buttons.',
    img: "https://resources.cdn-kaspi.kz/img/m/p/h7e/h5d/63998724243486.jpg?format=gallery-medium",
    img2: "https://resources.cdn-kaspi.kz/img/m/p/he1/h00/63998727225374.jpg?format=gallery-medium",
    url: "https://kaspi.kz/shop/p/jandeks-stantsija-lait-rozovyi-102144561/?c=750000000",
    rating: "★ ★ ★ ★ ★ ",
    category: "Phones, gadgets",
    likes: 0
  },
  {
    id: 9,
    name: 'Fujifilm instax mini Instant Printing Camera 12 pink',
    price: 299,
    description: 'Vivid images with automatic exposure',
    img: "https://resources.cdn-kaspi.kz/img/m/p/hc3/hb9/70339826188318.jpg?format=gallery-medium",
    img2: "https://resources.cdn-kaspi.kz/img/m/p/h02/hf6/70339826450462.jpg?format=gallery-medium",
    url: "https://kaspi.kz/shop/p/fujifilm-instax-mini-12-rozovyi-109477187/?c=750000000",
    rating: "★ ★ ★ ★ ★ ",
    category: "Phones, gadgets",
    likes: 0
  },
  {
    id: 10,
    name: 'Smeg TSF01PKEU pink toaster',
    price: 299,
    description: 'Smeg toasters combine ergonomics, functionality and aesthetic balance.',
    img: "https://resources.cdn-kaspi.kz/img/m/p/h11/hb3/63780429430814.jpg?format=gallery-medium",
    img2: "https://resources.cdn-kaspi.kz/img/m/p/he4/h1e/63780430151710.jpg?format=gallery-medium",
    url: "https://kaspi.kz/shop/p/smeg-tsf01pkeu-rozovyi-11000157/?c=750000000",
    rating: "★ ★ ★ ★ ★ ",
    category: "Appliances",
    likes: 0
  },
  {
    id: 11,
    name: 'Smart Watch Apple Watch Series 9 GPS/M 41mm Pink',
    price: 399,
    description: 'The Apple Watch can help you track the steps taken and the calories burnt when you set your daily target.',
    img: "https://resources.cdn-kaspi.kz/img/m/p/h59/h79/83874219687966.png?format=gallery-medium",
    img2: "https://resources.cdn-kaspi.kz/img/m/p/hd3/h12/83874219753502.png?format=gallery-medium",
    url: "https://kaspi.kz/shop/p/apple-watch-series-9-gps-s-m-41-mm-rozovyi-113398187/?c=750000000",
    rating: "★ ★ ★ ★ ★ ",
    category: "Phones, gadgets",
    likes: 0
  },
  {
    id: 12,
    name: 'Fakir Fakir Stand Mixer pink',
    price: 280,
    description: 'Fakir Retroplex food processor comes with an anti-splash lid that prevents the splash of ingredients on your counter once you start the mixer.',
    img: "https://resources.cdn-kaspi.kz/img/m/p/he1/h92/64367934930974.jpg?format=gallery-medium",
    img2: "https://resources.cdn-kaspi.kz/img/m/p/h16/h48/64368008855582.jpg?format=gallery-medium",
    url: "https://kaspi.kz/shop/p/fakir-fakir-stand-mixer-rozovyi-103620138/?c=750000000",
    rating: "★ ★ ★ ★ ★ ",
    category: "Appliances",
    likes: 0
  },
  {
    id: 13,
    name: 'Apple iPad mini 2021 Wi-Fi Tablet 8.3 inch 4GB/64GB Pink',
    price: 300,
    description: 'The Liquid Retina display is 8.3 inches across the entire front panel.',
    img: "https://resources.cdn-kaspi.kz/img/m/p/h20/ha0/64320468844574.jpg?format=gallery-medium",
    img2: "https://resources.cdn-kaspi.kz/img/m/p/hcd/h17/64320477560862.jpg?format=gallery-medium",
    url: "https://kaspi.kz/shop/p/apple-ipad-mini-2021-wi-fi-8-3-djuim-4-gb-64-gb-rozovyi-102301468/?c=750000000",
    rating: "★ ★ ★ ★ ★ ",
    category: "Computers",
    likes: 0
  },
  {
    id: 14,
    name: 'Maxwell Smart L09 Air Humidifier Pink',
    price: 12,
    description: 'An elegant and stylish humidifier provides a constant flow of cooled water vapor, filling the air in the room with freshness.',
    img: "https://resources.cdn-kaspi.kz/img/m/p/h2a/h8d/64485829836830.jpg?format=gallery-medium",
    img2: "https://resources.cdn-kaspi.kz/img/m/p/hc9/he7/64485831737374.jpg?format=gallery-medium",
    url: "https://kaspi.kz/shop/p/uvlazhnitel-vozduha-maxmoll-smart-l09-rozovyi-106301248/?c=750000000",
    rating: "★ ★ ★ ★ ★ ",
    category: "Appliances",
    likes: 0
  },
  {
    id: 15,
    name: 'Makeup bag',
    price: 3,
    description: 'Women\'s cosmetic bag made of polyester',
    img: "https://resources.cdn-kaspi.kz/img/m/p/hd4/h2e/69543586725918.jpg?format=gallery-medium",
    img2: "https://resources.cdn-kaspi.kz/img/m/p/h99/hb6/69543588102174.jpg?format=gallery-medium",
    url: "https://kaspi.kz/shop/p/kosmetichka-poliester-10-5x17-sm-109126670/?c=750000000",
    rating: "★ ★ ★ ★ ★ ",
    category: "Beauty and health",
    likes: 0
  },
  {
    id: 16,
    name: 'Dior Backstage Rosy Glow Blush 001 Pink',
    price: 53,
    description: 'The iconic Rosy Glow blush with a new pure* formula that blends flawlessly with the skin, giving the cheeks an instant effect of healthy radiance.',
    img: "https://resources.cdn-kaspi.kz/img/m/p/hc4/h8a/82383084584990.jpg?format=gallery-medium",
    img2: "https://resources.cdn-kaspi.kz/img/m/p/hc4/h8a/82383084584990.jpg?format=gallery-medium",
    url: "https://kaspi.kz/shop/p/dior-backstage-rosy-glow-rumjana-001-pink-112217688/?c=750000000",
    rating: "★ ★ ★ ★ ★ ",
    category: "Beauty and health",
    likes: 0
  },
  {
    id: 17,
    name: 'KIKO 3D Hydra Lip gloss lip gloss pink 5',
    price: 20,
    description: 'The light, pleasant texture is absorbed into the lips, giving them softness and radiance. The formula contains a series extract, which has moisturizing properties.',
    img: "https://resources.cdn-kaspi.kz/img/m/p/h6d/h7f/63927986421790.jpg?format=gallery-medium",
    img2: "https://resources.cdn-kaspi.kz/img/m/p/ha6/he5/63927992090654.jpg?format=gallery-medium",
    url: "https://kaspi.kz/shop/p/kosmetichka-poliester-10-5x17-sm-109126670/?c=750000000",
    rating: "★ ★ ★ ★ ★ ",
    category: "Beauty and health",
    likes: 0
  },
  {
    id: 18,
    name: 'Hardshell Case for MacBook Pro 13 Pink',
    price: 6,
    description: 'Elegant Pink MacBook Hard Case ',
    img: "https://resources.cdn-kaspi.kz/img/m/p/h18/h4d/64366091272222.jpg?format=gallery-medium",
    img2: "https://resources.cdn-kaspi.kz/img/m/p/hb8/h21/64366105296926.jpg?format=gallery-medium",
    url: "https://kaspi.kz/shop/p/chehol-hardshell-case-macbook-pro-13-rozovyi-103189312/?c=750000000",
    rating: "★ ★ ★ ★ ",
    category: "Computers",
    likes: 0
  },
  {
    id: 19,
    name: 'Apple iPad Air 2022 Wi-Fi Tablet 10.9 inch 8GB/64GB Pink',
    price: 630,
    description: 'New iPad Air, now with the Apple M1 chip and in five gorgeous colors. ',
    img: "https://resources.cdn-kaspi.kz/img/m/p/h6c/hd0/64455447609374.jpg?format=gallery-medium",
    img2: "https://resources.cdn-kaspi.kz/img/m/p/h08/h85/64455449935902.jpg?format=gallery-medium",
    url: "https://kaspi.kz/shop/p/apple-ipad-air-2022-wi-fi-10-9-djuim-8-gb-64-gb-rozovyi-104235542/?c=750000000",
    rating: "★ ★ ★ ★ ★ ",
    category: "Computers",
    likes: 0
  },
  {
    id: 20,
    name: 'Apple iMac 24 2021 Monoblock 24M182SUX MOVA3 Pink',
    price: 2000,
    description: 'Screen diagonal: 23.5 inches. Screen resolution: 4480x2520. Screen matrix type: IPS. Screen coating type: glossy.',
    img: "https://resources.cdn-kaspi.kz/img/m/p/h3b/h9d/64557037420574.jpg?format=gallery-medium",
    img2: "https://resources.cdn-kaspi.kz/img/m/p/h12/h20/64557040304158.jpg?format=gallery-medium",
    url: "https://kaspi.kz/shop/p/apple-imac-24-2021-24m182sux-mjva3-rozovyi-101531334/?c=750000000",
    rating: "★ ★ ★ ★ ★ ",
    category: "Computers",
    likes: 0
  },
];
