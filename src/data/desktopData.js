export const desktopFolders = [
    {
        id: 'about',
        title: 'About Me',
        type: 'about',
        icon: '👤',
        content: {
            intro: `I am a passionate student specializing in Artificial Intelligence and Data Science with a strong interest in building meaningful and practical technology solutions. I enjoy exploring how data and intelligent systems can be used to solve real-world problems and improve everyday life. Throughout my learning journey, I have worked on various projects that involve machine learning, web development, and AI-based applications, which have helped me gain hands-on experience and a deeper understanding of these fields.

I am constantly motivated to learn new tools, frameworks, and technologies that enhance my technical and problem-solving skills. I believe in learning by doing, and I actively experiment with ideas to turn concepts into working models and applications. Along with technical knowledge, I value creativity, consistency, and continuous improvement.

I am a self-driven learner who enjoys collaborating with others, sharing knowledge, and taking part in competitions and challenges that push me to perform better. My goal is to grow as a skilled AI professional and contribute to innovative projects that create a positive impact on society. I am committed to developing solutions that are efficient, ethical, and user-focused while continuously evolving with the fast-changing world of technology.`,
            skills: ["Artificial Intelligence", "Data Science", "Machine Learning", "Deep Learning", "Natural Language Processing", "Computer Vision"],
            techStack: ["Python", "TensorFlow", "PyTorch", "Scikit-Learn", "Keras", "Pandas", "NumPy", "OpenCV", "Flask", "React"]
        }
    },
    { id: 'calculator', title: 'Calculator', type: 'app', icon: '🔢', appId: 'calculator' },
    { id: 'tic-tac-toe', title: 'Tic Tac Toe', type: 'app', icon: '❌', appId: 'tictactoe' },
    {
        id: 'projects', title: 'Projects', type: 'projects', icon: '📁', items: [
            {
                id: "college-website-web-temporary",
                title: "College Website",
                description: "A temporary college website built using CSS.",
                tech: ["HTML", "CSS"],
                link: "https://github.com/lokavinashh2004/college-website-web-temporary",
                icon: "🏫"
            },
            {
                id: "avinashh-personal-assistant-rag",
                title: "Avinashh Personal Assistant (RAG)",
                description: "A Python RAG-based personal assistant project.",
                tech: ["Python"],
                link: "https://github.com/lokavinashh2004/avinashh-personal-assistant-rag",
                icon: "🤖"
            },
            {
                id: "My-Portfolio",
                title: "My Portfolio",
                description: "Your own portfolio implemented in TypeScript.",
                tech: ["React", "TypeScript"],
                link: "https://github.com/lokavinashh2004/My-Portfolio",
                icon: "🎨"
            },
            {
                id: "basic-flask-app",
                title: "Basic Flask App",
                description: "A simple Flask application created for learning purposes.",
                tech: ["Python", "Flask"],
                link: "https://github.com/lokavinashh2004/basic-flask-app",
                icon: "🐍"
            },
            {
                id: "i-will-guide-you",
                title: "I Will Guide You",
                description: "An AI-powered personalized learning path platform.",
                tech: ["HTML"],
                link: "https://github.github.com/lokavinashh2004/i-will-guide-you",
                icon: "🗺️"
            },
            {
                id: "Spam-SMS-Detection",
                title: "Spam SMS Detection",
                description: "A machine learning project for detecting spam SMS messages.",
                tech: ["Python", "ML"],
                link: "https://github.com/lokavinashh2004/Spam-SMS-Detection",
                icon: "🚫"
            },
            {
                id: "Medical-transcription-demo-project",
                title: "Medical Transcription Demo",
                description: "Demo project built during interview preparation.",
                tech: ["HTML"],
                link: "https://github.com/lokavinashh2004/Medical-transcription-demo-project",
                icon: "🏥"
            },
            {
                id: "MedTranscription-new",
                title: "MedTranscription-new",
                description: "A Python-based medical transcription demo.",
                tech: ["Python"],
                link: "https://github.com/lokavinashh2004/MedTranscription-new",
                icon: "🏥"
            },
            {
                id: "Medical-pdf-intern-selection-project-2",
                title: "Medical PDF Intern Project 2",
                description: "MedPDF – an AI-powered medical PDF summarizer.",
                tech: ["HTML"],
                link: "https://github.com/lokavinashh2004/Medical-pdf-intern-selection-project-2",
                icon: "📄"
            },
            {
                id: "Handwritten-to-text",
                title: "Handwritten to Text",
                description: "A Flask app for extracting handwritten text using LLaMA Vision.",
                tech: ["Python", "AI"],
                link: "https://github.com/lokavinashh2004/Handwritten-to-text",
                icon: "✍️"
            },
            {
                id: "lokavinashh2004",
                title: "lokavinashh2004",
                description: "GitHub profile project repository.",
                tech: ["GitHub"],
                link: "https://github.com/lokavinashh2004/lokavinashh2004",
                icon: "👤"
            },
            {
                id: "Ecg-Analysis-GDG_Hackathon",
                title: "ECG Analysis (GDG Hackathon)",
                description: "Streamlit-based ECG analysis using Gemini API for anomaly detection.",
                tech: ["Python", "AI"],
                link: "https://github.com/lokavinashh2004/Ecg-Analysis-GDG_Hackathon",
                icon: "💓"
            },
            {
                id: "Gdg-Interview",
                title: "GDG Interview Portal",
                description: "Web app platform for the GDG Ambassador interview process.",
                tech: ["JavaScript"],
                link: "https://github.com/lokavinashh2004/Gdg-Interview",
                icon: "🎤"
            },
            {
                id: "medaii",
                title: "MedAI (ECG Report Analyzer)",
                description: "AI-powered ECG report analyzer comparing historical and current data.",
                tech: ["HTML"],
                link: "https://github.com/lokavinashh2004/medaii",
                icon: "🩺"
            },
            {
                id: "Object-Detection-with-YOLOv7",
                title: "Object Detection with YOLOv7",
                description: "Real-time object detection using YOLOv7.",
                tech: ["Python", "AI"],
                link: "https://github.com/lokavinashh2004/Object-Detection-with-YOLOv7",
                icon: "👁️"
            },
            {
                id: "Object-Detection-using-YOLOv5",
                title: "Object Detection using YOLOv5",
                description: "Object detection project using YOLOv5.",
                tech: ["HTML"],
                link: "https://github.com/lokavinashh2004/Object-Detection-using-YOLOv5",
                icon: "👁️"
            },
            {
                id: "gdg-online-exam",
                title: "GDG Online Exam Portal",
                description: "A web-based online examination platform.",
                tech: ["JavaScript"],
                link: "https://github.com/lokavinashh2004/gdg-online-exam",
                icon: "📝"
            },
            {
                id: "Virtual-Pharmacy",
                title: "Virtual Pharmacy Website",
                description: "An AI-based virtual pharmacy to help with medicine suggestions.",
                tech: ["CSS"],
                link: "https://github.com/lokavinashh2004/Virtual-Pharmacy",
                icon: "💊"
            }
        ]
    },
    { id: 'notes', title: 'Notes', type: 'app', icon: '📝', appId: 'notes' },
    { id: 'snake', title: 'Snake', type: 'app', icon: '🐍', appId: 'snake' },
    {
        id: 'internship', title: 'Internship', type: 'internship', icon: '💼', content: {
            role: "Back End Engineer Intern",
            company: "Elimai.ai",
            location: "Remote",
            period: "Jun 2025 – Nov 2025",
            description: "Worked on production-grade backend and AI systems across healthcare and enterprise domains.",
            achievements: [
                "Built Shravan Speech-to-Text: A real-time transcription and analytics platform for customer–sales executive calls, delivering insights on conversational quality and sales pitch effectiveness.",
                "Engineered a medical data processing system for 18+ Apollo Spectra laboratories, reducing report generation time by 95%+ using React, Flask, and AWS (RDS & S3).",
                "Developed an AI benchmarking framework with LLM evaluation pipelines for multi-model comparison across AWS Bedrock and Azure AI Foundry."
            ],
            techUsed: ["React", "Flask", "PostgreSQL", "AWS S3", "AWS Bedrock", "Azure AI Foundry", "Python", "Node.js"],
            diagrams: []
        }
    },
    { id: 'calendar', title: 'Calendar', type: 'app', icon: '📅', appId: 'calendar' },
    { id: 'rps', title: 'RPS', type: 'app', icon: '✊', appId: 'rps' },
    { id: 'resume', title: 'Resume', type: 'resume', icon: '📄', lastUpdated: 'Jan 2026', fileName: 'T_Lok_Avinashh Resume.pdf' },
    { id: 'clock', title: 'Clock', type: 'app', icon: '⏰', appId: 'clock' },
    { id: 'guess-number', title: 'Guess No.', type: 'app', icon: '🔢', appId: 'guessnumber' }
];
