import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import { Room } from "@/models/room";

type Props = {
  room: Room;
};

const RoomCard: FC<Props> = (props) => {
  const {
    room: { coverImage, description, isBooked, name, price, slug, type },
  } = props;

  return (
    <div className="rounded-xl w-72 mb-10 mx-auto md:mx-0 overflow-hidden text-black">
      <div className="h-60 overflow-hidden">
        <Image
          src={coverImage.url}
          alt={name}
          width={250}
          height={250}
          className="img scale-animation"
        />
      </div>

      <div className="p-4 bg-white">
        <div className="flex justify-between text-xl font-semibold">
          <p>{name}</p>
          <p>{price}€</p>
        </div>

        <p className="pt-2 text-xs">Chambre {type}</p>

        <p className="pt-3 pb-6">{description.slice(0, 100)}...</p>

        <Link
          href={`/chambres/${slug.current}`}
          className="bg-primary inline-block text-center w-full py-4 rounded-xl text-white text-xl font-bold hover:-translate-y-2 hover:shadow-lg transition-all duration-500"
        >
          {isBooked ? "OCCUPEE" : "RESERVEZ"}
        </Link>
      </div>
    </div>
  );
};

export default RoomCard;
