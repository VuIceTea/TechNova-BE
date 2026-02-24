const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

const mockProducts = require('./data/mockProducts');
const mockNews = require('./data/mockNews');
const mockBanners = require('./data/mockBanners');
const mockCategories = require('./data/mockCategories');
const mockDeals = require('./data/mockDeals');
const mockTestimonials = require('./data/mockTestimonials');
const mockFeatures = require('./data/mockFeatures');

app.get('/api/products', (req, res) => {
    try {
        const { category, isFlashSale, limit } = req.query;
        let products = [...mockProducts];

        if (category && category !== 'all') {
            products = products.filter(p => p.category === category);
        }

        if (isFlashSale === 'true') {
            products = products.filter(p => p.isFlashSale === true);
        }

        if (limit) {
            products = products.slice(0, parseInt(limit));
        }

        res.json({
            success: true,
            data: products,
            total: products.length
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server error',
            error: error.message
        });
    }
});

app.get('/api/products/:slug', (req, res) => {
    try {
        const product = mockProducts.find(p => p.slug === req.params.slug);

        if (!product) {
            return res.status(404).json({
                success: false,
                message: 'Product not found'
            });
        }

        res.json({
            success: true,
            data: product
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server error',
            error: error.message
        });
    }
});

app.get('/api/news', (req, res) => {
    try {
        const { category, limit, featured } = req.query;
        let news = [...mockNews];

        if (category && category !== 'Tất cả') {
            news = news.filter(n => n.category === category);
        }

        if (featured === 'true') {
            news = news.filter(n => n.featured === true);
        }

        if (limit) {
            news = news.slice(0, parseInt(limit));
        }

        res.json({
            success: true,
            data: news,
            total: news.length
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server error',
            error: error.message
        });
    }
});

app.get('/api/news/:slug', (req, res) => {
    try {
        const newsItem = mockNews.find(n => n.slug === req.params.slug);

        if (!newsItem) {
            return res.status(404).json({
                success: false,
                message: 'News not found'
            });
        }

        res.json({
            success: true,
            data: newsItem
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server error',
            error: error.message
        });
    }
});

app.get('/api/banners', (req, res) => {
    try {
        res.json({
            success: true,
            data: mockBanners
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server error',
            error: error.message
        });
    }
});

app.get('/api/categories', (req, res) => {
    try {
        res.json({
            success: true,
            data: mockCategories
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server error',
            error: error.message
        });
    }
});

app.get('/api/deals/flash-sale', (req, res) => {
    try {
        res.json({
            success: true,
            data: mockDeals.flashSaleDeals
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server error',
            error: error.message
        });
    }
});

app.get('/api/deals/promo-products', (req, res) => {
    try {
        res.json({
            success: true,
            data: mockDeals.promoProducts
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server error',
            error: error.message
        });
    }
});

app.get('/api/deals/coupons', (req, res) => {
    try {
        res.json({
            success: true,
            data: mockDeals.coupons
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server error',
            error: error.message
        });
    }
});

app.get('/api/testimonials', (req, res) => {
    try {
        res.json({
            success: true,
            data: mockTestimonials
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server error',
            error: error.message
        });
    }
});

app.get('/api/features', (req, res) => {
    try {
        res.json({
            success: true,
            data: mockFeatures
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server error',
            error: error.message
        });
    }
});


// 404 handler
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: 'Endpoint not found'
    });
});

app.listen(PORT, () => {
    console.log(`🚀 TechNova Backend Server running on port ${PORT}`);
    console.log(`📍 API Base URL: http://localhost:${PORT}/api`);
});
