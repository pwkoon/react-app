**React Giphy Search App**
This is a simple and easy-to-use React application that allows users to search for GIFs using the GIPHY API. 
The app is built using TypeScript and uses the popular React framework.

**Features**
GIF Search: Users can enter a search query to find GIFs related to their search term.
Dynamic Display: The app dynamically displays the search results as the user types, providing real-time feedback.
Responsive Design: The application is designed to work seamlessly across different screen sizes, ensuring a great user experience on both desktop and mobile devices.

**Usage**
Enter a search query in the input field.
As you type, the app will automatically fetch and display related GIFs from the GIPHY API.
Scroll down to view more GIFs.
Click on any GIF to open it on selection dom element.

**There are some common tricky issues that you may encounter when calling the GIPHY API(IF YOU STORE IT IN .ENV), below with the solution worked for my case:**
**ERROR** :
**Uncaught ReferenceError: process is not defined in typescript**

**SOLUTION**:
1. In // https://vitejs.dev/config/
    export default defineConfig({
      plugins: [react()],
      **define: {'process.env': process.env}**
    })
2. **VITE_REACT_APP_GIPHY_API_KEY** //naming convention **VITE_REACT_APP**
3. **import.meta.env.VITE_REACT_APP_GIPHY_API_KEY** //where you want to call the API
4. rmb store in .env and .gitignore

PEACE!


