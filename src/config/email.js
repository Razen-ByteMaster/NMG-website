// Email delivery config for the contact form (EmailJS).
//
// How to get these values (2 minutes, free):
//   1. Sign up at https://www.emailjs.com (free account).
//   2. Email Services -> Add New Service -> Gmail -> connect razenmoamen@gmail.com.
//      After saving, copy the Service ID (looks like: service_xxxxxxxxxxx).
//   3. Email Templates -> Create New Template. Set:
//        - To Email:  razenmoamen@gmail.com
//        - Subject:   New Contact Request from {{business_name}}
//        - Message:   paste the contents of emailjs-template.html (in project root)
//      Copy the Template ID (looks like: template_xxxxxxxxxxx).
//   4. Account -> General -> API Keys. Copy the Public Key (looks like: XXXXXXXXXXX).
//
// Then replace the three placeholders below.

export const EMAILJS_SERVICE_ID = 'service_5ejpvbq'
export const EMAILJS_TEMPLATE_ID = 'template_y289e2r'
export const EMAILJS_PUBLIC_KEY = 'XeEMgyWkTY1IwzIZV'
export const EMAILJS_TO_EMAIL = 'razenmoamen@gmail.com'