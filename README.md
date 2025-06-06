# Flame 

## Description
Developed by Mahad Khan, a student at the University of Maryland -- Flame is a powerful tool designed to help creators generate stunning YouTube thumbnails effortlessly. Our goal is to make design easy & accessible for everyone. 

Flame features an ML-powered thumbnail generator that leverages artificial intelligence to create professional-quality thumbnails, making content creation more efficient and accessible for creators of all skill levels.

## Target Browsers
This application is optimized for:
- **Desktop:** Chrome 90+, Firefox 90+, Safari 14+, Edge 90+

## Hosted -- Seamlessly on Vercel
Link : https://flame3.vercel.app

---

## Developer Manual

### How to Install the Application and Dependencies

1. **Prerequisites:**
- Node.js (v18 or higher)
- npm (v8 or higher)

2. **Clone the repository.**
```bash
git clone https://github.com/sprincee/Flame3.git
cd flame
```

3. **Install dependencies:**
```bash
npm install
```
This will install all the required dependencies including:
- **Core:** Next.js 15.0.2, React 18, TypeScript
- **UI/Animations:** Framer Motion, TailwindCSS, Radix UI components
- **Backend/Database:** Firebase, ReactFire
- **AI Integration:** OpenAI API
- **Communication:** SendGrid, Axios
- **Form Handling:** React Hook Form, Zod validation

4. **Set up environment variables:**
Create a `.env.local` file in the root directory with the following:
```
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id
OPENAI_API_KEY=your_openai_api_key
SENDGRID_API_KEY=your_sendgrid_api_key
```

**NOTE:** You'll need to obtain your own API keys from:
- Firebase: Create a project at https://console.firebase.google.com
- OpenAI: Register at https://platform.openai.com
- SendGrid: Register at https://sendgrid.com

### How to Run the Application on a Server

1. **Development mode:**
```bash
npm run dev
```
This will start a development server at `http://localhost:3000`

2. **Production build:**
```bash
npm run build
npm start
```
This will create an optimized production build and start a server at `http://localhost:3000`

3. **Deployment to Vercel:**
The application is configured for easy deployment to Vercel. Connect your GitHub repo to Vercel and:
- Add the required environment variables in Vercel's project settings
- Vercel will automatically build and deploy your application

### How to Run Tests

1. **Run ESLint:**
```bash
npm run lint
```

2. **Run type checking:**
```bash
npx tsc --noEmit
```

### API Endpoints

#### External API Integration

The application integrates with multiple external services to provide its functionality:

1. **AI-Powered Features:**
- OpenAI API integration for ML-powered thumbnail generation
- Automated design suggestions and optimization

2. **Communication Services:**
- SendGrid for email notifications and user communication

3. **Authentication & Storage:**
- Firebase Authentication for user management
- Firebase Storage for thumbnail and asset management

#### Database Interactions

Flame uses Firebase as its backend database and authentication provider:

1. **Authentication:**
   - Sign up, sign in, and sign out functionality via Firebase Auth

### Database Schema

Flame uses Firebase as the database provider with a NoSQL document-based structure. The specific schema details are flexible and adapted based on application needs.

### Known Bugs and Future Development Roadmap

#### Known Bugs
- **Thumbnail Generation:** Occasional issues with thumbnail generation not working consistently
- **Responsive Design:** Application is primarily optimized for desktop users

#### Future Development Roadmap
1. **Short-term improvements:**
- Fix thumbnail generation reliability issues
- Improve mobile responsiveness
- Enhanced error handling and user feedback

2. **Medium-term features:**
- Additional AI-powered design templates
- Batch thumbnail generation
- Advanced customization options
- User dashboard with generation history

3. **Long-Term Visions:**
- Integration with YouTube API for direct upload
- Collaborative features for teams
- Advanced analytics and performance tracking
- Mobile app version for on-the-go creation
