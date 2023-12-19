# **YogaFlex - Readme**

## About
Welcome to YogaFlex, where we strive to offer a seamless and user-friendly experience for individuals embarking on a journey toward health and wellness through our monthly yoga classes.

## Requirements to Join Our Classes
- **Age Limit:** Participants must fall within the age range of 18-65 to enroll in our monthly classes.
- **Payment Structure:** Fees are to be paid on a month-to-month basis. Participants can make payments at any time during the month but are required to pay for the entire month.
- **Monthly Fee:** The monthly fee for our classes is 500/- Rs INR.
- **Batch Options:** We provide four batches a day: 6-7AM, 7-8AM, 8-9AM, and 5-6PM. Participants have the flexibility to choose any batch for a month and can switch to a different batch in the following month.
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
