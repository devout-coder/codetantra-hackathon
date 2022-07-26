module.exports = {
  // basePath: process.env.NODE_ENV === 'development' ? '' : '/directdevice',
  images: {
    deviceSizes: [320, 420, 768, 991, 1024, 1200, 1500],
    path: '/_next/image'
  },
  experimental: {
    modern: true,
    optimizeImages: true
  }
}
