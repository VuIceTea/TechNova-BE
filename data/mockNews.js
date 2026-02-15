const newsList = [
    {
        id: 1,
        category: "TIN NỔI BẬT",
        title: "Tương lai của Gaming: Khi phần cứng bắt kịp trí tưởng tượng",
        excerpt: "Khám phá cách các công nghệ mới như Ray Tracing thế hệ 3 và AI Upscaling đang xóa nhòa ranh giới giữa thực và ảo, mang lại trải nghiệm chưa từng có.",
        thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuDXbh60jHZvzg6UwD2IFYgIpkxIMSjxP_Caqq29k-YF7FAQVTIvRmtS_PqXvN_R1bjYay4sSFo6P2QhhIo774NarY-3jpToaHXO_noLW1BWjYTtxAktJI5YMTsdr8Znigw2UYVgxTexKwlm7ZQeSEZFOsfkCjpOjJWy4ILtMnsq4a7fc2bZeGQOnUID035WaDg2P0o2eRLEFplIS_P5DY29ITq6W28jTjTM3OZJl5F5pSEjbaVQDqTQG_pKlO3WvnNapE5DGQH8T2_M",
        readTime: "10 phút đọc",
        publishedAt: "2026-01-20T00:00:00",
        slug: "tuong-lai-cua-gaming",
        isFeatured: true,
        author: {
            name: "Alex Tech",
            avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVx4TGHtN_anbqxyteOpmZ0ks3pqX12-KcXU52sfWXvvY-T1CaJBNFZaCw_UyE-pum_bQ9OrzsP9iR16-kIDlFOeANyYlkLWTOorpkAxjjFwLxmMQT5QwqTMG-iLqY1jzlxcwbGTIH6g8rKRIp0itdTjfhnncgpG8PjHEHmGtnsMJftFO1HXLh4iaIeDFjcIz2OGO-T-UvMVevjJUcqHL1GnF6veZBNGaue64QqbHyF5TwCsx60iI-C5ployxiRWGnkZ6e4ukURcF2",
            role: "Biên tập viên cấp cao"
        },
        content: `
            <p class="text-xl text-white font-display leading-relaxed mb-6">
                Sau nhiều tháng chờ đợi và hàng loạt tin đồn rò rỉ, cuối cùng chúng tôi cũng đã có trên tay chiếc card đồ họa được mong chờ nhất thập kỷ. RTX 5090 không chỉ là một bản nâng cấp, nó là một bước nhảy vọt về công nghệ.
            </p>
            <h3 class="text-2xl font-bold text-white mt-8 mb-4 font-display">Hiệu năng vượt trội</h3>
            <p class="mb-4">
                Trong các bài kiểm tra benchmark đầu tiên, RTX 5090 cho thấy sức mạnh xử lý vượt trội so với người tiền nhiệm RTX 4090 tới 45%. Điều này nhờ vào kiến trúc Blackwell mới, tối ưu hóa luồng xử lý đa nhân và công nghệ AI DLSS 4.0 được tích hợp sâu vào phần cứng.
            </p>
            <p class="mb-6">
                Chúng tôi đã thử nghiệm với Cyberpunk 2077 ở chế độ cài đặt tối đa, bao gồm cả Path Tracing. Kết quả thật kinh ngạc: tốc độ khung hình ổn định ở mức 120fps tại độ phân giải 4K mà không cần bất kỳ sự thỏa hiệp nào về chất lượng hình ảnh.
            </p>
            <h3 class="text-2xl font-bold text-white mt-8 mb-4 font-display">Thiết kế và Tản nhiệt</h3>
            <p class="mb-4">
                Mặc dù hiệu năng tăng vọt, nhưng NVIDIA đã làm rất tốt việc kiểm soát nhiệt độ. Hệ thống tản nhiệt mới với buồng hơi (vapor chamber) lớn hơn và quạt công nghệ mới giúp card hoạt động êm ái đáng ngạc nhiên.
            </p>
            <blockquote class="pl-4 border-l-4 border-primary italic text-lg text-white my-6 bg-primary/5 p-4 rounded-r-lg">
                "RTX 5090 định nghĩa lại giới hạn của đồ họa máy tính cá nhân. Nó không chỉ là card đồ họa, nó là cánh cửa dẫn đến tương lai của Metaverse."
            </blockquote>
            <p>
                Tổng kết lại, nếu bạn là một người đam mê công nghệ và muốn trải nghiệm những gì tốt nhất mà ngành công nghiệp game có thể mang lại, RTX 5090 là một khoản đầu tư xứng đáng.
            </p>
        `,
        tags: ["NVIDIA", "RTX5090", "GamingGear", "PCBuild"],
        comments: [
            {
                id: 1,
                author: "Minh Tuấn",
                avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuD85-taMlqTVreluLeJXlakSsn2FnuMgVriVWlLbzkti13tKBnFXvvsLUu7SiWKep4GLTKJRejyfHGeAV71RE0SGkDnh8BrpIjuDnMzz50lFTQWacM6UCi30684Dvunnc02ocZ2Ev3yHIF7esrt1a8ObJiFnIZPo__qEhRGKPNsU6BSKuHMCa6OHZp-jmvPZB3kBBFRq_EzN6JESx5Rya0nbAeIgE54uehp1YHHj6QnHorEXw6DZ7Kg0cmrh4oai9_IELVM3RLY4yLo",
                content: "Giá này hơi chát nhưng nhìn hiệu năng thì cũng đáng đồng tiền bát gạo. Chắc phải tích lúa từ giờ thôi!",
                time: "2 giờ trước",
                likes: 5
            },
            {
                id: 2,
                author: "Sarah Nguyễn",
                avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuA-24m6S640w_7CTUsw2-S5pUdjdrfCQdaj-k8gJCKGCseHGmFUbMaEPzLujHaHK_4kRdu09vqEnSet-O7eA8jPQSuGnbnlNVnBT4lg4y7VUyXIoEORbRqD1Ou8SKfHR6qsLHv9fB-t3rIeAhuRuonWbLLk9UPhC_zswjGkvu-KsEGJozV6MoMLOsE6UZNYNlbGmbXpqkXGLwBqL-PI-8co0Nz8Zi1Dyp8kfls3NE1tR6SMG8vnQu1M-QR1lexYewiRPaqT0eq1Wap5",
                content: "Bài viết rất chi tiết, cảm ơn TechNova. Mình đang dùng 3080, không biết có nên nâng cấp lên con này không hay chờ dòng 5080 nhỉ?",
                time: "5 giờ trước",
                likes: 3
            }
        ]
    },
    {
        id: 2,
        category: "CÔNG NGHỆ AI",
        title: "Chip AI thế hệ mới: Kỷ nguyên của điện toán cá nhân đã đến?",
        excerpt: "Khám phá cách các vi xử lý tích hợp NPU đang thay đổi cách chúng ta tương tác với máy tính hàng ngày.",
        thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuAkD2vKvngG7NZg2ea7cfhTrD3GToaY1ccX3vJ9aYmTkNVFNds-UuQ2GJ8ZGLivsBDp-dsiGnIKWbogYIZyPRmSiAx_07dAI3b8CwuN6qVod-GBd7GjKWpVkyFeAqSQcO6-42mxX53DmVGvG9iKOn7vMlwbFxzSNXj8yR_q71nEfuMtcHzmK_Pe5BJdGxe6HMu_6evtAFsbe-nYbfgFsZBiS-M7IHBbOdLNC19rr6n49IuqgK58Ix7CFonz2YQ0abeKhlPFVE49M12j",
        readTime: "5 phút đọc",
        publishedAt: "2026-01-19T22:00:00",
        slug: "chip-ai-the-he-moi",
        author: {
            name: "Tech Reviewer",
            avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6o67Ly1AgS0poU0eLiVzIFy5WAB_grJaKlMZERYvp1WwgbhRJDEV91K_LVTMXkbM9_cUH_odgYuDvK6vGZKALWXmDNqjtrG1kS4c263KGZEUPs8574GI31WMnDKloOtXNfGdk8zaKMowHQCvW9SHSX0wk1h9yN5HagvQ8Ui4ihCu_yMDSehIFbACjuW482U_L-pWTZaIvLAlDOMRfP4BoQzgBMJrF1bb7ARW5wPi-OKlfT2TTh5FiULePjkmsNl2mjjAszo5FAIS7",
            role: "Chuyên gia phần cứng"
        },
        content: "<p>Chip AI đang thay đổi cách chúng ta sử dụng máy tính...</p>",
        tags: ["AI", "Chip", "NPU", "Technology"],
        comments: []
    },
    {
        id: 3,
        category: "THỰC TẾ ẢO",
        title: "Review kính VR Vision Pro 2: Đáng tiền hay chỉ là cường điệu?",
        excerpt: "Trải nghiệm thực tế sau 1 tuần sử dụng thiết bị VR mới nhất, liệu nó có thay thế được màn hình truyền thống?",
        thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuAtrc9U3EHj_i9WSS7Wf3aX7RaGUrfAJJ6ok3IZkOLgrQ08rMnys6a-OIU_eCk8VrgZRfSmLS1AquQqHCGQN18QKFhIkIdOvGOqnqvcxjed6J-Q1RH49EifCLy2BVhhziyf2eyAExbSn8a6G27MWN0WPys50G_-PFY2w8nhC9ZwGkxGGkTe9RpK50lnDIu3d-n8hbLBdFe2WtgDuVeSuS2kj437LrlpcmZQjDmKeDoO8wENrdm-2NegLFTUQJipaE11E7lxkWEwz6nS",
        readTime: "8 phút đọc",
        publishedAt: "2026-01-19T00:00:00",
        slug: "review-vision-pro-2"
    },
    {
        id: 4,
        category: "DI ĐỘNG",
        title: "Top 5 smartphone đáng mua nhất phân khúc cận cao cấp 2024",
        excerpt: "Tổng hợp những mẫu điện thoại có hiệu năng trên giá thành tốt nhất hiện nay mà bạn không nên bỏ qua.",
        thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuC4kstdNK-kSdT_U1rPlfsCaM867Jx__WRteajOTOVamMIxLJ1h6qvm6wyNvqjEBnSjz1Uc3MITQeAkIGcCwEIkzRwPe6FOPUwQz_55m5Xm9mwEugGYlqXbnw1uaHFdItqp6L5jdbcNZmGD1ohcarD4bix6aOK_OyLm8b7vEkNK9IqxqsctZnFRTZaB5uB7peCFc7vqUHvoO53483mXgGAMXkgxPfBkeG2614Sg-5c89H7AH_-9RMi7cv8FKmAXIzUtrMFzvuRVrATG",
        readTime: "6 phút đọc",
        publishedAt: "2026-01-18T00:00:00",
        slug: "top-smartphone-can-cao-cap"
    },
    {
        id: 5,
        category: "LAPTOP",
        title: "MacBook Pro M4: Sức mạnh đồ họa vượt ngoài mong đợi?",
        excerpt: "Các bài benchmark đầu tiên cho thấy hiệu năng GPU tăng 40% so với thế hệ trước.",
        thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuAYlNKU4-jT-diJE6DMtJTBlaQ-7iSRhAZpYUFVRd9MXdBBcwjYjf3TvYFBxX9FW6ocQuuuJCqlXa6iFJCfCVe8l8qMuO7wjx-fVGCvQKTQt8L5Ztt2XCT2XMtXtYzKlBreZGhuINBUDY2BOEr06icTqaZB3deNfHjAhH6qqnuMql4MuQGXtL0j5CWe_th7M-7FJeDZe7jHE9EA5DvFDKQHI3phaIWvoaF1CF7KaiwwMmUtB7_N0G2fQrQbKQmVkPKdcHzWWR91so1V",
        readTime: "4 phút đọc",
        publishedAt: "2026-01-17T00:00:00",
        slug: "macbook-pro-m4"
    },
    {
        id: 6,
        category: "SMART HOME",
        title: "Chuẩn Matter 2.0 ra mắt: Kết nối mọi thiết bị trong nhà bạn",
        excerpt: "Không còn nỗi lo về việc thiết bị Apple không nói chuyện được với Google Home.",
        thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuBht_i4SR8Lct0FgIwRDJUSMCsoL9RzeXTgk1nvHq8-HWq_q6y_3bLw-Uetzq9L51ogC7W4WWYXa22KeNhCYGl96qycP3OYAjzMDLAqIuD1Tfdlm-yA2VMZhg6rHyvIHyc7Z9XxCmlvgG397hFMcfozgkPSFg49nLuBOXozrnkzEXIw5OL-NqHvKoEsWdMkDuOkbGypF-YQj983TKzqYVODKRvKkPBCfLhIanPLvzeIJWzdOkeUXitwPLSGShjNkjTa9PvA3BxsP72Z",
        readTime: "3 phút đọc",
        publishedAt: "2026-01-16T00:00:00",
        slug: "chuan-matter-2"
    },
    {
        id: 7,
        category: "THỦ THUẬT",
        title: "5 mẹo tăng tuổi thọ pin cho smartphone bạn cần biết",
        excerpt: "Những thói quen sạc pin sai lầm mà 90% người dùng mắc phải và cách khắc phục.",
        thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQ91UBT3avxCzA86Z5-bGyY2VPbtj7oloGTO1XiuSmYyYDq0UGlHv1Sa3ICvECprrNOab87Qzk0TPNDX_vvYFHFoQOqWZH3EFt0REw4Dz-y-rBqxEbUAgWrGN00sChX_DnAuhXopinGfQJOKYIAM9qHaZFN-MgvXyc6lPXZnxcC1eNYwswZiI3XmVwitt-nA56K0MS6MutZc6LjP4eXbMaqoQxrVScrShaD25NeoDUoY-5iwGKCegonvYGxHw1k7O1tnfbhlmXMRTV",
        readTime: "7 phút đọc",
        publishedAt: "2026-01-15T00:00:00",
        slug: "tang-tuoi-tho-pin"
    }
];

module.exports = newsList;