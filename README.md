# 🌍 Cornell Climate in Health Hackathon - Backend

This repository contains the **Node.js/Express backend** for the Cornell Climate in Health Hackathon project.  
It provides **email and notification services** using **AWS Simple Email Service (SES)** and connects with the [frontend repository](https://github.com/konradkop/cornellClimateHackathon).  

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/konradkop/cornellClimateHackathonBackend.git
cd cornellClimateHackathonBackend
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Variables
You will need to create an AWS SES account
<br>
Create a .env file in the project root and configure the following:
```bash
PORT=3000

AWS_ACCESS_KEY_ID=<your-aws-access-key>
AWS_SECRET_ACCESS_KEY=<your-aws-secret-key>
AWS_REGION=us-east-1

VERIFIED_EMAIL=<an-email-verified-in-ses>
```

### 4. Run the Development Server
```bash
npm run dev
```
