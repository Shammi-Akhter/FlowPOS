import { motion } from "framer-motion";

const upgrades = [
{
id: 1,
image: "/images/improve.webp",
title: "Improved Performance",
message: "Our new edition runs will be 2x faster than before."
},
{
id: 2,
image: "/images/EnhaceUI.webp",
title: "Enhanced UI",
message: "A modern, cleaner interface for better usability."
},
{
id: 3,
image: "/images/newfeature.webp",
title: "New Features",
message: "More tools and functionalities to boost productivity."
},
{
id: 4,
image: "/images/bug.jpeg",
title: "Bug Fixes",
message: "We will fix reported issues for a smoother experience."
},
];

const FutureUpdate = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8"> <div className="max-w-7xl mx-auto text-center mb-12"> <h1 className="text-4xl font-bold text-gray-900 mb-4">Project Upgrades</h1> <p className="text-lg text-gray-600">Check out what will be new in the latest edition of our project.</p> </div>

```
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">  
    {upgrades.map((upgrade) => (  
      <motion.div  
        key={upgrade.id}  
        whileHover={{ scale: 1.05 }}  
        initial={{ opacity: 0, y: 20 }}  
        animate={{ opacity: 1, y: 0 }}  
        transition={{ duration: 0.5, delay: upgrade.id * 0.2 }}  
        className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center text-center"  
      >  
        <img src={upgrade.image} alt={upgrade.title} className="w-20 h-20 object-cover mb-4" />  
        <h3 className="text-xl font-semibold mb-2">{upgrade.title}</h3>  
        <p className="text-gray-500 text-sm">{upgrade.message}</p>  
      </motion.div>  
    ))}  
  </div>  
</div>  
    );
};

export default FutureUpdate



