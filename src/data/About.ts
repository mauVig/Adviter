
interface AboutData {
    id: number;
    title: string;
    description: string;
    imgUrl: string;
    back?: string;
    color?: string;
}

export const aboutData:AboutData[] = [
    {
        id: 1,
        title: 'Optimizing the customer experience: the role of AI in ecommerce',
        description: 'AI in ecommerce optimizes the customer experience with personalization, fast attention and more effective searches.',
        imgUrl: '/aboutPick/About1.jpg',
        back: '#ededed',
        color:'#0078ff'
    },
    {
        id: 2,
        title: 'The technological breakthrough in banking security',
        description: 'AI is transforming the way financial institutions approach fraud detection and  prevention. Discover the key points on this topic in this article.',
        imgUrl: '/aboutPick/About2.jpg',
        back: '#000755',
        color:'#0078ff '
    },
    {
        id: 3,
        title: 'The impact of artificial intelligence on cybersecurity',
        description: 'In an increasingly complex digital world, cybersecurity and artificial intelligence are emerging as a powerful combination to protect our systems and data. ',
        imgUrl: '/aboutPick/About3.jpg',
        back: '#0078ff',
        color:'#000755'
    },
    {
        id: 4,
        title: 'Transforming Finance and Insurance with Generative AI: Enhancing Customer Engagement and Operational Efficiency',
        description: 'Discover how Generative AI and Large Language Models are revolutionizing the finance and insurance industries, enhancing customer engagement, and optimizing operational efficiency. Learn about AI-driven innovation, personalized marketing, and cutting-edge applications transforming business processes.',
        imgUrl: '/aboutPick/About4.jpg',
        back: '#3c3c3b',
        color:'#ededed'
    }
]