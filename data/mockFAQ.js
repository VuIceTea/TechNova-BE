// Mock data for FAQ (Frequently Asked Questions)
export const mockFAQ = [
    {
        id: 'faq-1',
        question: 'Chính sách bảo hành của TechNova như thế nào?',
        answer: 'Tất cả sản phẩm tại TechNova đều được bảo hành chính hãng. Thời gian bảo hành từ 12-36 tháng tùy theo loại thiết bị. Khách hàng có thể mang thiết bị đến bất kỳ cửa hàng nào của TechNova hoặc gửi qua đường bưu điện để được hỗ trợ.'
    },
    {
        id: 'faq-2',
        question: 'Làm sao để theo dõi đơn hàng thiết bị của tôi?',
        answer: 'Bạn có thể truy cập vào mục "Tài khoản" > "Đơn hàng của tôi" để xem trạng thái thời gian thực. Ngoài ra, mã vận đơn sẽ được gửi qua email ngay khi đơn hàng được bàn giao cho đơn vị vận chuyển.'
    },
    {
        id: 'faq-3',
        question: 'Quy trình đổi trả sản phẩm lỗi diễn ra ra sao?',
        answer: 'TechNova hỗ trợ đổi mới 1-1 trong vòng 30 ngày đầu tiên nếu sản phẩm có lỗi từ nhà sản xuất. Vui lòng giữ nguyên hộp và phụ kiện đi kèm để đảm bảo đủ điều kiện đổi trả.'
    },
    {
        id: 'faq-4',
        question: 'Tôi cần hỗ trợ cài đặt thiết bị mới mua?',
        answer: 'Đội ngũ kỹ thuật của chúng tôi sẵn sàng hỗ trợ cài đặt qua UltraView/TeamViewer hoặc hướng dẫn qua video call. Vui lòng liên hệ Chat trực tuyến để đặt lịch hỗ trợ kỹ thuật.'
    }
];

// Mock data for support contact channels
export const mockSupportChannels = [
    {
        id: 'channel-1',
        name: 'Chat trực tuyến',
        description: 'Hỗ trợ 24/7. Nhấn để bắt đầu trò chuyện ngay với chuyên viên.',
        icon: 'chat',
        action: 'chat',
        available: true
    },
    {
        id: 'channel-2',
        name: 'Tổng đài hỗ trợ',
        description: '1900 8888. Hoạt động từ 8:00 - 22:00 hàng ngày kể cả lễ tết.',
        icon: 'call',
        action: 'phone',
        phone: '1900 8888',
        available: true
    },
    {
        id: 'channel-3',
        name: 'Email hỗ trợ',
        description: 'support@technova.vn. Chúng tôi sẽ phản hồi trong vòng 24 giờ.',
        icon: 'mail',
        action: 'email',
        email: 'support@technova.vn',
        available: true
    }
];

// Mock data for support request categories
export const mockSupportCategories = [
    { id: 'warranty', name: 'Bảo hành & Sửa chữa' },
    { id: 'order-status', name: 'Trạng thái đơn hàng' },
    { id: 'technical', name: 'Tư vấn kỹ thuật' },
    { id: 'complaint', name: 'Khiếu nại dịch vụ' },
    { id: 'other', name: 'Khác' }
];

export default {
    faq: mockFAQ,
    supportChannels: mockSupportChannels,
    supportCategories: mockSupportCategories
};
