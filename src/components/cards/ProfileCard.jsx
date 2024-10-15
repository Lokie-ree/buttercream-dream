import React from "react";
import Image from "next/image";

const ProfileCard = () => {
  return (
    <section className="my-6">
      <div className="card md:card-side w-full md:w-2/3 bg-base-100 rounded-xl shadow-xl mx-auto">
        <h2 className="text-xl sm:text-3xl md:text-5xl font-bold text-accent mb-6">
          About Me
        </h2>
        <figure className="md:w-1/2">
          <Image
            src="/assets/blovely_photo2.jpg"
            alt="Photo of Britney Lovely, owner of I Dream of Buttercream"
            width={300}
            height={300}
            className="object-cover w-full h-full rounded-xl"
          />
        </figure>
        <div className="card-body text-primary md:justify-center md:w-1/2">
          <p className="font-semibold mb-2">
            Hello! I'm Britney Lovely, the face behind "I Dream of Buttercream."
            I've always had a passion for baking and have turned that passion
            into a business. Every cake I create is made with the finest
            ingredients and a lot of love. Whether it's a birthday, wedding, or
            any special occasion, I'm here to make your celebration sweeter.
          </p>
          <p className="font-semibold">
            Baking is not just my profession but my way of bringing joy to
            people's lives. Each creation is unique and crafted to perfection,
            reflecting the joy and celebration in your life.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProfileCard;
