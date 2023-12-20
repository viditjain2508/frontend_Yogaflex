# **YogaFlex**

## About
Welcome to YogaFlex, where we are dedicated to providing a seamless and user-friendly experience for individuals embarking on a journey toward health and wellness through our monthly yoga classes.

## Requirements to Join Our Classes
- **Age Limit:** Participants must be within the age range of 18-65 to enroll in our monthly classes.
- **Payment Structure:** Fees are to be paid on a month-to-month basis. Participants can make payments at any time during the month but are required to pay for the entire month.
- **Monthly Fee:** The monthly fee for our classes is 500/- Rs INR.
- **Batch Options:** We offer four batches a day: 6-7AM, 7-8AM, 8-9AM, and 5-6PM. Participants have the flexibility to choose any batch for a month and can switch to a different batch in the following month.
- **Batch Transition:** Participants can move to any other batch next month but are required to stay in the same batch for the duration of the current month.

Join us on this transformative journey to health and well-being through our Yoga Classes. We look forward to having you as an integral part of our community!

## Implementation Details

This section provides insights into the technical aspects of YogaFlex:

- **Basic Validations:** Implemented through input taken using login/register functionalities.
- **API Handling:** Manages data such as user enrollment, payment status, batch change requests, etc.
- **APIs Implemented:**
  - `batchChangeReq`: Handles batch change requests from users.
  - `makePayment`: Processes user payments.
  - `checkPaymentStatus`: Verifies the payment status of a user.
  - `login` and `signup`: APIs for user authentication.

- **Payment and Batch Change Logic:**
  - **Payment Processing:** Utilizes the `CompletePayment()` mock/blackbox function.
  - **Batch Change:** Automatically executed as the new month begins using cron jobs.
  - **Account Deletion:** If a user fails to make a payment by the last date of the month, their account will be deleted.

These implementations ensure a smooth and efficient operation of YogaFlex, providing users with a hassle-free experience in managing their classes and payments.

## ER - Diagram

![YogaFlex drawio](https://github.com/viditjain2508/backend/assets/86849539/fb9422b4-3fc1-4c6f-8392-a1a5a443485b)

- **Entities:**
  - **User:** Participants with attributes - userId, age, name, email, password, batchid. Can make payments and change batches.
  - **Payment:** Records of payments with attributes - paymentid, userid, paymentstatus to check whether the user has paid or not.
  - **Change Batch (Weak):** Records batch change requests with attributes - userid, batchId.

- **Relations:**
  - **Will do:** Relationship between users and their payments.
  - **Can (Weak):** Optional relationship between users and their batch change requests.

## Database Schema

![Database Schema](https://github.com/viditjain2508/frontend_Yogaflex/assets/86849539/2de46581-da0c-4479-b491-686290b84ffe)

There are three tables in the database - user, batchChange, payments. 'user' stores user details, 'batchChange' stores batch change requests by users, and 'payments' stores the payment status of users.

## Getting Started

### 1. Clone Repositories

- Clone the frontend repository:
  ```bash
  git clone https://github.com/viditjain2508/frontend_Yogaflex.git
  ```

- Clone the backend repository:
  ```bash
  git clone https://github.com/viditjain2508/backend.git
  ```

### 2. Install Dependencies

#### Backend Dependencies
Navigate to the `backend` folder and install the necessary dependencies:
```bash
cd backend
npm install cors express mysql node-cron nodemon
```

#### Frontend Dependencies
Navigate to the `frontend` folder and install the required dependencies:
```bash
cd frontend
npm install @testing-library/jest-dom @testing-library/react @testing-library/user-event react react-dom react-router-dom react-scripts web-vitals
```

### 3. Setup Database

- Open MySQL Workbench and run the following commands to create the necessary tables for Yogaflex. Ensure to change the hostname and port number as per your setup.

```sql
CREATE TABLE user (
    userid INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    email VARCHAR(30) NOT NULL,
    password VARCHAR, 
    age INT NOT NULL,
    batchId VARCHAR(11) NOT NULL,
    CONSTRAINT uc_user_email UNIQUE (email)
);

CREATE TABLE Batchchange (
    id INT PRIMARY KEY AUTO_INCREMENT,
    userId INT,
    batchChangeRequestTo VARCHAR(11),
    FOREIGN KEY (userId) REFERENCES user(userid)
);

CREATE TABLE Payments (
    id INT PRIMARY KEY AUTO_INCREMENT,
    userid INT NOT NULL,
    paymentstatus TINYINT,
    FOREIGN KEY (userid) REFERENCES user(userid)
);
```

### 4. Run the Application

- Open a terminal in the `backend` folder and run:
  ```bash
  npm start
  ```

- Open another terminal in the `frontend` folder and run:
  ```bash
  npm start
  ```

Now, the Yogaflex application is up and running. Access it through your browser and enjoy! 🧘‍♀

