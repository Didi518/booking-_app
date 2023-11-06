"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import useSWR from "swr";

import { getRooms } from "@/libs/apis";
import { Room } from "@/models/room";
import Search from "@/components/Search/Search";
import RoomCard from "@/components/RoomCard/RoomCard";

const Rooms = () => {
  const [roomTypeFilter, setRoomTypeFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const searchParams = useSearchParams();

  useEffect(() => {
    const searchQuery = searchParams.get("recherche");
    const roomType = searchParams.get("type");

    if (roomType) setRoomTypeFilter(roomType);
    if (searchQuery) setSearchQuery(searchQuery);
  }, [searchParams]);

  async function fetchData() {
    return getRooms();
  }

  const { data, error, isLoading } = useSWR("get/hotelRooms", fetchData);

  if (error) throw new Error("Données non récupérées");
  if (typeof data === "undefined" && !isLoading)
    throw new Error("Données non récupérées");

  const filterRooms = (rooms: Room[]) => {
    return rooms.filter((room) => {
      if (
        roomTypeFilter &&
        roomTypeFilter.toLowerCase() !== "tous" &&
        room.type.toLowerCase() !== roomTypeFilter.toLowerCase()
      ) {
        return false;
      }

      if (
        searchQuery &&
        !room.name.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false;
      }

      return true;
    });
  };

  const filteredRooms = filterRooms(data || []);

  return (
    <div className="container mx-auto pt-10">
      <Search
        roomTypeFilter={roomTypeFilter}
        searchQuery={searchQuery}
        setRoomTypeFilter={setRoomTypeFilter}
        setSearchQuery={setSearchQuery}
      />

      <div className="flex mt-20 justify-between flex-wrap">
        {filteredRooms.map((room) => (
          <RoomCard key={room._id} room={room} />
        ))}
      </div>
    </div>
  );
};

export default Rooms;
