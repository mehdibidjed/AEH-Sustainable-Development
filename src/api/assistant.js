import axios from 'axios';

// Create axios instance with base configuration
const chatbotApi = axios.create({
  baseURL: 'https://ai.assistance.aehsustainabledevelopment.com', // Replace with your backend URL
  timeout: 10000, // 10 seconds timeout
  headers: {
    'Content-Type': 'application/json',
  },
});

// Function to send message to chatbot
export const sendChatbotMessage = async (userMessage) => {
  try {
    const response = await chatbotApi.post('/api/chatbot/generate', {
      user_message: userMessage
    });
    
    // Assuming your backend returns data in this structure
    // Adjust based on your actual backend response
    return response.data;
    
  } catch (error) {
    // Handle different types of errors
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error('Server responded with error:', error.response.data);
      throw new Error(error.response.data.message || 'Server error occurred');
      
    } else if (error.request) {
      // The request was made but no response was received
      console.error('No response received from server');
      throw new Error('Unable to connect to the server. Please check your internet connection.');
      
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error('Error setting up request:', error.message);
      throw new Error('Failed to send message. Please try again.');
    }
  }
};