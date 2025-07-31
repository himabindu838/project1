// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// MongoDB Atlas connection
const MONGODB_URI = 'mongodb+srv://bindu9618:Hima%402003@cluster0.onyjrkd.mongodb.net/restaurant?retryWrites=true&w=majority';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
  retryWrites: true,
  w: 'majority'
})
.then(() => console.log('Connected to MongoDB Atlas successfully'))
.catch(err => {
  console.error('MongoDB Atlas connection error:', err);
  process.exit(1);
});

// Log DB connection
mongoose.connection.on('connected', () => {
  console.log(`Mongoose connected to: ${mongoose.connection.db.databaseName}`);
});
mongoose.connection.on('error', (err) => {
  console.error('Mongoose connection error:', err);
});

// Order Schema
const orderSchema = new mongoose.Schema({
  customerDetails: {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    landmark: String,
    city: { type: String, required: true },
    pincode: { type: String, required: true },
    paymentMethod: { type: String, default: 'cash_on_delivery' },
    specialInstructions: String
  },
  orderItems: [{
    name: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    veg: Boolean
  }],
  totalAmount: { type: Number, required: true },
  orderDate: { type: Date, default: Date.now },
  status: { type: String, default: 'pending' }
}, { collection: 'orders' });

// Booking Schema
const bookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  guests: { type: Number, required: true },
  specialRequests: String,
  bookingDate: { type: Date, default: Date.now },
  status: { type: String, default: 'confirmed' }
}, { collection: 'bookings' });

const Booking = mongoose.model('Booking', bookingSchema);
const Order = mongoose.model('Order', orderSchema);

// Middleware
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST']
}));
app.use(bodyParser.json());

app.post('/api/bookings', async (req, res) => {
  try {
    console.log("Incoming booking data:", req.body);

    const bookingData = {
      ...req.body,
      date: new Date(req.body.date + "T00:00:00Z")
    };

    const booking = new Booking(bookingData);
    await booking.save();

    console.log('Booking saved to MongoDB:', booking._id);

    res.status(201).json({
      success: true,
      message: 'Table booked successfully',
      bookingId: booking._id
    });
  } catch (error) {
    console.error('Booking save error:', error); // <-- Print full error
    res.status(500).json({
      success: false,
      error: error.message,
      stack: error.stack    // <-- Add stack trace for debugging
    });
  }
});

// GET: Fetch all bookings
app.get('/api/bookings', async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ date: 1 });
    res.json({
      success: true,
      count: bookings.length,
      data: bookings
    });
  } catch (error) {
    console.error('Booking fetch error:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// POST: Order endpoint
app.post('/api/orders', async (req, res) => {
  try {
    const order = new Order(req.body);
    const savedOrder = await order.save();
    console.log('Order saved to MongoDB:', savedOrder._id);

    res.status(201).json({
      success: true,
      orderId: savedOrder._id,
      totalAmount: savedOrder.totalAmount
    });
  } catch (error) {
    console.error('Order save error:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`MongoDB: ${mongoose.connection.host}/${mongoose.connection.db.databaseName}`);
});
