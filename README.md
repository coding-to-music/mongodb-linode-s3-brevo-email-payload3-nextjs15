# mongodb-linode-s3-brevo-email-payload3-nextjs15

# 🚀 Course Membership Platform with Next.js and Payload CMS, MongoDB, TailwindCSS, Linode S3 (Object Storage) Brevo API (Email Service) 🚀

https://github.com/coding-to-music/mongodb-linode-s3-brevo-email-payload3-nextjs15

From / By https://github.com/10x-media/payload-course-membership-nextjs-tutorial

## GitHub

```java
git init
git add .
git remote remove origin
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:coding-to-music/mongodb-linode-s3-brevo-email-payload3-nextjs15.git
git push -u origin main
```

## Environment variables:

```java

```

# 🚀 Course Membership Platform with Next.js and Payload CMS

This project is a **Course Membership Platform** built using **Next.js** and **Payload CMS**. The platform allows for user authentication, secure content access, and media handling with services like **MongoDB**, **TailwindCSS**, **Linode S3**, and **Brevo** for email services.

## 🚀 Features

- **User Authentication** with secure login and protected routes.
- **Admin Dashboard** for managing courses and users.
- **Media Storage** using Linode S3 for file uploads.
- **Email Service** integrated via Brevo API (formerly Sendinblue).
- **Styled Frontend** using TailwindCSS for modern, responsive design.
- **MongoDB Integration** for data storage.

---

## 🛠️ Technologies Used

- **Next.js**
- **Payload CMS**
- **MongoDB**
- **TailwindCSS**
- **Linode S3** (Object Storage)
- **Brevo API** (Email Service)

---

## 📦 Getting Started

### Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (v16 or higher)
- **PNPM** (recommended) or **NPM**
- **MongoDB Atlas** or a local MongoDB instance

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/course-membership-platform.git
   cd course-membership-platform
   ```

### Environment Variables

### MongoDB Connection

MONGODB_URI=your_mongodb_connection_string
PAYLOAD_SECRET=your_secret

### Linode S3 Configuration

S3_BUCKET_NAME=your_bucket_name
S3_ACCESS_KEY=your_access_key
S3_SECRET_KEY=your_secret_key
S3_REGION=your_region
S3_ENDPOINT=https://your_s3_endpoint

### Brevo Email Configuration

BREVO_API_KEY=your_brevo_api_key
BREVO_EMAIL_ACTIVE=true
BREVO_SENDER_NAME=Your Name
BREVO_SENDER_EMAIL=info@yourdomain.com

### Next.js Secret

NEXT_PUBLIC_SECRET=your_nextjs_secret
