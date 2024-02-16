# Hospital API for COVID-19 Management - MongoDB
## This API is designed for doctors and patients in a government-allocated hospital for COVID-19 testing, quarantine, and patient well-being.
## [Hosted link](https://hospital-api-ewnz.onrender.com)
## [Video link](https://drive.google.com/file/d/1Z3wm8J3OFbNMMrgSowbP_H8Rgx7EVMaN/view?usp=drive_link)
## User Types
* Doctors
- Patients
- Authentication
- Doctor Login
- Endpoint: POST /doctors/login

## Description: Log in with a username and password to get a JWT for authentication.

- Doctor Registration
- Endpoint: POST /doctors/register

- Description: Register a new doctor with a username and password.

- Patient Management
- Patient Registration
- Endpoint: POST /patients/register

## Description: Register a new patient using their phone number. If the patient already exists, return the patient information.

- Report Creation
- Endpoint: POST /patients/:id/create_report

## Description: After a checkup, a doctor can create a report for a patient.

- Get All Reports of a Patient
- Endpoint: GET /patients/:id/all_reports

## Description: List all the reports of a patient, ordered from oldest to latest.

- Report Management
- Get Reports by Status
- Endpoint: GET /reports/:status

##Video Explaination
https://github.com/suraj7546/Hospital-Api/assets/92979091/9b219a3b-c5ff-45de-8c00-3fbaf5348124

##Screenshots
