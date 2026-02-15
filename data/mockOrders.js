export const mockOrders = [
  {
    id: 'TN-2023-8899',
    slug: 'tn-2023-8899',
    date: '15/10/2023',
    time: '10:00',
    status: 'completed',
    statusText: 'Hoàn thành',
    deliveryDate: '20/10/2023',
    deliveryTime: '14:30',
    total: '50.180.000₫',
    subtotal: '51.180.000₫',
    shippingFee: '50.000₫',
    shippingDiscount: '-50.000₫',
    discount: '-1.000.000₫',
    products: [
      {
        id: 1,
        name: 'iPhone 15 Pro Max',
        slug: 'iphone-15-pro-max',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-hfrOPiB0dKTm5y59-C9cQgNd7Oc1EOkmgKTUS-yqZ-xfPlb5O9L-xzXKOygYNu9BaYMu-f6bYrdTvVnOIQZV7UI3mkRRZ8bnhV_RoSwNCIwk_Ya1PyiUHms-dd1ICgX6fNHE71IgL9OSgOB_VyiGy96tgqu0P9D7vj3g3YkQXSf2TFaf5Lygt45sm9KgX1CskogTGCZMgR2xFf6vqgidBEqJPo1X1bvCLKhK_O3GtS4qhDZ0atcXUWDimLaoLHn8D6ECGy-OFNbH',
        quantity: 1,
        price: '44.990.000₫',
        variant: 'Màu sắc: Titan Tự nhiên | Dung lượng: 1TB'
      },
      {
        id: 2,
        name: 'AirPods Pro (Gen 2)',
        slug: 'airpods-pro-gen-2',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVzX39bj2D9tPsmIFR1E2Ic4tvnm2jkDm6LA3c1xQgMHplHh-m6ytJ1A3ygjkAvWMOaqsjRTJQlbYUDiXQ0yU_e2Qk6iF48xdUVqE_ErnDdya6Q7VfAl2fvcO7l5DYDo6AZiU5Z7--sm0m4HAuZx9DpEB5wUm9-JJkuDwAXydncTOCWLjEwMVOBX0gq_-V7-qgr9a6Il1E_K-SzP5tfJU98Irrlo0vuEMAtiNfk7po4aIQ2oz_jc_cx3ehlIFDaI3OxBoIrD2A8pAt',
        quantity: 1,
        price: '6.190.000₫',
        variant: 'Màu sắc: Trắng | MagSafe Charging'
      }
    ],
    additionalCount: 0,
    shippingAddress: {
      name: 'Nguyễn Văn A',
      phone: '(+84) 909 123 456',
      address: 'Toà nhà TechHub, Số 123 Đường Công Nghệ, Phường 4, Quận 1, TP. Hồ Chí Minh'
    },
    payment: {
      method: 'Thẻ tín dụng',
      cardType: 'VISA',
      cardLast4: '4242',
      paidDate: '15/10/2023'
    },
    timeline: [
      {
        status: 'ordered',
        icon: 'inventory_2',
        title: 'Đã đặt hàng',
        time: '10:00 15/10',
        completed: true
      },
      {
        status: 'paid',
        icon: 'credit_card',
        title: 'Đã thanh toán',
        time: '10:05 15/10',
        completed: true
      },
      {
        status: 'shipped',
        icon: 'local_shipping',
        title: 'Đã giao cho ĐVVC',
        time: '08:30 16/10',
        completed: true
      },
      {
        status: 'delivered',
        icon: 'check_circle',
        title: 'Giao hàng thành công',
        time: '14:30 20/10',
        completed: true
      }
    ]
  },
  {
    id: 'TN-2024-8892',
    slug: 'tn-2024-8892',
    date: '24/10/2024',
    time: '14:30',
    status: 'shipping',
    statusText: 'Đang giao',
    estimatedDelivery: '28/10/2024',
    total: '35.740.000₫',
    subtotal: '36.240.000₫',
    shippingFee: 'Miễn phí',
    discount: '-500.000₫',
    products: [
      {
        id: 1,
        name: 'iPhone 15 Pro Max - 256GB',
        slug: 'iphone-15-pro-max',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_JI1BYpnIAbycyqBJ1gVcBXS5YK_E9UPHV9EPwmMSKpEpAdy7iM4YUslDY1-AlZVDfXcftYgJDBUVNwZ42Nlft7mkLmWPJx2ctLNPVO3StTJKGjWq6aE2dv-TxRUV_aZ1qAuPbJDWdofVfTXfxVWArpRqMfqc0oU0ITLjtCuwlIcinPwYje9h6uuJ78WzxcWLQ7B4EHPImCNVzfofLn5VlXJ8E10YE3T8IOl5NI1IStkZH-kcjrgO9uxrWL_PkL9PAdDTemh9O8Cm',
        quantity: 1,
        price: '34.990.000₫',
        variant: 'Màu: Titan Tự Nhiên | Số lượng: 1'
      },
      {
        id: 2,
        name: 'Ốp lưng MagSafe TechNova',
        slug: 'op-lung-magsafe',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBDwl-0jMivDI7gQFwBh1136d_NAaef3mkDFX3bi_9v-kyDu2ckGGWvA2-ZvCfl_yF9FROUVeVBOo7eRM8DmKRy_e8846r3W1xuSTFn_ZPWwBw3v6IegzOb8WaOq8NmNIFA0RDKeX32RxiyROnYicdCd6MWQBc8-1sUCqCTRC3f5T1-h0CV8g8sVbwFzOZrYGMB_Bs7347v-kHuaixy2g4l6xTXI_JnKtZ4QsqmRfWCA_7ZVtZ94Egpvjp9pBvRt5-jtoTO6ePbFtNn',
        quantity: 1,
        price: '1.250.000₫',
        variant: 'Màu: Trong suốt | Số lượng: 1'
      }
    ],
    additionalCount: 0,
    shippingAddress: {
      name: 'Nguyễn Văn A',
      phone: '0987 *** 123',
      address: 'Tòa nhà Landmark 81, Vinhomes Central Park, 720A Điện Biên Phủ, Phường 22, Quận Bình Thạnh',
      city: 'TP. Hồ Chí Minh'
    },
    payment: {
      method: 'Thẻ tín dụng',
      cardType: 'VISA',
      cardLast4: '8892',
      paidDate: '24/10/2024'
    },
    tracking: {
      carrier: 'FastExpress',
      trackingNumber: 'VN88291002',
      currentLocation: 'Đang vận chuyển đến kho Quận 1',
      progress: 65
    },
    timeline: [
      {
        status: 'current',
        icon: 'local_shipping',
        title: 'Đang vận chuyển đến kho Quận 1',
        time: '26/10/2024 - 08:30 AM',
        description: 'Đơn hàng đang trên đường từ kho trung chuyển Thủ Đức.',
        completed: true,
        active: true
      },
      {
        status: 'departed',
        icon: 'check',
        title: 'Rời kho trung chuyển TechNova',
        time: '25/10/2024 - 18:45 PM',
        completed: true
      },
      {
        status: 'confirmed',
        icon: 'check',
        title: 'Đơn hàng đã được xác nhận',
        time: '24/10/2024 - 14:30 PM',
        completed: true
      }
    ]
  },
  {
    id: 'TN-39201',
    slug: 'tn-39201',
    date: '24/10/2023',
    time: '10:00',
    status: 'cancelled',
    statusText: 'Đã hủy',
    cancelledDate: '24/10/2023',
    cancelledTime: '14:00',
    total: '34.990.000₫',
    subtotal: '34.990.000₫',
    shippingFee: 'Miễn phí',
    discount: '-0₫',
    products: [
      {
        id: 1,
        name: 'iPhone 15 Pro Max - 256GB - Titan Tự Nhiên',
        slug: 'iphone-15-pro-max',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAq3M-o_k7EEixJPvJJC29yDPVIg4_Ze2XYU9WjqPRL0BRvWWJPssWPeScZj-FNz7xCnOoQCW_Ww904HfISsubO1TTIDW4f5hzCYg6qKyKlcPU5ZV_k5xA7P_s0rjsIOZDB1GODjspXDg0TXrJENam45uFhThg8BcrQbJ1VWLl2kfm_Ln1fuaNBJkGXhTsTDrd762B5ENUYJOouN9S39_im9ER-JQZXauF0GveWhubAMjXDrVgN4F4omf7z97PtOyFFwRTTfkVzvDOY',
        quantity: 1,
        price: '34.990.000₫',
        originalPrice: '36.990.000₫',
        variant: 'Màu sắc: Titan Tự Nhiên | Dung lượng: 256GB'
      }
    ],
    additionalCount: 0,
    cancelReason: 'Khách hàng thay đổi ý định.',
    refundTransaction: 'RF-882910',
    refundStatus: 'Đang hoàn tiền',
    shippingAddress: {
      name: 'Nguyễn Văn A',
      phone: '(+84) 909 123 456',
      address: '123 Đường Lê Lợi, Phường Bến Nghé, Quận 1, TP. Hồ Chí Minh'
    },
    payment: {
      method: 'Thẻ tín dụng/ghi nợ',
      cardType: 'VISA',
      cardLast4: '4242'
    },
    timeline: [
      {
        status: 'ordered',
        icon: 'check',
        title: 'Đặt hàng thành công',
        time: '10:00 24/10',
        completed: true
      },
      {
        status: 'confirmed',
        icon: 'check',
        title: 'Đã xác nhận',
        time: '10:30 24/10',
        completed: true
      },
      {
        status: 'cancelled',
        icon: 'close',
        title: 'Đã hủy đơn hàng',
        time: '14:00 24/10',
        completed: true,
        isCancelled: true
      },
      {
        status: 'shipping',
        icon: 'local_shipping',
        title: 'Đang giao hàng',
        completed: false,
        disabled: true
      }
    ]
  }
];
