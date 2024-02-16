# Hospital API for COVID-19 Management - MongoDB + PostMan
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

## Video Explaination

https://github.com/suraj7546/Hospital-Api/assets/92979091/9b219a3b-c5ff-45de-8c00-3fbaf5348124

## Screenshots: PostMan

![Screenshot (64)](https://github.com/suraj7546/Hospital-Api/assets/92979091/6deb70b0-bded-438c-9c3b-08b3772a90cc)
![Screenshot (67)](https://github.com/suraj7546/Hospital-Api/assets/92979091/246d8cfc-7874-4ffb-bc03-4e019c5a83d5)

## Screenshots: MongoDB

![Screenshot (69)](https://github.com/suraj7546/Hospital-Api/assets/92979091/fe4e7ae5-05c4-4e00-ad82-e417dbceacb9)
![Screenshot (70)](https://github.com/suraj7546/Hospital-Api/assets/92979091/035b89c9-2366-46c2-a61c-ebae79172322)
