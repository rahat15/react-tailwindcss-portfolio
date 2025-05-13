const contributionsData = {
  publications: [
    {
      title: 'Development and Evaluation of a Smart Agricultural Chatbot',
      authors: 'Rahat Bhatia, Sanmeet Kaur',
      event: 'IEEE UEMCON 2024, New York, USA',
      description:
        'This research presents the development and evaluation of a farmer focused chatbot that provides real-time assistance by leveraging data from various agricultural research institutions. Using natural language processing (NLP), similarity search, and Maximum Marginal Relevance (MMR), the chatbot delivers accurate and diverse responses. Evaluation metrics, including response accuracy, speed, user satisfaction, and query resolution, highlight its effectiveness. A case study with 50 farmers revealed significant improvements in decision-making and productivity, showcasing the chatbot’s potential to enhance agricultural practices through technology.',
      // image: '/images/contributions/papers/chatbot.png',
      pdf: '/papers/chatbot.pdf',
      link: 'https://ieeexplore.ieee.org/document/10754742'
    },
    {
      title: 'Enhancing IoT Security through Advanced Machine Learning Models for Anomaly Detection',
      authors: 'Rahat Bhatia, Breeana Lang, Sanmeet Kaur',
      event: 'ICICT 2025, Hawaii, USA',
      description:
        'The rapid proliferation of the Internet of Things (IoT) has brought unprecedented connectivity, transforming industries and daily life. However, this integration comes with critical cybersecurity challenges, exposing IoT networks to sophisticated threats like Distributed Denial-of-Service (DDoS) attacks and other malicious activities. This paper investigates IoT vulnerabilities by analyzing the CICIoT2023 dataset and employing advanced machine learning techniques, specifically Random Forest and XGBoost, to detect and mitigate anomalies in network traffic. Through rigorous preprocessing, feature selection, and model tuning, both algorithms demonstrated exceptional performance, achieving accuracy and F1 scores exceeding 99%. XGBoost outperformed Random Forest in key metrics, showcasing its scalability and precision for complex datasets, while Random Forest proved advantageous for resource-constrained environments due to its simplicity and interpretability. This research not only highlights the strengths of machine learning in IoT security but also provides actionable insights for real-time anomaly detection and adaptive defenses. Future work aims to enhance these models for real-world deployment, adaptive learning, and broader applicability across diverse IoT ecosystems, ensuring a secure and resilient interconnected landscape.',
      //image: '/images/contributions/papers/iot.png',
      pdf: '/papers/iot.pdf'
    },
  ],
  creativeWork: {
    title: 'Too Far, Yet Too Close',
    description: 
      `“Too Far, Yet Too Close” takes you on an emotional journey. This enthralling anthology of love poetry immerses you in an explosion of emotions, revealing life's complexities in previously unexplored ways. Discover words that bring to life the undiscovered worlds of human experience within these pages. Prepare to be enchanted by the beautiful voyage of love's contrasts as you visit the emotional landscapes of each lyric. “Too Far, Yet Too Close” is a poetic journey that will touch your heart and leave you captivated by the intricate threads that weave us together, no matter how far apart we may be.`,
    pdf: '/images/contributions/books/poetry book.pdf',
    link: 'https://www.amazon.com/Too-Far-Yet-Close/dp/B0CF64SGYG',
    published: 'Published 2023'
  },
  passion: {
    cricket: {
      description:
        'Passionate about cricket — playing, watching, and sharing the joy of the game.',
      facebookLink: 'https://www.spokanecricketclub.org/',
      preview: '/images/cricket-page-preview.jpg',
      gallery: [
        {
          image: '/images/contributions/cricket/1.jpg',
        },
        {
          image: '/images/contributions/cricket/2.jpg',
        },
        {
          image: '/images/contributions/cricket/3.jpg',
        },
        {
          image: '/images/contributions/cricket/4.jpg',
        },
        {
          image: '/images/contributions/cricket/5.jpg',
        },
      ],
    },
    mentoring: [
      {
        caption: 'Workshop on Machine Learning at WSU',
        image: '/images/contributions/mentor/1.jpg',
      },
      {
        caption: 'LangChain workshop with 60+ students',
        image: '/images/contributions/mentor/2.jpg',
      },
      {
        caption: 'Explainable AI session with student researchers',
        image: '/images/contributions/mentor/3.jpg',
      },
      {
        caption: 'Explainable AI session with student researchers',
        image: '/images/contributions/mentor/4.jpg',
      },
      {
        caption: 'Explainable AI session with student researchers',
        image: '/images/contributions/mentor/5.jpg',
      },
      {
        caption: 'Explainable AI session with student researchers',
        image: '/images/contributions/mentor/6.jpg',
      },
      {
        caption: 'Explainable AI session with student researchers',
        image: '/images/contributions/mentor/7.jpg',
      },
      {
        caption: 'Explainable AI session with student researchers',
        image: '/images/contributions/mentor/8.jpg',
      },
      {
        caption: 'Explainable AI session with student researchers',
        image: '/images/contributions/mentor/9.jpg',
      },
    ],
  },
};

export default contributionsData;
