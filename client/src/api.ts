// Mock API service for GitHub Pages deployment
// Since GitHub Pages only serves static content, this file provides mock functionality
// for the contact form and other API interactions

/**
 * Process contact form submission for GitHub Pages version
 */
export const submitContactForm = async (formData: {
  name: string;
  email: string;
  company?: string;
  service?: string;
  message: string;
}) => {
  // In a GitHub Pages deployment, we can't make server API calls
  // This mock function simulates a successful API response
  console.log('Contact form data (static version):', formData);
  
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  // Return a mock success response
  return {
    success: true,
    message: 'Thank you for your message! This is a static demo version. In a production environment, this would send your message to our team.'
  };
};

/**
 * This would typically interact with your backend API
 * For GitHub Pages, we use static/mock data
 */
export const getApiStatus = async () => {
  return {
    status: 'online',
    environment: 'static-demo'
  };
};