import React from "react";

const ProfileCard = () => {
  return (
    <div className="card md:card-side w-full md:w-2/3 bg-base-100 rounded-xl shadow-xl">
      <figure>
        <img
          src="/assets/blovely_photo2.jpg"
          alt="Profile Image"
          className="object-cover w-full h-full"
        />
      </figure>
      <div className="card-body text-primary">
        <p className="font-semibold mb-2">
          Hello! I'm Britney Lovely, the face behind "I Dream of Buttercream."
          I've always had a passion for baking and have turned that passion into
          a business. Every cake I create is made with the finest ingredients
          and a lot of love. Whether it's a birthday, wedding, or any special
          occasion, I'm here to make your celebration sweeter.
        </p>
        <p className="font-semibold">
          Baking is not just my profession but my way of bringing joy to
          people's lives. Each creation is unique and crafted to perfection,
          reflecting the joy and celebration in your life.
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
