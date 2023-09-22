export const courses = [
    {
      id: 1,
      title: 'The Complete Flutter Development Bootcamp with Dart',
      category:'Flutter',
      rating:5,
      price: '$59.99',
      linkImg:
      'data:image/jpeg;base64,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'
    },
    {
      id: 2,
      title: 'The Complete 2023 Web Development Bootcamp',
      category:'Web Dev',
      rating:4,
      price: '$59.99',
      linkImg:
        'https://imgs.search.brave.com/ZkwGbElTOq8Zo7NeRU669-o016O6XSLJftZZ5I--HJg/rs:fit:750:422:1/g:ce/aHR0cHM6Ly9kaXNj/b3VudHNlcmllcy5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjAvMTEvMTAwLWRh/eXMtb2YtY29kZS10/aGUtY29tcGxldGUt/cHl0aG9uLXByby1i/b290Y2FtcC1mb3It/MjAyMi1jb3Vyc2Uu/anBn',
    },
    {
      id: 3,
      title: 'Learn Python: The Complete Python Programming Course',
      category:'Python',
      rating:4,
      price: '$59.99',
      linkImg:
        'https://imgs.search.brave.com/Nhj_cLAZOWcUjlnR8QMX8A02rX-2RYra9w-0j-B9Rbg/rs:fit:750:422:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2IxLzJi/L2NjL2IxMmJjYzA4/YmQ4YzlhOTFjMmM5/NjY3ZTM5NzE1NzA0/LmpwZw',
    },
    {
      id: 4,
      title: 'The Complete JavaScript Course 2023: From Zero to Expert!',
      category:'Javascript',
      rating:4,
      price: '$59.99',
      linkImg:
        'https://imgs.search.brave.com/ERyn_YUVTbB0slaulPioLMmU7Zto9A8aCA6OPptRZkI/rs:fit:768:432:1/g:ce/aHR0cHM6Ly9jb3Vy/c2Vjb3Vwb25jbHVi/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMS8wMy84NTE3/MTJfZmM2MV82LTc2/OHg0MzIuanBn',
    },
    {
      id: 5,
      title: 'Cuphead',
      category:'Flutter',
      rating:4,
      price: '$19.99',
      linkImg:
        'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/games/switch/c/cuphead-switch/hero?_a=AJADJWI0',
    },
    {
      id: 6,
      title: 'Minecraft',
      category:'Flutter',
      rating:4,
      price: '$29.99',
      linkImg:
        'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/games/switch/m/minecraft-switch/hero?_a=AJADJWI0',
    },
    {
      id: 7,
      title: 'Mario + Rabbids® Kingdom Battle',
      category:'Flutter',
      rating:4,
      price: '$59.99',
      linkImg:
        'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/games/switch/u/unravel-two-switch/hero?_a=AJADJWI0',
    },
    {
      id: 8,
      title: 'Unravel Two',
      category:'Flutter',
      rating:4,
      price: '$59.99',
      sale: 63,  
      linkImg:
        'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/games/switch/u/unravel-two-switch/hero?_a=AJADJWI0',
    },
  ];