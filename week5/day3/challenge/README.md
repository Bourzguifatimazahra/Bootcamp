# **Currency Converter**

## **📌 Description**
This is a **Currency Converter** web application that allows users to convert between different currencies using real-time exchange rates from the **ExchangeRate-API**. The app provides a clean, responsive interface with support for over 160 currencies.

---

## **🚀 Features**
✅ **Real-time currency conversion**  
✅ **160+ supported currencies**  
✅ **Switch currencies with one click**  
✅ **Automatic conversion on input change**  
✅ **Error handling & user-friendly messages**  
✅ **Modern UI with responsive design**  

---

## **🛠 Setup & Installation**
### **1. Get an API Key**
- Sign up for a **free API key** at [ExchangeRate-API](https://www.exchangerate-api.com/)
- Replace the placeholder key in the code:
  ```javascript
  const API_KEY = 'YOUR_API_KEY_HERE'; // Replace with your key
  ```

### **2. Run the Application**
Simply open the **`index.html`** file in a web browser (Chrome, Firefox, Edge, etc.). No server required!

### **3. (Optional) Deploy Online**
- Upload to **GitHub Pages**, **Netlify**, or **Vercel** for live hosting.
- For security, avoid exposing your API key in frontend code in production.

---

## **🎯 How to Use**
1. **Enter an amount** in the input field.
2. **Select "From" currency** (e.g., USD).
3. **Select "To" currency** (e.g., EUR).
4. **Click "Convert"** or wait for auto-conversion.
5. **Switch currencies** using the **🔄 button** for quick reversal.

## **🔧 Troubleshooting**
- **"Failed to fetch" error?**  
  - Check your **API key** and **internet connection**.  
  - Ensure the API endpoint is reachable:  
    ```bash
    curl "https://v6.exchangerate-api.com/v6/YOUR_API_KEY/latest/USD"
    ```
- **Blank dropdowns?**  
  - Verify the `supportedCurrencies` array is loaded correctly.
 
## **📬 Contact**
For questions or improvements, feel free to open an issue or contribute!  

**Happy Converting!** 💰➡️💶