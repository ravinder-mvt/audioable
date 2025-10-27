import fbIcon from "../assets/asset 14.svg";
import twIcon from "../assets/asset 15.svg";
import instIcon from "../assets/asset 16.svg";
import headphone from "../assets/image-headphones.png"
import speaker from "../assets/smallSpeak.png"
import mainImg from "../assets/headphone.png";
import headphoneImg from "../assets/head4.jpg";
import head2 from "../assets/head4.jpg";
import head3 from "../assets/headphone3.jpg";
import earphones from "../assets/asset 9.png"
// import headphone from "../assets/asset 12.jpeg"
export const products = [
    {
        heading: "Headphones",
        img: headphone,
        link: "/headphones"

    }, {
        heading: "Speakers",
        img: speaker,
        link: "/speakers"
    }, {
        heading: "earphones",
        img: earphones,
        link: "/earphones"
    }
]
export const heroSectionProducts = [
    {
        heading: "XX99 Mark II Headphones",
        description: "Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.",
        slug: "xx99-mark-ii-headphones"
    }
]

export const navTags = [
    {
        name: "Home",
        link: "/"
    }, {
        name: "Headphones",
        link: "/headphones"
    },
    {
        name: "Speakers",
        link: "/speakers"
    }, {
        name: "Earphones",
        link: "/earphones"
    }
]
export const socialTags = [
    {
        name: "Facebook",
        icon: fbIcon
    }, {
        name: "Twitter",
        icon: twIcon
    }, {
        name: "Instagram",
        icon: instIcon
    }
]

// here we will store the storage data

export const storeData = [
    {
        id: 1,
        slug: "xx99-mark-ii-headphones",
        title: "XX99 Mark II Headphones",
        subTitle: "New Product",
        description:
            "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
        image: mainImg,
        reverse: false,
        price: "$1,750",
        features:
            "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.",
        feat: " It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat. The advanced Active Noise Cancellation with built-in equalizer allows you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5.0 connectivity and 17-hour battery life, the XX99 Mark II headphones give you superior sound, cutting-edge technology, and a modern design aesthetic.",

        content: [
            "1x Headphone unit",
            "2x Replacement earcups",
            "1x User manual",
            "1x 3.5mm 5m audio cable",
            "1x Travel bag",
        ],
    },
    {
        id: 2,
        slug: "xx99-mark-i-headphones",
        title: "XX99 Mark I Headphones",
        subTitle: "New Product",
        description:
            "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
        image: head2,
        reverse: true,
        price: "$1,950",
        features:
            "Crafted with precision components, the XX99 Mark I ensures an authentic listening experience for professionals and enthusiasts alike.",
        feat: "With a focus on sonic clarity and comfort, it’s ideal for long studio sessions or immersive listening at home.",
        content: [
            "1x Headphone unit",
            "2x Replacement earcups",
            "1x User manual",
            "1x 3.5mm 5m audio cable",
        ],
    },
    {
        id: 3,
        slug: "xx59-headphones",
        title: "XX59 Headphones",
        subTitle: "New Product",
        description:
            "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
        image: head3,
        reverse: false,
        price: "$3,750",
        features:
            "Lightweight and portable, the XX59 provides balanced sound with solid bass and clean highs. Designed for travel and daily use, it combines reliability, comfort, and sound precision in one elegant package.",
        feat: "More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.",
        content: [
            "1x Headphone unit",
            "2x Replacement earcups",
            "1x User manual",
            "1x 3.5mm 5m audio cable",
        ],
    },
    {
        id: 4,
        slug: "xx99-mark-ii-headphones-demo",
        title: "XX99 Mark II Headphones (Demo)",
        subTitle: "New Product",
        description:
            "Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.",
        image: headphone,
        reverse: false,
        price: "$3,750",
        features:
            "The demo version offers the same stunning design and build quality, allowing users to preview premium sound fidelity and craftsmanship.",
        feat: "The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.",
        content: [
            "1x Headphone unit",
            "1x Carry case",
            "1x User manual",
        ],
    },
];