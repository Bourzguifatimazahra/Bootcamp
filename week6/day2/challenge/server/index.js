const express = require('express');
const router = express.Router();
const userRoutes = require('./userRoutes');

router.use('/user', userRoutes);

module.exports = router;
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // Middleware to parse JSON requests

// Set up routes
app.use('/api', require('./routes'));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
