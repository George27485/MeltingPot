import React, { useState } from 'react';

const Faq = () => {
  const [visibleAnswers, setVisibleAnswers] = useState([]);

  const toggleAnswer = (index) => {
    if (visibleAnswers.includes(index)) {
      setVisibleAnswers(visibleAnswers.filter((item) => item !== index));
    } else {
      setVisibleAnswers([...visibleAnswers, index]);
    }
  };

  return (
    <div className=" bg-gradient-to-b from-transparent to-black  flex flex-col w-screen h-screen">
      <div className="flex text-golden font-semibold md:text-7xl mb-8 mt-20 space-between">
        <p>FAQ</p>
      </div>
     
      <div>
        <p className='cursor-pointer hover:text-red-700' onClick={() => toggleAnswer(0)}><strong>How do I search for recipes on your website?</strong></p>
        {visibleAnswers.includes(0) && (
          <p>You can easily search for recipes by using the search bar located at the top of the page. Simply enter keywords such as ingredients, cuisine types, or dish names to find relevant recipes.</p>
        )}
      </div>
      <div>
        <p className='cursor-pointer hover:text-red-700' onClick={() => toggleAnswer(1)}><strong>Do you offer vegetarian or vegan recipes?</strong></p>
        {visibleAnswers.includes(1) && (
          <p>Yes, we offer a wide selection of vegetarian and vegan recipes to cater to various dietary preferences. You can use our filters to specifically search for these types of recipes.</p>
        )}
      </div>
      <div>
        <p className='cursor-pointer hover:text-red-700' onClick={() => toggleAnswer(2)}><strong>Can I filter recipes based on dietary restrictions or preferences?</strong></p>
        {visibleAnswers.includes(2) && (
          <p>Absolutely! Our website provides filters that allow you to refine your search based on dietary restrictions such as gluten-free, dairy-free, nut-free, and more.</p>
        )}
      </div>
      <div>
        <p className='cursor-pointer hover:text-red-700' onClick={() => toggleAnswer(3)}><strong>Are nutritional facts provided for the recipes?</strong></p>
        {visibleAnswers.includes(3) && (
          <p>Yes, nutritional information is provided for each recipe whenever possible. You can find details such as calories, protein, carbohydrates, fat content, and more listed on the recipe page.</p>
        )}
      </div>
      <div>
        <p className='cursor-pointer hover:text-red-700' onClick={() => toggleAnswer(4)}><strong>Do you have recipes for specific occasions or holidays?</strong></p>
        {visibleAnswers.includes(4) && (
          <p>Yes, we offer a variety of recipes tailored for different occasions and holidays throughout the year. Whether it's Thanksgiving, Christmas, or a summer barbecue, you'll find recipes to suit every celebration.</p>
        )}
      </div>
      <div>
        <p className='cursor-pointer hover:text-red-700' onClick={() => toggleAnswer(5)}><strong>How do I save or bookmark my favorite recipes?</strong></p>
        {visibleAnswers.includes(5) && (
          <p>You can save your favorite recipes by creating an account on our website. Once logged in, you'll have the option to bookmark recipes and access them later in your personalized recipe collection.</p>
        )}
      </div>
      <div>
        <p className='cursor-pointer hover:text-red-700' onClick={() => toggleAnswer(6)}><strong>Are the recipes suitable for beginners or experienced cooks?</strong></p>
        {visibleAnswers.includes(6) && (
          <p>Our recipes cater to cooks of all skill levels, from beginners to seasoned chefs. Each recipe includes clear instructions and tips to ensure success in the kitchen, regardless of your level of experience.</p>
        )}
      </div>
      <div>
        <p className='cursor-pointer hover:text-red-700' onClick={() => toggleAnswer(7)}><strong>Can I submit my own recipes to be featured on the website?</strong></p>
        {visibleAnswers.includes(7) && (
          <p>Yes, we welcome recipe submissions from our community members! If you have a delicious recipe you'd like to share, you can submit it through our website, and our team will review it for possible inclusion.</p>
        )}
      </div>
      <div>
        <p className='cursor-pointer hover:text-red-700' onClick={() => toggleAnswer(8)}><strong>Are there step-by-step instructions and videos for the recipes?</strong></p>
        {visibleAnswers.includes(8) && (
          <p>Many of our recipes include detailed step-by-step instructions, accompanied by photos or videos to guide you through the cooking process. These resources make it easier to follow along and recreate the dishes at home.</p>
        )}
      </div>
      <div>
        <p className='cursor-pointer hover:text-red-700' onClick={() => toggleAnswer(9)}><strong>Do you offer cooking tips or substitutions for ingredients?</strong></p>
        {visibleAnswers.includes(9) && (
          <p>Absolutely! In addition to the recipes themselves, we provide helpful cooking tips, ingredient substitutions, and variations to accommodate different preferences and dietary needs.</p>
        )}
      </div>
      <div>
        <p className='cursor-pointer hover:text-red-700' onClick={() => toggleAnswer(10)}><strong>Are the ingredients for the recipes easy to find in local grocery stores?</strong></p>
        {visibleAnswers.includes(10) && (
          <p>We strive to use common ingredients that are readily available in most grocery stores. However, we also provide suggestions for alternative ingredients or online sources if certain items are harder to find.</p>
        )}
      </div>
      <div>
        <p className='cursor-pointer hover:text-red-700' onClick={() => toggleAnswer(11)}><strong>Can I adjust serving sizes for the recipes?</strong></p>
        {visibleAnswers.includes(11) && (
          <p>Yes, our recipes typically include serving size information, and you can easily adjust the quantities to suit your needs using the built-in serving size scaler on the recipe page.</p>
        )}
      </div>
      <div>
        <p className='cursor-pointer hover:text-red-700' onClick={() => toggleAnswer(12)}><strong>Are there recipes suitable for meal prep or batch cooking?</strong></p>
        {visibleAnswers.includes(12) && (
          <p>Absolutely! We offer a selection of meal prep-friendly recipes that are perfect for batch cooking and planning ahead. Look for recipes that can be easily stored and reheated throughout the week.</p>
        )}
      </div>
      <div>
        <p className='cursor-pointer hover:text-red-700' onClick={() => toggleAnswer(13)}><strong>Do you offer international or ethnic recipes?</strong></p>
        {visibleAnswers.includes(13) && (
          <p>Yes, our recipe collection includes a diverse range of international and ethnic cuisines, allowing you to explore flavors from around the world right from your kitchen.</p>
        )}
      </div>
      <div>
        <p className='cursor-pointer hover:text-red-700' onClick={() => toggleAnswer(14)}><strong>How do I contact customer support if I have a question or issue with a recipe?</strong></p>
        {visibleAnswers.includes(14) && (
          <p>If you have any questions, concerns, or feedback regarding our recipes or website, please don't hesitate to contact our customer support team. You can reach us via email, phone, or through the contact form on our website, and we'll be happy to assist you.</p>
        )}
      </div>
      </div>
   
  );
};

export default Faq;
