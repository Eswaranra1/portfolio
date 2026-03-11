import ContactMessage from '../models/ContactMessage.js';

/**
 * @route   POST /api/contact
 * @desc    Submit contact form message
 * @access  Public
 */
export const submitContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const contactMessage = new ContactMessage({
      name,
      email,
      message,
    });

    await contactMessage.save();

    res.status(201).json({
      success: true,
      message: 'Thank you for your message. I will get back to you soon!',
      data: {
        id: contactMessage._id,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to send message',
      error: error.message,
    });
  }
};
