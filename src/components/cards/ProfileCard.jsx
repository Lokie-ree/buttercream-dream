import React from "react";
import Image from "next/image";

const ProfileCard = () => {
  return (
    <section className="card card-compact w-full bg-base-100 shadow-xl rounded-xl p-2">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-accent text-center mt-2 mb-4 md:mb-8">
        Meet the Owner
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center ">
        <figure className="w-full lg:w-auto flex justify-center">
          <Image
            src="/assets/blovely_photo2.jpg"
            alt="Photo of Britney Lovely, owner of I Dream of Buttercream"
            width={400}
            height={400}
            className="object-cover w-full h-full md:h-auto rounded-box"
          />
        </figure>
        <div className="text-secondary text-md md:text-lg lg:text-xl leading-relaxed mt-2">
          <p className="mb-4">
            Hello! I'm Britney Lovely, the face behind "I Dream of Buttercream."
            I've always had a passion for baking and have turned that passion
            into a business. Every cake I create is made with the finest
            ingredients and a lot of love.
          </p>
          <p className="mb-4">
            Whether it's a birthday, wedding, or any special occasion, I'm here
            to make your celebration sweeter.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProfileCard;
