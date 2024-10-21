import React from "react";
import Image from "next/image";

const ProfileCard = () => {
  return (
    <section className="w-full mx-auto bg-base-100 rounded-lg">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-accent text-center mb-6">
        About Me
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <figure className="w-full lg:w-auto flex justify-center">
          <Image
            src="/assets/blovely_photo2.jpg"
            alt="Photo of Britney Lovely, owner of I Dream of Buttercream"
            width={400}
            height={400}
            className="object-cover rounded-box"
          />
        </figure>
        <div className="text-secondary text-lg md:text-xl leading-relaxed">
          <p className="mb-4">
            Hello! I'm Britney Lovely, the face behind "I Dream of Buttercream."
            I've always had a passion for baking and have turned that passion
            into a business. Every cake I create is made with the finest
            ingredients and a lot of love.
          </p>
          <p>
            Whether it's a birthday, wedding, or any special occasion, I'm here
            to make your celebration sweeter. Baking is not just my profession
            but my way of bringing joy to people's lives. Each creation is
            unique and crafted to perfection, reflecting the joy and celebration
            in your life.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProfileCard;
