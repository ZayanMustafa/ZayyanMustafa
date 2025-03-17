// pages/api/subscribe.js
export default async function handler(req, res) {
    console.log('API route hit'); // Debugging
    if (req.method === 'POST') {
      const { email } = req.body;
  
      console.log('Received email:', email); // Debugging
  
      try {
        const response = await fetch(
          `https://api.convertkit.com/v3/forms/${process.env.NEXT_PUBLIC_CONVERTKIT_FORM_ID}/subscribe`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              api_key: process.env.NEXT_PUBLIC_CONVERTKIT_API_KEY,
              email,
            }),
          }
        );
  
        const data = await response.json();
        console.log('ConvertKit response:', data); // Debugging
  
        if (response.ok) {
          res.status(200).json({ success: true });
        } else {
          res.status(400).json({ success: false, error: data.error.message || 'Unknown error' });
        }
      } catch (error) {
        console.error('Error in API route:', error); // Debugging
        res.status(500).json({ success: false, error: 'Internal Server Error' });
      }
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  }