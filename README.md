# Time-Series Data Visualization Web Application

This project is a web application built for visualizing time-series data captured from sensors in a factory. The application consists of a Python backend, a React frontend, and a MySQL database for storage.

## Tech Stack

- **Backend**: Python (FastAPI)
- **Frontend**: React
- **Database**: MySQL

## Setup Instructions

### Backend

1. Clone the repository:

   ```
   git clone https://github.com/azandabot/data-prophet-full-stack.git
   ```

2. Navigate to the backend directory:

   ```
   cd backend
   ```

3. Create a virtual environment:

   ```
   python -m venv venv
   ```

4. Activate the virtual environment:

   - On Windows:

     ```
     venv\Scripts\activate
     ```

   - On macOS/Linux:

     ```
     source venv/bin/activate
     ```

5. Install dependencies:

   ```
   pip install -r requirements.txt
   ```

6. Set up the MySQL database:

   - Create a MySQL database named `timeseries_db`.
   - Update the database connection settings in `backend/.env` file.

7. Run the backend server:

   ```
   uvicorn main:app --reload
   ```

### Frontend

1. Navigate to the frontend directory:

   ```
   cd frontend
   ```

2. Install dependencies:

   ```
   yarn
   ```

3. Start the development server:

   ```
   yarn dev
   ```

4. Access the web application at `http://localhost:3000` in your browser.

## Project Structure

- `backend/`: Contains the Python backend code.
- `frontend/`: Contains the React frontend code.
- `database/`: Contains SQL scripts for database setup.

## Additional Information

For any queries about this project and its setup mailto:judah.zama@gmail.com
