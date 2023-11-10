"use client";

import { Dispatch, FC, SetStateAction } from "react";
import { useRouter } from "next/navigation";

import { Booking } from "@/models/booking";

type Props = {
  bookingDetails: Booking[];
  setRoomId: Dispatch<SetStateAction<string | null>>;
};

const Table: FC<Props> = ({ bookingDetails, setRoomId }) => {
  const router = useRouter();

  return (
    <div className="overflow-x-auto max-w-[340px] rounded-lg mx-auto md:max-w-full shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th className="px-6 py-3">Nom de la Chambre</th>
            <th className="px-6 py-3">Prix Unitaire</th>
            <th className="px-6 py-3">Prix Total</th>
            <th className="px-6 py-3">Promo</th>
            <th className="px-6 py-3">No. de Jours Réservés</th>
            <th className="px-6 py-3">Jours Restants</th>
            <th className="px-6 py-3"></th>
          </tr>
        </thead>
        <tbody>
          {bookingDetails.map((booking) => (
            <tr
              key={booking._id}
              className="bg-white border-b hover:bg-gray-50"
            >
              <th
                onClick={() =>
                  router.push(`/chambres/${booking.hotelRoom.slug.current}`)
                }
                className="px-6 underline text-blue-600 cursor-pointer py-4 font-medium whitespace-nowrap"
              >
                {booking.hotelRoom.name}
              </th>
              <td className="px-6 py-4">{booking.hotelRoom.price}</td>
              <td className="px-6 py-4">{booking.totalPrice}</td>
              <td className="px-6 py-4">{booking.discount}</td>
              <td className="px-6 py-4">{booking.numberOfDays}</td>
              <td className="px-6 py-4">0</td>
              <td className="px-6 py-4">
                <button
                  onClick={() => {
                    setRoomId(booking.hotelRoom._id);
                  }}
                  className="font-medium text-blue-600 hover:underline"
                >
                  Note
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
