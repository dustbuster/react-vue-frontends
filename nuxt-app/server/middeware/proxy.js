import { createProxyMiddleware } from 'http-proxy-middleware';

export default defineEventHandler((event) => {
  const proxy = createProxyMiddleware('/api', {
    target: 'https://test_app.testdev',
    changeOrigin: true,
    pathRewrite: { '^/api': '' },
  });
  console.log('You are in the middleware.')
  return new Promise((resolve, reject) => {
    proxy(event.req, event.res, (err) => {
      if (err) reject(err);
      else resolve();
    });
  });
});
